// pages/focus-dock.tsx
import Layout from '../components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { gaEvent } from '../lib/ga'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function FocusDockPage() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.98])

  useEffect(() => {
    gaEvent('page_view', { page: 'focus-dock' })
  }, [])

  const features = [
    { icon: "⚡", title: "Universal Search", description: "One shortcut (⌘+.) to search tabs, bookmarks, history, and notes." },
    { icon: "📝", title: "Quick Notes", description: "Type /note to save thoughts without ever leaving your current tab." },
    { icon: "🏷️", title: "Tab Management", description: "Organize chaos into groups and save entire workspaces instantly." },
    { icon: "📚", title: "Reading List", description: "Save articles to read later with a simple ⌘+Shift+S." },
    { icon: "🔍", title: "Fuzzy Search", description: "Smart, liquid search that finds what you need even with typos." },
    { icon: "⌨️", title: "Keyboard First", description: "Designed for power users. Navigate everything without a mouse." }
  ]

  const commands = [
    { command: "/note", desc: "Save quick notes" },
    { command: "/notes", desc: "View all notes" },
    { command: "/save", desc: "Save workspace" },
    { command: "/tabs", desc: "List all tabs" }
  ]

  return (
    <Layout>
      <Head>
        <title>Focus Dock | Liquid Command Center</title>
      </Head>

      {/* --- FOCUS DOCK BACKGROUND (Crimson Liquid) --- */}
      <div className="fixed inset-0 -z-10 bg-[#050000] overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-red-600/10 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-slate-900/40 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150 mix-blend-overlay" />
      </div>

      {/* --- HERO SECTION --- */}
      <motion.section style={{ opacity, scale }} className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <div className="text-center max-w-5xl">
          <div className="flex justify-center mb-10">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative group"
            >
              <div className="absolute -inset-6 bg-red-600/20 blur-3xl rounded-full group-hover:bg-red-600/40 transition-all duration-700" />
              <div className="relative glass-card-focus p-8 rounded-[2.5rem] border border-white/10 shadow-2xl">
                <Image src="/icons/fd-icon128.png" alt="Focus Dock" width={90} height={90} className="drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]" />
              </div>
            </motion.div>
          </div>

          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-5 py-1.5 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-red-500 animate-ping" />
            <span className="text-white/80 text-[10px] font-black uppercase tracking-[0.3em]">Keyboard-First Efficiency</span>
          </div>

          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-none">
            Your Browser <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-red-200 to-red-600">Command Dock.</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/50 mb-12 max-w-2xl mx-auto font-light">
            Search tabs, take notes, and manage your digital workspace at the speed of thought.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => window.open('https://chromewebstore.google.com/detail/focus-dock/nplkfbdilfejbkgopdgcagimkkmchfal?authuser=0&hl=en', '_blank')}
              className="bg-white text-black font-black py-6 px-14 rounded-2xl hover:scale-105 transition-all shadow-[0_20px_40px_rgba(220,38,38,0.2)]"
            >
              Add to Chrome
            </button>
            <button 
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="glass-card-focus text-white font-bold py-6 px-14 rounded-2xl border border-white/10 hover:bg-white/5 transition-all"
            >
              Master the Commands
            </button>
          </div>
        </div>
      </motion.section>

      {/* --- COMMANDS PREVIEW --- */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card-focus rounded-[3rem] border border-white/5 overflow-hidden shadow-2xl">
            <div className="bg-white/5 px-8 py-4 border-b border-white/5 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
              </div>
              <span className="text-white/20 text-[10px] font-bold uppercase tracking-widest ml-4">Focus Terminal v1.0</span>
            </div>
            <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              {commands.map((cmd, i) => (
                <div key={i} className="flex items-center justify-between group">
                  <code className="text-red-400 font-mono text-lg group-hover:text-white transition-colors">{cmd.command}</code>
                  <span className="text-white/30 text-sm italic">{cmd.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURES GRID --- */}
      <section id="features" className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div 
              whileHover={{ y: -10 }}
              key={i} 
              className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-red-500/30 transition-all duration-500 glass-card-focus"
            >
              <div className="text-4xl mb-6 bg-red-600/10 w-16 h-16 flex items-center justify-center rounded-2xl border border-red-500/20">{f.icon}</div>
              <h3 className="text-xl font-black text-white mb-3 tracking-tight">{f.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CONVERSION HUB --- */}
      <section className="py-40 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card-focus p-12 md:p-20 rounded-[4rem] border border-white/5 relative overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-600/5 to-transparent pointer-events-none" />
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-none">Stop Searching.<br/>Start Finding.</h2>
            <p className="text-white/40 text-xl max-w-2xl mx-auto mb-12">Focus Dock is the central nervous system of your browser. Install it now and never lose a tab again.</p>
            <button 
              onClick={() => window.open('https://chromewebstore.google.com/detail/focus-dock/nplkfbdilfejbkgopdgcagimkkmchfal?authuser=0&hl=en', '_blank')}
              className="bg-red-600 text-white font-black py-6 px-20 rounded-full text-xl shadow-[0_0_50px_rgba(220,38,38,0.3)] hover:scale-110 transition-all active:scale-95"
            >
              Get Focus Dock Free
            </button>
          </div>
        </div>
      </section>

      <style jsx global>{`
        body { background: #050000; color: white; }
        .glass-card-focus {
          background: rgba(255, 255, 255, 0.01);
          backdrop-filter: blur(40px) saturate(200%);
          -webkit-backdrop-filter: blur(40px) saturate(200%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: inset 0 1px 1px rgba(255,255,255,0.05);
        }
      `}</style>
    </Layout>
  )
}