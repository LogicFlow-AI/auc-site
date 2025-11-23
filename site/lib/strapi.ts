/**
 * Strapi API client for Next.js
 * 
 * Replace the static content loading with Strapi API calls
 */

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN || '';

export interface StrapiPost {
  id: number;
  attributes: {
    title: string;
    slug: string;
    content: string;
    excerpt?: string;
    publishedAt: string;
    createdAt: string;
    updatedAt: string;
    categories?: {
      data: Array<{ id: number; attributes: { name: string; slug: string } }>;
    };
    tags?: {
      data: Array<{ id: number; attributes: { name: string; slug: string } }>;
    };
  };
}

export interface StrapiPage {
  id: number;
  attributes: {
    title: string;
    slug: string;
    content: string;
    publishedAt: string;
  };
}

export interface StrapiResponse<T> {
  data: T[];
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

/**
 * Fetch all posts from Strapi
 */
export async function getStrapiPosts(): Promise<StrapiPost[]> {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/posts?populate=*&sort=publishedAt:desc`,
      {
        headers: {
          'Authorization': `Bearer ${STRAPI_API_TOKEN}`,
        },
        next: { revalidate: 60 } // Revalidate every 60 seconds
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }

    const data: StrapiResponse<StrapiPost> = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching Strapi posts:', error);
    return [];
  }
}

/**
 * Fetch a single post by slug
 */
export async function getStrapiPost(slug: string): Promise<StrapiPost | null> {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/posts?filters[slug][$eq]=${slug}&populate=*`,
      {
        headers: {
          'Authorization': `Bearer ${STRAPI_API_TOKEN}`,
        },
        next: { revalidate: 60 }
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch post');
    }

    const data: StrapiResponse<StrapiPost> = await response.json();
    return data.data[0] || null;
  } catch (error) {
    console.error('Error fetching Strapi post:', error);
    return null;
  }
}

/**
 * Fetch all pages from Strapi
 */
export async function getStrapiPages(): Promise<StrapiPage[]> {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/pages?sort=publishedAt:desc`,
      {
        headers: {
          'Authorization': `Bearer ${STRAPI_API_TOKEN}`,
        },
        next: { revalidate: 60 }
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch pages');
    }

    const data: StrapiResponse<StrapiPage> = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching Strapi pages:', error);
    return [];
  }
}

/**
 * Fetch a single page by slug
 */
export async function getStrapiPage(slug: string): Promise<StrapiPage | null> {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/pages?filters[slug][$eq]=${slug}`,
      {
        headers: {
          'Authorization': `Bearer ${STRAPI_API_TOKEN}`,
        },
        next: { revalidate: 60 }
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch page');
    }

    const data: StrapiResponse<StrapiPage> = await response.json();
    return data.data[0] || null;
  } catch (error) {
    console.error('Error fetching Strapi page:', error);
    return null;
  }
}

