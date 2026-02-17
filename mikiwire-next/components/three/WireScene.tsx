"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, PerspectiveCamera, Float } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function Cable() {
    const meshRef = useRef<THREE.Mesh>(null);

    // Generate a curve for the cable
    const curve = useMemo(() => {
        const points = [];
        for (let i = 0; i < 50; i++) {
            // A gentle spiral curve
            const t = i / 50;
            const x = Math.sin(t * Math.PI * 2) * 2;
            const y = (t - 0.5) * 15;
            const z = Math.cos(t * Math.PI * 2) * 2;
            points.push(new THREE.Vector3(x, y, z));
        }
        return new THREE.CatmullRomCurve3(points);
    }, []);

    useFrame((state) => {
        if (meshRef.current) {
            // Slow rotation
            meshRef.current.rotation.y += 0.002;
            //   meshRef.current.rotation.z += 0.001;

            // Mouse interaction (parallax)
            const { mouse } = state;
            meshRef.current.rotation.x = THREE.MathUtils.lerp(
                meshRef.current.rotation.x,
                mouse.y * 0.2,
                0.1
            );
            meshRef.current.rotation.y = THREE.MathUtils.lerp(
                meshRef.current.rotation.y,
                (mouse.x * 0.2) + (state.clock.elapsedTime * 0.1), // Continue spinning
                0.1
            );
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh ref={meshRef} rotation={[0, 0, Math.PI / 4]}>
                {/* Main Cable Core */}
                <tubeGeometry args={[curve, 64, 0.8, 8, false]} />
                <meshStandardMaterial
                    color="#2a2a2a"
                    roughness={0.3}
                    metalness={1}
                    normalScale={new THREE.Vector2(1, 1)}
                />
            </mesh>
        </Float>
    );
}

function Strands() {
    // Helper to create twisted strands around the core (visual effect)
    return (
        <group>
            {/* Additional detailed strands could go here for realism */}
        </group>
    )
}

export default function WireScene() {
    return (
        <div className="w-full h-full">
            <Canvas dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={45} />

                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={100} castShadow />
                <pointLight position={[-10, -10, -10]} intensity={50} color="#ff5722" /> {/* Molten accent light */}

                <Cable />

                <Environment preset="city" />
                {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
            </Canvas>
        </div>
    );
}
