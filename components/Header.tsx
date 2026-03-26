"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "ABOUT", id: "about" },
  { label: "VENTURES", id: "ventures" },
  { label: "CONTACT", id: "contact" },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center transition-opacity duration-300">
      <div className="text-sm font-mono tracking-wider">
        <span className="cyan-glow">2026</span>
        <span className="text-white/30 mx-2">/</span>
        <span className="text-white/60">BERTO JOSEPH</span>
      </div>

      {/* Desktop nav */}
      <nav className="hidden sm:flex text-sm font-mono space-x-8 tracking-wider">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={scrollTo(link.id)}
            className="text-white/60 hover:text-[var(--cyan)] transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Mobile hamburger */}
      <button
        className="sm:hidden text-white/60 hover:text-[var(--cyan)] transition-colors"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile dropdown */}
      {open && (
        <nav className="absolute top-full right-0 mt-2 mr-6 py-3 px-5 rounded-lg border border-white/[0.08] bg-[var(--deep-bg)]/95 backdrop-blur-md sm:hidden">
          <div className="flex flex-col gap-4 text-sm font-mono tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={scrollTo(link.id)}
                className="text-white/60 hover:text-[var(--cyan)] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
