// pages/clean-read.tsx
import Layout from '../components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { gaEvent } from '../lib/ga'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function CleanReadPage() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.98])

  useEffect(() => {
    gaEvent('page_view', { page: 'clean-read' })
  }, [])

  const features = [
    { icon: "📖", title: "Distraction Zero", description: "Instantly strip ads, popups, and sidebars from any article with one click." },
    { icon: "🎨", title: "Custom Themes", description: "Switch between Dark, Sepia, and High-Contrast modes for eye comfort." },
    { icon: "🔍", title: "Smart Extraction", description: "AI-driven content detection that preserves images and formatting that matters." },
    { icon: "👁️", title: "Vision Accessible", description: "Adjustable font scales and line heights tailored for deep focus reading." },
    { icon: "💾", title: "Offline Save", description: "Archive clean versions of web pages to read later without an internet connection." },
    { icon: "📱", title: "AI-Platform Ready", description: "Optimized for long-form content on ChatGPT, Claude, and Substack." }
  ]

  return (
    <Layout>
      <Head>
        <title>Clean Read | Liquid Focus Mode</title>
      </Head>

      {/* --- CLEAN READ BACKGROUND (Amber/Gold Liquid) --- */}
      <div className="fixed inset-0 -z-10 bg-[#040300] overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-yellow-600/10 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-500/5 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-120 mix-blend-soft-light" />
      </div>

      {/* --- HERO SECTION --- */}
      <motion.section style={{ opacity, scale }} className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <div className="text-center max-w-5xl">
          <div className="flex justify-center mb-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative group"
            >
              <div className="absolute -inset-6 bg-yellow-500/20 blur-3xl rounded-full group-hover:bg-yellow-500/30 transition-all duration-700" />
              <div className="relative glass-card-clean p-8 rounded-[2.5rem] border border-white/10 shadow-2xl">
                <Image src="/icons/cr-icon128.png" alt="Clean Read" width={90} height={90} className="drop-shadow-[0_0_20px_rgba(234,179,8,0.4)]" />
              </div>
            </motion.div>
          </div>

          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-5 py-1.5 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-yellow-500 animate-ping" />
            <span className="text-white/80 text-[10px] font-black uppercase tracking-[0.3em]">Pure Content. Zero Noise.</span>
          </div>

          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-none">
            Crystal Clear <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-yellow-100 to-yellow-500">Reading.</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/50 mb-12 max-w-2xl mx-auto font-light">
            Strip away the chaos. Focus on the words that matter with our high-performance liquid reader.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => window.open('https://chromewebstore.google.com/detail/cleanread/lnoafnhehhpjkmephecladkdeaimkmpb?authuser=0&hl=en', '_blank')}
              className="bg-white text-black font-black py-6 px-14 rounded-2xl hover:scale-105 transition-all shadow-[0_20px_40px_rgba(234,179,8,0.2)]"
            >
              Add to Chrome — It's Free
            </button>
            <button 
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="glass-card-clean text-white font-bold py-6 px-14 rounded-2xl border border-white/10 hover:bg-white/5 transition-all"
            >
              View Features
            </button>
          </div>
        </div>
      </motion.section>

      {/* --- FEATURES GRID --- */}
      <section id="features" className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div 
              whileHover={{ y: -10 }}
              key={i} 
              className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-yellow-500/30 transition-all duration-500 glass-card-clean"
            >
              <div className="text-4xl mb-6 bg-yellow-500/10 w-16 h-16 flex items-center justify-center rounded-2xl border border-yellow-500/20">{f.icon}</div>
              <h3 className="text-xl font-black text-white mb-3 tracking-tight">{f.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- FINAL CONVERSION --- */}
      <section className="py-40 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card-clean p-12 md:p-20 rounded-[4rem] border border-white/5 relative overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-yellow-500/5 to-transparent pointer-events-none" />
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-none">Read Without<br/>Interruption.</h2>
            <p className="text-white/40 text-xl max-w-2xl mx-auto mb-12">Join thousands of users who have reclaimed their attention span. Clean Read is the final step in your research workflow.</p>
            <button 
              onClick={() => window.open('https://chromewebstore.google.com/detail/cleanread/lnoafnhehhpjkmephecladkdeaimkmpb?authuser=0&hl=en', '_blank')}
              className="bg-yellow-500 text-black font-black py-6 px-20 rounded-full text-xl shadow-[0_0_50px_rgba(234,179,8,0.3)] hover:scale-110 transition-all active:scale-95"
            >
              Get Clean Read Free
            </button>
          </div>
        </div>
      </section>

      <style jsx global>{`
        body { background: #040300; color: white; }
        .glass-card-clean {
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