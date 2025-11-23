import Link from 'next/link';
import { getAllPosts } from '@/lib/content';
import { formatDate } from '@/lib/content';

export default function Home() {
  const posts = getAllPosts().slice(0, 10); // Show latest 10 posts

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Australia&apos;s Church of Seventh-day Adventists
          </h1>
          <p className="text-xl text-gray-600">
            Welcome to the rebuilt site
          </p>
        </header>

        <section>
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Latest News</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.postId}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    <Link
                      href={`/posts/${post.postId || 'unknown'}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  {post.date && (
                    <time className="text-sm text-gray-500 block mb-3">
                      {formatDate(post.date)}
                    </time>
                  )}
                  {post.excerpt && (
                    <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                  )}
                  {post.categories && post.categories.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.categories.map((cat) => (
                        <span
                          key={cat}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <Link
            href="/posts"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Posts
          </Link>
        </section>
      </div>
    </main>
  );
}
