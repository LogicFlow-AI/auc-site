# Figma Design Integration Guide

## Current Homepage Structure

The homepage now has a complete structure with:

1. **Header** (`components/Header.tsx`)
   - Logo/branding
   - Navigation menu
   - Mobile menu button

2. **Hero Section** (`components/Hero.tsx`)
   - Large banner with title and CTA buttons
   - Gradient background

3. **Featured Post** (`components/FeaturedPost.tsx`)
   - Large featured story card
   - Overlay design

4. **Latest News Grid** (`app/page.tsx`)
   - 3-column grid of recent posts
   - Card-based layout

5. **Quick Links** (`app/page.tsx`)
   - 3-column grid of quick access links
   - Color-coded sections

6. **Footer** (`components/Footer.tsx`)
   - 4-column link grid
   - Copyright information

## Customizing to Match Figma

### 1. Colors
Update `tailwind.config.ts` or use CSS variables:

```typescript
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    }
  }
}
```

### 2. Typography
Update font families in `app/layout.tsx` and `globals.css`

### 3. Spacing & Layout
Adjust padding, margins, and grid layouts in component files

### 4. Images
Add hero background images or featured post images

### 5. Components
Modify individual components to match Figma:
- Update `Hero.tsx` for hero section design
- Update `Header.tsx` for navigation design
- Update `FeaturedPost.tsx` for featured card design
- Update `Footer.tsx` for footer design

## Files to Modify

- `site/components/Header.tsx` - Navigation
- `site/components/Hero.tsx` - Hero banner
- `site/components/FeaturedPost.tsx` - Featured content
- `site/components/Footer.tsx` - Footer
- `site/app/page.tsx` - Homepage layout
- `site/app/globals.css` - Global styles
- `site/tailwind.config.ts` - Tailwind configuration

## Next Steps

1. Review Figma design specifications
2. Extract colors, fonts, and spacing values
3. Update Tailwind config with design tokens
4. Modify components to match design
5. Add images/assets from Figma
6. Test responsive design
7. Refine animations and interactions

