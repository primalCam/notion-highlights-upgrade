import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navigation() {
  const router = useRouter()
  
  return (
    <nav className="glass-nav fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#ffd700] to-[#ffed4e] rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-black font-bold text-xl">NH</span>
            </div>
            <span className="text-white font-bold text-xl hidden sm:block">
              Notion Highlights
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`text-white/90 hover:text-white transition-colors ${
                router.pathname === '/' ? 'font-semibold' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              href="/upgrade" 
              className={`text-white/90 hover:text-white transition-colors ${
                router.pathname === '/upgrade' ? 'font-semibold' : ''
              }`}
            >
              Upgrade
            </Link>
          </div>
          
          <Link href="/upgrade" className="gradient-button text-sm py-2 px-6">
            Upgrade Now
          </Link>
        </div>
      </div>
    </nav>
  )
}
