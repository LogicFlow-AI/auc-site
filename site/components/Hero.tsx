import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
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
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Centered CTA Button */}
      <div className="relative z-10 text-center">
        <Link
          href="/bible-study"
          className="inline-block px-8 py-4 bg-[#fc842b] hover:bg-[#e6731f] text-white font-semibold rounded transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          FIND A BIBLE STUDY
        </Link>
      </div>
    </section>
  );
}

