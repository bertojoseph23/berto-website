"use client"

import { Suspense, useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import Scene from "@/components/Scene"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import LoadingScreen from "@/components/LoadingScreen"
import ScrollArrow from "@/components/ScrollArrow"
import QuoteBox from "@/components/QuoteBox"
import AboutSection from "@/components/AboutSection"
import ProjectsSection from "@/components/ProjectsSection"
import ContactSection from "@/components/ContactSection"

export default function Home() {
  const [scale, setScale] = useState(1.3)
  const [showHeader, setShowHeader] = useState(true)
  const [showScrollArrow, setShowScrollArrow] = useState(true)

  // Handle scroll for title scaling and element visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const viewportHeight = window.innerHeight

      // Scale calculation
      const scale = 1.3 - (scrolled / viewportHeight) * 0.6
      setScale(Math.max(0.7, scale))

      // Header visibility
      if (scrolled > 50) {
        setShowHeader(false)
      } else {
        setShowHeader(true)
      }

      // Scroll arrow visibility
      if (scrolled > 100) {
        setShowScrollArrow(false)
      } else {
        setShowScrollArrow(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="relative w-full h-screen bg-gradient-to-b from-black via-neutral-900 to-neutral-800 text-white overflow-x-hidden">
      {/* 3D Canvas */}
      <div className="fixed inset-0 z-0">
        <Canvas>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10">
        {/* Conditional rendering of header */}
        {showHeader && <Header />}

        {/* Hero Section */}
        <section className="h-screen flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 relative">
          {/* Main title */}
          <div
            className="max-w-7xl w-full transition-transform duration-200 text-center"
            style={{ transform: `scale(${scale})` }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tighter mb-4">BERTO JOSEPH</h1>

            {/* Portfolio info positioned below the name */}
            <div className="text-center mt-4">
              <h2 className="text-sm uppercase tracking-widest text-[#9F0000] red-glow">PORTFOLIO NO.001</h2>
              <p className="text-xs mt-1 text-[#9F0000] red-glow">2025 Edition</p>
            </div>
          </div>

          {/* Intercepted transmission positioned at the bottom */}
          <div className="absolute bottom-32 right-4 sm:right-8 md:right-16 max-w-xs">
            <QuoteBox>
              <p className="text-sm text-gray-200">
                "Creating digital experiences that blend technology and art into seamless interfaces that captivate and
                inspire."
              </p>
              <p className="text-xs text-gray-400 mt-2 text-right">INTERCEPTED TRANSMISSION</p>
            </QuoteBox>
          </div>
        </section>

        {/* Scroll arrow with fixed visibility */}
        {showScrollArrow && (
          <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-20">
            <ScrollArrow />
          </div>
        )}

        {/* Additional Sections */}
        <AboutSection />
        <ProjectsSection />
        <ContactSection />

        <Footer />
      </div>

      <LoadingScreen />
    </main>
  )
}

