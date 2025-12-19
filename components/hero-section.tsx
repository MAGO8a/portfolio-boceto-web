"use client"

import { useEffect, useState } from "react"
import { ArcadeButton } from "./arcade-card"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className={`space-y-6 ${mounted ? "animate-in fade-in slide-in-from-left-10 duration-700" : "opacity-0"}`}>
          <p className="text-accent font-[family-name:var(--font-kalam)] text-xl">¡Hola! 👋</p>
          <h1 className="font-[family-name:var(--font-merriweather)] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
            Soy <span className="text-primary">Marco</span> Gonzalez
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Ingeniero Informático y <span className="text-accent">Desarrollador Front-End</span>
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-lg">
            Creo experiencias web accesibles, modernas y con atención al detalle. Transformando ideas en interfaces que
            conectan con las personas.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#proyectos">
              <ArcadeButton variant="primary">
                Ver Mis Proyectos
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </ArcadeButton>
            </a>
            <a href="#contacto">
              <ArcadeButton variant="outline">Contáctame</ArcadeButton>
            </a>
          </div>
        </div>

        <div
          className={`flex justify-center ${mounted ? "animate-in fade-in slide-in-from-right-10 duration-700 delay-200" : "opacity-0"}`}
        >
          <div className="bg-card border-2 border-border rounded-lg overflow-hidden hover:border-foreground/40 transition-all">
            {/* Window bar */}
            <div className="bg-accent px-4 py-2 flex items-center justify-between">
              <span className="text-white/90 text-sm font-medium">marco-portrait.jpg</span>
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-4 border-2 border-white/80 rounded-sm" />
                <span className="w-4 h-4 border-2 border-white/80 rounded-sm flex items-center justify-center">
                  <span className="w-2 h-2 border border-white/80" />
                </span>
                <span className="w-4 h-4 border-2 border-white/80 rounded-sm flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white/80" viewBox="0 0 10 10" stroke="currentColor" strokeWidth="2">
                    <path d="M1 1L9 9M9 1L1 9" />
                  </svg>
                </span>
              </div>
            </div>
            <div className="p-3">
              <img
                src="/professional-pencil-sketch-portrait-of-a-young-mal.jpg"
                alt="Retrato de Marco Antonio Gonzalez Ochoa"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
