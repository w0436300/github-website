import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Html, useGLTF, useTexture } from '@react-three/drei';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';
import { islands, about } from '../data.js';
import { usePortfolioStore } from '../store.js';

const MODEL_ROOT = `${import.meta.env.BASE_URL || '/'}models/`;
const modelUrl = (file) => `${MODEL_ROOT}${file}?v=512`;

const islandModels = {
  ux: 'ux_island.glb',
  development: 'fullstack_island.glb',
  data: 'graphic_design_island.glb',
  featured: 'island_base.glb',
};

function Model({ file, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }) {
  const { scene } = useGLTF(modelUrl(file));
  const clone = useMemo(() => {
    const instance = scene.clone(true);
    instance.traverse((object) => {
      if (object.isMesh) {
        object.castShadow = true;
        object.receiveShadow = true;
      }
    });
    return instance;
  }, [scene]);
  return <primitive object={clone} scale={scale} position={position} rotation={rotation} />;
}

function Water() {
  const materialRef = useRef();
  const waterTexture = useTexture(`${import.meta.env.BASE_URL || '/'}textures/cartoon-water-base.png`);
  useMemo(() => {
    waterTexture.wrapS = THREE.RepeatWrapping;
    waterTexture.wrapT = THREE.RepeatWrapping;
    waterTexture.colorSpace = THREE.SRGBColorSpace;
    waterTexture.anisotropy = 4;
    waterTexture.needsUpdate = true;
  }, [waterTexture]);
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uMap: { value: waterTexture },
    uDeep: { value: new THREE.Color('#4ca8c9') },
    uShallow: { value: new THREE.Color('#d2f1f2') },
  }), [waterTexture]);
  useFrame((state) => {
    if (materialRef.current) materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
  });
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.38, 0]} receiveShadow>
      <planeGeometry args={[42, 30, 128, 96]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={`
          uniform float uTime;
          varying vec2 vUv;
          varying float vWave;
          varying vec3 vWorldPosition;

          void main() {
            vUv = uv;
            vec3 transformed = position;
            float broad = sin(position.x * 0.42 + uTime * 0.46) * 0.055;
            float cross = sin(position.y * 0.58 - uTime * 0.38) * 0.038;
            float detail = sin((position.x + position.y) * 1.25 + uTime * 0.72) * 0.016;
            float ripple = cos(length(position.xy) * 0.62 - uTime * 0.5) * 0.012;
            vWave = broad + cross + detail + ripple;
            transformed.z += vWave;
            vec4 worldPosition = modelMatrix * vec4(transformed, 1.0);
            vWorldPosition = worldPosition.xyz;
            gl_Position = projectionMatrix * viewMatrix * worldPosition;
          }
        `}
        fragmentShader={`
          uniform float uTime;
          uniform vec3 uDeep;
          uniform vec3 uShallow;
          uniform sampler2D uMap;
          varying vec2 vUv;
          varying float vWave;
          varying vec3 vWorldPosition;

          void main() {
            vec2 driftA = vec2(uTime * 0.006, uTime * -0.003);
            vec2 driftB = vec2(uTime * -0.004, uTime * 0.005);
            vec3 layerA = texture2D(uMap, vUv * vec2(3.6, 2.7) + driftA).rgb;
            vec3 layerB = texture2D(uMap, vec2(vUv.y, 1.0 - vUv.x) * vec2(2.4, 3.1) + driftB).rgb;
            vec3 textureWater = mix(layerA, layerB, 0.28);
            float luminance = dot(textureWater, vec3(0.299, 0.587, 0.114));
            float horizon = smoothstep(0.05, 0.98, vUv.y);
            vec3 water = mix(uDeep, textureWater, 0.58);
            water = mix(water, uShallow, horizon * 0.13);
            float sparkle = smoothstep(0.76, 0.94, luminance) * (0.55 + 0.45 * sin(uTime * 0.7 + vWorldPosition.x));
            water += vec3(0.72, 0.92, 0.96) * sparkle * 0.09;
            water += vWave * 0.16;
            gl_FragColor = vec4(water, 1.0);
          }
        `}
      />
    </mesh>
  );
}

function ShallowWaterHalo({ position, size = 1 }) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[position[0], -0.355, position[2]]}>
      <ringGeometry args={[size * 1.45, size * 2.25, 64]} />
      <meshBasicMaterial color="#bdeff0" transparent opacity={0.17} depthWrite={false} />
    </mesh>
  );
}

function HorizonBackdrop() {
  const texture = useTexture(`${import.meta.env.BASE_URL || '/'}textures/sky-mountain-panorama.png`);
  useMemo(() => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 4;
    texture.needsUpdate = true;
  }, [texture]);
  return (
    <mesh position={[0, 5.2, -14.2]} renderOrder={-10}>
      <planeGeometry args={[80, 31]} />
      <meshBasicMaterial map={texture} fog={false} toneMapped={false} depthWrite={false} />
    </mesh>
  );
}

function Label({ title, accent, position = [0, 2.2, 0] }) {
  return <Html center position={position} transform distanceFactor={10}><div className="island-label" style={{ background: accent }}>{title}</div></Html>;
}

function FeaturedDecor() {
  return (
    <group>
      <Model file="dock.glb" scale={2.1} position={[-1.5, 0.05, 0.75]} rotation={[0, -0.65, 0]} />
      <Model file="sign.glb" scale={1.25} position={[0.65, 0.14, 0.45]} rotation={[0, -0.4, 0]} />
      <Model file="tree.glb" scale={1.55} position={[-0.45, 0.12, -0.5]} />
      <Model file="bush.glb" scale={0.85} position={[0.75, 0.12, -0.55]} />
      <Model file="rock.glb" scale={0.7} position={[-0.9, 0.08, -0.7]} />
      <Model file="stairs.glb" scale={1.25} position={[0, 0.02, 1]} rotation={[0, Math.PI, 0]} />
      <Model file="lamp.glb" scale={1.05} position={[0.95, 0.12, 0.05]} />
      <Model file="lifebuoy.glb" scale={0.7} position={[-1.05, 0.12, 0.3]} rotation={[0, 0.8, 0]} />
      <Model file="seagull.glb" scale={0.8} position={[0.15, 2.1, -0.65]} rotation={[0, -0.7, 0]} />
    </group>
  );
}

function Island({ island }) {
  const startJourney = usePortfolioStore((state) => state.startJourney);
  const selectedIsland = usePortfolioStore((state) => state.selectedIsland);
  const [hovered, setHovered] = useState(false);
  return (
    <Float speed={1.05} floatIntensity={0.1} rotationIntensity={0.02}>
      <group
        position={island.position}
        scale={hovered ? 1.04 : 1}
        onClick={(event) => { event.stopPropagation(); startJourney(island); }}
        onPointerOver={(event) => { event.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer'; }}
        onPointerOut={() => { setHovered(false); document.body.style.cursor = 'default'; }}
      >
        <Model file={islandModels[island.id]} scale={3.7} />
        <Label title={island.title} accent={island.accent} />
        {selectedIsland?.id === island.id && <pointLight position={[0, 2.5, 0]} color={island.accent} intensity={2.2} distance={6} />}
      </group>
    </Float>
  );
}

function AboutIsland() {
  const startJourney = usePortfolioStore((state) => state.startJourney);
  return (
    <Float speed={0.85} floatIntensity={0.07} rotationIntensity={0.015}>
      <group
        position={about.position}
        onClick={(event) => { event.stopPropagation(); startJourney(about); }}
        onPointerOver={() => { document.body.style.cursor = 'pointer'; }}
        onPointerOut={() => { document.body.style.cursor = 'default'; }}
      >
        <Model file="aboutme_island.glb" scale={4.25} rotation={[0, Math.PI, 0]} />
        <Label title="About Me" accent="#e53935" position={[0, 2.3, 0]} />
      </group>
    </Float>
  );
}

function Visitor({ positionRef }) {
  return (
    <group ref={positionRef} position={[0, 0.02, 2.65]}>
      <Model file="paddleboard.glb" scale={3.15} position={[0, 0, -1.32]} rotation={[Math.PI / 2, 0, 0]} />
      <Model file="visitor_beavor.glb" scale={5.6} position={[-0.08, 0.1, 0]} rotation={[0, Math.PI, 0]} />
      <Html center position={[0, 2.55, 0]}><div className="you-badge">YOU <span>♥</span></div></Html>
    </group>
  );
}

function AutoTraveler() {
  const ref = useRef();
  const keys = useRef(new Set());
  const target = usePortfolioStore((state) => state.journeyTarget);
  const finishJourney = usePortfolioStore((state) => state.finishJourney);
  const targetVector = useMemo(() => new THREE.Vector3(), []);
  useFrame((_, delta) => {
    if (!ref.current) return;
    if (target) {
      targetVector.set(target.position[0], 0.02, target.position[2] + 1.7);
      if (ref.current.position.distanceTo(targetVector) > 0.14) {
        ref.current.position.lerp(targetVector, 1 - Math.pow(0.015, delta));
        ref.current.lookAt(targetVector.x, 0.1, targetVector.z);
      } else finishJourney(target);
    } else {
      const speed = 2.8 * delta;
      let dx = 0;
      let dz = 0;
      if (keys.current.has('w')) dz -= speed;
      if (keys.current.has('s')) dz += speed;
      if (keys.current.has('a')) dx -= speed;
      if (keys.current.has('d')) dx += speed;
      ref.current.position.x = THREE.MathUtils.clamp(ref.current.position.x + dx, -12, 12);
      ref.current.position.z = THREE.MathUtils.clamp(ref.current.position.z + dz, -9, 11);
      if (dx || dz) ref.current.rotation.y = Math.atan2(dx, dz);
    }
  });
  useEffect(() => {
    const onKeyDown = (event) => keys.current.add(event.key.toLowerCase());
    const onKeyUp = (event) => keys.current.delete(event.key.toLowerCase());
    const clearKeys = () => keys.current.clear();
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    window.addEventListener('blur', clearKeys);
    return () => { window.removeEventListener('keydown', onKeyDown); window.removeEventListener('keyup', onKeyUp); window.removeEventListener('blur', clearKeys); };
  }, []);
  return <Visitor positionRef={ref} />;
}

function CameraRig() {
  const { camera } = useThree();
  const overviewPosition = useMemo(() => new THREE.Vector3(0, 7.2, 20.8), []);
  const overviewTarget = useMemo(() => new THREE.Vector3(0, 1.05, -0.6), []);
  const focusPosition = useMemo(() => new THREE.Vector3(), []);
  const focusTarget = useMemo(() => new THREE.Vector3(), []);
  const mouse = useRef(new THREE.Vector2());

  useEffect(() => {
    const onPointerMove = (event) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -((event.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', onPointerMove);
  }, []);

  useFrame((_, delta) => {
    const smoothing = 1 - Math.pow(0.025, delta);
    const orbitAngle = mouse.current.x * 0.18;
    const orbitRadius = 19.5;
    focusPosition.set(Math.sin(orbitAngle) * orbitRadius, overviewPosition.y + mouse.current.y * 1.55, Math.cos(orbitAngle) * orbitRadius);
    focusTarget.set(overviewTarget.x + mouse.current.x * 1.1, overviewTarget.y + mouse.current.y * 0.5, overviewTarget.z);
    camera.position.lerp(focusPosition, smoothing * 0.55);
    camera.lookAt(focusTarget);
  });
  return null;
}

function IslandConfirmation() {
  const navigate = useNavigate();
  const dialog = usePortfolioStore((state) => state.dialog);
  const closeDialog = usePortfolioStore((state) => state.closeDialog);
  const setMode = usePortfolioStore((state) => state.setMode);
  const setActiveCategory = usePortfolioStore((state) => state.setActiveCategory);
  const setIslandOnly = usePortfolioStore((state) => state.setIslandOnly);
  if (!dialog) return null;

  const enterIsland = () => {
    if (dialog.id === 'about') {
      closeDialog();
      navigate('/blog');
      return;
    }
    setActiveCategory(dialog.id);
    setIslandOnly(true);
    closeDialog();
    setMode('page');
    setTimeout(() => document.getElementById('project')?.scrollIntoView({ behavior: 'smooth' }), 50);
  };

  return (
    <Html center position={[dialog.position[0], 3.8, dialog.position[2]]} zIndexRange={[40, 20]}>
      <div className="island-confirmation" onPointerDown={(event) => event.stopPropagation()}>
        <span>Destination reached</span>
        <strong>{dialog.id === 'about' ? 'Visit About Me?' : `Enter ${dialog.title}?`}</strong>
        <p>{dialog.subtitle}</p>
        <div><button className="secondary" onClick={closeDialog}>Not now</button><button className="primary" onClick={enterIsland}>Enter</button></div>
      </div>
    </Html>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={['#bfe9f7']} />
      <fog attach="fog" args={['#bfe9f7', 20, 39]} />
      <ambientLight intensity={1.8} />
      <hemisphereLight color="#f5fbff" groundColor="#5898a8" intensity={1.25} />
      <directionalLight position={[6, 12, 7]} intensity={2.15} castShadow shadow-mapSize={[1024, 1024]} />
      <Water />
      <HorizonBackdrop />
      <ShallowWaterHalo position={about.position} size={0.74} />
      {islands.map((island) => (
        <ShallowWaterHalo key={`water-${island.id}`} position={island.position} size={island.id === 'featured' ? 1.02 : 0.78} />
      ))}
      {islands.map((island) => <Island key={island.id} island={island} />)}
      <AboutIsland />
      <AutoTraveler />
      <CameraRig />
      <IslandConfirmation />
    </>
  );
}

export default function WorldCanvas() {
  const [rendererKey, setRendererKey] = useState(0);
  const recoveryTimer = useRef();

  useEffect(() => () => clearTimeout(recoveryTimer.current), []);

  const handleCreated = ({ gl }) => {
    const canvas = gl.domElement;
    const recover = (event) => {
      event.preventDefault();
      clearTimeout(recoveryTimer.current);
      recoveryTimer.current = setTimeout(() => setRendererKey((key) => key + 1), 180);
    };
    canvas.addEventListener('webglcontextlost', recover, { once: true });
  };

  return (
    <div className="canvas-wrap">
      <Canvas key={rendererKey} onCreated={handleCreated} shadows camera={{ position: [0, 7.2, 20.8], fov: 48 }} dpr={[1, 1.2]} tabIndex={0}>
        <Scene />
      </Canvas>
      <div className="world-overview-copy">
        <p>WELCOME TO</p>
        <h1>my world<span>✦</span></h1>
        <div>I design thoughtful digital experiences across UX, code, visual design and 3D.</div>
        <b>♥</b>
      </div>
      <div className="world-map"><strong>YOU ARE HERE</strong><span className="map-dot red"/><span className="map-dot purple"/><span className="map-dot green"/><span className="map-dot pink"/><span className="map-dot orange"/></div>
    </div>
  );
}

Object.values(islandModels).forEach((file) => useGLTF.preload(modelUrl(file)));
['aboutme_island.glb', 'visitor_beavor.glb', 'paddleboard.glb'].forEach((file) => useGLTF.preload(modelUrl(file)));
