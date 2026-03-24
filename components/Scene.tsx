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

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouse({
        x: event.clientX,
        y: event.clientY,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Set initial camera position
  useEffect(() => {
    camera.position.set(0, 0, 18) // Moved camera back to make globe appear smaller
  }, [camera])

  useFrame(() => {
    if (!group.current) return

    group.current.rotation.y += 0.001

    // Calculate scroll progress (0 to 1)
    const viewportHeight = window.innerHeight
    const scrollProgress = Math.min(scrollY / viewportHeight, 1)

    // Scale the group based on scroll - starts at 1.3x, gets smaller
    const scale = 1.3 - scrollProgress * 0.6 // Reduced initial scale to 1.3
    group.current.scale.setScalar(Math.max(0.7, scale))

    // Move camera based on scroll
    camera.position.z = 18 - scrollProgress * 5
    camera.position.y = scrollProgress * 3

    if (typeof window !== "undefined") {
      const mouseX = (window.innerWidth / 2 - mouse.x) * 0.001
      const mouseY = (window.innerHeight / 2 - mouse.y) * 0.001

      camera.position.x += (mouseX - camera.position.x) * 0.05
      camera.position.y += (mouseY - camera.position.y) * 0.05
    }

    camera.lookAt(new Vector3(0, 0, 0))
  })

  return (
    <group ref={group}>
      <Planet position={[0, 0, 0]} />

      {/* Orbital rings with red color and glow */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[6, 6.05, 64]} />
        <meshBasicMaterial color="#9F0000" transparent opacity={0.5} />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, Math.PI / 6]}>
        <ringGeometry args={[8, 8.05, 64]} />
        <meshBasicMaterial color="#9F0000" transparent opacity={0.3} />
      </mesh>

      {/* Small orbiting satellite */}
      <mesh position={[5, 0, 0]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="#9F0000" emissive="#9F0000" emissiveIntensity={0.8} />
      </mesh>

      {/* Red glow around the planet */}
      <mesh scale={1.2}>
        <sphereGeometry args={[5.5, 32, 32]} />
        <meshBasicMaterial color="#9F0000" transparent opacity={0.05} side={THREE.BackSide} />
      </mesh>
    </group>
  )
}

