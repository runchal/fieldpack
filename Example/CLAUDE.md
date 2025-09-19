# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Important: Review Before Each Session
1. **TODO.md** - Check the current task list and priorities
2. **HISTORY.md** - Review previous session requests and work completed
3. **../content/content_bible.md** - The SINGLE SOURCE OF TRUTH for all Fieldpack content
4. **../content/CHANGELOG.md** - Review any recent content changes

## Project Overview

This is a React Single Page Application (SPA) for Fieldpack, a battery system integration platform. Originally generated from a Figma design (https://www.figma.com/design/g0Ma68QTq3Jw2rTyyXdSwW/Stealth-Company-Webpage), it showcases Fieldpack's platform for building intelligent battery systems with enterprise-grade telematics and charge management.

## Development Commands

- **Install dependencies**: `npm install`
- **Start development server**: `npm run dev` (opens http://localhost:3000 automatically)
- **Build for production**: `npm run build` (outputs to `build` directory)

## Tech Stack

- **Core**: React 18.3.1 + TypeScript
- **Build Tool**: Vite 6.3.5 with SWC for fast compilation
- **Routing**: React Router DOM
- **UI Components**: Radix UI (complete suite of accessibility-first primitives)
- **Styling**: Tailwind CSS (via tailwind-merge and class-variance-authority)
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Additional Libraries**: Motion (animations), Recharts (charts), Embla Carousel, Sonner (toasts), Vaul (drawers)

## Architecture

### Component Organization
- `/src/components/ui/`: Reusable UI primitives (45+ components based on Radix UI)
- `/src/components/`: Feature-specific components (navigation, hero sections, footer, etc.)
- `/src/pages/`: Page components that compose multiple sections
- `/src/components/figma/`: Figma-specific components and utilities

### Routing Structure
- `/` - HomePage (hero, missions, about, contact sections)
- `/about` - AboutPage
- All undefined routes redirect to home

### Key Patterns
1. **Component Variants**: Uses class-variance-authority for managing component styles
2. **Accessibility**: All UI components are built on Radix UI primitives for ARIA compliance
3. **Imports**: Use the `@/` alias for src directory imports (configured in vite.config.ts)
4. **Styling**: Components use Tailwind utility classes with tailwind-merge for class management

## Important Configuration

The `vite.config.ts` contains extensive package aliases for all dependencies (required for Figma export compatibility). When adding new dependencies, you may need to add corresponding aliases.

## Component Guidelines

When creating or modifying components:
1. Follow the existing pattern of using Radix UI primitives where possible
2. Use the existing UI components in `/src/components/ui/` before creating new ones
3. Maintain consistency with the current styling approach (Tailwind utilities)
4. Components should be self-contained and reusable

## CRITICAL: Centralized Content Management

**🚨 IMPORTANT: This project uses a centralized content system that MUST be preserved when making design changes.**

### Primary Content Source
**ALL website content should be derived from `/Users/amitrunchal/apps/fieldpack/content/content_bible.md`**
- This is the SINGLE SOURCE OF TRUTH for Fieldpack messaging, tone, and copy
- When updating website content, reference content_bible.md first
- Log any deviations or adaptations in `/content/CHANGELOG.md`

### When Working with Figma Updates:
1. **NEVER hardcode content directly in components**
2. **ALWAYS import content from `../content/site-content.ts`**
3. **Before replacing any component, extract its content to site-content.ts first**

### Required Pattern for All Components:
```typescript
import { siteContent } from '../content/site-content';

export function MyComponent() {
  const { sectionName } = siteContent;
  
  return (
    <div>
      <h1>{sectionName.title}</h1>
      <p>{sectionName.description}</p>
    </div>
  );
}
```

### When Adding New Components from Figma:
1. Identify all text/content in the new component
2. Add the content to `site-content.ts` under appropriate section
3. Replace hardcoded strings with dynamic content references
4. Test that content editing still works via `site-content.ts`

## Notes

- This is a frontend-only application with no backend integration
- The project was generated from Figma, so some component names may reference Figma frames
- The Guidelines.md file is available for project-specific design system rules

## Project Documentation

- **TODO.md** - Current task list with priorities (High/Medium/Low)
- **HISTORY.md** - Session history documenting all user requests and work completed
- **CONTENT-EDITING.md** - Guide for editing website content via site-content.ts
- **FIGMA-MIGRATION-GUIDE.md** - Step-by-step process for preserving centralized content when updating from Figma
- **README.md** - Basic project setup instructions
- **Guidelines.md** - Template for adding project-specific design guidelines