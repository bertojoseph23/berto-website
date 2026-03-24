"use client"

import { useState, useEffect } from "react"

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center">
      <div className="text-teal-400 text-2xl mb-4">INITIALIZING</div>
      <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
        <div className="h-full bg-teal-400 animate-[loading_2s_ease-in-out]"></div>
      </div>
    </div>
  )
}

