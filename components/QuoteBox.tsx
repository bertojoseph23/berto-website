import type React from "react"

export default function QuoteBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative perspective">
      <div className="p-4 bg-black/50 backdrop-blur-md border border-[var(--cyan)]/15 rounded transform-style-3d border-glow">
        {/* Corner accents */}
        <div className="absolute -top-px -left-px w-3 h-3 border-t border-l border-[var(--cyan)]/40" />
        <div className="absolute -top-px -right-px w-3 h-3 border-t border-r border-[var(--cyan)]/40" />
        <div className="absolute -bottom-px -left-px w-3 h-3 border-b border-l border-[var(--cyan)]/40" />
        <div className="absolute -bottom-px -right-px w-3 h-3 border-b border-r border-[var(--cyan)]/40" />

        {/* Subtle scanlines */}
        <div className="absolute inset-0 scanlines pointer-events-none rounded" />

        {/* Blinking cursor */}
        <div className="absolute bottom-2 right-2 w-1.5 h-3 bg-[var(--cyan)] opacity-40 animate-blink" />

        <div className="relative z-10 font-mono">{children}</div>

        {/* Edge highlights */}
        <div className="absolute top-0 right-0 h-px w-1/4 bg-gradient-to-r from-transparent to-[var(--cyan)] opacity-30" />
        <div className="absolute bottom-0 left-0 h-px w-1/4 bg-gradient-to-r from-[var(--cyan)] to-transparent opacity-30" />
      </div>
    </div>
  )
}
