"use client"

import { LanguageProvider } from "@/lib/language-context"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { WhyUs } from "@/components/why-us"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <LanguageProvider>
      <main>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Process />
        <WhyUs />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  )
}
