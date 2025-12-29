// pages/notion-highlights.tsx
import Layout from '../components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { gaEvent } from '../lib/ga'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function NotionHighlightsPage() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.98])

  useEffect(() => {
    gaEvent('page_view', { page: 'notion-highlights' })
  }, [])

  const features = [
    { icon: "✨", title: "No-Auth Logic", description: "Zero logins. Zero accounts. Simply connect your Notion workspace and start clipping in seconds." },
    { icon: "🖱️", title: "Two-Click Flow", description: "The world's shortest path from finding information to saving it in your Notion database." },
    { icon: "🎯", title: "Selective Sync", description: "Save text, code blocks, or full images. Most clippers break formatting; we preserve it." },
    { icon: "⚡", title: "Zero Lag", description: "Designed as a lightweight background script so it never slows down your browsing experience." },
    { icon: "🛡️", title: "Privacy First", description: "Your data never hits our servers. It's a direct, encrypted handshake between Chrome and Notion." },
    { icon: "🎨", title: "Minimal UI", description: "A floating, non-intrusive highlight button that stays out of your way until you need it." }
  ]

  const stats = [
    { label: "Setup Time", value: "45s" },
    { label: "Auth Required", value: "0" },
    { label: "Reliability", value: "99.9%" }
  ]

  return (
    <Layout>
      <Head>
        <title>Notion Highlights | The Purest Notion Clipper</title>
      </Head>

      {/* --- NOTION HIGHLIGHTS BACKGROUND (White/Silver Liquid) --- */}
      <div className="fixed inset-0 -z-10 bg-[#080808] overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[10%] w-[70%] h-[70%] bg-white/5 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-slate-500/5 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 contrast-150 mix-blend-overlay" />
      </div>

      {/* --- HERO SECTION --- */}
      <motion.section style={{ opacity, scale }} className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <div className="text-center max-w-5xl">
          <div className="flex justify-center mb-10">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative group">
              {/* Logo Glow */}
              <div className="absolute -inset-6 bg-white/20 blur-3xl rounded-full group-hover:bg-white/30 transition-all duration-700" />
              {/* Logo Container - Removed brightness/invert filters */}
              <div className="relative glass-card-notion p-8 rounded-[2.5rem] border border-white/20 shadow-2xl">
                <Image 
                  src="/icons/icon128.png" 
                  alt="Notion Highlights" 
                  width={90} 
                  height={90} 
                  className="drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" 
                />
              </div>
            </motion.div>
          </div>

          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-5 py-1.5 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-white animate-ping" />
            <span className="text-white/80 text-[10px] font-black uppercase tracking-[0.3em]">The Only No-Auth Clipper</span>
          </div>

          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-none">
            Web to Notion. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500">Perfectly.</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/50 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            The world’s most reliable, zero-authentication web clipper. Save anything to your workspace without breaking your flow.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => window.open('https://chromewebstore.google.com/detail/notion-highlights/addpdkeebbfpcgificcaojjkbpddjhka', '_blank')}
              className="bg-white text-black font-black py-6 px-14 rounded-2xl hover:scale-105 transition-all shadow-[0_20px_40px_rgba(255,255,255,0.15)]"
            >
              Install Flagship — Free
            </button>
            <button 
              onClick={() => document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' })}
              className="glass-card-notion text-white font-bold py-6 px-14 rounded-2xl border border-white/10 hover:bg-white/5 transition-all"
            >
              See Efficiency
            </button>
          </div>
        </div>
      </motion.section>

      {/* --- FLAGSHIP STATS (The No-Auth Advantage) --- */}
      <section id="stats" className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="glass-card-notion p-1 rounded-[3.5rem] border border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
              {stats.map((s, i) => (
                <div key={i} className="p-12 text-center border-r border-white/5 last:border-0">
                  <div className="text-white font-black text-5xl mb-2 tracking-tighter">{s.value}</div>
                  <div className="text-white/30 text-[10px] uppercase font-bold tracking-[0.3em]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURES GRID --- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div 
              whileHover={{ y: -10 }}
              key={i} 
              className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-white/30 transition-all duration-500 glass-card-notion"
            >
              <div className="text-4xl mb-6 bg-white/5 w-16 h-16 flex items-center justify-center rounded-2xl border border-white/10">{f.icon}</div>
              <h3 className="text-xl font-black text-white mb-3 tracking-tight">{f.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- FINAL CONVERSION --- */}
      <section className="py-40 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card-notion p-12 md:p-20 rounded-[4rem] border border-white/5 relative overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-none">The standard<br/>for Notion.</h2>
            <p className="text-white/40 text-xl max-w-2xl mx-auto mb-12">No passwords to remember. No formatting to fix. Just pure research at the speed of thought.</p>
            <button 
              onClick={() => window.open('https://chromewebstore.google.com/detail/notion-highlights/addpdkeebbfpcgificcaojjkbpddjhka', '_blank')}
              className="bg-white text-black font-black py-6 px-20 rounded-full text-xl shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:scale-110 transition-all active:scale-95"
            >
              Add to Chrome
            </button>
          </div>
        </div>
      </section>

      <style jsx global>{`
        body { background: #080808; color: white; }
        .glass-card-notion {
          background: rgba(255, 255, 255, 0.01);
          backdrop-filter: blur(40px) saturate(200%);
          -webkit-backdrop-filter: blur(40px) saturate(200%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: inset 0 1px 1px rgba(255,255,255,0.05);
        }
      `}</style>
    </Layout>
  )
}