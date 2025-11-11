import Layout from '../components/Layout'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Success() {
  const router = useRouter()
  const { session_id } = router.query

  useEffect(() => {
    // Optional: You can verify the payment here or show a thank you message
    if (session_id) {
      console.log('Payment successful with session:', session_id)
      
      // You could also send this to your backend to verify
      fetch('/api/verify-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sessionId: session_id }),
      }).catch(err => console.log('Optional verification:', err))
    }
  }, [session_id])

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="glass-card text-center max-w-md">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-2xl">✓</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Payment Successful!</h1>
          <p className="text-white/70 mb-6">
            Thank you for upgrading to Notion Highlights Pro! 🎉
          </p>
          <p className="text-white/60 text-sm mb-6">
            Your Pro status should activate automatically within 30 seconds. 
            You can close this tab and return to the extension.
          </p>
          {session_id && (
            <p className="text-white/50 text-sm mb-6">
              Session: {session_id.substring(0, 20)}...
            </p>
          )}
          <div className="flex gap-4">
            <button 
              onClick={() => router.push('/')}
              className="gradient-button flex-1"
            >
              Return Home
            </button>
            <button 
              onClick={() => window.close()}
              className="glass-button flex-1"
            >
              Close Tab
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}