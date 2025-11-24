import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/AUC-compressed.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-gray-900/80"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-5xl">
          <Link
            href="/ministries/bible-study-online"
            className="inline-flex items-center mb-6 text-sm font-semibold text-white/90 hover:text-white transition-colors group"
          >
            <span className="mr-2">Bible Study 5</span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight text-white">
            Bible Study, Daily Devotional and More with The Australian Union Conference of The Seventh-day Adventist Church
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-gray-100 max-w-4xl leading-relaxed">
            Have you ever found yourself asking who is God? What is God&apos;s will for my life? Why does God allow suffering? Are you looking for answers but don&apos;t know how to study the Bible?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/ministries/bible-study-online"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#fc842b] hover:bg-[#e6731f] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              Start Bible Study
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/news"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/30 hover:border-white/50 transition-all duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

