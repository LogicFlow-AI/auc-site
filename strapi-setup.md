# Strapi CMS Setup Guide

## Node Version Requirement

Strapi requires Node.js >=20.0.0 <=24.x.x. You're currently running Node 25.1.0.

## Option 1: Use nvm to Switch Node Versions

```bash
# Install nvm if you don't have it
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install and use Node 24
nvm install 24
nvm use 24

# Then create Strapi
cd strapi
npx create-strapi-app@latest . --quickstart --no-run
```

## Option 2: Use Docker

```bash
# Create docker-compose.yml for Strapi
# Run Strapi in a container with correct Node version
```

## Option 3: Manual Strapi Setup

I can create the Strapi structure manually and you can install dependencies later with the correct Node version.

## What We'll Set Up

1. **Strapi Backend** - Headless CMS
2. **Content Types**:
   - Post (with title, content, excerpt, date, categories, tags)
   - Page (with title, content, date)
   - Media (for images/files)
3. **API Integration** - Connect Next.js to Strapi
4. **Content Migration** - Import WordPress content into Strapi
5. **Admin Panel** - Content management interface

## Next Steps

Choose an option and I'll help you set it up!

