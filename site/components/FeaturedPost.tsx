import Link from 'next/link';
import { Post, formatDate } from '@/lib/content';

interface FeaturedPostProps {
  post: Post;
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <article className="relative overflow-hidden rounded-lg shadow-lg group">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
      <div className="relative z-20 p-8 flex flex-col justify-end h-full min-h-[400px]">
        <div className="max-w-2xl">
          {post.categories && post.categories.length > 0 && (
            <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full mb-4">
              {post.categories[0]}
            </span>
          )}
          <h2 className="text-3xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
            <Link href={`/posts/${post.postId || 'unknown'}`}>
              {post.title}
            </Link>
          </h2>
          {post.date && (
            <time className="text-blue-200 text-sm block mb-4">
              {formatDate(post.date)}
            </time>
          )}
          {post.excerpt && (
            <p className="text-gray-200 mb-6 line-clamp-3">
              {post.excerpt}
            </p>
          )}
          <Link
            href={`/posts/${post.postId || 'unknown'}`}
            className="inline-block px-6 py-2 bg-white text-gray-900 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
}

