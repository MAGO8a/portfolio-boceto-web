import { Header } from "@/src/components/header"
import { HeroSection } from "@/src/components/hero-section"
import { AboutSection } from "@/src/components/about-section"
import { TechSection } from "@/src/components/tech-section"
import { ProjectsSection } from "@/src/components/projects-section"
import { ContactSection } from "@/src/components/contact-section"
import { Footer } from "@/src/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <TechSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
