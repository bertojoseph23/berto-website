"use client"

import { Github, Mail, ArrowUpRight } from "lucide-react"
import { SplineScene } from "@/components/ui/spline"

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-[85vh] flex items-center px-4 sm:px-8 md:px-16 py-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.15fr] lg:gap-14">
          <div data-reveal className="reveal-on-scroll max-w-2xl">
            <p className="text-xs font-mono tracking-[0.3em] cyan-glow mb-3 uppercase">Contact</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Get In Touch</h2>

            <p className="text-white/60 leading-relaxed mb-8">
              Interested in working together, talking infrastructure, or learning more about
              one of the ventures? Reach out.
            </p>

            <div className="space-y-6 mt-10">
              <a
                href="mailto:berto.joseph@outlook.com"
                className="group flex items-center gap-4 p-4 border border-white/[0.08] rounded-lg bg-white/[0.02] card-hover"
              >
                <div className="w-10 h-10 rounded-full border border-[var(--cyan)]/20 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-[var(--cyan)] opacity-70" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-mono tracking-wider text-white/40 uppercase mb-0.5">Email</p>
                  <p className="text-white/80 group-hover:text-[var(--cyan)] transition-colors">
                    berto.joseph@outlook.com
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

          <div
            data-reveal
            style={{ ["--reveal-delay" as string]: "120ms" }}
            className="reveal-on-scroll contact-spline-panel relative min-h-[420px] overflow-hidden rounded-[28px] border border-white/[0.08] bg-black/45 backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,212,255,0.08),transparent_34%),radial-gradient(circle_at_75%_25%,rgba(201,168,76,0.1),transparent_28%)]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            <div className="absolute left-5 top-5 z-20 rounded-full border border-white/10 bg-black/45 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-white/45 backdrop-blur-sm">
              Live Contact Panel
            </div>

            <div className="absolute inset-x-5 bottom-5 z-20 rounded-2xl border border-white/10 bg-black/45 p-4 backdrop-blur-md">
              <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-[var(--gold)]/80">
                Let&apos;s Build
              </p>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-white/60">
                Infrastructure, product systems, AI-native ventures, and the work that turns
                ideas into stable, useful software.
              </p>
            </div>

            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
