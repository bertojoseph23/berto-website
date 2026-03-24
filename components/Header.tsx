"use client"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center transition-opacity duration-300">
      <div className="text-sm">
        <span className="text-[#9F0000] red-glow">PORTFOLIO</span> / BERTO JOSEPH
      </div>
      <div className="text-sm flex space-x-6">
        <a
          href="#about"
          className="text-[#9F0000] red-glow hover:opacity-80 transition-opacity"
          onClick={(e) => {
            e.preventDefault()
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          PROFILE
        </a>
        <a
          href="#projects"
          className="text-white hover:text-[#9F0000] hover:red-glow transition-colors"
          onClick={(e) => {
            e.preventDefault()
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          PROJECTS
        </a>
        <a
          href="#contact"
          className="text-gray-400 hover:text-[#9F0000] hover:red-glow transition-colors"
          onClick={(e) => {
            e.preventDefault()
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          CONTACT
        </a>
      </div>
    </header>
  )
}

