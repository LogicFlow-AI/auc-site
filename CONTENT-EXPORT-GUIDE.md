# WordPress Content Export for TSX Rebuild

Since you're rebuilding as a TSX site, you only need the content, not the WordPress files. Here's how to export everything you need:

## Step 1: Export WordPress Content (XML)

1. **Log into WP-Admin:** https://adventist.org.au/wp-admin/
2. **Go to:** Tools → Export
3. **Choose:** "All content" (or select specific content types)
4. **Click:** "Download Export File"
5. **Save the XML file** - this contains all posts, pages, comments, categories, tags, etc.

## Step 2: Export Media Files

You have two options:

### Option A: Download via WP-Admin (Easiest)
1. Install **"Export Media Library"** plugin
2. Go to **Tools → Export Media Library**
3. Download all media files as ZIP

### Option B: Use File Manager Plugin
1. Install **"File Manager"** plugin (if not already installed)
2. Navigate to `wp-content/uploads/`
3. Compress and download the entire `uploads` folder

## Step 3: Capture Page Styles/Templates

For each page, you'll want:
- **Page HTML structure** (view page source)
- **CSS styles** (from the theme)
- **Layout information**

### Quick Method:
1. Use browser DevTools to inspect pages
2. Or use a tool like **"Simply Static"** plugin to export static HTML versions

### Better Method - Use Simply Static Plugin:
1. Install **"Simply Static"** plugin
2. Go to **Simply Static → Generate Static Site**
3. This will create a static HTML version with all styles
4. Download the generated static site

## Step 4: Export Custom Fields & Metadata

If you have custom fields (ACF, etc.):
1. The XML export includes most metadata
2. For ACF fields, you may need to export separately
3. Check **Tools → Export** for additional export options

## What You'll Get:

```
content-export/
├── wordpress-export.xml    # All content (posts, pages, etc.)
├── media/                  # All images, videos, documents
├── static-html/            # Static HTML versions (if using Simply Static)
└── styles/                 # CSS files from theme
```

## Next Steps for TSX Rebuild:

1. **Parse the XML** to extract content
2. **Convert to Markdown/JSON** for your TSX site
3. **Use the media files** in your new site
4. **Recreate layouts** based on the HTML/CSS

