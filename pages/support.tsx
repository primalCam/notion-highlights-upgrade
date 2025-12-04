// pages/support.tsx
import Layout from '../components/Layout'
import { useState, useEffect } from 'react'
import { gaEvent } from '../lib/ga'

export default function Support() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null)

  useEffect(() => {
    gaEvent('page_view', { page: 'support' })
  }, [])

  const faqs = [
    {
      question: "How do I get started?",
      answer: "Just install the extension and connect your Notion account - that's it! No email signup, no credit card, no account with us required. After connecting, open the extension popup and activate highlight mode to start using it. You can start highlighting immediately with 30 free highlights per month."
    },
    {
      question: "Why isn't highlighting working after I connected to Notion?",
      answer: "The highlight feature is off by default when you first connect. Simply open the extension popup and click to activate highlight mode. Once activated, you're ready to start highlighting!"
    },
    {
      question: "How does the new zero-OAuth mode work?",
      answer: "Version 1.4.1 introduces a lightning-fast save mode that works without OAuth login! Here's how it works: 1) Open any Notion page in a tab, 2) Find your page in the extension dropdown, 3) Select it, 4) Turn on highlight mode, 5) Highlight and right-click. No login required for this mode - perfect for quick saves!"
    },
    {
      question: "How do I save YouTube videos to Notion?",
      answer: "YouTube video embedding works when highlight mode is ON and you're connected to Notion. Right-click any YouTube video on the web (not in fullscreen mode) and select 'Save YouTube Video to Notion' from the context menu. Use the Notion connected pages in your dropdown to select destinations for YouTube embedding. The video will embed directly into your chosen page."
    },
    {
      question: "I'm having trouble setting up a destination page - what should I do?",
      answer: "If you're having trouble setting up a destination page, try this: 1) Open the extension popup, 2) Deselect your current page from the dropdown, 3) Close and reopen the popup, 4) Reselect your desired page from the list. This rare issue is usually resolved by refreshing the page connection. Make sure you have edit access to the Notion page you're selecting."
    },
    {
      question: "How does cursor placement work?",
      answer: "By default, the cursor is placed at the end of your Notion page, so all new highlights will append in descending order (newest at bottom). If you want highlights to appear in a different location, simply move your cursor to that position on the page - future highlights will append there. To keep all highlights in descending order, don't move the cursor."
    },
    {
      question: "I upgraded to Pro but it's not working - what should I do?",
      answer: "Make sure you're signed into the extension with the same email address you used to purchase Pro through Stripe. The system automatically creates an account for you when you purchase - no password needed, just use your email. The extension needs to verify your Pro status through your email. If you're still having issues, contact support."
    },
    {
      question: "Can I sign in if I'm using the free plan?",
      answer: "Sign-in is only available for Pro members. When you're on the free plan, you don't need to sign in - just connect to Notion and start using it! An account is only auto-created when you purchase a Pro plan through Stripe. Free users can enjoy all basic features without any account or sign-in process."
    },
    {
      question: "Is it really free? What's the catch?",
      answer: "Yes, completely free to start. No hidden costs, no trial periods, no credit card required. You get 30 highlights per month forever. We only ask for payment if you need unlimited highlights. Unlike other software, we believe you should get value first. Version 1.4.1 adds YouTube video saving and zero-OAuth mode to the free plan!"
    },
    {
      question: "How does the free plan work?",
      answer: "You get 30 highlights per month completely free. This resets on the 1st of each month. No credit card required. If you find yourself needing more, you can upgrade to Pro for unlimited highlights. All 1.4.1 features (YouTube saving, zero-OAuth mode, faster clipping) are available in the free plan."
    },
    {
      question: "What content can I save to Notion?",
      answer: "You can save any selected content: text, code snippets, images, YouTube videos, and even formatted content from AI chats like ChatGPT. Unlike other tools, we preserve the original formatting when possible and now embed YouTube videos directly."
    },
    {
      question: "Can I choose where to save my highlights?",
      answer: "Yes! During setup you select your default Notion page. You can also change this anytime by clicking the extension icon and selecting a different page. YouTube videos also use this same destination selection."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We never store your highlights or personal data. Everything goes directly from your browser to your Notion workspace. We use secure OAuth authentication just like other trusted Notion integrations. The new zero-OAuth mode works without sending any data to our servers - it goes directly from browser to Notion."
    },
    {
      question: "How do I move the highlight button?",
      answer: "The floating button can be dragged anywhere on your screen. Simply click and hold to reposition it. We keep it visible so you always have quick access to highlight mode without reopening the popup."
    },
    {
      question: "Do I need to create an account with you?",
      answer: "No! We don't require you to create an account with us. You only need to connect your existing Notion account. We believe in minimizing friction and letting you get value immediately. Even the new zero-OAuth mode works without creating any account."
    },
    {
      question: "What's new in version 1.4.1?",
      answer: "Version 1.4.1 adds: 1) YouTube video saving - right-click any YouTube video to embed it, 2) Zero-OAuth save mode - lightning-fast saving without login, 3) Improved highlight accuracy - cleaner selection detection, 4) Faster clipping pipeline - near-instant capture, 5) Better selection flow - more consistent text extraction. All available in the free plan!"
    }
  ]

  const contactMethods = [
    {
      icon: "💬",
      title: "Live Chat",
      description: "Get instant help from our team",
      action: "Start Chat",
      onClick: () => {
        gaEvent('contact_click', { method: 'live_chat' })
        if (typeof window !== 'undefined' && (window as any).Tawk_API) {
          (window as any).Tawk_API.maximize();
        }
      }
    },
    {
      icon: "📧",
      title: "Email Support",
      description: "We respond within 24 hours",
      action: "Send Email", 
      onClick: () => {
        gaEvent('contact_click', { method: 'email' })
        window.location.href = 'mailto:support@notionhighlights.com'
      }
    },
    {
      icon: "🦋",
      title: "X (Twitter)",
      description: "Quick updates and announcements",
      action: "Follow Us",
      onClick: () => {
        gaEvent('contact_click', { method: 'twitter' })
        window.open('https://twitter.com/NotionHighlight', '_blank')
      }
    }
  ]

  return (
    <Layout>
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              We're Here to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] to-[#ffed4e] block">
                Help You
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Get help with setup, troubleshooting, or anything else. We're committed to making your research workflow seamless with our latest 1.4.1 features.
            </p>
          </div>

          {/* Knowledge Base CTA */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">📚 Self-Service Help Center</h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Find instant answers to common questions about YouTube saving, zero-OAuth mode, and all new 1.4.1 features.
            </p>
            <button 
              onClick={() => {
                gaEvent('help_center_click')
                window.open('https://notionhighlightshelp.tawk.help/', '_blank')
              }}
              className="gradient-button text-lg py-3 px-8"
            >
              Visit Help Center
            </button>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <div className="text-3xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                <p className="text-white/70 mb-4">{method.description}</p>
                <button 
                  onClick={method.onClick}
                  className="gradient-button w-full py-2"
                >
                  {method.action}
                </button>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="glass-card p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-white/10 pb-4">
                  <button
                    onClick={() => {
                      if (activeFAQ !== index) {
                        gaEvent('faq_opened', { question: faq.question.substring(0, 50) })
                      }
                      setActiveFAQ(activeFAQ === index ? null : index)
                    }}
                    className="flex justify-between items-center w-full text-left"
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">
                      {faq.question}
                    </h3>
                    <span className="text-[#ffd700] text-xl flex-shrink-0">
                      {activeFAQ === index ? '−' : '+'}
                    </span>
                  </button>
                  
                  {activeFAQ === index && (
                    <div className="mt-3 text-white/70">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Still Need Help */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still need help?
            </h3>
            <p className="text-white/70 mb-6">
              We're here to make sure you get the most out of Notion Highlights 1.4.1.
            </p>
            <button 
              onClick={() => {
                gaEvent('contact_us_click')
                window.location.href = '/contact'
              }}
              className="gradient-button text-lg py-3 px-8"
            >
              Contact Us Directly
            </button>
          </div>

          {/* Quick Tips */}
          <div className="glass-card p-6 mt-12">
            <h3 className="text-xl font-bold text-white mb-4 text-center">
              💡 Quick Tips for Version 1.4.1
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="text-white/70">
                • <strong>YouTube saving:</strong> Right-click videos (not fullscreen) → "Save YouTube Video to Notion"
              </div>
              <div className="text-white/70">
                • <strong>Zero-OAuth mode:</strong> Open Notion page → Find in dropdown → Select → Turn on highlight mode
              </div>
              <div className="text-white/70">
                • <strong>Activate first:</strong> Open popup and turn on highlight mode after connecting
              </div>
              <div className="text-white/70">
                • <strong>Cursor placement:</strong> Highlights append where cursor is positioned
              </div>
              <div className="text-white/70">
                • <strong>Page selection issues:</strong> Deselect and reselect page in dropdown
              </div>
              <div className="text-white/70">
                • <strong>Faster clipping:</strong> New pipeline reduces wait times significantly
              </div>
              <div className="text-white/70">
                • <strong>Pro users:</strong> Sign in with your purchase email in the extension
              </div>
              <div className="text-white/70">
                • <strong>Floating button:</strong> Drag it anywhere for optimal positioning
              </div>
              <div className="text-white/70">
                • <strong>All new features:</strong> YouTube saving & zero-OAuth mode available in free plan
              </div>
              <div className="text-white/70">
                • <strong>Right-click method:</strong> Select text → Right-click → "Save to Notion"
              </div>
              <div className="text-white/70">
                • <strong>Improved accuracy:</strong> Cleaner selection detection with tighter bounding boxes
              </div>
              <div className="text-white/70">
                • <strong>Destination pages:</strong> YouTube videos use same dropdown as highlights
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}