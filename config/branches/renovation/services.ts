import type { BranchService } from "@/config/types";

export const renovationServices = [
  {
    code: "1.0",
    slug: "parquet",
    title: {
      en: "Parquet",
      de: "Parkett",
      ar: "الباركيه",
    },
    summary: {
      en: "Parquet flooring installation, renewal, and finishing for clean interior upgrades.",
      de: "Parkettverlegung, Erneuerung und Oberflächenbearbeitung für saubere Innenraum-Upgrades.",
      ar: "تركيب وتجديد وتشطيب أرضيات الباركيه ضمن أعمال داخلية نظيفة ومنظمة.",
    },
    detailTitle: {
      en: "Parquet work presented with clarity, finish quality, and installation discipline.",
      de: "Parkettarbeiten mit Klarheit, Oberflächenqualität und sauberer Ausführung dargestellt.",
      ar: "عرض أعمال الباركيه بوضوح وجودة تشطيب وتنفيذ منضبط.",
    },
    paragraphs: {
      en: [
        "This service is structured for clients who want timber flooring to feel precise, durable, and visually consistent across the room.",
        "It covers the planning logic needed for replacement work, finish matching, and a cleaner handover after installation.",
      ],
      de: [
        "Dieser Service richtet sich an Kunden, die Holzfußböden präzise, langlebig und optisch stimmig umgesetzt haben möchten.",
        "Er erklärt die nötige Planungslogik für Austausch, Oberflächenabstimmung und eine saubere Übergabe nach der Verlegung.",
      ],
      ar: [
        "تم تنظيم هذه الخدمة للعملاء الذين يريدون أرضيات خشبية دقيقة ومتينة ومتناسقة بصرياً داخل المساحة.",
        "وهي توضح منطق التخطيط المطلوب لأعمال الاستبدال وتنسيق التشطيب وتسليم الموقع بشكل أنظف بعد التركيب.",
      ],
    },
    highlights: {
      en: ["Wood-floor upgrade framing", "Clean installation sequencing", "Finish-focused handover"],
      de: ["Klare Aufwertung von Holzfußböden", "Saubere Verlegeabfolge", "Übergabe mit Fokus auf das Finish"],
      ar: ["صياغة واضحة لترقية الأرضيات الخشبية", "تسلسل تركيب نظيف", "تسليم يركز على جودة التشطيب"],
    },
    ctaLabel: {
      en: "Request parquet work",
      de: "Parkettarbeiten anfragen",
      ar: "اطلب أعمال الباركيه",
    },
    seo: {
      title: "Parquet | Prime Renovation",
      description: "Parquet flooring service under the Prime GMBH renovation branch.",
    },
  },
  {
    code: "1.1",
    slug: "vinyl",
    title: {
      en: "Vinyl",
      de: "Vinyl",
      ar: "الفينيل",
    },
    summary: {
      en: "Vinyl flooring installation for practical, durable, and low-maintenance interior surfaces.",
      de: "Vinylboden-Verlegung für praktische, langlebige und pflegeleichte Innenflächen.",
      ar: "تركيب أرضيات الفينيل لأسطح داخلية عملية ومتينة وسهلة الصيانة.",
    },
    detailTitle: {
      en: "Vinyl flooring explained as a practical finish with clean execution standards.",
      de: "Vinylboden als praktischer Ausbau mit klaren Ausführungsstandards erklärt.",
      ar: "شرح أرضيات الفينيل كتشطيب عملي مع معايير تنفيذ واضحة.",
    },
    paragraphs: {
      en: [
        "Vinyl projects are often chosen for everyday durability, quick turnaround, and cleaner maintenance expectations.",
        "This service presents that value in a direct way while keeping installation quality and room-readiness visible.",
      ],
      de: [
        "Vinylprojekte werden oft wegen Alltagstauglichkeit, schneller Umsetzung und einfacher Pflege gewählt.",
        "Dieser Service stellt genau diesen Nutzen direkt dar und macht zugleich die Verlegequalität und Raumfertigkeit sichtbar.",
      ],
      ar: [
        "غالباً ما يتم اختيار الفينيل بسبب تحمله اليومي وسرعة تنفيذه وسهولة العناية به.",
        "وتعرض هذه الخدمة هذه القيمة بشكل مباشر مع إبقاء جودة التركيب وجاهزية المساحة واضحة للعميل.",
      ],
    },
    highlights: {
      en: ["Practical surface upgrade", "Fast installation framing", "Low-maintenance positioning"],
      de: ["Praktische Oberflächenaufwertung", "Darstellung schneller Verlegung", "Positionierung als pflegeleichte Lösung"],
      ar: ["ترقية عملية للسطح", "صياغة واضحة للتركيب السريع", "تموضع كحل قليل الصيانة"],
    },
    ctaLabel: {
      en: "Request vinyl flooring",
      de: "Vinylboden anfragen",
      ar: "اطلب أرضيات فينيل",
    },
    seo: {
      title: "Vinyl Flooring | Prime Renovation",
      description: "Vinyl flooring service under the Prime GMBH renovation branch.",
    },
  },
  {
    code: "1.2",
    slug: "floor-installation",
    title: {
      en: "Floor Installation",
      de: "Bodenverlegung",
      ar: "تركيب الأرضيات",
    },
    summary: {
      en: "General floor installation for new interior finishes across residential and project spaces.",
      de: "Allgemeine Bodenverlegung für neue Innenausbauten in Wohn- und Projektflächen.",
      ar: "تركيب عام للأرضيات ضمن التشطيبات الداخلية الجديدة للمنازل ومساحات المشاريع.",
    },
    detailTitle: {
      en: "Floor installation positioned as a structured service rather than a loose trade add-on.",
      de: "Bodenverlegung als strukturierter Service statt als loses Zusatzgewerk positioniert.",
      ar: "تموضع تركيب الأرضيات كخدمة منظمة وليس كإضافة تنفيذية جانبية.",
    },
    paragraphs: {
      en: [
        "Some clients need a clear booking path for floor work without narrowing the request to one material from the start.",
        "This service gives that broader entry point while keeping sequencing, preparation, and finish quality central.",
      ],
      de: [
        "Manche Kunden brauchen einen klaren Anfrageweg für Bodenarbeiten, ohne sich sofort auf ein Material festzulegen.",
        "Dieser Service bietet genau diesen breiteren Einstieg und hält Reihenfolge, Untergrundvorbereitung und Qualität im Mittelpunkt.",
      ],
      ar: [
        "بعض العملاء يحتاجون إلى مسار طلب واضح لأعمال الأرضيات من دون حصر الطلب في مادة واحدة منذ البداية.",
        "وتوفر هذه الخدمة هذا المدخل الأوسع مع الحفاظ على أهمية التسلسل والتحضير وجودة التشطيب.",
      ],
    },
    highlights: {
      en: ["Material-flexible request path", "Preparation-first execution", "Cleaner finishing standards"],
      de: ["Anfrageweg für verschiedene Materialien", "Ausführung mit Fokus auf Vorbereitung", "Sauberere Standards im Endfinish"],
      ar: ["مسار طلب مرن للمواد المختلفة", "تنفيذ يبدأ بالتحضير", "معايير أنظف في التشطيب النهائي"],
    },
    ctaLabel: {
      en: "Request floor installation",
      de: "Bodenverlegung anfragen",
      ar: "اطلب تركيب أرضيات",
    },
    seo: {
      title: "Floor Installation | Prime Renovation",
      description: "Floor installation service under the Prime GMBH renovation branch.",
    },
  },
  {
    code: "2.0",
    slug: "gypsum",
    title: {
      en: "Gypsum",
      de: "Gipsarbeiten",
      ar: "أعمال الجبس",
    },
    summary: {
      en: "Gypsum partition, ceiling, and finishing work for structured interior build-outs.",
      de: "Gipsarbeiten für Trennwände, Decken und Ausbauten in strukturierten Innenprojekten.",
      ar: "أعمال الجبس للقواطع والأسقف والتشطيبات ضمن مشاريع داخلية منظمة.",
    },
    detailTitle: {
      en: "Gypsum work needs clear scope, tidy edges, and a disciplined finishing sequence.",
      de: "Gipsarbeiten brauchen klaren Umfang, saubere Kanten und eine disziplinierte Abfolge im Ausbau.",
      ar: "تحتاج أعمال الجبس إلى نطاق واضح وحواف مرتبة وتسلسل تشطيب منضبط.",
    },
    paragraphs: {
      en: [
        "Gypsum services often sit at the center of interior reconfiguration, ceiling work, and finish preparation.",
        "This page frames them as a defined trade service with planning clarity instead of vague remodeling language.",
      ],
      de: [
        "Gipsarbeiten stehen oft im Zentrum von Innenraumaufteilungen, Deckenarbeiten und der Vorbereitung weiterer Ausbauten.",
        "Diese Seite positioniert sie daher als klar definierten Fachservice statt in ungenauer Umbau-Sprache.",
      ],
      ar: [
        "غالباً ما تكون أعمال الجبس في قلب إعادة تشكيل المساحات الداخلية وأعمال الأسقف وتجهيز التشطيبات اللاحقة.",
        "ولهذا تعرضها هذه الصفحة كخدمة مهنية محددة وليست ضمن وصف عام وغير واضح لأعمال الترميم.",
      ],
    },
    highlights: {
      en: ["Partition and ceiling framing", "Clean edge and surface preparation", "Fit for broader interior works"],
      de: ["Aufteilung und Deckenaufbau", "Saubere Kanten- und Flächenvorbereitung", "Passend für umfassendere Innenarbeiten"],
      ar: ["تنفيذ القواطع والأسقف", "تحضير نظيف للحواف والأسطح", "مناسب لأعمال داخلية أوسع"],
    },
    ctaLabel: {
      en: "Request gypsum work",
      de: "Gipsarbeiten anfragen",
      ar: "اطلب أعمال الجبس",
    },
    seo: {
      title: "Gypsum Work | Prime Renovation",
      description: "Gypsum partition and ceiling service under the Prime GMBH renovation branch.",
    },
  },
  {
    code: "2.1",
    slug: "wallpaper",
    title: {
      en: "Wallpaper",
      de: "Tapezieren",
      ar: "ورق الجدران",
    },
    summary: {
      en: "Wallpaper installation and renewal for clean wall finishing and visual consistency.",
      de: "Tapezierarbeiten und Erneuerung für saubere Wandoberflächen und stimmige Innenräume.",
      ar: "تركيب وتجديد ورق الجدران لتحقيق تشطيب نظيف وتناسق بصري داخل المساحة.",
    },
    detailTitle: {
      en: "Wallpaper work should feel precise, aligned, and finish-led from start to handover.",
      de: "Tapezierarbeiten sollten vom Start bis zur Übergabe präzise, ausgerichtet und finish-orientiert wirken.",
      ar: "يجب أن تبدو أعمال ورق الجدران دقيقة ومنسقة ومبنية على جودة التشطيب من البداية حتى التسليم.",
    },
    paragraphs: {
      en: [
        "Wallpaper is a detail-sensitive service where surface readiness and installation alignment matter as much as the material itself.",
        "This service page gives that work a clearer place in the branch structure and makes the request path more specific.",
      ],
      de: [
        "Tapezierarbeiten sind detailabhängig, denn Untergrundvorbereitung und exakte Ausrichtung sind ebenso wichtig wie das Material selbst.",
        "Diese Service-Seite gibt dieser Arbeit einen klareren Platz in der Branchstruktur und macht den Anfrageweg spezifischer.",
      ],
      ar: [
        "تعتمد أعمال ورق الجدران على التفاصيل، إذ إن جاهزية السطح ودقة التثبيت لا تقل أهمية عن المادة نفسها.",
        "وتمنح هذه الصفحة هذه الأعمال مكاناً أوضح داخل هيكل الفرع وتجعل مسار الطلب أكثر تحديداً.",
      ],
    },
    highlights: {
      en: ["Surface-readiness focus", "Pattern and alignment care", "More specific finish request path"],
      de: ["Fokus auf Untergrundbereitschaft", "Sorgfalt bei Muster und Ausrichtung", "Spezifischerer Anfrageweg für Finish-Arbeiten"],
      ar: ["تركيز على جاهزية السطح", "عناية بالمحاذاة والنمط", "مسار طلب أوضح لأعمال التشطيب"],
    },
    ctaLabel: {
      en: "Request wallpaper service",
      de: "Tapezierarbeiten anfragen",
      ar: "اطلب خدمة ورق الجدران",
    },
    seo: {
      title: "Wallpaper | Prime Renovation",
      description: "Wallpaper installation service under the Prime GMBH renovation branch.",
    },
  },
  {
    code: "2.2",
    slug: "painting",
    title: {
      en: "Painting",
      de: "Malerarbeiten",
      ar: "الدهان",
    },
    summary: {
      en: "Interior painting for refreshed walls, ceilings, and clean finish transitions.",
      de: "Innenanstriche für aufgefrischte Wände, Decken und saubere Übergänge im Finish.",
      ar: "دهانات داخلية لتجديد الجدران والأسقف وتحقيق انتقالات نظيفة في التشطيب.",
    },
    detailTitle: {
      en: "Painting becomes more credible when preparation and finish quality are clearly defined.",
      de: "Malerarbeiten wirken glaubwürdiger, wenn Vorbereitung und Oberflächenqualität klar benannt werden.",
      ar: "تبدو أعمال الدهان أكثر مصداقية عندما يتم توضيح التحضير وجودة التشطيب بشكل صريح.",
    },
    paragraphs: {
      en: [
        "Painting is often requested as part of larger renovation work, but many clients still need it as a standalone service entry.",
        "This page supports both use cases by focusing on surface readiness, consistency, and a cleaner finished result.",
      ],
      de: [
        "Malerarbeiten werden oft zusammen mit größeren Renovierungen angefragt, doch viele Kunden brauchen sie auch als eigenständigen Service.",
        "Diese Seite unterstützt beide Fälle, indem sie Untergrund, Gleichmäßigkeit und ein sauberes Endergebnis in den Mittelpunkt stellt.",
      ],
      ar: [
        "غالباً ما يتم طلب الدهان ضمن أعمال تجديد أكبر، لكن كثيراً من العملاء يحتاجونه أيضاً كخدمة مستقلة.",
        "وتدعم هذه الصفحة الحالتين عبر التركيز على جاهزية السطح والتناسق والنتيجة النهائية النظيفة.",
      ],
    },
    highlights: {
      en: ["Surface-prep visibility", "Even finish positioning", "Standalone or paired with renovation"],
      de: ["Sichtbarkeit der Vorbereitung", "Positionierung für gleichmäßiges Finish", "Eigenständig oder mit Renovierung kombinierbar"],
      ar: ["وضوح مرحلة التحضير", "تموضع لتشطيب متجانس", "مستقلة أو مرافقة لأعمال التجديد"],
    },
    ctaLabel: {
      en: "Request painting service",
      de: "Malerarbeiten anfragen",
      ar: "اطلب خدمة الدهان",
    },
    seo: {
      title: "Painting | Prime Renovation",
      description: "Interior painting service under the Prime GMBH renovation branch.",
    },
  },
  {
    code: "2.3",
    slug: "decorative-wall-ceiling-finishes",
    title: {
      en: "Decorative Wall & Ceiling Finishes",
      de: "Dekorative Wand- & Deckenoberflächen",
      ar: "تشطيبات ديكورية للجدران والأسقف",
    },
    summary: {
      en: "Decorative wall and ceiling finishing for more refined interior presentation.",
      de: "Dekorative Wand- und Deckenoberflächen für einen veredelten Innenausbau.",
      ar: "تشطيبات ديكورية للجدران والأسقف لرفع مستوى العرض الداخلي للمساحة.",
    },
    detailTitle: {
      en: "Decorative finishes deserve their own service language, not a hidden line inside general painting.",
      de: "Dekorative Oberflächen verdienen eine eigene Service-Sprache statt einer versteckten Zeile unter allgemeinen Malerarbeiten.",
      ar: "تستحق التشطيبات الديكورية لغة خدمة مستقلة لا مجرد سطر مخفي داخل أعمال الدهان العامة.",
    },
    paragraphs: {
      en: [
        "Some clients are not looking for basic coverage work but for a more expressive interior finish with visible material character.",
        "This service gives that request a direct path while keeping execution discipline and room coherence central.",
      ],
      de: [
        "Manche Kunden suchen nicht nur einfache Flächenabdeckung, sondern einen ausdrucksstärkeren Innenausbau mit sichtbarer Materialwirkung.",
        "Dieser Service gibt genau dieser Anfrage einen direkten Weg und hält zugleich Ausführungsdisziplin und Raumwirkung im Fokus.",
      ],
      ar: [
        "بعض العملاء لا يبحثون عن تغطية أساسية فقط، بل عن تشطيب داخلي أكثر حضوراً وطابعاً بصرياً للمادة.",
        "وتمنح هذه الخدمة هذا الطلب مساراً مباشراً مع الحفاظ على انضباط التنفيذ وتماسك المساحة.",
      ],
    },
    highlights: {
      en: ["Higher-finish positioning", "Material-character emphasis", "Direct path for premium interiors"],
      de: ["Positionierung für hochwertigeres Finish", "Betonung des Materialcharakters", "Direkter Weg für anspruchsvollere Innenräume"],
      ar: ["تموضع لتشطيب أعلى مستوى", "إبراز طابع المادة", "مسار مباشر للداخل الفاخر"],
    },
    ctaLabel: {
      en: "Request decorative finishes",
      de: "Dekorative Oberflächen anfragen",
      ar: "اطلب تشطيبات ديكورية",
    },
    seo: {
      title: "Decorative Wall & Ceiling Finishes | Prime Renovation",
      description: "Decorative wall and ceiling finishing service under the Prime GMBH renovation branch.",
    },
  },
  {
    code: "2.4",
    slug: "wood-decorative-panels",
    title: {
      en: "Wood Decorative Panels",
      de: "Dekorative Holzpaneele",
      ar: "ألواح خشبية ديكورية",
    },
    summary: {
      en: "Wood decorative panel installation for warm, structured, and design-led interior surfaces.",
      de: "Montage dekorativer Holzpaneele für warme, strukturierte und gestalterische Innenflächen.",
      ar: "تركيب ألواح خشبية ديكورية لأسطح داخلية دافئة ومنظمة وذات طابع تصميمي.",
    },
    detailTitle: {
      en: "Panel work is easier to trust when alignment, detailing, and finish consistency are explicit.",
      de: "Paneelarbeiten wirken vertrauenswürdiger, wenn Ausrichtung, Details und Finish-Konstanz klar benannt werden.",
      ar: "تصبح أعمال الألواح أسهل في الثقة عندما تكون المحاذاة والتفاصيل واتساق التشطيب واضحة وصريحة.",
    },
    paragraphs: {
      en: [
        "Wood decorative panels sit between finish work and interior character, so clients need a page that communicates both installation care and visual intent.",
        "This service does that by presenting panel work as a deliberate interior upgrade rather than an afterthought.",
      ],
      de: [
        "Dekorative Holzpaneele liegen zwischen Ausbauarbeit und Raumcharakter, daher brauchen Kunden eine Seite, die sowohl Sorgfalt in der Montage als auch gestalterische Wirkung vermittelt.",
        "Dieser Service macht genau das und positioniert Paneelarbeiten als bewusste Innenraumaufwertung statt als Nebengedanke.",
      ],
      ar: [
        "تقع الألواح الخشبية الديكورية بين أعمال التشطيب وطابع المساحة، لذا يحتاج العميل إلى صفحة توضح عناية التركيب والنية البصرية معاً.",
        "وتقوم هذه الخدمة بذلك عبر تقديم الألواح كترقية داخلية مقصودة وليست إضافة متأخرة.",
      ],
    },
    highlights: {
      en: ["Interior-character upgrade", "Alignment and detailing focus", "Cleaner presentation of panel work"],
      de: ["Aufwertung des Raumcharakters", "Fokus auf Ausrichtung und Details", "Klarere Darstellung von Paneelarbeiten"],
      ar: ["ترقية لطابع المساحة", "تركيز على المحاذاة والتفاصيل", "عرض أوضح لأعمال الألواح"],
    },
    ctaLabel: {
      en: "Request wood panel installation",
      de: "Holzpaneele anfragen",
      ar: "اطلب تركيب ألواح خشبية",
    },
    seo: {
      title: "Wood Decorative Panels | Prime Renovation",
      description: "Wood decorative panel service under the Prime GMBH renovation branch.",
    },
  },
  {
    code: "3.0",
    slug: "apartment-renovation",
    title: {
      en: "Apartment Renovation",
      de: "Wohnungsrenovierung",
      ar: "تجديد الشقق",
    },
    summary: {
      en: "Coordinated apartment renovation for lived-in spaces, rental units, and staged properties.",
      de: "Koordinierte Wohnungsrenovierung für bewohnte Räume, Mietobjekte und vorbereitete Einheiten.",
      ar: "تجديد منسق للشقق المأهولة ووحدات الإيجار والعقارات الجاهزة للعرض.",
    },
    detailTitle: {
      en: "Apartment renovation needs one clear path across finishes, scheduling, and room-by-room sequencing.",
      de: "Wohnungsrenovierung braucht einen klaren Weg über Ausbauten, Zeitplanung und Raum-für-Raum-Abfolge hinweg.",
      ar: "تحتاج تجديدات الشقق إلى مسار واضح يشمل التشطيبات والجدولة وتسلسل التنفيذ غرفةً بغرفة.",
    },
    paragraphs: {
      en: [
        "Apartment work often requires tighter coordination because access, timing, and finish choices need to align quickly.",
        "This service page is designed to explain that coordination clearly while keeping the request path simple for clients.",
      ],
      de: [
        "Wohnungsprojekte verlangen oft engere Koordination, weil Zugang, Zeitfenster und Ausbauentscheidungen schneller abgestimmt werden müssen.",
        "Diese Service-Seite erklärt genau diese Koordination klar und hält zugleich den Anfrageweg für Kunden einfach.",
      ],
      ar: [
        "غالباً ما تحتاج مشاريع الشقق إلى تنسيق أدق لأن الوصول إلى الموقع والتوقيت واختيارات التشطيب يجب أن تتوافق بسرعة.",
        "وقد صُممت هذه الصفحة لشرح هذا التنسيق بوضوح مع إبقاء مسار الطلب بسيطاً للعميل.",
      ],
    },
    highlights: {
      en: ["Room-by-room coordination", "Fit for occupied or rental units", "Clearer scope for compact projects"],
      de: ["Koordination Raum für Raum", "Geeignet für bewohnte oder vermietete Einheiten", "Klarerer Umfang für kompakte Projekte"],
      ar: ["تنسيق غرفةً بغرفة", "مناسب للشقق المأهولة أو المؤجرة", "نطاق أوضح للمشاريع المدمجة"],
    },
    ctaLabel: {
      en: "Request apartment renovation",
      de: "Wohnungsrenovierung anfragen",
      ar: "اطلب تجديد شقة",
    },
    seo: {
      title: "Apartment Renovation | Prime Renovation",
      description: "Apartment renovation service under the Prime GMBH renovation branch.",
    },
  },
  {
    code: "3.1",
    slug: "house-renovation",
    title: {
      en: "House Renovation",
      de: "Hausrenovierung",
      ar: "تجديد المنازل",
    },
    summary: {
      en: "Coordinated house renovation with one request path across larger interior scopes.",
      de: "Koordinierte Hausrenovierung mit einem Anfrageweg für größere Innenraumumfänge.",
      ar: "تجديد منسق للمنازل عبر مسار طلب واحد للأعمال الداخلية الأكبر نطاقاً.",
    },
    detailTitle: {
      en: "Whole-house renovation works best when scope, execution order, and handover are visibly aligned.",
      de: "Ganzheitliche Hausrenovierung funktioniert am besten, wenn Umfang, Ausführungsreihenfolge und Übergabe sichtbar abgestimmt sind.",
      ar: "تنجح تجديدات المنازل الكاملة عندما يكون النطاق وتسلسل التنفيذ والتسليم متوافقاً بشكل واضح.",
    },
    paragraphs: {
      en: [
        "This service is built for clients who need broader renovation work explained without turning the website into a technical construction manual.",
        "It gives larger home projects a clear position inside the branch and supports more confident planning conversations.",
      ],
      de: [
        "Dieser Service richtet sich an Kunden, die umfangreichere Renovierungsarbeiten erklärt haben möchten, ohne dass die Website zu einem technischen Bauhandbuch wird.",
        "Er gibt größeren Hausprojekten eine klare Position im Bereich und unterstützt sicherere Planungsgespräche.",
      ],
      ar: [
        "تم إعداد هذه الخدمة للعملاء الذين يحتاجون إلى شرح أعمال تجديد أوسع من دون تحويل الموقع إلى دليل إنشائي تقني.",
        "وهي تمنح مشاريع المنازل الكبيرة تموضعاً واضحاً داخل الفرع وتدعم نقاشات تخطيط أكثر ثقة.",
      ],
    },
    highlights: {
      en: ["Broader multi-room scope", "Execution-order visibility", "Single request path for larger works"],
      de: ["Breiterer Umfang über mehrere Räume", "Sichtbarkeit der Ausführungsreihenfolge", "Ein Anfrageweg für größere Arbeiten"],
      ar: ["نطاق أوسع لعدة غرف", "وضوح ترتيب التنفيذ", "مسار طلب واحد للأعمال الأكبر"],
    },
    ctaLabel: {
      en: "Request house renovation",
      de: "Hausrenovierung anfragen",
      ar: "اطلب تجديد منزل",
    },
    seo: {
      title: "House Renovation | Prime Renovation",
      description: "House renovation service under the Prime GMBH renovation branch.",
    },
  },
  {
    code: "4.0",
    slug: "electrical-maintenance",
    title: {
      en: "Electrical Maintenance",
      de: "Elektrische Wartung",
      ar: "صيانة كهربائية",
    },
    summary: {
      en: "Practical electrical maintenance for upgrades, checks, and corrective work.",
      de: "Praktische elektrische Wartung für Aufrüstung, Prüfungen und Korrekturarbeiten.",
      ar: "صيانة كهربائية عملية للترقيات والفحوصات والأعمال التصحيحية.",
    },
    detailTitle: {
      en: "Maintenance work presented as a serious branch service, not a side note.",
      de: "Wartungsarbeiten als ernstzunehmender Brancheservice statt als Randnotiz präsentiert.",
      ar: "تقديم أعمال الصيانة كخدمة أساسية جدية وليست ملاحظة جانبية.",
    },
    paragraphs: {
      en: [
        "Electrical tasks often get buried under broader renovation pages. Here they stand as a dedicated service entry with a clear request path.",
        "That makes the branch more credible for smaller but urgent technical jobs.",
      ],
      de: [
        "Elektrische Aufgaben verschwinden oft in allgemeinen Renovierungsseiten. Hier stehen sie als eigener Service-Einstieg mit klarem Anfrageweg.",
        "Das macht den Bereich glaubwürdiger für kleinere, aber dringende technische Arbeiten.",
      ],
      ar: [
        "غالباً ما تضيع الأعمال الكهربائية داخل صفحات تجديد عامة. هنا تظهر كخدمة مستقلة لها مسار طلب واضح.",
        "وهذا يجعل الفرع أكثر مصداقية للأعمال التقنية الصغيرة لكن العاجلة.",
      ],
    },
    highlights: {
      en: ["Technical issue visibility", "Upgrade and repair framing", "Clear booking for maintenance visits"],
      de: ["Sichtbarkeit technischer Probleme", "Rahmen für Aufrüstung und Reparatur", "Klare Buchung für Wartungsbesuche"],
      ar: ["وضوح الأعطال التقنية", "إطار واضح للترقية والإصلاح", "حجز واضح لزيارات الصيانة"],
    },
    ctaLabel: {
      en: "Book electrical maintenance",
      de: "Elektrische Wartung buchen",
      ar: "احجز صيانة كهربائية",
    },
    seo: {
      title: "Electrical Maintenance | Prime Renovation",
      description: "Electrical maintenance and corrective work under the renovation branch.",
    },
  },
  {
    code: "4.1",
    slug: "general-maintenance",
    title: {
      en: "General Maintenance",
      de: "Allgemeine Wartung",
      ar: "صيانة عامة",
    },
    summary: {
      en: "General maintenance for practical fixes, adjustments, and ongoing property support.",
      de: "Allgemeine Wartung für praktische Reparaturen, Anpassungen und laufende Objektbetreuung.",
      ar: "صيانة عامة للإصلاحات العملية والتعديلات والدعم المستمر للعقار.",
    },
    detailTitle: {
      en: "General maintenance gives smaller recurring jobs a clear and professional request path.",
      de: "Allgemeine Wartung gibt kleineren wiederkehrenden Arbeiten einen klaren und professionellen Anfrageweg.",
      ar: "تمنح الصيانة العامة الأعمال الصغيرة والمتكررة مسار طلب واضحاً واحترافياً.",
    },
    paragraphs: {
      en: [
        "Not every client arrives with a full renovation brief. Some need a reliable path for smaller corrective work, adjustments, and property upkeep.",
        "This service is designed to hold that practical demand inside the branch without reducing it to vague support language.",
      ],
      de: [
        "Nicht jeder Kunde kommt mit einem vollständigen Renovierungsprojekt. Manche brauchen einen verlässlichen Weg für kleinere Korrekturen, Anpassungen und laufende Instandhaltung.",
        "Dieser Service nimmt genau diese praktische Nachfrage im Bereich auf, ohne sie in vage Support-Sprache zu verwandeln.",
      ],
      ar: [
        "ليس كل عميل يأتي بطلب تجديد كامل؛ فبعضهم يحتاج إلى مسار موثوق للأعمال التصحيحية الصغيرة والتعديلات والصيانة المستمرة.",
        "وقد صُممت هذه الخدمة لاحتواء هذا الطلب العملي داخل الفرع من دون اختزاله في عبارات دعم عامة وغير محددة.",
      ],
    },
    highlights: {
      en: ["Smaller-job credibility", "Ongoing property support", "Direct path for practical fixes"],
      de: ["Glaubwürdigkeit für kleinere Arbeiten", "Laufende Objektbetreuung", "Direkter Weg für praktische Reparaturen"],
      ar: ["مصداقية للأعمال الصغيرة", "دعم مستمر للعقار", "مسار مباشر للإصلاحات العملية"],
    },
    ctaLabel: {
      en: "Request maintenance support",
      de: "Wartungsservice anfragen",
      ar: "اطلب خدمة صيانة",
    },
    seo: {
      title: "General Maintenance | Prime Renovation",
      description: "General maintenance service under the Prime GMBH renovation branch.",
    },
  },
  {
    code: "5.0",
    slug: "demolition",
    title: {
      en: "Demolition",
      de: "Rückbau",
      ar: "الهدم",
    },
    summary: {
      en: "Controlled demolition and strip-out work for renovation readiness and safer site preparation.",
      de: "Kontrollierter Rückbau für Renovierungsbereitschaft und eine sicherere Baustellenvorbereitung.",
      ar: "أعمال هدم وإزالة منضبطة لتجهيز الموقع للتجديد وتحضير المساحة بشكل أكثر أماناً.",
    },
    detailTitle: {
      en: "Prepared spaces start with disciplined demolition, not site chaos.",
      de: "Vorbereitete Räume beginnen mit diszipliniertem Rückbau, nicht mit Baustellenchaos.",
      ar: "تبدأ المساحات الجاهزة بهدم منضبط لا بفوضى في الموقع.",
    },
    paragraphs: {
      en: [
        "Demolition needs to be understood as a controlled operational step that prepares the site for what comes next.",
        "This page gives it a dedicated position inside the branch instead of hiding it under broader renovation language.",
      ],
      de: [
        "Rückbau sollte als kontrollierter Arbeitsschritt verstanden werden, der die Fläche für die nächsten Gewerke vorbereitet.",
        "Diese Seite gibt ihm eine eigene Position im Bereich, statt ihn unter allgemeiner Renovierungssprache zu verstecken.",
      ],
      ar: [
        "يجب فهم أعمال الهدم كخطوة تشغيلية منضبطة تهيئ الموقع لما يأتي بعدها من أعمال.",
        "وتمنحها هذه الصفحة تموضعاً مستقلاً داخل الفرع بدلاً من إخفائها داخل وصف عام للتجديد.",
      ],
    },
    highlights: {
      en: ["Pre-renovation readiness", "Safer strip-out positioning", "Clear operational framing"],
      de: ["Vorbereitung vor der Renovierung", "Sicherere Darstellung von Rückbauarbeiten", "Klare operative Einordnung"],
      ar: ["جاهزية ما قبل التجديد", "عرض أكثر أماناً لأعمال الإزالة", "إطار تشغيلي واضح"],
    },
    ctaLabel: {
      en: "Plan demolition work",
      de: "Rückbau planen",
      ar: "خطط لأعمال الهدم",
    },
    seo: {
      title: "Demolition | Prime Renovation",
      description: "Demolition service for renovation readiness under the Prime GMBH renovation branch.",
    },
  },
  {
    code: "5.1",
    slug: "debris-removal",
    title: {
      en: "Debris Removal",
      de: "Schuttentsorgung",
      ar: "إزالة المخلفات",
    },
    summary: {
      en: "Debris removal and waste handling for cleaner sites and more orderly project flow.",
      de: "Schuttentsorgung und Abfallhandling für sauberere Baustellen und geordnetere Projektabläufe.",
      ar: "إزالة المخلفات والتعامل مع النفايات لمواقع أنظف وتدفق عمل أكثر انتظاماً.",
    },
    detailTitle: {
      en: "Waste handling becomes more useful when it is named, structured, and bookable on its own.",
      de: "Abfallhandling wird nützlicher, wenn es eigenständig benannt, strukturiert und anfragbar ist.",
      ar: "تصبح معالجة المخلفات أكثر فائدة عندما يتم تسميتها وتنظيمها وجعلها قابلة للطلب بشكل مستقل.",
    },
    paragraphs: {
      en: [
        "Clients often need clearer positioning around debris flow, removal timing, and the readiness of the site between trades.",
        "This service gives that process a direct request path and strengthens the operational story of the branch.",
      ],
      de: [
        "Kunden brauchen oft eine klarere Einordnung von Schuttlogik, Abtransportzeitpunkten und der Flächenbereitschaft zwischen den Gewerken.",
        "Dieser Service gibt genau diesem Ablauf einen direkten Anfrageweg und stärkt die operative Erzählung des Bereichs.",
      ],
      ar: [
        "غالباً ما يحتاج العملاء إلى تموضع أوضح لمسار المخلفات وتوقيت إزالتها وجاهزية الموقع بين فرق العمل المختلفة.",
        "وتمنح هذه الخدمة هذه العملية مسار طلب مباشراً وتعزز القصة التشغيلية للفرع.",
      ],
    },
    highlights: {
      en: ["Cleaner site transitions", "Waste-flow clarity", "Supports multi-step renovation work"],
      de: ["Sauberere Übergänge auf der Baustelle", "Klare Abfalllogik", "Unterstützt mehrstufige Renovierungsarbeiten"],
      ar: ["انتقالات أنظف داخل الموقع", "وضوح مسار المخلفات", "يدعم أعمال التجديد متعددة المراحل"],
    },
    ctaLabel: {
      en: "Request debris removal",
      de: "Schuttentsorgung anfragen",
      ar: "اطلب إزالة المخلفات",
    },
    seo: {
      title: "Debris Removal | Prime Renovation",
      description: "Debris removal service under the Prime GMBH renovation branch.",
    },
  },
  {
    code: "5.2",
    slug: "site-cleaning",
    title: {
      en: "Site Cleaning",
      de: "Baustellenreinigung",
      ar: "تنظيف الموقع",
    },
    summary: {
      en: "Final and in-process site cleaning that supports a professional handover.",
      de: "Laufende und abschließende Baustellenreinigung für eine professionelle Übergabe.",
      ar: "تنظيف مرحلي ونهائي للموقع يدعم تسليماً احترافياً.",
    },
    detailTitle: {
      en: "Cleanup becomes part of the service promise, not an afterthought.",
      de: "Reinigung wird Teil des Leistungsversprechens und nicht erst am Schluss bedacht.",
      ar: "يصبح التنظيف جزءاً من وعد الخدمة وليس فكرة متأخرة بعد التنفيذ.",
    },
    paragraphs: {
      en: [
        "A renovation branch feels more complete when post-work cleaning is named, structured, and bookable as its own service entry.",
        "This page supports that by turning cleanliness into a visible operational standard.",
      ],
      de: [
        "Ein Renovierungsbereich wirkt vollständiger, wenn die Reinigung nach der Arbeit benannt, strukturiert und als eigener Service buchbar ist.",
        "Diese Seite macht Sauberkeit zu einem sichtbaren operativen Standard.",
      ],
      ar: [
        "يبدو فرع التجديد أكثر اكتمالاً عندما يتم تسمية التنظيف بعد العمل وتنظيمه وجعله قابلاً للحجز كخدمة مستقلة.",
        "وتدعم هذه الصفحة ذلك عبر تحويل النظافة إلى معيار تشغيلي واضح.",
      ],
    },
    highlights: {
      en: ["Dust and debris control", "Cleaner handover presentation", "Supports occupied or staged spaces"],
      de: ["Kontrolle von Staub und Restmaterial", "Sauberere Übergabepräsentation", "Geeignet für bewohnte oder vorbereitete Flächen"],
      ar: ["التحكم في الغبار والمخلفات", "صورة تسليم أنظف", "مناسب للمساحات المأهولة أو المجهزة"],
    },
    ctaLabel: {
      en: "Book site cleaning",
      de: "Baustellenreinigung buchen",
      ar: "احجز تنظيف الموقع",
    },
    seo: {
      title: "Site Cleaning | Prime Renovation",
      description: "Site cleaning service for professional project handover.",
    },
  },
  {
    code: "6.0",
    slug: "door-replacement-installation",
    title: {
      en: "Door Replacement & Installation",
      de: "Türaustausch & Montage",
      ar: "استبدال وتركيب الأبواب",
    },
    summary: {
      en: "Door replacement and installation for cleaner fit, updated function, and finished interiors.",
      de: "Türaustausch und Montage für bessere Passform, aktualisierte Funktion und fertige Innenräume.",
      ar: "استبدال وتركيب الأبواب لتحسين التوافق والوظيفة واستكمال التشطيبات الداخلية.",
    },
    detailTitle: {
      en: "Door work is easier to request when replacement and installation sit in one clear service.",
      de: "Türen lassen sich leichter anfragen, wenn Austausch und Montage in einem klaren Service zusammengeführt sind.",
      ar: "تصبح أعمال الأبواب أسهل في الطلب عندما يجتمع الاستبدال والتركيب ضمن خدمة واحدة واضحة.",
    },
    paragraphs: {
      en: [
        "Clients often need a straightforward path for replacing worn doors, fitting new units, or aligning door work with broader renovation updates.",
        "This service gives that work a dedicated place in the branch while keeping fit, finish, and usability central.",
      ],
      de: [
        "Kunden brauchen oft einen direkten Weg für den Austausch abgenutzter Türen, die Montage neuer Elemente oder die Abstimmung mit größeren Renovierungsarbeiten.",
        "Dieser Service gibt dieser Arbeit einen eigenen Platz im Bereich und hält Passform, Finish und Nutzbarkeit im Mittelpunkt.",
      ],
      ar: [
        "غالباً ما يحتاج العملاء إلى مسار مباشر لاستبدال الأبواب المستهلكة أو تركيب وحدات جديدة أو ربط أعمال الأبواب بتحديثات تجديد أوسع.",
        "وتمنح هذه الخدمة هذه الأعمال مكاناً مستقلاً داخل الفرع مع الحفاظ على أهمية الملاءمة والتشطيب وسهولة الاستخدام.",
      ],
    },
    highlights: {
      en: ["Replacement and installation in one path", "Fit and finish emphasis", "Supports broader interior upgrades"],
      de: ["Austausch und Montage in einem Weg", "Fokus auf Passform und Finish", "Unterstützt umfassendere Innenraum-Upgrades"],
      ar: ["الاستبدال والتركيب في مسار واحد", "تركيز على الملاءمة والتشطيب", "يدعم تحديثات داخلية أوسع"],
    },
    ctaLabel: {
      en: "Request door installation",
      de: "Türen anfragen",
      ar: "اطلب تركيب أبواب",
    },
    seo: {
      title: "Door Replacement & Installation | Prime Renovation",
      description: "Door replacement and installation service under the Prime GMBH renovation branch.",
    },
  },
] satisfies readonly BranchService[];
