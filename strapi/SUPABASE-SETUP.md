# Supabase Database Setup for LogicFlow (Strapi)

## Overview
LogicFlow (Strapi) will use Supabase PostgreSQL database instead of SQLite/PostgreSQL.

## Steps

### 1. Create Supabase Project
1. Go to https://supabase.com
2. Sign up or log in
3. Create a new project
4. Note your project URL and anon key

### 2. Get Database Connection String
1. In Supabase dashboard, go to **Settings > Database**
2. Under **Connection string**, select **URI**
3. Copy the connection string (format: `postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres`)

### 3. Configure Strapi for Supabase
Update `strapi/config/database.js` or `strapi/config/env/production/database.js`:

```javascript
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'postgres'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD'),
      ssl: env.bool('DATABASE_SSL', true) && {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
      },
    },
  },
});
```

### 4. Environment Variables
Add to `strapi/.env`:

```env
DATABASE_CLIENT=postgres
DATABASE_HOST=db.[PROJECT-REF].supabase.co
DATABASE_PORT=5432
DATABASE_NAME=postgres
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=[YOUR-PASSWORD]
DATABASE_SSL=true
```

### 5. Install PostgreSQL Client
```bash
cd strapi
npm install pg
```

## Alternative: Connection Pooling
Supabase also provides connection pooling. Use port 6543 instead of 5432 for pooled connections.

