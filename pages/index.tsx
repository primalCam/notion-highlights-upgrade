// pages/index.tsx
import React, { useState, useEffect, useRef } from 'react';
import { 
  motion, 
  useMotionValue, 
  useSpring, 
  useTransform, 
  AnimatePresence,
  useScroll
} from 'framer-motion';
import Layout from '../components/Layout';
import Image from 'next/image';
import Head from 'next/head';
import { gaEvent } from '../lib/ga';
import { 
  ArrowRight,
  Sparkles,
  Command,
  RefreshCw,
  Rocket,
  Brain,
  Shield as ShieldIcon
} from 'lucide-react';

// --- Types & Constants ---
const SPRING_CONFIG = { damping: 25, stiffness: 200, mass: 0.5 };
const CURSOR_SIZE = 32;

// --- Enhanced Components ---

/**
 * Custom Spring-Physic Cursor
 */
const CustomCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const cursorX = useSpring(mouseX, SPRING_CONFIG);
  const cursorY = useSpring(mouseY, SPRING_CONFIG);

  const dotX = useSpring(mouseX, { damping: 40, stiffness: 400 });
  const dotY = useSpring(mouseY, { damping: 40, stiffness: 400 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: CURSOR_SIZE,
          height: CURSOR_SIZE,
          borderRadius: '50%',
          border: `1px solid rgba(255, 200, 0, 0.6)`,
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference',
          backdropFilter: 'blur(2px)',
        }}
      />
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: 8,
          height: 8,
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 200, 0, 0.9)',
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          pointerEvents: 'none',
          zIndex: 10000,
          boxShadow: '0 0 20px rgba(255, 200, 0, 0.5)',
        }}
      />
    </>
  );
};

/**
 * Magnetic Component Wrapper
 */
const Magnetic = ({ children, strength = 0.5 }: { children?: React.ReactNode, strength?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, SPRING_CONFIG);
  const springY = useSpring(y, SPRING_CONFIG);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    x.set(distanceX * strength);
    y.set(distanceY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="cursor-pointer"
    >
      {children}
    </motion.div>
  );
};

/**
 * Glassmorphic Card with Parallax Shine
 */
const EnhancedCard = ({ title, description, icon, color }: { 
  title: string, 
  description: string, 
  icon: string,
  color: string 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="relative group p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
    >
      {/* Dynamic Shine Layer */}
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useTransform(
            [x, y],
            ([valX, valY]) => `radial-gradient(circle at ${50 + (valX as number)/5}% ${50 + (valY as number)/5}%, rgba(255, 200, 0, 0.15) 0%, transparent 60%)`
          )
        }}
      />
      
      <div className="relative z-10">
        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${color} p-4 mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-500 flex items-center justify-center`}>
          <Image src={icon} alt={title} width={48} height={48} className="object-contain" />
        </div>
        <h3 className="text-2xl font-black text-white mb-3">{title}</h3>
        <p className="text-white/50 leading-relaxed text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

/**
 * Toast Notification System
 */
const ToastManager = () => {
  const [toasts, setToasts] = useState<{id: number, msg: string}[]>([]);
  
  const addToast = (msg: string) => {
    const id = Date.now();
    setToasts(prev => [...prev, {id, msg}]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 2000);
  };

  useEffect(() => {
    const handleAction = (e: any) => {
       if (e.detail?.type === 'toast') addToast(e.detail.message);
    };
    window.addEventListener('app-toast', handleAction);
    return () => window.removeEventListener('app-toast', handleAction);
  }, []);

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex flex-col gap-2 pointer-events-none">
      <AnimatePresence>
        {toasts.map(toast => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-full shadow-[0_0_30px_rgba(255,200,0,0.4)] backdrop-blur-md"
          >
            {toast.msg}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

const notify = (msg: string) => {
  window.dispatchEvent(new CustomEvent('app-toast', { detail: { type: 'toast', message: msg } }));
};

// --- Main Component ---

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.98]);
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const [isMascotVisible, setIsMascotVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    gaEvent('page_view', { page: 'home' });
    const timer = setTimeout(() => setIsMascotVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

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
  ];

  if (!mounted) return <div className="bg-[#030303] min-h-screen" />;

  return (
    <Layout>
      <Head>
        <title>The Suite | Notion Highlights & Power Tools</title>
      </Head>

      {/* Enhanced Custom Cursor */}
      <div className="hidden lg:block">
        <CustomCursor />
      </div>
      
      <ToastManager />

      {/* Enhanced Ambient Background */}
      <div className="fixed inset-0 -z-10 bg-[#030303] overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-[-25%] left-[-10%] w-[80%] h-[80%] bg-yellow-500/10 rounded-full blur-[160px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: 1
          }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[140px]"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150 mix-blend-overlay" />
        
        {/* Animated WebGL-style elements */}
        <motion.div
          animate={{ 
            rotate: 360,
          }}
          transition={{ 
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 border border-yellow-500/20 rounded-full blur-sm"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 border-2 border-blue-500/10 rounded-full"
        />
      </div>

      {/* --- MASCOT: FLUX with Enhanced Effects --- */}
      {isMascotVisible && (
        <>
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

      {/* --- Enhanced HERO --- */}
      <motion.section style={{ opacity, scale }} className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <div className="text-center max-w-6xl">
          <Magnetic strength={0.1}>
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 backdrop-blur-2xl rounded-full px-6 py-3 mb-12 border border-yellow-500/20"
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-300 text-xs font-black uppercase tracking-[0.3em]">2026 Liquid Metal Collection</span>
            </motion.div>
          </Magnetic>

          <h1 className="text-7xl md:text-[10rem] font-black text-white mb-8 tracking-tighter leading-[0.8]">
            Chrome <br/>
            <motion.span 
              animate={{ 
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="text-transparent bg-clip-text bg-gradient-to-b from-white via-yellow-200 to-yellow-500 bg-[length:200%_200%]"
            >
              Reinforced.
            </motion.span>
          </h1>

          <p className="text-xl md:text-3xl text-white/40 mb-16 max-w-3xl mx-auto font-light leading-snug">
            Five powerful extensions. One seamless workflow. Built for those who live in the{" "}
            <span className="text-yellow-300 font-bold">flow state</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Magnetic strength={0.15}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  window.location.href = NOTION_HIGHLIGHTS_URL;
                  notify("Installing Notion Highlights...");
                }}
                className="group relative overflow-hidden bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-black py-7 px-16 rounded-2xl shadow-[0_30px_60px_rgba(255,200,0,0.3)]"
              >
                <div className="relative z-10 flex items-center gap-3">
                  <span>Get Notion Highlights</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </div>
                <motion.div 
                  className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent)'
                  }}
                />
              </motion.button>
            </Magnetic>

            <motion.button
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)', scale: 1.05 }}
              onClick={() => document.getElementById('suite-grid')?.scrollIntoView({ behavior: 'smooth' })}
              className="glass-card-chrome text-white font-bold py-7 px-16 rounded-2xl border border-white/10 flex items-center justify-center gap-3 transition-all"
            >
              <Command size={20} />
              <span>View Full Suite</span>
            </motion.button>
          </div>

          {/* Enhanced Stats */}
          <div className="mt-20 flex items-center justify-center gap-16 border-t border-white/5 pt-10">
            {[
              { value: "60FPS", label: "Performance" },
              { value: "0.2ms", label: "Input Latency" },
              { value: "5 Tools", label: "One Stack" },
              { value: "∞", label: "Possibilities" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-black bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs text-white/40 uppercase tracking-widest font-bold mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* --- Enhanced 5-PRODUCT GRID --- */}
      <section id="suite-grid" className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">THE FLAGSHIP COLLECTION</h2>
            <p className="text-white/40 max-w-2xl mx-auto">
              Individually powerful, collectively unstoppable. Built on the same fluid-reactive architecture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {suite.map((ext, i) => (
              <EnhancedCard
                key={i}
                title={ext.name}
                description={ext.desc}
                icon={ext.icon}
                color={ext.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- Enhanced CONTEXT SECTION with AI Features --- */}
      <section className="py-40 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative glass-card-chrome p-1 md:p-12 rounded-[4rem] border border-white/5 overflow-hidden"
          >
            {/* Animated Background */}
            <motion.div
              animate={{ 
                rotate: 360,
              }}
              transition={{ 
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-yellow-500/5 to-blue-500/5 rounded-full blur-3xl"
            />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-tight">
                  One Stack.<br/> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">
                    Infinite Output.
                  </span>
                </h2>
                <p className="text-white/50 text-lg mb-8 leading-relaxed">
                  Individually, they are tools. Together, they are a{" "}
                  <span className="text-yellow-300 font-bold">productivity engine</span>.
                  By installing the full suite, you eliminate the friction between capturing, processing, and organizing your digital life.
                </p>
                
                <Magnetic strength={0.1}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      window.location.href = NOTION_HIGHLIGHTS_URL;
                      notify("Starting Your Collection...");
                    }}
                    className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-black py-5 px-12 rounded-xl hover:shadow-[0_0_40px_rgba(255,200,0,0.4)] transition-all"
                  >
                    Start Your Collection
                  </motion.button>
                </Magnetic>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {[
                  {
                    title: "Seamless Data Continuity",
                    desc: "Capture with Sightline, Clean with Clean Read, and Sync with Notion Highlights—without ever losing your cursor position.",
                    icon: <RefreshCw className="w-8 h-8" />,
                    color: "from-blue-500/20 to-blue-600/20"
                  },
                  {
                    title: "Exponential Speed",
                    desc: "Combine AutoFlow's automation with Focus Dock's command center to reduce 10-minute tasks into 3-second shortcuts.",
                    icon: <Rocket className="w-8 h-8" />,
                    color: "from-yellow-500/20 to-yellow-600/20"
                  },
                  {
                    title: "Total Context Awareness",
                    desc: "Every extension is built on the same core architecture, ensuring they work in harmony across any website or web-app.",
                    icon: <Brain className="w-8 h-8" />,
                    color: "from-purple-500/20 to-purple-600/20"
                  },
                  {
                    title: "Workflow Autonomy",
                    desc: "Don't adapt to your browser. Make your browser adapt to you with keyboard-first navigation and visual precision.",
                    icon: <ShieldIcon className="w-8 h-8" />,
                    color: "from-emerald-500/20 to-emerald-600/20"
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`flex gap-5 p-6 rounded-3xl bg-gradient-to-br ${item.color} border border-white/5 hover:border-white/10 transition-all group backdrop-blur-sm`}
                  >
                    <div className="text-yellow-400 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2">{item.title}</h4>
                      <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Enhanced Final CTA with Particle Effects --- */}
      <section className="py-60 px-6 text-center relative overflow-hidden">
        {/* Particle Background */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400/30 rounded-full"
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 100 - 50, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-yellow-500/10 blur-[160px] rounded-full" />
        
        <div className="relative z-10">
          <h2 className="text-6xl md:text-9xl font-black text-white mb-12 tracking-tighter leading-none">
            <motion.span
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(255,200,0,0.3)",
                  "0 0 40px rgba(255,200,0,0.6)",
                  "0 0 20px rgba(255,200,0,0.3)"
                ]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Stay in Flow.
            </motion.span>
          </h2>
          
          <Magnetic strength={0.2}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.location.href = NOTION_HIGHLIGHTS_URL;
                notify("Installing Suite Flagship...");
              }}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-black py-8 px-24 rounded-full text-2xl shadow-[0_0_80px_rgba(255,200,0,0.5)] hover:shadow-[0_0_120px_rgba(255,200,0,0.7)] transition-all"
            >
              Install Suite Flagship
            </motion.button>
          </Magnetic>
          
          <p className="mt-12 text-white/20 text-xs font-bold uppercase tracking-[0.4em]">
            Designed for Power Users • 2026 Edition
          </p>
        </div>
      </section>

      <style jsx global>{`
        body { 
          background: #030303; 
          color: white; 
          overflow-x: hidden; 
          font-family: 'Inter', sans-serif; 
          cursor: none;
        }
        @media (max-width: 1024px) {
          body { cursor: auto; }
        }
        .glass-card-chrome {
          background: rgba(255, 255, 255, 0.01);
          backdrop-filter: blur(40px) saturate(200%);
          -webkit-backdrop-filter: blur(40px) saturate(200%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: inset 0 1px 1px rgba(255,255,255,0.1);
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </Layout>
  );
}