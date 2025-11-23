# Strapi Quick Start Guide

## 🎯 Goal
Set up Strapi as the headless CMS backend for your Next.js site, replacing static markdown files.

## ⚠️ Node Version Issue

You're running Node 25.1.0, but Strapi requires Node 18-20.

### Solution: Install Node 20

**Option 1: Using Homebrew (macOS)**
```bash
brew install node@20
brew link node@20 --force
node --version  # Should show v20.x.x
```

**Option 2: Using nvm (Recommended)**
```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Restart terminal or run:
source ~/.zshrc

# Install and use Node 20
nvm install 20
nvm use 20
nvm alias default 20  # Set as default
```

**Option 3: Use Docker**
```bash
# Run Strapi in Docker with correct Node version
docker run -it --rm -v $(pwd)/strapi:/app -w /app node:20 bash
```

## 📦 Setup Steps

### 1. Switch to Node 20
```bash
# Using nvm
nvm use 20

# Or using Homebrew
brew link node@20 --force
```

### 2. Install Strapi
```bash
cd strapi
npm install
```

### 3. Create Strapi App (if needed)
```bash
# If the manual setup doesn't work:
npx create-strapi-app@latest . --quickstart --no-run
```

### 4. Start Strapi
```bash
npm run develop
```

This will:
- Start Strapi on http://localhost:1337
- Open admin at http://localhost:1337/admin
- Create admin user on first run

### 5. Create Content Types

In Strapi Admin (http://localhost:1337/admin):

1. **Go to Content-Type Builder**
2. **Create Collection Types:**

   **Post:**
   - title (Text, required)
   - slug (UID, based on title)
   - content (Rich text)
   - excerpt (Text)
   - publishedAt (Date)
   - categories (Relation, many-to-many with Category)
   - tags (Relation, many-to-many with Tag)
   - featuredImage (Media, single)

   **Page:**
   - title (Text, required)
   - slug (UID, based on title)
   - content (Rich text)
   - publishedAt (Date)

   **Category:**
   - name (Text, required)
   - slug (UID, based on name)

   **Tag:**
   - name (Text, required)
   - slug (UID, based on name)

3. **Set Permissions:**
   - Go to Settings > Users & Permissions Plugin > Roles > Public
   - Enable `find` and `findOne` for Posts and Pages

### 6. Create API Token

1. Go to Settings > API Tokens
2. Create new token
3. Name: "Next.js Frontend"
4. Token type: "Read-only"
5. Copy the token

### 7. Import WordPress Content

```bash
# Set environment variable
export STRAPI_API_TOKEN="your-token-here"

# Run import script
node scripts/import-to-strapi.js
```

This will import:
- All 378 posts
- All 77 pages
- All categories and tags

### 8. Update Next.js to Use Strapi

Create `.env.local` in `site/`:
```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your-token-here
```

Then update `site/lib/content.ts` to use `site/lib/strapi.ts` functions instead of reading markdown files.

## 🚀 Development Workflow

**Terminal 1 - Strapi:**
```bash
cd strapi
npm run develop
```

**Terminal 2 - Next.js:**
```bash
cd site
npm run dev
```

## 📁 Project Structure

```
.
├── strapi/              # Strapi CMS backend
│   ├── src/
│   │   ├── api/         # API endpoints
│   │   └── content-types/  # Content type definitions
│   └── config/          # Strapi configuration
├── site/                # Next.js frontend
│   └── lib/
│       ├── content.ts   # Current (markdown)
│       └── strapi.ts    # New (Strapi API)
└── scripts/
    └── import-to-strapi.js  # Migration script
```

## ✅ Benefits of Strapi

1. **Admin Interface** - Easy content management
2. **API** - RESTful and GraphQL APIs
3. **Media Library** - Built-in image/file management
4. **Relations** - Link posts to categories, tags, etc.
5. **Draft/Published** - Content workflow
6. **Versioning** - Content history
7. **Permissions** - Role-based access

## 🔄 Migration Path

1. Set up Strapi ✅
2. Create content types ✅
3. Import WordPress content ✅
4. Update Next.js to use Strapi API
5. Test everything
6. Deploy both Strapi and Next.js

## 📚 Resources

- [Strapi Docs](https://docs.strapi.io)
- [Strapi + Next.js Guide](https://docs.strapi.io/dev-docs/plugins/graphql)
- [Strapi REST API](https://docs.strapi.io/dev-docs/api/rest)

