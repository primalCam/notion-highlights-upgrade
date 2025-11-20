// pages/index.tsx - LOGO WITH SHADOW ONLY
import Layout from '../components/Layout'
import Image from 'next/image'
import Head from 'next/head'

export default function Home() {
  const valueProps = [
    {
      icon: "⚡",
      title: "One-Click to Notion",
      description: "Right-click any web content and save directly to your chosen Notion page. No formatting mess, no disruptions."
    },
    {
      icon: "🎯", 
      title: "Stay in Flow State",
      description: "Never leave your current tab. Save content to Notion without breaking your research rhythm."
    },
    {
      icon: "📸",
      title: "Save Any Content", 
      description: "Text, code snippets, images - capture everything. Most tools only handle plain text."
    },
    {
      icon: "🔧",
      title: "Total Control",
      description: "Drag the highlight button anywhere on screen. Turn it on/off as needed for different workflows."
    }
  ]

  const trustSignals = [
    { number: "Free", text: "30 Highlights/Month" },
    { number: "2-Click", text: "Setup Process" },
    { number: "0", text: "Accounts Required" }
  ]

  const workflowSteps = [
    {
      step: "1",
      title: "Install & Connect",
      description: "Install extension, connect Notion, choose your default page"
    },
    {
      step: "2", 
      title: "Select & Right-Click",
      description: "Highlight any web content - text, code, images - and right-click"
    },
    {
      step: "3",
      title: "Auto-Save & Continue", 
      description: "Content saves instantly to your Notion page. Continue researching without interruption"
    }
  ]

  const contentTypes = [
    {
      icon: "📝",
      title: "Text & Articles",
      description: "Capture key insights from blogs, news, and research papers"
    },
    {
      icon: "💻",
      title: "Code Snippets", 
      description: "Save code examples, API responses, and technical solutions"
    },
    {
      icon: "🖼️",
      title: "Images & Screenshots",
      description: "Preserve visual content, diagrams, and UI examples"
    },
    {
      icon: "🤖",
      title: "AI Conversations",
      description: "Save ChatGPT responses, AI insights, and model outputs"
    }
  ]

  const habitBenefits = [
    {
      icon: "🔄",
      title: "Seamless Workflow",
      description: "Right-click → Save → Continue. The most natural research habit you'll build."
    },
    {
      icon: "🎛️",
      title: "Flexible Interface", 
      description: "Drag the highlight button anywhere. Show/hide it based on your current task."
    },
    {
      icon: "📚",
      title: "Growing Knowledge Base",
      description: "Watch your personal library grow effortlessly with every research session."
    }
  ]

  return (
    <Layout>
      {/* Add Head with Favicon */}
      <Head>
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/icons/icon48.png" />
        <link rel="icon" type="image/png" sizes="128x128" href="/icons/icon128.png" />
      </Head>

      {/* Hero Section with Logo Only */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="text-center max-w-4xl">
          {/* Logo with Shadow Only - No Container */}
          <div className="flex justify-center mb-8">
            <div className="drop-shadow-2xl drop-shadow-[#ffd700]/30">
              <Image 
                src="/icons/icon128.png" 
                alt="Notion Highlights Logo"
                width={96}
                height={96}
                className="object-contain"
              />
            </div>
          </div>

          {/* Product Hunt Badge */}
          <div className="flex justify-center mb-8">
            <a 
              href="https://www.producthunt.com/posts/notion-highlights" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1040420&theme=light&t=1763646160335" 
                alt="Notion Highlights - Save web highlights to Notion instantly – smart & free 🔥 | Product Hunt" 
                style={{ width: '250px', height: '54px' }} 
                width="250" 
                height="54" 
              />
            </a>
          </div>

          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-8">
            <span className="text-yellow-400">⚡</span>
            <span className="text-white text-sm">Save any web content directly to Notion</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Research Without
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] to-[#ffed4e] block mt-2">
              Breaking Flow
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto">
            Right-click any content - text, code, images - and save directly to Notion. Perfect for AI research and knowledge building.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <button 
              onClick={() => window.location.href = 'https://chromewebstore.google.com/detail/addpdkeebbfpcgificcaojjkbpddjhka?authuser=0&hl=en'}
              className="gradient-button text-lg py-4 px-12"
            >
              Install Free Extension
            </button>
            <button 
              onClick={() => window.location.href = '/upgrade'}
              className="glass-button text-lg py-4 px-12"
            >
              See Pro Features
            </button>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-8 opacity-70 mb-20">
            {trustSignals.map((signal, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-white">{signal.number}</div>
                <div className="text-white/60 text-sm">{signal.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of the sections remain exactly the same */}
      {/* Value Props Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Capture Everything, Interrupt Nothing
          </h2>
          <p className="text-xl text-white/70 text-center mb-16 max-w-2xl mx-auto">
            Built for researchers who need to save content without breaking concentration
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop, index) => (
              <div key={index} className="glass-card p-6">
                <div className="text-3xl mb-4">{prop.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{prop.title}</h3>
                <p className="text-white/70">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Natural Research Habits
          </h2>
          <p className="text-xl text-white/70 text-center mb-16 max-w-2xl mx-auto">
            The workflow that feels like second nature
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workflowSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#ffd700] to-[#ffed4e] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-black font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Save Any Content Type
          </h2>
          <p className="text-xl text-white/70 text-center mb-16 max-w-2xl mx-auto">
            Unlike text-only tools, capture everything that matters
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentTypes.map((type, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{type.title}</h3>
                <p className="text-white/70">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Habit Benefits Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Research That Feels Effortless
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {habitBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-white/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Free to Start, Pro When You Need It
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Start with 30 free highlights per month. Upgrade to unlimited when you're hooked.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="glass-card p-6">
              <h3 className="text-2xl font-bold text-white mb-4">Free</h3>
              <div className="text-4xl font-bold text-white mb-4">$0</div>
              <ul className="text-white/70 space-y-2 mb-6">
                <li>30 highlights/month</li>
                <li>All content types</li>
                <li>No account required</li>
                <li>Drag & position button</li>
              </ul>
            </div>
            <div className="glass-card p-6 ring-2 ring-[#ffd700]">
              <h3 className="text-2xl font-bold text-white mb-4">Pro</h3>
              <div className="text-4xl font-bold text-white mb-4">$12/mo</div>
              <ul className="text-white/70 space-y-2 mb-6">
                <li>Unlimited highlights</li>
                <li>All free features</li>
                <li>Priority support</li>
                <li>Future features</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Building Better Research Habits
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Join researchers who capture insights effortlessly while staying in flow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = 'https://chromewebstore.google.com/detail/addpdkeebbfpcgificcaojjkbpddjhka?authuser=0&hl=en'}
              className="gradient-button text-lg py-4 px-12"
            >
              Install Free Extension
            </button>
            <button 
              onClick={() => window.location.href = '/support'}
              className="glass-button text-lg py-4 px-12"
            >
              See How It Works
            </button>
          </div>
          <p className="text-white/50 text-sm mt-6">
            No credit card • No account • 30 free highlights monthly
          </p>
        </div>
      </section>
    </Layout>
  )
}