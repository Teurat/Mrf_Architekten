"use client"

import { MessageSquare, Target, MapPin, Palette } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const featureIcons = [MessageSquare, Target, MapPin, Palette]

export function WhyUs() {
  const { t } = useLanguage()

  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm uppercase tracking-widest text-muted-foreground">
            {t.whyUs.label}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-serif font-medium text-foreground">
            {t.whyUs.title}
          </h2>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {t.whyUs.features.map((feature, index) => {
            const Icon = featureIcons[index]
            return (
              <div
                key={index}
                className="group flex flex-col items-center text-center p-6 rounded-lg hover:bg-secondary transition-colors duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-secondary group-hover:bg-accent flex items-center justify-center transition-colors duration-300">
                  <Icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="mt-4 text-sm font-medium text-foreground leading-tight">
                  {feature}
                </h3>
              </div>
            )
          })}
        </div>

        {/* Quote */}
        <div className="mt-20 max-w-3xl mx-auto text-center">
          <blockquote className="relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-6xl text-accent font-serif">&ldquo;</div>
            <p className="text-xl md:text-2xl font-serif text-foreground leading-relaxed italic pt-8">
              {t.whyUs.quote}
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
