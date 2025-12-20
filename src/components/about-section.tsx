"use client"

import { SketchCode, SketchUser, SketchLayers } from "./sketch-icons"
import { ArcadeCard } from "./arcade-card"

const highlights = [
  {
    icon: SketchCode,
    title: "Código Limpio",
    description: "Escribo código mantenible, escalable y siguiendo las mejores prácticas de la industria.",
    color: "primary" as const,
  },
  {
    icon: SketchUser,
    title: "UX Centrado",
    description: "Diseño pensando en el usuario, creando interfaces intuitivas y accesibles para todos.",
    color: "accent" as const,
  },
  {
    icon: SketchLayers,
    title: "Detallista",
    description: "Cada pixel cuenta. Me apasiona perfeccionar cada aspecto visual y funcional.",
    color: "success" as const,
  },
]

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-merriweather)] text-3xl md:text-4xl font-bold mb-4">
            Un poco sobre mi trayectoria
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Portrait with arcade frame */}
          <div className="flex justify-center">
            <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
              {/* Window bar */}
              <div className="bg-success px-4 py-2 flex items-center justify-between">
                <span className="text-white/90 text-sm font-medium">workspace.jpg</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 border-2 border-white/80 rounded-sm" />
                  <span className="w-3 h-3 border-2 border-white/80 rounded-sm" />
                  <span className="w-3 h-3 border-2 border-white/80 rounded-sm" />
                </div>
              </div>
              <div className="p-3">
                <img
                  src="/creative-workspace-desk-with-laptop-code-on-screen.jpg"
                  alt="Espacio de trabajo de Marco"
                  className="w-72 h-72 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Soy un <span className="text-foreground font-medium">Ingeniero Informático</span> apasionado por el
              desarrollo web y la creación de experiencias digitales excepcionales. Con años de experiencia en el
              ecosistema front-end, me especializo en construir aplicaciones modernas, accesibles y de alto rendimiento.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Mi enfoque combina una base técnica sólida con un ojo crítico para el diseño. Creo firmemente que el mejor
              código es aquel que los usuarios nunca notan, pero que hace su experiencia fluida y agradable.
            </p>
            <p className="font-[family-name:var(--font-kalam)] text-xl text-accent">
              {'"El detalle hace la diferencia entre lo bueno y lo extraordinario."'}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {highlights.map((item, index) => (
            <ArcadeCard
              key={index}
              headerColor={item.color}
              headerContent={<span className="text-white/90 text-sm font-medium">{item.title}</span>}
              className="hover:-translate-y-1"
            >
              <div className="flex flex-col items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg border-2 border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-merriweather)] text-xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </ArcadeCard>
          ))}
        </div>
      </div>
    </section>
  )
}
