import Layout from '../components/Layout'
import { useState, useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function Upgrade() {
  const [loading, setLoading] = useState<string | null>(null)
  const [userEmail, setUserEmail] = useState<string | null>(null)

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

  // Get user email from URL parameters or prompt for it
  useEffect(() => {
    // Try to get email from URL parameters (if coming from extension)
    const urlParams = new URLSearchParams(window.location.search)
    const emailFromUrl = urlParams.get('email')
    
    if (emailFromUrl) {
      setUserEmail(emailFromUrl)
      console.log('Got email from URL:', emailFromUrl)
    } else {
      // If no email in URL, try to get from localStorage or prompt user
      const savedEmail = localStorage.getItem('notionHighlightsUserEmail')
      if (savedEmail) {
        setUserEmail(savedEmail)
        console.log('Got email from localStorage:', savedEmail)
      } else {
        // Prompt user for email if we don't have it
        const email = prompt('Please enter your email address to upgrade:')
        if (email && email.includes('@')) {
          setUserEmail(email)
          localStorage.setItem('notionHighlightsUserEmail', email)
          console.log('Got email from prompt:', email)
        } else if (email) {
          alert('Please enter a valid email address.')
        }
      }
    }
  }, [])

  // Debug: Log the price IDs on component mount
  useEffect(() => {
    console.log('Price IDs loaded:')
    pricingPlans.forEach(plan => {
      console.log(`${plan.name}: ${plan.priceId}`)
    })
  }, [])

  const handleUpgrade = async (priceId: string, planName: string) => {
    if (!userEmail) {
      alert('Please enter your email address to continue with the upgrade.')
      const email = prompt('Please enter your email address:')
      if (email && email.includes('@')) {
        setUserEmail(email)
        localStorage.setItem('notionHighlightsUserEmail', email)
      } else {
        return
      }
    }

    console.log('Starting upgrade for:', planName, 'Price ID:', priceId, 'Email:', userEmail)
    setLoading(planName)
    
    try {
      console.log('Calling API with priceId:', priceId, 'and email:', userEmail)
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          priceId,
          customerEmail: userEmail 
        }),
      })

      console.log('API Response status:', response.status)
      const result = await response.json()
      console.log('API Response:', result)

      if (!response.ok) {
        throw new Error(result.error || 'API call failed')
      }

      // NEW METHOD: Redirect directly to the Checkout URL
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
              {userEmail && (
                <span className="block mt-2 text-sm text-[#ffd700]">
                  Upgrading as: {userEmail}
                </span>
              )}
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
                    disabled={loading === plan.name || !userEmail}
                    className={`w-full ${
                      plan.popular ? 'gradient-button' : 'glass-button'
                    } ${loading === plan.name || !userEmail ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {!userEmail ? 'Enter Email First' : loading === plan.name ? 'Processing...' : 'Get Started'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Email Notice */}
          {!userEmail && (
            <div className="text-center mt-8 p-4 bg-yellow-500/20 rounded-lg max-w-2xl mx-auto">
              <p className="text-yellow-200">
                💡 <strong>Heads up:</strong> You'll need to enter your email address to upgrade. 
                Make sure it's the same email you use with Notion Highlights!
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}