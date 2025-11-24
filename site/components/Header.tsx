'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              {/* Orange flame icon */}
              <svg className="w-8 h-8 text-[#fc842b]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span className="text-xl font-semibold text-white">
                Seventh-day Adventist Church Australia
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/what-we-do" className="text-sm font-medium text-white hover:text-[#fc842b] transition-colors">
              WHAT WE DO
            </Link>
            <Link href="/what-we-believe" className="text-sm font-medium text-white hover:text-[#fc842b] transition-colors">
              WHAT WE BELIEVE
            </Link>
            <Link href="/where-we-are" className="text-sm font-medium text-white hover:text-[#fc842b] transition-colors">
              WHERE WE ARE
            </Link>
            {/* Search Icon */}
            <button
              className="text-white hover:text-[#fc842b] transition-colors ml-4"
              aria-label="Search"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 bg-gray-900/95 rounded-lg mt-2">
            <div className="flex flex-col space-y-3">
              <Link href="/what-we-do" className="text-sm font-medium text-white hover:text-[#fc842b] transition-colors px-2 py-1">
                WHAT WE DO
              </Link>
              <Link href="/what-we-believe" className="text-sm font-medium text-white hover:text-[#fc842b] transition-colors px-2 py-1">
                WHAT WE BELIEVE
              </Link>
              <Link href="/where-we-are" className="text-sm font-medium text-white hover:text-[#fc842b] transition-colors px-2 py-1">
                WHERE WE ARE
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

