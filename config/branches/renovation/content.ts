import type { BranchConfig } from "@/config/types";

export const renovationContent: Pick<BranchConfig, "id" | "name" | "shortName" | "path" | "theme" | "phone" | "email" | "whatsapp" | "address" | "hours" | "mapEmbedUrl" | "serviceAreas" | "serviceSections" | "homeSections" | "homeSectionsOrder" | "home" | "about" | "contact" | "footer" | "faq" | "testimonials" | "trustBar" | "offerStrip" | "whyUs" | "howItWorks" | "trustSignals" | "intro" | "serviceArea"> = {
  id: "renovation",
  name: "Prime Renovation",
  shortName: "Renovation",
  path: "/renovation",
  theme: "renovation",
  phone: "+49 000 000 101",
  email: "renovation@primegmbh.de",
  whatsapp: "https://wa.me/490000000101",
  address: "Germany · Project site planning confirmed per request",
  hours: "Mon-Fri · 08:00-18:00",
  mapEmbedUrl: "https://www.google.com/maps?q=Germany&output=embed",
  serviceAreas: ["Residential projects", "Bathrooms", "Building sites"],
  homeSections: {
    hero: true,
    intro: true,
    features: false,
    services: true,
    trustSignals: false,
    whyUsPreview: false,
    whyUs: false,
    howItWorks: false,
    testimonials: false,
    faq: true,
    contact: false,
    serviceArea: false,
    trustBar: false,
    offerStrip: false,
    map: true,
  },
  homeSectionsOrder: [
    "hero",
    "intro",
    "features",
    "services",
    "trustSignals",
    "whyUsPreview",
    "whyUs",
    "howItWorks",
    "testimonials",
    "faq",
    "contact",
    "serviceArea",
    "trustBar",
    "offerStrip",
    "map",
  ],
  serviceSections: [
    {
      id: "flooring",
      title: {
        en: "Flooring",
        de: "Bodenbeläge",
        ar: "الأرضيات",
      },
      slugs: ["parquet", "vinyl", "floor-installation"],
    },
    {
      id: "walls-ceilings-interior-finishes",
      title: {
        en: "Walls, Ceilings & Interior Finishes",
        de: "Wände, Decken & Innenausbau",
        ar: "الجدران والأسقف والتشطيبات الداخلية",
      },
      slugs: ["gypsum", "wallpaper", "painting", "decorative-wall-ceiling-finishes", "wood-decorative-panels"],
    },
    {
      id: "full-renovation",
      title: {
        en: "Full Renovation",
        de: "Komplettrenovierung",
        ar: "التجديد الكامل",
      },
      slugs: ["apartment-renovation", "house-renovation"],
    },
    {
      id: "maintenance",
      title: {
        en: "Maintenance",
        de: "Wartung",
        ar: "الصيانة",
      },
      slugs: ["electrical-maintenance", "general-maintenance"],
    },
    {
      id: "demolition-site-cleaning",
      title: {
        en: "Demolition & Site Cleaning",
        de: "Rückbau & Baustellenreinigung",
        ar: "الهدم وتنظيف الموقع",
      },
      slugs: ["demolition", "debris-removal", "site-cleaning"],
    },
    {
      id: "doors",
      title: {
        en: "Doors",
        de: "Türen",
        ar: "الأبواب",
      },
      slugs: ["door-replacement-installation"],
    },
  ],
  home: {
    eyebrow: {
      en: "Prime Renovation",
      de: "Prime Renovation",
      ar: "برايم للتجديد",
    },
    title: {
      en: "Renovation, maintenance, demolition, and site cleaning.",
      de: "Renovierung, Wartung, Rückbau und Baustellenreinigung.",
      ar: "التجديد والصيانة والهدم وتنظيف المواقع.",
    },
    subtitle: {
      en: "A focused renovation branch for practical work from first scope to final cleanup.",
      de: "Ein fokussierter Renovierungsbereich für praktische Arbeit vom ersten Umfang bis zur Endreinigung.",
      ar: "فرع تجديد مركز للأعمال العملية من تحديد النطاق حتى التنظيف النهائي.",
    },
    primaryCta: {
      en: "Book renovation",
      de: "Renovierung anfragen",
      ar: "احجز خدمة التجديد",
    },
    secondaryCta: {
      en: "View services",
      de: "Services ansehen",
      ar: "اعرض الخدمات",
    },
    stats: {
      en: [
        { value: "Homes", label: "Interior renovation" },
        { value: "Bathrooms", label: "Focused upgrades" },
        { value: "Sites", label: "Cleanup and handover" },
      ],
      de: [
        { value: "Häuser", label: "Innenrenovierung" },
        { value: "Bäder", label: "Gezielte Erneuerung" },
        { value: "Baustellen", label: "Reinigung und Übergabe" },
      ],
      ar: [
        { value: "المنازل", label: "تجديد داخلي" },
        { value: "الحمامات", label: "تحديثات مركزة" },
        { value: "المواقع", label: "تنظيف وتسليم" },
      ],
    },
    featuresTitle: {
      en: "Why this branch feels separate",
      de: "Warum sich dieser Bereich eigenständig anfühlt",
      ar: "لماذا يبدو هذا الفرع مستقلاً",
    },
    featuresDescription: {
      en: "",
      de: "",
      ar: "",
    },
    features: {
      en: [
        { title: "Site-first planning", description: "Clear scoping before work begins." },
        { title: "Trade coordination", description: "Services arranged in the right execution order." },
        { title: "Handover mindset", description: "Delivery includes readiness, cleanup, and closure." },
      ],
      de: [
        { title: "Baustellenorientierte Planung", description: "Klare Leistungsabgrenzung vor dem Start." },
        { title: "Gewerkekoordination", description: "Leistungen in sinnvoller Ausführungsreihenfolge." },
        { title: "Abnahmefokus", description: "Übergabe mit Ordnung, Reinigung und Abschluss." },
      ],
      ar: [
        { title: "تخطيط يركز على الموقع", description: "تحديد واضح للنطاق قبل بدء العمل." },
        { title: "تنسيق بين الأعمال", description: "تنظيم الخدمات حسب تسلسل التنفيذ الصحيح." },
        { title: "تسليم منظم", description: "الإنجاز يشمل الجاهزية والتنظيف والإغلاق." },
      ],
    },
  },
  about: {
    eyebrow: {
      en: "About the branch",
      de: "Über den Bereich",
      ar: "عن الفرع",
    },
    title: {
      en: "Renovation work needs clear sequencing, honest scope, and clean handover.",
      de: "Renovierungsarbeiten brauchen klare Abläufe, ehrlichen Umfang und eine saubere Übergabe.",
      ar: "أعمال التجديد تحتاج إلى تسلسل واضح ونطاق صريح وتسليم نظيف.",
    },
    description: {
      en: "Prime Renovation handles renovation, maintenance, demolition, and site cleaning across Germany.",
      de: "Prime Renovation übernimmt Renovierung, Wartung, Rückbau und Baustellenreinigung in ganz Deutschland.",
      ar: "تتولى Prime Renovation التجديد والصيانة والهدم وتنظيف المواقع في جميع أنحاء ألمانيا.",
    },
    story: {
      en: "One branch for practical property work from start to finish.",
      de: "Ein Bereich für praktische Immobilienarbeit von Anfang bis Ende.",
      ar: "فرع واحد للأعمال العقارية العملية من البداية إلى النهاية.",
    },
    points: {
      en: ["Scope before execution", "Clear service structure", "Practical booking for live projects"],
      de: ["Leistungsumfang vor Ausführung", "Klare Servicestruktur", "Praktische Anfrage für laufende Projekte"],
      ar: ["النطاق قبل التنفيذ", "هيكل خدمات واضح", "حجز عملي للمشاريع القائمة"],
    },
  },
  contact: {
    eyebrow: {
      en: "Plan the next step",
      de: "Nächsten Schritt planen",
      ar: "خطط للخطوة التالية",
    },
    title: {
      en: "Start a renovation request.",
      de: "Starten Sie eine Renovierungsanfrage.",
      ar: "ابدأ طلب تجديد.",
    },
    description: {
      en: "Request a site visit or quote through the booking form.",
      de: "Fordern Sie einen Ortstermin oder ein Angebot über das Buchungsformular an.",
      ar: "اطلب زيارة موقع أو عرض سعر عبر نموذج الحجز.",
    },
    responseLabel: {
      en: "Services",
      de: "Leistungen",
      ar: "الخدمات",
    },
    responseValue: {
      en: "Renovation, maintenance, demolition, and site cleaning.",
      de: "Renovierung, Wartung, Rückbau und Baustellenreinigung.",
      ar: "التجديد والصيانة والهدم وتنظيف المواقع.",
    },
  },
  footer: {
    description: {
      en: "A dedicated branch experience for renovation, maintenance, demolition, and site cleaning.",
      de: "Ein eigenständiges Branchenerlebnis für Renovierung, Wartung, Rückbau und Baustellenreinigung.",
      ar: "تجربة فرعية متخصصة للتجديد والصيانة والهدم وتنظيف المواقع.",
    },
    legal: {
      en: "Prime GMBH · Renovation branch presentation",
      de: "Prime GMBH · Darstellung des Renovierungsbereichs",
      ar: "Prime GMBH · واجهة فرع التجديد",
    },
  },
  faq: [
    {
      question: {
        en: "What services do you offer?",
        de: "Welche Dienstleistungen bieten Sie an?",
        ar: "ما هي الخدمات التي تقدمونها؟",
      },
      answer: {
        en: "Renovation, maintenance, demolition, and site cleaning.",
        de: "Renovierung, Wartung, Rückbau und Baustellenreinigung.",
        ar: "التجديد والصيانة والهدم وتنظيف المواقع.",
      },
    },
    {
      question: {
        en: "How do I request a quote?",
        de: "Wie fordere ich ein Angebot an?",
        ar: "كيف أطلب عرض سعر؟",
      },
      answer: {
        en: "Use the booking form or call us directly.",
        de: "Nutzen Sie das Buchungsformular oder rufen Sie uns direkt an.",
        ar: "استخدم نموذج الحجز أو اتصل بنا مباشرة.",
      },
    },
  ],
  testimonials: [
    {
      name: {
        en: "Property Manager, Berlin",
        de: "Objektmanager, Berlin",
        ar: "مدير عقارات، برلين",
      },
      quote: {
        en: "Prime Renovation handled our apartment turnover cleanly and on schedule.",
        de: "Prime Renovation hat unsere Wohnungssanierung sauber und termingerecht durchgeführt.",
        ar: " Prime Renovation تولى تجديد شقتنا بنظافة ونظام في الموعد المحدد.",
      },
    },
    {
      name: {
        en: "General Contractor, Munich",
        de: "Hauptauftragnehmer, München",
        ar: "مقاول عام، ميونخ",
      },
      quote: {
        en: "Clear scoping and reliable coordination from start to handover.",
        de: "Klare Leistungsabgrenzung und zuverlässige Koordination von Beginn bis Übergabe.",
        ar: "نطاق واضح وتنسيق موثوق من البداية حتى التسليم.",
      },
    },
  ],
  trustBar: {
    enabled: true,
    title: {
      en: "Trusted renovation partner across Germany",
      de: "Verlässlicher Renovierungspartner in ganz Deutschland",
      ar: "شريك تجديد موثوق في جميع أنحاء ألمانيا",
    },
    items: {
      en: ["Licensed & Insured", "On-time Delivery", "Clean Handover", "Fair Pricing"],
      de: ["Lizenziert & Versichert", "Termingerechte Lieferung", "Saubere Übergabe", "Faire Preise"],
      ar: ["مرخص ومؤمن", "تسليم في الوقت", "تسليم نظيف", "أسعار عادلة"],
    },
  },
  offerStrip: {
    enabled: false,
    badge: {
      en: "Limited Offer",
      de: "Eingeschränktes Angebot",
      ar: "عرض محدود",
    },
    headline: {
      en: "Free consultation for renovation projects",
      de: "Kostenlose Beratung für Renovierungsprojekte",
      ar: "استشارة مجانية لمشاريع التجديد",
    },
    subtext: {
      en: "Book before end of month for priority scheduling",
      de: "Buchen Sie vor Monatsende für Prioritätsplanung",
      ar: "احجز قبل نهاية الشهر للحصول على أولوية في الجدولة",
    },
    ctaLabel: {
      en: "Book now",
      de: "Jetzt buchen",
      ar: "احجز الآن",
    },
    ctaHref: "/renovation/book",
  },
  whyUs: {
    eyebrow: {
      en: "Why us",
      de: "Warum wir",
      ar: "لماذا نحن",
    },
    title: {
      en: "Practical renovation with clear structure",
      de: "Praktische Renovierung mit klarem Ablauf",
      ar: "تجديد عملي بهيكل واضح",
    },
    intro: {
      en: "We focus on what matters: planning, execution, and clean delivery.",
      de: "Wir konzentrieren uns auf das Wesentliche: Planung, Ausführung und saubere Übergabe.",
      ar: "نركز على ما يهم: التخطيط والتنفيذ والتسليم النظيف.",
    },
    bullets: {
      en: ["Clear scoping before work begins", "Trade coordination in the right order", "Clean handover with full documentation", "Fixed pricing with no hidden costs", "Experienced project managers", "German quality standards"],
      de: ["Klare Leistungsabgrenzung vor dem Start", "Gewerkekoordination in sinnvoller Reihenfolge", "Saubere Übergabe mit vollständiger Dokumentation", "Festpreise ohne versteckte Kosten", "Erfahrene Projektleiter", "Deutsche Qualitätsstandards"],
      ar: ["تحديد واضح للنطاق قبل بدء العمل", "تنسيق الأعمال بالترتيب الصحيح", "تسليم نظيف مع توثيق كامل", "أسعار ثابتة بدون تكاليف خفية", "مدير مشاريع ذوي خبرة", "معايير الجودة الألمانية"],
    },
    featuredDescription: {
      en: "We keep the process straightforward: clear planning, neat execution, and workmanship that holds up in the real world.",
      de: "Wir halten den Prozess unkompliziert: klare Planung, ordentliche Ausführung und Handwerk, das im Alltag standhält.",
      ar: "نحافظ على العملية بسيطة: تخطيط واضح وتنفيذ أنيق وعمل يصمد في الواقع.",
    },
  },
  howItWorks: {
    eyebrow: {
      en: "How it works",
      de: "So funktioniert's",
      ar: "كيف يعمل",
    },
    title: {
      en: "From first call to final handover",
      de: "Vom ersten Anruf bis zur Übergabe",
      ar: "من أول اتصال حتى التسليم النهائي",
    },
    intro: {
      en: "A simple four-step process for every renovation project.",
      de: "Ein einfacher vierstufiger Prozess für jedes Renovierungsprojekt.",
      ar: "عملية بسيطة من أربع خطوات لكل مشروع تجديد.",
    },
    steps: {
      en: [
        { title: "Consultation", description: "We discuss your project scope, timeline, and requirements." },
        { title: "Planning", description: "Detailed planning with clear pricing and schedule." },
        { title: "Execution", description: "Professional renovation work by experienced tradespeople." },
        { title: "Handover", description: "Clean delivery with documentation and final inspection." },
      ],
      de: [
        { title: "Beratung", description: "Wir besprechen Ihren Projektumfang, Zeitplan und Anforderungen." },
        { title: "Planung", description: "Detaillierte Planung mit klarem Preis und Zeitplan." },
        { title: "Ausführung", description: "Professionelle Renovierungsarbeit durch erfahrene Handwerker." },
        { title: "Übergabe", description: "Saubere Lieferung mit Dokumentation und Endkontrolle." },
      ],
      ar: [
        { title: "استشارة", description: "نناقش نطاق مشروعك والجدول الزمني والمتطلبات." },
        { title: "تخطيط", description: "تخطيط مفصل مع أسعار وجدول زمني واضحين." },
        { title: "تنفيذ", description: "عمل تجديد احترافي من حرفيين ذوي خبرة." },
        { title: "تسليم", description: "تسليم نظيف مع توثيق وفحص نهائي." },
      ],
    },
  },
  trustSignals: {
    eyebrow: {
      en: "Trust signals",
      de: "Vertrauenssignale",
      ar: "إشارات الثقة",
    },
    title: {
      en: "Built on reliability and transparency",
      de: "Basierend auf Zuverlässigkeit und Transparenz",
      ar: "مبني على الموثوقية والشفافية",
    },
    intro: {
      en: "Every project is delivered with the same commitment to quality, safety, and clear communication.",
      de: "Jedes Projekt wird mit dem gleichen Engagement für Qualität, Sicherheit und klare Kommunikation geliefert.",
      ar: "كل مشروع يُسلّم بنفس الالتزام بالجودة والأمان والتواصل الواضح.",
    },
    items: {
      en: [
        { title: "Licensed & Insured", description: "Fully certified for all renovation work we undertake." },
        { title: "On-time Delivery", description: "We stick to agreed timelines and keep you informed." },
        { title: "Clean Handover", description: "Every project ends with a thorough cleanup and inspection." },
        { title: "Fair Pricing", description: "Transparent quotes with no hidden costs or surprises." },
      ],
      de: [
        { title: "Lizenziert & Versichert", description: "Vollständig zertifiziert für alle Renovierungsarbeiten." },
        { title: "Termingerechte Lieferung", description: "Wir halten vereinbarte Zeitpläne und halten Sie informiert." },
        { title: "Saubere Übergabe", description: "Jedes Projekt endet mit gründlicher Reinigung und Inspektion." },
        { title: "Faire Preise", description: "Transparente Angebote ohne versteckte Kosten oder Überraschungen." },
      ],
      ar: [
        { title: "مرخص ومؤمن", description: "معتمد بالكامل لجميع أعمال التجديد التي نقوم بها." },
        { title: "تسليم في الوقت", description: "نلتزم بالجداول الزمنية المتفق عليها ونبقى على اطلاع." },
        { title: "تسليم نظيف", description: "كل مشروع ينتهي بتنظيف شامل وفحص." },
        { title: "أسعار عادلة", description: "عروض شفافة بدون تكاليف خفية أو مفاجآت." },
      ],
    },
  },
  intro: {
    eyebrow: {
      en: "About our approach",
      de: "Über unseren Ansatz",
      ar: "عن نهجنا",
    },
    title: {
      en: "Renovation done right, from start to finish",
      de: "Renovierung richtig gemacht, vom Anfang bis zum Ende",
      ar: "تجديد يتم بشكل صحيح، من البداية إلى النهاية",
    },
    body: {
      en: "Full-service renovation, maintenance, demolition, and site cleaning.",
      de: "Komplettrenovierung, Wartung, Rückbau und Baustellenreinigung.",
      ar: "تجديد شامل، صيانة، هدم، وتنظيف مواقع.",
    },
    bullets: {
      en: ["Full-service renovation", "Professional project management", "Clean and timely delivery"],
      de: ["Komplettrenovierung", "Professionelles Projektmanagement", "Saubere und termingerechte Lieferung"],
      ar: ["تجديد شامل", "إدارة مشاريع احترافية", "تسليم نظيف وفي الوقت المحدد"],
    },
  },
  serviceArea: {
    eyebrow: {
      en: "Service area",
      de: "Einsatzbereich",
      ar: "نطاق الخدمة",
    },
    title: {
      en: "Where we work",
      de: "Wo wir arbeiten",
      ar: "حيث نعمل",
    },
    description: {
      en: "Prime Renovation serves residential and commercial projects across Germany.",
      de: "Prime Renovation betreut Wohn- und Gewerbeprojekte in ganz Deutschland.",
      ar: "Prime Renovation يخدم المشاريع السكنية والتجارية في جميع أنحاء ألمانيا.",
    },
    cities: {
      en: ["Berlin", "Munich", "Hamburg", "Frankfurt", "Cologne", "Stuttgart", "Düsseldorf", "Leipzig"],
      de: ["Berlin", "München", "Hamburg", "Frankfurt", "Köln", "Stuttgart", "Düsseldorf", "Leipzig"],
      ar: ["برلين", "مونخن", "هامبرغ", "فرانكفورت", "كولونيا", "شتوتغارت", "ديلسدورف", "لايبزيغ"],
    },
  },
};
