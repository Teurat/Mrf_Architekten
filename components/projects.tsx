"use client"

import { useLanguage } from "@/lib/language-context"

const projectImages = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
]

export function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm uppercase tracking-widest text-muted-foreground">
            {t.projects.label}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-serif font-medium text-foreground">
            {t.projects.title}
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {t.projects.items.map((project, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src={projectImages[index]}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-sm text-primary-foreground/80 uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="mt-2 text-2xl font-medium text-primary-foreground">
                  {project.title}
                </h3>
              </div>

              {/* Always visible label on mobile */}
              <div className="md:hidden absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/90 to-transparent">
                <span className="text-xs text-primary-foreground/80 uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="mt-1 text-lg font-medium text-primary-foreground">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
