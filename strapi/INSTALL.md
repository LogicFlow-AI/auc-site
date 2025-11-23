# LogicFlow (Strapi) Installation Guide

## Prerequisites

- Node.js 20.x (required - you're currently on Node 25.1.0)
- Supabase account and project

## Step 1: Install Node 20

You need to switch to Node 20. Choose one method:

### Option A: Using nvm (Recommended)

```bash
# Install nvm if you don't have it
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Restart terminal or run:
source ~/.zshrc

# Install and use Node 20
nvm install 20
nvm use 20
nvm alias default 20
```

### Option B: Using Homebrew

```bash
brew install node@20
brew link node@20 --force --overwrite
```

### Option C: Use Node Version Manager (fnm)

```bash
brew install fnm
fnm install 20
fnm use 20
```

## Step 2: Verify Node Version

```bash
node --version  # Should show v20.x.x
```

## Step 3: Set Up Supabase

1. Go to https://supabase.com and create a project
2. Get your database connection string from Settings > Database
3. Copy `.env.example` to `.env` in the strapi directory
4. Fill in your Supabase credentials

## Step 4: Install LogicFlow (Strapi)

```bash
cd strapi
npm install
```

## Step 5: Initialize Strapi (if needed)

If the directory is empty or Strapi isn't initialized:

```bash
npx create-strapi-app@latest . --quickstart --no-run
```

This will create the Strapi structure. Then:

1. Update `config/database.js` to use Supabase (already configured)
2. Copy your `.env` file with Supabase credentials
3. Run `npm run develop`

## Step 6: First Run

```bash
npm run develop
```

- Visit http://localhost:1337/admin
- Create your admin account
- LogicFlow (Strapi) is now running!

