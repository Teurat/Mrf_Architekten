"use client"

import { MapPin, Mail } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <span className="text-sm uppercase tracking-widest text-muted-foreground">
            {t.contact.label}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-serif font-medium text-foreground">
            {t.contact.title}
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Info */}
        <div className="mt-16 grid sm:grid-cols-2 gap-6 max-w-lg mx-auto">
          <div className="flex items-start gap-4 bg-card rounded-xl p-6 border border-border">
            <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-foreground" />
            </div>
            <div>
              <h3 className="font-medium text-foreground">{t.contact.location}</h3>
              <p className="mt-1 text-muted-foreground">{t.contact.locationValue}</p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-card rounded-xl p-6 border border-border">
            <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-foreground" />
            </div>
            <div>
              <h3 className="font-medium text-foreground">{t.contact.email}</h3>
              <a
                href="mailto:info@swiss-arch-concept.ch"
                className="mt-1 text-muted-foreground hover:text-foreground transition-colors break-all"
              >
                info@swiss-arch-concept.ch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
