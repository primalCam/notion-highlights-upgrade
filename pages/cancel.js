import Layout from '../components/Layout'

export default function Cancel() {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="glass-card text-center max-w-md p-8">
          <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-yellow-500/30">
            <span className="text-yellow-400 text-2xl">🛒</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Payment Cancelled</h1>
          <p className="text-white/70 mb-4">
            Your payment was cancelled. No charges were made to your account.
          </p>
          <p className="text-white/60 text-sm mb-6">
            Having trouble with payment? <br />
            <a href="mailto:support@notionhighlights.com" className="text-[#ffd700] hover:underline">
              Contact our support team
            </a>
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => window.location.href = '/upgrade'}
              className="gradient-button flex-1 py-3"
            >
              Try Again
            </button>
            <button 
              onClick={() => window.location.href = '/'}
              className="glass-button flex-1 py-3"
            >
              Return Home
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}