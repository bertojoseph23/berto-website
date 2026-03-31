"use client"

import { ChevronDown } from "lucide-react"

interface ScrollArrowProps {
  onClick?: () => void
}

export default function ScrollArrow({ onClick }: ScrollArrowProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Scroll to next section"
      className="animate-bounce rounded-full p-2 text-[var(--cyan)]/70 transition-colors hover:text-[var(--cyan)]"
    >
      <ChevronDown className="h-8 w-8" />
    </button>
  )
}
