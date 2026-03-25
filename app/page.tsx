"use client"

import { Suspense, useEffect, useState } from "react"
import type { PointerEvent } from "react"
import { Canvas } from "@react-three/fiber"
import { Zap } from "lucide-react"
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

  const updateHeroSpotlight = (event: PointerEvent<HTMLHeadingElement>) => {
    const { currentTarget, clientX, clientY } = event
    const bounds = currentTarget.getBoundingClientRect()

    currentTarget.style.setProperty("--spot-x", `${clientX - bounds.left}px`)
    currentTarget.style.setProperty("--spot-y", `${clientY - bounds.top}px`)
    currentTarget.style.setProperty("--spot-opacity", "1")
  }

  const hideHeroSpotlight = (event: PointerEvent<HTMLHeadingElement>) => {
    event.currentTarget.style.setProperty("--spot-opacity", "0")
  }

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const viewportHeight = window.innerHeight

      const s = 1.2 - (scrolled / viewportHeight) * 0.5
      setScale(Math.max(0.7, s))

      setShowHeader(scrolled <= 50)
      setShowScrollArrow(scrolled < viewportHeight)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"))
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          entry.target.classList.add("is-visible")
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px",
      },
    )

    elements.forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight * 0.9) {
        element.classList.add("is-visible")
      }
      observer.observe(element)
    })

    return () => observer.disconnect()
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

      <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
        <div className="nebula-base" />
        <div className="nebula-cloud nebula-cloud-cyan" />
        <div className="nebula-cloud nebula-cloud-gold" />
        <div className="nebula-cloud nebula-cloud-blue" />
        <div className="nebula-vignette" />
        <div className="nebula-grain" />
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
            <div className="hero-signal mb-6">
              <span>Embedded</span>
              <Zap className="hero-signal-bolt" aria-hidden="true" />
              <span>Cloud</span>
              <Zap className="hero-signal-bolt" aria-hidden="true" />
              <span>AI</span>
            </div>
            <h1
              className="hero-name text-5xl sm:text-6xl md:text-9xl font-bold tracking-tighter mb-4"
              data-text="BERTO JOSEPH"
              onPointerEnter={updateHeroSpotlight}
              onPointerMove={updateHeroSpotlight}
              onPointerLeave={hideHeroSpotlight}
            >
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
                &ldquo;Reliable systems make ambitious products look easy.&rdquo;
              </p>
              <p className="text-xs text-[var(--cyan)] mt-2 text-right font-mono opacity-60">
                &#47;&#47; LET&apos;S BUILD
              </p>
            </QuoteBox>
          </div>

          {showScrollArrow && (
            <div className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2">
              <ScrollArrow onClick={scrollToAbout} />
            </div>
          )}
        </section>

        <AboutSection />
        <VenturesSection />
        <ContactSection />

        <Footer />
      </div>

      <LoadingScreen />
    </main>
  )
}
