export type Language = "de" | "en"

export const translations = {
  de: {
    // Navbar
    nav: {
      about: "Über uns",
      services: "Leistungen",
      process: "Prozess",
      projects: "Projekte",
      contact: "Kontakt",
      cta: "Projekt anfragen",
    },
    // Hero
    hero: {
      title: "Wir gestalten Lebensräume.",
      subtitle: "Ein junges Architekturbüro in der Schweiz – mit klaren Ideen, präziser Planung und dem Anspruch, Räume mit Qualität zu schaffen.",
      cta: "Projekt anfragen",
      learnMore: "Mehr über uns",
    },
    // About
    about: {
      label: "Über uns",
      title: "Architektur mit Anspruch",
      p1: "Wir sind ein junges Architekturbüro mit Sitz in der Schweiz – geprägt von klaren Ideen, präziser Planung und dem Anspruch, Räume mit Qualität zu schaffen.",
      p2: "Unsere Arbeit beginnt nicht mit Plänen, sondern mit dem Zuhören. Wir verstehen die Bedürfnisse unserer Kunden und übersetzen sie in Architektur, die funktioniert, begeistert und Bestand hat.",
      p3: "Mit über 3 Jahren Erfahrung in der Schweiz kennen wir die lokalen Anforderungen, Prozesse und Standards genau. Dieses Wissen kombinieren wir mit einem frischen, zeitgemässen Ansatz in Gestaltung und Planung.",
      experience: "Jahre Erfahrung",
      location: "Standort Schweiz",
    },
    // Services
    services: {
      label: "Unsere Leistungen",
      title: "Von der Idee zur Realität",
      subtitle: "Wir begleiten Sie durch jeden Schritt Ihres Bauprojekts mit Expertise und Leidenschaft.",
      items: [
        { title: "Architekturplanung", description: "Durchdachte Entwürfe, die Funktion und Ästhetik vereinen." },
        { title: "Baugesuch", description: "Professionelle Begleitung durch den gesamten Bewilligungsprozess." },
        { title: "Ausführungsplanung", description: "Detaillierte Pläne für eine präzise Umsetzung Ihres Projekts." },
        { title: "Projektbegleitung", description: "Ganzheitliche Betreuung von der ersten Idee bis zur Übergabe." },
        { title: "Innenraumkonzepte", description: "Harmonische Raumgestaltung, die zum Leben einlädt." },
        { title: "Beratung & Konzeptentwicklung", description: "Strategische Beratung für Ihre architektonischen Visionen." },
      ],
    },
    // Process
    process: {
      label: "Unser Prozess",
      title: "Strukturiert zum Erfolg",
      subtitle: "Ein klar definierter Ablauf garantiert Transparenz und Effizienz in jedem Projekt.",
      steps: [
        { title: "Zuhören & Verstehen", description: "Wir nehmen uns Zeit, Ihre Wünsche und Anforderungen vollständig zu erfassen." },
        { title: "Konzept & Planung", description: "Entwicklung eines massgeschneiderten Entwurfs basierend auf Ihren Bedürfnissen." },
        { title: "Baugesuch", description: "Professionelle Einreichung und Begleitung des gesamten Genehmigungsprozesses." },
        { title: "Ausführung", description: "Detaillierte Ausführungsplanung und Koordination aller Gewerke." },
        { title: "Übergabe", description: "Sorgfältige Endkontrolle und feierliche Übergabe Ihres fertigen Projekts." },
      ],
    },
    // Why Us
    whyUs: {
      label: "Was uns auszeichnet",
      title: "Ihre Vorteile mit uns",
      features: [
        "Klare Kommunikation",
        "Präzise Planung",
        "Lokales Know-how",
        "Ganzheitliche Projektbegleitung",
        "Moderne Gestaltung",
        "Strukturierte Abläufe",
      ],
      quote: "Für uns ist Architektur nicht nur ein Beruf, sondern eine Verantwortung: Räume zu schaffen, die den Alltag verbessern und langfristig überzeugen.",
    },
    // Projects
    projects: {
      label: "Projekte",
      title: "Unsere Arbeiten",
      subtitle: "Einblicke in ausgewählte Projekte, die unsere Philosophie widerspiegeln.",
      items: [
        { title: "Wohnhaus", category: "Neubau" },
        { title: "Mehrfamilienhaus", category: "Neubau" },
        { title: "Umbau", category: "Renovation" },
        { title: "Innenraumgestaltung", category: "Interior" },
      ],
    },
    // Contact
    contact: {
      label: "Kontakt",
      title: "Lassen Sie uns sprechen",
      subtitle: "Haben Sie ein Projekt oder eine Idee? Kontaktieren Sie uns für ein erstes Gespräch. Wir freuen uns darauf, Ihre Vision kennenzulernen.",
      location: "Standort",
      locationValue: "Schweiz",
      email: "E-Mail",
      phone: "Telefon",
      formTitle: "Nachricht senden",
      name: "Name",
      namePlaceholder: "Ihr Name",
      emailLabel: "E-Mail",
      emailPlaceholder: "ihre@email.ch",
      phoneLabel: "Telefonnummer",
      phonePlaceholder: "+41 XX XXX XX XX",
      message: "Nachricht",
      messagePlaceholder: "Erzählen Sie uns von Ihrem Projekt...",
      submit: "Nachricht senden",
    },
    // Footer
    footer: {
      tagline: "Wir planen nicht nur Gebäude – wir gestalten Lebensräume.",
      navigation: "Navigation",
      contactTitle: "Kontakt",
      copyright: "Alle Rechte vorbehalten.",
      imprint: "Impressum",
      privacy: "Datenschutz",
    },
  },
  en: {
    // Navbar
    nav: {
      about: "About",
      services: "Services",
      process: "Process",
      projects: "Projects",
      contact: "Contact",
      cta: "Start a Project",
    },
    // Hero
    hero: {
      title: "We design living spaces.",
      subtitle: "A young architecture firm in Switzerland – with clear ideas, precise planning, and the ambition to create spaces of quality.",
      cta: "Start a Project",
      learnMore: "Learn More",
    },
    // About
    about: {
      label: "About Us",
      title: "Architecture with Ambition",
      p1: "We are a young architecture firm based in Switzerland – driven by clear ideas, precise planning, and the ambition to create spaces of quality.",
      p2: "Our work doesn't start with plans, but with listening. We understand our clients' needs and translate them into architecture that works, inspires, and endures.",
      p3: "With over 3 years of experience in Switzerland, we know the local requirements, processes, and standards well. We combine this knowledge with a fresh, contemporary approach to design and planning.",
      experience: "Years Experience",
      location: "Based in Switzerland",
    },
    // Services
    services: {
      label: "Our Services",
      title: "From Idea to Reality",
      subtitle: "We guide you through every step of your building project with expertise and passion.",
      items: [
        { title: "Architectural Planning", description: "Thoughtful designs that combine function and aesthetics." },
        { title: "Building Permit", description: "Professional guidance through the entire approval process." },
        { title: "Execution Planning", description: "Detailed plans for precise implementation of your project." },
        { title: "Project Management", description: "Comprehensive support from the first idea to handover." },
        { title: "Interior Concepts", description: "Harmonious spatial design that invites you to live." },
        { title: "Consulting & Concept Development", description: "Strategic advice for your architectural visions." },
      ],
    },
    // Process
    process: {
      label: "Our Process",
      title: "Structured for Success",
      subtitle: "A clearly defined workflow guarantees transparency and efficiency in every project.",
      steps: [
        { title: "Listen & Understand", description: "We take the time to fully understand your wishes and requirements." },
        { title: "Concept & Planning", description: "Development of a tailored design based on your needs." },
        { title: "Building Permit", description: "Professional submission and guidance through the entire approval process." },
        { title: "Execution", description: "Detailed execution planning and coordination of all trades." },
        { title: "Handover", description: "Careful final inspection and celebratory handover of your finished project." },
      ],
    },
    // Why Us
    whyUs: {
      label: "What Sets Us Apart",
      title: "Your Benefits with Us",
      features: [
        "Clear Communication",
        "Precise Planning",
        "Local Expertise",
        "Comprehensive Project Support",
        "Modern Design",
        "Structured Processes",
      ],
      quote: "For us, architecture is not just a profession, but a responsibility: to create spaces that improve everyday life and convince in the long term.",
    },
    // Projects
    projects: {
      label: "Projects",
      title: "Our Work",
      subtitle: "Insights into selected projects that reflect our philosophy.",
      items: [
        { title: "Residential House", category: "New Build" },
        { title: "Apartment Building", category: "New Build" },
        { title: "Renovation", category: "Renovation" },
        { title: "Interior Design", category: "Interior" },
      ],
    },
    // Contact
    contact: {
      label: "Contact",
      title: "Let's Talk",
      subtitle: "Have a project or an idea? Contact us for an initial conversation. We look forward to learning about your vision.",
      location: "Location",
      locationValue: "Switzerland",
      email: "Email",
      phone: "Phone",
      formTitle: "Send a Message",
      name: "Name",
      namePlaceholder: "Your Name",
      emailLabel: "Email",
      emailPlaceholder: "your@email.ch",
      phoneLabel: "Phone Number",
      phonePlaceholder: "+41 XX XXX XX XX",
      message: "Message",
      messagePlaceholder: "Tell us about your project...",
      submit: "Send Message",
    },
    // Footer
    footer: {
      tagline: "We don't just plan buildings – we design living spaces.",
      navigation: "Navigation",
      contactTitle: "Contact",
      copyright: "All rights reserved.",
      imprint: "Imprint",
      privacy: "Privacy Policy",
    },
  },
} as const

export type Translations = typeof translations[Language]
