"use client"

import { useLanguage } from "@/lib/language-context"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-4/5 overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="Architecture office work"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/50 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="text-sm uppercase tracking-widest text-muted-foreground">
              {t.about.label}
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-serif font-medium text-foreground leading-tight">
              {t.about.title}
            </h2>
            <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>
            <div className="mt-10">
              <span className="text-4xl font-serif font-medium text-foreground">CH</span>
              <p className="mt-1 text-sm text-muted-foreground">{t.about.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
