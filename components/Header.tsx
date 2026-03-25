"use client"

export default function Header() {
  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center transition-opacity duration-300">
      <div className="text-sm font-mono tracking-wider">
        <span className="cyan-glow">2026</span>
        <span className="text-white/30 mx-2">/</span>
        <span className="text-white/60">BERTO JOSEPH</span>
      </div>
      <nav className="text-sm font-mono flex space-x-8 tracking-wider">
        <a href="#about" onClick={scrollTo("about")}
          className="text-white/60 hover:text-[var(--cyan)] transition-colors duration-300">
          ABOUT
        </a>
        <a href="#ventures" onClick={scrollTo("ventures")}
          className="text-white/60 hover:text-[var(--cyan)] transition-colors duration-300">
          VENTURES
        </a>
        <a href="#contact" onClick={scrollTo("contact")}
          className="text-white/60 hover:text-[var(--cyan)] transition-colors duration-300">
          CONTACT
        </a>
      </nav>
    </header>
  )
}
