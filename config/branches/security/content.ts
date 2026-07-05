import type { BranchConfig } from "@/config/types";

export const securityContent: Pick<BranchConfig, "id" | "name" | "shortName" | "path" | "theme" | "phone" | "email" | "whatsapp" | "address" | "hours" | "mapEmbedUrl" | "serviceAreas" | "serviceSections" | "homeSections" | "homeSectionsOrder" | "home" | "about" | "contact" | "footer" | "faq" | "testimonials" | "trustBar" | "offerStrip" | "whyUs" | "howItWorks" | "trustSignals" | "intro" | "serviceArea"> = {
  id: "security",
  name: "Prime Security",
  shortName: "Security",
  path: "/security",
  theme: "security",
  phone: "+49 000 000 202",
  email: "security@primegmbh.de",
  whatsapp: "https://wa.me/490000000202",
  address: "Germany · Coverage planning coordinated per facility",
  hours: "24/7 coordination · response by schedule",
  mapEmbedUrl: "https://www.google.com/maps?q=Germany&output=embed",
  serviceAreas: ["Facilities", "Commercial properties", "Camera systems"],
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
      id: "security-guarding",
      title: {
        en: "Security Guarding",
        de: "Sicherheitsdienst",
        ar: "خدمات الحراسة الأمنية",
      },
      slugs: ["static-security-guards", "construction-site-security", "event-security", "property-protection"],
    },
    {
      id: "cctv-systems",
      title: {
        en: "CCTV Systems",
        de: "CCTV-Systeme",
        ar: "أنظمة المراقبة CCTV",
      },
      slugs: ["cctv-installation", "security-camera-systems", "video-surveillance"],
    },
    {
      id: "security-monitoring",
      title: {
        en: "Security Monitoring",
        de: "Sicherheitsüberwachung",
        ar: "المراقبة الأمنية",
      },
      slugs: ["monitoring-solutions", "facility-surveillance", "security-operations"],
    },
  ],
  home: {
    eyebrow: {
      en: "Prime Security",
      de: "Prime Security",
      ar: "برايم للأمن",
    },
    title: {
      en: "Professional protection for facilities and camera systems.",
      de: "Professioneller Schutz für Anlagen und Kamerasysteme.",
      ar: "حماية احترافية للمنشآت وأنظمة الكاميرات.",
    },
    subtitle: {
      en: "A focused security branch for facility protection and CCTV work.",
      de: "Ein fokussierter Sicherheitsbereich für Objektschutz und CCTV-Arbeiten.",
      ar: "فرع أمني مركز لخدمات حماية المنشآت وأعمال أنظمة المراقبة.",
    },
    primaryCta: {
      en: "Book security consult",
      de: "Sicherheitsgespräch buchen",
      ar: "احجز استشارة أمنية",
    },
    secondaryCta: {
      en: "View services",
      de: "Services ansehen",
      ar: "اعرض الخدمات",
    },
    stats: {
      en: [
        { value: "Facility", label: "Protection planning" },
        { value: "CCTV", label: "Camera installation" },
        { value: "24/7", label: "Response coordination" },
      ],
      de: [
        { value: "Objekt", label: "Schutzplanung" },
        { value: "CCTV", label: "Kamerainstallation" },
        { value: "24/7", label: "Einsatzkoordination" },
      ],
      ar: [
        { value: "المنشآت", label: "تخطيط الحماية" },
        { value: "CCTV", label: "تركيب الكاميرات" },
        { value: "24/7", label: "تنسيق الاستجابة" },
      ],
    },
    featuresTitle: {
      en: "Why this branch feels distinct",
      de: "Warum sich dieser Bereich unterscheidet",
      ar: "لماذا يبدو هذا الفرع مختلفاً",
    },
    featuresDescription: {
      en: "The security branch emphasizes assurance, system planning, and a more formal operational tone.",
      de: "Der Sicherheitsbereich betont Verlässlichkeit, Systemplanung und einen formelleren operativen Ton.",
      ar: "يركز الفرع الأمني على الطمأنينة وتخطيط الأنظمة ونبرة تشغيلية أكثر رسمية.",
    },
    features: {
      en: [
        { title: "Facility-first framing", description: "Services are presented for site responsibility and risk awareness." },
        { title: "Systems language", description: "Camera planning and protection work are described with technical clarity." },
        { title: "Contract-ready tone", description: "Built to feel credible for corporate and multi-site conversations." },
      ],
      de: [
        { title: "Objektorientierte Rahmung", description: "Leistungen werden mit Standortverantwortung und Risikobewusstsein beschrieben." },
        { title: "Systemsprache", description: "Kameraplanung und Schutzarbeit werden technisch klar erklärt." },
        { title: "Vertragsreifer Ton", description: "Glaubwürdig für Unternehmens- und Multi-Site-Gespräche." },
      ],
      ar: [
        { title: "تموضع يركز على المنشأة", description: "تُعرض الخدمات بمنطق المسؤولية عن الموقع والوعي بالمخاطر." },
        { title: "لغة الأنظمة", description: "يتم شرح تخطيط الكاميرات وأعمال الحماية بوضوح تقني." },
        { title: "نبرة جاهزة للعقود", description: "تبدو موثوقة للحوار مع الشركات والمواقع المتعددة." },
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
      en: "Security presentation works best when the site feels controlled, precise, and accountable.",
      de: "Sicherheitsdarstellung wirkt am besten, wenn die Seite kontrolliert, präzise und verantwortungsbewusst wirkt.",
      ar: "يؤدي العرض الأمني أفضل أداء عندما يبدو الموقع مضبوطاً ودقيقاً ومسؤولاً.",
    },
    description: {
      en: "Prime Security is shaped for clients who need a serious first impression before discussing protection scope, guard logic, or camera deployment.",
      de: "Prime Security richtet sich an Kunden, die einen seriösen ersten Eindruck benötigen, bevor Schutzumfang, Einsatzlogik oder Kamerasysteme besprochen werden.",
      ar: "تم تشكيل Prime Security للعملاء الذين يحتاجون إلى انطباع أول جاد قبل مناقشة نطاق الحماية أو منطق الحراسة أو نشر الكاميرات.",
    },
    story: {
      en: "The branch keeps its own tone, layout, and booking flow so security visitors never feel like they entered a renovation site by mistake.",
      de: "Der Bereich behält einen eigenen Ton, ein eigenes Layout und einen eigenen Buchungsablauf, damit Sicherheitskunden nie das Gefühl haben, versehentlich auf einer Renovierungsseite gelandet zu sein.",
      ar: "يحافظ هذا الفرع على نبرته وتخطيطه ومسار حجزه الخاص حتى لا يشعر الزائر الأمني أنه دخل موقع تجديد بالخطأ.",
    },
    points: {
      en: ["Formal branch voice", "Clear service structure", "Facility-ready lead capture"],
      de: ["Formelle Branchensprache", "Klare Servicestruktur", "Objektgeeignete Lead-Erfassung"],
      ar: ["نبرة فرعية رسمية", "هيكل خدمات واضح", "التقاط طلبات مناسب للمنشآت"],
    },
  },
  contact: {
    eyebrow: {
      en: "Start a controlled conversation",
      de: "Kontrolliertes Gespräch starten",
      ar: "ابدأ تواصلاً منضبطاً",
    },
    title: {
      en: "Start a security request.",
      de: "Starten Sie eine Sicherheitsanfrage.",
      ar: "ابدأ طلباً أمنياً.",
    },
    description: {
      en: "Use this branch when the request is about facility coverage, access logic, patrol structure, or camera-system installation.",
      de: "Nutzen Sie diesen Bereich, wenn es um Objektabdeckung, Zugangskonzept, Patrouillenstruktur oder Kamerainstallation geht.",
      ar: "استخدم هذا الفرع عندما يتعلق الطلب بتغطية المنشأة أو منطق الوصول أو هيكل الدوريات أو تركيب أنظمة الكاميرات.",
    },
    responseLabel: {
      en: "Best for",
      de: "Geeignet für",
      ar: "مناسب لـ",
    },
    responseValue: {
      en: "Facility security contracts, camera planning, and professional protection briefs.",
      de: "Objektschutzverträge, Kameraplanung und professionelle Sicherheitsbriefings.",
      ar: "عقود حماية المنشآت وتخطيط الكاميرات وطلبات الحماية الاحترافية.",
    },
  },
  footer: {
    description: {
      en: "A dedicated security branch for facility protection and CCTV system installation.",
      de: "Ein eigenständiger Sicherheitsbereich für Objektschutz und CCTV-Systeminstallation.",
      ar: "فرع أمني متخصص لحماية المنشآت وتركيب أنظمة كاميرات المراقبة.",
    },
    legal: {
      en: "Prime GMBH · Security branch presentation",
      de: "Prime GMBH · Darstellung des Sicherheitsbereichs",
      ar: "Prime GMBH · واجهة الفرع الأمني",
    },
  },
  faq: [
    {
      question: {
        en: "What security services do you provide?",
        de: "Welche Sicherheitsdienstleistungen bieten Sie an?",
        ar: "ما هي الخدمات الأمنية التي تقدمونها؟",
      },
      answer: {
        en: "We provide static guards, CCTV installation, security monitoring, and event security.",
        de: "Wir bieten stationäre Sicherheitsdienste, CCTV-Installation, Sicherheitsüberwachung und Veranstaltungssicherheit.",
        ar: "نقدم حراسة أمنية ثابتة وتركيب كاميرات المراقبة والمراقبة الأمنية وأمن الفعاليات.",
      },
    },
    {
      question: {
        en: "Do you offer 24/7 security coverage?",
        de: "Bieten Sie Sicherheitsabdeckung rund um die Uhr an?",
        ar: "هل تقدمون تغطية أمنية على مدار الساعة؟",
      },
      answer: {
        en: "Yes, our security monitoring operates 24/7 with scheduled response coordination.",
        de: "Ja, unsere Sicherheitsüberwachung arbeitet rund um die Uhr mit geplanter Einsatzkoordination.",
        ar: "نعم، تعمل مراقبتنا الأمنية على مدار الساعة مع تنسيق استجابة مجدول.",
      },
    },
    {
      question: {
        en: "What areas do you cover?",
        de: "Welche Gebiete decken Sie ab?",
        ar: "ما هي المناطق التي تغطونها؟",
      },
      answer: {
        en: "We cover facilities, commercial properties, and provide camera system installation across Germany.",
        de: "Wir decken Objekte, Gewerbeimmobilien und Kamerainstallationen in ganz Deutschland ab.",
        ar: "نغطي المنشآت والعقارات التجارية ونقدم تركيب أنظمة الكاميرات في جميع أنحاء ألمانيا.",
      },
    },
  ],
  testimonials: [
    {
      name: {
        en: "Facility Director, Frankfurt",
        de: "Objektleiter, Frankfurt",
        ar: "مدير منشأة، فرانكفورت",
      },
      quote: {
        en: "Prime Security delivered a professional CCTV installation on schedule.",
        de: "Prime Security hat eine professionelle CCTV-Installation termingerecht durchgeführt.",
        ar: "قدم Prime Security تركيباً احترافياً لكاميرات المراقبة في الوقت المحدد.",
      },
    },
    {
      name: {
        en: "Operations Manager, Hamburg",
        de: "Betriebsleiter, Hamburg",
        ar: "مدير العمليات، هامبورغ",
      },
      quote: {
        en: "Reliable monitoring and clear communication throughout the contract.",
        de: "Zuverlässige Überwachung und klare Kommunikation über den gesamten Vertrag.",
        ar: "مراقبة موثقة وواضحة طوال فترة العقد.",
      },
    },
  ],
  trustBar: {
    enabled: true,
    title: {
      en: "Professional security solutions across Germany",
      de: "Professionelle Sicherheitslösungen in ganz Deutschland",
      ar: "حلول أمنية احترافية في جميع أنحاء ألمانيا",
    },
    items: {
      en: ["Licensed & Certified", "24/7 Monitoring", "Rapid Response", "German Standards"],
      de: ["Lizenziert & Zertifiziert", "24/7 Überwachung", "Schnelle Reaktion", "Deutsche Standards"],
      ar: ["مرخص ومعتمد", "مراقبة 24/7", "استجابة سريعة", "معايير ألمانية"],
    },
  },
  offerStrip: {
    enabled: false,
    badge: {
      en: "Special Offer",
      de: "Sonderangebot",
      ar: "عرض خاص",
    },
    headline: {
      en: "Free security assessment for your facility",
      de: "Kostenlose Sicherheitsbewertung für Ihr Objekt",
      ar: "تقييم أمني مجاني لمنشأتك",
    },
    subtext: {
      en: "Limited slots available for on-site consultation",
      de: "Begrenzte Termine für Vor-Ort-Beratung verfügbar",
      ar: "مواعد محدودة متاحة للاستشارة في الموقع",
    },
    ctaLabel: {
      en: "Book assessment",
      de: "Bewertung buchen",
      ar: "احجز التقييم",
    },
    ctaHref: "/security/book",
  },
  whyUs: {
    eyebrow: {
      en: "Why us",
      de: "Warum wir",
      ar: "لماذا نحن",
    },
    title: {
      en: "Professional security with clear accountability",
      de: "Professionelle Sicherheit mit klarer Verantwortung",
      ar: "أمن احترافي بمسؤولية واضحة",
    },
    intro: {
      en: "We focus on what matters: protection, monitoring, and reliable response.",
      de: "Wir konzentrieren uns auf das Wesentliche: Schutz, Überwachung und zuverlässige Reaktion.",
      ar: "نركز على ما يهم: الحماية والمراقبة والاستجابة الموثوقة.",
    },
    bullets: {
      en: ["Licensed and certified security personnel", "24/7 monitoring and rapid response", "German quality standards throughout", "Clear facility protection plans", "Professional CCTV installation", "Contract-ready documentation"],
      de: ["Lizenziertes und zertifiziertes Sicherheitspersonal", "24/7 Überwachung und schnelle Reaktion", "Deutsche Qualitätsstandards durchgängig", "Klare Objektschutzpläne", "Professionelle CCTV-Installation", "Vertragsreife Dokumentation"],
      ar: [" personnel أمني مرخص ومعتمد", "مراقبة 24/7 واستجابة سريعة", "معايير الجودة الألمانية throughout", "خطط حماية المنشآت الواضحة", "تركيب CCTV احترافي", "توثيق جاهز للعقود"],
    },
    featuredDescription: {
      en: "We keep the process professional: clear planning, precise execution, and systems that work when they matter most.",
      de: "Wir halten den Prozess professionell: klare Planung, präzise Ausführung und Systeme, die funktionieren, wenn es darauf ankommt.",
      ar: "نحافظ على العملية احترافية: تخطيط واضح ودقيق وتنفيذ وأنظمة تعمل عندما يهم ذلك.",
    },
  },
  howItWorks: {
    eyebrow: {
      en: "How it works",
      de: "So funktioniert's",
      ar: "كيف يعمل",
    },
    title: {
      en: "From assessment to full coverage",
      de: "Von der Bewertung zur vollständigen Abdeckung",
      ar: "من التقييم إلى التغطية الكاملة",
    },
    intro: {
      en: "A structured four-step process for every security engagement.",
      de: "Ein strukturierter vierstufiger Prozess für jedes Sicherheitsengagement.",
      ar: "عملية منظمة من أربع خطوات لكل تعاون أمني.",
    },
    steps: {
      en: [
        { title: "Assessment", description: "We evaluate your facility security needs and risk profile." },
        { title: "Planning", description: "Detailed security plan with clear coverage and response protocols." },
        { title: "Deployment", description: "Professional installation and staffing by certified teams." },
        { title: "Monitoring", description: "24/7 oversight with regular reporting and response coordination." },
      ],
      de: [
        { title: "Bewertung", description: "Wir bewerten Ihre Objektsicherheit und Ihr Risikoprofil." },
        { title: "Planung", description: "Detaillierter Sicherheitsplan mit klarer Abdeckung und Reaktionsprotokollen." },
        { title: "Einsatz", description: "Professionelle Installation und Personal durch zertifizierte Teams." },
        { title: "Überwachung", description: "24/7 Aufsicht mit regelmäßigen Berichten und Reaktionskoordination." },
      ],
      ar: [
        { title: "تقييم", description: "نقوم بتقييم احتياجات أمن منشأتك وملف المخاطر." },
        { title: "تخطيط", description: "خطة أمنية مفصلة مع تغطية واضحة وبروتوكولات الاستجابة." },
        { title: "نشر", description: "تركيب وتوظيف احترافي من فرق معتمدة." },
        { title: "مراقبة", description: "إشراف على مدار الساعة مع تقارير منتظمة وتنسيق استجابة." },
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
      en: "Built on professionalism and reliability",
      de: "Basierend auf Professionalität und Zuverlässigkeit",
      ar: "مبني على الاحترافية والموثوقية",
    },
    intro: {
      en: "Every facility receives the same commitment to security, precision, and clear communication.",
      de: "Jede Einrichtung erhält dasselbe Engagement für Sicherheit, Präzision und klare Kommunikation.",
      ar: "كل منشأة تتلقى نفس الالتزام بالأمن والدقة والتواصل الواضح.",
    },
    items: {
      en: [
        { title: "Licensed & Certified", description: "Fully certified for all security operations we undertake." },
        { title: "24/7 Monitoring", description: "Round-the-clock oversight with rapid response protocols." },
        { title: "Rapid Response", description: "Immediate action capability for any security incident." },
        { title: "German Standards", description: "Strict adherence to German security regulations and protocols." },
      ],
      de: [
        { title: "Lizenziert & Zertifiziert", description: "Vollständig zertifiziert für alle Sicherheitsoperationen." },
        { title: "24/7 Überwachung", description: "Rund um die Uhr Aufsicht mit schnellen Reaktionsprotokollen." },
        { title: "Schnelle Reaktion", description: "Sofortige Handlungsfähigkeit bei jedem Sicherheitsvorfall." },
        { title: "Deutsche Standards", description: "Strikte Einhaltung deutscher Sicherheitsvorschriften und Protokolle." },
      ],
      ar: [
        { title: "مرخص ومعتمد", description: "معتمد بالكامل لجميع العمليات الأمنية التي نقوم بها." },
        { title: "مراقبة 24/7", description: "إشراف على مدار الساعة مع بروتوكولات استجابة سريعة." },
        { title: "استجابة سريعة", description: "قدرة على التصرف الفوري لأي حادثة أمنية." },
        { title: "معايير ألمانية", description: "التزام صارم بلوائح وبروتوكولات الأمن الألمانية." },
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
      en: "Security services delivered with precision",
      de: "Sicherheitsdienstleistungen mit Präzision geliefert",
      ar: "خدمات أمنية تُسلّم بدقة",
    },
    body: {
      en: "We combine guarding, CCTV, and monitoring into one cohesive security experience.",
      de: "Wir verbinden Sicherheitsdienste, CCTV und Überwachung zu einem einheitlichen Sicherheitserlebnis.",
      ar: "نجمع بين الحراسة والمراقبة والمراقبة في تجربة أمنية متماسكة.",
    },
    bullets: {
      en: ["Comprehensive security solutions", "Professional certified teams", "Reliable 24/7 coverage"],
      de: ["Umfassende Sicherheitslösungen", "Professionelle zertifizierte Teams", "Zuverlässige 24/7 Abdeckung"],
      ar: ["حلول أمنية شاملة", "فرق معتمدة احترافية", "تغطية 24/7 موثوقة"],
    },
  },
  serviceArea: {
    eyebrow: {
      en: "Service area",
      de: "Einsatzbereich",
      ar: "نطاق الخدمة",
    },
    title: {
      en: "Where we protect",
      de: "Wo wir schützen",
      ar: "حيث نحمي",
    },
    description: {
      en: "Prime Security provides protection services for facilities and commercial properties across Germany.",
      de: "Prime Security bietet Schutzdienste für Einrichtungen und Gewerbeimmobilien in ganz Deutschland.",
      ar: "يقدم Prime Security خدمات الحماية للمنشآت والعقارات التجارية في جميع أنحاء ألمانيا.",
    },
    cities: {
      en: ["Berlin", "Munich", "Hamburg", "Frankfurt", "Cologne", "Stuttgart", "Düsseldorf", "Leipzig"],
      de: ["Berlin", "München", "Hamburg", "Frankfurt", "Köln", "Stuttgart", "Düsseldorf", "Leipzig"],
      ar: ["برلين", "مونخن", "هامبرغ", "فرانكفورت", "كولونيا", "شتوتغارت", "ديلسدورف", "لايبزيغ"],
    },
  },
};
