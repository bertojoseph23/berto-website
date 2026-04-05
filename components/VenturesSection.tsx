const ventures = [
  {
    name: "OutaHere",
    tagline: "AI-Powered Travel Planning",
    status: "Approaching Launch",
    statusColor: "text-green-400",
    description:
      "An AI-native travel platform that rethinks trip planning from the ground up. Instead of toggling between tabs and comparison sites, OutaHere uses intelligent agents to generate personalized itineraries, surface relevant options, and handle the logistics — so the only decision left is where to go.",
    stack: ["Next.js", "Supabase", "Groq", "Stripe"],
    domain: "OutaHere.ai",
    url: "https://outahere.ai",
  },
  {
    name: "Levelon",
    tagline: "AI Career & Business Automation",
    status: "Active Development",
    statusColor: "text-[var(--cyan)]",
    description:
      "A comprehensive AI platform built around 21 specialized agents, each designed to handle a distinct function in career development and business operations. Freelance management, invoicing, certification tracking, and workflow automation — unified under one system designed to work for you, not the other way around.",
    stack: ["Next.js", "Supabase", "Stripe"],
    domain: "levelon.ai",
    url: "https://levelon.ai",
  },
  {
    name: "Vaultis",
    tagline: "Blockchain Treasury Tooling",
    status: "Early Stage",
    statusColor: "text-[var(--gold)]",
    description:
      "Intelligent treasury tooling built natively for on-chain finance. AI-assisted decision-making for digital assets, treasury positions, and on-chain financial operations. Where agentic AI meets blockchain infrastructure.",
    stack: ["Blockchain", "AI", "DeFi"],
  },
]

export default function VenturesSection() {
  return (
    <section id="ventures" className="min-h-screen px-4 py-20 sm:px-8 sm:py-24 md:px-16">
      <div className="max-w-7xl mx-auto w-full">
        <div data-reveal className="reveal-on-scroll mb-12 sm:mb-16">
          <p className="text-xs font-mono tracking-[0.3em] cyan-glow mb-3 uppercase">Ventures</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What I&apos;m Building</h2>
        </div>

        <div className="space-y-8">
          {ventures.map((v, index) => (
            <div
              key={v.name}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${index * 90}ms` }}
              className="reveal-on-scroll group border border-white/[0.08] rounded-lg p-6 sm:p-8 bg-white/[0.02] card-hover"
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-10">
                {/* Left: Name + Meta */}
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    {v.url ? (
                      <a
                        href={v.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[var(--cyan)] hover:text-[var(--cyan)]"
                      >
                        <span>{v.name}</span>
                        <span className="text-sm font-mono text-[var(--cyan)]/70">↗</span>
                      </a>
                    ) : (
                      <h3 className="text-2xl font-bold text-white group-hover:text-[var(--cyan)] transition-colors duration-300">
                        {v.name}
                      </h3>
                    )}
                  </div>
                  <p className="text-sm text-white/50 mb-3">{v.tagline}</p>
                  <div className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${v.statusColor} opacity-80`}
                      style={{ backgroundColor: "currentColor" }} />
                    <span className={`text-xs font-mono tracking-wider ${v.statusColor} opacity-80`}>
                      {v.status}
                    </span>
                  </div>
                  {v.domain && (
                    v.url ? (
                      <a
                        href={v.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-block text-xs font-mono text-[var(--gold)] opacity-70 transition-opacity hover:opacity-100"
                      >
                        {v.domain}
                      </a>
                    ) : (
                      <p className="mt-3 text-xs font-mono text-[var(--gold)] opacity-60">
                        {v.domain}
                      </p>
                    )
                  )}
                </div>

                {/* Right: Description + Stack */}
                <div>
                  <p className="text-white/70 leading-relaxed mb-5">{v.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {v.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-3 py-1 rounded border border-[var(--cyan)]/15 text-[var(--cyan)] opacity-60 bg-[var(--cyan)]/[0.04]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
