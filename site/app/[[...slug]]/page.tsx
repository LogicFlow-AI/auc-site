import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import {
  formatDate,
  getAllPages,
  getAllPosts,
  getPageByPath,
  getPostByPath,
  markdownToHtml,
  type Page,
  type Post,
} from '@/lib/content';
import {
  ORGANIZATION_NAME,
  SITE_URL,
  absoluteUrl,
  isIndexableContent,
  normalizePath,
  toDescription,
  toIsoDate,
} from '@/lib/seo';

interface ContentRouteProps {
  params: Promise<{ slug?: string[] }>;
}

type ResolvedContent =
  | { type: 'page'; item: Page }
  | { type: 'post'; item: Post };

export const dynamicParams = false;

function pathnameFromSlug(slug: string[] = []): string {
  return normalizePath(`/${slug.join('/')}`);
}

async function resolveContent(slug: string[] = []): Promise<ResolvedContent | null> {
  const pathname = pathnameFromSlug(slug);
  const [page, post] = await Promise.all([
    getPageByPath(pathname),
    getPostByPath(pathname),
  ]);

  if (page) {
    return { type: 'page', item: page };
  }

  return post ? { type: 'post', item: post } : null;
}

export async function generateStaticParams() {
  const [pages, posts] = await Promise.all([getAllPages(), getAllPosts()]);
  const reservedPaths = new Set(['/', '/pages', '/posts']);
  const paths = new Set(
    [...pages, ...posts]
      .map((item) => normalizePath(item.path))
      .filter((pathname) => !reservedPaths.has(pathname)),
  );

  return [...paths].map((pathname) => ({
    slug: pathname.split('/').filter(Boolean),
  }));
}

export async function generateMetadata({ params }: ContentRouteProps): Promise<Metadata> {
  const { slug = [] } = await params;
  const content = await resolveContent(slug);

  if (!content) {
    return {
      title: 'Page not found',
      robots: { index: false, follow: false },
    };
  }

  const { item, type } = content;
  const description = item.excerpt || toDescription(item.content) || `Learn more about ${item.title}.`;
  const indexable = isIndexableContent(item.title, item.content);
  const publishedTime = toIsoDate(item.date);

  return {
    title: item.title,
    description,
    alternates: { canonical: item.path },
    robots: { index: indexable, follow: true },
    openGraph: {
      type: type === 'post' ? 'article' : 'website',
      url: item.path,
      title: item.title,
      description,
      ...(type === 'post' && publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: 'summary',
      title: item.title,
      description,
    },
  };
}

export default async function ContentRoute({ params }: ContentRouteProps) {
  const { slug = [] } = await params;
  const content = await resolveContent(slug);

  if (!content) {
    notFound();
  }

  const { item, type } = content;
  const contentHtml = await markdownToHtml(item.content);
  const canonicalUrl = absoluteUrl(item.path);
  const description = item.excerpt || toDescription(item.content) || `Learn more about ${item.title}.`;
  const publishedTime = toIsoDate(item.date);
  const archive = type === 'post'
    ? { name: 'News and Articles', path: '/posts/' }
    : { name: 'Resources and Information', path: '/pages/' };

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': type === 'post' ? 'Article' : 'WebPage',
        '@id': `${canonicalUrl}#content`,
        url: canonicalUrl,
        name: item.title,
        ...(type === 'post' ? { headline: item.title } : {}),
        description,
        inLanguage: 'en-AU',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        ...(publishedTime ? { datePublished: publishedTime, dateModified: publishedTime } : {}),
        ...(type === 'post'
          ? {
              author: { '@id': `${SITE_URL}/#organization` },
              publisher: { '@id': `${SITE_URL}/#organization`, name: ORGANIZATION_NAME },
              mainEntityOfPage: canonicalUrl,
            }
          : {}),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
          { '@type': 'ListItem', position: 2, name: archive.name, item: absoluteUrl(archive.path) },
          { '@type': 'ListItem', position: 3, name: item.title, item: canonicalUrl },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={structuredData} />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-600">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-[#fc842b]">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href={archive.path} className="hover:text-[#fc842b]">{archive.name}</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-gray-900">{item.title}</li>
            </ol>
          </nav>

          <article>
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{item.title}</h1>
              {publishedTime && (
                <time dateTime={publishedTime} className="text-gray-500 block mb-4">
                  {formatDate(item.date)}
                </time>
              )}
              {type === 'post' && (item.categories.length > 0 || item.tags.length > 0) && (
                <div className="flex flex-wrap gap-2" aria-label="Article topics">
                  {[...item.categories, ...item.tags].map((topic) => (
                    <span key={topic} className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded">
                      {topic}
                    </span>
                  ))}
                </div>
              )}
            </header>

            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
