import Link from 'next/link';
import { getAllPosts, formatDate } from '@/lib/content';

export default async function PostsPage() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Posts</h1>
          <p className="text-gray-600">
            {posts.length} posts found
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.postId}
              className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                <Link
                  href={`/posts/${post.postId || 'unknown'}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              {post.date && (
                <time className="text-sm text-gray-500 block mb-3">
                  {formatDate(post.date)}
                </time>
              )}
              {post.excerpt && (
                <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                  {post.excerpt}
                </p>
              )}
              <Link
                href={`/posts/${post.postId || 'unknown'}`}
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

