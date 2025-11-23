# AUC Site - Next.js TSX Rebuild

This is the Next.js/TypeScript rebuild of the Australia's Church of Seventh-day Adventists website.

## Getting Started

### Install Dependencies

```bash
cd site
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
site/
├── app/              # Next.js App Router pages
│   ├── page.tsx      # Homepage
│   ├── posts/        # Posts listing and individual posts
│   └── pages/        # Static pages
├── lib/              # Utilities
│   └── content.ts    # Content loading functions
└── public/           # Static assets
```

## Content

Content is loaded from `../content-export/parsed/`:
- Posts: `posts/*.md` and `posts.json`
- Pages: `pages/*.md` and `pages.json`
- Media: `media.json`

## Features

- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Markdown content rendering
- ✅ Post and page listings
- ✅ Individual post/page views
- ✅ Date formatting
- ✅ Category and tag display

## Next Steps

1. Add navigation menu
2. Add page templates
3. Style components to match original design
4. Add media/image handling
5. Add search functionality
6. Add RSS feed
7. Deploy to Vercel/Netlify

## Build

```bash
npm run build
npm start
```
