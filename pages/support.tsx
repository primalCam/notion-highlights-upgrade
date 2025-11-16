// pages/support.tsx
import Layout from '../components/Layout'
import { useState } from 'react'

export default function Support() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null)

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
      answer: "Yes, completely free to start. No hidden costs, no trial periods, no credit card required. You get 30 highlights per month forever. We only ask for payment if you need unlimited highlights. Unlike other software, we believe you should get value first."
    },
    {
      question: "How does the free plan work?",
      answer: "You get 30 highlights per month completely free. This resets on the 1st of each month. No credit card required. If you find yourself needing more, you can upgrade to Pro for unlimited highlights."
    },
    {
      question: "What content can I save to Notion?",
      answer: "You can save any selected content: text, code snippets, images, and even formatted content from AI chats like ChatGPT. Unlike other tools, we preserve the original formatting when possible."
    },
    {
      question: "Can I choose where to save my highlights?",
      answer: "Yes! During setup you select your default Notion page. You can also change this anytime by clicking the extension icon and selecting a different page."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We never store your highlights or personal data. Everything goes directly from your browser to your Notion workspace. We use secure OAuth authentication just like other trusted Notion integrations."
    },
    {
      question: "How do I move the highlight button?",
      answer: "The floating button can be dragged anywhere on your screen. Simply click and hold to reposition it. We keep it visible so you always have quick access to highlight mode without reopening the popup."
    },
    {
      question: "Do I need to create an account with you?",
      answer: "No! We don't require you to create an account with us. You only need to connect your existing Notion account. We believe in minimizing friction and letting you get value immediately."
    }
  ]

  const contactMethods = [
    {
      icon: "💬",
      title: "Live Chat",
      description: "Get instant help from our team",
      action: "Start Chat",
      onClick: () => {
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
      onClick: () => window.location.href = 'mailto:support@notionhighlights.com'
    },
    {
      icon: "🦋",
      title: "X (Twitter)",
      description: "Quick updates and announcements",
      action: "Follow Us",
      onClick: () => window.open('https://twitter.com/NotionHighlight', '_blank')
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
              Get help with setup, troubleshooting, or anything else. We're committed to making your research workflow seamless.
            </p>
          </div>

          {/* Knowledge Base CTA */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">📚 Self-Service Help Center</h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Find instant answers to common questions in our comprehensive knowledge base.
            </p>
            <button 
              onClick={() => window.open('https://notionhighlightshelp.tawk.help/', '_blank')}
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
                    onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
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
              We're here to make sure you get the most out of Notion Highlights.
            </p>
            <button 
              onClick={() => window.location.href = '/contact'}
              className="gradient-button text-lg py-3 px-8"
            >
              Contact Us Directly
            </button>
          </div>

          {/* Quick Tips */}
          <div className="glass-card p-6 mt-12">
            <h3 className="text-xl font-bold text-white mb-4 text-center">
              💡 Quick Tips
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="text-white/70">
                • <strong>Activate first:</strong> Open popup and turn on highlight mode after connecting
              </div>
              <div className="text-white/70">
                • <strong>Cursor placement:</strong> Highlights append where cursor is positioned
              </div>
              <div className="text-white/70">
                • <strong>Pro users:</strong> Sign in with your purchase email in the extension
              </div>
              <div className="text-white/70">
                • <strong>Floating button:</strong> Drag it anywhere for optimal positioning
              </div>
              <div className="text-white/70">
                • <strong>Truly free:</strong> No account required, 30 highlights/month
              </div>
              <div className="text-white/70">
                • <strong>Right-click method:</strong> Select text → Right-click → "Save to Notion"
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}