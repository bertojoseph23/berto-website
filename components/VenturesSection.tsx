const ventures = [
  {
    name: "OutaHere",
    tagline: "AI-Powered Travel Planning",
    status: "Approaching Launch",
    statusColor: "text-green-400",
    description:
      "Transforms how people discover, plan, and book travel. AI agents generate personalized itineraries, surface relevant options, and remove the friction from trip planning.",
    stack: ["Next.js", "Supabase", "Groq", "Stripe"],
    domain: "OutaHere.ai",
  },
  {
    name: "Levelon",
    tagline: "AI Career & Business Automation",
    status: "Active Development",
    statusColor: "text-[var(--cyan)]",
    description:
      "21 specialized AI agents, each handling a distinct function in career development and business operations. Freelance management, invoicing, certification tracking — unified under one system.",
    stack: ["Next.js", "Supabase", "Stripe"],
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
    <section id="ventures" className="min-h-screen flex items-center px-4 sm:px-8 md:px-16 py-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-16">
          <p className="text-xs font-mono tracking-[0.3em] cyan-glow mb-3 uppercase">Ventures</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What I&apos;m Building</h2>
        </div>

        <div className="space-y-8">
          {ventures.map((v) => (
            <div
              key={v.name}
              className="group border border-white/[0.08] rounded-lg p-6 sm:p-8 bg-white/[0.02] card-hover"
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-10">
                {/* Left: Name + Meta */}
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-2xl font-bold text-white group-hover:text-[var(--cyan)] transition-colors duration-300">
                      {v.name}
                    </h3>
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
                    <p className="text-xs font-mono text-[var(--gold)] opacity-60 mt-3">
                      {v.domain}
                    </p>
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
