import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-white transition-colors">Who We Are</Link></li>
              <li><Link href="/beliefs" className="hover:text-white transition-colors">What We Believe</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Ministries</h3>
            <ul className="space-y-2">
              <li><Link href="/youth" className="hover:text-white transition-colors">Youth</Link></li>
              <li><Link href="/children" className="hover:text-white transition-colors">Children</Link></li>
              <li><Link href="/women" className="hover:text-white transition-colors">Women&apos;s Ministries</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/posts" className="hover:text-white transition-colors">News</Link></li>
              <li><Link href="/media" className="hover:text-white transition-colors">Media</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">Resources</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><Link href="/churches" className="hover:text-white transition-colors">Find a Church</Link></li>
              <li><Link href="/events" className="hover:text-white transition-colors">Events</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Australia&apos;s Church of Seventh-day Adventists. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

