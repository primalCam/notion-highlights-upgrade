import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useState } from 'react'

export default function Navigation() {
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLegalDropdownOpen, setIsLegalDropdownOpen] = useState(false)
  
  return (
    <nav className="glass-nav fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#ffd700] to-[#ffed4e] rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
              <Image 
                src="/icons/icon48.png" 
                alt="Notion Highlights Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <span className="text-white font-bold text-xl hidden sm:block">
              Notion Highlights
            </span>
          </Link>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`nav-link ${router.pathname === '/' ? 'nav-link-active' : ''}`}
            >
              Home
            </Link>

            <Link 
              href="/upgrade" 
              className={`nav-link ${router.pathname === '/upgrade' ? 'nav-link-active' : ''}`}
            >
              Upgrade
            </Link>

            <Link 
              href="/support" 
              className={`nav-link ${router.pathname === '/support' ? 'nav-link-active' : ''}`}
            >
              Support
            </Link>

            <Link 
              href="/about" 
              className={`nav-link ${router.pathname === '/about' ? 'nav-link-active' : ''}`}
            >
              About
            </Link>

            <Link 
              href="/contact" 
              className={`nav-link ${router.pathname === '/contact' ? 'nav-link-active' : ''}`}
            >
              Contact
            </Link>

            {/* ⭐ NEW BLOG LINK */}
            <Link 
              href="/blog" 
              className={`nav-link ${router.pathname.startsWith('/blog') ? 'nav-link-active' : ''}`}
            >
              Blog
            </Link>

            {/* Legal Pages Dropdown */}
            <div className="relative group">
              <button className="nav-link flex items-center">
                Legal
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800/95 backdrop-blur-lg rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-white/10">
                <Link href="/privacy" className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-colors border-t border-white/10">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
          
          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link href="/upgrade" className="gradient-button text-sm py-2 px-6 hidden md:block">
              Upgrade Now
            </Link>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white/70 hover:text-white p-2"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-card mt-4 p-4 border border-white/10">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className={`nav-link-mobile ${router.pathname === '/' ? 'nav-link-active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>

              <Link 
                href="/upgrade" 
                className={`nav-link-mobile ${router.pathname === '/upgrade' ? 'nav-link-active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Upgrade
              </Link>

              <Link 
                href="/support" 
                className={`nav-link-mobile ${router.pathname === '/support' ? 'nav-link-active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Support
              </Link>

              <Link 
                href="/about" 
                className={`nav-link-mobile ${router.pathname === '/about' ? 'nav-link-active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>

              <Link 
                href="/contact" 
                className={`nav-link-mobile ${router.pathname === '/contact' ? 'nav-link-active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>

              {/* ⭐ NEW BLOG LINK (MOBILE) */}
              <Link
                href="/blog"
                className={`nav-link-mobile ${
                  router.pathname.startsWith("/blog") ? "nav-link-active" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              
              {/* Mobile Legal Dropdown */}
              <div className="border-t border-white/10 pt-4">
                <button 
                  onClick={() => setIsLegalDropdownOpen(!isLegalDropdownOpen)}
                  className="nav-link-mobile flex items-center justify-between w-full"
                >
                  Legal
                  <svg 
                    className={`w-4 h-4 transition-transform ${isLegalDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isLegalDropdownOpen && (
                  <div className="ml-4 mt-2 space-y-2 border-l border-white/10 pl-4">
                    <Link 
                      href="/privacy" 
                      className="block text-white/70 hover:text-white transition-colors py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Privacy Policy
                    </Link>
                    <Link 
                      href="/terms" 
                      className="block text-white/70 hover:text-white transition-colors py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Terms of Service
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Help Center Link */}
              <div className="border-t border-white/10 pt-4">
                <a 
                  href="https://notionhighlightshelp.tawk.help/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link-mobile flex items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Help Center
                </a>
              </div>

              {/* Mobile CTA Button */}
              <Link 
                href="/upgrade" 
                className="gradient-button text-center py-3 mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Upgrade Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
