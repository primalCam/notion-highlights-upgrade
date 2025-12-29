// components/Navigation.tsx
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLegalDropdownOpen, setIsLegalDropdownOpen] = useState(false)
  const [isAppsDropdownOpen, setIsAppsDropdownOpen] = useState(false)
  
  // Close dropdown on route change
  useEffect(() => {
    setIsAppsDropdownOpen(false)
    setIsMobileMenuOpen(false)
    setIsLegalDropdownOpen(false)
  }, [router.asPath])

  const apps = [
    { name: "Notion Highlights", href: "/", icon: "/icons/icon48.png", color: "hover:bg-white/10" },
    { name: "AutoFlow", href: "/autoflow", icon: "/icons/af-icon128.png", color: "hover:bg-blue-500/10" },
    { name: "Sightline", href: "/sightline", icon: "/icons/sl-icon128.png", color: "hover:bg-emerald-500/10" },
    { name: "Focus Dock", href: "/focus-dock", icon: "/icons/fd-icon128.png", color: "hover:bg-red-500/10" },
    { name: "CleanRead", href: "/clean-read", icon: "/icons/cr-icon128.png", color: "hover:bg-white/10" },
  ]

  return (
    <nav className="fixed w-full top-0 z-[100] px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="glass-nav-chrome rounded-2xl border border-white/10 px-6 h-16 flex items-center justify-between backdrop-blur-3xl shadow-2xl">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-9 h-9 bg-gradient-to-br from-[#ffd700] to-[#ffed4e] rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform overflow-hidden">
              <Image src="/icons/icon48.png" alt="Notion Highlights Logo" width={24} height={24} className="object-contain" />
            </div>
            <span className="text-white font-black text-lg tracking-tighter">Notion Highlights</span>
          </Link>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`nav-link ${router.pathname === '/' ? 'nav-link-active' : ''}`}
            >
              Home
            </Link>

            {/* APPS DROPDOWN - Updated with AutoFlow and animations */}
            <div className="relative">
              <button 
                onMouseEnter={() => setIsAppsDropdownOpen(true)}
                className="text-white/60 hover:text-white font-bold text-sm tracking-widest uppercase transition-colors flex items-center gap-2 py-4"
              >
                Apps <span className={`transition-transform duration-300 ${isAppsDropdownOpen ? 'rotate-180' : ''}`}>▾</span>
              </button>

              <AnimatePresence>
                {isAppsDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    onMouseLeave={() => setIsAppsDropdownOpen(false)}
                    className="absolute top-full left-0 w-64 mt-2 p-2 glass-card-dropdown rounded-2xl border border-white/10 shadow-3xl z-50"
                  >
                    {apps.map((app) => (
                      <Link 
                        key={app.name} 
                        href={app.href} 
                        className={`flex items-center gap-3 p-3 rounded-xl transition-all ${app.color} group`}
                      >
                        <div className="w-8 h-8 rounded-lg bg-white/5 p-1.5 border border-white/5 group-hover:border-white/20 flex items-center justify-center">
                          <Image src={app.icon} alt={app.name} width={20} height={20} className="object-contain" />
                        </div>
                        <span className="text-white/80 group-hover:text-white font-bold text-xs">{app.name}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

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
            
            {/* CTA Button */}
            <Link href="/upgrade" className="gradient-button text-sm py-2 px-6">
              Upgrade Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white/70 hover:text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 glass-nav-chrome rounded-2xl border border-white/10 overflow-hidden"
          >
            <div className="p-6 space-y-4">
              <Link 
                href="/" 
                className={`nav-link-mobile ${router.pathname === '/' ? 'nav-link-active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* APPS DROPDOWN (MOBILE) */}
              <div className="border-t border-white/10 pt-4">
                <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Our Apps</p>
                {apps.map((app) => (
                  <Link 
                    key={app.name} 
                    href={app.href} 
                    className="flex items-center gap-4 text-white/60 hover:text-white py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/5 p-1.5 border border-white/5 flex items-center justify-center">
                      <Image src={app.icon} alt={app.name} width={20} height={20} className="object-contain" />
                    </div>
                    <span className="font-bold">{app.name}</span>
                  </Link>
                ))}
              </div>

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

              <Link
                href="/blog"
                className={`nav-link-mobile ${
                  router.pathname.startsWith("/blog") ? "nav-link-active" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              
              {/* Mobile Legal Links */}
              <div className="border-t border-white/10 pt-4">
                <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Legal</p>
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
                className="gradient-button text-center py-3 mt-4 block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Upgrade Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .glass-nav-chrome {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(50px) saturate(180%);
          box-shadow: inset 0 1px 1px rgba(255,255,255,0.1);
        }
        .glass-card-dropdown {
          background: rgba(10, 10, 10, 0.8);
          backdrop-filter: blur(40px);
        }
      `}</style>
    </nav>
  )
}