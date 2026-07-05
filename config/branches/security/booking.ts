import type { BranchBookingConfig } from "@/config/types";

export const securityBooking = {
  title: {
    en: "Book the security branch",
    de: "Sicherheitsbereich anfragen",
    ar: "احجز الفرع الأمني",
  },
  description: {
    en: "Send a focused request for facility protection or CCTV planning and installation.",
    de: "Senden Sie eine gezielte Anfrage für Objektschutz oder CCTV-Planung und Installation.",
    ar: "أرسل طلباً مركزاً لخدمات حماية المنشآت أو تخطيط وتركيب أنظمة المراقبة.",
  },
  submitLabel: {
    en: "Send security request",
    de: "Sicherheitsanfrage senden",
    ar: "أرسل الطلب الأمني",
  },
  successMessage: {
    en: "Your security request has been captured successfully.",
    de: "Ihre Sicherheitsanfrage wurde erfolgreich erfasst.",
    ar: "تم استلام الطلب الأمني بنجاح.",
  },
  errorMessage: {
    en: "We could not submit the security request. Please try again.",
    de: "Die Sicherheitsanfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
    ar: "تعذر إرسال الطلب الأمني. يرجى المحاولة مرة أخرى.",
  },
  sidebarTitle: {
    en: "Before you submit",
    de: "Vor dem Absenden",
    ar: "قبل الإرسال",
  },
  sidebarItems: {
    en: [
      { label: "Response window", value: "Within one business day" },
      { label: "Best inputs", value: "Facility type, preferred timing, and requirement notes" },
      { label: "Branch focus", value: "Protection planning and CCTV installation" },
    ],
    de: [
      { label: "Antwortfenster", value: "Innerhalb eines Werktages" },
      { label: "Beste Angaben", value: "Objekttyp, Wunschzeit und Anforderungsnotizen" },
      { label: "Bereichsfokus", value: "Schutzplanung und CCTV-Installation" },
    ],
    ar: [
      { label: "مدة الرد", value: "خلال يوم عمل واحد" },
      { label: "أفضل المعلومات", value: "نوع المنشأة والتوقيت المفضل وملاحظات المتطلبات" },
      { label: "تركيز الفرع", value: "تخطيط الحماية وتركيب الكاميرات" },
    ],
  },
  storage: {
    provider: "local_file",
    webhookUrl: "",
    recipientEmail: "security@primegmbh.de",
  },
} satisfies BranchBookingConfig;
