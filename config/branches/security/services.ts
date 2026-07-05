import type { BranchService } from "@/config/types";

export const securityServices = [
  {
    code: "2.0",
    slug: "static-security-guards",
    title: {
      en: "Static Security Guards",
      de: "Statische Sicherheitskräfte",
      ar: "حراس أمن ثابتون",
    },
    summary: {
      en: "On-site guard coverage for controlled access, presence, and daily protection routines.",
      de: "Sicherheitspräsenz vor Ort für kontrollierten Zugang, sichtbare Anwesenheit und tägliche Schutzabläufe.",
      ar: "تغطية حراسة ميدانية للتحكم في الدخول والحضور الواضح وروتين الحماية اليومي.",
    },
    detailTitle: {
      en: "Static guarding explained with clarity, accountability, and site-ready structure.",
      de: "Statische Bewachung mit Klarheit, Verantwortlichkeit und einsatzbereiter Struktur erklärt.",
      ar: "شرح الحراسة الثابتة بوضوح ومسؤولية وهيكل جاهز للموقع.",
    },
    paragraphs: {
      en: [
        "This service is designed for clients who need visible guard presence with a clear operational role at one fixed location.",
        "It supports conversations around access control, entry monitoring, and responsible on-site presence without turning into vague security language.",
      ],
      de: [
        "Dieser Service richtet sich an Kunden, die eine sichtbare Sicherheitspräsenz mit klarer operativer Rolle an einem festen Standort benötigen.",
        "Er unterstützt Gespräche über Zugangskontrolle, Eingangsüberwachung und verantwortliche Präsenz vor Ort, ohne in vage Sicherheitssprache abzugleiten.",
      ],
      ar: [
        "تم تصميم هذه الخدمة للعملاء الذين يحتاجون إلى حضور أمني واضح بدور تشغيلي محدد في موقع ثابت.",
        "كما تدعم النقاش حول ضبط الدخول ومراقبة المداخل والحضور المسؤول في الموقع من دون الوقوع في عبارات أمنية عامة.",
      ],
    },
    highlights: {
      en: ["Fixed-post guard coverage", "Controlled entry presence", "Contract-ready site framing"],
      de: ["Bewachung an festen Positionen", "Präsenz für kontrollierten Zugang", "Für formelle Standortanfragen geeignet"],
      ar: ["تغطية حراسة في نقاط ثابتة", "حضور لضبط الدخول", "تموضع مناسب للعقود والمواقع"],
    },
    ctaLabel: {
      en: "Request static guards",
      de: "Statische Sicherheitskräfte anfragen",
      ar: "اطلب حراساً ثابتين",
    },
    seo: {
      title: "Static Security Guards | Prime Security",
      description: "Static security guard service under the Prime GMBH security branch.",
    },
  },
  {
    code: "2.1",
    slug: "construction-site-security",
    title: {
      en: "Construction Site Security",
      de: "Baustellensicherheit",
      ar: "أمن مواقع البناء",
    },
    summary: {
      en: "Security coverage for construction areas, materials, access points, and site activity.",
      de: "Sicherheitsabdeckung für Baustellen, Materialien, Zugänge und Standortaktivitäten.",
      ar: "تغطية أمنية لمواقع البناء والمواد ونقاط الدخول وحركة الموقع.",
    },
    detailTitle: {
      en: "Construction-site security needs operational discipline, not generic guarding language.",
      de: "Baustellensicherheit braucht operative Disziplin und keine allgemeine Wachsprache.",
      ar: "تحتاج أمنيات مواقع البناء إلى انضباط تشغيلي لا إلى عبارات حراسة عامة.",
    },
    paragraphs: {
      en: [
        "Construction environments require more than simple presence. They need coverage logic around site boundaries, material protection, and working-hour transitions.",
        "This page positions that service with a clearer operational tone for contractors, developers, and project managers.",
      ],
      de: [
        "Baustellen brauchen mehr als bloße Präsenz. Sie verlangen eine klare Logik für Grundstücksgrenzen, Materialschutz und Übergänge zwischen Arbeitszeiten.",
        "Diese Seite positioniert den Service mit einem klareren operativen Ton für Auftragnehmer, Entwickler und Projektleiter.",
      ],
      ar: [
        "تتطلب بيئات البناء أكثر من مجرد وجود أمني؛ فهي تحتاج إلى منطق واضح لتأمين حدود الموقع وحماية المواد وفترات الانتقال بين أوقات العمل.",
        "وتُظهر هذه الصفحة هذه الخدمة بنبرة تشغيلية أوضح تناسب المقاولين والمطورين ومديري المشاريع.",
      ],
    },
    highlights: {
      en: ["Boundary and access logic", "Material and equipment protection", "Built for active project sites"],
      de: ["Logik für Grenzen und Zugänge", "Schutz von Material und Ausrüstung", "Für laufende Projektstandorte ausgelegt"],
      ar: ["منطق واضح للحدود والمداخل", "حماية المواد والمعدات", "مهيأ لمواقع المشاريع النشطة"],
    },
    ctaLabel: {
      en: "Request site security",
      de: "Baustellensicherheit anfragen",
      ar: "اطلب أمن الموقع",
    },
    seo: {
      title: "Construction Site Security | Prime Security",
      description: "Construction site security service under the Prime GMBH security branch.",
    },
  },
  {
    code: "2.2",
    slug: "event-security",
    title: {
      en: "Event Security",
      de: "Veranstaltungssicherheit",
      ar: "أمن الفعاليات",
    },
    summary: {
      en: "Security presence and access coordination for organized events and managed visitor flow.",
      de: "Sicherheitspräsenz und Zugangskoordination für organisierte Veranstaltungen und geregelten Besucherfluss.",
      ar: "حضور أمني وتنسيق للدخول في الفعاليات مع إدارة منظمة لحركة الزوار.",
    },
    detailTitle: {
      en: "Event security works best when crowd flow, entry control, and responsibility are clearly framed.",
      de: "Veranstaltungssicherheit funktioniert am besten, wenn Besucherfluss, Zugangskontrolle und Verantwortlichkeit klar beschrieben sind.",
      ar: "يعمل أمن الفعاليات بأفضل صورة عندما يتم توضيح تدفق الحضور وضبط الدخول والمسؤولية بشكل صريح.",
    },
    paragraphs: {
      en: [
        "Events require a controlled but visible security layer that supports order without disturbing the visitor experience.",
        "This service gives clients a clearer path for requesting entry control, venue coverage, and on-site coordination.",
      ],
      de: [
        "Veranstaltungen brauchen eine kontrollierte, aber sichtbare Sicherheitsebene, die Ordnung schafft, ohne das Besuchererlebnis zu stören.",
        "Dieser Service bietet Kunden einen klareren Weg für Zugangskontrolle, Veranstaltungsort-Abdeckung und Koordination vor Ort.",
      ],
      ar: [
        "تحتاج الفعاليات إلى طبقة أمنية منضبطة وواضحة تدعم النظام من دون التأثير سلباً على تجربة الحضور.",
        "وتوفر هذه الخدمة مساراً أوضح لطلب ضبط الدخول وتغطية المكان والتنسيق الأمني في الموقع.",
      ],
    },
    highlights: {
      en: ["Entry and crowd-flow support", "Venue coverage presence", "Structured event coordination"],
      de: ["Unterstützung für Zugang und Besucherfluss", "Präsenz zur Abdeckung des Veranstaltungsorts", "Strukturierte Einsatzkoordination"],
      ar: ["دعم الدخول وتدفق الحضور", "حضور لتغطية المكان", "تنسيق منظم للفعاليات"],
    },
    ctaLabel: {
      en: "Request event security",
      de: "Veranstaltungssicherheit anfragen",
      ar: "اطلب أمن فعالية",
    },
    seo: {
      title: "Event Security | Prime Security",
      description: "Event security service under the Prime GMBH security branch.",
    },
  },
  {
    code: "2.3",
    slug: "property-protection",
    title: {
      en: "Property Protection",
      de: "Objektschutz",
      ar: "حماية الممتلكات",
    },
    summary: {
      en: "Property protection for buildings, assets, and controlled environments requiring steady coverage.",
      de: "Objektschutz für Gebäude, Werte und kontrollierte Umgebungen mit verlässlicher Abdeckung.",
      ar: "حماية الممتلكات للمباني والأصول والبيئات التي تحتاج إلى تغطية ثابتة ومنظمة.",
    },
    detailTitle: {
      en: "Property protection deserves direct service language with facility-level seriousness.",
      de: "Objektschutz verdient eine direkte Leistungssprache mit der Ernsthaftigkeit professioneller Standorte.",
      ar: "تستحق حماية الممتلكات لغة خدمة مباشرة بجدية تناسب مستوى المنشآت.",
    },
    paragraphs: {
      en: [
        "This service is structured for property owners and operators who need a clearer first conversation around protection scope and ongoing site responsibility.",
        "It supports a more professional request path than a generic security claim and helps frame coverage expectations early.",
      ],
      de: [
        "Dieser Service richtet sich an Eigentümer und Betreiber, die ein klareres Erstgespräch über Schutzumfang und laufende Standortverantwortung benötigen.",
        "Er bietet einen professionelleren Anfrageweg als allgemeine Sicherheitsbehauptungen und hilft, Abdeckungserwartungen früh zu klären.",
      ],
      ar: [
        "تم تنظيم هذه الخدمة لمالكي العقارات والمشغلين الذين يحتاجون إلى حديث أول أوضح حول نطاق الحماية ومسؤولية الموقع المستمرة.",
        "كما توفر مسار طلب أكثر مهنية من الادعاءات الأمنية العامة وتساعد على توضيح توقعات التغطية مبكراً.",
      ],
    },
    highlights: {
      en: ["Asset and building focus", "Professional protection framing", "Clearer ongoing coverage logic"],
      de: ["Fokus auf Gebäude und Werte", "Professionelle Schutzdarstellung", "Klarere Logik für laufende Abdeckung"],
      ar: ["تركيز على الأصول والمباني", "عرض مهني للحماية", "منطق أوضح للتغطية المستمرة"],
    },
    ctaLabel: {
      en: "Request property protection",
      de: "Objektschutz anfragen",
      ar: "اطلب حماية الممتلكات",
    },
    seo: {
      title: "Property Protection | Prime Security",
      description: "Property protection service under the Prime GMBH security branch.",
    },
  },
  {
    code: "2.4",
    slug: "cctv-installation",
    title: {
      en: "CCTV Installation",
      de: "CCTV-Installation",
      ar: "تركيب CCTV",
    },
    summary: {
      en: "CCTV installation for reliable camera coverage, recording setup, and system readiness.",
      de: "CCTV-Installation für zuverlässige Kameraabdeckung, Aufzeichnungseinrichtung und Systembereitschaft.",
      ar: "تركيب أنظمة CCTV لتغطية موثوقة وإعداد التسجيل وجاهزية النظام.",
    },
    detailTitle: {
      en: "CCTV installation should feel technical, precise, and implementation-ready.",
      de: "CCTV-Installation sollte technisch, präzise und umsetzungsbereit wirken.",
      ar: "يجب أن تبدو خدمة تركيب CCTV تقنية ودقيقة وجاهزة للتنفيذ.",
    },
    paragraphs: {
      en: [
        "This service is designed for clients who need a direct path into camera-system installation without the noise of generic surveillance marketing.",
        "It covers setup logic, placement awareness, and a more credible presentation of camera deployment work.",
      ],
      de: [
        "Dieser Service richtet sich an Kunden, die einen direkten Weg in die Installation von Kamerasystemen benötigen, ohne allgemeines Überwachungsmarketing.",
        "Er deckt Einrichtungslogik, Platzierungsbewusstsein und eine glaubwürdigere Darstellung von Kameraeinsätzen ab.",
      ],
      ar: [
        "تم تصميم هذه الخدمة للعملاء الذين يحتاجون إلى مسار مباشر لتركيب أنظمة الكاميرات بعيداً عن لغة التسويق العامة للمراقبة.",
        "كما تغطي منطق الإعداد ووعي التوزيع وعرضاً أكثر مصداقية لأعمال نشر الكاميرات.",
      ],
    },
    highlights: {
      en: ["Installation-first service path", "Placement and setup logic", "Clear camera deployment framing"],
      de: ["Serviceweg mit Fokus auf Installation", "Logik für Platzierung und Einrichtung", "Klare Darstellung der Kamerainstallation"],
      ar: ["مسار خدمة يركز على التركيب", "منطق للتوزيع والإعداد", "عرض واضح لنشر الكاميرات"],
    },
    ctaLabel: {
      en: "Request CCTV installation",
      de: "CCTV-Installation anfragen",
      ar: "اطلب تركيب CCTV",
    },
    seo: {
      title: "CCTV Installation | Prime Security",
      description: "CCTV installation service under the Prime GMBH security branch.",
    },
  },
  {
    code: "2.5",
    slug: "security-camera-systems",
    title: {
      en: "Security Camera Systems",
      de: "Sicherheitskamerasysteme",
      ar: "أنظمة الكاميرات الأمنية",
    },
    summary: {
      en: "Security camera systems planned as complete coverage solutions for professional environments.",
      de: "Sicherheitskamerasysteme als vollständige Abdeckungslösungen für professionelle Umgebungen geplant.",
      ar: "أنظمة كاميرات أمنية مخططة كحلول تغطية متكاملة للبيئات المهنية.",
    },
    detailTitle: {
      en: "System-based camera work needs broader planning language than installation alone.",
      de: "Systembasierte Kameraarbeit braucht eine breitere Planungssprache als reine Installation.",
      ar: "تحتاج أعمال الكاميرات القائمة على الأنظمة إلى لغة تخطيط أوسع من مجرد التركيب.",
    },
    paragraphs: {
      en: [
        "Some clients are not asking for a single installation task, but for a complete system logic across coverage, recording, and daily use.",
        "This page positions that request as a structured security service with clearer technical intent.",
      ],
      de: [
        "Manche Kunden fragen nicht nur eine einzelne Installation an, sondern eine vollständige Systemlogik für Abdeckung, Aufzeichnung und den täglichen Betrieb.",
        "Diese Seite positioniert diese Anfrage als strukturierten Sicherheitsservice mit klarerer technischer Ausrichtung.",
      ],
      ar: [
        "بعض العملاء لا يطلبون مهمة تركيب منفردة، بل منطق نظام كامل يشمل التغطية والتسجيل والاستخدام اليومي.",
        "وتعرض هذه الصفحة هذا الطلب كخدمة أمنية منظمة ذات توجه تقني أوضح.",
      ],
    },
    highlights: {
      en: ["Whole-system camera planning", "Coverage and recording structure", "Professional technical positioning"],
      de: ["Ganzheitliche Kamerasystemplanung", "Struktur für Abdeckung und Aufzeichnung", "Professionelle technische Positionierung"],
      ar: ["تخطيط شامل لأنظمة الكاميرات", "هيكل للتغطية والتسجيل", "تموضع تقني احترافي"],
    },
    ctaLabel: {
      en: "Request camera systems",
      de: "Kamerasysteme anfragen",
      ar: "اطلب أنظمة كاميرات",
    },
    seo: {
      title: "Security Camera Systems | Prime Security",
      description: "Security camera systems service under the Prime GMBH security branch.",
    },
  },
  {
    code: "2.6",
    slug: "video-surveillance",
    title: {
      en: "Video Surveillance",
      de: "Videoüberwachung",
      ar: "المراقبة بالفيديو",
    },
    summary: {
      en: "Video-surveillance planning for monitored spaces, visual coverage, and recording oversight.",
      de: "Planung von Videoüberwachung für überwachte Flächen, visuelle Abdeckung und Aufzeichnungsaufsicht.",
      ar: "تخطيط المراقبة بالفيديو للمساحات المراقبة والتغطية البصرية وإشراف التسجيل.",
    },
    detailTitle: {
      en: "Video surveillance needs a service page that sounds operational, not just product-based.",
      de: "Videoüberwachung braucht eine Leistungsseite mit operativem Ton statt rein produktbezogener Sprache.",
      ar: "تحتاج المراقبة بالفيديو إلى صفحة خدمة بنبرة تشغيلية لا مجرد لغة بيع للمنتج.",
    },
    paragraphs: {
      en: [
        "This service supports clients who think in terms of surveillance coverage, oversight needs, and recorded visibility across a site.",
        "It gives that requirement a more formal request path inside the branch and strengthens technical credibility.",
      ],
      de: [
        "Dieser Service richtet sich an Kunden, die in Überwachungsabdeckung, Aufsichtsbedarf und aufgezeichneter Sichtbarkeit über einen Standort denken.",
        "Er gibt dieser Anforderung einen formelleren Anfrageweg im Bereich und stärkt die technische Glaubwürdigkeit.",
      ],
      ar: [
        "تدعم هذه الخدمة العملاء الذين يفكرون بمنطق تغطية المراقبة واحتياجات الإشراف والرؤية المسجلة عبر الموقع.",
        "كما تمنح هذا المتطلب مسار طلب أكثر رسمية داخل الفرع وتعزز المصداقية التقنية.",
      ],
    },
    highlights: {
      en: ["Surveillance coverage framing", "Visibility and recording focus", "Formal request path for monitored sites"],
      de: ["Rahmung von Überwachungsabdeckung", "Fokus auf Sichtbarkeit und Aufzeichnung", "Formeller Anfrageweg für überwachte Standorte"],
      ar: ["صياغة واضحة لتغطية المراقبة", "تركيز على الرؤية والتسجيل", "مسار رسمي لطلبات المواقع المراقبة"],
    },
    ctaLabel: {
      en: "Request video surveillance",
      de: "Videoüberwachung anfragen",
      ar: "اطلب المراقبة بالفيديو",
    },
    seo: {
      title: "Video Surveillance | Prime Security",
      description: "Video surveillance service under the Prime GMBH security branch.",
    },
  },
  {
    code: "2.7",
    slug: "monitoring-solutions",
    title: {
      en: "Monitoring Solutions",
      de: "Monitoring-Lösungen",
      ar: "حلول المراقبة",
    },
    summary: {
      en: "Monitoring solutions for security visibility, response coordination, and controlled oversight.",
      de: "Monitoring-Lösungen für Sicherheitsübersicht, Einsatzkoordination und kontrollierte Aufsicht.",
      ar: "حلول مراقبة لتعزيز الرؤية الأمنية وتنسيق الاستجابة والإشراف المنضبط.",
    },
    detailTitle: {
      en: "Monitoring services should present response logic and oversight value with clarity.",
      de: "Monitoring-Services sollten Reaktionslogik und Überwachungswert klar darstellen.",
      ar: "يجب أن تعرض خدمات المراقبة منطق الاستجابة وقيمة الإشراف بوضوح.",
    },
    paragraphs: {
      en: [
        "This service is positioned for clients who need security oversight supported by clearer monitoring logic rather than only physical presence.",
        "It helps frame alert awareness, reporting, and coordinated follow-up as part of a serious operational service.",
      ],
      de: [
        "Dieser Service richtet sich an Kunden, die Sicherheitsaufsicht mit klarerer Monitoring-Logik und nicht nur physischer Präsenz benötigen.",
        "Er hilft dabei, Alarmbewusstsein, Berichterstattung und koordinierte Nachverfolgung als Teil eines ernsthaften operativen Service darzustellen.",
      ],
      ar: [
        "تموضع هذه الخدمة يناسب العملاء الذين يحتاجون إلى إشراف أمني مدعوم بمنطق مراقبة أوضح وليس مجرد حضور مادي.",
        "كما تساعد في عرض متابعة التنبيهات والتقارير والاستجابة المنسقة كجزء من خدمة تشغيلية جادة.",
      ],
    },
    highlights: {
      en: ["Oversight-driven service framing", "Alert and response awareness", "Supports structured reporting"],
      de: ["Leistungsdarstellung mit Fokus auf Aufsicht", "Bewusstsein für Alarme und Reaktion", "Unterstützt strukturierte Berichte"],
      ar: ["عرض خدمي قائم على الإشراف", "وعي بالتنبيهات والاستجابة", "يدعم التقارير المنظمة"],
    },
    ctaLabel: {
      en: "Request monitoring solutions",
      de: "Monitoring-Lösungen anfragen",
      ar: "اطلب حلول مراقبة",
    },
    seo: {
      title: "Monitoring Solutions | Prime Security",
      description: "Security monitoring solutions under the Prime GMBH security branch.",
    },
  },
  {
    code: "2.8",
    slug: "facility-surveillance",
    title: {
      en: "Facility Surveillance",
      de: "Objektüberwachung",
      ar: "مراقبة المنشآت",
    },
    summary: {
      en: "Facility surveillance for ongoing site visibility, controlled observation, and operational assurance.",
      de: "Objektüberwachung für laufende Standortsichtbarkeit, kontrollierte Beobachtung und operative Sicherheit.",
      ar: "مراقبة المنشآت لتحقيق رؤية مستمرة للموقع وملاحظة منضبطة واطمئنان تشغيلي.",
    },
    detailTitle: {
      en: "Facility surveillance is strongest when oversight and site responsibility are clearly connected.",
      de: "Objektüberwachung wirkt am stärksten, wenn Aufsicht und Standortverantwortung klar verbunden werden.",
      ar: "تكون مراقبة المنشآت أقوى عندما يرتبط الإشراف بمسؤولية الموقع بشكل واضح.",
    },
    paragraphs: {
      en: [
        "This service is designed for facilities that require a more defined surveillance posture across buildings, access points, or monitored zones.",
        "It gives clients a direct way to discuss continuous observation and responsible security oversight.",
      ],
      de: [
        "Dieser Service richtet sich an Standorte, die eine klarere Überwachungsstruktur über Gebäude, Zugänge oder definierte Zonen hinweg benötigen.",
        "Er bietet Kunden einen direkten Weg, kontinuierliche Beobachtung und verantwortliche Sicherheitsaufsicht zu besprechen.",
      ],
      ar: [
        "تم تصميم هذه الخدمة للمنشآت التي تحتاج إلى وضع مراقبة أوضح عبر المباني ونقاط الدخول أو المناطق المحددة.",
        "كما تمنح العملاء وسيلة مباشرة لمناقشة المراقبة المستمرة والإشراف الأمني المسؤول.",
      ],
    },
    highlights: {
      en: ["Facility-wide observation logic", "Zone and access visibility", "Direct path for continuous oversight"],
      de: ["Logik für standortweite Überwachung", "Sichtbarkeit für Zonen und Zugänge", "Direkter Weg für kontinuierliche Aufsicht"],
      ar: ["منطق مراقبة يشمل المنشأة", "وضوح للمناطق والمداخل", "مسار مباشر للإشراف المستمر"],
    },
    ctaLabel: {
      en: "Request facility surveillance",
      de: "Objektüberwachung anfragen",
      ar: "اطلب مراقبة المنشأة",
    },
    seo: {
      title: "Facility Surveillance | Prime Security",
      description: "Facility surveillance service under the Prime GMBH security branch.",
    },
  },
  {
    code: "2.9",
    slug: "security-operations",
    title: {
      en: "Security Operations",
      de: "Sicherheitsoperationen",
      ar: "العمليات الأمنية",
    },
    summary: {
      en: "Security operations support for coordinated procedures, response structure, and controlled execution.",
      de: "Unterstützung für Sicherheitsoperationen mit koordinierten Abläufen, Einsatzstruktur und kontrollierter Umsetzung.",
      ar: "دعم للعمليات الأمنية عبر إجراءات منسقة وهيكل استجابة وتنفيذ منضبط.",
    },
    detailTitle: {
      en: "Operational security planning needs a clearer service path than standard guarding alone.",
      de: "Operative Sicherheitsplanung braucht einen klareren Serviceweg als reine Bewachung allein.",
      ar: "تحتاج التخطيطات التشغيلية الأمنية إلى مسار خدمة أوضح من الحراسة التقليدية وحدها.",
    },
    paragraphs: {
      en: [
        "Some clients need broader operational coordination across security tasks, reporting, escalation, and execution standards.",
        "This service positions that need as a defined offer for professional environments with formal expectations.",
      ],
      de: [
        "Manche Kunden brauchen eine breitere operative Koordination über Sicherheitsaufgaben, Berichte, Eskalationen und Ausführungsstandards hinweg.",
        "Dieser Service positioniert diesen Bedarf als klar definiertes Angebot für professionelle Umgebungen mit formellen Anforderungen.",
      ],
      ar: [
        "بعض العملاء يحتاجون إلى تنسيق تشغيلي أوسع يشمل المهام الأمنية والتقارير والتصعيد ومعايير التنفيذ.",
        "وتعرض هذه الخدمة هذا الاحتياج كعرض محدد للبيئات المهنية ذات المتطلبات الرسمية.",
      ],
    },
    highlights: {
      en: ["Procedure and response structure", "Operational coordination framing", "Formal service for professional sites"],
      de: ["Struktur für Abläufe und Reaktion", "Rahmung operativer Koordination", "Formeller Service für professionelle Standorte"],
      ar: ["هيكل للإجراءات والاستجابة", "تموضع للتنسيق التشغيلي", "خدمة رسمية للمواقع المهنية"],
    },
    ctaLabel: {
      en: "Request security operations",
      de: "Sicherheitsoperationen anfragen",
      ar: "اطلب عمليات أمنية",
    },
    seo: {
      title: "Security Operations | Prime Security",
      description: "Security operations service under the Prime GMBH security branch.",
    },
  },
] satisfies readonly BranchService[];
