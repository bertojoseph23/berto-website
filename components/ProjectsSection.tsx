export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "NEBULA",
      description: "Interactive 3D visualization platform for data exploration",
      year: "2024",
      tags: ["WebGL", "Data Visualization", "React"],
    },
    {
      id: 2,
      title: "QUANTUM",
      description: "Experimental physics simulation with particle effects",
      year: "2023",
      tags: ["Three.js", "Physics", "Animation"],
    },
    {
      id: 3,
      title: "AURORA",
      description: "Immersive virtual reality experience for architectural visualization",
      year: "2023",
      tags: ["VR", "Architecture", "3D Modeling"],
    },
  ]

  return (
    <section id="projects" className="min-h-screen flex items-center px-4 sm:px-8 md:px-16 py-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-16">
          <h2 className="text-sm uppercase tracking-widest text-[#9F0000] red-glow mb-2">MISSION LOG</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-[#9F0000]">PROJECTS</h3>
        </div>

        <div className="space-y-16">
          {projects.map((project) => (
            <div key={project.id} className="border-t border-white/20 pt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl sm:text-2xl font-bold">{project.title}</h4>
                <p className="text-sm text-gray-400 mt-2">{project.year}</p>
              </div>

              <div className="md:col-span-2">
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 bg-white/10 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

