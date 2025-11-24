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
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Bible Study</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Start your journey with three easy steps</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-[#fc842b]/20 to-[#0066cc]/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
                <div className="relative w-24 h-24 mx-auto bg-gradient-to-br from-[#fc842b] to-[#0066cc] rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl font-bold text-white">1</span>
                </div>
              </div>
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mb-4 shadow-md group-hover:shadow-lg transition-shadow">
                  <svg className="w-10 h-10 text-[#0066cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-[#0066cc] transition-colors">View our Bible study catalog</h3>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-[#fc842b]/20 to-[#0066cc]/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
                <div className="relative w-24 h-24 mx-auto bg-gradient-to-br from-[#fc842b] to-[#0066cc] rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl font-bold text-white">2</span>
                </div>
              </div>
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mb-4 shadow-md group-hover:shadow-lg transition-shadow">
                  <svg className="w-10 h-10 text-[#0066cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-[#0066cc] transition-colors">Sign up with your name and email</h3>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-[#fc842b]/20 to-[#0066cc]/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
                <div className="relative w-24 h-24 mx-auto bg-gradient-to-br from-[#fc842b] to-[#0066cc] rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl font-bold text-white">3</span>
                </div>
              </div>
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mb-4 shadow-md group-hover:shadow-lg transition-shadow">
                  <svg className="w-10 h-10 text-[#0066cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-[#0066cc] transition-colors">Discover the meaning and purpose of life</h3>
            </div>
          </div>
        </section>

        {/* Quote/Testimonial Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl p-10 md:p-16 border border-gray-100">
              <div className="flex items-start mb-8">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#fc842b] to-[#0066cc] rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-3.312.717-5.691 3.307-5.691 6.646 0 3.5 2.5 6.5 6.5 6.5v7h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-3.313.717-5.69 3.307-5.69 6.646 0 3.5 2.5 6.5 6.5 6.5v7h-10z"/>
                    </svg>
                  </div>
                </div>
                <blockquote className="text-xl md:text-2xl text-gray-700 italic leading-relaxed flex-1">
                  &quot;I think the best years for the Adventist Church are just ahead of us as we reach post-Christian secular Australia, our Church Next strategy, our Australia for Christ missionary focus. . . Together we will refocus our mission on what it is to be God&apos;s people in Australia and I think as a Church we have some wonderful opportunities and I&apos;m looking forward to being a part of that.&quot;
                </blockquote>
              </div>
              <div className="flex items-center justify-end">
                <div className="text-right">
                  <p className="text-lg text-gray-900 font-semibold">— Dr Brendan Pratt —</p>
                  <p className="text-sm text-gray-500 mt-1">President, Australian Union Conference</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Find a Church Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Find a Church Near me?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Select Your Location from the map or the list below</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Map placeholder */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-[500px] flex items-center justify-center shadow-lg border border-gray-200">
              <div className="text-center">
                <svg className="w-24 h-24 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 6.75V15m6-6v8.25m.5 0a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0z" />
                </svg>
                <p className="text-gray-500 font-medium">Map of Australian Conferences</p>
              </div>
            </div>
            
            {/* Conference Links */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {navigation.footer.conferences.map((conference: string) => (
                  <Link
                    key={conference}
                    href={`/church-near-me/${conference.toLowerCase().replace(/\s+/g, '-')}`}
                    className="group px-6 py-4 bg-white rounded-xl border border-gray-200 hover:border-[#0066cc] hover:shadow-md transition-all duration-200 flex items-center justify-between"
                  >
                    <span className="text-gray-700 group-hover:text-[#0066cc] font-medium transition-colors">{conference}</span>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-[#0066cc] group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Find answers to common questions about our faith and beliefs</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { q: 'Who is God?', a: 'God the eternal Father is the Creator, Source, Sustainer, and Sovereign of all creation. He is just and holy, merciful and gracious, slow to anger, and abounding in steadfast love and faithfulness.' },
                { q: 'When Was Jesus Born?', a: 'While the world celebrates December 25 as the day of Jesus\' birth, this may not be historically accurate. While the Bible gives us little detail about the exact time of Jesus\' birth, we can deduce a time frame using historical and Biblical evidence that will determine the time Jesus was born.' },
                { q: 'Who Wrote the Bible?', a: 'The Holy Scriptures, Old and New Testaments, are the written Word of God, given by divine inspiration. The inspired authors spoke and wrote as they were moved by the Holy Spirit.' },
                { q: 'What Is love?', a: 'The Bible refers to love as a personal being – God himself. This means that everything God speaks, thinks, or feels is the revelation of love.' },
              ].map((faq, index) => (
                <div key={index} className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 p-8 transition-all duration-300">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-[#0066cc] transition-colors">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">{faq.a}</p>
                  <button className="inline-flex items-center text-[#fc842b] hover:text-[#0066cc] font-semibold text-sm transition-colors group-hover:gap-2 gap-1">
                    <span>See More</span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
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
