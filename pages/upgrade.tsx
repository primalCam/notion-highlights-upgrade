import Layout from '../components/Layout'
import { useState, useEffect } from 'react'

export default function Upgrade() {
  const [loading, setLoading] = useState<string | null>(null)

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
        throw new Error(result.error || 'API call failed')
      }

      // Redirect directly to Stripe Checkout
      if (result.url) {
        console.log('Redirecting to Stripe Checkout URL')
        window.location.href = result.url
      } else {
        throw new Error('No checkout URL returned from server')
      }
    } catch (error: any) {
      console.error('Error:', error)
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
            </p>
          </div>

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
                <span className="text-white/70"><strong>No commitment</strong> - cancel anytime</span>
              </div>
              <div className="flex items-start">
                <span className="text-[#ffd700] mr-2">✓</span>
                <span className="text-white/70"><strong>Digital delivery</strong> - no waiting, no returns</span>
              </div>
            </div>
            <p className="text-white/60 text-sm mt-4">
              Since you get immediate access to digital features, all purchases are final. 
              We encourage trying the free tier first to ensure it fits your workflow.
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

                  <button
                    onClick={() => handleUpgrade(plan.priceId, plan.name)}
                    disabled={loading === plan.name}
                    className={`w-full ${
                      plan.popular ? 'gradient-button' : 'glass-button'
                    } ${loading === plan.name ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {loading === plan.name ? 'Processing...' : 'Get Started'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}