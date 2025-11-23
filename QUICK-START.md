# Quick Start Guide

## ✅ What's Done

1. **WordPress Content Exported** - All posts, pages, and media metadata
2. **Content Parsed** - Converted to Markdown and JSON
3. **Next.js Project Created** - TypeScript + Tailwind CSS
4. **Content Loading** - Utilities to load posts and pages
5. **Basic Pages** - Homepage, posts listing, individual posts

## 🚀 Get Started

### 1. Install Dependencies

```bash
cd site
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Visit: http://localhost:3000

### 3. Available Routes

- `/` - Homepage with latest 10 posts
- `/posts` - All posts listing
- `/posts/[id]` - Individual post view
- `/pages` - All pages listing

## 📁 Project Structure

```
.
├── content-export/
│   ├── wordpress-export.xml    # Original WordPress export
│   └── parsed/                # Parsed content
│       ├── posts/             # Markdown files
│       ├── pages/             # Markdown files
│       └── *.json             # JSON data
└── site/                      # Next.js application
    ├── app/                   # Pages
    ├── lib/                    # Utilities
    └── public/                 # Static assets
```

## 🎨 Next Steps

1. **Add Navigation** - Create header/footer components
2. **Style Pages** - Match original WordPress design
3. **Add Media** - Handle images from WordPress
4. **Add Search** - Search functionality for posts
5. **Add RSS Feed** - Generate RSS feed
6. **Deploy** - Deploy to Vercel/Netlify

## 📊 Content Stats

- **378 Posts** - All converted to Markdown
- **77 Pages** - All converted to Markdown
- **1,028 Media Items** - Metadata in JSON

## 🛠️ Development

```bash
# Development
npm run dev

# Build
npm run build

# Production
npm start
```

## 📝 Notes

- Content is loaded from `../content-export/parsed/`
- Markdown is converted to HTML for display
- Dates are formatted using `date-fns`
- Error handling for malformed markdown files

