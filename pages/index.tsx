// pages/index.tsx
import Layout from '../components/Layout'
import Image from 'next/image'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { gaEvent } from '../lib/ga'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.98])
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const [isMascotVisible, setIsMascotVisible] = useState(false)

  useEffect(() => {
    gaEvent('page_view', { page: 'home' })
    // Show mascot after initial page load
    const timer = setTimeout(() => setIsMascotVisible(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  const NOTION_HIGHLIGHTS_URL = "https://chromewebstore.google.com/detail/notion-highlights/addpdkeebbfpcgificcaojjkbpddjhka?authuser=1&hl=en&pli=1";

  const suite = [
    { 
      name: "Notion Highlights", 
      tagline: "Flagship Researcher", 
      desc: "One-click web to Notion sync.", 
      icon: "/icons/icon128.png", 
      url: "/notion-highlights",
      color: "from-yellow-400 to-yellow-600"
    },
    { 
      name: "AutoFlow", 
      tagline: "Automation Pro", 
      desc: "Think → Text → Instantly.", 
      icon: "/icons/af-icon128.png", 
      url: "/autoflow",
      color: "from-blue-500 to-blue-700"
    },
    { 
      name: "Sightline", 
      tagline: "Visual Capture", 
      desc: "Precision screenshot & annotation.", 
      icon: "/icons/sl-icon128.png", 
      url: "/sightline",
      color: "from-emerald-500 to-[#00FF95]"
    },
    { 
      name: "Focus Dock", 
      tagline: "Tab Command", 
      desc: "Keyboard-first tab & note management.", 
      icon: "/icons/fd-icon128.png", 
      url: "/focus-dock",
      color: "from-red-500 to-red-600"
    },
    { 
      name: "Clean Read", 
      tagline: "Distraction Zero", 
      desc: "Remove ads & popups with one click.", 
      icon: "/icons/cr-icon128.png", 
      url: "/clean-read",
      color: "from-yellow-500 to-yellow-600"
    }
  ]

  return (
    <Layout>
      <Head>
        <title>The Suite | Notion Highlights & Power Tools</title>
      </Head>

      <div className="fixed inset-0 -z-10 bg-[#030303] overflow-hidden pointer-events-none">
        <div className="absolute top-[-25%] left-[-10%] w-[80%] h-[80%] bg-yellow-500/10 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150 mix-blend-overlay" />
      </div>

      {/* --- MASCOT: FLUX --- */}
      {isMascotVisible && (
        <>
          {/* Original subtle background fox */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="fixed top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none z-0"
          >
            <img
              src="https://assets.masco.dev/9c3baa/flux-4422/data-pounce-3c885951.png"
              alt="Flux Glow"
              className="w-full h-full object-contain opacity-40"
            />
          </motion.div>
          
          {/* New: Hero background fox with parallax */}
          <motion.div 
            style={{ y: parallaxY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.03 }}
            transition={{ duration: 2, delay: 1.5 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none z-0"
          >
            <img
              src="https://assets.masco.dev/9c3baa/flux-4422/data-pounce-3c885951.png"
              alt="Flux Background"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </>
      )}

      {/* --- HERO --- */}
      <motion.section style={{ opacity, scale }} className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <div className="text-center max-w-6xl">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-2xl rounded-full px-5 py-2 mb-12 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
          >
            <span className="flex h-2 w-2 rounded-full bg-yellow-500 animate-ping" />
            <span className="text-white/80 text-[10px] font-black uppercase tracking-[0.3em]">2026 Liquid Metal Collection</span>
          </motion.div>

          <h1 className="text-7xl md:text-[10rem] font-black text-white mb-8 tracking-tighter leading-[0.8] mix-blend-exclusion">
            Chrome <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500">Reinforced.</span>
          </h1>

          <p className="text-xl md:text-3xl text-white/40 mb-16 max-w-3xl mx-auto font-light leading-snug">
            Five powerful extensions. One seamless workflow. Built for those who live in the <span className="text-white">flow state</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => window.location.href = NOTION_HIGHLIGHTS_URL}
              className="relative group overflow-hidden bg-white text-black font-black py-7 px-16 rounded-2xl shadow-[0_30px_60px_rgba(255,255,255,0.1)] hover:scale-105 transition-all"
            >
              <span className="relative z-10">Get Notion Highlights</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>
            <button 
              onClick={() => document.getElementById('suite-grid')?.scrollIntoView({ behavior: 'smooth' })}
              className="glass-card-chrome text-white font-bold py-7 px-16 rounded-2xl border border-white/10 hover:bg-white/10 transition-all"
            >
              View Full Suite
            </button>
          </div>
        </div>
      </motion.section>

      {/* --- THE 5-PRODUCT GRID --- */}
      <section id="suite-grid" className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {suite.map((ext, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                onClick={() => window.location.href = ext.url}
                className="group relative cursor-pointer glass-card-chrome p-8 rounded-[2.5rem] border border-white/5 flex flex-col items-center text-center hover:border-white/20 transition-all"
              >
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${ext.color} p-4 mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                  <Image src={ext.icon} alt={ext.name} width={60} height={60} className="object-contain" />
                </div>
                <h3 className="text-white font-black text-xl mb-1">{ext.name}</h3>
                <p className="text-yellow-500/80 text-[10px] uppercase font-bold tracking-widest mb-4">{ext.tagline}</p>
                <p className="text-white/40 text-xs leading-relaxed">{ext.desc}</p>
                
                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity">
                   <span className="text-white text-xs font-bold flex items-center gap-2">Learn More <span>→</span></span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NEW HIGH-CONVERSION CONTEXT SECTION --- */}
      <section className="py-40 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card-chrome p-1 md:p-12 rounded-[4rem] border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-yellow-500/5 via-transparent to-blue-500/5 pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-tight">
                  One Stack.<br/> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">Infinite Output.</span>
                </h2>
                <p className="text-white/50 text-lg mb-8 leading-relaxed">
                  Individually, they are tools. Together, they are a <span className="text-white font-bold">productivity engine</span>. By installing the full suite, you eliminate the friction between capturing, processing, and organizing your digital life.
                </p>
                <button 
                  onClick={() => window.location.href = NOTION_HIGHLIGHTS_URL}
                  className="bg-white text-black font-black py-4 px-10 rounded-xl hover:scale-105 transition-transform"
                >
                  Start Your Collection
                </button>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {[
                  {
                    title: "Seamless Data Continuity",
                    desc: "Capture with Sightline, Clean with Clean Read, and Sync with Notion Highlights—without ever losing your cursor position.",
                    icon: "🔄"
                  },
                  {
                    title: "Exponential Speed",
                    desc: "Combine AutoFlow's automation with Focus Dock's command center to reduce 10-minute tasks into 3-second shortcuts.",
                    icon: "🚀"
                  },
                  {
                    title: "Total Context Awareness",
                    desc: "Every extension is built on the same core architecture, ensuring they work in harmony across any website or web-app.",
                    icon: "🧠"
                  },
                  {
                    title: "Workflow Autonomy",
                    desc: "Don't adapt to your browser. Make your browser adapt to you with keyboard-first navigation and visual precision.",
                    icon: "🛡️"
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group">
                    <div className="text-3xl grayscale group-hover:grayscale-0 transition-all">{item.icon}</div>
                    <div>
                      <h4 className="text-white font-bold mb-1">{item.title}</h4>
                      <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- REFINED CTA --- */}
      <section className="py-60 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-yellow-500/5 blur-[160px] rounded-full" />
        <div className="relative z-10">
          <h2 className="text-6xl md:text-9xl font-black text-white mb-12 tracking-tighter leading-none">Stay in Flow.</h2>
          <button 
            onClick={() => window.location.href = NOTION_HIGHLIGHTS_URL}
            className="bg-white text-black font-black py-8 px-24 rounded-full text-2xl shadow-[0_0_80px_rgba(255,255,255,0.2)] hover:scale-110 active:scale-95 transition-all"
          >
            Install Suite Flagship
          </button>
          <p className="mt-12 text-white/20 text-xs font-bold uppercase tracking-[0.4em]">Designed for Power Users • 2026 Edition</p>
        </div>
      </section>

      <style jsx global>{`
        body { 
          background: #030303; 
          color: white; 
          overflow-x: hidden; 
          font-family: 'Inter', sans-serif; 
        }
        .glass-card-chrome {
          background: rgba(255, 255, 255, 0.01);
          backdrop-filter: blur(40px) saturate(200%);
          -webkit-backdrop-filter: blur(40px) saturate(200%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: inset 0 1px 1px rgba(255,255,255,0.1);
        }
      `}</style>
    </Layout>
  )
}