// pages/sightline.tsx
import Layout from '../components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { gaEvent } from '../lib/ga'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function SightlinePage() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.98])

  useEffect(() => {
    gaEvent('page_view', { page: 'sightline' })
  }, [])

  const features = [
    { icon: "📸", title: "Instant Capture", description: "Capture visible tabs, select specific regions, or full-page scrolls with zero lag." },
    { icon: "🎨", title: "Precision Editor", description: "Annotate instantly with liquid arrows, numbered steps, and professional blur tools." },
    { icon: "⚡", title: "Chrome Optimized", description: "Built on a high-speed capture pipeline for pixel-perfect clarity at any zoom level." },
    { icon: "✂️", title: "Smart Crop", description: "Intelligent handle-based cropping for manual adjustments and framing." },
    { icon: "📋", title: "One-Click Copy", description: "Skip the 'Save As' dialog. Copy your annotated masterpiece directly to clipboard." },
    { icon: "🎯", title: "Region Lock", description: "Drag-to-select regions with visual guides and pixel-dimension overlays." }
  ]

  const editorTools = [
    { icon: "➡️", name: "Dynamic Arrows", desc: "Guide focus with liquid vector curves." },
    { icon: "⬜", name: "Smart Shapes", desc: "Highlight UI components with precision." },
    { icon: "1️⃣", name: "Numbered Steps", desc: "Sequence workflows for clear documentation." },
    { icon: "🌫️", name: "Privacy Blur", desc: "Obfuscate sensitive PII data instantly." }
  ]

  return (
    <Layout>
      <Head>
        <title>Sightline | Liquid Visual Capture</title>
      </Head>

      {/* --- SIGHTLINE BACKGROUND (Emerald/Mint Liquid) --- */}
      <div className="fixed inset-0 -z-10 bg-[#000503] overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-emerald-500/10 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#00FF95]/5 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150 mix-blend-overlay" />
      </div>

      {/* --- HERO SECTION --- */}
      <motion.section style={{ opacity, scale }} className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <div className="text-center max-w-5xl">
          <div className="flex justify-center mb-10">
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative group">
              <div className="absolute -inset-6 bg-emerald-500/20 blur-3xl rounded-full group-hover:bg-emerald-500/40 transition-all duration-700" />
              <div className="relative glass-card-sightline p-8 rounded-[2.5rem] border border-white/10 shadow-2xl">
                <Image src="/icons/sl-icon128.png" alt="Sightline" width={90} height={90} className="drop-shadow-[0_0_20px_rgba(16,185,129,0.5)]" />
              </div>
            </motion.div>
          </div>

          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-5 py-1.5 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-[#00FF95] animate-ping" />
            <span className="text-white/80 text-[10px] font-black uppercase tracking-[0.3em]">Pixel-Perfect Visual Comms</span>
          </div>

          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-none">
            See. Capture. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-emerald-100 to-[#00FF95]">Communicate.</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/50 mb-12 max-w-2xl mx-auto font-light">
            Capture and annotate anything on your screen with a high-performance visual toolkit.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => window.open('https://chromewebstore.google.com/detail/sightline/addpdkeebbfpcgificcaojjkbpddjhka', '_blank')}
              className="bg-white text-black font-black py-6 px-14 rounded-2xl hover:scale-105 transition-all shadow-[0_20px_40px_rgba(0,255,149,0.2)]"
            >
              Add to Chrome — It's Free
            </button>
          </div>
        </div>
      </motion.section>

      {/* --- PRO ANNOTATION ENGINE (Clean Wide Panel) --- */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-white/30 font-bold uppercase tracking-[0.4em] text-[10px] mb-4">The Toolkit</h3>
            <h2 className="text-4xl font-black text-white tracking-tighter">Pro Annotation Engine</h2>
          </div>
          
          <div className="glass-card-sightline p-2 rounded-[3.5rem] border border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
              {editorTools.map((tool, i) => (
                <div key={i} className="group relative p-10 rounded-[2.8rem] bg-white/[0.01] hover:bg-emerald-500/[0.05] border border-transparent hover:border-emerald-500/20 transition-all duration-500 overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 text-white/[0.02] text-6xl font-black group-hover:text-emerald-500/5 transition-colors">{i + 1}</div>
                  <div className="text-4xl mb-6 bg-white/5 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all">
                    {tool.icon}
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2 group-hover:text-emerald-400 transition-colors">{tool.name}</h4>
                  <p className="text-white/40 text-sm leading-relaxed">{tool.desc}</p>
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
              className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-all duration-500 glass-card-sightline"
            >
              <div className="text-4xl mb-6 bg-emerald-500/10 w-16 h-16 flex items-center justify-center rounded-2xl border border-emerald-500/20">{f.icon}</div>
              <h3 className="text-xl font-black text-white mb-3 tracking-tight">{f.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- FINAL CONVERSION --- */}
      <section className="py-40 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card-sightline p-12 md:p-20 rounded-[4rem] border border-white/5 relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-emerald-500/5 to-transparent pointer-events-none" />
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-none">Precision is<br/>everything.</h2>
            <p className="text-white/40 text-xl max-w-2xl mx-auto mb-12">Stop sending confusing screenshots. Start sending clarity with Sightline’s precision annotation engine.</p>
            <button 
              onClick={() => window.open('https://chromewebstore.google.com/detail/sightline/addpdkeebbfpcgificcaojjkbpddjhka', '_blank')}
              className="bg-emerald-500 text-white font-black py-6 px-20 rounded-full text-xl shadow-[0_0_50px_rgba(16,185,129,0.3)] hover:scale-110 transition-all active:scale-95"
            >
              Get Sightline Free
            </button>
          </div>
        </div>
      </section>

      <style jsx global>{`
        body { background: #000503; color: white; }
        .glass-card-sightline {
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