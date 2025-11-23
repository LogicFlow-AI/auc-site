# TSX Site Rebuild Setup

This guide helps you set up a clean repository for rebuilding your WordPress site as a TSX (TypeScript/React) application.

## Repository Structure

```
auc-site/
├── content/              # Exported WordPress content
│   ├── posts/           # Blog posts (Markdown/JSON)
│   ├── pages/           # Pages (Markdown/JSON)
│   ├── media/           # Images, videos, etc.
│   └── export.xml       # Original WordPress export
├── src/                 # TSX source code
│   ├── components/      # React components
│   ├── pages/           # Next.js pages (or similar)
│   ├── styles/          # CSS/SCSS files
│   └── lib/             # Utilities
├── public/              # Static assets
└── package.json         # Dependencies
```

## Content Conversion Tools

### WordPress XML to Markdown/JSON

**Option 1: Use a converter script**
- Parse the WordPress XML export
- Convert posts/pages to Markdown
- Extract metadata to JSON

**Option 2: Use existing tools**
- `wordpress-export-to-markdown` (npm package)
- `jekyll-exporter` (if using Jekyll)
- Custom Node.js script

### Recommended Stack for TSX Site

- **Framework:** Next.js (recommended) or Remix
- **Styling:** Tailwind CSS or styled-components
- **Content:** Markdown files or headless CMS
- **Images:** Next.js Image optimization
- **Deployment:** Vercel, Netlify, or similar

## Quick Start Script

Once you have the WordPress export, I can help you:
1. Parse the XML export
2. Convert to Markdown/JSON
3. Set up a Next.js project structure
4. Create components based on your pages

