export default function Footer() {
  return (
    <footer className="px-8 md:px-16 py-8 border-t border-white/20">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm">&copy; {new Date().getFullYear()} Berto Joseph. All rights reserved.</div>

        <div className="text-xs text-gray-500">Designed and developed with Three.js and Next.js</div>
      </div>
    </footer>
  )
}

