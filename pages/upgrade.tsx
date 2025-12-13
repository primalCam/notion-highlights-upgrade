// pages/upgrade.tsx
import Layout from '../components/Layout'
import { useState, useEffect } from 'react'
import { gaEvent } from '../lib/ga'

export default function Upgrade() {
  const [loading, setLoading] = useState<string | null>(null)

  useEffect(() => {
    gaEvent('page_view', { page: 'upgrade' })
  }, [])

  const pricingPlans = [
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

  const handleUpgrade = async (priceId: string, planName: string) => {
    console.log('Starting upgrade for:', planName, 'Price ID:', priceId)
    gaEvent('plan_selected', { plan: planName })
    setLoading(planName)
    
    try {
      console.log('Calling API with priceId:', priceId)
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceId }),
      })

      console.log('API Response status:', response.status)
      const result = await response.json()
      console.log('API Response:', result)

      if (!response.ok) {
        gaEvent('checkout_error', { plan: planName, error: result.error })
        throw new Error(result.error || 'API call failed')
      }

      // Redirect directly to Stripe Checkout
      if (result.url) {
        console.log('Redirecting to Stripe Checkout URL')
        gaEvent('checkout_started', { plan: planName })
        window.location.href = result.url
      } else {
        throw new Error('No checkout URL returned from server')
      }
    } catch (error: any) {
      console.error('Error:', error)
      gaEvent('checkout_failed', { plan: planName, error: error.message })
      alert('Something went wrong: ' + error.message)
    } finally {
      setLoading(null)
    }
  }

  return (
    <Layout>
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Upgrade to 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] to-[#ffed4e] block">
                Pro Features
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Unlock unlimited highlights, advanced features, and priority support.
              <span className="block mt-2 text-lg font-semibold text-[#ffd700]">
                ✅ 30-Day Money-Back Guarantee - Risk Free!
              </span>
            </p>
          </div>

          {/* 30-Day Guarantee Banner */}
          <div className="glass-card p-6 mb-8 text-center max-w-4xl mx-auto bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/30">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500">
                <span className="text-2xl">✅</span>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-2">30-Day Money-Back Guarantee</h3>
                <p className="text-white/80">
                  Try Pro risk-free. If you're not satisfied for any reason, contact us within 30 days for a full refund, no questions asked. Applies to all plans.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mt-6">
              <div className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span className="text-white/80"><strong>Full Refund</strong> - Get 100% of your money back</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span className="text-white/80"><strong>No Questions Asked</strong> - No explanation required</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span className="text-white/80"><strong>Quick Processing</strong> - Refunds within 3 business days</span>
              </div>
            </div>
          </div>

          {/* Fair Purchase Policy */}
          <div className="glass-card p-6 mb-8 text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">💡 Fair Purchase Policy</h3>
            <p className="text-white/70 mb-4">
              We believe in transparent pricing and immediate value. That's why we offer:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start">
                <span className="text-[#ffd700] mr-2">✓</span>
                <span className="text-white/70"><strong>30 free highlights</strong> to test everything</span>
              </div>
              <div className="flex items-start">
                <span className="text-[#ffd700] mr-2">✓</span>
                <span className="text-white/70"><strong>Instant access</strong> to all Pro features</span>
              </div>
              <div className="flex items-start">
                <span className="text-[#ffd700] mr-2">✓</span>
                <span className="text-white/70"><strong>30-day guarantee</strong> - full refund if not satisfied</span>
              </div>
              <div className="flex items-start">
                <span className="text-[#ffd700] mr-2">✓</span>
                <span className="text-white/70"><strong>Digital delivery</strong> - no waiting, immediate access</span>
              </div>
            </div>
            <p className="text-white/60 text-sm mt-4">
              Our 30-day guarantee means you can try Pro completely risk-free. 
              We encourage trying the free tier first, then upgrade with confidence.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`glass-card-hover relative ${
                  plan.popular ? 'ring-2 ring-[#ffd700]' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="badge">Most Popular</span>
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-white/70 mb-4">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-white/70">{plan.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-white/90">
                        <span className="text-[#ffd700] mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Guarantee Badge */}
                  <div className="mb-4">
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">
                      <span className="text-green-400 text-sm">✅</span>
                      <span className="text-white/80 text-sm">30-Day Guarantee</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleUpgrade(plan.priceId, plan.name)}
                    disabled={loading === plan.name}
                    className={`w-full ${
                      plan.popular ? 'gradient-button' : 'glass-button'
                    } ${loading === plan.name ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {loading === plan.name ? 'Processing...' : 'Get Started Risk-Free'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold text-white mb-3">How does the 30-day guarantee work?</h3>
                <p className="text-white/70">
                  If you're not satisfied with Pro for any reason, contact us within 30 days of purchase for a full refund. No questions asked. Refunds are processed within 3 business days.
                </p>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold text-white mb-3">Can I switch between plans?</h3>
                <p className="text-white/70">
                  Yes! You can upgrade or downgrade at any time. If you upgrade mid-cycle, we'll prorate your payment. Downgrades take effect at the end of your billing cycle.
                </p>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold text-white mb-3">What happens after the 30 days?</h3>
                <p className="text-white/70">
                  After 30 days, our regular refund policy applies. You can still cancel anytime and your subscription will remain active until the end of the billing period.
                </p>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold text-white mb-3">How do I request a refund?</h3>
                <p className="text-white/70">
                  Email support@notionhighlights.com with your purchase details. Include your email address and the date of purchase. We'll process your refund within 3 business days.
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-12">
            <p className="text-white/70 mb-6">
              Still have questions? Try the free tier first or contact our support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://chromewebstore.google.com/detail/notion-highlights/cbhehgcjfigjnnpejhalofljofdpcabg"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button px-8 py-3"
              >
                Try Free Version
              </a>
              <a 
                href="/support"
                className="gradient-button px-8 py-3"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}