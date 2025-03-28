"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Group } from "three";

// Animation for the Earth rotation
const Earth = () => {
  const group = useRef<Group>(null!);
  const { scene } = useGLTF("/planet/scene.gltf");

  // Rotate the Earth
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.005; // Adjust speed of rotation
    }
  });

  return (
    <group ref={group}>
      <primitive object={scene} scale={2.5} position={[0, 0, 0]} />
    </group>
  );
};

export default function EarthCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      style={{ height: "100%", width: "100%" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Earth />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
    </Canvas>
  );
}

// Preload the GLTF model
useGLTF.preload("/planet/scene.gltf");
