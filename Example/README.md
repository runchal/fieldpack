# Fieldpack - Battery System Integration Platform

A modern website for Fieldpack, the complete platform for building intelligent battery systems. Built with React, TypeScript, and Tailwind CSS, featuring a centralized content management system.

**🔋 What is Fieldpack?**
Fieldpack is a battery system integration platform that enables companies to build sub-scale battery packs (1-100 kWh) with enterprise-grade telematics, charge management, and fleet software. We provide the hardware/software building blocks so partners can create custom battery solutions without years of R&D.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server (opens automatically at http://localhost:3000)
npm run dev

# Build for production
npm run build
```

## 📝 Editing Content

**All website content can be easily edited in one file:**
`/src/content/site-content.ts`

No need to dig through component files - just edit text, images, and content in this single location!

📖 **[Read the Content Editing Guide](./CONTENT-EDITING.md)** for detailed instructions.

## 🎨 Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 6 with SWC
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI (accessibility-first)
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Deployment**: Configured for Vercel and Netlify

## 📁 Project Structure

```
src/
├── content/
│   └── site-content.ts          # 🎯 Edit content here!
├── components/
│   ├── ui/                      # Reusable UI components
│   ├── hero-section-minimal.tsx # Homepage sections
│   ├── about-section-minimal.tsx
│   ├── contact-section-minimal.tsx
│   ├── missions-section.tsx
│   └── navigation.tsx
├── pages/
│   ├── HomePage.tsx
│   └── AboutPage.tsx
└── App.tsx                      # Main app with routing
```

## 🛠️ Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Key Features
- ✅ Centralized content management
- ✅ Responsive design
- ✅ Accessibility compliant (Radix UI)
- ✅ SEO ready
- ✅ TypeScript for type safety
- ✅ Hot reload in development

## 🚢 Deployment

### Vercel (Recommended)
```bash
# Deploy to Vercel
vercel --prod
```
Or connect your GitHub repo to Vercel dashboard.

### Netlify
Connect your GitHub repo to Netlify - configuration is already set up in `netlify.toml`.

### Manual Build
```bash
npm run build
# Upload the 'build' folder to any static hosting
```

## 📚 Documentation

- **[CONTENT-EDITING.md](./CONTENT-EDITING.md)** - How to edit website content
- **[FIGMA-MIGRATION-GUIDE.md](./FIGMA-MIGRATION-GUIDE.md)** - Updating design while preserving content system
- **[CLAUDE.md](./CLAUDE.md)** - Technical guidance for AI development
- **[TODO.md](./TODO.md)** - Development task list
- **[HISTORY.md](./HISTORY.md)** - Project development history

## 🔄 Making Design Changes

When updating from Figma:
1. Follow the **[Figma Migration Guide](./FIGMA-MIGRATION-GUIDE.md)**
2. Always preserve the centralized content system
3. Extract any hardcoded text to `site-content.ts`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes following the component guidelines in [CLAUDE.md](./CLAUDE.md)
4. Ensure content remains centralized in `site-content.ts`
5. Test the build: `npm run build`
6. Submit a pull request

## 📄 License

This project is private. See your organization's licensing terms.

## 🆘 Need Help?

- **Content Editing**: Check [CONTENT-EDITING.md](./CONTENT-EDITING.md)
- **Design Updates**: Follow [FIGMA-MIGRATION-GUIDE.md](./FIGMA-MIGRATION-GUIDE.md)
- **Technical Issues**: Review [CLAUDE.md](./CLAUDE.md) for architecture details

---

**Live Site**: [Add your deployed URL here]
**Repository**: https://github.com/runchal/fieldpack-website