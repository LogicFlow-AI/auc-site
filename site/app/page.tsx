import Link from 'next/link';
import { getAllPosts, formatDate } from '@/lib/content';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import FeaturedPost from '@/components/FeaturedPost';

export default function Home() {
  const allPosts = getAllPosts();
  const featuredPost = allPosts[0]; // Latest post as featured
  const recentPosts = allPosts.slice(1, 7); // Next 6 posts

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />

        {/* Featured Post Section */}
        {featuredPost && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Story</h2>
            <FeaturedPost post={featuredPost} />
          </section>
        )}

        {/* Recent News Section */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
              <Link
                href="/posts"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                View All →
              </Link>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {recentPosts.map((post) => (
                <article
                  key={post.postId}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    {post.categories && post.categories.length > 0 && (
                      <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded mb-3">
                        {post.categories[0]}
                      </span>
                    )}
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
                      <p className="text-gray-600 line-clamp-3 mb-4">{post.excerpt}</p>
                    )}
                    <Link
                      href={`/posts/${post.postId || 'unknown'}`}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Links</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Link
                href="/pages"
                className="p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors text-center"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Beliefs</h3>
                <p className="text-gray-600">Learn about what we believe</p>
              </Link>
              <Link
                href="/churches"
                className="p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors text-center"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Find a Church</h3>
                <p className="text-gray-600">Locate a church near you</p>
              </Link>
              <Link
                href="/events"
                className="p-6 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors text-center"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Events</h3>
                <p className="text-gray-600">Upcoming events and activities</p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
