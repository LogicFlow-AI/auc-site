import Link from 'next/link';
import { getAllPages, formatDate } from '@/lib/content';

export default async function PagesPage() {
  const pages = await getAllPages();

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Pages</h1>
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
                  href={`/pages/${encodeURIComponent(page.title.toLowerCase().replace(/\s+/g, '-'))}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {page.title}
                </Link>
              </h2>
              {page.date && (
                <time className="text-sm text-gray-500 block mb-3">
                  {formatDate(page.date)}
                </time>
              )}
              <Link
                href={`/pages/${encodeURIComponent(page.title.toLowerCase().replace(/\s+/g, '-'))}`}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

