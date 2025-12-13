// pages/support.tsx
import Layout from '../components/Layout'
import { useState, useEffect } from 'react'
import { gaEvent } from '../lib/ga'

export default function Support() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<'notion-highlights' | 'focus-dock'>('notion-highlights')
  const [activeSection, setActiveSection] = useState<'faq' | 'contact'>('faq')

  useEffect(() => {
    gaEvent('page_view', { page: 'support' })
  }, [])

  // Common contact methods
  const contactMethods = [
    {
      icon: "📧",
      title: "Email Support",
      description: "We respond within 24 hours",
      action: "Send Email", 
      onClick: () => {
        gaEvent('contact_click', { method: 'email', product: selectedProduct })
        const email = selectedProduct === 'notion-highlights' ? 'support@notionhighlights.com' : 'focusdock@notionhighlights.com'
        window.location.href = `mailto:${email}`
      }
    },
    {
      icon: "💬",
      title: "Live Chat",
      description: "Get instant help from our team",
      action: "Start Chat",
      onClick: () => {
        gaEvent('contact_click', { method: 'live_chat', product: selectedProduct })
        if (typeof window !== 'undefined' && (window as any).Tawk_API) {
          (window as any).Tawk_API.maximize();
        }
      }
    },
    {
      icon: "🦋",
      title: "X (Twitter)",
      description: "Quick updates and announcements",
      action: "Follow Us",
      onClick: () => {
        gaEvent('contact_click', { method: 'twitter', product: selectedProduct })
        const handle = selectedProduct === 'notion-highlights' ? 'NotionHighlight' : 'FocusDockApp'
        window.open(`https://twitter.com/${handle}`, '_blank')
      }
    }
  ]

  // Notion Highlights FAQs
  const notionHighlightsFAQs = [
    {
      question: "How do I get started with Notion Highlights?",
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

  // Focus Dock FAQs
  const focusDockFAQs = [
    {
      question: "How do I get started with Focus Dock?",
      answer: "Install the extension from Chrome Web Store and press ⌘+. (Cmd+Period) to open the launcher. No setup required! You can immediately search tabs, bookmarks, history, and notes. For quick notes, just type /note followed by your text."
    },
    {
      question: "What keyboard shortcuts are available?",
      answer: "• ⌘+. (Cmd+Period) - Open Focus Dock launcher\n• /note [text] - Save quick notes\n• /notes - View all notes\n• /read - View reading list\n• /groups - Manage tab groups\n• Arrow keys - Navigate results\n• Enter - Open selected item\n• Tab - Show actions for selected item\n• Esc - Close launcher"
    },
    {
      question: "How do I use tab groups?",
      answer: "Focus Dock automatically organizes your tabs into smart groups. You can also create custom groups: 1) Type /groups to see existing groups, 2) Type /group [Name] to create a new group from current window tabs, 3) Use /autogroup to automatically group tabs by domain (Pro feature)"
    },
    {
      question: "What can I search with Focus Dock?",
      answer: "Focus Dock searches everything: open tabs, bookmarks, browser history, quick notes, reading list, clipboard history, and saved workspaces. Just start typing to search across all sources."
    },
    {
      question: "How do I save pages to read later?",
      answer: "Press ⌘+Shift+S on any webpage to save it to your reading list. Then type /read to access your saved articles. Free users get 10 slots, Pro users get unlimited."
    },
    {
      question: "How do quick notes work?",
      answer: "Type /note followed by your note text to save it instantly. You can add due dates like /note @today Call mom or /note @tomorrow Submit report. Type /notes to view all your notes."
    },
    {
      question: "What's the difference between Free and Pro?",
      answer: "Free includes all core features with limits: 5 notes, 1 workspace, 10 reading list items, 3 clipboard items. Pro removes all limits and adds: unlimited notes/workspaces/reading list, 100 clipboard items, auto-grouping by domain, tab thumbnails, and priority support."
    },
    {
      question: "How do I use workspaces?",
      answer: "Save your current tabs as a workspace: Type /save [WorkspaceName]. Restore it later by typing /[WorkspaceName] or /workspaces to see all saved workspaces. Workspaces save tabs from your current window."
    },
    {
      question: "How does multi-select work?",
      answer: "Click the checkbox next to any tab result to select it. Use Shift+Arrow keys to select ranges. Once selected, press Enter to see bulk actions: close all, bookmark all, move to new window, or group together."
    },
    {
      question: "How do I search tabs from a specific domain?",
      answer: "Type /domain.com to see all tabs from that domain. You'll get options to close or bookmark all tabs from that domain at once."
    },
    {
      question: "What are tab thumbnails?",
      answer: "Pro users get visual previews of tabs as thumbnail images. Hover over any tab result to see a preview. Free users see the first 3 thumbnails, Pro users get unlimited thumbnails."
    },
    {
      question: "How does clipboard history work?",
      answer: "Focus Dock automatically saves your clipboard history. Type /clip to see recent copies. Click any item to copy it again. Free: 3 items, Pro: 100 items."
    },
    {
      question: "How do I create custom keyboard shortcuts?",
      answer: "Go to chrome://extensions/shortcuts to customize Focus Dock shortcuts. The default launcher shortcut is ⌘+. (Cmd+Period)."
    },
    {
      question: "Is my data stored locally or in the cloud?",
      answer: "All your data (notes, reading list, workspaces, clipboard) is stored locally in your browser. Nothing is sent to our servers. Your data stays private and works offline."
    },
    {
      question: "How do I upgrade to Pro?",
      answer: "Click the 'Upgrade to Pro' button in the launcher or visit focusdock.app/pro. Pro is $4.99/month with a 30-day money-back guarantee."
    }
  ]

  const currentFAQs = selectedProduct === 'notion-highlights' ? notionHighlightsFAQs : focusDockFAQs
  const productInfo = {
    'notion-highlights': {
      name: 'Notion Highlights',
      description: 'Highlight & save web content directly to Notion',
      color: 'from-[#ffd700] to-[#ffed4e]',
      icon: '✨'
    },
    'focus-dock': {
      name: 'Focus Dock',
      description: 'Universal Chrome launcher for tabs, notes, and bookmarks',
      color: 'from-red-400 to-red-300',
      icon: '⚡'
    }
  }

  const productTips = {
    'notion-highlights': [
      "• YouTube saving: Right-click videos (not fullscreen) → 'Save YouTube Video to Notion'",
      "• Zero-OAuth mode: Open Notion page → Find in dropdown → Select → Turn on highlight mode",
      "• Activate first: Open popup and turn on highlight mode after connecting",
      "• Cursor placement: Highlights append where cursor is positioned",
      "• Page selection issues: Deselect and reselect page in dropdown",
      "• Faster clipping: New pipeline reduces wait times significantly",
      "• Pro users: Sign in with your purchase email in the extension",
      "• Floating button: Drag it anywhere for optimal positioning",
      "• All new features: YouTube saving & zero-OAuth mode available in free plan",
      "• Right-click method: Select text → Right-click → 'Save to Notion'",
      "• Improved accuracy: Cleaner selection detection with tighter bounding boxes",
      "• Destination pages: YouTube videos use same dropdown as highlights"
    ],
    'focus-dock': [
      "• Quick launcher: Press ⌘+. (Cmd+Period) from anywhere",
      "• Quick notes: Type /note followed by your text",
      "• Due dates: Use /note @today Call mom or /note @tomorrow Submit report",
      "• Reading list: Press ⌘+Shift+S on any page to save for later",
      "• Tab groups: Type /groups to manage or /group ProjectName to create",
      "• Multi-select: Click checkboxes next to tabs, then press Enter for bulk actions",
      "• Workspaces: Type /save ProjectName then /ProjectName to restore",
      "• Domain search: Type /github.com to see all GitHub tabs",
      "• Clipboard: Type /clip to see recent copies",
      "• Fuzzy search: Works even with typos and partial matches",
      "• Keyboard navigation: Use ↑↓ arrows, Tab for actions, Enter to execute",
      "• Free limits: 5 notes, 1 workspace, 10 reading list items, 3 clipboard items"
    ]
  }

  return (
    <Layout>
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header with Product Selector */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Support for
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${productInfo[selectedProduct].color} block`}>
                {productInfo[selectedProduct].name}
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              {productInfo[selectedProduct].description}
            </p>
            
            {/* Product Selector */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="glass-card p-2 flex rounded-xl">
                <button
                  onClick={() => setSelectedProduct('notion-highlights')}
                  className={`px-6 py-3 rounded-lg transition-all ${selectedProduct === 'notion-highlights' 
                    ? 'bg-gradient-to-r from-[#ffd700]/20 to-[#ffed4e]/20 text-white border border-[#ffd700]/30' 
                    : 'text-white/60 hover:text-white/90 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span>✨</span>
                    <span>Notion Highlights</span>
                  </div>
                </button>
                <button
                  onClick={() => setSelectedProduct('focus-dock')}
                  className={`px-6 py-3 rounded-lg transition-all ${selectedProduct === 'focus-dock' 
                    ? 'bg-gradient-to-r from-red-500/20 to-red-400/20 text-white border border-red-500/30' 
                    : 'text-white/60 hover:text-white/90 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span>⚡</span>
                    <span>Focus Dock</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex justify-center mb-12">
            <div className="glass-card p-1 flex rounded-xl">
              <button
                onClick={() => setActiveSection('faq')}
                className={`px-8 py-3 rounded-lg transition-all ${activeSection === 'faq' 
                  ? 'bg-gradient-to-r from-red-500 to-red-600 text-white' 
                  : 'text-white/60 hover:text-white/90'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>❓</span>
                  <span>FAQs & Help</span>
                </div>
              </button>
              <button
                onClick={() => setActiveSection('contact')}
                className={`px-8 py-3 rounded-lg transition-all ${activeSection === 'contact' 
                  ? 'bg-gradient-to-r from-red-500 to-red-600 text-white' 
                  : 'text-white/60 hover:text-white/90'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>📧</span>
                  <span>Contact Support</span>
                </div>
              </button>
            </div>
          </div>

          {/* FAQ Section */}
          {activeSection === 'faq' && (
            <>
              {/* Knowledge Base CTA */}
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-white mb-4">📚 Self-Service Help Center</h3>
                <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                  Find detailed guides, tutorials, and troubleshooting tips for {productInfo[selectedProduct].name}.
                </p>
                <button 
                  onClick={() => {
                    gaEvent('help_center_click', { product: selectedProduct })
                    const helpUrl = selectedProduct === 'notion-highlights' 
                      ? 'https://notionhighlightshelp.tawk.help/' 
                      : 'https://focusdock.help/'
                    window.open(helpUrl, '_blank')
                  }}
                  className="gradient-button text-lg py-3 px-8"
                >
                  Visit {productInfo[selectedProduct].name} Help Center
                </button>
              </div>

              {/* FAQ Section */}
              <div className="glass-card p-8 mb-12">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                  Frequently Asked Questions
                </h2>
                
                <div className="space-y-4">
                  {currentFAQs.map((faq, index) => (
                    <div key={index} className="border-b border-white/10 pb-4">
                      <button
                        onClick={() => {
                          if (activeFAQ !== index) {
                            gaEvent('faq_opened', { 
                              product: selectedProduct, 
                              question: faq.question.substring(0, 50) 
                            })
                          }
                          setActiveFAQ(activeFAQ === index ? null : index)
                        }}
                        className="flex justify-between items-center w-full text-left"
                      >
                        <h3 className="text-lg font-semibold text-white pr-4">
                          {faq.question}
                        </h3>
                        <span className={`text-xl flex-shrink-0 ${selectedProduct === 'notion-highlights' ? 'text-[#ffd700]' : 'text-red-400'}`}>
                          {activeFAQ === index ? '−' : '+'}
                        </span>
                      </button>
                      
                      {activeFAQ === index && (
                        <div className="mt-3 text-white/70 whitespace-pre-line">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Tips */}
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold text-white mb-4 text-center">
                  💡 Quick Tips for {productInfo[selectedProduct].name}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  {productTips[selectedProduct].map((tip, index) => (
                    <div key={index} className="text-white/70">
                      {tip}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Contact Section */}
          {activeSection === 'contact' && (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Contact {productInfo[selectedProduct].name} Support
                </h2>
                <p className="text-white/70 max-w-2xl mx-auto">
                  Our team is here to help you with {selectedProduct === 'notion-highlights' ? 'highlighting and saving to Notion' : 'launcher setup and features'}.
                  We typically respond within 24 hours.
                </p>
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

              {/* Support Email Display */}
              <div className="glass-card p-6 text-center mb-12">
                <h3 className="text-xl font-bold text-white mb-4">Direct Email</h3>
                <p className="text-white/70 mb-4">
                  For {selectedProduct === 'notion-highlights' ? 'Notion Highlights' : 'Focus Dock'} support, email us at:
                </p>
                <a 
                  href={`mailto:${selectedProduct === 'notion-highlights' ? 'support@notionhighlights.com' : 'focusdock@notionhighlights.com'}`}
                  className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-300 hover:from-red-300 hover:to-red-200 transition-all"
                >
                  {selectedProduct === 'notion-highlights' ? 'support@notionhighlights.com' : 'focusdock@notionhighlights.com'}
                </a>
              </div>

              {/* Response Time Notice */}
              <div className="bg-gradient-to-r from-red-900/20 to-red-800/10 border border-red-500/20 rounded-xl p-6 text-center">
                <h3 className="text-lg font-bold text-white mb-2">📅 Response Time</h3>
                <p className="text-white/70">
                  We strive to respond to all emails within <strong>24 hours</strong> on weekdays.
                  For faster responses, use the live chat during business hours (9AM-5PM EST).
                </p>
              </div>
            </>
          )}

          {/* Switch Product Notice */}
          <div className="text-center mt-12 p-6 border border-white/10 rounded-xl">
            <p className="text-white/70 mb-4">
              Need help with {selectedProduct === 'notion-highlights' ? 'Focus Dock' : 'Notion Highlights'} instead?
            </p>
            <button
              onClick={() => {
                setSelectedProduct(selectedProduct === 'notion-highlights' ? 'focus-dock' : 'notion-highlights')
                setActiveFAQ(null)
              }}
              className="text-white hover:text-red-300 font-semibold transition-colors"
            >
              Switch to {selectedProduct === 'notion-highlights' ? 'Focus Dock' : 'Notion Highlights'} support →
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .gradient-button {
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          color: white;
          border: none;
          border-radius: 10px;
          padding: 12px 24px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        .gradient-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(239, 68, 68, 0.3);
        }
        .glass-card {
          background: rgba(30, 41, 59, 0.5);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
        }
      `}</style>
    </Layout>
  )
}