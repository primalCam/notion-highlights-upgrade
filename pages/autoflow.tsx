// pages/autoflow.tsx
import React from 'react'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import Image from 'next/image'

export default function AutoFlow() {
  return (
    <>
      <Head>
        <title>AutoFlow • Think → Text → Instantly</title>
        <meta name="description" content="Text automation for power users. Insert snippets, automate workflows, and save hours every week." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-slate-900"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/30">
              <Image 
                src="/icons/af-icon128.png" 
                alt="AutoFlow" 
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">AutoFlow</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-white/80 mb-8 font-light">
            Think → Text → <span className="text-blue-300">Instantly</span>
          </p>
          
          <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed">
            The intelligent text automation extension that turns your thoughts into perfectly formatted text, snippets, and workflows—instantly.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              Get AutoFlow • Free
            </a>
            <a
              href="#"
              className="glass-card border border-white/10 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-white/5 transition-all duration-300"
            >
              Watch Demo
            </a>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300">95%</div>
              <div className="text-white/60 text-sm mt-2">Time saved on typing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300">1000+</div>
              <div className="text-white/60 text-sm mt-2">Snippets ready</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300">∞</div>
              <div className="text-white/60 text-sm mt-2">Custom workflows</div>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-700/10 rounded-full blur-3xl"></div>
      </section>

      {/* How It Works */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">How It Works</h2>
          <p className="text-xl text-white/60 text-center max-w-3xl mx-auto mb-16">
            Three simple steps to automate your text workflow
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Trigger</h3>
              <p className="text-white/70 leading-relaxed">
                Type your shortcut or select from the command palette. AutoFlow instantly recognizes your intent.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Select & Insert</h3>
              <p className="text-white/70 leading-relaxed">
                Choose from your saved snippets, templates, or AI-generated text. AutoFlow inserts perfectly formatted content.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Automate</h3>
              <p className="text-white/70 leading-relaxed">
                Set up workflows that trigger across apps. AutoFlow works everywhere you type—browser, desktop, or mobile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why AutoFlow */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-black to-slate-900"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">Built for Speed & Precision</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Lightning Fast</h3>
                    <p className="text-white/70">
                      Trigger snippets in under 100ms. No lag, no waiting—just instant text insertion.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">100% Accurate</h3>
                    <p className="text-white/70">
                      Perfect formatting every time. AutoFlow respects your formatting rules across all applications.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Minimal Friction</h3>
                    <p className="text-white/70">
                      Designed for power users who value efficiency. No unnecessary clicks, no complex menus.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl border border-white/10">
              <div className="bg-slate-900/50 rounded-xl p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                    <Image 
                      src="/icons/af-icon128.png" 
                      alt="AutoFlow" 
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-white font-semibold">AutoFlow Pro</div>
                    <div className="text-white/50 text-sm">Active • v2.1.4</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Daily time saved</span>
                    <span className="text-blue-300 font-semibold">2.4 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Snippets used</span>
                    <span className="text-blue-300 font-semibold">47 today</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Workflows active</span>
                    <span className="text-blue-300 font-semibold">12</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">Simple Pricing</h2>
          <p className="text-xl text-white/60 text-center max-w-2xl mx-auto mb-16">
            Start free, upgrade when you need unlimited power
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-2xl border border-white/10">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Free</h3>
                <p className="text-white/60">For beginners and casual users</p>
              </div>
              
              <div className="mb-8">
                <div className="text-5xl font-bold text-white mb-2">$0</div>
                <div className="text-white/60">forever</div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-white/80">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>100 snippets</span>
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Basic templates</span>
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Browser-only</span>
                </li>
                <li className="flex items-center gap-3 text-white/50">
                  <div className="w-5 h-5"></div>
                  <span>No AI generation</span>
                </li>
              </ul>

              <a
                href="#"
                className="block text-center border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/5 transition-colors"
              >
                Get Started Free
              </a>
            </div>

            <div className="glass-card p-8 rounded-2xl border-2 border-blue-500/50 bg-gradient-to-b from-blue-900/20 to-blue-900/5">
              <div className="mb-8">
                <div className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
                <p className="text-white/60">For power users and teams</p>
              </div>
              
              <div className="mb-8">
                <div className="text-5xl font-bold text-white mb-2">$4.99</div>
                <div className="text-white/60">per month</div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-white/80">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Unlimited snippets</span>
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Advanced templates</span>
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cross-platform</span>
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>AI-powered generation</span>
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Priority support</span>
                </li>
              </ul>

              <a
                href="#"
                className="block text-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/30 transition-all"
              >
                Upgrade to Pro
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-black to-slate-900"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="glass-card border border-white/10 rounded-2xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Automating Your Text Today
            </h2>
            
            <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
              Join thousands of power users who save hours every week with AutoFlow. No credit card required to start.
            </p>

            <a
              href="#"
              className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
            >
              Install AutoFlow • Free Forever
            </a>

            <p className="text-white/40 mt-6 text-sm">
              Works on Chrome, Safari, Firefox, Edge, and desktop apps. No setup required.
            </p>
          </div>
        </div>

        {/* Background elements */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-700/5 rounded-full blur-3xl"></div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-4 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                <Image 
                  src="/icons/af-icon128.png" 
                  alt="AutoFlow" 
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <span className="text-white font-bold text-xl">AutoFlow</span>
            </div>
            
            <div className="text-white/60 text-sm">
              © {new Date().getFullYear()} AutoFlow. Part of the Notion Highlights ecosystem.
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}