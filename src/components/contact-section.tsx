"use client"

import type React from "react"

import { useState } from "react"
import { SketchGithub, SketchLinkedIn, SketchMail, SketchSend, SketchTwitter } from "./sketch-icons"
import { ArcadeButton, ArcadeCard } from "./arcade-card"

const socialLinks = [
  { icon: SketchGithub, label: "GitHub", href: "https://github.com" },
  { icon: SketchLinkedIn, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: SketchTwitter, label: "X / Twitter", href: "https://twitter.com" },
  { icon: SketchMail, label: "Email", href: "mailto:marco@example.com" },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contacto" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-merriweather)] text-3xl md:text-4xl font-bold mb-4">
            {"¿Trabajamos juntos?"}
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Estoy abierto a nuevas oportunidades y colaboraciones. ¡No dudes en contactarme!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Social Links */}
          <div className="space-y-8">
            <div>
              <h3 className="font-[family-name:var(--font-merriweather)] text-xl font-semibold mb-6">Encuéntrame en</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-card rounded-lg border-2 border-border hover:border-primary transition-all hover:-translate-y-0.5 group"
                  >
                    <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <ArcadeCard headerColor="accent" headerContent={<span className="text-white/90 text-sm">quote.md</span>}>
              <p className="font-[family-name:var(--font-kalam)] text-lg text-muted-foreground">
                {
                  '"Cada proyecto es una oportunidad para crear algo que impacte positivamente en la vida de las personas."'
                }
              </p>
              <p className="text-right text-accent mt-2">— Marco</p>
            </ArcadeCard>
          </div>

          <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
            {/* Window bar */}
            <div className="bg-primary px-4 py-2 flex items-center justify-between">
              <span className="text-white/90 text-sm font-medium">contact-form.tsx</span>
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

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-background border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-background border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-background border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                  placeholder="¿De qué quieres hablar?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-background border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto o idea..."
                  required
                />
              </div>

              <ArcadeButton type="submit" variant="primary">
                Enviar Mensaje
                <SketchSend className="w-5 h-5" />
              </ArcadeButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
