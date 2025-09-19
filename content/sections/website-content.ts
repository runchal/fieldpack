// Website Content - Generated from content_bible.md
// This file contains the actual website content, derived from but separate from the content bible
// Last synced: 2025-01-14

export const websiteContent = {
  // Company Info
  company: {
    name: "Fieldpack",
    tagline: "Build better batteries, faster.",
    description: "Battery system integration platform for intelligent BESS development",
    boilerplate: "Fieldpack is a battery system integration platform that enables companies to build sub-scale battery packs with enterprise-grade telematics and charge management. We provide the hardware/software building blocks so partners can create custom battery solutions without years of R&D."
  },

  // Hero Section
  hero: {
    headline: "Build intelligent battery systems",
    subhead: "The complete platform for BMS, telematics, and charge management",
    cta: {
      primary: "Start building",
      secondary: "View documentation"
    }
  },

  // Navigation
  navigation: {
    main: [
      { label: "Platform", path: "/platform" },
      { label: "Hardware", path: "/hardware" },
      { label: "Use Cases", path: "/use-cases" },
      { label: "Safety", path: "/safety" },
      { label: "Pricing", path: "/pricing" },
      { label: "Developers", path: "/developers" },
      { label: "About", path: "/about" }
    ],
    cta: "Get a quote"
  },

  // Platform Page
  platform: {
    title: "The Platform",
    subtitle: "Everything you need to build intelligent battery systems",
    description: "From BMS hardware to cloud telemetry—integrate in weeks, not years",
    features: [
      {
        name: "BMS Integration",
        description: "Complete battery management with cell balancing, thermal control, and safety monitoring",
        benefits: ["Multi-chemistry support", "Active cell balancing", "Safety cutoffs"],
        icon: "cpu"
      },
      {
        name: "Telemetry Core",
        description: "Real-time monitoring of voltage, current, temp, SOC, cycle count, and health metrics",
        benefits: ["Predictive analytics", "Historical data", "Fleet-wide insights"],
        icon: "activity"
      },
      {
        name: "Charge Management",
        description: "Adaptive charging profiles with multi-chemistry support and grid integration",
        benefits: ["Optimized charging", "Battery life extension", "Grid-aware operation"],
        icon: "battery-charging"
      },
      {
        name: "APIs & SDKs",
        description: "RESTful APIs, WebSocket streams, Python/JS/Go SDKs for rapid integration",
        benefits: ["Quick integration", "Real-time data", "Grafana compatible"],
        icon: "code"
      }
    ]
  },

  // Hardware Page
  hardware: {
    title: "Hardware",
    subtitle: "Production-ready components for any scale",
    description: "Modular BMS boards and reference designs from 1 kWh to 100 kWh",
    products: [
      {
        name: "Modular BMS Platform",
        specs: {
          voltageRange: "12V to 800V configurations",
          chemistries: "LFP, NMC, LTO supported",
          communication: "CAN, ModBus, UART",
          scalability: "1 kWh to 100 kWh packs",
          certification: "Designed for UL/CE compliance"
        },
        features: [
          "Active cell balancing",
          "Thermal management integration",
          "Configurable safety thresholds",
          "OTA firmware updates"
        ],
        idealFor: ["OEMs", "System integrators", "Equipment manufacturers"]
      }
    ],
    safety: {
      title: "Production-Grade Safety",
      features: [
        "Multi-level protection circuits",
        "Thermal runaway prevention",
        "Isolation monitoring",
        "Designed to meet UL 9540 and IEC standards"
      ]
    }
  },

  // Use Cases Page
  useCases: {
    title: "Use Cases",
    subtitle: "Powering innovation across industries",
    industries: [
      {
        name: "Equipment Manufacturers",
        slug: "oem",
        problem: "Adding battery options requires years of R&D and expertise",
        solution: "Drop-in battery intelligence for your products",
        benefits: [
          "18 months faster to market",
          "No battery R&D needed",
          "Enterprise-grade telemetry included",
          "Focus on your core product"
        ],
        testimonial: "[TBD]"
      },
      {
        name: "Solar Integrators",
        slug: "solar",
        problem: "Custom storage solutions require complex BMS development",
        solution: "Flexible platform for any storage configuration",
        benefits: [
          "Scale from residential to commercial",
          "Grid integration ready",
          "Remote monitoring built-in",
          "Multi-chemistry support"
        ],
        testimonial: "[TBD]"
      },
      {
        name: "Industrial OEMs",
        slug: "industrial",
        problem: "Electrifying equipment portfolios is complex and risky",
        solution: "De-risked path to electrification",
        benefits: [
          "Proven technology stack",
          "Production-ready components",
          "Predictive maintenance",
          "Fleet management included"
        ],
        testimonial: "[TBD]"
      },
      {
        name: "Contractors",
        slug: "contractors",
        problem: "Fuel costs, transportation, indoor work restrictions",
        solution: "Portable power that goes anywhere",
        benefits: [
          "Work indoors safely",
          "No fuel runs",
          "Predictable costs",
          "Less maintenance"
        ],
        testimonial: "[TBD]"
      }
    ]
  },

  // Safety & Compliance Page
  safety: {
    title: "Safety & Compliance",
    subtitle: "Designed for real-world field safety",
    description: "SOPs, training, and tools to keep your team safe",
    sections: [
      {
        title: "Standard Operating Procedures",
        items: [
          "Site preparation checklists",
          "Deployment procedures",
          "Emergency response protocols",
          "Storage and charging guidelines"
        ]
      },
      {
        title: "Training & Certification",
        items: [
          "Online safety modules",
          "Field operation guides",
          "Certification tracking",
          "Refresher schedules"
        ]
      },
      {
        title: "Compliance Support",
        items: [
          "Designed to streamline UL 9540 ecosystems",
          "Permit assistance resources",
          "AHJ notification templates",
          "Inspection readiness tools"
        ]
      }
    ],
    downloads: [
      { name: "Safety Checklist", type: "PDF", url: "#" },
      { name: "SOP Template", type: "PDF", url: "#" },
      { name: "Training Guide", type: "PDF", url: "#" }
    ]
  },

  // Pricing Page
  pricing: {
    title: "Pricing",
    subtitle: "Simple, transparent pricing",
    description: "Choose the plan that fits your operation",
    plans: [
      {
        name: "Starter",
        description: "Perfect for trying out the platform",
        pricing: "Per-rental + metered kWh",
        features: [
          "Basic telemetry",
          "Email alerts",
          "Standard support",
          "Pay per use"
        ],
        cta: "Get started"
      },
      {
        name: "Ops",
        description: "For regular field operations",
        pricing: "Monthly fee + metered kWh",
        features: [
          "Full telemetry suite",
          "Advanced alerts",
          "API access",
          "Priority support",
          "Multiple users"
        ],
        cta: "Contact sales",
        highlighted: true
      },
      {
        name: "Fleet",
        description: "Enterprise-grade fleet management",
        pricing: "Custom pricing",
        features: [
          "Everything in Ops",
          "Custom integrations",
          "SLA guarantees",
          "Dedicated support",
          "Multi-site management"
        ],
        cta: "Contact sales"
      }
    ],
    note: "All plans include delivery, setup assistance, and basic training"
  },

  // Developers Page
  developers: {
    title: "Developers",
    subtitle: "Build on the Fieldpack platform",
    description: "REST APIs, webhooks, and data exports for seamless integration",
    sections: {
      authentication: {
        title: "Authentication",
        content: "Token-based auth with scoped permissions. Include your API key in the Authorization header."
      },
      endpoints: {
        title: "Core Endpoints",
        items: [
          {
            method: "GET",
            path: "/v1/assets",
            description: "List all assets with filters for status and location"
          },
          {
            method: "GET",
            path: "/v1/assets/{id}/telemetry",
            description: "Get telemetry data for a specific asset"
          },
          {
            method: "POST",
            path: "/v1/jobs",
            description: "Schedule asset deployment and pickup"
          },
          {
            method: "POST",
            path: "/v1/webhooks",
            description: "Configure webhook notifications"
          }
        ]
      },
      webhooks: {
        title: "Webhook Events",
        items: [
          "asset.deployed",
          "asset.low_battery",
          "job.created",
          "alert.triggered"
        ]
      },
      dataExport: {
        title: "Data Export",
        content: "Export telemetry data as CSV for analysis. Supports custom date ranges and metric filtering."
      }
    },
    cta: {
      text: "View API docs",
      url: "/api-docs"
    }
  },

  // About Page
  about: {
    title: "About Fieldpack",
    subtitle: "Making outdoor work reliably electric",
    mission: {
      title: "Our Mission",
      content: "Give teams quiet, safe power and the software to run it like a business."
    },
    story: {
      title: "Why Fieldpack",
      content: "Real work happens outdoors. From film sets to construction sites, teams need reliable power that doesn't disturb the neighborhood or the environment. We built Fieldpack to make mobile power as easy to manage as a vehicle fleet—book it, track it, bill it."
    },
    values: [
      {
        title: "Reliability beats novelty",
        description: "We focus on what works, not what's flashy"
      },
      {
        title: "Software is the product",
        description: "Hardware enables, but software delivers the value"
      },
      {
        title: "Field first",
        description: "Designed for gloves, dust, and deadlines"
      }
    ],
    team: {
      title: "Team",
      description: "[TBD - Team information]"
    },
    contact: {
      title: "Get in touch",
      email: "hello@fieldpack.io",
      phone: "[TBD]",
      address: "Los Angeles, CA"
    }
  },

  // Footer
  footer: {
    company: {
      title: "Company",
      links: [
        { label: "About", path: "/about" },
        { label: "Careers", path: "/careers" },
        { label: "Contact", path: "/contact" }
      ]
    },
    product: {
      title: "Product",
      links: [
        { label: "Platform", path: "/platform" },
        { label: "Hardware", path: "/hardware" },
        { label: "Pricing", path: "/pricing" }
      ]
    },
    resources: {
      title: "Resources",
      links: [
        { label: "Developers", path: "/developers" },
        { label: "Safety", path: "/safety" },
        { label: "Support", path: "/support" }
      ]
    },
    legal: {
      title: "Legal",
      links: [
        { label: "Privacy", path: "/privacy" },
        { label: "Terms", path: "/terms" }
      ]
    },
    copyright: "© 2025 Fieldpack. Quiet, managed power for outdoor work."
  },

  // CTAs
  ctas: {
    getQuote: "Get a quote",
    bookDemo: "Book a demo",
    seeConsole: "See the console",
    talkToOps: "Talk to ops",
    learnMore: "Learn more",
    viewDocs: "View docs",
    contactSales: "Contact sales"
  },

  // FAQ
  faq: [
    {
      question: "Is this strong enough for my equipment?",
      answer: "For lights, cameras, tools, and signage—yes. For high-draw loads, we size bundles or recommend hybrids. We scope by duty cycle, not just nameplate."
    },
    {
      question: "What about safety and permits?",
      answer: "We provide SOPs, labeling, and site practices. Designed to streamline compliance workflows. We'll flag when permits or AHJ notifications are advisable."
    },
    {
      question: "What if it runs out?",
      answer: "You'll see SOC and alerts in real-time. We can schedule swaps or stack packs. Billing is metered so you only pay for use plus logistics."
    },
    {
      question: "Is diesel cheaper?",
      answer: "On a per-hour fuel ticket it can look that way. Total cost (permits, noise, setup time, fuel runs, complaints) often isn't. We'll model your use case."
    }
  ]
};

// Type exports for TypeScript
export type WebsiteContent = typeof websiteContent;