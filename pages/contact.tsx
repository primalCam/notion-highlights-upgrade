// pages/contact.tsx
import Layout from '../components/Layout'
import { useState } from 'react'

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
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get In
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] to-[#ffed4e] block">
                Touch
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Have questions, feedback, or need help? We're here for you. Choose the best way to reach out.
            </p>
          </div>

          {/* Knowledge Base CTA */}
          <div className="glass-card p-6 mb-8 text-center">
            <h3 className="text-xl font-bold text-white mb-3">💡 Check Our Help Center First</h3>
            <p className="text-white/70 mb-4">
              Many questions are already answered in our detailed knowledge base.
            </p>
            <button 
              onClick={() => window.open('https://notionhighlightshelp.tawk.help/', '_blank')}
              className="glass-button py-2 px-6"
            >
              Search Help Articles
            </button>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <div className="text-3xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                <p className="text-white/70 mb-2">{method.description}</p>
                <p className="text-white/60 text-sm mb-4">{method.details}</p>
                <button 
                  onClick={method.onClick}
                  className="gradient-button w-full py-2"
                >
                  {method.action}
                </button>
              </div>
            ))}
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'contact'
                  ? 'gradient-button'
                  : 'glass-button'
              }`}
            >
              📧 Contact Us
            </button>
            <button
              onClick={() => setActiveTab('feature')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'feature'
                  ? 'gradient-button'
                  : 'glass-button'
              }`}
            >
              💡 Request Feature
            </button>
          </div>

          {/* Contact Form */}
          {activeTab === 'contact' && (
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                Send Us a Message
              </h2>
              
              <form
                action="https://formspree.io/f/xpwkqzao"
                method="POST"
                className="space-y-6"
              >
                {/* Hidden fields for better Formspree handling */}
                <input type="hidden" name="_subject" value="New Contact Form Submission - Notion Highlights" />
                <input type="hidden" name="_format" value="plain" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white/80 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#ffd700] focus:border-transparent"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white/80 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#ffd700] focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white/80 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ffd700] focus:border-transparent"
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
                  <label htmlFor="message" className="block text-white/80 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#ffd700] focus:border-transparent resize-vertical"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full gradient-button py-4 text-lg hover:scale-105 transition-transform duration-200"
                >
                  Send Message
                </button>
              </form>

              {/* Form Submission Note */}
              <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
                <p className="text-white/70 text-sm text-center">
                  📧 After submitting, you'll be redirected to Formspree. We'll receive your message instantly and respond within 24 hours.
                </p>
              </div>
            </div>
          )}

          {/* Feature Request Form */}
          {activeTab === 'feature' && (
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                Request a New Feature
              </h2>
              <p className="text-white/70 text-center mb-8">
                Have an idea to make Notion Highlights better? We'd love to hear it! Your feedback helps shape our roadmap.
              </p>
              
              <form
                action="https://formspree.io/f/xqawyllp"
                method="POST"
                className="space-y-6"
              >
                {/* Hidden fields for better Formspree handling */}
                <input type="hidden" name="_subject" value="New Feature Request - Notion Highlights" />
                <input type="hidden" name="_format" value="plain" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="feature-name" className="block text-white/80 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="feature-name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#ffd700] focus:border-transparent"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="feature-email" className="block text-white/80 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="feature-email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#ffd700] focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="feature-title" className="block text-white/80 mb-2">
                    Feature Title *
                  </label>
                  <input
                    type="text"
                    id="feature-title"
                    name="feature_title"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#ffd700] focus:border-transparent"
                    placeholder="e.g., Bulk export highlights, Dark mode, etc."
                  />
                </div>

                <div>
                  <label htmlFor="feature-description" className="block text-white/80 mb-2">
                    Feature Description *
                  </label>
                  <textarea
                    id="feature-description"
                    name="feature_description"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#ffd700] focus:border-transparent resize-vertical"
                    placeholder="Describe the feature in detail. What problem does it solve? How would it work?"
                  />
                </div>

                <div>
                  <label htmlFor="feature-usecase" className="block text-white/80 mb-2">
                    Use Case (Optional)
                  </label>
                  <textarea
                    id="feature-usecase"
                    name="use_case"
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#ffd700] focus:border-transparent resize-vertical"
                    placeholder="How would you use this feature in your workflow? Help us understand your scenario."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full gradient-button py-4 text-lg hover:scale-105 transition-transform duration-200"
                >
                  Submit Feature Request
                </button>
              </form>

              {/* Form Submission Note */}
              <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
                <p className="text-white/70 text-sm text-center">
                  💡 We review all feature requests and consider them for our roadmap. Thank you for helping us improve!
                </p>
              </div>
            </div>
          )}

          {/* Response Time & Support Info */}
          <div className="text-center mt-12">
            <div className="glass-card p-6 inline-block">
              <h3 className="text-xl font-bold text-white mb-4">
                💡 What to Expect
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div>
                  <div className="font-bold text-white mb-1">Response Time</div>
                  <div className="text-white/70">Within 24 hours</div>
                </div>
                <div>
                  <div className="font-bold text-white mb-1">Support Hours</div>
                  <div className="text-white/70">Mon-Fri, 9AM-6PM EST</div>
                </div>
                <div>
                  <div className="font-bold text-white mb-1">Emergency</div>
                  <div className="text-white/70">Use live chat for urgent issues</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}