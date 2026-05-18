"use client"

import { useLanguage } from "@/lib/language-context"

export function Process() {
  const { t } = useLanguage()

  return (
    <section id="process" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm uppercase tracking-widest text-muted-foreground">
            {t.process.label}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-serif font-medium text-foreground">
            {t.process.title}
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {t.process.subtitle}
          </p>
        </div>

        {/* Process Steps */}
        <div className="mt-16 relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-border" />

          <div className="grid md:grid-cols-4 gap-8">
            {t.process.steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Number Circle */}
                <div className="relative z-10 w-16 h-16 mx-auto rounded-full bg-card border-2 border-foreground flex items-center justify-center">
                  <span className="text-lg font-medium text-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mt-6 text-lg font-medium text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
