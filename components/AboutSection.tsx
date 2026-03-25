export default function AboutSection() {
  const certifications = [
    { name: "AWS Cloud Practitioner", year: "2024" },
    { name: "CompTIA Security+", year: "2023" },
    { name: "Professional Scrum Master II", year: "2022" },
    { name: "Professional Scrum Master I", year: "2020" },
  ]

  const skills = [
    "Cloud Infrastructure",
    "DevSecOps",
    "Systems Architecture",
    "AI / Agentic Systems",
    "Blockchain / Web3",
    "Next.js / React",
    "Supabase",
    "AWS",
  ]

  return (
    <section
      id="about"
      data-reveal
      className="reveal-on-scroll min-h-screen flex items-center px-4 sm:px-8 md:px-16 py-24"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Bio */}
        <div>
          <p className="text-xs font-mono tracking-[0.3em] cyan-glow mb-3 uppercase">About</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white">
            Engineer. Founder. Builder.
          </h2>

          <div className="space-y-5 text-white/70 leading-relaxed">
            <p>
              Cloud and DevSecOps engineer with 8+ years building secure, high-availability systems
              at scale. Works at the intersection of reliability, security engineering, and systems
              architecture — designing for performance and compliance from the ground up.
            </p>
            <p>
              Quietly building a portfolio of AI-native ventures: a travel platform, a business
              automation system, and blockchain treasury tooling. Each one reflects the same conviction —
              well-designed systems can do meaningful work autonomously.
            </p>
            <p className="text-white/50 text-sm italic">
              B.S. Computer Science, Morgan State University
            </p>
          </div>

          {/* Recognition */}
          <div className="mt-10 p-4 border border-[var(--cyan)]/10 rounded bg-white/[0.02]">
            <p className="text-xs font-mono tracking-[0.2em] text-[var(--gold)] gold-glow mb-2">
              RECOGNITION
            </p>
            <p className="text-sm text-white/80">
              1st Place — IBM Atlanta Coding Hackathon, 2018
            </p>
            <p className="text-sm text-white/60 mt-1">
              Northrop Grumman Software Engineer Apprentice Program, 2020
            </p>
          </div>
        </div>

        {/* Specs */}
        <div>
          {/* Skills */}
          <div className="mb-10">
            <p className="text-xs font-mono tracking-[0.3em] cyan-glow mb-4 uppercase">
              Technical Domain
            </p>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill) => (
                <div key={skill} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--cyan)] opacity-60" />
                  <span className="text-sm text-white/80">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <p className="text-xs font-mono tracking-[0.3em] cyan-glow mb-4 uppercase">
              Certifications
            </p>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex justify-between items-center py-2 border-b border-white/[0.06]"
                >
                  <span className="text-sm text-white/80">{cert.name}</span>
                  <span className="text-xs font-mono text-[var(--gold)] opacity-70">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
