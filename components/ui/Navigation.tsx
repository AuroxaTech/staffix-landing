'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed nav height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
      setProductMenuOpen(false);
    }
  };

  const handleSectionClick = (sectionId: string) => {
    if (pathname === '/') {
      // If on homepage, scroll to section
      setTimeout(() => scrollToSection(sectionId), 100);
    } else {
      // If on another page, navigate to homepage with hash
      window.location.href = `/#${sectionId}`;
    }
    setMobileMenuOpen(false);
    setProductMenuOpen(false);
  };

  // Handle hash navigation when page loads
  useEffect(() => {
    if (pathname === '/' && window.location.hash) {
      const hash = window.location.hash.substring(1);
      setTimeout(() => scrollToSection(hash), 500);
    }
  }, [pathname]);

  const navLinks = [
    { id: 'features', label: 'Features' },
    { id: 'how-it-works', label: 'How it Works' },
    { href: '/use-cases', label: 'Use Cases' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity group">
            <div className="h-10 sm:h-12 w-auto relative">
              <Image
                src="/assets/image1.png"
                alt="StaffiX Logo"
                width={150}
                height={50}
                className="h-12 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
                priority
                quality={90}
                unoptimized={false}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Product Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setProductMenuOpen(true)}
              onMouseLeave={() => setProductMenuOpen(false)}
            >
              <button className="flex items-center px-4 py-2 text-gray-700 hover:text-[#22479b] font-medium transition-colors rounded-lg hover:bg-gray-50">
                Product
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {productMenuOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden z-50"
                     onMouseEnter={() => setProductMenuOpen(true)}
                     onMouseLeave={() => setProductMenuOpen(false)}
                >
                  {navLinks.map((link) => (
                    link.id ? (
                      <button
                        key={link.id}
                        onClick={() => handleSectionClick(link.id)}
                        className="block w-full text-left px-5 py-3 text-sm text-gray-700 hover:bg-[#22479b]/5 hover:text-[#22479b] transition-colors font-medium"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <Link
                        key={link.href}
                        href={link.href!}
                        className="block px-5 py-3 text-sm text-gray-700 hover:bg-[#22479b]/5 hover:text-[#22479b] transition-colors font-medium"
                      >
                        {link.label}
                      </Link>
                    )
                  ))}
                </div>
              )}
            </div>

            <button 
              onClick={() => handleSectionClick('pricing')}
              className="px-4 py-2 text-gray-700 hover:text-[#22479b] font-medium transition-colors rounded-lg hover:bg-gray-50"
            >
              Pricing
            </button>
            <button 
              onClick={() => handleSectionClick('security')}
              className="px-4 py-2 text-gray-700 hover:text-[#22479b] font-medium transition-colors rounded-lg hover:bg-gray-50"
            >
              Security
            </button>
            <button 
              onClick={() => handleSectionClick('integrations')}
              className="px-4 py-2 text-gray-700 hover:text-[#22479b] font-medium transition-colors rounded-lg hover:bg-gray-50"
            >
              Integrations
            </button>
            <Link href="/faq" className="px-4 py-2 text-gray-700 hover:text-[#22479b] font-medium transition-colors rounded-lg hover:bg-gray-50">
              FAQ
            </Link>
            <Link 
              href="/contact"
              className="px-5 py-2.5 text-gray-700 hover:text-[#22479b] font-medium transition-colors rounded-lg hover:bg-gray-50"
            >
              Book a Demo
            </Link>
            <Link 
              href="/trial"
              className="ml-2 px-6 py-2.5 bg-gradient-to-r from-[#22479b] to-[#3a5fb8] text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-[#22479b]/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              Start Free Trial
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-[#22479b] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

          {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => handleSectionClick('features')}
                className="text-left px-4 py-3 text-gray-700 hover:text-[#22479b] hover:bg-gray-50 rounded-lg font-medium transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => handleSectionClick('how-it-works')}
                className="text-left px-4 py-3 text-gray-700 hover:text-[#22479b] hover:bg-gray-50 rounded-lg font-medium transition-colors"
              >
                How it Works
              </button>
              <Link href="/use-cases" className="px-4 py-3 text-gray-700 hover:text-[#22479b] hover:bg-gray-50 rounded-lg font-medium transition-colors">
                Use Cases
              </Link>
              <button 
                onClick={() => handleSectionClick('pricing')}
                className="text-left px-4 py-3 text-gray-700 hover:text-[#22479b] hover:bg-gray-50 rounded-lg font-medium transition-colors"
              >
                Pricing
              </button>
              <button 
                onClick={() => handleSectionClick('security')}
                className="text-left px-4 py-3 text-gray-700 hover:text-[#22479b] hover:bg-gray-50 rounded-lg font-medium transition-colors"
              >
                Security
              </button>
              <button 
                onClick={() => handleSectionClick('integrations')}
                className="text-left px-4 py-3 text-gray-700 hover:text-[#22479b] hover:bg-gray-50 rounded-lg font-medium transition-colors"
              >
                Integrations
              </button>
              <Link href="/faq" className="px-4 py-3 text-gray-700 hover:text-[#22479b] hover:bg-gray-50 rounded-lg font-medium transition-colors">
                FAQ
              </Link>
              <Link href="/contact" className="px-4 py-3 text-gray-700 hover:text-[#22479b] hover:bg-gray-50 rounded-lg font-medium transition-colors">
                Book a Demo
              </Link>
              <Link 
                href="/trial"
                className="mx-4 mt-4 px-6 py-3 bg-gradient-to-r from-[#22479b] to-[#3a5fb8] text-white rounded-xl font-semibold text-center hover:shadow-lg transition-all"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
