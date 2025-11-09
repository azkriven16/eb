/* eslint-disable react/no-unknown-property */
"use client";
import {
  Html,
  OrbitControls,
  useAnimations,
  useGLTF,
  useProgress,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Loader2 } from "lucide-react";
import { useTheme } from "next-themes";
import { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";

// Replace with your model path (static in Next.js public folder)
const modelPath = "/models/bee.glb";

interface SmolModelProps {
  position?: [number, number, number];
  fov?: number;
  transparent?: boolean;
  rotationSpeed?: number;
}

export function SmolModel({
  position = [100, 0, 0],
  fov = 1,
  transparent = true,
  rotationSpeed = 2,
}: SmolModelProps) {
  return (
    <div className="relative z-0 w-full aspect-video flex justify-center items-center transform scale-100 origin-center">
      <Canvas
        camera={{ position, fov }}
        gl={{ alpha: transparent }}
        shadows
        onCreated={({ gl }) =>
          gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)
        }
        className="h-full w-full"
      >
        <Suspense fallback={<Loader />}>
          <RotatingModel />
          <ShadowGround />
          <DirectionalLight />
          <CameraSetup />
          <ambientLight />
          <OrbitControls
            autoRotate
            autoRotateSpeed={rotationSpeed}
            target={[0, -1.5, 0]}
            enablePan={false}
            minPolarAngle={Math.PI / 2.3}
            maxPolarAngle={Math.PI / 2.3}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

/* --------------------------------------------------------------- */
/* 1. Ground plane that *receives* shadows                         */
function ShadowGround() {
  const { theme } = useTheme();
  return (
    <mesh
      receiveShadow
      position={[-Math.PI / 6, 0, 0]}
      rotation={[0, Math.PI / 2, 0]}
    >
      <planeGeometry args={[200, 200]} />
      <shadowMaterial
        transparent
        opacity={theme === "dark" ? 1 : 0.4}
        color={"#000000"}
      />
    </mesh>
  );
}

/* --------------------------------------------------------------- */
/* 2. Directional light that *casts* shadows                       */
function DirectionalLight() {
  const lightRef = useRef<THREE.DirectionalLight>(null!);

  // Optional: tweak shadow map resolution & camera frustum
  useEffect(() => {
    const light = lightRef.current;
    light.shadow.mapSize.width = 1024;
    light.shadow.mapSize.height = 1024;
    light.shadow.camera.near = 0.5;
    light.shadow.camera.far = 20;
    light.shadow.camera.left = -10;
    light.shadow.camera.right = 10;
    light.shadow.camera.top = 10;
    light.shadow.camera.bottom = -10;
  }, []);

  return (
    <directionalLight
      ref={lightRef}
      castShadow
      position={[14.5, 5, 10]}
      intensity={1}
    />
  );
}

/* --------------------------------------------------------------- */
function CameraSetup() {
  const { camera } = useThree();

  useEffect(() => {
    camera.up.set(1, 0, 0);
    camera.updateProjectionMatrix();
  }, [camera]);

  return null;
}

/* --------------------------------------------------------------- */
/* 3. Model – make it *cast* shadows                               */
function RotatingModel() {
  const { scene, animations } = useGLTF(modelPath);
  const modelRef = useRef<THREE.Group>(null!);
  const { actions } = useAnimations(animations, modelRef);
  const { mouse } = useThree();

  // Traverse the loaded GLTF and enable shadow casting for every mesh
  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        child.castShadow = true;
        // optional: child.receiveShadow = true;
      }
    });
  }, [scene]);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      const action = Object.values(actions)[0];
      action?.play();
    }
  }, [actions]);

  // useFrame(() => {
  //   if (modelRef.current) {
  //     const initialX = 5;
  //     const rotationInfluence = mouse.x * 0.5;
  //     modelRef.current.rotation.x = initialX + rotationInfluence;
  //   }
  // });
  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={2.5}
      position={[-0.5, -1.3, 0]}
      rotation={[5, -0.001, -Math.PI / 2]}
    />
  );
}

function Loader() {
  const { progress } = useProgress();
  return (
    <Html fullscreen position={[0, 0, -5]}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
          fontSize: "1.2rem",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <Loader2 className="animate-spin size-12" />
      </div>
    </Html>
  );
}
