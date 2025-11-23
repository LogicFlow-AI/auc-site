# Step-by-Step Guide: Copying WordPress Site to GitHub (WP-Admin Only)

## Prerequisites

- ✅ Access to WordPress Admin Panel (WP-Admin)
- ✅ Ability to install plugins
- ✅ Git installed on your local machine
- ✅ GitHub account

## Step 1: Download WordPress Files (WP-Admin Methods)

Since you only have WP-Admin access, you'll need to use WordPress plugins to download your files. Here are the best options:

### Method 1: All-in-One WP Migration (Recommended - Easiest)

This plugin can export your entire site including files and database.

1. **Install the Plugin:**
   - Go to **Plugins → Add New**
   - Search for "All-in-One WP Migration"
   - Install and activate it

2. **Export Your Site:**
   - Go to **All-in-One WP Migration → Export**
   - Click **Export To** → Choose **File** (or **Google Drive/Dropbox** if you prefer)
   - Wait for the export to complete
   - Download the `.wpress` file (this contains everything)

3. **Extract the Files:**
   - The `.wpress` file is a compressed archive
   - You can use the plugin's import feature on a local WordPress install, OR
   - Use a tool like [WPress Extractor](https://github.com/soarecostin/wpress-extractor) to extract files

### Method 2: File Manager Plugin (Direct File Access)

This gives you a file browser inside WP-Admin.

1. **Install File Manager:**
   - Go to **Plugins → Add New**
   - Search for "File Manager" (by mndpsingh287 or wp-file-manager)
   - Install and activate

2. **Download wp-content:**
   - Go to **WP File Manager** in your admin menu
   - Navigate to `wp-content` folder
   - Select the folder → Click **Download** or **Compress** → Download ZIP
   - Extract on your local machine

### Method 3: Duplicator Plugin (Full Site Package)

Creates a complete package of your site.

1. **Install Duplicator:**
   - Go to **Plugins → Add New**
   - Search for "Duplicator"
   - Install and activate

2. **Create Package:**
   - Go to **Duplicator → Packages → Create New**
   - Click **Next** and follow the wizard
   - Download both the `.zip` archive and `installer.php` file
   - The `.zip` contains all your files

3. **Extract Files:**
   - Extract the downloaded ZIP file
   - You'll find `wp-content` folder inside

### Method 4: UpdraftPlus (Backup Plugin)

Primarily a backup plugin, but can download files.

1. **Install UpdraftPlus:**
   - Go to **Plugins → Add New**
   - Search for "UpdraftPlus"
   - Install and activate

2. **Create Backup:**
   - Go to **Settings → UpdraftPlus Backups**
   - Click **Backup Now**
   - Select what to backup (Files + Database)
   - Wait for backup to complete

3. **Download Files:**
   - In the backup list, click **Download** next to "Files" backup
   - This downloads a ZIP containing your files

### Method 5: Manual Theme/Plugin Export (For Custom Code Only)

If you only need custom themes/plugins:

1. **Export Active Theme:**
   - Go to **Appearance → Theme Editor** (or **Appearance → Themes**)
   - Note your active theme name
   - Go to **Plugins → Plugin Editor**
   - Copy custom plugin code manually (tedious but works)

2. **Use Theme/Plugin Export Plugins:**
   - Install "Theme Export" or "Export/Import Customizer Settings"
   - These can export theme customizations

**⚠️ Note:** Methods 1-4 are recommended as they give you complete file access. Method 5 is only if you have very limited plugin installation capabilities.

## Step 2: Organize Files Locally

1. **Extract the downloaded file:**
   - If you used **All-in-One WP Migration**: Extract the `.wpress` file (may need special tool)
   - If you used **File Manager/Duplicator/UpdraftPlus**: Extract the ZIP file

2. **Locate wp-content folder:**
   - Navigate to the extracted files
   - Find the `wp-content` folder
   - Copy it to your project directory: `/Users/personal/.cursor/projects/Users-personal/`

3. **Review what you have:**
   - `wp-content/themes/` - All themes (you'll filter these)
   - `wp-content/plugins/` - All plugins (you'll filter these)
   - `wp-content/mu-plugins/` - Must-use plugins (if any)
   - `wp-content/uploads/` - Media files (excluded by .gitignore)

4. **Identify Custom vs. Third-Party:**
   - **Custom themes**: Usually have your organization's name or are heavily modified
   - **Custom plugins**: Plugins you developed or significantly customized
   - **Third-party**: Standard plugins/themes from WordPress.org (exclude these)

## Step 3: Filter What to Include

**Include in Git:**
- ✅ Custom themes (in `wp-content/themes/your-theme/`)
- ✅ Custom plugins (in `wp-content/plugins/your-plugin/`)
- ✅ Must-use plugins
- ✅ Custom code modifications

**Exclude from Git:**
- ❌ WordPress core files
- ❌ Third-party themes/plugins (download separately)
- ❌ Uploads folder (`wp-content/uploads/`)
- ❌ Cache files
- ❌ Configuration files

## Step 4: Set Up Git Repository

1. **Navigate to your project directory:**
   ```bash
   cd /Users/personal/.cursor/projects/Users-personal
   ```

2. **Initialize Git:**
   ```bash
   git init
   ```

3. **Add files:**
   ```bash
   git add .
   ```

4. **Make initial commit:**
   ```bash
   git commit -m "Initial commit: WordPress custom code"
   ```

## Step 5: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click **New repository**
3. Name your repository (e.g., `adventist-wp-site`)
4. **Don't** initialize with README (you already have one)
5. Click **Create repository**

## Step 6: Connect and Push to GitHub

1. **Add remote:**
   ```bash
   git remote add origin https://github.com/yourusername/your-repo-name.git
   ```

2. **Rename branch to main:**
   ```bash
   git branch -M main
   ```

3. **Push to GitHub:**
   ```bash
   git push -u origin main
   ```

## Step 7: Export Database (Separate Step)

The database should be exported separately and stored securely:

### Using phpMyAdmin:
1. Log into phpMyAdmin
2. Select your WordPress database
3. Click **Export** tab
4. Choose **Quick** or **Custom** method
5. Click **Go** to download

### Using WP-CLI (if available):
```bash
wp db export database-backup.sql
```

### Using WordPress Plugin:
- Install "All-in-One WP Migration" or "UpdraftPlus"
- Export database through plugin interface

**⚠️ Important:** Don't commit database files to Git. Store them securely elsewhere.

## Step 8: Document Your Setup

Update the README.md with:
- Site URL
- WordPress version
- Active themes and plugins
- Special configurations
- Deployment instructions

## Troubleshooting

### Large File Issues
If you have large files:
```bash
# Install Git LFS
brew install git-lfs  # macOS
git lfs install
git lfs track "*.zip"
git lfs track "*.pdf"
```

### Sensitive Data in History
If you accidentally committed sensitive data:
```bash
# Use git-filter-repo or BFG Repo-Cleaner
# Or create a new repository
```

### File Size Limits
GitHub has a 100MB file size limit. For larger files:
- Use Git LFS
- Store in cloud storage (S3, etc.)
- Exclude from repository

## Next Steps

1. ✅ Set up automated backups
2. ✅ Configure deployment pipeline (optional)
3. ✅ Set up staging environment
4. ✅ Document customizations
5. ✅ Set up CI/CD (optional)

