import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set')
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { priceId } = req.body

    console.log('Creating checkout session for priceId:', priceId)

    if (!priceId) {
      return res.status(400).json({ error: 'Price ID is required' })
    }

    // First, retrieve the price to check if it's recurring
    const price = await stripe.prices.retrieve(priceId)
    console.log('Price details:', {
      id: price.id,
      type: price.type,
      recurring: price.recurring
    })

    // Determine mode based on price type
    const mode = price.type === 'recurring' ? 'subscription' : 'payment'
    console.log('Setting mode to:', mode)

    // Create Checkout Session - SIMPLIFIED: No email handling needed
    const sessionConfig: any = {
      mode: mode,
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
      metadata: {
        product: 'Notion Highlights Pro'
      }
    }

    const session = await stripe.checkout.sessions.create(sessionConfig)

    console.log('Session created:', session.id)
    console.log('Checkout URL:', session.url)

    // Return the checkout URL for direct redirection
    res.status(200).json({ 
      sessionId: session.id,
      url: session.url,
      success: true,
      mode: mode
    })
  } catch (err: any) {
    console.error('Error creating checkout session:', err)
    res.status(500).json({ 
      error: err.message,
      details: 'Failed to create checkout session'
    })
  }
}