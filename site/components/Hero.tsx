import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">
            Australia&apos;s Church of Seventh-day Adventists
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Connecting communities, sharing faith, and serving together across Australia
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/posts"
              className="px-8 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
            >
              Latest News
            </Link>
            <Link
              href="/about"
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

