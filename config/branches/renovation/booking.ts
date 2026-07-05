import type { BranchBookingConfig } from "@/config/types";

export const renovationBooking = {
  title: {
    en: "Book the renovation branch",
    de: "Renovierungsbereich anfragen",
    ar: "احجز فرع التجديد",
  },
  description: {
    en: "Send one clear request for renovation, demolition, maintenance, or site-cleaning work.",
    de: "Senden Sie eine klare Anfrage für Renovierung, Rückbau, Wartung oder Baustellenreinigung.",
    ar: "أرسل طلباً واضحاً لخدمات التجديد أو الهدم أو الصيانة أو تنظيف الموقع.",
  },
  submitLabel: {
    en: "Send renovation request",
    de: "Renovierungsanfrage senden",
    ar: "أرسل طلب التجديد",
  },
  successMessage: {
    en: "Your renovation request has been captured successfully.",
    de: "Ihre Renovierungsanfrage wurde erfolgreich erfasst.",
    ar: "تم استلام طلب التجديد بنجاح.",
  },
  errorMessage: {
    en: "We could not submit the renovation request. Please try again.",
    de: "Die Renovierungsanfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
    ar: "تعذر إرسال طلب التجديد. يرجى المحاولة مرة أخرى.",
  },
  sidebarTitle: {
    en: "Before you submit",
    de: "Vor dem Absenden",
    ar: "قبل الإرسال",
  },
  sidebarItems: {
    en: [
      { label: "Response window", value: "Within one business day" },
      { label: "Best inputs", value: "Service choice, preferred date, and project notes" },
      { label: "Branch focus", value: "Renovation, maintenance, demolition, and site cleaning" },
    ],
    de: [
      { label: "Antwortfenster", value: "Innerhalb eines Werktages" },
      { label: "Beste Angaben", value: "Servicewahl, Wunschdatum und Projektnotizen" },
      { label: "Bereichsfokus", value: "Renovierung, Wartung, Rückbau und Reinigung" },
    ],
    ar: [
      { label: "مدة الرد", value: "خلال يوم عمل واحد" },
      { label: "أفضل المعلومات", value: "نوع الخدمة والتاريخ المفضل وملاحظات المشروع" },
      { label: "تركيز الفرع", value: "التجديد والصيانة والهدم والتنظيف" },
    ],
  },
  storage: {
    provider: "local_file",
    webhookUrl: "",
    recipientEmail: "renovation@primegmbh.de",
  },
} satisfies BranchBookingConfig;
