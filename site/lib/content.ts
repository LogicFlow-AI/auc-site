import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { format } from 'date-fns';
import { 
  getStrapiPosts, 
  getStrapiPost, 
  getStrapiPages, 
  getStrapiPage,
  type StrapiPost,
  type StrapiPage 
} from './strapi';

const contentDirectory = path.join(process.cwd(), '../content-export/parsed');
const USE_STRAPI = process.env.USE_STRAPI !== 'false'; // Default to true, set to 'false' to use markdown

export interface Post {
  title: string;
  date: string;
  link: string;
  content: string;
  excerpt?: string;
  categories: string[];
  tags: string[];
  postId?: string;
  postType: string;
}

export interface Page {
  title: string;
  date: string;
  link: string;
  content: string;
}

// Helper to convert Strapi post to Post format
function strapiPostToPost(strapiPost: StrapiPost): Post {
  return {
    title: strapiPost.attributes.title,
    date: strapiPost.attributes.publishedAt || strapiPost.attributes.createdAt,
    link: `/posts/${strapiPost.attributes.slug}`,
    content: strapiPost.attributes.content,
    excerpt: strapiPost.attributes.excerpt || '',
    categories: strapiPost.attributes.categories?.data?.map(c => c.attributes.name) || [],
    tags: strapiPost.attributes.tags?.data?.map(t => t.attributes.name) || [],
    postId: strapiPost.id.toString(),
    postType: 'post',
  };
}

// Helper to convert Strapi page to Page format
function strapiPageToPage(strapiPage: StrapiPage): Page {
  return {
    title: strapiPage.attributes.title,
    date: strapiPage.attributes.publishedAt || new Date().toISOString(),
    link: `/pages/${strapiPage.attributes.slug}`,
    content: strapiPage.attributes.content,
  };
}

// Get all posts (with LogicFlow/Strapi support and markdown fallback)
export async function getAllPosts(): Promise<Post[]> {
  // Try LogicFlow/Strapi first
  if (USE_STRAPI) {
    try {
      const strapiPosts = await getStrapiPosts();
      if (strapiPosts && strapiPosts.length > 0) {
        return strapiPosts.map(strapiPostToPost);
      }
    } catch (error) {
      console.warn('Failed to fetch from LogicFlow/Strapi, falling back to markdown:', error);
    }
  }
  
  // Fallback to markdown files
  return getAllPostsFromMarkdown();
}

// Get all posts from markdown (fallback)
function getAllPostsFromMarkdown(): Post[] {
  const postsDirectory = path.join(contentDirectory, 'posts');
  const fileNames = fs.readdirSync(postsDirectory);
  
  const allPostsData = fileNames
    .filter(name => name.endsWith('.md'))
    .map((fileName) => {
      try {
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        
        return {
          ...data,
          content,
          postId: fileName.split('-')[0],
        } as Post;
      } catch (error) {
        console.warn(`Error parsing post ${fileName}:`, error);
        return null;
      }
    })
    .filter((post): post is Post => post !== null);

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// Get all pages (with LogicFlow/Strapi support and markdown fallback)
export async function getAllPages(): Promise<Page[]> {
  // Try LogicFlow/Strapi first
  if (USE_STRAPI) {
    try {
      const strapiPages = await getStrapiPages();
      if (strapiPages && strapiPages.length > 0) {
        return strapiPages.map(strapiPageToPage);
      }
    } catch (error) {
      console.warn('Failed to fetch from LogicFlow/Strapi, falling back to markdown:', error);
    }
  }
  
  // Fallback to markdown files
  return getAllPagesFromMarkdown();
}

// Get all pages from markdown (fallback)
function getAllPagesFromMarkdown(): Page[] {
  const pagesDirectory = path.join(contentDirectory, 'pages');
  const fileNames = fs.readdirSync(pagesDirectory);
  
  const allPagesData = fileNames
    .filter(name => name.endsWith('.md'))
    .map((fileName) => {
      try {
        const fullPath = path.join(pagesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        
        return {
          ...data,
          content,
        } as Page;
      } catch (error) {
        console.warn(`Error parsing page ${fileName}:`, error);
        return null;
      }
    })
    .filter((page): page is Page => page !== null);

  return allPagesData;
}

// Get post by slug (with LogicFlow/Strapi support and markdown fallback)
export async function getPostBySlug(slug: string): Promise<Post | null> {
  // Try LogicFlow/Strapi first
  if (USE_STRAPI) {
    try {
      const strapiPost = await getStrapiPost(slug);
      if (strapiPost) {
        return strapiPostToPost(strapiPost);
      }
    } catch (error) {
      console.warn('Failed to fetch from LogicFlow/Strapi, falling back to markdown:', error);
    }
  }
  
  // Fallback to markdown files
  return getPostBySlugFromMarkdown(slug);
}

// Get post by slug from markdown (fallback)
function getPostBySlugFromMarkdown(slug: string): Post | null {
  const postsDirectory = path.join(contentDirectory, 'posts');
  const fileNames = fs.readdirSync(postsDirectory);
  
  const fileName = fileNames.find(name => 
    name.toLowerCase().includes(slug.toLowerCase())
  );
  
  if (!fileName) return null;
  
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    ...data,
    content,
    postId: fileName.split('-')[0],
  } as Post;
}

// Get page by slug (with LogicFlow/Strapi support and markdown fallback)
export async function getPageBySlug(slug: string): Promise<Page | null> {
  // Try LogicFlow/Strapi first
  if (USE_STRAPI) {
    try {
      const strapiPage = await getStrapiPage(slug);
      if (strapiPage) {
        return strapiPageToPage(strapiPage);
      }
    } catch (error) {
      console.warn('Failed to fetch from LogicFlow/Strapi, falling back to markdown:', error);
    }
  }
  
  // Fallback to markdown files
  return getPageBySlugFromMarkdown(slug);
}

// Get page by slug from markdown (fallback)
function getPageBySlugFromMarkdown(slug: string): Page | null {
  const pagesDirectory = path.join(contentDirectory, 'pages');
  const fileNames = fs.readdirSync(pagesDirectory);
  
  const fileName = fileNames.find(name => 
    name.toLowerCase().includes(slug.toLowerCase())
  );
  
  if (!fileName) return null;
  
  const fullPath = path.join(pagesDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    ...data,
    content,
  } as Page;
}

// Convert markdown to HTML
export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

// Format date
export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return format(date, 'MMMM d, yyyy');
  } catch {
    return dateString;
  }
}

