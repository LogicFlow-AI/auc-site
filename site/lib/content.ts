import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
import remarkRehype from 'remark-rehype';
import { visit } from 'unist-util-visit';
import type { Element, Root } from 'hast';
import { format } from 'date-fns';
import { 
  getStrapiPosts, 
  getStrapiPages, 
  type StrapiPost,
  type StrapiPage 
} from './strapi';
import { contentPath, normalizePath, slugify, toDescription } from './seo';

const contentDirectory = path.join(process.cwd(), '../content-export/parsed');
const USE_STRAPI = process.env.USE_STRAPI !== 'false'; // Default to true, set to 'false' to use markdown

export interface Post {
  title: string;
  date: string;
  link: string;
  path: string;
  slug: string;
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
  path: string;
  slug: string;
  content: string;
  excerpt?: string;
}

let allPostsPromise: Promise<Post[]> | undefined;
let allPagesPromise: Promise<Page[]> | undefined;

// Helper to convert Strapi post to Post format
function strapiPostToPost(strapiPost: StrapiPost): Post {
  const slug = strapiPost.attributes.slug;

  return {
    title: strapiPost.attributes.title,
    date: strapiPost.attributes.publishedAt || strapiPost.attributes.createdAt,
    link: `/posts/${slug}/`,
    path: `/posts/${slug}/`,
    slug,
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
  const slug = strapiPage.attributes.slug;

  return {
    title: strapiPage.attributes.title,
    date: strapiPage.attributes.publishedAt || new Date().toISOString(),
    link: `/pages/${slug}/`,
    path: `/pages/${slug}/`,
    slug,
    content: strapiPage.attributes.content,
    excerpt: toDescription(strapiPage.attributes.content),
  };
}

// Get all posts (with LogicFlow/Strapi support and markdown fallback)
async function loadAllPosts(): Promise<Post[]> {
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

export function getAllPosts(): Promise<Post[]> {
  allPostsPromise ||= loadAllPosts();
  return allPostsPromise;
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
        
        const title = String(data.title || 'Untitled article');
        const link = String(data.link || '');
        const slug = slugify(link.split('/').filter(Boolean).pop() || fileName.replace(/^\d+-|\.md$/g, ''));

        return {
          ...data,
          title,
          link,
          path: contentPath(link, title, 'posts'),
          slug,
          content,
          postId: fileName.split('-')[0],
          excerpt: data.excerpt || toDescription(content),
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
async function loadAllPages(): Promise<Page[]> {
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

export function getAllPages(): Promise<Page[]> {
  allPagesPromise ||= loadAllPages();
  return allPagesPromise;
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
        
        const title = String(data.title || 'Untitled page');
        const link = String(data.link || '');
        const slug = slugify(link.split('/').filter(Boolean).pop() || fileName.replace(/^\d+-|\.md$/g, ''));

        return {
          ...data,
          title,
          link,
          path: contentPath(link, title, 'pages'),
          slug,
          content,
          excerpt: data.excerpt || toDescription(content),
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
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug || post.postId === slug) || null;
}

// Get page by slug (with LogicFlow/Strapi support and markdown fallback)
export async function getPageBySlug(slug: string): Promise<Page | null> {
  const pages = await getAllPages();
  return pages.find((page) => page.slug === slug) || null;
}

export async function getPostByPath(pathname: string): Promise<Post | null> {
  const targetPath = normalizePath(pathname);
  const posts = await getAllPosts();
  return posts.find((post) => normalizePath(post.path) === targetPath) || null;
}

export async function getPageByPath(pathname: string): Promise<Page | null> {
  const targetPath = normalizePath(pathname);
  const pages = await getAllPages();
  return pages.find((page) => normalizePath(page.path) === targetPath) || null;
}

const contentSchema = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    '*': [...(defaultSchema.attributes?.['*'] || []), 'className', 'id'],
    a: [...(defaultSchema.attributes?.a || []), 'target', 'rel'],
    img: [
      ...(defaultSchema.attributes?.img || []),
      'className',
      'loading',
      'decoding',
      'width',
      'height',
      'srcSet',
      'sizes',
    ],
    iframe: [
      ...(defaultSchema.attributes?.iframe || []),
      'src',
      'title',
      'width',
      'height',
      'allow',
      'allowFullScreen',
      'loading',
    ],
  },
  tagNames: [...(defaultSchema.tagNames || []), 'iframe'],
};

function enhanceContentMedia() {
  return (tree: Root) => {
    let imageIndex = 0;

    visit(tree, 'element', (node: Element) => {
      if (node.tagName === 'h1') {
        node.tagName = 'h2';
      }

      if (node.tagName === 'img') {
        node.properties ||= {};
        node.properties.decoding = 'async';

        if (imageIndex > 0) {
          node.properties.loading = 'lazy';
        }

        imageIndex += 1;
      }

      if (node.tagName === 'iframe') {
        node.properties ||= {};
        node.properties.loading = 'lazy';
      }
    });
  };
}

// Convert imported Markdown and trusted WordPress HTML to safe, crawlable HTML.
export async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSanitize, contentSchema)
    .use(enhanceContentMedia)
    .use(rehypeStringify)
    .process(markdown);

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
