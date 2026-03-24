export default function Footer() {
  return (
    <footer className="px-8 md:px-16 py-8 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-white/40">
          &copy; {new Date().getFullYear()} Berto Joseph
        </div>
        <div className="text-xs font-mono text-white/20 tracking-wider">
          Built with Next.js + Three.js
        </div>
      </div>
    </footer>
  )
}
