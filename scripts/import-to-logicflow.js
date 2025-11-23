#!/usr/bin/env node
/**
 * Import WordPress content into LogicFlow (Strapi)
 * 
 * Usage:
 * 1. Set up LogicFlow content types (Post, Page, Category, Tag)
 * 2. Start LogicFlow: cd strapi && npm run develop
 * 3. Get your LogicFlow API token from Settings > API Tokens
 * 4. Run: node scripts/import-to-logicflow.js
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const LOGICFLOW_URL = process.env.LOGICFLOW_URL || process.env.STRAPI_URL || 'http://localhost:1337';
const LOGICFLOW_API_TOKEN = process.env.LOGICFLOW_API_TOKEN || process.env.STRAPI_API_TOKEN || '';

const contentDir = path.join(__dirname, '../content-export/parsed');

async function importToLogicFlow() {
  if (!LOGICFLOW_API_TOKEN) {
    console.error('❌ LOGICFLOW_API_TOKEN environment variable required');
    console.log('   Get it from: LogicFlow Admin > Settings > API Tokens');
    console.log('   Or set: export LOGICFLOW_API_TOKEN="your-token"');
    process.exit(1);
  }

  console.log('📦 Starting WordPress to LogicFlow import...\n');
  console.log(`   LogicFlow URL: ${LOGICFLOW_URL}\n`);

  // Import Categories first
  const categories = await importCategories();
  
  // Import Tags
  const tags = await importTags();
  
  // Import Posts
  await importPosts(categories, tags);
  
  // Import Pages
  await importPages();

  console.log('\n✅ Import complete!');
  console.log('\n📋 Next steps:');
  console.log('   1. Verify content in LogicFlow admin: http://localhost:1337/admin');
  console.log('   2. Test API endpoints');
  console.log('   3. Update Next.js to use LogicFlow API');
}

async function importCategories() {
  console.log('📁 Importing categories...');
  const postsDir = path.join(contentDir, 'posts');
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));
  
  const categorySet = new Set();
  files.forEach(file => {
    try {
      const content = fs.readFileSync(path.join(postsDir, file), 'utf8');
      const { data } = matter(content);
      if (data.categories && Array.isArray(data.categories)) {
        data.categories.forEach(cat => categorySet.add(cat));
      }
    } catch (error) {
      console.warn(`   ⚠️  Error reading ${file}:`, error.message);
    }
  });

  const categories = {};
  let imported = 0;
  let skipped = 0;

  for (const catName of categorySet) {
    if (!catName || catName.trim() === '') continue;
    
    try {
      // Check if category already exists
      const checkResponse = await fetch(
        `${LOGICFLOW_URL}/api/categories?filters[name][$eq]=${encodeURIComponent(catName)}`,
        {
          headers: {
            'Authorization': `Bearer ${LOGICFLOW_API_TOKEN}`,
          },
        }
      );

      if (checkResponse.ok) {
        const checkData = await checkResponse.json();
        if (checkData.data && checkData.data.length > 0) {
          categories[catName] = checkData.data[0].id;
          skipped++;
          continue;
        }
      }

      // Create new category
      const slug = catName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      const response = await fetch(`${LOGICFLOW_URL}/api/categories`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LOGICFLOW_API_TOKEN}`
        },
        body: JSON.stringify({
          data: {
            name: catName,
            slug: slug
          }
        })
      });
      
      if (response.ok) {
        const data = await response.json();
        categories[catName] = data.data.id;
        imported++;
        if (imported % 10 === 0) {
          console.log(`   ✓ Imported ${imported} categories...`);
        }
      } else {
        const errorText = await response.text();
        console.error(`   ✗ Error importing ${catName}:`, response.status, errorText);
      }
    } catch (error) {
      console.error(`   ✗ Error importing ${catName}:`, error.message);
    }
  }
  
  console.log(`   ✅ Categories: ${imported} imported, ${skipped} already existed`);
  return categories;
}

async function importTags() {
  console.log('\n🏷️  Importing tags...');
  const postsDir = path.join(contentDir, 'posts');
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));
  
  const tagSet = new Set();
  files.forEach(file => {
    try {
      const content = fs.readFileSync(path.join(postsDir, file), 'utf8');
      const { data } = matter(content);
      if (data.tags && Array.isArray(data.tags)) {
        data.tags.forEach(tag => tagSet.add(tag));
      }
    } catch (error) {
      console.warn(`   ⚠️  Error reading ${file}:`, error.message);
    }
  });

  const tags = {};
  let imported = 0;
  let skipped = 0;

  for (const tagName of tagSet) {
    if (!tagName || tagName.trim() === '') continue;
    
    try {
      // Check if tag already exists
      const checkResponse = await fetch(
        `${LOGICFLOW_URL}/api/tags?filters[name][$eq]=${encodeURIComponent(tagName)}`,
        {
          headers: {
            'Authorization': `Bearer ${LOGICFLOW_API_TOKEN}`,
          },
        }
      );

      if (checkResponse.ok) {
        const checkData = await checkResponse.json();
        if (checkData.data && checkData.data.length > 0) {
          tags[tagName] = checkData.data[0].id;
          skipped++;
          continue;
        }
      }

      // Create new tag
      const slug = tagName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      const response = await fetch(`${LOGICFLOW_URL}/api/tags`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LOGICFLOW_API_TOKEN}`
        },
        body: JSON.stringify({
          data: {
            name: tagName,
            slug: slug
          }
        })
      });
      
      if (response.ok) {
        const data = await response.json();
        tags[tagName] = data.data.id;
        imported++;
        if (imported % 10 === 0) {
          console.log(`   ✓ Imported ${imported} tags...`);
        }
      } else {
        const errorText = await response.text();
        console.error(`   ✗ Error importing ${tagName}:`, response.status, errorText);
      }
    } catch (error) {
      console.error(`   ✗ Error importing ${tagName}:`, error.message);
    }
  }
  
  console.log(`   ✅ Tags: ${imported} imported, ${skipped} already existed`);
  return tags;
}

async function importPosts(categories, tags) {
  console.log('\n📝 Importing posts...');
  const postsDir = path.join(contentDir, 'posts');
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));
  
  let imported = 0;
  let skipped = 0;
  let errors = 0;

  for (const file of files) {
    try {
      const content = fs.readFileSync(path.join(postsDir, file), 'utf8');
      const { data, content: body } = matter(content);
      
      if (!data.title) {
        console.warn(`   ⚠️  Skipping ${file}: no title`);
        skipped++;
        continue;
      }

      // Check if post already exists
      const slug = file.replace('.md', '').split('-').slice(1).join('-');
      const checkResponse = await fetch(
        `${LOGICFLOW_URL}/api/posts?filters[slug][$eq]=${encodeURIComponent(slug)}`,
        {
          headers: {
            'Authorization': `Bearer ${LOGICFLOW_API_TOKEN}`,
          },
        }
      );

      if (checkResponse.ok) {
        const checkData = await checkResponse.json();
        if (checkData.data && checkData.data.length > 0) {
          skipped++;
          continue;
        }
      }

      const categoryIds = data.categories && Array.isArray(data.categories)
        ? data.categories.map(cat => categories[cat]).filter(Boolean)
        : [];
      
      const tagIds = data.tags && Array.isArray(data.tags)
        ? data.tags.map(tag => tags[tag]).filter(Boolean)
        : [];

      // Parse date
      let publishedAt = null;
      if (data.date) {
        try {
          publishedAt = new Date(data.date).toISOString();
        } catch (e) {
          publishedAt = new Date().toISOString();
        }
      } else {
        publishedAt = new Date().toISOString();
      }

      const response = await fetch(`${LOGICFLOW_URL}/api/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LOGICFLOW_API_TOKEN}`
        },
        body: JSON.stringify({
          data: {
            title: data.title,
            slug: slug,
            content: body,
            excerpt: data.excerpt || '',
            publishedAt: publishedAt,
            categories: categoryIds,
            tags: tagIds
          }
        })
      });

      if (response.ok) {
        imported++;
        if (imported % 50 === 0) {
          console.log(`   ✓ Imported ${imported} posts...`);
        }
      } else {
        const errorText = await response.text();
        console.error(`   ✗ Error importing ${file}:`, response.status, errorText.substring(0, 100));
        errors++;
      }
    } catch (error) {
      console.error(`   ✗ Error importing ${file}:`, error.message);
      errors++;
    }
  }
  
  console.log(`   ✅ Posts: ${imported} imported, ${skipped} skipped, ${errors} errors`);
}

async function importPages() {
  console.log('\n📄 Importing pages...');
  const pagesDir = path.join(contentDir, 'pages');
  const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.md'));
  
  let imported = 0;
  let skipped = 0;
  let errors = 0;

  for (const file of files) {
    try {
      const content = fs.readFileSync(path.join(pagesDir, file), 'utf8');
      const { data, content: body } = matter(content);
      
      if (!data.title) {
        console.warn(`   ⚠️  Skipping ${file}: no title`);
        skipped++;
        continue;
      }

      // Check if page already exists
      const slug = file.replace('.md', '').split('-').slice(1).join('-');
      const checkResponse = await fetch(
        `${LOGICFLOW_URL}/api/pages?filters[slug][$eq]=${encodeURIComponent(slug)}`,
        {
          headers: {
            'Authorization': `Bearer ${LOGICFLOW_API_TOKEN}`,
          },
        }
      );

      if (checkResponse.ok) {
        const checkData = await checkResponse.json();
        if (checkData.data && checkData.data.length > 0) {
          skipped++;
          continue;
        }
      }

      // Parse date
      let publishedAt = null;
      if (data.date) {
        try {
          publishedAt = new Date(data.date).toISOString();
        } catch (e) {
          publishedAt = new Date().toISOString();
        }
      } else {
        publishedAt = new Date().toISOString();
      }
      
      const response = await fetch(`${LOGICFLOW_URL}/api/pages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LOGICFLOW_API_TOKEN}`
        },
        body: JSON.stringify({
          data: {
            title: data.title,
            slug: slug,
            content: body,
            publishedAt: publishedAt
          }
        })
      });

      if (response.ok) {
        imported++;
        if (imported % 10 === 0) {
          console.log(`   ✓ Imported ${imported} pages...`);
        }
      } else {
        const errorText = await response.text();
        console.error(`   ✗ Error importing ${file}:`, response.status, errorText.substring(0, 100));
        errors++;
      }
    } catch (error) {
      console.error(`   ✗ Error importing ${file}:`, error.message);
      errors++;
    }
  }
  
  console.log(`   ✅ Pages: ${imported} imported, ${skipped} skipped, ${errors} errors`);
}

importToLogicFlow().catch(console.error);

