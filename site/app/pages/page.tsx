import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllPages, formatDate } from '@/lib/content';
import Footer from '@/components/Footer';
import { toIsoDate } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Resources and Information',
  description: 'Explore beliefs, ministries, church locations, services, and resources from the Seventh-day Adventist Church in Australia.',
  alternates: { canonical: '/pages/' },
  openGraph: {
    type: 'website',
    url: '/pages/',
    title: 'Resources and Information',
    description: 'Explore beliefs, ministries, church locations, services, and resources from the Seventh-day Adventist Church in Australia.',
  },
};

export default async function PagesPage() {
  const pages = await getAllPages();

  return (
    <>
      <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Resources and Information</h1>
          <p className="text-gray-600">
            {pages.length} pages found
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pages.map((page, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                <Link
                  href={page.path}
                  className="hover:text-blue-600 transition-colors"
                >
                  {page.title}
                </Link>
              </h2>
              {page.date && (
                <time dateTime={toIsoDate(page.date)} className="text-sm text-gray-500 block mb-3">
                  {formatDate(page.date)}
                </time>
              )}
              {page.excerpt && (
                <p className="text-gray-600 text-sm line-clamp-3 mb-3">{page.excerpt}</p>
              )}
              <Link href={page.path} className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Read {page.title}
              </Link>
            </article>
          ))}
        </div>
      </div>
      </main>
      <Footer />
    </>
  );
}
