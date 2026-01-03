// pages/autoflow.tsx
import Layout from '../components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { gaEvent } from '../lib/ga'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function AutoFlowPage() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.98])

  useEffect(() => {
    gaEvent('page_view', { page: 'autoflow' })
  }, [])

  const features = [
    { icon: "⚡", title: "Instant Snippets", description: "Transform short triggers into complex text blocks, emails, or code instantly." },
    { icon: "🔄", title: "Cross-Platform", description: "Works everywhere you type: Browser, Slack, Discord, and your favorite IDEs." },
    { icon: "📂", title: "Dynamic Variables", description: "Inject dates, clipboard content, or custom inputs into your workflows on the fly." },
    { icon: "🚀", title: "Workflow Macros", description: "Chain multiple actions together to automate repetitive administrative tasks." },
    { icon: "☁️", title: "Cloud Sync", description: "Your snippets are encrypted and synced across all your devices in real-time." },
    { icon: "🤖", title: "AI Expansion", description: "Integrate with LLMs to summarize or rewrite text directly from your cursor." }
  ]

  const automations = [
    { trigger: "/prompt", name: "AI Master Prompt", action: "Insert complex 500-word System Persona & Formatting instructions for ChatGPT/Claude." },
    { trigger: "/social", name: "Multi-Platform Post", action: "Drop pre-formatted LinkedIn/Twitter threads with optimized line breaks and tags." },
    { trigger: "/reply", name: "Outbound Sales Flow", action: "Insert personalized cold outreach sequence with dynamic {name} and {company} placeholders." },
    { trigger: "/code", name: "React Boilerplate", action: "Instantly expand full functional component structures with imports and standard hooks." },
    { trigger: "/meet", name: "Agenda Builder", action: "Generate a structured meeting agenda template with auto-filled date and attendee list." }
  ]

  return (
    <Layout>
      <Head>
        <title>AutoFlow | Liquid Text Automation</title>
      </Head>

      {/* --- AUTOFLOW BACKGROUND (Cobalt/Azure Liquid) --- */}
      <div className="fixed inset-0 -z-10 bg-[#000205] overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-blue-600/10 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-500/5 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-125 mix-blend-overlay" />
      </div>

      {/* --- HERO SECTION --- */}
      <motion.section style={{ opacity, scale }} className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <div className="text-center max-w-5xl">
          <div className="flex justify-center mb-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative group">
              <div className="absolute -inset-6 bg-blue-500/20 blur-3xl rounded-full group-hover:bg-blue-500/30 transition-all duration-700" />
              <div className="relative glass-card-flow p-8 rounded-[2.5rem] border border-white/10 shadow-2xl">
                <Image src="/icons/af-icon128.png" alt="AutoFlow" width={90} height={90} className="drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]" />
              </div>
            </motion.div>
          </div>

          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-5 py-1.5 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-ping" />
            <span className="text-white/80 text-[10px] font-black uppercase tracking-[0.3em]">Think → Text → Instantly</span>
          </div>

          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-none">
            Automate Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-100 to-blue-600">Workflow.</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/50 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            The fastest text expansion engine on the planet. Save hours every week by automating everything you type.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => window.open('https://chromewebstore.google.com/detail/autoflow/iceccbiiencaflhbgpbnianlegncpchj?authuser=0&hl=en', '_blank')}
              className="bg-white text-black font-black py-6 px-14 rounded-2xl hover:scale-105 transition-all shadow-[0_20px_40px_rgba(59,130,246,0.2)]"
            >
              Get AutoFlow — It's Free
            </button>
          </div>
        </div>
      </motion.section>

      {/* --- POWER USER SNIPPET ENGINE --- */}
      <section className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-white/30 font-bold uppercase tracking-[0.4em] text-[10px] mb-4">Speed Demo</h3>
            <h2 className="text-4xl font-black text-white tracking-tighter">Live Snippet Engine</h2>
          </div>

          <div className="glass-card-flow rounded-[3.5rem] border border-white/5 p-2">
            <div className="space-y-1">
              {automations.map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-8 rounded-[2.5rem] bg-white/[0.01] hover:bg-blue-500/[0.05] border border-transparent hover:border-blue-500/20 transition-all group">
                  <div className="flex items-center gap-6 mb-4 md:mb-0">
                    <code className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-xl font-mono font-bold text-xl border border-blue-500/20 group-hover:bg-blue-500 group-hover:text-white transition-all">
                      {item.trigger}
                    </code>
                    <div>
                      <h4 className="text-white font-bold tracking-tight">{item.name}</h4>
                    </div>
                  </div>
                  <div className="text-white/30 text-sm max-w-md md:text-right group-hover:text-white/60 transition-colors">
                    {item.action}
                  </div>
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
              className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all duration-500 glass-card-flow"
            >
              <div className="text-4xl mb-6 bg-blue-500/10 w-16 h-16 flex items-center justify-center rounded-2xl border border-blue-500/20">{f.icon}</div>
              <h3 className="text-xl font-black text-white mb-3 tracking-tight">{f.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- FINAL CONVERSION --- */}
      <section className="py-40 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card-flow p-12 md:p-20 rounded-[4rem] border border-white/5 relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-none">Speed is a<br/>Habit.</h2>
            <p className="text-white/40 text-xl max-w-2xl mx-auto mb-12">Stop typing the same thing twice. Start flowing with AutoFlow's universal expansion engine.</p>
            <button 
              onClick={() => window.open('https://chromewebstore.google.com/detail/autoflow/iceccbiiencaflhbgpbnianlegncpchj?authuser=0&hl=en', '_blank')}
              className="bg-blue-600 text-white font-black py-6 px-20 rounded-full text-xl shadow-[0_0_50px_rgba(59,130,246,0.3)] hover:scale-110 transition-all active:scale-95"
            >
              Get AutoFlow Free
            </button>
          </div>
        </div>
      </section>

      <style jsx global>{`
        body { background: #000205; color: white; }
        .glass-card-flow {
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