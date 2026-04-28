"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Side - Info */}
          <div>
            <span className="text-sm uppercase tracking-widest text-muted-foreground">
              {t.contact.label}
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-serif font-medium text-foreground">
              {t.contact.title}
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              {t.contact.subtitle}
            </p>

            {/* Contact Info */}
            <div className="mt-12 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-card flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">{t.contact.location}</h3>
                  <p className="mt-1 text-muted-foreground">{t.contact.locationValue}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-card flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">{t.contact.email}</h3>
                  <a href="mailto:info@mrf-architekten.ch" className="mt-1 text-muted-foreground hover:text-foreground transition-colors">
                    info@mrf-architekten.ch
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-card flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">{t.contact.phone}</h3>
                  <a href="tel:+41XXXXXXXX" className="mt-1 text-muted-foreground hover:text-foreground transition-colors">
                    +41 XX XXX XX XX
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-card rounded-xl p-8 lg:p-10 border border-border">
            <h3 className="text-xl font-medium text-foreground">
              {t.contact.formTitle}
            </h3>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  {t.contact.name}
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder={t.contact.namePlaceholder}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  {t.contact.emailLabel}
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t.contact.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  {t.contact.phoneLabel}
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder={t.contact.phonePlaceholder}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-background"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder={t.contact.messagePlaceholder}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full group">
                {t.contact.submit}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
