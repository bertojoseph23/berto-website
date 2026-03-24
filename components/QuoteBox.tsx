import type React from "react"
export default function QuoteBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative perspective">
      <div className="spy-message p-4 bg-black/60 backdrop-blur-sm border border-[#9F0000]/50 rounded-sm transform-style-3d shadow-glow">
        <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-[#9F0000]"></div>
        <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-[#9F0000]"></div>
        <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-[#9F0000]"></div>
        <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-[#9F0000]"></div>

        {/* Scanline effect */}
        <div className="absolute inset-0 scanlines pointer-events-none"></div>

        {/* Blinking cursor */}
        <div className="absolute bottom-2 right-2 w-2 h-4 bg-[#9F0000] opacity-70 animate-blink"></div>

        <div className="relative z-10 font-mono">{children}</div>

        <div className="absolute top-0 right-0 h-px w-1/4 bg-gradient-to-r from-transparent to-[#9F0000] opacity-70"></div>
        <div className="absolute bottom-0 left-0 h-px w-1/4 bg-gradient-to-r from-[#9F0000] to-transparent opacity-70"></div>
      </div>
    </div>
  )
}

