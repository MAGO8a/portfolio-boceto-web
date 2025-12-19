"use client"

import { SketchExternalLink, SketchGithub } from "./sketch-icons"
import { ArcadeCard, ArcadeTag } from "./arcade-card"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Plataforma de comercio electrónico completa con carrito de compras, pagos y panel de administración.",
    image: "/modern-ecommerce-website-dashboard-mockup--clean-d.jpg",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    demoUrl: "#",
    codeUrl: "#",
    color: "primary" as const,
  },
  {
    title: "Dashboard Analytics",
    description: "Panel de control interactivo para visualización de datos y métricas en tiempo real.",
    image: "/analytics-dashboard-with-charts-and-graphs--dark-t.jpg",
    tags: ["React", "D3.js", "TailwindCSS", "Node.js"],
    demoUrl: "#",
    codeUrl: "#",
    color: "accent" as const,
  },
  {
    title: "Task Manager App",
    description: "Aplicación de gestión de tareas con colaboración en tiempo real y notificaciones.",
    image: "/task-management-app-interface--minimal-clean-desig.jpg",
    tags: ["React", "Firebase", "TailwindCSS"],
    demoUrl: "#",
    codeUrl: "#",
    color: "success" as const,
  },
  {
    title: "Portfolio Template",
    description: "Plantilla de portafolio moderna y personalizable para desarrolladores y creativos.",
    image: "/developer-portfolio-website-template--elegant-mode.jpg",
    tags: ["Next.js", "Framer Motion", "MDX"],
    demoUrl: "#",
    codeUrl: "#",
    color: "primary" as const,
  },
]

export function ProjectsSection() {
  return (
    <section id="proyectos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-merriweather)] text-3xl md:text-4xl font-bold mb-4">
            Algunos de mis proyectos
          </h2>
          <div className="w-24 h-1 bg-success mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades y pasión por crear productos digitales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ArcadeCard
              key={index}
              headerColor={project.color}
              headerContent={<span className="text-white/90 text-sm font-medium truncate">{project.title}</span>}
              className="hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg border-2 border-border mb-4 -mx-2 -mt-2">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Project Info */}
              <div className="space-y-3">
                <h3 className="font-[family-name:var(--font-merriweather)] text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <ArcadeTag key={tag}>{tag}</ArcadeTag>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-2">
                  <a
                    href={project.demoUrl}
                    className="inline-flex items-center gap-1 text-sm text-primary hover:text-accent transition-colors group/link"
                  >
                    Demo
                    <SketchExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                  <a
                    href={project.codeUrl}
                    className="inline-flex items-center gap-1 text-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    <SketchGithub className="w-4 h-4" />
                    Código
                  </a>
                </div>
              </div>
            </ArcadeCard>
          ))}
        </div>
      </div>
    </section>
  )
}
