// pages/upgrade.tsx
import Layout from '../components/Layout'
import { useState, useEffect } from 'react'
import { gaEvent } from '../lib/ga'
import { motion } from 'framer-motion'

export default function Upgrade() {
  const [loading, setLoading] = useState<string | null>(null)
  const [selectedProduct, setSelectedProduct] = useState('notion-highlights')

  useEffect(() => {
    gaEvent('page_view', { page: 'upgrade' })
  }, [])

  // Define products and their pricing plans
  const products = {
    'notion-highlights': {
      name: 'Notion Highlights',
      description: 'Flagship researcher with one-click web to Notion sync',
      icon: '/icons/icon48.png',
      color: 'from-yellow-400 to-yellow-600',
      plans: [
        {
          name: 'Monthly',
          price: '$12',
          period: '/month',
          description: 'Perfect for getting started',
          features: [
            'Unlimited highlights',
            'Advanced formatting',
            'Priority support',
            'All premium features'
          ],
          popular: false,
          priceId: process.env.NEXT_PUBLIC_STRIPE_MONTHLY_PRICE_ID!
        },
        {
          name: 'Annual',
          price: '$99',
          period: '/year',
          description: 'Best value - save 31%',
          features: [
            'Everything in Monthly',
            'Save $45 per year',
            'Bulk operations',
            'Early access to features'
          ],
          popular: true,
          priceId: process.env.NEXT_PUBLIC_STRIPE_ANNUAL_PRICE_ID!
        },
        {
          name: 'Lifetime',
          price: '$299',
          period: 'one-time',
          description: 'Never pay again',
          features: [
            'Everything in Annual',
            'Lifetime updates',
            'Priority feature requests',
            'Dedicated support'
          ],
          popular: false,
          priceId: process.env.NEXT_PUBLIC_STRIPE_LIFETIME_PRICE_ID!
        }
      ]
    },
    'sightline': {
      name: 'Sightline',
      description: 'Visual capture with precision screenshot & annotation',
      icon: '/icons/sl-icon128.png',
      color: 'from-emerald-500 to-[#00FF95]',
      plans: [
        {
          name: 'Monthly',
          price: '$4.99',
          period: '/month',
          description: 'Flexible monthly access',
          features: [
            'Unlimited screenshots',
            'Advanced annotation tools',
            'Cloud storage',
            'All premium features'
          ],
          popular: false,
          priceId: 'price_sightline_monthly' // Replace with actual Stripe price ID
        },
        {
          name: 'Annual',
          price: '$39.99',
          period: '/year',
          description: 'Save 33% annually',
          features: [
            'Everything in Monthly',
            'Save $20 per year',
            'Team collaboration',
            'Custom branding'
          ],
          popular: true,
          priceId: 'price_sightline_annual' // Replace with actual Stripe price ID
        },
        {
          name: 'Lifetime',
          price: '$149',
          period: 'one-time',
          description: 'One-time payment',
          features: [
            'Everything in Annual',
            'Lifetime updates',
            'Premium support',
            'All future features'
          ],
          popular: false,
          priceId: 'price_sightline_lifetime' // Replace with actual Stripe price ID
        }
      ]
    },
    'clean-read': {
      name: 'Clean Read',
      description: 'Distraction-free reading by removing ads & popups',
      icon: '/icons/cr-icon128.png',
      color: 'from-slate-600 to-slate-800',
      plans: [
        {
          name: 'Monthly',
          price: '$4.99',
          period: '/month',
          description: 'Ad-free reading monthly',
          features: [
            'Remove all ads',
            'Focus mode',
            'Text optimization',
            'Custom themes'
          ],
          popular: false,
          priceId: 'price_cleanread_monthly' // Replace with actual Stripe price ID
        },
        {
          name: 'Annual',
          price: '$39.99',
          period: '/year',
          description: 'Save 33% annually',
          features: [
            'Everything in Monthly',
            'Save $20 per year',
            'Offline reading',
            'Export options'
          ],
          popular: true,
          priceId: 'price_cleanread_annual' // Replace with actual Stripe price ID
        },
        {
          name: 'Lifetime',
          price: '$149',
          period: 'one-time',
          description: 'One-time payment',
          features: [
            'Everything in Annual',
            'Lifetime updates',
            'Premium themes',
            'Advanced customization'
          ],
          popular: false,
          priceId: 'price_cleanread_lifetime' // Replace with actual Stripe price ID
        }
      ]
    },
    'focus-dock': {
      name: 'Focus Dock',
      description: 'Keyboard-first tab & note management',
      icon: '/icons/fd-icon128.png',
      color: 'from-red-500 to-red-600',
      plans: [
        {
          name: 'Monthly',
          price: '$4.99',
          period: '/month',
          description: 'Tab management monthly',
          features: [
            'Unlimited tab groups',
            'Keyboard shortcuts',
            'Session saving',
            'Advanced search'
          ],
          popular: false,
          priceId: 'price_focusdock_monthly' // Replace with actual Stripe price ID
        },
        {
          name: 'Annual',
          price: '$39.99',
          period: '/year',
          description: 'Save 33% annually',
          features: [
            'Everything in Monthly',
            'Save $20 per year',
            'Workspace templates',
            'Cloud sync'
          ],
          popular: true,
          priceId: 'price_focusdock_annual' // Replace with actual Stripe price ID
        },
        {
          name: 'Lifetime',
          price: '$149',
          period: 'one-time',
          description: 'One-time payment',
          features: [
            'Everything in Annual',
            'Lifetime updates',
            'Team features',
            'API access'
          ],
          popular: false,
          priceId: 'price_focusdock_lifetime' // Replace with actual Stripe price ID
        }
      ]
    },
    'autoflow': {
      name: 'AutoFlow',
      description: 'Automation pro with think → text instantly',
      icon: '/icons/af-icon128.png',
      color: 'from-blue-500 to-blue-700',
      plans: [
        {
          name: 'Monthly',
          price: '$4.99',
          period: '/month',
          description: 'Automation monthly',
          features: [
            'Unlimited automations',
            'Custom workflows',
            'Cross-app integration',
            'Basic templates'
          ],
          popular: false,
          priceId: 'price_autoflow_monthly' // Replace with actual Stripe price ID
        },
        {
          name: 'Annual',
          price: '$29',
          period: '/year',
          description: 'Save 51% annually',
          features: [
            'Everything in Monthly',
            'Save $30 per year',
            'Advanced triggers',
            'Conditional logic'
          ],
          popular: true,
          priceId: 'price_autoflow_annual' // Replace with actual Stripe price ID
        },
        {
          name: 'Lifetime',
          price: '$79',
          period: 'one-time',
          description: 'One-time payment',
          features: [
            'Everything in Annual',
            'Lifetime updates',
            'Enterprise features',
            'Custom integration'
          ],
          popular: false,
          priceId: 'price_autoflow_lifetime' // Replace with actual Stripe price ID
        }
      ]
    }
  }

  const selectedProductData = products[selectedProduct as keyof typeof products]
  const pricingPlans = selectedProductData.plans

  const handleUpgrade = async (priceId: string, planName: string) => {
    console.log('Starting upgrade for:', selectedProductData.name, planName, 'Price ID:', priceId)
    gaEvent('plan_selected', { 
      product: selectedProductData.name, 
      plan: planName 
    })
    setLoading(`${selectedProduct}-${planName}`)
    
    try {
      console.log('Calling API with priceId:', priceId)
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          priceId,
          product: selectedProductData.name
        }),
      })

      console.log('API Response status:', response.status)
      const result = await response.json()
      console.log('API Response:', result)

      if (!response.ok) {
        gaEvent('checkout_error', { 
          product: selectedProductData.name, 
          plan: planName, 
          error: result.error 
        })
        throw new Error(result.error || 'API call failed')
      }

      // Redirect directly to Stripe Checkout
      if (result.url) {
        console.log('Redirecting to Stripe Checkout URL')
        gaEvent('checkout_started', { 
          product: selectedProductData.name, 
          plan: planName 
        })
        window.location.href = result.url
      } else {
        throw new Error('No checkout URL returned from server')
      }
    } catch (error: any) {
      console.error('Error:', error)
      gaEvent('checkout_failed', { 
        product: selectedProductData.name, 
        plan: planName, 
        error: error.message 
      })
      alert('Something went wrong: ' + error.message)
    } finally {
      setLoading(null)
    }
  }

  return (
    <Layout>
      {/* Background effects matching index.tsx */}
      <div className="fixed inset-0 -z-10 bg-[#030303] overflow-hidden pointer-events-none">
        <div className="absolute top-[-25%] left-[-10%] w-[80%] h-[80%] bg-yellow-500/10 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150 mix-blend-overlay" />
      </div>

      <div className="min-h-screen py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header - Matching index.tsx style */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-2xl rounded-full px-5 py-2 mb-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
              <span className="flex h-2 w-2 rounded-full bg-yellow-500 animate-ping" />
              <span className="text-white/80 text-[10px] font-black uppercase tracking-[0.3em]">Pro Experience Unlocked</span>
            </div>

            <h1 className="text-6xl md:text-[8rem] font-black text-white mb-8 tracking-tighter leading-[0.8] mix-blend-exclusion">
              Upgrade 
              <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500">Your Stack.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/40 max-w-2xl mx-auto font-light leading-snug">
              Choose your tool and unlock premium features with priority support.
              <span className="block mt-4 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">
                30-Day Money-Back Guarantee - Risk Free!
              </span>
            </p>
          </motion.div>

          {/* Product Selection Toggle */}
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="glass-card-chrome p-6 mb-12 text-center max-w-4xl mx-auto rounded-[2.5rem] border border-white/5"
          >
            <h3 className="text-2xl font-black text-white mb-6 tracking-tighter">Select Your Tool</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {Object.entries(products).map(([key, product]) => (
                <button
                  key={key}
                  onClick={() => setSelectedProduct(key)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition-all ${
                    selectedProduct === key
                      ? 'bg-white/20 text-white border border-white/20'
                      : 'bg-white/5 text-white/60 border border-white/5 hover:bg-white/10'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${product.color} flex items-center justify-center`}>
                    <span className="text-xs font-black">✓</span>
                  </div>
                  <span>{product.name}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* 30-Day Guarantee Banner */}
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="glass-card-chrome p-8 mb-12 text-center max-w-4xl mx-auto rounded-[2.5rem] border border-white/5 overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-yellow-500/5 via-transparent to-blue-500/5 pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center">
              <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-600 shadow-xl mb-6">
                <span className="text-4xl">✅</span>
              </div>
              <h3 className="text-3xl font-black text-white mb-3 tracking-tighter">30-Day Money-Back Guarantee</h3>
              <p className="text-white/50 text-lg leading-relaxed max-w-2xl">
                Try Pro risk-free. If you're not satisfied for any reason, contact us within 30 days for a full refund, no questions asked. Applies to all plans.
              </p>
            </div>
          </motion.div>

          {/* Pricing Cards - Matching product grid style */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16"
          >
            {pricingPlans.map((plan, i) => (
              <motion.div 
                key={plan.name}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className={`group relative cursor-pointer glass-card-chrome p-8 rounded-[2.5rem] border border-white/5 flex flex-col ${
                  plan.popular ? 'ring-2 ring-yellow-500/50' : ''
                } hover:border-white/20 transition-all`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="text-3xl font-black text-white mb-3 tracking-tighter">{plan.name}</h3>
                  <p className="text-white/50 mb-6 text-sm uppercase tracking-widest font-bold">{plan.description}</p>
                  
                  <div className="mb-8">
                    <span className="text-5xl font-black text-white">{plan.price}</span>
                    <span className="text-white/50 text-lg ml-2">{plan.period}</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-white/70 text-sm">
                        <span className="text-yellow-500 mr-3 text-lg">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Guarantee Badge - Simple version */}
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                      <span className="text-white/80 text-lg">✅</span>
                      <span className="text-white/80 text-sm font-bold">30-Day Guarantee</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleUpgrade(plan.priceId, plan.name)}
                    disabled={loading === `${selectedProduct}-${plan.name}`}
                    className={`w-full py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-all ${
                      plan.popular 
                        ? 'bg-white text-black hover:scale-105 shadow-[0_10px_30px_rgba(255,255,255,0.2)]' 
                        : 'bg-white/10 text-white border border-white/10 hover:bg-white/20'
                    } ${loading === `${selectedProduct}-${plan.name}` ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {loading === `${selectedProduct}-${plan.name}` ? 'Processing...' : 'Get Started Risk-Free'}
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* FAQ Section */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-20 max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">Frequently Asked Questions</h2>
              <p className="text-white/40 text-lg">Everything you need to know before upgrading</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "How does the 30-day guarantee work?",
                  answer: "If you're not satisfied with Pro for any reason, contact us within 30 days of purchase for a full refund. No questions asked. Refunds are processed within 3 business days."
                },
                {
                  title: "Can I switch between plans?",
                  answer: "Yes! You can upgrade or downgrade at any time. If you upgrade mid-cycle, we'll prorate your payment. Downgrades take effect at the end of your billing cycle."
                },
                {
                  title: "What happens after the 30 days?",
                  answer: "After 30 days, our regular refund policy applies. You can still cancel anytime and your subscription will remain active until the end of the billing period."
                },
                {
                  title: "How do I request a refund?",
                  answer: "Email support@notionhighlights.com with your purchase details. Include your email address and the date of purchase. We'll process your refund within 3 business days."
                }
              ].map((item, i) => (
                <div key={i} className="group cursor-pointer glass-card-chrome p-8 rounded-[2.5rem] border border-white/5 hover:border-white/20 transition-all">
                  <h3 className="text-xl font-black text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-200 group-hover:to-yellow-500">
                    {item.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-20 py-20 relative overflow-hidden"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-yellow-500/5 blur-[120px] rounded-full" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">Elevate</span> Your Workflow?
              </h2>
              <p className="text-white/40 text-lg mb-12 max-w-2xl mx-auto">
                Join thousands of power users who have unlocked their full potential with our premium tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button 
                  onClick={() => {
                    const popularPlan = pricingPlans.find(p => p.popular)
                    if (popularPlan) {
                      handleUpgrade(popularPlan.priceId, popularPlan.name)
                    }
                  }}
                  disabled={loading !== null && loading.includes(selectedProduct)}
                  className={`relative group overflow-hidden bg-white text-black font-black py-6 px-12 rounded-2xl text-lg shadow-[0_20px_40px_rgba(255,255,255,0.1)] hover:scale-105 transition-all ${
                    loading !== null && loading.includes(selectedProduct) ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <span className="relative z-10">Get {selectedProductData.name} Pro</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </button>
                <a 
                  href="/"
                  className="glass-card-chrome text-white font-bold py-6 px-12 rounded-2xl border border-white/10 hover:bg-white/10 transition-all"
                >
                  Explore All Products
                </a>
              </div>
              <p className="mt-8 text-white/20 text-xs font-bold uppercase tracking-[0.4em]">Risk-Free • 30-Day Guarantee • Priority Support</p>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        body { background: #030303; color: white; overflow-x: hidden; font-family: 'Inter', sans-serif; }
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