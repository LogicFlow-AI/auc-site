import Link from 'next/link';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

export default async function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Introductory Text Block */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              Have you ever found yourself asking <strong className="font-semibold">who is God?</strong> What is God&apos;s will for my life? <strong className="font-semibold">Why does God allow suffering?</strong> Are you looking for answers but don&apos;t know <strong className="font-semibold">how to study the Bible?</strong>
            </p>
          </div>
        </section>

        {/* Bible Study Journey Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              YOUR BIBLE STUDY JOURNEY STARTS HERE
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Step 1 */}
              <div className="relative group">
                <div className="relative h-96 rounded-lg overflow-hidden">
                  {/* Background image placeholder - tablet/laptop hands */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-6xl font-bold opacity-20">1</div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <p className="text-white text-lg font-medium flex items-center">
                      VIEW OUR BIBLE STUDY CATALOG
                      <svg className="w-5 h-5 ml-2 text-[#fc842b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative group">
                <div className="relative h-96 rounded-lg overflow-hidden">
                  {/* Background image placeholder - smartphone hands */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-6xl font-bold opacity-20">2</div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <p className="text-white text-lg font-medium flex items-center">
                      SIGN UP WITH YOUR NAME AND EMAIL
                      <svg className="w-5 h-5 ml-2 text-[#fc842b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative group">
                <div className="relative h-96 rounded-lg overflow-hidden">
                  {/* Background image placeholder - person at sunset */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-pink-500 to-red-500">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-6xl font-bold opacity-20">3</div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <p className="text-white text-lg font-medium flex items-center">
                      DISCOVER THE MEANING AND PURPOSE OF LIFE.
                      <svg className="w-5 h-5 ml-2 text-[#fc842b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Find Peace Section */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              FIND PEACE AMIDST THE CHAOS IN THE WORLD AROUND US.
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Text about Bible Study. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <Link
              href="/bible-study/read-more"
              className="inline-block px-8 py-4 bg-[#fc842b] hover:bg-[#e6731f] text-white font-semibold rounded transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              READ MORE
            </Link>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 flex flex-col md:flex-row gap-8">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 overflow-hidden">
                  {/* Placeholder for woman's photo */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Quote Text */}
              <div className="flex-1 relative">
                <svg className="absolute -top-4 -left-4 w-16 h-16 text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-3.312.717-5.691 3.307-5.691 6.646 0 3.5 2.5 6.5 6.5 6.5v7h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-3.313.717-5.69 3.307-5.69 6.646 0 3.5 2.5 6.5 6.5 6.5v7h-10z"/>
                </svg>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  I cant tell you how wonderful it is to finally have hope. Dipiscing elit. Nunc imperdiet laoreet est et imperdiet.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Maecenas tempus augue non euismod elementum. Curabitur a nunc libero. Phasellus orci mauris, imperdiet vel magna.
                </p>
                <Link
                  href="/testimonial/read-more"
                  className="inline-block px-6 py-3 bg-[#fc842b] hover:bg-[#e6731f] text-white font-semibold rounded transition-all duration-200"
                >
                  READ MORE
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Where Are We Section */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Left: Heading */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                    WHERE ARE WE?
                  </h2>
                </div>
                
                {/* Middle: Map */}
                <div className="flex items-center justify-center">
                  <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-gray-200">
                    {/* Australia map placeholder */}
                    <div className="text-center">
                      <svg className="w-32 h-32 mx-auto text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 6.75V15m6-6v8.25m.5 0a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0z" />
                      </svg>
                      <p className="text-sm text-gray-500">Australia Map</p>
                    </div>
                  </div>
                </div>
                
                {/* Right: Location List */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Select Your Location from the map or the list below
                  </h3>
                  <div className="space-y-2">
                    {[
                      'South East Queensland',
                      'Northern New South Wales',
                      'Greater Sydney',
                      'South New South Wales',
                      'Victoria',
                      'South Australia',
                      'Western Australia',
                      'Northern Australia',
                      'Tasmania',
                    ].map((location) => (
                      <Link
                        key={location}
                        href={`/where-we-are/${location.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded text-gray-700 hover:text-[#fc842b] transition-colors font-medium"
                      >
                        {location}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
