"use client"

import { useRef, useState, useEffect } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { Vector3 } from "three"
import * as THREE from "three"
import Planet from "./Planet"

export default function Scene() {
  const { camera } = useThree()
  const group = useRef<THREE.Group>(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouse({ x: event.clientX, y: event.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    camera.position.set(0, 0, 18)
  }, [camera])

  useFrame(() => {
    if (!group.current) return

    group.current.rotation.y += 0.001

    const viewportHeight = window.innerHeight
    const scrollProgress = Math.min(scrollY / viewportHeight, 1)

    const scale = 1.2 - scrollProgress * 0.5
    group.current.scale.setScalar(Math.max(0.7, scale))

    camera.position.z = 18 - scrollProgress * 5
    camera.position.y = scrollProgress * 3

    if (typeof window !== "undefined") {
      const mouseX = (window.innerWidth / 2 - mouse.x) * 0.0008
      const mouseY = (window.innerHeight / 2 - mouse.y) * 0.0008
      camera.position.x += (mouseX - camera.position.x) * 0.04
      camera.position.y += (mouseY - camera.position.y) * 0.04
    }

    camera.lookAt(new Vector3(0, 0, 0))
  })

  return (
    <group ref={group}>
      <Planet position={[0, 0, 0]} />

      {/* Orbital ring — cyan */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[6, 6.04, 128]} />
        <meshBasicMaterial color="#00D4FF" transparent opacity={0.25} />
      </mesh>

      {/* Second ring — wider, subtler */}
      <mesh rotation={[Math.PI / 2, 0, Math.PI / 6]}>
        <ringGeometry args={[8, 8.03, 128]} />
        <meshBasicMaterial color="#00D4FF" transparent opacity={0.12} />
      </mesh>

      {/* Third ring — gold accent */}
      <mesh rotation={[Math.PI / 2.5, 0, Math.PI / 4]}>
        <ringGeometry args={[7, 7.02, 128]} />
        <meshBasicMaterial color="#C9A84C" transparent opacity={0.1} />
      </mesh>

      {/* Orbiting satellite — gold */}
      <mesh position={[5, 0, 0]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#C9A84C" emissive="#C9A84C" emissiveIntensity={0.8} />
      </mesh>

      {/* Outer glow shell */}
      <mesh scale={1.15}>
        <sphereGeometry args={[5.5, 32, 32]} />
        <meshBasicMaterial color="#00D4FF" transparent opacity={0.03} side={THREE.BackSide} />
      </mesh>

      {/* Ambient + directional lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 5, 8]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-8, -3, 5]} intensity={0.3} color="#00D4FF" />
    </group>
  )
}
