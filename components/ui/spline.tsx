'use client'

import dynamic from 'next/dynamic'

import { cn } from '@/lib/utils'

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-10 w-10 rounded-full border border-white/15 border-t-[var(--cyan)] animate-spin" />
    </div>
  ),
})

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return <Spline scene={scene} className={cn('h-full w-full', className)} />
}
