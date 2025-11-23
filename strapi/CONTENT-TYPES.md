# LogicFlow Content Types Setup

This guide shows how to create the content types in LogicFlow (Strapi) admin panel to match WordPress structure.

## Content Types to Create

### 1. Category (Collection Type)

**Fields:**
- `name` (Text) - Required, Unique
- `slug` (UID) - Based on name field
- `description` (Text) - Optional

**Settings:**
- Display name: Category
- API ID: category
- Draft & Publish: Enabled

### 2. Tag (Collection Type)

**Fields:**
- `name` (Text) - Required, Unique
- `slug` (UID) - Based on name field
- `description` (Text) - Optional

**Settings:**
- Display name: Tag
- API ID: tag
- Draft & Publish: Enabled

### 3. Post (Collection Type)

**Fields:**
- `title` (Text) - Required
- `slug` (UID) - Based on title field
- `content` (Rich text) - Required
- `excerpt` (Text) - Optional, Long text
- `publishedAt` (DateTime) - Optional
- `featuredImage` (Media) - Single media, Optional
- `categories` (Relation) - Many-to-many with Category
- `tags` (Relation) - Many-to-many with Tag

**Settings:**
- Display name: Post
- API ID: post
- Draft & Publish: Enabled
- Enable localization: Optional

### 4. Page (Collection Type)

**Fields:**
- `title` (Text) - Required
- `slug` (UID) - Based on title field
- `content` (Rich text) - Required
- `publishedAt` (DateTime) - Optional
- `featuredImage` (Media) - Single media, Optional

**Settings:**
- Display name: Page
- API ID: page
- Draft & Publish: Enabled
- Enable localization: Optional

## Steps to Create in Strapi Admin

1. **Start LogicFlow:**
   ```bash
   npm run develop
   ```

2. **Access Admin Panel:**
   - Go to http://localhost:1337/admin
   - Log in with your admin account

3. **Create Content Types:**
   - Go to **Content-Type Builder**
   - Click **Create new collection type**
   - Follow the field structure above for each type
   - Save after each content type

4. **Set Permissions:**
   - Go to **Settings > Users & Permissions Plugin > Roles > Public**
   - Enable permissions:
     - Category: `find`, `findOne`
     - Tag: `find`, `findOne`
     - Post: `find`, `findOne`
     - Page: `find`, `findOne`

5. **Create API Token:**
   - Go to **Settings > API Tokens**
   - Click **Create new API Token**
   - Name: "Next.js Frontend"
   - Token type: **Read-only**
   - Token duration: **Unlimited** (or set expiration)
   - Permissions: Select all for Post, Page, Category, Tag
   - Copy the token (you'll need it for Next.js)

## Field Details

### UID Field (slug)
- Type: UID
- Attached field: title (or name for Category/Tag)
- Regenerate: Yes
- Required: Yes

### Rich Text Field (content)
- Type: Rich text
- Use Markdown: Optional (can enable if preferred)
- Required: Yes

### Relation Fields
- **Post → Categories**: Many-to-many
- **Post → Tags**: Many-to-many
- When creating relations, select the target collection type

### Media Field
- Type: Media
- Allowed types: Images, Videos, Files (or just Images)
- Multiple: No (for featuredImage)

## After Creating Content Types

Once all content types are created, you can:
1. Import WordPress content using `scripts/import-to-strapi.js`
2. Test the API endpoints
3. Connect Next.js frontend

