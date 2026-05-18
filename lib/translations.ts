export type Language = "de" | "en"

export const translations = {
  de: {
    nav: {
      about: "Über uns",
      services: "Leistungen",
      process: "Prozess",
      projects: "Referenzen",
      contact: "Kontakt",
      cta: "Projekt anfragen",
    },
    hero: {
      title: "Wir gestalten Lebensräume.",
      subtitle: "Ein junges Architekturbüro in der Schweiz – mit klaren Ideen, präziser Planung und dem Anspruch, Räume mit Qualität zu schaffen.",
      cta: "Projekt anfragen",
      learnMore: "Mehr über uns",
    },
    about: {
      label: "Über uns",
      title: "Architektur mit Anspruch",
      p1: "Wir sind ein junges Architekturbüro mit Sitz in der Schweiz – geprägt von klaren Ideen, präziser Planung und dem Anspruch, Räume mit Qualität zu schaffen.",
      p2: "Unsere Arbeit beginnt nicht mit Plänen, sondern mit dem Zuhören. Wir verstehen die Bedürfnisse unserer Kunden und übersetzen sie in Architektur, die funktioniert, begeistert und Bestand hat.",
      p3: "Als neu gegründetes Büro verbinden wir solides Fachwissen mit einem klaren Verständnis für die lokalen Anforderungen, Normen und Prozesse in der Schweiz. Unsere Planungskompetenz und konzeptionelle Tiefe sind das Ergebnis einer gezielten fachlichen Ausbildung und eines professionellen Anspruchs, dem wir in jedem Projekt gerecht werden wollen.",
      location: "Standort Schweiz",
    },
    services: {
      label: "Unsere Leistungen",
      title: "Von der Idee zur Realität",
      subtitle: "Wir begleiten Sie durch jeden Schritt Ihres Bauprojekts mit Expertise und Leidenschaft.",
      items: [
        { title: "Architekturplanung", description: "Durchdachte Entwürfe, die Funktion und Ästhetik vereinen." },
        { title: "Baugesuch", description: "Professionelle Begleitung durch den gesamten Bewilligungsprozess." },
        { title: "Ausführungsplanung", description: "Detaillierte Pläne für eine präzise Umsetzung Ihres Projekts." },
        { title: "Beratung & Konzeptentwicklung", description: "Strategische Beratung für Ihre architektonischen Visionen." },
      ],
    },
    process: {
      label: "Unser Prozess",
      title: "Strukturiert zum Erfolg",
      subtitle: "Ein klar definierter Ablauf garantiert Transparenz und Effizienz in jedem Projekt.",
      steps: [
        { title: "Zuhören & Verstehen", description: "Wir nehmen uns Zeit, Ihre Wünsche und Anforderungen vollständig zu erfassen." },
        { title: "Konzept & Planung", description: "Entwicklung eines massgeschneiderten Entwurfs basierend auf Ihren Bedürfnissen." },
        { title: "Baugesuch", description: "Professionelle Einreichung und Begleitung des gesamten Baubewilligungsprozesses." },
        { title: "Ausführung", description: "Detaillierte Ausführungsplanung und Koordination aller Gewerke." },
      ],
    },
    whyUs: {
      label: "Was uns auszeichnet",
      title: "Ihre Vorteile mit uns",
      features: [
        "Klare Kommunikation",
        "Präzise Planung",
        "Lokales Know-how",
        "Moderne Gestaltung",
      ],
      quote: "Für uns ist Planung keine Dienstleistung – sie ist eine fachliche Verantwortung. Mit konzeptioneller Stärke, fundiertem Planungs-Know-how und einem tiefen Verständnis für schweizerische Normen und Prozesse entwickeln wir Architektur, die inhaltlich überzeugt und technisch präzise umgesetzt wird.",
    },
    projects: {
      label: "Referenzen",
      title: "Unsere Arbeiten",
      subtitle: "Einblicke in ausgewählte Referenzprojekte.",
      items: [
        { title: "Wohnhaus", category: "Neubau" },
        { title: "Mehrfamilienhaus", category: "Neubau" },
        { title: "Umbau", category: "Renovation" },
        { title: "Innenraumgestaltung", category: "Interior" },
      ],
    },
    contact: {
      label: "Kontakt",
      title: "Lassen Sie uns sprechen",
      subtitle: "Haben Sie ein Projekt oder eine Idee? Schreiben Sie uns – wir freuen uns auf Ihre Anfrage.",
      location: "Standort",
      locationValue: "Schweiz",
      email: "E-Mail",
    },
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
    nav: {
      about: "About",
      services: "Services",
      process: "Process",
      projects: "References",
      contact: "Contact",
      cta: "Start a Project",
    },
    hero: {
      title: "We design living spaces.",
      subtitle: "A young architecture firm in Switzerland – with clear ideas, precise planning, and the ambition to create spaces of quality.",
      cta: "Start a Project",
      learnMore: "Learn More",
    },
    about: {
      label: "About Us",
      title: "Architecture with Ambition",
      p1: "We are a young architecture firm based in Switzerland – driven by clear ideas, precise planning, and the ambition to create spaces of quality.",
      p2: "Our work doesn't start with plans, but with listening. We understand our clients' needs and translate them into architecture that works, inspires, and endures.",
      p3: "As a newly founded firm, we bring solid professional expertise and a clear understanding of local Swiss requirements, standards, and processes. Our planning competence and conceptual depth are the result of focused professional training and a commitment to quality that we bring to every project.",
      location: "Based in Switzerland",
    },
    services: {
      label: "Our Services",
      title: "From Idea to Reality",
      subtitle: "We guide you through every step of your building project with expertise and passion.",
      items: [
        { title: "Architectural Planning", description: "Thoughtful designs that combine function and aesthetics." },
        { title: "Building Permit", description: "Professional guidance through the entire approval process." },
        { title: "Execution Planning", description: "Detailed plans for precise implementation of your project." },
        { title: "Consulting & Concept Development", description: "Strategic advice for your architectural visions." },
      ],
    },
    process: {
      label: "Our Process",
      title: "Structured for Success",
      subtitle: "A clearly defined workflow guarantees transparency and efficiency in every project.",
      steps: [
        { title: "Listen & Understand", description: "We take the time to fully understand your wishes and requirements." },
        { title: "Concept & Planning", description: "Development of a tailored design based on your needs." },
        { title: "Building Permit", description: "Professional submission and guidance through the entire building permit process." },
        { title: "Execution", description: "Detailed execution planning and coordination of all trades." },
      ],
    },
    whyUs: {
      label: "What Sets Us Apart",
      title: "Your Benefits with Us",
      features: [
        "Clear Communication",
        "Precise Planning",
        "Local Expertise",
        "Modern Design",
      ],
      quote: "For us, planning is not a service — it is a professional responsibility. With conceptual strength, sound planning expertise, and a deep understanding of Swiss standards and processes, we develop architecture that is compelling in concept and precise in execution.",
    },
    projects: {
      label: "References",
      title: "Our Work",
      subtitle: "Insights into selected reference projects.",
      items: [
        { title: "Residential House", category: "New Build" },
        { title: "Apartment Building", category: "New Build" },
        { title: "Renovation", category: "Renovation" },
        { title: "Interior Design", category: "Interior" },
      ],
    },
    contact: {
      label: "Contact",
      title: "Let's Talk",
      subtitle: "Have a project or an idea? Write to us — we look forward to your inquiry.",
      location: "Location",
      locationValue: "Switzerland",
      email: "Email",
    },
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
