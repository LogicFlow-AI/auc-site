# WordPress Site Repository

This repository contains the custom code for the WordPress site.

## Repository Structure

```
.
├── wp-content/
│   ├── themes/          # Custom themes
│   ├── plugins/         # Custom plugins
│   └── mu-plugins/      # Must-use plugins
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## What's Included

- ✅ Custom themes
- ✅ Custom plugins
- ✅ Must-use plugins
- ✅ Custom code modifications

## What's NOT Included

- ❌ WordPress core files
- ❌ Database files
- ❌ Media uploads
- ❌ Configuration files (wp-config.php)
- ❌ Third-party plugins/themes (install via Composer or manually)

## Setup Instructions

### 1. Download Your WordPress Files

**📌 If you only have WP-Admin access (recommended for this setup):**

See **[WP-ADMIN-ONLY.md](./WP-ADMIN-ONLY.md)** for detailed instructions.

**Quick method:**
1. Install **"All-in-One WP Migration"** plugin in WP-Admin
2. Go to **All-in-One WP Migration → Export → Export To File**
3. Download the `.wpress` file
4. Extract it (see WP-ADMIN-ONLY.md for extraction methods)
5. Copy the `wp-content` folder to this project directory

**Alternative methods (if you have server access):**

**Option A: Using FTP/SFTP**
- Connect to your server via FTP/SFTP
- Download the entire `wp-content` folder
- Extract custom themes and plugins

**Option B: Using cPanel File Manager**
- Log into cPanel
- Navigate to File Manager
- Download `wp-content` folder

**Option C: Using SSH (if you have access)**
```bash
# On your server
tar -czf wp-content-backup.tar.gz wp-content/
# Then download via FTP/SFTP
```

### 2. Organize Files

Once downloaded, organize your files:
- Copy custom themes to `wp-content/themes/`
- Copy custom plugins to `wp-content/plugins/`
- Copy must-use plugins to `wp-content/mu-plugins/`

### 3. Initialize Git Repository

```bash
git init
git add .
git commit -m "Initial commit: WordPress custom code"
```

### 4. Connect to GitHub

```bash
# Create a new repository on GitHub first, then:
git remote add origin https://github.com/yourusername/your-repo-name.git
git branch -M main
git push -u origin main
```

## Database Export

The database should be exported separately and stored securely (not in this repo):

1. Use phpMyAdmin or WP-CLI:
   ```bash
   wp db export database-backup.sql
   ```

2. Or use a plugin like "All-in-One WP Migration" or "UpdraftPlus"

## Deployment

When deploying to a new server:

1. Clone this repository
2. Install WordPress core (via Composer or download)
3. Copy custom themes/plugins to appropriate directories
4. Import the database
5. Update `wp-config.php` with new database credentials
6. Update site URL if needed

## Notes

- Keep sensitive information out of version control
- Use environment variables for configuration
- Consider using Composer for managing WordPress core and dependencies
- Regular backups of database and uploads should be maintained separately

