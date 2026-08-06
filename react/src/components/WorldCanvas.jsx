import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Html, useGLTF, useTexture } from '@react-three/drei';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';
import { islands, about, breakIsland } from '../data.js';
import { usePortfolioStore } from '../store.js';
import ThreeInARowGame from './ThreeInARowGame.jsx';

const MODEL_ROOT = `${import.meta.env.BASE_URL || '/'}models/`;
const modelUrl = (file) => `${MODEL_ROOT}${file}?v=521`;

const islandModels = {
  ux: 'ux_island.glb',
  development: 'fullstack_island.glb',
  data: 'data_island.glb',
  featured: 'featured_island.glb',
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
  const travelToPoint = usePortfolioStore((state) => state.travelToPoint);
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
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -0.38, 0]}
      receiveShadow
      onClick={(event) => {
        event.stopPropagation();
        travelToPoint([
          THREE.MathUtils.clamp(event.point.x, -12, 12),
          0.02,
          THREE.MathUtils.clamp(event.point.z, -9, 11),
        ]);
      }}
    >
      <planeGeometry args={[100, 60, 160, 112]} />
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
            vec2 worldUv = vWorldPosition.xz * 0.085;
            vec3 layerA = texture2D(uMap, worldUv + driftA).rgb;
            vec3 layerB = texture2D(uMap, vec2(worldUv.y, -worldUv.x) * 0.86 + driftB).rgb;
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

function AmbientWildlife() {
  return (
    <group>
      <Float speed={1.2} floatIntensity={0.45} rotationIntensity={0.08}>
        <Model file="seagull.glb" scale={0.72} position={[-5.4, 3.8, -6.8]} rotation={[0, 0.75, 0]} />
      </Float>
      <Float speed={1.05} floatIntensity={0.35} rotationIntensity={0.06}>
        <Model file="seagull.glb" scale={0.58} position={[5.9, 3.15, -7.2]} rotation={[0, -0.9, 0]} />
      </Float>
      <Model file="lily_pad.glb" scale={0.92} position={[-5.1, -0.3, 0.3]} rotation={[0, 0.25, 0]} />
      <Model file="lily_pad.glb" scale={0.76} position={[-1.8, -0.31, 1.15]} rotation={[0, -0.55, 0]} />
      <Model file="lily_pad.glb" scale={0.84} position={[4.9, -0.3, 0.65]} rotation={[0, 0.8, 0]} />
      <Model file="lily_pad.glb" scale={1.18} position={[3.7, -0.27, 5.3]} rotation={[0, -0.35, 0]} />
      <Float speed={0.75} floatIntensity={0.08} rotationIntensity={0.035}>
        <Model file="lifebuoy.glb" scale={1.3} position={[-8.7, -0.18, -1.4]} rotation={[0.18, 0.45, -0.1]} />
      </Float>
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
        <Model file={islandModels[island.id]} scale={3.5} rotation={island.rotation || [0, 0, 0]} />
        {selectedIsland?.id === island.id && (
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.22, 0]}>
            <ringGeometry args={[1.45, 1.72, 48]} />
            <meshBasicMaterial color={island.accent} transparent opacity={0.7} depthWrite={false} />
          </mesh>
        )}
        {selectedIsland?.id === island.id && <pointLight position={[0, 2.5, 0]} color={island.accent} intensity={2.2} distance={6} />}
      </group>
    </Float>
  );
}

function AboutIsland() {
  const startJourney = usePortfolioStore((state) => state.startJourney);
  const selectedIsland = usePortfolioStore((state) => state.selectedIsland);
  const [hovered, setHovered] = useState(false);
  return (
    <Float speed={0.85} floatIntensity={0.07} rotationIntensity={0.015}>
      <group
        position={about.position}
        scale={hovered ? 1.04 : 1}
        onClick={(event) => { event.stopPropagation(); startJourney(about); }}
        onPointerOver={() => { setHovered(true); document.body.style.cursor = 'pointer'; }}
        onPointerOut={() => { setHovered(false); document.body.style.cursor = 'default'; }}
      >
        <Model file="aboutme_island.glb" scale={4.7} rotation={[0, Math.PI * 0.08, 0]} />
        {selectedIsland?.id === 'about' && (
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.22, 0]}>
            <ringGeometry args={[1.45, 1.72, 48]} />
            <meshBasicMaterial color="#e53935" transparent opacity={0.7} depthWrite={false} />
          </mesh>
        )}
      </group>
    </Float>
  );
}

function BreakIsland() {
  const startJourney = usePortfolioStore((state) => state.startJourney);
  const selectedIsland = usePortfolioStore((state) => state.selectedIsland);
  const [hovered, setHovered] = useState(false);
  return (
    <Float speed={0.9} floatIntensity={0.12} rotationIntensity={0.025}>
      <group
        position={breakIsland.position}
        scale={hovered ? 1.04 : 1}
        onClick={(event) => { event.stopPropagation(); startJourney(breakIsland); }}
        onPointerOver={(event) => { event.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer'; }}
        onPointerOut={() => { setHovered(false); document.body.style.cursor = 'default'; }}
      >
        <Model file="take_a_break.glb" scale={1.65} rotation={[0, -Math.PI * 0.12, 0]} />
        {selectedIsland?.id === 'break' && (
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.22, 0]}>
            <ringGeometry args={[1.45, 1.72, 48]} />
            <meshBasicMaterial color="#f2aa45" transparent opacity={0.7} depthWrite={false} />
          </mesh>
        )}
      </group>
    </Float>
  );
}

function Visitor({ positionRef }) {
  return (
    <group ref={positionRef} position={[0, 0.02, 2.65]}>
      <Model file="beaver_paddleboard.glb" scale={2.9} />
      <Html center position={[0, 2.35, 0]}><div className="you-badge">YOU <span>♥</span></div></Html>
    </group>
  );
}

function smoothHeading(current, target, speed, delta) {
  const shortestTurn = Math.atan2(Math.sin(target - current), Math.cos(target - current));
  return current + shortestTurn * (1 - Math.exp(-speed * delta));
}

function islandEdgeRadius(island) {
  if (island.id === 'about') return 2.6;
  if (island.id === 'break') return 1.2;
  if (island.id === 'featured') return 2.2;
  return 2.05;
}

function AutoTraveler() {
  const ref = useRef();
  const keys = useRef(new Set());
  const nearbyIsland = useRef(null);
  const target = usePortfolioStore((state) => state.journeyTarget);
  const dialog = usePortfolioStore((state) => state.dialog);
  const finishJourney = usePortfolioStore((state) => state.finishJourney);
  const cancelJourney = usePortfolioStore((state) => state.cancelJourney);
  const resetTraveler = usePortfolioStore((state) => state.resetTraveler);
  const resetToken = usePortfolioStore((state) => state.travelerResetToken);
  const targetVector = useMemo(() => new THREE.Vector3(), []);
  const nextTravelPosition = useMemo(() => new THREE.Vector3(), []);
  const destinations = useMemo(() => [about, breakIsland, ...islands], []);
  useEffect(() => {
    if (!ref.current) return;
    keys.current.clear();
    nearbyIsland.current = null;
    ref.current.position.set(0, 0.02, 2.65);
    ref.current.rotation.set(0, 0, 0);
  }, [resetToken]);
  useFrame((_, delta) => {
    if (!ref.current) return;
    if (dialog) return;
    if (target) {
      const isFreeTravel = target.type === 'point';
      const centerX = target.position[0];
      const centerZ = target.position[2];
      const approachX = ref.current.position.x - centerX;
      const approachZ = ref.current.position.z - centerZ;
      const approachLength = Math.hypot(approachX, approachZ) || 1;
      const stopRadius = isFreeTravel ? 0 : islandEdgeRadius(target) + 0.12;
      targetVector.set(
        centerX + (approachX / approachLength) * stopRadius,
        0.02,
        centerZ + (approachZ / approachLength) * stopRadius,
      );
      if (ref.current.position.distanceTo(targetVector) > 0.14) {
        const directionX = targetVector.x - ref.current.position.x;
        const directionZ = targetVector.z - ref.current.position.z;
        const targetHeading = Math.atan2(directionX, directionZ);
        ref.current.rotation.y = smoothHeading(ref.current.rotation.y, targetHeading, 8, delta);
        nextTravelPosition.copy(ref.current.position).lerp(targetVector, 1 - Math.pow(0.015, delta));
        const blockingIsland = destinations.find((island) => (
          island.id !== target.id
          && Math.hypot(
            nextTravelPosition.x - island.position[0],
            nextTravelPosition.z - island.position[2],
          ) <= islandEdgeRadius(island)
        ));

        if (blockingIsland) {
          nearbyIsland.current = blockingIsland.id;
          cancelJourney();
          finishJourney(blockingIsland);
          return;
        }

        ref.current.position.copy(nextTravelPosition);
      } else if (isFreeTravel) cancelJourney();
      else finishJourney(target);
    } else {
      const speed = 2.8 * delta;
      let dx = 0;
      let dz = 0;
      if (keys.current.has('w')) dz -= speed;
      if (keys.current.has('s')) dz += speed;
      if (keys.current.has('a')) dx -= speed;
      if (keys.current.has('d')) dx += speed;
      const nextX = THREE.MathUtils.clamp(ref.current.position.x + dx, -12, 12);
      const nextZ = THREE.MathUtils.clamp(ref.current.position.z + dz, -9, 11);

      const reachedIsland = destinations.find((island) => {
        const currentDistance = Math.hypot(
          ref.current.position.x - island.position[0],
          ref.current.position.z - island.position[2],
        );
        const nextDistance = Math.hypot(nextX - island.position[0], nextZ - island.position[2]);
        return nextDistance <= islandEdgeRadius(island) && nextDistance <= currentDistance + 0.001;
      });

      if (reachedIsland) {
        keys.current.clear();
        if (nearbyIsland.current !== reachedIsland.id) {
          nearbyIsland.current = reachedIsland.id;
          finishJourney(reachedIsland);
        }
        return;
      }

      if (nearbyIsland.current) {
        const previousIsland = destinations.find((island) => island.id === nearbyIsland.current);
        if (!previousIsland || Math.hypot(nextX - previousIsland.position[0], nextZ - previousIsland.position[2]) > islandEdgeRadius(previousIsland) + 0.7) {
          nearbyIsland.current = null;
        }
      }

      ref.current.position.x = nextX;
      ref.current.position.z = nextZ;
      if (dx || dz) {
        const targetHeading = Math.atan2(dx, dz);
        ref.current.rotation.y = smoothHeading(ref.current.rotation.y, targetHeading, 11, delta);
      }
    }
  });
  useEffect(() => {
    const movementKeys = {
      w: 'w',
      arrowup: 'w',
      s: 's',
      arrowdown: 's',
      a: 'a',
      arrowleft: 'a',
      d: 'd',
      arrowright: 'd',
    };
    const onKeyDown = (event) => {
      const key = event.key.toLowerCase();
      const movementKey = movementKeys[key];
      if (movementKey) {
        event.preventDefault();
        cancelJourney();
        keys.current.add(movementKey);
      }
      if (key === 'r') resetTraveler();
    };
    const onKeyUp = (event) => {
      const movementKey = movementKeys[event.key.toLowerCase()];
      if (movementKey) {
        event.preventDefault();
        keys.current.delete(movementKey);
      }
    };
    const clearKeys = () => keys.current.clear();
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    window.addEventListener('blur', clearKeys);
    return () => { window.removeEventListener('keydown', onKeyDown); window.removeEventListener('keyup', onKeyUp); window.removeEventListener('blur', clearKeys); };
  }, [cancelJourney, resetTraveler]);
  return <Visitor positionRef={ref} />;
}

function CameraRig() {
  const { camera, size } = useThree();
  const overviewTarget = useMemo(() => new THREE.Vector3(0, 1.5, -1.15), []);
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
    const aspect = size.width / Math.max(size.height, 1);
    const wideScreen = THREE.MathUtils.clamp((aspect - 1.65) / 1.5, 0, 1);
    const orbitRadius = THREE.MathUtils.lerp(14.4, 11.8, wideScreen);
    const cameraHeight = THREE.MathUtils.lerp(3.65, 3.35, wideScreen);
    focusPosition.set(Math.sin(orbitAngle) * orbitRadius, cameraHeight + mouse.current.y * 0.45, Math.cos(orbitAngle) * orbitRadius);
    focusTarget.set(overviewTarget.x + mouse.current.x * 1.1, overviewTarget.y + mouse.current.y * 0.16, overviewTarget.z);
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
  const setMiniGameOpen = usePortfolioStore((state) => state.setMiniGameOpen);
  const [typedText, setTypedText] = useState('');
  const [dialogueStep, setDialogueStep] = useState(0);
  const dialogueText = dialog
    ? dialogueStep === 0
      ? `We made it to ${dialog.title}! Would you like to look around?`
      : dialog.id === 'about'
        ? `Okay! Let’s learn more about Claire and her creative journey.`
        : dialog.id === 'break'
          ? `Okay! Let’s take a break and play Three in a Row.`
          : `Okay! Let’s explore Claire’s projects!`
    : '';
  useEffect(() => {
    setDialogueStep(0);
    setTypedText('');
  }, [dialog?.id]);

  useEffect(() => {
    setTypedText('');
    if (!dialogueText) return undefined;
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setTypedText(dialogueText.slice(0, index));
      if (index >= dialogueText.length) window.clearInterval(timer);
    }, 18);
    return () => window.clearInterval(timer);
  }, [dialogueText]);

  const enterIsland = () => {
    const changeScene = () => {
      if (dialog.id === 'about') {
        closeDialog();
        navigate('/blog');
        return;
      }
      if (dialog.id === 'break') {
        closeDialog();
        setMiniGameOpen(true);
        return;
      }
      setActiveCategory(dialog.id);
      setIslandOnly(true);
      closeDialog();
      setMode('page');
      setTimeout(() => document.getElementById('project')?.scrollIntoView({ behavior: 'smooth' }), 80);
    };

    if (document.startViewTransition) {
      document.startViewTransition(changeScene);
    } else {
      changeScene();
    }
  };

  const advanceDialogue = () => {
    setTypedText('');
    setDialogueStep((currentStep) => currentStep === 0 ? 1 : currentStep);
  };

  useEffect(() => {
    if (!dialog || dialogueStep !== 1) return undefined;
    const typingDuration = dialogueText.length * 18;
    const timer = window.setTimeout(enterIsland, typingDuration + 1100);
    return () => window.clearTimeout(timer);
  }, [dialog?.id, dialogueStep, dialogueText]);

  if (!dialog) return null;

  return (
    <Html fullscreen zIndexRange={[60, 30]}>
      <div className="game-dialogue-layer" onPointerDown={(event) => event.stopPropagation()}>
        <div className="game-dialogue-avatar" aria-hidden="true">
          <img src={`${import.meta.env.BASE_URL || '/'}img/claire-dialogue.png`} alt="" />
        </div>
        <div className="game-dialogue-box">
          <span className="game-speaker">Claire</span>
          <p key={`${dialog.id}-${dialogueStep}`}>{typedText}<i className="typing-caret" /></p>
          <div className="game-dialogue-actions">
            {dialogueStep === 0 ? (
              <>
                <button type="button" className="game-choice secondary-choice" onClick={closeDialog}>Maybe later</button>
                <button type="button" className="game-choice primary-choice" onClick={advanceDialogue}>Let’s go! <span>➜</span></button>
              </>
            ) : (
              <span className="game-dialogue-loading" aria-label="Entering island"><i/><i/><i/></span>
            )}
          </div>
        </div>
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
      <AmbientWildlife />
      <ShallowWaterHalo position={about.position} size={0.74} />
      <ShallowWaterHalo position={breakIsland.position} size={0.45} />
      {islands.map((island) => (
        <ShallowWaterHalo key={`water-${island.id}`} position={island.position} size={island.id === 'featured' ? 1.02 : 0.78} />
      ))}
      {islands.map((island) => <Island key={island.id} island={island} />)}
      <AboutIsland />
      <BreakIsland />
      <AutoTraveler />
      <CameraRig />
      <IslandConfirmation />
    </>
  );
}

export default function WorldCanvas({ onReady }) {
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
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => onReady?.());
    });
  };

  return (
    <div className="canvas-wrap">
      <Canvas key={rendererKey} onCreated={handleCreated} shadows camera={{ position: [0, 4.85, 15.8], fov: 42 }} dpr={[1, 1.2]} tabIndex={0}>
        <Scene />
      </Canvas>
      <ThreeInARowGame />
      <div className="world-overview-copy">
        <p>WELCOME TO</p>
        <h1>my world<span>✦</span></h1>
        <div>I design thoughtful digital experiences with a lifelong curiosity for learning and exploring.</div>
        <b>♥</b>
      </div>
    </div>
  );
}

Object.values(islandModels).forEach((file) => useGLTF.preload(modelUrl(file)));
['aboutme_island.glb', 'beaver_paddleboard.glb', 'seagull.glb', 'lily_pad.glb', 'lifebuoy.glb', 'take_a_break.glb'].forEach((file) => useGLTF.preload(modelUrl(file)));
