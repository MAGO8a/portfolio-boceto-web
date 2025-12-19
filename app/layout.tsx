import type React from "react"
import type { Metadata } from "next"
import { Inter, Merriweather, Kalam } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
})
const kalam = Kalam({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-kalam",
})

export const metadata: Metadata = {
  title: "Marco Antonio Gonzalez Ochoa | Desarrollador Front-End",
  description:
    "Portafolio profesional de Marco Antonio Gonzalez Ochoa, Ingeniero Informático y Desarrollador Front-End especializado en crear experiencias web modernas y accesibles.",
  keywords: ["Desarrollador Front-End", "React", "Next.js", "Ingeniero Informático", "Portfolio"],
  authors: [{ name: "Marco Antonio Gonzalez Ochoa" }],
  openGraph: {
    title: "Marco Antonio Gonzalez Ochoa | Desarrollador Front-End",
    description: "Portafolio profesional - Ingeniero Informático y Desarrollador Front-End",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${merriweather.variable} ${kalam.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
