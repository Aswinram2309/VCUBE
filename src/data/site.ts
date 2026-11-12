export const SITE_CONFIG = {
  brand: {
    shortName: "VCUBE",
    fullName: "V Cube Construction and Interiors",
    tagline: "Architecture, Interiors & Vastu Consultation",
    locationDescriptor: "Madurai · Architecture, Interiors & Vastu",
    establishedNote:
      "A Madurai-based construction and interior design studio driven by young and experienced professionals.",
  },
  contact: {
    addressLines: [
      "5/1840, Sourashtrapuram 12th Street,",
      "Kurinji Nagar 9, Vandiyur,",
      "Madurai – 625 020, Tamil Nadu, India",
    ],
    fullAddress:
      "5/1840 Sourashtrapuram 12th Street, Kurinji Nagar 9, Vandiyur, Madurai – 625 020, Tamil Nadu, India",
    city: "Madurai, Tamil Nadu",
    phones: [
      { display: "+91 94430 52328", href: "tel:+919443052328" },
      { display: "+91 80980 26847", href: "tel:+918098026847" },
    ],
    email: {
      display: "admin@vcubeci.in",
      href: "mailto:admin@vcubeci.in",
    },
    whatsapp: {
      number: "919443052328",
      href: "https://wa.me/919443052328",
      display: "+91 94430 52328",
    },
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.221722107465!2d78.15426431428152!3d9.915483277205569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5c2c346fb23%3A0x9b91ac5c2ddfa393!2sV%20Cube%20Construction%20and%20Interiors!5e0!3m2!1sen!2sin!4v1588734371862!5m2!1sen!2sin",
  },
  socials: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/vcubeci/",
      handle: "@vcubeci",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/V-Cube-Construction-and-Interiors-110391543943570/",
      handle: "V Cube Construction and Interiors",
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/919443052328",
      handle: "+91 94430 52328",
    },
  ],
  navigation: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  about: {
    introStatement:
      "We are a team of young and experienced professionals who design, manage, and execute residential and commercial works with discipline and precision.",
    extendedStatement:
      "Rooted in Madurai, VCUBE approaches every commission with clarity of status, ethical execution, and deep respect for each client's spatial needs, lifestyle, and budget.",
    coreValues: [
      {
        index: "01",
        title: "Space, Convenience & Design",
        description:
          "Every layout balances spatial efficiency, everyday comfort, and enduring visual proportion.",
      },
      {
        index: "02",
        title: "Precision & Transparency",
        description:
          "We deliver projects with clear status updates, structured planning, and transparent communication.",
      },
      {
        index: "03",
        title: "Honesty & Ethics",
        description:
          "VCUBE pursues every architectural, civil, and interior commission with integrity and enduring material standards.",
      },
      {
        index: "04",
        title: "Commitment & Responsibility",
        description:
          "From initial sketches and foundation layout through final finishes, our team takes full ownership of execution.",
      },
    ],
  },
  process: [
    {
      step: "01",
      title: "Initial Meeting",
      originalTitle: "Client Meeting",
      description:
        "We begin by listening closely to your vision, functional needs, spatial habits, Vastu preferences, and budget framework.",
    },
    {
      step: "02",
      title: "Design & Planning",
      originalTitle: "Design Finalization",
      description:
        "Space planning, architectural layouts, 3D interior concepts, and curated material boards are refined until every detail aligns.",
    },
    {
      step: "03",
      title: "Quotation",
      originalTitle: "Quote and Payment",
      description:
        "Clear, itemized specifications, material clarity, and milestone-based payment schedules establish complete transparency before site work begins.",
    },
    {
      step: "04",
      title: "Execution",
      originalTitle: "Execution",
      description:
        "Dedicated site supervision, structural construction, custom joinery, and quality checks ensure faithful execution of the approved design.",
    },
    {
      step: "05",
      title: "Handover",
      originalTitle: "Handover",
      description:
        "Detailed finishing inspection and final walkthrough, delivering a harmonious, ready-to-live residential or commercial space.",
    },
  ],
} as const;

