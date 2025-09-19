// Import the website content from our content bible-derived file
import { websiteContent } from '../../../content/sections/website-content';

export const siteContent = {
  // Site-wide settings
  siteName: websiteContent.company.name,
  
  // Hero Section
  hero: {
    headline: websiteContent.hero.headline,
    subtitle: websiteContent.hero.subhead,
    primaryButton: websiteContent.hero.cta.primary,
    secondaryButton: websiteContent.hero.cta.secondary
  },

  // About Section  
  about: {
    title: websiteContent.about.title,
    description: [
      websiteContent.about.story.content,
      websiteContent.company.boilerplate
    ],
    capabilities: {
      title: "Core capabilities",
      items: websiteContent.platform.features.map(f => f.name + ": " + f.description)
    },
    stats: [
      { value: "LA", label: "Headquarters" },
      { value: "2025", label: "Founded" }
    ]
  },

  // Contact Section
  contact: {
    title: "Get in touch",
    description: [
      "Let's discuss how Fieldpack can transform your field operations.",
      "We're currently running pilot programs in Los Angeles."
    ],
    email: websiteContent.about.contact.email,
    locations: [
      websiteContent.about.contact.address
    ],
    form: {
      nameLabel: "Name",
      namePlaceholder: "Your name",
      organizationLabel: "Organization", 
      organizationPlaceholder: "Company/Agency",
      emailLabel: "Email",
      emailPlaceholder: "your.email@company.com",
      messageLabel: "Message",
      messagePlaceholder: "Describe your operational requirements or partnership interest...",
      submitButton: "Send secure message"
    }
  },

  // Missions Section (Use Cases)
  missions: {
    title: websiteContent.useCases.title,
    subtitle: websiteContent.useCases.subtitle,
    items: websiteContent.useCases.industries.slice(0, 3).map(industry => ({
      title: industry.name,
      description: industry.solution,
      image: industry.slug === 'film-tv' 
        ? "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2940&auto=format&fit=crop"
        : industry.slug === 'events'
        ? "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2940&auto=format&fit=crop"
        : "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2940&auto=format&fit=crop"
    }))
  },

  // Navigation
  navigation: {
    brand: websiteContent.company.name,
    links: websiteContent.navigation.main
      .filter(item => item.label !== 'Developers') // Keep main nav simpler
      .map(item => ({ 
        label: item.label, 
        href: item.path 
      }))
      .concat({ label: "Contact", href: "#contact" })
  }
};