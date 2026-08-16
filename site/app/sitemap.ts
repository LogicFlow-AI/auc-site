import type { MetadataRoute } from 'next';
import { getAllPages, getAllPosts } from '@/lib/content';
import { absoluteUrl, isIndexableContent, normalizePath, toIsoDate } from '@/lib/seo';

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [pages, posts] = await Promise.all([getAllPages(), getAllPosts()]);
  const entries = new Map<string, MetadataRoute.Sitemap[number]>();

  const addEntry = (
    pathname: string,
    options: Omit<MetadataRoute.Sitemap[number], 'url'> = {},
  ) => {
    const canonicalPath = normalizePath(pathname);
    entries.set(canonicalPath, { url: absoluteUrl(canonicalPath), ...options });
  };

  addEntry('/', { changeFrequency: 'weekly', priority: 1 });
  addEntry('/posts/', { changeFrequency: 'weekly', priority: 0.8 });
  addEntry('/pages/', { changeFrequency: 'monthly', priority: 0.6 });

  for (const page of pages) {
    if (!isIndexableContent(page.title, page.content)) continue;
    const lastModified = toIsoDate(page.date);
    addEntry(page.path, {
      ...(lastModified ? { lastModified } : {}),
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }

  for (const post of posts) {
    if (!isIndexableContent(post.title, post.content)) continue;
    const lastModified = toIsoDate(post.date);
    addEntry(post.path, {
      ...(lastModified ? { lastModified } : {}),
      changeFrequency: 'yearly',
      priority: 0.6,
    });
  }

  return [...entries.values()];
}
