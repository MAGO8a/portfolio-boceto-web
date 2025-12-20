"use client"

import type React from "react"

interface ArcadeCardProps {
  children: React.ReactNode
  headerColor?: "primary" | "accent" | "success"
  headerContent?: React.ReactNode
  className?: string
}

export function ArcadeCard({ children, headerColor = "primary", headerContent, className = "" }: ArcadeCardProps) {
  const headerBgClass = {
    primary: "bg-primary",
    accent: "bg-accent",
    success: "bg-success",
  }[headerColor]

  return (
    <div
      className={`group bg-card border-2 border-border rounded-lg overflow-hidden hover:border-foreground/40 transition-all ${className}`}
    >
      {/* Window Title Bar */}
      <div className={`${headerBgClass} px-4 py-2 flex items-center justify-between`}>
        <div className="flex-1">{headerContent}</div>
        {/* Window Controls */}
        <div className="flex items-center gap-1.5">
          <button
            className="w-4 h-4 border-2 border-white/80 rounded-sm hover:bg-white/20 transition-colors"
            aria-label="Minimizar"
          />
          <button
            className="w-4 h-4 border-2 border-white/80 flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="Maximizar"
          >
            <span className="w-2 h-2 border border-white/80" />
          </button>
          <button
            className="w-4 h-4 border-2 border-white/80 rounded-sm flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="Cerrar"
          >
            <svg className="w-2.5 h-2.5 text-white/80" viewBox="0 0 10 10" stroke="currentColor" strokeWidth="2">
              <path d="M1 1L9 9M9 1L1 9" />
            </svg>
          </button>
        </div>
      </div>
      {/* Card Content */}
      <div className="p-6">{children}</div>
    </div>
  )
}

interface ArcadeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  children: React.ReactNode
}

export function ArcadeButton({ variant = "primary", children, className = "", ...props }: ArcadeButtonProps) {
  const baseStyles =
    "inline-flex items-center gap-2 px-6 py-3 font-medium border-2 rounded-lg transition-all hover:scale-[1.02] active:scale-[0.98]"

  const variantStyles = {
    primary: "bg-primary text-primary-foreground border-primary hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground border-secondary hover:bg-secondary/80",
    outline: "bg-transparent text-foreground border-foreground/30 hover:border-foreground hover:bg-foreground/5",
  }[variant]

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </button>
  )
}

interface ArcadeTagProps {
  children: React.ReactNode
  color?: "primary" | "accent" | "success" | "muted"
}

export function ArcadeTag({ children, color = "muted" }: ArcadeTagProps) {
  const colorStyles = {
    primary: "bg-primary/15 text-primary border-primary/30",
    accent: "bg-accent/15 text-accent border-accent/30",
    success: "bg-success/15 text-success border-success/30",
    muted: "bg-secondary text-secondary-foreground border-border",
  }[color]

  return (
    <span className={`inline-block px-3 py-1 text-xs font-medium border rounded-full ${colorStyles}`}>{children}</span>
  )
}
