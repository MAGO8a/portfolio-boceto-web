"use client"

const technologies = [
  { name: "React", icon: "⚛️", color: "primary" as const },
  { name: "Next.js", icon: "▲", color: "accent" as const },
  { name: "TypeScript", icon: "TS", color: "primary" as const },
  { name: "JavaScript", icon: "JS", color: "success" as const },
  { name: "TailwindCSS", icon: "🌊", color: "accent" as const },
  { name: "Node.js", icon: "🟢", color: "success" as const },
  { name: "Git", icon: "📦", color: "primary" as const },
  { name: "Figma", icon: "🎨", color: "accent" as const },
]

export function TechSection() {
  return (
    <section id="tecnologias" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-merriweather)] text-3xl md:text-4xl font-bold mb-4">
            Herramientas que domino
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Tecnologías con las que trabajo día a día para crear productos digitales de calidad.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group bg-card border-2 border-border rounded-lg overflow-hidden hover:border-foreground/40 hover:-translate-y-1 hover:shadow-lg transition-all"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Mini window bar */}
              <div
                className={`h-2 ${
                  tech.color === "primary" ? "bg-primary" : tech.color === "accent" ? "bg-accent" : "bg-success"
                }`}
              />

              <div className="p-6 flex flex-col items-center gap-3">
                <div className="w-14 h-14 flex items-center justify-center bg-background text-2xl font-bold rounded-lg border-2 border-border group-hover:border-foreground/30 transition-colors">
                  {tech.icon}
                </div>
                <span className="font-medium text-foreground">{tech.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
