import Link from 'next/link';
import { getAllPosts, formatDate } from '@/lib/content';
import { navigation } from '@/lib/design-tokens';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import FeaturedPost from '@/components/FeaturedPost';

export default async function Home() {
  const allPosts = await getAllPosts();
  const featuredPost = allPosts[0]; // Latest post as featured
  const recentPosts = allPosts.slice(1, 7); // Next 6 posts

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />

        {/* Bible Study Steps Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Bible Study</h2>
            <p className="text-lg text-gray-600">Start your journey with three easy steps</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#fc842b] mb-4">1</div>
              <div className="mb-4">
                {/* Icon placeholder */}
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">View our Bible study catalog</h3>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-[#fc842b] mb-4">2</div>
              <div className="mb-4">
                {/* Icon placeholder */}
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sign up with your name and email</h3>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-[#fc842b] mb-4">3</div>
              <div className="mb-4">
                {/* Icon placeholder */}
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discover the meaning and purpose of life</h3>
            </div>
          </div>
        </section>

        {/* Quote/Testimonial Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <div className="flex items-start mb-6">
                <svg className="w-12 h-12 text-[#fc842b] mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-3.312.717-5.691 3.307-5.691 6.646 0 3.5 2.5 6.5 6.5 6.5v7h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-3.313.717-5.69 3.307-5.69 6.646 0 3.5 2.5 6.5 6.5 6.5v7h-10z"/>
                </svg>
                <blockquote className="text-lg md:text-xl text-gray-700 italic">
                  &quot;I think the best years for the Adventist Church are just ahead of us as we reach post-Christian secular Australia, our Church Next strategy, our Australia for Christ missionary focus. . . Together we will refocus our mission on what it is to be God&apos;s people in Australia and I think as a Church we have some wonderful opportunities and I&apos;m looking forward to being a part of that.&quot;
                </blockquote>
              </div>
              <p className="text-right text-gray-600 font-medium">— Dr Brendan Pratt —</p>
            </div>
          </div>
        </section>

        {/* Find a Church Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Find a Church Near me?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Map placeholder */}
            <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-500">Map of Australian Conferences</p>
            </div>
            
            {/* Conference Links */}
            <div>
              <p className="text-gray-600 mb-6">Select Your Location from the map or the list below</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {navigation.footer.conferences.map((conference: string) => (
                  <Link
                    key={conference}
                    href={`/church-near-me/${conference.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-[#0066cc] hover:text-[#fc842b] transition-colors text-sm"
                  >
                    {conference}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { q: 'Who is God?', a: 'God the eternal Father is the Creator, Source, Sustainer, and Sovereign of all creation. He is just and holy, merciful and gracious, slow to anger, and abounding in steadfast love and faithfulness.' },
                { q: 'When Was Jesus Born?', a: 'While the world celebrates December 25 as the day of Jesus\' birth, this may not be historically accurate. While the Bible gives us little detail about the exact time of Jesus\' birth, we can deduce a time frame using historical and Biblical evidence that will determine the time Jesus was born.' },
                { q: 'Who Wrote the Bible?', a: 'The Holy Scriptures, Old and New Testaments, are the written Word of God, given by divine inspiration. The inspired authors spoke and wrote as they were moved by the Holy Spirit.' },
                { q: 'What Is love?', a: 'The Bible refers to love as a personal being – God himself. This means that everything God speaks, thinks, or feels is the revelation of love.' },
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.q}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{faq.a}</p>
                  <button className="mt-4 text-[#fc842b] hover:text-[#0066cc] text-sm font-medium">
                    See More →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
