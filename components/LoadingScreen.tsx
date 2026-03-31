"use client"

import { useState, useEffect } from "react"

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-50 bg-[var(--deep-bg)] flex flex-col items-center justify-center">
      <div className="text-xs font-mono tracking-[0.3em] cyan-glow mb-6 uppercase">
        Initializing
      </div>
      <div className="w-48 h-px bg-white/10 rounded-full overflow-hidden">
        <div className="h-full bg-[var(--cyan)] animate-[loading_2s_ease-in-out]" />
      </div>
    </div>
  )
}
