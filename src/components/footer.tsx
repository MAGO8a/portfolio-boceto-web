"use client"

import { SketchGithub, SketchLinkedIn, SketchTwitter } from "./sketch-icons"

const socialLinks = [
  { icon: SketchGithub, href: "https://github.com", label: "GitHub" },
  { icon: SketchLinkedIn, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: SketchTwitter, href: "https://twitter.com", label: "Twitter" },
]

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Copyright */}
        <p className="text-muted-foreground text-sm text-center md:text-left">
          © 2025 Marco Antonio Gonzalez Ochoa.{" "}
          <span className="font-[family-name:var(--font-kalam)]">Hecho con lápiz y código.</span>
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
