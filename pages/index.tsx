import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Save Web Highlights
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] to-[#ffed4e] block mt-2">
              Directly to Notion
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto">
            One-click highlighting. Unlimited organization. Never lose an insight again.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="gradient-button text-lg py-4 px-12">
              Get Started Free
            </button>
            <button className="glass-button text-lg py-4 px-12">
              View Pricing
            </button>
          </div>
        </div>
      </section>
    </Layout>
  )
}
