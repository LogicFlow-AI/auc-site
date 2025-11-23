# Content Export for TSX Rebuild

## 🎯 Goal
Export all WordPress content (pages, posts, media) and styling to rebuild as a TSX site.

## ✅ What You Need

### 1. WordPress Content Export (XML)
**From WP-Admin:**
- Go to: **Tools → Export**
- Select: **"All content"**
- Download the XML file
- This contains: Posts, Pages, Comments, Categories, Tags, Custom Fields

### 2. Media Files
**Option A - Simply Static Plugin (Recommended):**
- Install **"Simply Static"** plugin
- Go to **Simply Static → Generate**
- This exports everything as static HTML with all media
- Perfect for seeing exact page structure and styles

**Option B - File Manager:**
- Use File Manager plugin
- Download `wp-content/uploads/` folder

### 3. Page Styles & Structure
**Best Method - Simply Static:**
- Generates static HTML versions of all pages
- Includes all CSS inline or in separate files
- Preserves exact layout and styling
- Easy to inspect and recreate in TSX

## 📦 What to Export

1. **WordPress XML Export** → `content-export/wordpress-export.xml`
2. **Simply Static Export** → `content-export/static-site/` (entire folder)
3. **Or Media Files** → `content-export/media/` (if not using Simply Static)

## 🚀 Next Steps After Export

Once you have the exports:
1. Place files in `content-export/` folder
2. I can help you:
   - Parse the XML to extract content
   - Convert to Markdown/JSON
   - Set up Next.js/TSX project structure
   - Create components based on the static HTML

## 💡 Recommendation

**Use Simply Static plugin** - it's the easiest way to get:
- ✅ All page content
- ✅ All styling (CSS)
- ✅ All media files
- ✅ Exact page structure
- ✅ Ready to inspect and rebuild

Then you can:
1. Inspect the HTML structure
2. Extract CSS styles
3. Recreate components in TSX
4. Use the content from XML export

