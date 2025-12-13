// pages/focus-dock.tsx
import Layout from '../components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { gaEvent } from '../lib/ga'

export default function FocusDockPage() {
  useEffect(() => {
    gaEvent('page_view', { page: 'focus-dock' })
  }, [])

  const features = [
    {
      icon: "⚡",
      title: "Universal Search",
      description: "One shortcut (⌘+.) to search tabs, bookmarks, history, and notes"
    },
    {
      icon: "📝",
      title: "Quick Notes",
      description: "Type /note to save thoughts without leaving your tab"
    },
    {
      icon: "🏷️",
      title: "Tab Management",
      description: "Organize tabs with groups and save workspaces"
    },
    {
      icon: "📚",
      title: "Reading List",
      description: "Save articles to read later with ⌘+Shift+S"
    },
    {
      icon: "🔍",
      title: "Fuzzy Search",
      description: "Smart search that works even with typos"
    },
    {
      icon: "⌨️",
      title: "Keyboard First",
      description: "Navigate everything with keyboard shortcuts"
    }
  ]

  const commands = [
    { command: "/note", desc: "Save quick notes" },
    { command: "/notes", desc: "View all notes" },
    { command: "/save", desc: "Save workspace" },
    { command: "/read", desc: "Reading list" },
    { command: "/groups", desc: "Tab groups" },
    { command: "/help", desc: "All commands" }
  ]

  const freeFeatures = [
    "Full search across tabs, bookmarks, history",
    "Quick notes with /note command",
    "Tab management and groups",
    "Reading list with ⌘+Shift+S",
    "Fuzzy search with typos",
    "Keyboard shortcuts",
    "Clipboard history",
    "All core features included"
  ]

  const proBenefits = [
    "Unlimited notes (Free: 5 notes)",
    "Unlimited workspaces (Free: 1 workspace)",
    "Unlimited reading list (Free: 10 items)",
    "100 clipboard items (Free: 3 items)",
    "100 tab thumbnails (Free: 3 thumbnails)",
    "Smart auto-grouping by domain",
    "Priority feature access",
    "Priority email support",
    "Future Pro-only features"
  ]

  return (
    <Layout>
      <Head>
        <title>Focus Dock - Universal Launcher for Chrome</title>
        <meta name="description" content="One shortcut to search everything: tabs, bookmarks, history, notes, and workspaces. Free Chrome extension." />
        <meta property="og:title" content="Focus Dock - Universal Launcher for Chrome" />
        <meta property="og:description" content="Press ⌘+. to search everything. Free Chrome extension." />
        <meta property="og:image" content="https://notionhighlights.com/icons/fd-icon128.png" />
      </Head>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-16 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="text-center max-w-4xl">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 rounded-2xl flex items-center justify-center shadow-2xl shadow-red-500/30 overflow-hidden">
                <Image 
                  src="/icons/fd-icon128.png" 
                  alt="Focus Dock Logo"
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Focus Dock
          </h1>
          
          <p className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-300 font-semibold mb-6">
            Universal Chrome Launcher
          </p>
          
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Press ⌘+. to search everything: tabs, bookmarks, history, notes, and workspaces.
          </p>
          
          {/* FREE Badge */}
          <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-green-500/30">
            <span className="text-green-400 font-bold">FREE</span>
            <span className="text-white/90 text-sm">All core features included • No credit card</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={() => {
                gaEvent('install_click', { location: 'hero', product: 'focus-dock' })
                window.open('https://chromewebstore.google.com/detail/focus-dock/your-extension-id-here', '_blank')
              }}
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white text-lg font-semibold py-4 px-12 rounded-xl transition-all duration-200 hover:scale-105"
            >
              Install Free Extension
            </button>
          </div>

          {/* Quick Commands Preview */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 max-w-2xl mx-auto">
            <p className="text-white/70 text-sm mb-4">Try commands like:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {commands.map((cmd, idx) => (
                <div key={idx} className="bg-slate-900/80 border border-slate-700 rounded-lg px-4 py-2">
                  <code className="text-red-400 font-mono text-sm">{cmd.command}</code>
                  <span className="text-white/50 text-xs ml-2">{cmd.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Everything in One Place
          </h2>
          <p className="text-xl text-white/70 text-center mb-16 max-w-2xl mx-auto">
            One keyboard shortcut to access everything you need.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-red-500/30 transition-colors">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREEMIUM SECTION - HIGHLIGHTED */}
      <section className="py-20 px-4 bg-gradient-to-b from-red-900/20 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/20 to-green-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-4 border border-red-500/30">
              <span className="text-white font-bold">FREEMIUM MODEL</span>
              <span className="text-white/80 text-sm">Free forever • Upgrade when you need more</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Free to Start, Unlimited When You Need It
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Get all core features for free. Upgrade to Pro for unlimited usage and advanced features.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Free Plan */}
            <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Free</h3>
                  <p className="text-white/70">Perfect for getting started</p>
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
                  gaEvent('install_click', { location: 'freemium', product: 'focus-dock', plan: 'free' })
                  window.open('https://chromewebstore.google.com/detail/focus-dock/your-extension-id-here', '_blank')
                }}
                className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 rounded-lg transition-colors border border-slate-700 hover:border-green-500/50"
              >
                Install Free
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-b from-red-900/30 to-slate-900/80 border-2 border-red-500/50 rounded-2xl p-8 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
                  RECOMMENDED
                </span>
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Pro</h3>
                  <p className="text-white/70">For power users & teams</p>
                </div>
                <div className="bg-red-500/20 text-red-400 font-bold px-4 py-2 rounded-lg">
                  $4.99<span className="text-sm">/month</span>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 bg-red-500/20 rounded-lg px-3 py-1 mb-2">
                  <span className="text-red-300 text-sm font-bold">UNLIMITED</span>
                  <span className="text-white/70 text-sm">Notes, Workspaces, Reading List</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {proBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => {
                  gaEvent('upgrade_click', { location: 'freemium', product: 'focus-dock', plan: 'pro' })
                  window.open('/upgrade?product=focus-dock', '_blank')
                }}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 hover:scale-[1.02]"
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

      {/* How It Works */}
      <section className="py-20 px-4 bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Simple & Powerful
          </h2>
          
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-red-500/10 border border-red-500/20 rounded-2xl w-16 h-16 flex items-center justify-center flex-shrink-0">
                <div className="text-2xl">⌘</div>
                <div className="text-xl">.</div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">Press ⌘+.</h3>
                <p className="text-white/70">
                  Open Focus Dock from any webpage. The launcher appears instantly, ready for your search.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-red-500/10 border border-red-500/20 rounded-2xl w-16 h-16 flex items-center justify-center flex-shrink-0">
                <div className="text-2xl">/</div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">Type Commands</h3>
                <p className="text-white/70">
                  Type to search, or use / commands for specific actions like notes, workspaces, or tab groups.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-red-500/10 border border-red-500/20 rounded-2xl w-16 h-16 flex items-center justify-center flex-shrink-0">
                <div className="text-2xl">↵</div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">Press Enter</h3>
                <p className="text-white/70">
                  Execute your command or open your selection. Everything happens instantly without page reloads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Emphasizing FREE */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-green-500/30">
            <span className="text-green-400 font-bold">100% FREE TO START</span>
            <span className="text-white/90 text-sm">All core features • No credit card</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Try Focus Dock Free Today
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Join thousands of users who use Focus Dock daily. Free forever with all essential features included.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                gaEvent('install_click', { location: 'bottom', product: 'focus-dock' })
                window.open('https://chromewebstore.google.com/detail/focus-dock/your-extension-id-here', '_blank')
              }}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-lg font-semibold py-4 px-12 rounded-xl transition-all duration-200 hover:scale-105 inline-flex items-center gap-3"
            >
              <span>Install Free Extension</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            
            <button 
              onClick={() => {
                gaEvent('upgrade_learn_click', { location: 'bottom', product: 'focus-dock' })
                // Scroll to freemium section
                document.getElementById('freemium')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-slate-800 hover:bg-slate-700 text-white text-lg font-semibold py-4 px-12 rounded-xl transition-colors border border-slate-700 hover:border-red-500/50"
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