#!/usr/bin/env node
/**
 * Parse WordPress XML Export and convert to structured content
 * Usage: node parse-wordpress-export.js
 */

const fs = require('fs');
const path = require('path');
const { parseString } = require('xml2js');

const XML_FILE = path.join(__dirname, 'content-export/wordpress-export.xml');
const OUTPUT_DIR = path.join(__dirname, 'content-export/parsed');

// Create output directories
['posts', 'pages', 'media'].forEach(dir => {
  const dirPath = path.join(OUTPUT_DIR, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
});

console.log('📖 Parsing WordPress export...');
console.log(`   Reading: ${XML_FILE}`);

fs.readFile(XML_FILE, 'utf8', (err, data) => {
  if (err) {
    console.error('❌ Error reading file:', err);
    process.exit(1);
  }

  parseString(data, (err, result) => {
    if (err) {
      console.error('❌ Error parsing XML:', err);
      process.exit(1);
    }

    const rss = result.rss;
    const channel = rss.channel[0];
    
    console.log(`\n📊 Export Info:`);
    console.log(`   Title: ${channel.title[0]}`);
    console.log(`   Link: ${channel.link[0]}`);
    console.log(`   Generator: ${channel['wp:wxr_version']?.[0] || 'Unknown'}`);
    
    const items = channel.item || [];
    console.log(`\n📄 Found ${items.length} items total`);
    
    const posts = [];
    const pages = [];
    const media = [];
    
    items.forEach((item, index) => {
      const postType = item['wp:post_type']?.[0] || 'post';
      const title = item.title[0];
      const content = item['content:encoded']?.[0] || '';
      const excerpt = item['excerpt:encoded']?.[0] || '';
      const pubDate = item.pubDate?.[0] || '';
      const link = item.link?.[0] || '';
      
      const postData = {
        title,
        content,
        excerpt,
        pubDate,
        link,
        categories: item.category?.map(c => c._) || [],
        tags: item.category?.filter(c => c.$.domain === 'post_tag').map(c => c._) || [],
        postId: item['wp:post_id']?.[0],
        postType,
        meta: {}
      };
      
      // Extract custom fields
      if (item['wp:postmeta']) {
        item['wp:postmeta'].forEach(meta => {
          const key = meta['wp:meta_key']?.[0];
          const value = meta['wp:meta_value']?.[0];
          if (key && value) {
            postData.meta[key] = value;
          }
        });
      }
      
      if (postType === 'attachment') {
        media.push(postData);
      } else if (postType === 'page') {
        pages.push(postData);
      } else {
        posts.push(postData);
      }
    });
    
    console.log(`\n📋 Breakdown:`);
    console.log(`   Posts: ${posts.length}`);
    console.log(`   Pages: ${pages.length}`);
    console.log(`   Media: ${media.length}`);
    
    // Save as JSON
    fs.writeFileSync(
      path.join(OUTPUT_DIR, 'posts.json'),
      JSON.stringify(posts, null, 2)
    );
    
    fs.writeFileSync(
      path.join(OUTPUT_DIR, 'pages.json'),
      JSON.stringify(pages, null, 2)
    );
    
    fs.writeFileSync(
      path.join(OUTPUT_DIR, 'media.json'),
      JSON.stringify(media, null, 2)
    );
    
    // Also save individual files as Markdown
    console.log(`\n📝 Converting to Markdown...`);
    
    posts.forEach((post, index) => {
      const filename = `${post.postId || index}-${post.title.replace(/[^a-z0-9]/gi, '-').toLowerCase()}.md`;
      const md = `---
title: "${post.title}"
date: ${post.pubDate}
link: ${post.link}
categories: ${JSON.stringify(post.categories)}
tags: ${JSON.stringify(post.tags)}
---

${post.excerpt ? `> ${post.excerpt}\n\n` : ''}${post.content}
`;
      fs.writeFileSync(path.join(OUTPUT_DIR, 'posts', filename), md);
    });
    
    pages.forEach((page, index) => {
      const filename = `${page.postId || index}-${page.title.replace(/[^a-z0-9]/gi, '-').toLowerCase()}.md`;
      const md = `---
title: "${page.title}"
date: ${page.pubDate}
link: ${page.link}
---

${page.content}
`;
      fs.writeFileSync(path.join(OUTPUT_DIR, 'pages', filename), md);
    });
    
    console.log(`\n✅ Done!`);
    console.log(`   JSON files: ${OUTPUT_DIR}/`);
    console.log(`   Markdown posts: ${OUTPUT_DIR}/posts/`);
    console.log(`   Markdown pages: ${OUTPUT_DIR}/pages/`);
  });
});

