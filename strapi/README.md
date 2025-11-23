# Strapi CMS for AUC Site

This is the Strapi headless CMS backend for the AUC website.

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

### 3. Create Strapi App

```bash
# If package.json setup doesn't work, use:
npx create-strapi-app@latest . --quickstart --no-run
```

### 4. Start Strapi

```bash
npm run develop
```

This will:
- Start Strapi on http://localhost:1337
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

