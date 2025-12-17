// pages/clean-read.tsx
import Layout from '../components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { gaEvent } from '../lib/ga'

export default function CleanReadPage() {
  useEffect(() => {
    gaEvent('page_view', { page: 'clean-read' })
  }, [])

  const features = [
    {
      icon: "📖",
      title: "Clean Reading",
      description: "Remove ads, popups, and distractions from any article with one click"
    },
    {
      icon: "🎨",
      title: "Custom Themes",
      description: "Choose from dark, gold, and custom color themes for optimal reading"
    },
    {
      icon: "🔍",
      title: "Smart Extraction",
      description: "Extracts main content from any webpage, blog, or news site"
    },
    {
      icon: "👁️",
      title: "Vision Accessible",
      description: "High-contrast mode, adjustable fonts, and enhanced readability"
    },
    {
      icon: "💾",
      title: "Save Articles",
      description: "Save articles to read later, even offline"
    },
    {
      icon: "📱",
      title: "Social Media & AI Ready",
      description: "Works on Twitter, LinkedIn, ChatGPT, Claude, and more"
    }
  ]

  const commands = [
    { command: "Click Icon", desc: "Activate CleanRead on any page" },
    { command: "Cmd/Ctrl+R", desc: "Keyboard shortcut alternative" },
    { command: "Auto-Detect", desc: "Smart content extraction" },
    { command: "Adjust Settings", desc: "Customize reading experience" },
    { command: "Save Article", desc: "Save for later reading" },
    { command: "Export PDF", desc: "Export articles as PDF (Pro)" }
  ]

  const freeFeatures = [
    "Clean reading on any website",
    "Dark & gold theme options",
    "Adjustable font sizes (14-28px)",
    "Focus mode (hide images)",
    "Column width controls",
    "Basic reading stats",
    "Save 3 articles (free limit)",
    "Works on social media platforms",
    "Keyboard shortcuts",
    "No ads in reader mode"
  ]

  const proBenefits = [
    "Unlimited saved articles (Free: 3)",
    "Custom color themes",
    "Export to PDF",
    "Shareable HTML export",
    "Auto-scroll reading mode",
    "Advanced reading statistics",
    "Vision accessibility mode",
    "Hover zoom effect",
    "Priority feature access",
    "Priority email support",
    "Future Pro-only features"
  ]

  const supportedPlatforms = [
    { name: "Twitter/X", icon: "🐦", color: "from-blue-400 to-blue-500" },
    { name: "LinkedIn", icon: "💼", color: "from-blue-500 to-blue-600" },
    { name: "Reddit", icon: "👨‍💻", color: "from-orange-500 to-red-500" },
    { name: "Facebook", icon: "📘", color: "from-blue-600 to-blue-700" },
    { name: "ChatGPT", icon: "🤖", color: "from-green-500 to-green-600" },
    { name: "Claude", icon: "🔮", color: "from-purple-500 to-purple-600" },
    { name: "Gemini", icon: "💎", color: "from-teal-500 to-teal-600" },
    { name: "Notion", icon: "📝", color: "from-gray-800 to-gray-900" },
    { name: "Google Docs", icon: "📄", color: "from-blue-500 to-green-500" },
    { name: "All News Sites", icon: "📰", color: "from-yellow-500 to-red-500" },
    { name: "All Blogs", icon: "✍️", color: "from-purple-500 to-pink-500" },
    { name: "Any Website", icon: "🌐", color: "from-indigo-500 to-purple-500" }
  ]

  return (
    <Layout>
      <Head>
        <title>CleanRead - Distraction-Free Reading for Chrome</title>
        <meta name="description" content="One click to remove ads, popups, and distractions from any article. Free Chrome extension for clean reading." />
        <meta property="og:title" content="CleanRead - Distraction-Free Reading for Chrome" />
        <meta property="og:description" content="Click to read any article without distractions. Free Chrome extension." />
        <meta property="og:image" content="https://notionhighlights.com/icons/cr-icon128.png" />
      </Head>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-16 bg-gradient-to-b from-slate-900 via-black to-slate-900">
        <div className="text-center max-w-4xl">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 rounded-2xl flex items-center justify-center shadow-2xl shadow-yellow-500/30 overflow-hidden glass-nav">
                <Image 
                  src="/icons/cr-icon128.png" 
                  alt="CleanRead Logo"
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              <div className="absolute -top-2 -right-2">
                <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  NEW
                </span>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            CleanRead
          </h1>
          
          <p className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300 font-semibold mb-6">
            Distraction-Free Reading
          </p>
          
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            One click to remove ads, popups, and distractions from any article, blog, or social media post.
          </p>
          
          {/* FREE Badge */}
          <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-green-500/30 glass-nav">
            <span className="text-green-400 font-bold">FREE</span>
            <span className="text-white/90 text-sm">All core features included • No credit card</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={() => {
                gaEvent('install_click', { location: 'hero', product: 'clean-read' })
                window.open('https://chromewebstore.google.com/detail/cleanread/your-extension-id-here', '_blank')
              }}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white text-lg font-semibold py-4 px-12 rounded-xl transition-all duration-200 hover:scale-105 glass-nav"
            >
              Install Free Extension
            </button>
            <button 
              onClick={() => {
                gaEvent('video_click', { location: 'hero', product: 'clean-read' })
                // Scroll to demo section
                document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-white/10 hover:bg-white/20 text-white text-lg font-semibold py-4 px-12 rounded-xl transition-all duration-200 border border-white/20 glass-nav"
            >
              See Demo
            </button>
          </div>

          {/* Quick Preview */}
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10 max-w-2xl mx-auto glass-nav">
            <p className="text-white/70 text-sm mb-4">Works perfectly on:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {supportedPlatforms.slice(0, 6).map((platform, idx) => (
                <div key={idx} className={`bg-gradient-to-r ${platform.color} backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2 glass-nav`}>
                  <span className="text-sm">{platform.icon}</span>
                  <span className="text-white text-sm">{platform.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-slate-900" id="demo">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Clean Reading in One Click
          </h2>
          <p className="text-xl text-white/70 text-center mb-16 max-w-2xl mx-auto">
            Transform cluttered pages into beautiful, readable articles.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Before/After Demo */}
            <div className="space-y-4">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-slate-900/80 border border-white/10 rounded-2xl p-6 glass-nav">
                  <h3 className="text-xl font-bold text-white mb-4">Before CleanRead</h3>
                  <div className="space-y-2">
                    <div className="h-2 bg-red-500/30 rounded-full"></div>
                    <div className="h-2 bg-blue-500/30 rounded-full w-3/4"></div>
                    <div className="h-2 bg-green-500/30 rounded-full w-1/2"></div>
                    <div className="h-4 bg-gray-700 rounded-lg mt-4"></div>
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      <div className="h-16 bg-yellow-500/20 rounded-lg"></div>
                      <div className="h-16 bg-blue-500/20 rounded-lg"></div>
                      <div className="h-16 bg-red-500/20 rounded-lg"></div>
                    </div>
                    <div className="h-24 bg-gray-800 rounded-lg mt-4"></div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-slate-900/80 border border-white/10 rounded-2xl p-6 glass-nav">
                  <h3 className="text-xl font-bold text-white mb-4">After CleanRead</h3>
                  <div className="space-y-4">
                    <div className="h-3 bg-white/90 rounded-full"></div>
                    <div className="h-3 bg-white/80 rounded-full"></div>
                    <div className="h-3 bg-white/70 rounded-full w-5/6"></div>
                    <div className="h-3 bg-white/60 rounded-full w-2/3"></div>
                    <div className="h-16 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 rounded-lg mt-4 border border-yellow-500/20"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Steps */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Click the Extension</h3>
                  <p className="text-white/70">
                    Click the CleanRead icon in your Chrome toolbar on any article page.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Enjoy Clean Reading</h3>
                  <p className="text-white/70">
                    Instantly view the article in a distraction-free reader mode with customizable themes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Save & Share</h3>
                  <p className="text-white/70">
                    Save articles to read later or export as PDF to share with others.
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <button 
                  onClick={() => {
                    gaEvent('install_click', { location: 'demo', product: 'clean-read' })
                    window.open('https://chromewebstore.google.com/detail/cleanread/your-extension-id-here', '_blank')
                  }}
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 hover:scale-105 inline-flex items-center gap-2"
                >
                  <span>Try It Free</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Premium Reading Experience
          </h2>
          <p className="text-xl text-white/70 text-center mb-16 max-w-2xl mx-auto">
            Everything you need for focused, enjoyable reading.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/30 border border-white/10 rounded-2xl p-6 hover:border-yellow-500/30 transition-all duration-300 hover:scale-[1.02] glass-nav">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Works Everywhere You Read
          </h2>
          <p className="text-xl text-white/70 text-center mb-12 max-w-2xl mx-auto">
            CleanRead works on all major platforms where you consume content.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {supportedPlatforms.map((platform, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${platform.color} backdrop-blur-sm rounded-xl p-4 flex flex-col items-center justify-center aspect-square transition-all duration-300 hover:scale-105 glass-nav`}
              >
                <span className="text-2xl mb-2">{platform.icon}</span>
                <span className="text-white text-sm text-center font-medium">{platform.name}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-white/50 text-sm">
              Plus thousands of news sites, blogs, and content platforms
            </p>
          </div>
        </div>
      </section>

      {/* FREEMIUM SECTION */}
      <section className="py-20 px-4 bg-gradient-to-b from-yellow-900/20 via-black to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-green-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-4 border border-yellow-500/30 glass-nav">
              <span className="text-white font-bold">FREEMIUM MODEL</span>
              <span className="text-white/80 text-sm">Free forever • Upgrade when you need more</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Free to Start, Premium When You Need It
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Get all core features for free. Upgrade to Pro for unlimited saves and advanced features.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Free Plan */}
            <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-8 glass-nav">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Free</h3>
                  <p className="text-white/70">Perfect for occasional reading</p>
                </div>
                <div className="bg-green-500/20 text-green-400 font-bold px-4 py-2 rounded-lg">
                  $0
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {freeFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => {
                  gaEvent('install_click', { location: 'freemium', product: 'clean-read', plan: 'free' })
                  window.open('https://chromewebstore.google.com/detail/cleanread/your-extension-id-here', '_blank')
                }}
                className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 rounded-lg transition-colors border border-white/10 hover:border-green-500/50"
              >
                Install Free
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-b from-yellow-900/30 to-slate-900/80 border-2 border-yellow-500/50 rounded-2xl p-8 relative glass-nav">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
                  RECOMMENDED
                </span>
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Pro</h3>
                  <p className="text-white/70">For power readers & researchers</p>
                </div>
                <div className="bg-yellow-500/20 text-yellow-400 font-bold px-4 py-2 rounded-lg">
                  $4.99<span className="text-sm">/month</span>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 bg-yellow-500/20 rounded-lg px-3 py-1 mb-2">
                  <span className="text-yellow-300 text-sm font-bold">UNLIMITED</span>
                  <span className="text-white/70 text-sm">Saved Articles, PDF Exports, Custom Themes</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {proBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => {
                  gaEvent('upgrade_click', { location: 'freemium', product: 'clean-read', plan: 'pro' })
                  window.open('/upgrade?product=clean-read', '_blank')
                }}
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 hover:scale-[1.02]"
              >
                Upgrade to Pro
              </button>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-white/50 text-sm">
              Both plans include all core features • No credit card required for Free • Cancel anytime • 30-day money-back guarantee
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Loved by Readers
          </h2>
          <p className="text-xl text-white/70 text-center mb-12 max-w-2xl mx-auto">
            Join thousands of users who enjoy distraction-free reading every day.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                text: "CleanRead transformed how I read articles online. No more fighting through popups and ads.",
                author: "Sarah M.",
                role: "Research Analyst"
              },
              {
                text: "The vision accessibility mode is a game-changer for my reading experience. Thank you!",
                author: "David K.",
                role: "Accessibility Advocate"
              },
              {
                text: "I save dozens of articles weekly with CleanRead. The PDF export feature is incredible.",
                author: "Michael T.",
                role: "Pro User"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-slate-800/30 border border-white/10 rounded-2xl p-6 glass-nav">
                <div className="text-yellow-400 text-2xl mb-4">"</div>
                <p className="text-white/80 mb-6">{testimonial.text}</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-white/50 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-green-500/30 glass-nav">
            <span className="text-green-400 font-bold">100% FREE TO START</span>
            <span className="text-white/90 text-sm">All core features • No credit card</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Reading Clean Today
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Join thousands of readers who enjoy distraction-free articles every day. Free forever with all essential features included.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                gaEvent('install_click', { location: 'bottom', product: 'clean-read' })
                window.open('https://chromewebstore.google.com/detail/cleanread/your-extension-id-here', '_blank')
              }}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white text-lg font-semibold py-4 px-12 rounded-xl transition-all duration-200 hover:scale-105 inline-flex items-center gap-3"
            >
              <span>Install Free Extension</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            
            <button 
              onClick={() => {
                gaEvent('upgrade_learn_click', { location: 'bottom', product: 'clean-read' })
                document.getElementById('freemium')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-white/10 hover:bg-white/20 text-white text-lg font-semibold py-4 px-12 rounded-xl transition-colors border border-white/20 glass-nav"
            >
              See Pro Benefits
            </button>
          </div>
          
          <p className="text-white/50 text-sm mt-8">
            Free forever • All core features included • No login required • Works on all websites
          </p>
        </div>
      </section>
    </Layout>
  )
}