import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { format } from 'date-fns';

const contentDirectory = path.join(process.cwd(), '../content-export/parsed');

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

// Get all posts
export function getAllPosts(): Post[] {
  const postsDirectory = path.join(contentDirectory, 'posts');
  const fileNames = fs.readdirSync(postsDirectory);
  
  const allPostsData = fileNames
    .filter(name => name.endsWith('.md'))
    .map((fileName) => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      
      return {
        ...data,
        content,
        postId: fileName.split('-')[0],
      } as Post;
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// Get all pages
export function getAllPages(): Page[] {
  const pagesDirectory = path.join(contentDirectory, 'pages');
  const fileNames = fs.readdirSync(pagesDirectory);
  
  const allPagesData = fileNames
    .filter(name => name.endsWith('.md'))
    .map((fileName) => {
      const fullPath = path.join(pagesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      
      return {
        ...data,
        content,
      } as Page;
    });

  return allPagesData;
}

// Get post by slug
export function getPostBySlug(slug: string): Post | null {
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

// Get page by slug
export function getPageBySlug(slug: string): Page | null {
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

