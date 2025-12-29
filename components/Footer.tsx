import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="mt-20 mx-4 mb-8">
      <div className="max-w-7xl mx-auto">
        <div className="glass-nav-chrome rounded-2xl border border-white/10 px-6 py-8 backdrop-blur-3xl shadow-2xl">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            {/* Left side - Copyright */}
            <p className="text-white/70 text-sm font-bold tracking-wide">
              © {currentYear} Notion Highlights. All rights reserved.
            </p>
            
            {/* Center - Navigation Links */}
            <div className="flex items-center gap-8">
              <a 
                href="https://notionhighlightshelp.tawk.help/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors text-sm font-bold tracking-widest uppercase hover:scale-105"
              >
                Help Center
              </a>
              <div className="h-4 w-px bg-white/20"></div>
              <Link 
                href="/privacy" 
                className="text-white/60 hover:text-white transition-colors text-sm font-bold tracking-widest uppercase hover:scale-105"
              >
                Privacy Policy
              </Link>
              <div className="h-4 w-px bg-white/20"></div>
              <Link 
                href="/terms" 
                className="text-white/60 hover:text-white transition-colors text-sm font-bold tracking-widest uppercase hover:scale-105"
              >
                Terms of Service
              </Link>
            </div>
            
            {/* Right side - Logo/Brand */}
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-gradient-to-br from-[#ffd700] to-[#ffed4e] rounded-md flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-white/80 font-black text-sm tracking-tighter">
                The Suite
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}