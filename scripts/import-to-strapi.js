#!/usr/bin/env node
/**
 * Import WordPress content into Strapi
 * 
 * Usage:
 * 1. Set up Strapi content types (Post, Page, Category, Tag)
 * 2. Start Strapi: cd strapi && npm run develop
 * 3. Get your Strapi API token from Settings > API Tokens
 * 4. Run: node scripts/import-to-strapi.js
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN || '';

const contentDir = path.join(__dirname, '../content-export/parsed');

async function importToStrapi() {
  if (!STRAPI_API_TOKEN) {
    console.error('❌ STRAPI_API_TOKEN environment variable required');
    console.log('   Get it from: Strapi Admin > Settings > API Tokens');
    process.exit(1);
  }

  console.log('📦 Starting WordPress to Strapi import...\n');

  // Import Categories first
  const categories = await importCategories();
  
  // Import Tags
  const tags = await importTags();
  
  // Import Posts
  await importPosts(categories, tags);
  
  // Import Pages
  await importPages();

  console.log('\n✅ Import complete!');
}

async function importCategories() {
  console.log('📁 Importing categories...');
  const postsDir = path.join(contentDir, 'posts');
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));
  
  const categorySet = new Set();
  files.forEach(file => {
    const content = fs.readFileSync(path.join(postsDir, file), 'utf8');
    const { data } = matter(content);
    if (data.categories) {
      data.categories.forEach(cat => categorySet.add(cat));
    }
  });

  const categories = {};
  for (const catName of categorySet) {
    try {
      const response = await fetch(`${STRAPI_URL}/api/categories`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${STRAPI_API_TOKEN}`
        },
        body: JSON.stringify({
          data: {
            name: catName,
            slug: catName.toLowerCase().replace(/\s+/g, '-')
          }
        })
      });
      
      if (response.ok) {
        const data = await response.json();
        categories[catName] = data.data.id;
        console.log(`   ✓ ${catName}`);
      }
    } catch (error) {
      console.error(`   ✗ Error importing ${catName}:`, error.message);
    }
  }
  
  return categories;
}

async function importTags() {
  console.log('\n🏷️  Importing tags...');
  const postsDir = path.join(contentDir, 'posts');
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));
  
  const tagSet = new Set();
  files.forEach(file => {
    const content = fs.readFileSync(path.join(postsDir, file), 'utf8');
    const { data } = matter(content);
    if (data.tags) {
      data.tags.forEach(tag => tagSet.add(tag));
    }
  });

  const tags = {};
  for (const tagName of tagSet) {
    try {
      const response = await fetch(`${STRAPI_URL}/api/tags`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${STRAPI_API_TOKEN}`
        },
        body: JSON.stringify({
          data: {
            name: tagName,
            slug: tagName.toLowerCase().replace(/\s+/g, '-')
          }
        })
      });
      
      if (response.ok) {
        const data = await response.json();
        tags[tagName] = data.data.id;
        console.log(`   ✓ ${tagName}`);
      }
    } catch (error) {
      console.error(`   ✗ Error importing ${tagName}:`, error.message);
    }
  }
  
  return tags;
}

async function importPosts(categories, tags) {
  console.log('\n📝 Importing posts...');
  const postsDir = path.join(contentDir, 'posts');
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));
  
  let imported = 0;
  for (const file of files) {
    try {
      const content = fs.readFileSync(path.join(postsDir, file), 'utf8');
      const { data, content: body } = matter(content);
      
      const categoryIds = data.categories
        ? data.categories.map(cat => categories[cat]).filter(Boolean)
        : [];
      
      const tagIds = data.tags
        ? data.tags.map(tag => tags[tag]).filter(Boolean)
        : [];

      const response = await fetch(`${STRAPI_URL}/api/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${STRAPI_API_TOKEN}`
        },
        body: JSON.stringify({
          data: {
            title: data.title,
            slug: file.replace('.md', '').split('-').slice(1).join('-'),
            content: body,
            excerpt: data.excerpt || '',
            publishedAt: data.date || new Date().toISOString(),
            categories: categoryIds,
            tags: tagIds
          }
        })
      });

      if (response.ok) {
        imported++;
        if (imported % 10 === 0) {
          console.log(`   ✓ Imported ${imported} posts...`);
        }
      }
    } catch (error) {
      console.error(`   ✗ Error importing ${file}:`, error.message);
    }
  }
  
  console.log(`\n   ✅ Imported ${imported} posts`);
}

async function importPages() {
  console.log('\n📄 Importing pages...');
  const pagesDir = path.join(contentDir, 'pages');
  const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.md'));
  
  let imported = 0;
  for (const file of files) {
    try {
      const content = fs.readFileSync(path.join(pagesDir, file), 'utf8');
      const { data, content: body } = matter(content);
      
      const response = await fetch(`${STRAPI_URL}/api/pages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${STRAPI_API_TOKEN}`
        },
        body: JSON.stringify({
          data: {
            title: data.title,
            slug: file.replace('.md', '').split('-').slice(1).join('-'),
            content: body,
            publishedAt: data.date || new Date().toISOString()
          }
        })
      });

      if (response.ok) {
        imported++;
      }
    } catch (error) {
      console.error(`   ✗ Error importing ${file}:`, error.message);
    }
  }
  
  console.log(`   ✅ Imported ${imported} pages`);
}

importToStrapi().catch(console.error);

