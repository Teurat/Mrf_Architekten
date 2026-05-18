"use client"

import { PenTool, Stamp, Layers, Telescope } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const serviceIcons = [PenTool, Stamp, Layers, Telescope]

export function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm uppercase tracking-widest text-muted-foreground">
            {t.services.label}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-serif font-medium text-foreground">
            {t.services.title}
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[index]
            return (
              <div
                key={index}
                className="group p-8 bg-card rounded-lg border border-border hover:border-foreground/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                  <Icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 text-xl font-medium text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
