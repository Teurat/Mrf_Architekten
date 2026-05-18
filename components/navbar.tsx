"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#process", label: t.nav.process },
    { href: "#referenzen", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="text-xl font-medium tracking-tight text-foreground">
            Swiss Arch-Concept
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            
            {/* Language Switcher */}
            <div className="flex items-center gap-1 ml-2 border border-border rounded-md overflow-hidden">
              <button
                onClick={() => setLanguage("de")}
                className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                  language === "de"
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                DE
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                  language === "en"
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                EN
              </button>
            </div>

            <Button asChild size="sm" className="ml-2">
              <a href="#contact">{t.nav.cta}</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border">
            <div className="flex flex-col py-6 px-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="flex items-center gap-2 py-2">
                <span className="text-sm text-muted-foreground">
                  {language === "de" ? "Sprache:" : "Language:"}
                </span>
                <div className="flex items-center gap-1 border border-border rounded-md overflow-hidden">
                  <button
                    onClick={() => setLanguage("de")}
                    className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                      language === "de"
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    DE
                  </button>
                  <button
                    onClick={() => setLanguage("en")}
                    className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                      language === "en"
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>
              
              <Button asChild className="mt-4 w-full">
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  {t.nav.cta}
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
