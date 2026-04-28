"use client"

import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  const footerLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ]

  return (
    <footer className="py-16 bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="text-2xl font-medium tracking-tight">
              Mrf Architekten
            </a>
            <p className="mt-4 text-primary-foreground/70 max-w-sm leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-primary-foreground/60">
              {t.footer.navigation}
            </h3>
            <ul className="mt-6 space-y-4">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-primary-foreground/60">
              {t.footer.contactTitle}
            </h3>
            <ul className="mt-6 space-y-4 text-primary-foreground/80">
              <li>{t.contact.locationValue}</li>
              <li>
                <a href="mailto:info@mrf-architekten.ch" className="hover:text-primary-foreground transition-colors">
                  info@mrf-architekten.ch
                </a>
              </li>
              <li>
                <a href="tel:+41XXXXXXXX" className="hover:text-primary-foreground transition-colors">
                  +41 XX XXX XX XX
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Mrf Architekten. {t.footer.copyright}
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              {t.footer.imprint}
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              {t.footer.privacy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
