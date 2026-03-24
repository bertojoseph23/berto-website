"use client"

import { ChevronDown } from "lucide-react"

export default function ScrollArrow() {
  return (
    <div className="animate-bounce">
      <ChevronDown
        className="text-[#9F0000] red-glow cursor-pointer w-10 h-10"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
      />
    </div>
  )
}

