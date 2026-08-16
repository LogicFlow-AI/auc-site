import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-gray-950">
      <div className="relative z-10 max-w-4xl px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Seventh-day Adventist Church in Australia
        </h1>
        <p className="mt-5 text-lg md:text-xl leading-relaxed text-white/90">
          A community of faith sharing the hope of Jesus and serving people across Australia.
        </p>
        <Link
          href="/ministries/bible-study-online/"
          className="inline-block mt-8 px-8 py-4 bg-[#fc842b] hover:bg-[#e6731f] text-white font-semibold rounded transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          FIND A BIBLE STUDY
        </Link>
      </div>
    </section>
  );
}
