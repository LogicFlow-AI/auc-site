# LogicFlow CMS for AUC Site

This is LogicFlow (powered by Strapi) headless CMS backend for the AUC website, using Supabase PostgreSQL database.

## Prerequisites

- Node.js >=18.0.0 <=20.x.x (or use nvm)
- npm >=6.0.0

## Setup

### 1. Install Node 20 (if needed)

```bash
# Using nvm
nvm install 20
nvm use 20

# Or using Homebrew
brew install node@20
```

### 2. Install Dependencies

```bash
cd strapi
npm install
```

### 3. Set Up Supabase Database

1. Create a Supabase project at https://supabase.com
2. Get your database connection string from Supabase dashboard
3. Copy `.env.example` to `.env` and fill in your Supabase credentials
4. See `SUPABASE-SETUP.md` for detailed instructions

### 4. Install Dependencies and Create LogicFlow App

```bash
# Install dependencies
npm install

# If Strapi isn't initialized, create it:
npx create-strapi-app@latest . --quickstart --no-run
```

### 5. Start LogicFlow (Strapi)

```bash
npm run develop
```

This will:
- Start LogicFlow on http://localhost:1337
- Open admin panel at http://localhost:1337/admin
- Create your admin user on first run

## Content Types to Create

### Post
- title (Text)
- slug (UID, based on title)
- content (Rich Text)
- excerpt (Text)
- publishedAt (DateTime)
- categories (Relation, many-to-many)
- tags (Relation, many-to-many)
- featuredImage (Media)
- author (Relation, one-to-one)

### Page
- title (Text)
- slug (UID, based on title)
- content (Rich Text)
- publishedAt (DateTime)

### Category
- name (Text)
- slug (UID)

### Tag
- name (Text)
- slug (UID)

## Import WordPress Content

After setting up content types, we'll create a migration script to import your WordPress content.

## API Integration

The Next.js frontend will connect to Strapi via:
- REST API: http://localhost:1337/api
- GraphQL: http://localhost:1337/graphql (optional)

