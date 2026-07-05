// Services configuration
// Contains all service catalog data and service-related settings

export const servicesConfig = {
  // Max number of services shown on homepage section.
  // Full /services page still lists all enabled services.
  showOnHomeCount: 5,
  services: [
    {
      slug: "service-consultation",
      enabled: true,
      image: { src: "/images/service-consultation.svg", alt: "Consultation and request service" },
      seoTitle: "Service Consultation | Northline Home Services",
      seoDescription: "A clear first conversation about the job, the problem, and the next step.",
      ctaLabel: "Request Consultation",
      copy: {
        en: {
          title: "Service Consultation",
          short: "A clear first conversation about the job, the problem, and the next step",
          longTitle: "Service Consultation and Request Review",
          paragraphs: [
            "Start with a simple consultation that helps the client explain the need clearly and understand the next step.",
            "This service page is designed to show enough detail for trust without turning the site into a heavy content project.",
            "The goal is to make contact easy while still giving the client a clearer picture of the service process."
          ],
          benefits: [
            "Clear explanation of service options",
            "Professional guidance on next steps",
            "No-pressure consultation approach"
          ],
          faqs: [
            {
              question: "How do I request a consultation?",
              answer: "Use the booking form on the contact page or call directly to schedule a time."
            },
            {
              question: "Is there a cost for the initial consultation?",
              answer: "Contact us for details about consultation pricing and availability."
            }
          ]
        }
      }
    },
    {
      slug: "on-site-service",
      enabled: true,
      image: { src: "/images/service-onsite.svg", alt: "On-site service" },
      seoTitle: "On-Site Service | Northline Home Services",
      seoDescription: "A direct local service visit for the required work.",
      ctaLabel: "Request On-Site Service",
      copy: {
        en: {
          title: "On-Site Service",
          short: "A direct local service visit for the required work",
          longTitle: "On-Site Local Service Delivery",
          paragraphs: [
            "Use this section to explain the main local service itself in clear, practical language.",
            "The customer should quickly understand what is offered, what kind of job this covers, and how to request it.",
            "This keeps the sales path clear while supporting a fuller service website structure."
          ],
          benefits: [
            "Professional on-site service delivery",
            "Clear scope of work explained upfront",
            "Local service area coverage"
          ],
          faqs: [
            {
              question: "What areas do you cover for on-site service?",
              answer: "We serve the local service area. Contact us to confirm coverage for your location."
            },
            {
              question: "How do I schedule an on-site visit?",
              answer: "Request a booking through the form or call directly to arrange a visit."
            }
          ]
        }
      }
    },
    {
      slug: "follow-up-support",
      enabled: true,
      image: { src: "/images/service-followup.svg", alt: "Support and follow-up service" },
      seoTitle: "Follow-Up Support | Northline Home Services",
      seoDescription: "Clear post-service communication and next-step guidance.",
      ctaLabel: "Request Follow-Up",
      copy: {
        en: {
          title: "Follow-Up Support",
          short: "Clear post-service communication and next-step guidance",
          longTitle: "Follow-Up Support and Customer Communication",
          paragraphs: [
            "A complete service website should also explain what happens after the first contact or visit.",
            "This helps the client trust the process without needing advanced systems or long sales copy.",
            "Use it to explain follow-up, availability, or simple after-service support."
          ],
          benefits: [
            "Post-service communication and guidance",
            "Clear next steps after initial work",
            "Ongoing support availability"
          ],
          faqs: [
            {
              question: "How do I request follow-up support?",
              answer: "Contact us through the booking form or call directly to schedule follow-up support."
            },
            {
              question: "Is follow-up support included in the initial service?",
              answer: "Contact us for details about follow-up support options and availability."
            }
          ]
        }
      }
    },
    {
      slug: "scheduled-appointments",
      enabled: true,
      image: { src: "/images/service-scheduled.svg", alt: "Scheduled service appointments" },
      seoTitle: "Scheduled Appointments | Northline Home Services",
      seoDescription: "Simple appointment requests with preferred date and time.",
      ctaLabel: "Schedule Appointment",
      copy: {
        en: {
          title: "Scheduled Appointments",
          short: "Simple appointment requests with preferred date and time",
          longTitle: "Scheduled Service Appointments",
          paragraphs: [
            "This package supports a simple request or booking flow without becoming a full calendar system.",
            "Clients can choose a preferred date and time and send the request through the existing API bookings route.",
            "That gives the business a practical booking step while keeping the implementation lightweight."
          ],
          benefits: [
            "Simple booking request flow",
            "Preferred date and time selection",
            "Business confirmation before appointment"
          ],
          faqs: [
            {
              question: "Can I choose a specific date and time?",
              answer: "Yes. The booking form allows you to select your preferred date and time."
            },
            {
              question: "How will I know if my appointment is confirmed?",
              answer: "The business will review your request and confirm availability by phone or email."
            }
          ]
        }
      }
    },
    {
      slug: "service-area-coverage",
      enabled: true,
      image: { src: "/images/service-coverage.svg", alt: "Service area coverage" },
      seoTitle: "Service Area Coverage | Northline Home Services",
      seoDescription: "Clear coverage information for local clients.",
      ctaLabel: "Check Coverage",
      copy: {
        en: {
          title: "Service Area Coverage",
          short: "Clear coverage information for local clients",
          longTitle: "Service Area Coverage and Local Reach",
          paragraphs: [
            "Local service businesses often lose clarity when coverage areas are not explained properly.",
            "This service page helps show where the business operates and what kind of local reach it supports.",
            "It works well alongside the map or service-area section on the homepage."
          ],
          benefits: [
            "Clear service area boundaries",
            "Local coverage information",
            "Easy way to confirm service availability"
          ],
          faqs: [
            {
              question: "Do you serve my area?",
              answer: "Check the service area map on the homepage or contact us to confirm coverage for your location."
            },
            {
              question: "Are there additional charges for locations outside the main service area?",
              answer: "Contact us for details about service availability and any location-based pricing."
            }
          ]
        }
      }
    },
    {
      slug: "maintenance-support",
      enabled: true,
      image: { src: "/images/service-maintenance.svg", alt: "Maintenance support service" },
      seoTitle: "Maintenance Support | Northline Home Services",
      seoDescription: "Planned follow-up support and recurring visits when needed.",
      ctaLabel: "Request Maintenance",
      copy: {
        en: {
          title: "Maintenance Support",
          short: "Planned follow-up support and recurring visits when needed",
          longTitle: "Maintenance Support and Ongoing Service Care",
          paragraphs: [
            "This service explains how the business supports repeat work, planned visits, or recurring local service needs.",
            "It helps the customer understand that the relationship does not end after one appointment.",
            "Use it to explain recurring care, follow-up scheduling, or maintenance support."
          ],
          benefits: [
            "Recurring service support options",
            "Planned maintenance scheduling",
            "Long-term service relationship"
          ],
          faqs: [
            {
              question: "Do you offer recurring maintenance plans?",
              answer: "Yes. Contact us to discuss maintenance options and scheduling for your needs."
            },
            {
              question: "How often should I schedule maintenance?",
              answer: "Maintenance frequency depends on your specific needs. Contact us for a recommendation."
            }
          ]
        }
      }
    },
    {
      slug: "emergency-callouts",
      enabled: false,
      image: { src: "/window.svg", alt: "Emergency local service" },
      seoTitle: "Emergency Callouts | Northline Home Services",
      seoDescription: "Fast-response support for urgent local service situations.",
      ctaLabel: "Request Emergency Service",
      copy: {
        en: {
          title: "Emergency Callouts",
          short: "Fast-response support for urgent local service situations",
          longTitle: "Emergency Callouts and Fast Local Response",
          paragraphs: [
            "Use this page to show how urgent requests are handled and what kind of fast response the business can offer.",
            "A premium service website benefits from clearly separating urgent support from planned visits.",
            "This helps the customer self-select the right path and reduces confusion before they make contact."
          ],
          benefits: [
            "Fast response for urgent situations",
            "Clear emergency contact process",
            "Priority scheduling for urgent needs"
          ],
          faqs: [
            {
              question: "What counts as an emergency?",
              answer: "Contact us immediately for urgent situations that require fast local response."
            },
            {
              question: "How quickly can you respond to emergencies?",
              answer: "Response time depends on availability and location. Call directly for fastest service."
            }
          ]
        }
      }
    },
    {
      slug: "installations-setup",
      enabled: false,
      image: { src: "/globe.svg", alt: "Installations and setup service" },
      seoTitle: "Installations & Setup | Northline Home Services",
      seoDescription: "Planned installation work with clear preparation and next-step guidance.",
      ctaLabel: "Request Installation",
      copy: {
        en: {
          title: "Installations & Setup",
          short: "Planned installation work with clear preparation and next-step guidance",
          longTitle: "Installations, Setup, and Project Preparation",
          paragraphs: [
            "This service page is useful when the business offers new installations, setup work, or project-based service visits.",
            "It helps the client understand preparation needs, timing, and the expected flow of the work.",
            "That makes the premium package feel more complete and more useful for real client decision-making."
          ],
          benefits: [
            "Professional installation services",
            "Clear project preparation guidance",
            "Structured setup process"
          ],
          faqs: [
            {
              question: "What preparation is needed before installation?",
              answer: "Contact us for specific preparation requirements based on your installation type."
            },
            {
              question: "How long does a typical installation take?",
              answer: "Installation time varies by project scope. Contact us for a timeline estimate."
            }
          ]
        }
      }
    },
    {
      slug: "inspections-assessment",
      enabled: false,
      image: { src: "/next.svg", alt: "Inspection and assessment service" },
      seoTitle: "Inspections & Assessment | Northline Home Services",
      seoDescription: "Initial checks, service assessments, and practical recommendations.",
      ctaLabel: "Request Inspection",
      copy: {
        en: {
          title: "Inspections & Assessment",
          short: "Initial checks, service assessments, and practical recommendations",
          longTitle: "Inspections, Assessment, and Service Recommendations",
          paragraphs: [
            "Use this page to explain inspection visits, first assessments, or diagnostic-style service appointments.",
            "It gives the customer a clearer idea of what happens before a larger job is approved or scheduled.",
            "This is especially useful in premium packages where service detail pages need to feel informative and trustworthy."
          ],
          benefits: [
            "Professional assessment services",
            "Clear diagnostic information",
            "Practical recommendations for next steps"
          ],
          faqs: [
            {
              question: "What does an inspection include?",
              answer: "Contact us for details about what is included in our inspection and assessment services."
            },
            {
              question: "Will I receive a report after the inspection?",
              answer: "Yes. We provide clear documentation and recommendations following any inspection."
            }
          ]
        }
      }
    },
    {
      slug: "customer-care-support",
      enabled: false,
      image: { src: "/file.svg", alt: "Customer care support service" },
      seoTitle: "Customer Care Support | Northline Home Services",
      seoDescription: "Direct communication, follow-up answers, and service guidance.",
      ctaLabel: "Contact Customer Care",
      copy: {
        en: {
          title: "Customer Care Support",
          short: "Direct communication, follow-up answers, and service guidance",
          longTitle: "Customer Care Support and Ongoing Communication",
          paragraphs: [
            "A premium local service site should show that communication continues beyond the first visit or request.",
            "This page supports that message by explaining how the business handles questions, follow-up, and service guidance.",
            "It strengthens trust and gives the service website a more complete client journey."
          ],
          benefits: [
            "Ongoing customer communication",
            "Follow-up support and guidance",
            "Direct access to service team"
          ],
          faqs: [
            {
              question: "How do I reach customer care?",
              answer: "Contact us through the booking form, phone, or WhatsApp for customer care support."
            },
            {
              question: "What kind of questions can customer care help with?",
              answer: "Customer care can assist with service inquiries, follow-up questions, and general guidance."
            }
          ]
        }
      }
    }
  ]
} as const;
