// pages/contact.tsx
import Layout from '../components/Layout'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [activeTab, setActiveTab] = useState<'contact' | 'feature'>('contact')

  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      description: "We respond within 24 hours",
      details: "support@notionhighlights.com",
      action: "Send Email",
      onClick: () => window.location.href = 'mailto:support@notionhighlights.com'
    },
    {
      icon: "💬",
      title: "Live Chat",
      description: "Get instant help",
      details: "Click the chat widget in the corner",
      action: "Start Chat",
      onClick: () => {
        if (typeof window !== 'undefined' && (window as any).Tawk_API) {
          (window as any).Tawk_API.maximize();
        }
      }
    },
    {
      icon: "🦋",
      title: "X (Twitter)",
      description: "Quick updates and announcements",
      details: "@NotionHighlight",
      action: "Follow Us",
      onClick: () => window.open('https://twitter.com/NotionHighlight', '_blank')
    }
  ]

  const subjects = [
    "General Inquiry",
    "Technical Support",
    "Billing Question",
    "Feature Request",
    "Partnership",
    "Other"
  ]

  return (
    <Layout>
      {/* Base Background */}
      <div className="min-h-screen bg-[#030303] pt-32 pb-20 px-6">
        
        {/* Dynamic Glow */}
        <div className="fixed inset-0 pointer-events-none -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-yellow-400/20 to-yellow-600/10 blur-[160px] opacity-40" />
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-6">
              Get In
              <span className="text-white/20 block">Touch</span>
            </h1>
            <p className="text-white/40 text-lg max-w-xl mx-auto font-light">
              Have questions, feedback, or need help? We're here for you. Choose the best way to reach out.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card-chrome p-8 rounded-[2.5rem] border border-white/10 text-center"
              >
                <div className="text-4xl mb-6 text-yellow-400">{method.icon}</div>
                <h3 className="text-2xl font-black text-white mb-3 tracking-tight">{method.title}</h3>
                <p className="text-white/60 mb-3 font-light">{method.description}</p>
                <p className="text-white/40 text-sm mb-6 font-mono">{method.details}</p>
                <button 
                  onClick={method.onClick}
                  className="w-full py-4 bg-white text-black font-black rounded-2xl hover:scale-105 transition-all duration-300 text-sm uppercase tracking-widest"
                >
                  {method.action}
                </button>
              </motion.div>
            ))}
          </div>

          {/* Knowledge Base CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card-chrome p-8 rounded-[2.5rem] border border-yellow-500/20 mb-12 text-center bg-gradient-to-br from-yellow-500/5 to-transparent"
          >
            <h3 className="text-2xl font-black text-white mb-4 tracking-tight">💡 Check Our Help Center First</h3>
            <p className="text-white/60 mb-6 max-w-lg mx-auto font-light">
              Many questions are already answered in our detailed knowledge base.
            </p>
            <button 
              onClick={() => window.open('https://notionhighlightshelp.tawk.help/', '_blank')}
              className="bg-white/5 text-white font-bold text-sm uppercase tracking-widest py-4 px-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              Search Help Articles
            </button>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center gap-4 mb-12"
          >
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 ${
                activeTab === 'contact'
                  ? 'bg-white text-black'
                  : 'bg-white/[0.03] border border-white/10 text-white/60 hover:text-white'
              }`}
            >
              📧 Contact Us
            </button>
            <button
              onClick={() => setActiveTab('feature')}
              className={`px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 ${
                activeTab === 'feature'
                  ? 'bg-white text-black'
                  : 'bg-white/[0.03] border border-white/10 text-white/60 hover:text-white'
              }`}
            >
              💡 Request Feature
            </button>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass-card-chrome p-12 rounded-[2.5rem] border border-white/10 max-w-2xl mx-auto"
          >
            {activeTab === 'contact' && (
              <>
                <h2 className="text-4xl font-black text-white mb-8 text-center tracking-tight">
                  Send Us a Message
                </h2>
                
                <form
                  action="https://formspree.io/f/xpwkqzao"
                  method="POST"
                  className="space-y-8"
                >
                  {/* Hidden fields for better Formspree handling */}
                  <input type="hidden" name="_subject" value="New Contact Form Submission - Notion Highlights" />
                  <input type="hidden" name="_format" value="plain" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white/60 mb-3 font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/20 transition-all duration-300 font-light"
                        placeholder="Enter your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-white/60 mb-3 font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/20 transition-all duration-300 font-light"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-white/60 mb-3 font-medium">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/20 transition-all duration-300 font-light appearance-none"
                    >
                      <option value="">Select a subject</option>
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white/60 mb-3 font-medium">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/20 transition-all duration-300 font-light resize-vertical"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white text-black font-black text-sm uppercase tracking-widest py-5 rounded-2xl hover:scale-105 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>

                {/* Form Submission Note */}
                <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/10">
                  <p className="text-white/40 text-sm text-center font-light">
                    📧 After submitting, you'll be redirected to Formspree. We'll receive your message instantly and respond within 24 hours.
                  </p>
                </div>
              </>
            )}

            {/* Feature Request Form */}
            {activeTab === 'feature' && (
              <>
                <h2 className="text-4xl font-black text-white mb-8 text-center tracking-tight">
                  Request a New Feature
                </h2>
                <p className="text-white/60 text-center mb-8 font-light">
                  Have an idea to make Notion Highlights better? We'd love to hear it! Your feedback helps shape our roadmap.
                </p>
                
                <form
                  action="https://formspree.io/f/xqawyllp"
                  method="POST"
                  className="space-y-8"
                >
                  {/* Hidden fields for better Formspree handling */}
                  <input type="hidden" name="_subject" value="New Feature Request - Notion Highlights" />
                  <input type="hidden" name="_format" value="plain" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="feature-name" className="block text-white/60 mb-3 font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="feature-name"
                        name="name"
                        required
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/20 transition-all duration-300 font-light"
                        placeholder="Enter your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="feature-email" className="block text-white/60 mb-3 font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="feature-email"
                        name="email"
                        required
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/20 transition-all duration-300 font-light"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="feature-title" className="block text-white/60 mb-3 font-medium">
                      Feature Title *
                    </label>
                    <input
                      type="text"
                      id="feature-title"
                      name="feature_title"
                      required
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/20 transition-all duration-300 font-light"
                      placeholder="e.g., Bulk export highlights, Dark mode, etc."
                    />
                  </div>

                  <div>
                    <label htmlFor="feature-description" className="block text-white/60 mb-3 font-medium">
                      Feature Description *
                    </label>
                    <textarea
                      id="feature-description"
                      name="feature_description"
                      required
                      rows={6}
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/20 transition-all duration-300 font-light resize-vertical"
                      placeholder="Describe the feature in detail. What problem does it solve? How would it work?"
                    />
                  </div>

                  <div>
                    <label htmlFor="feature-usecase" className="block text-white/60 mb-3 font-medium">
                      Use Case (Optional)
                    </label>
                    <textarea
                      id="feature-usecase"
                      name="use_case"
                      rows={4}
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/20 transition-all duration-300 font-light resize-vertical"
                      placeholder="How would you use this feature in your workflow? Help us understand your scenario."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white text-black font-black text-sm uppercase tracking-widest py-5 rounded-2xl hover:scale-105 transition-all duration-300"
                  >
                    Submit Feature Request
                  </button>
                </form>

                {/* Form Submission Note */}
                <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/10">
                  <p className="text-white/40 text-sm text-center font-light">
                    💡 We review all feature requests and consider them for our roadmap. Thank you for helping us improve!
                  </p>
                </div>
              </>
            )}
          </motion.div>

          {/* Response Time & Support Info */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <div className="glass-card-chrome p-8 rounded-[2.5rem] border border-white/10 inline-block max-w-2xl bg-gradient-to-br from-yellow-500/5 to-transparent">
              <h3 className="text-2xl font-black text-white mb-6 tracking-tight">
                💡 What to Expect
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { label: "Response Time", value: "Within 24 hours", emoji: "⚡" },
                  { label: "Support Hours", value: "Mon-Fri, 9AM-6PM EST", emoji: "🕒" },
                  { label: "Emergency", value: "Use live chat for urgent issues", emoji: "🚨" },
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + (index * 0.1) }}
                    className="text-center"
                  >
                    <div className="text-2xl mb-2 text-yellow-400">{item.emoji}</div>
                    <div className="font-bold text-white mb-1 text-sm uppercase tracking-widest">{item.label}</div>
                    <div className="text-white/40 text-sm font-light">{item.value}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        body { background: #030303; }
        .glass-card-chrome {
          background: rgba(255, 255, 255, 0.01);
          backdrop-filter: blur(40px) saturate(200%);
          -webkit-backdrop-filter: blur(40px) saturate(200%);
        }
        select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23ffffff' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          background-size: 1.5em;
          padding-right: 3rem;
        }
        select option {
          background: #1a1a1a;
          color: white;
        }
      `}</style>
    </Layout>
  )
}