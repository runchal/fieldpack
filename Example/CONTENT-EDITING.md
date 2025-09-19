# Content Editing Guide

This website now uses a centralized content management system that makes it easy to edit text, images, and other content without diving deep into component code.

## 📝 How to Edit Content

All website content is managed in one file:
**`/src/content/site-content.ts`**

Simply edit this file to change any text, images, or content on your website!

## 🏠 Homepage Sections

### Hero Section
- **Headline**: Main title displayed prominently
- **Subtitle**: Supporting description text
- **Buttons**: Text for primary and secondary call-to-action buttons

### About Section
- **Title**: Section heading
- **Description**: Array of paragraphs (add/remove items as needed)
- **Capabilities**: List of bullet points
- **Stats**: Company statistics (funding, achievements, etc.)

### Missions Section
- **Title & Subtitle**: Section heading and description
- **Items**: Array of mission cards with title, description, and image URL

### Contact Section
- **Title & Description**: Section heading and description paragraphs
- **Contact Info**: Email address and office locations
- **Form**: All form labels, placeholders, and button text

### Navigation
- **Brand**: Company/site name in the top-left
- **Links**: Navigation menu items (label and destination)

## 🖼️ Changing Images

To replace images in the missions section:
1. Find free images on [Unsplash](https://unsplash.com)
2. Copy the image URL
3. Replace the `image` field in the missions array

Example:
```typescript
{
  title: "Your Service",
  description: "Description of what you do...",
  image: "https://images.unsplash.com/photo-YOUR-NEW-IMAGE-ID"
}
```

## 🎨 Quick Customization Examples

### Change Company Name
```typescript
// In site-content.ts
siteName: "Your Company Name",
navigation: {
  brand: "Your Company",
  // ...
}
```

### Update Contact Information  
```typescript
contact: {
  email: "hello@yourcompany.com",
  locations: [
    "New York, NY • Main Office",
    "San Francisco, CA • West Coast Hub"
  ],
  // ...
}
```

### Modify Hero Message
```typescript
hero: {
  headline: "Your Amazing Product or Service",
  subtitle: "A compelling description of what makes you special and why customers should choose you.",
  // ...
}
```

## 🚀 After Making Changes

1. Save the `site-content.ts` file
2. If running locally: Changes appear automatically
3. If deployed: Push changes to GitHub - your hosting platform will rebuild automatically

## 💡 Tips

- **Keep it simple**: The more concise your content, the more impactful
- **Use active voice**: "We build" instead of "Solutions are built by us"
- **Test on mobile**: Check how your content looks on different screen sizes
- **Update regularly**: Keep your content fresh and relevant

## 🔄 Reverting Changes

All content changes are tracked in git. If you need to revert:
```bash
git checkout HEAD -- src/content/site-content.ts
```

This system makes it easy to experiment with different messaging while keeping your site's design and functionality intact!