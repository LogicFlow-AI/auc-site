# Quick Guide: WP-Admin Only Access

## 🎯 Fastest Method: All-in-One WP Migration

### Step 1: Install Plugin (2 minutes)
1. Log into WP-Admin: `https://adventist.org.au/wp-admin/`
2. Go to **Plugins → Add New**
3. Search: **"All-in-One WP Migration"**
4. Click **Install Now** → **Activate**

### Step 2: Export Site (5-10 minutes)
1. Go to **All-in-One WP Migration → Export**
2. Click **Export To** → Select **File**
3. Wait for export (may take a few minutes)
4. **Download** the `.wpress` file when ready

### Step 3: Extract Files Locally
The `.wpress` file needs to be extracted. Options:

**Option A: Use Online Extractor**
- Visit: https://www.wpress-extractor.com/ (or similar tool)
- Upload your `.wpress` file
- Download extracted files

**Option B: Install WordPress Locally**
- Install WordPress on your computer (MAMP, XAMPP, Local by Flywheel)
- Install All-in-One WP Migration plugin
- Import the `.wpress` file
- Copy `wp-content` folder from local install

**Option C: Use Command Line Tool**
```bash
# Install wpress-extractor (requires Node.js)
npm install -g wpress-extractor

# Extract the file
wpress-extractor your-site.wpress ./extracted-files
```

### Step 4: Continue with Git Setup
Once you have the `wp-content` folder extracted, follow **Step 3** in SETUP.md

---

## 🔄 Alternative: File Manager Plugin

If All-in-One WP Migration doesn't work:

### Step 1: Install File Manager
1. **Plugins → Add New**
2. Search: **"File Manager"** (by mndpsingh287)
3. Install and activate

### Step 2: Download wp-content
1. Go to **WP File Manager** in admin menu
2. Navigate to `wp-content` folder
3. Right-click → **Compress** → Choose ZIP
4. Click **Download**

### Step 3: Extract and Continue
- Extract the ZIP file
- Copy `wp-content` to your project folder
- Continue with Git setup

---

## 📋 What You'll Get

After extraction, you'll have:
```
wp-content/
├── themes/
│   ├── twentytwentythree/     ← WordPress default (exclude)
│   ├── your-custom-theme/     ← Your custom theme (include)
│   └── ...
├── plugins/
│   ├── akismet/               ← Third-party (exclude)
│   ├── your-custom-plugin/    ← Your custom plugin (include)
│   └── ...
├── uploads/                   ← Media files (exclude)
└── mu-plugins/                ← Must-use plugins (include if custom)
```

---

## ⚠️ Important Notes

1. **File Size Limits:**
   - All-in-One WP Migration has a 512MB limit on free version
   - If your site is larger, use File Manager or Duplicator

2. **Database Export:**
   - All-in-One WP Migration includes database in `.wpress` file
   - For separate database export, use **Tools → Export** in WP-Admin

3. **Third-Party Plugins/Themes:**
   - Don't commit standard WordPress plugins/themes
   - Only commit custom or heavily modified ones
   - You can reinstall standard ones via WordPress admin

4. **Sensitive Files:**
   - The `.gitignore` already excludes sensitive files
   - Double-check before committing

---

## 🚀 Next Steps After Download

1. Extract files to your project folder
2. Review what's custom vs. third-party
3. Follow **Step 3** in SETUP.md to set up Git
4. Push to GitHub

---

## ❓ Troubleshooting

**"Plugin installation failed"**
- Check if you have plugin installation permissions
- Contact your hosting provider

**"Export file too large"**
- Use File Manager plugin instead
- Or use Duplicator (handles larger sites better)

**"Can't extract .wpress file"**
- Use the online extractor tool
- Or install WordPress locally and import

**"Missing files after extraction"**
- Some extractors may not extract everything
- Try a different extraction method
- File Manager plugin is more reliable for direct access

