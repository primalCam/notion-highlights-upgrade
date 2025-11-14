import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="glass-card mt-20 mx-4 mb-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-4">
          <a 
            href="https://notionhighlightshelp.tawk.help/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors text-sm"
          >
            Help Center
          </a>
          <Link 
            href="/privacy" 
            className="text-white/70 hover:text-white transition-colors text-sm"
          >
            Privacy Policy
          </Link>
          <Link 
            href="/terms" 
            className="text-white/70 hover:text-white transition-colors text-sm"
          >
            Terms of Service
          </Link>
        </div>
        <p className="text-white/70 text-sm">
          © {currentYear} Notion Highlights. All rights reserved.
        </p>
      </div>
    </footer>
  )
}