"use client"

import { Github, Mail, ArrowUpRight } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-[70vh] flex items-center px-4 sm:px-8 md:px-16 py-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-2xl">
          <p className="text-xs font-mono tracking-[0.3em] cyan-glow mb-3 uppercase">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Get In Touch</h2>

          <p className="text-white/60 leading-relaxed mb-12">
            Interested in working together, talking infrastructure, or learning more about
            one of the ventures? Reach out.
          </p>

          <div className="space-y-6">
            <a
              href="mailto:pharaohbrazy2@gmail.com"
              className="group flex items-center gap-4 p-4 border border-white/[0.08] rounded-lg bg-white/[0.02] card-hover"
            >
              <div className="w-10 h-10 rounded-full border border-[var(--cyan)]/20 flex items-center justify-center">
                <Mail className="w-4 h-4 text-[var(--cyan)] opacity-70" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-mono tracking-wider text-white/40 uppercase mb-0.5">Email</p>
                <p className="text-white/80 group-hover:text-[var(--cyan)] transition-colors">
                  pharaohbrazy2@gmail.com
                </p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-[var(--cyan)] transition-colors" />
            </a>

            <a
              href="https://github.com/bertojoseph23"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 border border-white/[0.08] rounded-lg bg-white/[0.02] card-hover"
            >
              <div className="w-10 h-10 rounded-full border border-[var(--cyan)]/20 flex items-center justify-center">
                <Github className="w-4 h-4 text-[var(--cyan)] opacity-70" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-mono tracking-wider text-white/40 uppercase mb-0.5">GitHub</p>
                <p className="text-white/80 group-hover:text-[var(--cyan)] transition-colors">
                  bertojoseph23
                </p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-[var(--cyan)] transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
