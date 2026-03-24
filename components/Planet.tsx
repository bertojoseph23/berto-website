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
      {/* Outer glow */}
      <mesh ref={glowRef} scale={1.5}>
        <sphereGeometry args={[5, 64, 64]} />
        <meshBasicMaterial color="#00D4FF" transparent opacity={0.03} side={THREE.BackSide} />
      </mesh>

      {/* Secondary glow */}
      <mesh scale={1.3}>
        <sphereGeometry args={[5, 64, 64]} />
        <meshBasicMaterial color="#00D4FF" transparent opacity={0.06} side={THREE.BackSide} />
      </mesh>

      {/* Main planet — bright, luminous */}
      <mesh ref={planetRef}>
        <sphereGeometry args={[5, 64, 64]} />
        <meshStandardMaterial
          color="#E8EDF5"
          roughness={0.25}
          metalness={0.85}
          emissive="#00D4FF"
          emissiveIntensity={0.15}
        />
      </mesh>

      {/* Atmosphere */}
      <mesh ref={atmosphereRef} scale={1.08}>
        <sphereGeometry args={[5, 64, 64]} />
        <meshStandardMaterial
          color="#00D4FF"
          transparent
          opacity={0.08}
          roughness={0.1}
          metalness={0.9}
          emissive="#00D4FF"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Particle cloud */}
      <points>
        <sphereGeometry args={[5.5, 64, 64]} />
        <pointsMaterial size={0.04} color="#00D4FF" transparent opacity={0.4} sizeAttenuation />
      </points>
    </group>
  )
}
