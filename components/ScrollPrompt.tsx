"use client"

export default function ScrollPrompt() {
  return (
    <div className="flex justify-center items-center animate-pulse">
      <button
        className="border border-[#9F0000] rounded-full px-6 py-3 text-sm hover:bg-[#9F0000]/10 transition-all red-glow"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
      >
        Scroll to Continue
      </button>
    </div>
  )
}

