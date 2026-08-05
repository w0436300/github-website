import json
import struct
import sys
from pathlib import Path


COMPONENTS = {5123: ('H', 2), 5125: ('I', 4)}


def align4(data, pad=b'\x00'):
    return data + pad * ((4 - len(data) % 4) % 4)


def main(source, destination, low, high):
    raw = Path(source).read_bytes()
    offset = 12
    chunks = {}
    while offset < len(raw):
        length, chunk_type = struct.unpack_from('<II', raw, offset)
        offset += 8
        chunks[chunk_type] = raw[offset:offset + length]
        offset += length
    document = json.loads(chunks[0x4E4F534A].decode('utf-8').rstrip('\x00 '))
    binary = bytearray(chunks[0x004E4942])
    primitive = document['meshes'][0]['primitives'][0]

    position_accessor = document['accessors'][primitive['attributes']['POSITION']]
    position_view = document['bufferViews'][position_accessor['bufferView']]
    position_start = position_view.get('byteOffset', 0) + position_accessor.get('byteOffset', 0)
    position_stride = position_view.get('byteStride', 12)
    xs = [struct.unpack_from('<f', binary, position_start + index * position_stride)[0] for index in range(position_accessor['count'])]

    index_accessor = document['accessors'][primitive['indices']]
    index_view = document['bufferViews'][index_accessor['bufferView']]
    code, width = COMPONENTS[index_accessor['componentType']]
    index_start = index_view.get('byteOffset', 0) + index_accessor.get('byteOffset', 0)
    indices = struct.unpack_from(f"<{index_accessor['count']}{code}", binary, index_start)
    selected = []
    for offset in range(0, len(indices), 3):
        triangle = indices[offset:offset + 3]
        if len(triangle) == 3 and all(low <= xs[index] <= high for index in triangle):
            selected.extend(triangle)
    if not selected:
        raise ValueError('No triangles matched the requested X range')

    while len(binary) % 4:
        binary.append(0)
    new_offset = len(binary)
    payload = struct.pack(f"<{len(selected)}{code}", *selected)
    binary.extend(payload)
    document['bufferViews'].append({'buffer': 0, 'byteOffset': new_offset, 'byteLength': len(payload), 'target': 34963})
    index_accessor['bufferView'] = len(document['bufferViews']) - 1
    index_accessor['byteOffset'] = 0
    index_accessor['count'] = len(selected)
    index_accessor['min'] = [min(selected)]
    index_accessor['max'] = [max(selected)]
    document['buffers'][0]['byteLength'] = len(binary)

    json_chunk = align4(json.dumps(document, separators=(',', ':')).encode('utf-8'), b' ')
    bin_chunk = align4(bytes(binary))
    total = 12 + 8 + len(json_chunk) + 8 + len(bin_chunk)
    output = bytearray(struct.pack('<4sII', b'glTF', 2, total))
    output.extend(struct.pack('<II', len(json_chunk), 0x4E4F534A))
    output.extend(json_chunk)
    output.extend(struct.pack('<II', len(bin_chunk), 0x004E4942))
    output.extend(bin_chunk)
    Path(destination).write_bytes(output)
    print(f'Selected {len(selected) // 3:,} triangles')


if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2], float(sys.argv[3]), float(sys.argv[4]))
