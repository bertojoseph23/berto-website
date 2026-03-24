export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center px-4 sm:px-8 md:px-16 py-24">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <div>
          <h2 className="text-sm uppercase tracking-widest text-[#9F0000] red-glow mb-2">ORBITAL VIEWPORT</h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-[#9F0000]">PROFILE</h3>
          <p className="text-xs mb-2">SYSTEM SCAN COMPLETE</p>

          <div className="mt-8 space-y-4 text-gray-300">
            <p>
              Berto Joseph is a digital craftsman specializing in creating immersive web experiences that blend
              cutting-edge technology with thoughtful design.
            </p>
            <p>
              With expertise in 3D visualization, interactive design, and frontend development, Berto creates digital
              spaces that invite exploration and engagement.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-bold mb-6 text-[#9F0000]">TECHNICAL SPECIFICATIONS</h3>

          <div className="space-y-6">
            <div>
              <h4 className="text-sm uppercase tracking-widest text-[#9F0000] red-glow mb-2">SKILLS</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-[#9F0000]"></div>
                  <span>Three.js / WebGL</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-[#9F0000]"></div>
                  <span>React / Next.js</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-[#9F0000]"></div>
                  <span>UI/UX Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-[#9F0000]"></div>
                  <span>3D Modeling</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-[#9F0000]"></div>
                  <span>Animation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-[#9F0000]"></div>
                  <span>Creative Coding</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-widest text-[#9F0000] red-glow mb-2">EXPERIENCE</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <span className="font-bold">Senior Interactive Developer</span>
                    <span className="text-sm text-gray-400">2022 - Present</span>
                  </div>
                  <p className="text-sm text-gray-400">Future Systems Inc.</p>
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <span className="font-bold">Creative Technologist</span>
                    <span className="text-sm text-gray-400">2019 - 2022</span>
                  </div>
                  <p className="text-sm text-gray-400">Digital Frontier Studio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

