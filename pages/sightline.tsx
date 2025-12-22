// pages/sightline.tsx
import Layout from '../components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { gaEvent } from '../lib/ga'

export default function SightlinePage() {
  useEffect(() => {
    gaEvent('page_view', { page: 'sightline' })
  }, [])

  const features = [
    {
      icon: "📸",
      title: "Instant Capture",
      description: "Capture visible tab, select regions, or crop with one click"
    },
    {
      icon: "🎨",
      title: "Built-in Editor",
      description: "Annotate with arrows, rectangles, text, numbered steps, and blur"
    },
    {
      icon: "⚡",
      title: "Fast & Lightweight",
      description: "Optimized capture pipeline with no performance lag"
    },
    {
      icon: "✂️",
      title: "Precision Crop",
      description: "Manual crop tool with handles for pixel-perfect editing"
    },
    {
      icon: "📋",
      title: "One-Click Copy",
      description: "Copy annotated screenshots directly to clipboard"
    },
    {
      icon: "🎯",
      title: "Region Selection",
      description: "Drag-to-select any area with visual guides"
    }
  ]

  const editorTools = [
    { icon: "➡️", name: "Arrows", desc: "Point to important areas" },
    { icon: "⬜", name: "Rectangles", desc: "Highlight sections" },
    { icon: "🔤", name: "Text", desc: "Add labels & notes" },
    { icon: "🔢", name: "Numbered Steps", desc: "Create tutorials" },
    { icon: "🎭", name: "Blur Tool", desc: "Hide sensitive info" },
    { icon: "✂️", name: "Crop Tool", desc: "Trim to focus area" }
  ]

  const proBenefits = [
    "Unlimited screenshots (Free: 20/month)",
    "No watermarks on exports",
    "All annotation tools unlocked",
    "Priority feature access",
    "Faster support response",
    "Custom color palettes",
    "Higher quality exports",
    "More stroke options",
    "Advanced blur controls",
    "Future Pro-only features"
  ]

  const freeFeatures = [
    "20 free screenshots per month",
    "Basic annotation tools",
    "Text, arrows, rectangles",
    "Numbered steps",
    "Blur tool",
    "Crop tool",
    "Region selection",
    "Copy to clipboard",
    "PNG/JPEG export",
    "All core editing features"
  ]

  const shortcuts = [
    { keys: ["⌘", ".", "S"], action: "Capture visible" },
    { keys: ["⌘", ".", "R"], action: "Select region" },
    { keys: ["⌘", ".", "C"], action: "Capture & crop" },
    { keys: ["⌘", "Z"], action: "Undo" },
    { keys: ["⌘", "⇧", "Z"], action: "Redo" },
    { keys: ["V"], action: "Select tool" },
    { keys: ["A"], action: "Arrow tool" },
    { keys: ["T"], action: "Text tool" },
    { keys: ["N"], action: "Step tool" },
    { keys: ["X"], action: "Crop tool" }
  ]

  return (
    <Layout>
      <Head>
        <title>Sightline - Smart Screenshot & Annotation Tool for Chrome</title>
        <meta name="description" content="Capture, annotate, and share screenshots instantly. Free Chrome extension with built-in editor and 20 screenshots/month." />
        <meta property="og:title" content="Sightline - Smart Screenshot & Annotation Tool" />
        <meta property="og:description" content="One-click screenshots with built-in annotation editor. Free Chrome extension." />
        <meta property="og:image" content="https://sightline.app/og-image.png" />
      </Head>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-16 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="text-center max-w-4xl">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-[#00FF95] rounded-2xl flex items-center justify-center shadow-2xl shadow-emerald-500/30 overflow-hidden">
                <Image 
                  src="/icons/sl-icon128.png" 
                  alt="Sightline Logo"
                  width={96}
                  height={96}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Sightline
          </h1>
          
          <p className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-[#00FF95] font-semibold mb-6">
            Screenshots Made Simple
          </p>
          
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Capture, annotate, and share screenshots instantly. Built-in editor, no external apps needed.
          </p>
          
          {/* FREE Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-emerald-500/30">
            <span className="text-emerald-400 font-bold">FREE</span>
            <span className="text-white/90 text-sm">20 screenshots/month • No credit card</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={() => {
                gaEvent('install_click', { location: 'hero', product: 'sightline' })
                window.open('https://chromewebstore.google.com/detail/sightline/your-extension-id', '_blank')
              }}
              className="bg-gradient-to-r from-emerald-500 to-[#00FF95] hover:from-emerald-600 hover:to-emerald-400 text-white text-lg font-semibold py-4 px-12 rounded-xl transition-all duration-200 hover:scale-105"
            >
              Install Free Extension
            </button>
            
            <button 
              onClick={() => {
                gaEvent('watch_demo_click', { location: 'hero', product: 'sightline' })
                document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-slate-800 hover:bg-slate-700 text-white text-lg font-semibold py-4 px-12 rounded-xl transition-colors border border-slate-700 hover:border-emerald-500/50"
            >
              Watch Demo
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400">20</div>
              <div className="text-sm text-white/60">Free/month</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400">0</div>
              <div className="text-sm text-white/60">Learning curve</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400">1</div>
              <div className="text-sm text-white/60">Click capture</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Everything You Need, Built In
          </h2>
          <p className="text-xl text-white/70 text-center mb-16 max-w-2xl mx-auto">
            No more switching between capture tools and editors. Sightline does it all.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-emerald-500/30 transition-colors">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editor Tools Demo */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-800 to-slate-900" id="demo">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Built-in Editor Tools
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Annotate right after capture. No separate apps needed.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {editorTools.map((tool, index) => (
              <div key={index} className="bg-slate-800/30 border border-slate-700 rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">{tool.icon}</div>
                <div className="font-semibold text-white mb-1">{tool.name}</div>
                <div className="text-sm text-white/60">{tool.desc}</div>
              </div>
            ))}
          </div>

          {/* Editor Mockup */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-[#00FF95] rounded-lg flex items-center justify-center">
                  <Image 
                    src="/icons/sl-icon128.png" 
                    alt="Sightline"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>
                <div className="text-white font-semibold">Sightline Editor</div>
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500/50 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500/50 rounded-full"></div>
                <div className="w-3 h-3 bg-emerald-500/50 rounded-full"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-slate-900 border border-slate-700 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-4">📸</div>
                    <div className="text-white/70">Screenshot Preview</div>
                    <div className="text-sm text-white/50 mt-2">Annotated with arrows, text, and highlights</div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="space-y-4">
                  <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                    <div className="text-white font-semibold mb-2">Toolbar</div>
                    <div className="flex flex-wrap gap-2">
                      {['V', 'A', 'R', 'T', 'N', 'B', 'X'].map((tool) => (
                        <div key={tool} className="w-8 h-8 bg-slate-800 border border-slate-700 rounded flex items-center justify-center text-white/80 text-sm">
                          {tool}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                    <div className="text-white font-semibold mb-2">Colors</div>
                    <div className="flex gap-2">
                      {['#00FF95', '#FF3B30', '#FF9500', '#007AFF', '#5856D6'].map((color) => (
                        <div key={color} className="w-6 h-6 rounded-full border border-slate-700" style={{backgroundColor: color}}></div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                    <div className="text-white font-semibold mb-2">Export</div>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-slate-800 hover:bg-slate-700 text-white py-2 rounded text-sm transition-colors">
                        Copy
                      </button>
                      <button className="flex-1 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 py-2 rounded text-sm transition-colors">
                        Export
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing - FREEMIUM */}
      <section className="py-20 px-4 bg-gradient-to-b from-emerald-900/20 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/20 to-green-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-4 border border-emerald-500/30">
              <span className="text-white font-bold">FREEMIUM MODEL</span>
              <span className="text-white/80 text-sm">Free forever • Upgrade when you need more</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Start Free, Upgrade When You're Hooked
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Get 20 screenshots/month free. Upgrade to Pro for unlimited captures and no watermarks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Free Plan */}
            <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Free</h3>
                  <p className="text-white/70">Perfect for casual use</p>
                </div>
                <div className="bg-emerald-500/20 text-emerald-400 font-bold px-4 py-2 rounded-lg">
                  $0
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {freeFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => {
                  gaEvent('install_click', { location: 'pricing', product: 'sightline', plan: 'free' })
                  window.open('https://chromewebstore.google.com/detail/sightline/your-extension-id', '_blank')
                }}
                className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 rounded-lg transition-colors border border-slate-700 hover:border-emerald-500/50"
              >
                Install Free
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-b from-emerald-900/30 to-slate-900/80 border-2 border-emerald-500/50 rounded-2xl p-8 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-emerald-500 to-[#00FF95] text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
                  MOST POPULAR
                </span>
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Pro</h3>
                  <p className="text-white/70">For power users & teams</p>
                </div>
                <div className="bg-emerald-500/20 text-emerald-400 font-bold px-4 py-2 rounded-lg">
                  $4.99<span className="text-sm">/month</span>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 bg-emerald-500/20 rounded-lg px-3 py-1 mb-2">
                  <span className="text-emerald-300 text-sm font-bold">UNLIMITED</span>
                  <span className="text-white/70 text-sm">Screenshots • No Watermarks</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {proBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => {
                  gaEvent('upgrade_click', { location: 'pricing', product: 'sightline', plan: 'pro' })
                  window.open('/upgrade?product=sightline', '_blank')
                }}
                className="w-full bg-gradient-to-r from-emerald-500 to-[#00FF95] hover:from-emerald-600 hover:to-emerald-400 text-white font-semibold py-3 rounded-lg transition-all duration-200 hover:scale-[1.02]"
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
            Simple & Powerful Workflow
          </h2>
          
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl w-16 h-16 flex items-center justify-center flex-shrink-0">
                <div className="text-2xl">📸</div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">1. Click to Capture</h3>
                <p className="text-white/70">
                  Click the extension icon or use keyboard shortcuts (⌘.S, ⌘.R, ⌘.C) to capture visible tab, select region, or capture for cropping.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl w-16 h-16 flex items-center justify-center flex-shrink-0">
                <div className="text-2xl">🎨</div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">2. Annotate Instantly</h3>
                <p className="text-white/70">
                  The editor opens automatically. Add arrows, text, numbers, blur sensitive areas, or crop to focus.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl w-16 h-16 flex items-center justify-center flex-shrink-0">
                <div className="text-2xl">📤</div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">3. Share or Save</h3>
                <p className="text-white/70">
                  Copy to clipboard or export as PNG/JPEG. Free version adds watermark, Pro exports clean.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keyboard Shortcuts */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Keyboard First
          </h2>
          <p className="text-xl text-white/70 text-center mb-12 max-w-2xl mx-auto">
            Work faster with these keyboard shortcuts (Mac/Windows compatible)
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {shortcuts.map((shortcut, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div className="text-white/80">{shortcut.action}</div>
                  <div className="flex items-center gap-1">
                    {shortcut.keys.map((key, keyIndex) => (
                      <kbd key={keyIndex} className="bg-slate-900 border border-slate-700 px-2 py-1 rounded text-sm font-mono text-white/90">
                        {key}
                      </kbd>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-emerald-500/30">
            <span className="text-emerald-400 font-bold">100% FREE TO START</span>
            <span className="text-white/90 text-sm">20 screenshots/month • No credit card</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Try Sightline Free Today
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Join thousands who use Sightline for bug reports, tutorials, documentation, and design feedback.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                gaEvent('install_click', { location: 'bottom', product: 'sightline' })
                window.open('https://chromewebstore.google.com/detail/sightline/your-extension-id', '_blank')
              }}
              className="bg-gradient-to-r from-emerald-500 to-[#00FF95] hover:from-emerald-600 hover:to-emerald-400 text-white text-lg font-semibold py-4 px-12 rounded-xl transition-all duration-200 hover:scale-105 inline-flex items-center gap-3"
            >
              <span>Install Free Extension</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            
            <button 
              onClick={() => {
                gaEvent('demo_click', { location: 'bottom', product: 'sightline' })
                document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-slate-800 hover:bg-slate-700 text-white text-lg font-semibold py-4 px-12 rounded-xl transition-colors border border-slate-700 hover:border-emerald-500/50"
            >
              See Features
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