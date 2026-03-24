"use client"

import { ChevronDown } from "lucide-react"

export default function ScrollArrow() {
  return (
    <div className="animate-bounce">
      <ChevronDown
        className="text-[var(--cyan)] opacity-50 cursor-pointer w-8 h-8"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
      />
    </div>
  )
}
