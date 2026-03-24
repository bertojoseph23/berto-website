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
import VenturesSection from "@/components/VenturesSection"
import ContactSection from "@/components/ContactSection"

export default function Home() {
  const [scale, setScale] = useState(1.2)
  const [showHeader, setShowHeader] = useState(true)
  const [showScrollArrow, setShowScrollArrow] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const viewportHeight = window.innerHeight

      const s = 1.2 - (scrolled / viewportHeight) * 0.5
      setScale(Math.max(0.7, s))

      setShowHeader(scrolled <= 50)
      setShowScrollArrow(scrolled <= 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="relative w-full h-screen bg-[var(--deep-bg)] text-white overflow-x-hidden">
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
        {showHeader && <Header />}

        {/* Hero Section */}
        <section className="h-screen flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 relative">
          <div
            className="max-w-7xl w-full transition-transform duration-200 text-center"
            style={{ transform: `scale(${scale})` }}
          >
            <p className="text-sm font-mono tracking-[0.3em] text-[var(--gold)] gold-glow mb-6 uppercase">
              Cloud Engineer &middot; AI Founder
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-9xl font-bold tracking-tighter mb-4">
              BERTO JOSEPH
            </h1>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[var(--cyan)] opacity-50" />
              <p className="text-xs font-mono tracking-[0.2em] text-white/40 uppercase">
                Systems &middot; Scale &middot; Intention
              </p>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[var(--cyan)] opacity-50" />
            </div>
          </div>

          {/* Quote positioned at bottom right */}
          <div className="absolute bottom-28 right-4 sm:right-8 md:right-16 max-w-xs">
            <QuoteBox>
              <p className="text-sm text-gray-300 leading-relaxed">
                &ldquo;I build infrastructure that scales and products that matter.&rdquo;
              </p>
              <p className="text-xs text-[var(--cyan)] mt-2 text-right font-mono opacity-60">
                &#47;&#47; SIGNAL
              </p>
            </QuoteBox>
          </div>
        </section>

        {showScrollArrow && (
          <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-20">
            <ScrollArrow />
          </div>
        )}

        <AboutSection />
        <VenturesSection />
        <ContactSection />

        <Footer />
      </div>

      <LoadingScreen />
    </main>
  )
}
