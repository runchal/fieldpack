# Figma Migration Guide

This guide ensures you maintain the centralized content system when updating components from Figma exports.

## 🔄 When You Have New Figma Components

### Step 1: Backup Current Content
Before making any changes, ensure your current content is safe:
```bash
# Save current content structure
cp src/content/site-content.ts src/content/site-content.backup.ts
```

### Step 2: Identify Content in New Components
Look for these in your new Figma-exported components:
- ✅ **Text content**: Headlines, paragraphs, button labels
- ✅ **Form elements**: Labels, placeholders, validation messages  
- ✅ **Navigation**: Menu items, links
- ✅ **Lists**: Bullet points, feature lists
- ✅ **Contact info**: Emails, addresses, phone numbers
- ✅ **Images**: Alt text, captions

### Step 3: Extract and Centralize Content

**❌ AVOID THIS** (hardcoded content):
```typescript
export function NewComponent() {
  return (
    <div>
      <h1>Welcome to Our Company</h1>
      <p>We provide amazing services...</p>
      <button>Get Started</button>
    </div>
  );
}
```

**✅ DO THIS** (centralized content):

1. **First, add to `site-content.ts`:**
```typescript
export const siteContent = {
  // ... existing content ...
  
  newSection: {
    title: "Welcome to Our Company",
    description: "We provide amazing services...",
    buttonText: "Get Started"
  }
};
```

2. **Then, update the component:**
```typescript
import { siteContent } from '../content/site-content';

export function NewComponent() {
  const { newSection } = siteContent;
  
  return (
    <div>
      <h1>{newSection.title}</h1>
      <p>{newSection.description}</p>
      <button>{newSection.buttonText}</button>
    </div>
  );
}
```

## 🛠️ Migration Checklist

When updating any component from Figma:

- [ ] **Backup**: Save current `site-content.ts`
- [ ] **Audit**: List all text/content in the new component
- [ ] **Extract**: Move all content to `site-content.ts`
- [ ] **Replace**: Convert hardcoded strings to dynamic references
- [ ] **Test**: Verify content editing still works
- [ ] **Document**: Update this guide if new patterns emerge

## 📋 Common Content Patterns

### Hero Sections
```typescript
hero: {
  headline: "Main headline",
  subtitle: "Supporting text",
  primaryButton: "Primary CTA",
  secondaryButton: "Secondary CTA"
}
```

### Feature Lists
```typescript
features: {
  title: "Our Features",
  items: [
    {
      title: "Feature Name",
      description: "Feature description",
      icon: "icon-name" // if using icons
    }
  ]
}
```

### Contact Forms
```typescript
contactForm: {
  fields: {
    name: { label: "Name", placeholder: "Your name" },
    email: { label: "Email", placeholder: "your@email.com" },
    message: { label: "Message", placeholder: "Your message..." }
  },
  submitButton: "Send Message"
}
```

## 🚨 Red Flags to Watch For

**STOP and centralize if you see:**
- Hardcoded strings in JSX: `<h1>Hardcoded Title</h1>`
- Inline text in components: `<p>This text should be in site-content.ts</p>`
- Form labels/placeholders directly in code
- Contact information hardcoded in components
- Button text that can't be edited from `site-content.ts`

## 🎯 Testing Your Migration

After updating components, verify:

1. **Content Editing Works**: Change text in `site-content.ts` and see it update on the site
2. **No Build Errors**: Run `npm run build` successfully
3. **All Sections Load**: Navigate through all pages/sections
4. **Responsive Design**: Check mobile/desktop layouts still work

## 📞 When to Ask for Help

Ask Claude to help if:
- You're unsure how to structure new content in `site-content.ts`
- Components have complex nested content structures
- You need to preserve existing content while adding new sections
- Build errors occur after migration

## 💡 Pro Tips

- **Start small**: Migrate one component at a time
- **Keep structure consistent**: Follow existing patterns in `site-content.ts`
- **Use descriptive keys**: `heroSection.headline` not `hero.h1`
- **Group related content**: Keep form fields together, navigation items together
- **Test frequently**: Build and test after each component migration

This system ensures your content remains easily editable regardless of design changes!