import io
import json
import struct
import sys
from pathlib import Path

from PIL import Image


def align4(data, pad=b'\x00'):
    return data + pad * ((4 - len(data) % 4) % 4)


def main(source, destination, max_size=1024):
    raw = Path(source).read_bytes()
    magic, version, _ = struct.unpack_from('<4sII', raw, 0)
    if magic != b'glTF' or version != 2:
        raise ValueError('Expected a GLB 2.0 file')

    offset = 12
    chunks = {}
    while offset < len(raw):
        length, chunk_type = struct.unpack_from('<II', raw, offset)
        offset += 8
        chunks[chunk_type] = raw[offset:offset + length]
        offset += length

    document = json.loads(chunks[0x4E4F534A].decode('utf-8').rstrip('\x00 '))
    binary = chunks[0x004E4942]
    image_views = {image['bufferView']: image for image in document.get('images', []) if 'bufferView' in image}
    rebuilt = bytearray()

    for index, view in enumerate(document.get('bufferViews', [])):
        start = view.get('byteOffset', 0)
        payload = binary[start:start + view['byteLength']]
        image = image_views.get(index)
        if image:
            with Image.open(io.BytesIO(payload)) as texture:
                texture.thumbnail((max_size, max_size), Image.Resampling.LANCZOS)
                output = io.BytesIO()
                texture.save(output, format='PNG', optimize=True, compress_level=9)
                payload = output.getvalue()
            image['mimeType'] = 'image/png'

        while len(rebuilt) % 4:
            rebuilt.append(0)
        view['byteOffset'] = len(rebuilt)
        view['byteLength'] = len(payload)
        rebuilt.extend(payload)

    document['buffers'][0]['byteLength'] = len(rebuilt)
    json_chunk = align4(json.dumps(document, separators=(',', ':')).encode('utf-8'), b' ')
    bin_chunk = align4(bytes(rebuilt))
    total = 12 + 8 + len(json_chunk) + 8 + len(bin_chunk)
    output = bytearray(struct.pack('<4sII', b'glTF', 2, total))
    output.extend(struct.pack('<II', len(json_chunk), 0x4E4F534A))
    output.extend(json_chunk)
    output.extend(struct.pack('<II', len(bin_chunk), 0x004E4942))
    output.extend(bin_chunk)
    Path(destination).parent.mkdir(parents=True, exist_ok=True)
    Path(destination).write_bytes(output)


if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2], int(sys.argv[3]) if len(sys.argv) > 3 else 1024)
