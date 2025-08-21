"use client";
import { Canvas, extend, useThree } from "@react-three/fiber";
import {
  useGLTF,
  useTexture,
  Environment,
  Lightformer,
} from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import Band from "./band";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

extend({ MeshLineGeometry, MeshLineMaterial });
useGLTF.preload("/assets/card.glb");
useTexture.preload("/assets/lanyard.png");

export default function Lanyard() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Do something with scrollY
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {}, [isTabletOrMobile]);
  return (
    <div className="absolute right-0 left-0 lg:left-auto top-0 aspect-square w-full">
      <div className="flex h-full w-full ">
        <Canvas
          camera={{ position: [0, 0, 12], fov: isTabletOrMobile ? 20 : 15 }}
          style={{ backgroundColor: "transparent" }}
        >
          <ambientLight intensity={Math.PI} />
          <Physics
            debug={false}
            interpolate
            gravity={[0, -40, 0]}
            timeStep={1 / 60}
          >
            <Band />
          </Physics>
          {/* <Environment blur={0.75}>
            <Lightformer
              intensity={2}
              color="white"
              position={[0, -1, 5]}
              rotation={[0, 0, Math.PI / 3]}
              scale={[100, 0.1, 1]}
            />
            <Lightformer
              intensity={3}
              color="white"
              position={[-1, -1, 1]}
              rotation={[0, 0, Math.PI / 3]}
              scale={[100, 0.1, 1]}
            />
            <Lightformer
              intensity={3}
              color="white"
              position={[1, 1, 1]}
              rotation={[0, 0, Math.PI / 3]}
              scale={[100, 0.1, 1]}
            />
            <Lightformer
              intensity={10}
              color="white"
              position={[-10, 0, 14]}
              rotation={[0, Math.PI / 2, Math.PI / 3]}
              scale={[100, 10, 1]}
            />
          </Environment> */}
        </Canvas>
      </div>
    </div>
  );
}
