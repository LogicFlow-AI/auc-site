import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      {/* Video/Background Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 opacity-90">
        {/* Video would go here */}
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl">
          <Link
            href="/ministries/bible-study-online"
            className="inline-block mb-4 text-sm font-medium text-blue-300 hover:text-white transition-colors"
          >
            Bible Study 5
          </Link>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Bible Study, Daily Devotional and More with The Australian Union Conference of The Seventh-day Adventist Church
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-3xl">
            Have you ever found yourself asking who is God? What is God&apos;s will for my life? Why does God allow suffering? Are you looking for answers but don&apos;t know how to study the Bible?
          </p>
        </div>
      </div>
    </section>
  );
}

