# LogicFlow API Setup Guide

## Creating API Token

1. **Start LogicFlow:**
   ```bash
   cd strapi
   npm run develop
   ```

2. **Access Admin Panel:**
   - Go to http://localhost:1337/admin
   - Log in with your admin account

3. **Create API Token:**
   - Navigate to **Settings > API Tokens**
   - Click **Create new API Token**
   - Configure:
     - **Name:** `Next.js Frontend`
     - **Token type:** `Read-only`
     - **Token duration:** `Unlimited` (or set expiration date)
     - **Token type:** `Read-only`
   - **Permissions:**
     - Enable `find` and `findOne` for:
       - Post
       - Page
       - Category
       - Tag
   - Click **Save**
   - **Copy the token immediately** (you won't see it again!)

## Setting Permissions

1. **Go to:** Settings > Users & Permissions Plugin > Roles > Public

2. **Enable permissions for each content type:**
   - **Category:** `find`, `findOne`
   - **Tag:** `find`, `findOne`
   - **Post:** `find`, `findOne`
   - **Page:** `find`, `findOne`

3. **Save permissions**

## Testing API

### Test with curl:

```bash
# Get all posts
curl -H "Authorization: Bearer YOUR_TOKEN" \
  http://localhost:1337/api/posts

# Get single post
curl -H "Authorization: Bearer YOUR_TOKEN" \
  http://localhost:1337/api/posts?filters[slug][$eq]=your-post-slug

# Get all pages
curl -H "Authorization: Bearer YOUR_TOKEN" \
  http://localhost:1337/api/pages
```

### Test in browser:

Visit: `http://localhost:1337/api/posts?populate=*`

(Will only work if permissions are set correctly)

## Environment Variables

Add to `site/.env.local`:

```env
NEXT_PUBLIC_LOGICFLOW_URL=http://localhost:1337
LOGICFLOW_API_TOKEN=your-token-here
```

Or use legacy names (for compatibility):

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your-token-here
```

