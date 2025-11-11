import Layout from '../components/Layout'
import { useRouter } from 'next/router'

export default function Success() {
  const router = useRouter()
  const { session_id } = router.query

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="glass-card text-center max-w-md">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-2xl">✓</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Payment Successful!</h1>
          <p className="text-white/70 mb-6">
            Thank you for upgrading to Notion Highlights Pro!
          </p>
          {session_id && (
            <p className="text-white/50 text-sm mb-6">
              Session: {session_id}
            </p>
          )}
          <button 
            onClick={() => router.push('/')}
            className="gradient-button"
          >
            Return Home
          </button>
        </div>
      </div>
    </Layout>
  )
}
