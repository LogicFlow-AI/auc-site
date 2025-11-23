import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, markdownToHtml, formatDate } from '@/lib/content';

interface PostPageProps {
  params: {
    id: string;
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostBySlug(params.id);

  if (!post) {
    notFound();
  }

  const contentHtml = await markdownToHtml(post.content);

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/posts"
          className="text-blue-600 hover:text-blue-800 mb-6 inline-block"
        >
          ← Back to Posts
        </Link>

        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            {post.date && (
              <time className="text-gray-500 block mb-4">
                {formatDate(post.date)}
              </time>
            )}
            {(post.categories?.length > 0 || post.tags?.length > 0) && (
              <div className="flex flex-wrap gap-2">
                {post.categories?.map((cat) => (
                  <span
                    key={cat}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded"
                  >
                    {cat}
                  </span>
                ))}
                {post.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded"
                  >
                    {tag}
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
  );
}

