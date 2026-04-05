"use client"

import { Github, Mail, ArrowUpRight } from "lucide-react"
import { SplineScene } from "@/components/ui/spline"

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-[85vh] px-4 py-20 sm:px-8 sm:py-24 md:px-16">
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
                className="group flex items-start gap-4 rounded-lg border border-white/[0.08] bg-white/[0.02] p-4 card-hover sm:items-center"
              >
                <div className="w-10 h-10 rounded-full border border-[var(--cyan)]/20 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-[var(--cyan)] opacity-70" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-mono tracking-wider text-white/40 uppercase mb-0.5">Email</p>
                  <p className="break-words text-white/80 transition-colors group-hover:text-[var(--cyan)]">
                    berto.joseph@outlook.com
                  </p>
                </div>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-white/20 transition-colors group-hover:text-[var(--cyan)] sm:mt-0" />
              </a>

              <a
                href="https://github.com/bertojoseph23"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-lg border border-white/[0.08] bg-white/[0.02] p-4 card-hover sm:items-center"
              >
                <div className="w-10 h-10 rounded-full border border-[var(--cyan)]/20 flex items-center justify-center">
                  <Github className="w-4 h-4 text-[var(--cyan)] opacity-70" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-mono tracking-wider text-white/40 uppercase mb-0.5">GitHub</p>
                  <p className="text-white/80 group-hover:text-[var(--cyan)] transition-colors">
                    bertojoseph23
                  </p>
                </div>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-white/20 transition-colors group-hover:text-[var(--cyan)] sm:mt-0" />
              </a>
            </div>
          </div>

          <div
            data-reveal
            style={{ ["--reveal-delay" as string]: "120ms" }}
            className="reveal-on-scroll contact-spline-panel relative min-h-[360px] overflow-hidden rounded-[24px] border border-white/[0.08] bg-black/45 backdrop-blur-sm sm:min-h-[420px] sm:rounded-[28px]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,212,255,0.08),transparent_34%),radial-gradient(circle_at_75%_25%,rgba(201,168,76,0.1),transparent_28%)]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            <div className="absolute left-4 top-4 z-20 rounded-full border border-white/10 bg-black/45 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-white/45 backdrop-blur-sm sm:left-5 sm:top-5 sm:text-[11px]">
              Live Contact Panel
            </div>

            <div className="absolute inset-x-4 bottom-4 z-20 rounded-2xl border border-white/10 bg-black/45 p-4 backdrop-blur-md sm:inset-x-5 sm:bottom-5">
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
