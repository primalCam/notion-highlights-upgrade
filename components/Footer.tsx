import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="glass-card mt-20 mx-4 mb-8">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-white/70 text-sm">
          © {currentYear} Notion Highlights. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
