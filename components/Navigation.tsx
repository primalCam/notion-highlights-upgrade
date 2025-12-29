// components/Navigation.tsx
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useState, useEffect } from 'react'

// Conditional Framer Motion import - safe fallback
let motion: any;
let AnimatePresence: any;

try {
  const fm = require('framer-motion');
  motion = fm.motion;
  AnimatePresence = fm.AnimatePresence;
} catch (error) {
  // Framer Motion not installed, use fallbacks
  motion = {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>
  };
  AnimatePresence = ({ children }: any) => <>{children}</>;
}

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
    { name: "Notion Highlights", href: "/notion-highlights", icon: "/icons/icon48.png", color: "hover:bg-white/10" },
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
              className="text-white/60 hover:text-white font-bold text-sm tracking-widest uppercase transition-colors"
            >
              Home
            </Link>

            {/* APPS DROPDOWN - Modern UI */}
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
              className="text-white/60 hover:text-white font-bold text-sm tracking-widest uppercase transition-colors"
            >
              Upgrade
            </Link>

            <Link 
              href="/support" 
              className="text-white/60 hover:text-white font-bold text-sm tracking-widest uppercase transition-colors"
            >
              Support
            </Link>

            <Link 
              href="/about" 
              className="text-white/60 hover:text-white font-bold text-sm tracking-widest uppercase transition-colors"
            >
              About
            </Link>

            <Link 
              href="/contact" 
              className="text-white/60 hover:text-white font-bold text-sm tracking-widest uppercase transition-colors"
            >
              Contact
            </Link>

            <Link 
              href="/blog" 
              className="text-white/60 hover:text-white font-bold text-sm tracking-widest uppercase transition-colors"
            >
              Blog
            </Link>

            {/* Legal Pages Dropdown - Modern UI */}
            <div className="relative group">
              <button className="text-white/60 hover:text-white font-bold text-sm tracking-widest uppercase transition-colors flex items-center gap-2">
                Legal <span>▾</span>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 glass-card-dropdown rounded-2xl border border-white/10 shadow-3xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/privacy" className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-colors rounded-t-2xl">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-colors border-t border-white/10 rounded-b-2xl">
                  Terms of Service
                </Link>
              </div>
            </div>
            
            {/* CTA Button - Modern UI */}
            <Link 
              href="/upgrade" 
              className="bg-white text-black font-black px-6 py-2.5 rounded-xl text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-[0_5px_15px_rgba(255,255,255,0.2)]"
            >
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

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 glass-nav-chrome rounded-2xl border border-white/10 overflow-hidden"
          >
            <div className="p-6 space-y-4">
              <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Navigation</p>
              
              <Link 
                href="/" 
                className="flex items-center gap-4 text-white/60 hover:text-white py-3 font-bold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="w-6 h-6 rounded-lg bg-white/5 p-1 border border-white/5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <span>Home</span>
              </Link>

              {/* APPS DROPDOWN (MOBILE) */}
              <div className="border-t border-white/10 pt-4">
                <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Our Apps</p>
                {apps.map((app) => (
                  <Link 
                    key={app.name} 
                    href={app.href} 
                    className="flex items-center gap-4 text-white/60 hover:text-white py-3"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/5 p-1.5 border border-white/5 flex items-center justify-center">
                      <Image src={app.icon} alt={app.name} width={20} height={20} className="object-contain" />
                    </div>
                    <span className="font-bold">{app.name}</span>
                  </Link>
                ))}
              </div>

              <div className="border-t border-white/10 pt-4">
                <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Company</p>
                
                <Link 
                  href="/upgrade" 
                  className="flex items-center gap-4 text-white/60 hover:text-white py-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="w-6 h-6 rounded-lg bg-white/5 p-1 border border-white/5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <span>Upgrade</span>
                </Link>

                <Link 
                  href="/support" 
                  className="flex items-center gap-4 text-white/60 hover:text-white py-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="w-6 h-6 rounded-lg bg-white/5 p-1 border border-white/5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <span>Support</span>
                </Link>

                <Link 
                  href="/about" 
                  className="flex items-center gap-4 text-white/60 hover:text-white py-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="w-6 h-6 rounded-lg bg-white/5 p-1 border border-white/5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span>About</span>
                </Link>

                <Link 
                  href="/contact" 
                  className="flex items-center gap-4 text-white/60 hover:text-white py-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="w-6 h-6 rounded-lg bg-white/5 p-1 border border-white/5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span>Contact</span>
                </Link>

                <Link
                  href="/blog"
                  className="flex items-center gap-4 text-white/60 hover:text-white py-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="w-6 h-6 rounded-lg bg-white/5 p-1 border border-white/5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <span>Blog</span>
                </Link>
              </div>

              {/* Mobile Legal Links */}
              <div className="border-t border-white/10 pt-4">
                <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Legal</p>
                <Link 
                  href="/privacy" 
                  className="block text-white/60 hover:text-white transition-colors py-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Privacy Policy
                </Link>
                <Link 
                  href="/terms" 
                  className="block text-white/60 hover:text-white transition-colors py-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Terms of Service
                </Link>
              </div>

              {/* Mobile CTA Button */}
              <Link 
                href="/upgrade" 
                className="bg-white text-black font-black px-6 py-3.5 rounded-xl text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-[0_5px_15px_rgba(255,255,255,0.2)] block text-center mt-6"
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