"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

export default function Planet({ position = [0, 0, 0] }) {
  const planetRef = useRef<THREE.Mesh>(null)
  const atmosphereRef = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (planetRef.current) {
      planetRef.current.rotation.y += delta * 0.05
    }

    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y -= delta * 0.03
    }

    if (glowRef.current) {
      glowRef.current.rotation.y += delta * 0.02
    }
  })

  return (
    <group position={position}>
      {/* Outer glow effect */}
      <mesh ref={glowRef} scale={1.5}>
        <sphereGeometry args={[5, 64, 64]} />
        <meshBasicMaterial color="#CFD2CD" transparent opacity={0.05} side={THREE.BackSide} />
      </mesh>

      {/* Secondary glow */}
      <mesh scale={1.3}>
        <sphereGeometry args={[5, 64, 64]} />
        <meshBasicMaterial color="#CFD2CD" transparent opacity={0.1} side={THREE.BackSide} />
      </mesh>

      {/* Main planet - glowing white */}
      <mesh ref={planetRef}>
        <sphereGeometry args={[5, 64, 64]} />
        <meshStandardMaterial
          color="#CFD2CD"
          roughness={0.3}
          metalness={0.8}
          emissive="#CFD2CD"
          emissiveIntensity={0.7}
        />
      </mesh>

      {/* Atmosphere */}
      <mesh ref={atmosphereRef} scale={1.1}>
        <sphereGeometry args={[5, 64, 64]} />
        <meshStandardMaterial
          color="#CFD2CD"
          transparent
          opacity={0.2}
          roughness={0.1}
          metalness={0.9}
          emissive="#CFD2CD"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Particle cloud */}
      <points>
        <sphereGeometry args={[5.5, 64, 64]} />
        <pointsMaterial size={0.05} color="#CFD2CD" transparent opacity={0.5} sizeAttenuation />
      </points>
    </group>
  )
}

