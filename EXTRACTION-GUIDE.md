# Extracting Your 12GB .wpress File

Your WordPress export file is **12GB** and uses All-in-One WP Migration's custom binary format. Here are the best extraction methods:

## ✅ Recommended Method: Use All-in-One WP Migration Plugin Locally

This is the most reliable method for large files:

### Option 1: Local by Flywheel (Easiest - macOS)

1. **Download Local by Flywheel:**
   - Visit: https://localwp.com/
   - Download and install (free)

2. **Create a new WordPress site:**
   - Open Local
   - Click "Create a new site"
   - Choose a name (e.g., "adventist-extract")
   - Use default settings
   - Wait for WordPress to install

3. **Import your .wpress file:**
   - In Local, click on your site → **Open Site Shell**
   - Or go to **WP Admin** of your local site
   - Install **All-in-One WP Migration** plugin
   - Go to **All-in-One WP Migration → Import**
   - Upload your `.wpress` file
   - Wait for import to complete (may take 30+ minutes for 12GB)

4. **Copy wp-content:**
   - In Local, right-click your site → **Reveal in Finder**
   - Navigate to `app/public/wp-content`
   - Copy this folder to your project directory

### Option 2: MAMP (macOS)

1. **Download MAMP:**
   - Visit: https://www.mamp.info/
   - Install MAMP (free version is fine)

2. **Set up WordPress:**
   - Start MAMP servers
   - Download WordPress from wordpress.org
   - Extract to `MAMP/htdocs/wordpress`
   - Create database via phpMyAdmin (included with MAMP)
   - Install WordPress via browser

3. **Import .wpress file:**
   - Install All-in-One WP Migration plugin
   - Import your file
   - Copy `wp-content` from `MAMP/htdocs/wordpress/wp-content`

### Option 3: Docker (Advanced)

```bash
# Create a quick WordPress container
docker run -d \
  --name wp-extract \
  -p 8080:80 \
  -v $(pwd)/adventist-org-au-20251123-162258-p7vkj9zp6zob.wpress:/var/www/html/import.wpress \
  wordpress:latest

# Then access http://localhost:8080
# Install All-in-One WP Migration and import
```

## 🔄 Alternative: Online Extraction (If Available)

Some online tools can handle .wpress files, but 12GB is likely too large:
- https://www.wpress-extractor.com/ (may have size limits)
- Check if your hosting provider has file extraction tools

## 📋 After Extraction

Once you have the `wp-content` folder:

1. **Copy to project directory:**
   ```bash
   cp -r /path/to/extracted/wp-content /Users/personal/.cursor/projects/Users-personal/
   ```

2. **Clean up (remove third-party themes/plugins):**
   ```bash
   cd /Users/personal/.cursor/projects/Users-personal
   # Review what's in wp-content/themes and wp-content/plugins
   # Remove standard WordPress themes and third-party plugins
   ```

3. **Initialize Git:**
   ```bash
   git init
   git add .
   git commit -m "Initial WordPress site commit"
   ```

## ⚠️ Important Notes

- **12GB is very large** - Make sure you have enough disk space (at least 25GB free)
- **Extraction will take time** - Be patient, especially during import
- **Database is included** - The .wpress file contains both files and database
- **Uploads folder** - Your media files are in `wp-content/uploads/` (excluded by .gitignore)

## 🚀 Quick Start Command

If using Local by Flywheel:
```bash
# After import, copy wp-content
cp -r ~/Local\ Sites/adventist-extract/app/public/wp-content \
  /Users/personal/.cursor/projects/Users-personal/
```

