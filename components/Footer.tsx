export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-4 py-8 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto flex w-full flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
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
