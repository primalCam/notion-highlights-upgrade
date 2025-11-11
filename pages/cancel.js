import Layout from '../components/Layout'

export default function Cancel() {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="glass-card text-center max-w-md">
          <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-2xl">!</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Payment Cancelled</h1>
          <p className="text-white/70 mb-6">
            Your payment was cancelled. No charges were made.
          </p>
          <div className="flex gap-4">
            <button 
              onClick={() => window.location.href = '/upgrade'}
              className="gradient-button flex-1"
            >
              Try Again
            </button>
            <button 
              onClick={() => window.location.href = '/'}
              className="glass-button flex-1"
            >
              Return Home
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}