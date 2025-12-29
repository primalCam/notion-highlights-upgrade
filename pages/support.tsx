// pages/support.tsx
import Layout from '../components/Layout'
import { useState, useEffect } from 'react'
import { gaEvent } from '../lib/ga'
import { motion, AnimatePresence } from 'framer-motion'

export default function Support() {
  const [selectedProduct, setSelectedProduct] = useState<'notion-highlights' | 'autoflow' | 'sightline' | 'focus-dock' | 'clean-read'>('notion-highlights')
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null)

  useEffect(() => {
    gaEvent('page_view', { page: 'support' })
  }, [])

  // Colors synced exactly with index.tsx suite array
  const products = {
    'notion-highlights': { name: "Notion Highlights", color: "from-yellow-400/20 to-yellow-600/10", accent: "bg-yellow-500", icon: "✨" },
    'autoflow': { name: "AutoFlow", color: "from-blue-500/20 to-blue-700/10", accent: "bg-blue-500", icon: "⚡" },
    'sightline': { name: "Sightline", color: "from-emerald-400/20 to-emerald-600/10", accent: "bg-emerald-500", icon: "📸" },
    'focus-dock': { name: "Focus Dock", color: "from-red-400/20 to-red-600/10", accent: "bg-red-500", icon: "🎯" },
    'clean-read': { name: "Clean Read", color: "from-amber-400/20 to-amber-600/10", accent: "bg-amber-500", icon: "📖" },
  }

  // Common contact methods
  const contactMethods = [
    {
      icon: "📧",
      title: "Email Support",
      description: "We respond within 24 hours",
      action: "Send Email", 
      onClick: () => {
        gaEvent('contact_click', { method: 'email', product: selectedProduct })
        const email = selectedProduct === 'sightline' 
          ? 'sightline@notionhighlights.com' 
          : selectedProduct === 'notion-highlights' 
          ? 'support@notionhighlights.com' 
          : selectedProduct === 'focus-dock' 
          ? 'focusdock@notionhighlights.com'
          : selectedProduct === 'clean-read'
          ? 'cleanread@notionhighlights.com'
          : 'autoflow@notionhighlights.com'
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
        const handle = selectedProduct === 'sightline'
          ? 'SightlineApp'
          : selectedProduct === 'notion-highlights' 
          ? 'NotionHighlight' 
          : selectedProduct === 'focus-dock'
          ? 'FocusDockApp'
          : selectedProduct === 'clean-read'
          ? 'CleanReadApp'
          : 'AutoflowApp'
        window.open(`https://twitter.com/${handle}`, '_blank')
      }
    }
  ]

  // Sightline FAQs
  const sightlineFAQs = [
    {
      question: "How many free screenshots do I get?",
      answer: "You get 20 free screenshots per month on the free plan. This resets on the 1st of each month. No credit card required. If you need more, upgrade to Pro for unlimited screenshots."
    },
    {
      question: "What's the difference between Free and Pro?",
      answer: "Free: 20 screenshots/month, watermark on exports, all basic editing tools. Pro: Unlimited screenshots, no watermark, priority support, advanced features, and future Pro-only tools."
    },
    {
      question: "How do I capture a screenshot?",
      answer: "Three ways: 1) Click the extension icon and select 'Capture Visible', 2) Use keyboard shortcut ⌘+.S (Mac) or Alt+Shift+S (Windows), 3) Right-click on any webpage and select 'Capture with Sightline' from the context menu."
    },
    {
      question: "How do I select a region to capture?",
      answer: "Click the extension icon and select 'Select Region', or use keyboard shortcut ⌘+.R. Drag to select any area on the page. Press Enter or click the capture button when ready."
    },
    {
      question: "How does the crop tool work?",
      answer: "Click the extension icon and select 'Crop Tool', or use ⌘+.C. This captures the visible tab and immediately opens the crop tool. Drag the handles to adjust, then click Apply."
    },
    {
      question: "What editing tools are available?",
      answer: "Arrow tool, rectangle tool, text tool, numbered steps, blur tool, and crop tool. All available in free version. Pro adds more colors, stroke options, and advanced features."
    },
    {
      question: "How do I copy a screenshot to clipboard?",
      answer: "In the editor, click the Copy button (or use the Copy button in export modal). The annotated screenshot will be copied to your clipboard, ready to paste anywhere."
    },
    {
      question: "What export formats are supported?",
      answer: "PNG (lossless quality) and JPEG (smaller file size). You can choose quality settings for JPEG. Free version adds a watermark, Pro exports are clean."
    },
    {
      question: "Are my screenshots stored on your servers?",
      answer: "No. All processing happens locally in your browser. We never upload your screenshots to our servers. The only data we store is your Pro subscription status."
    },
    {
      question: "How do keyboard shortcuts work?",
      answer: "Default shortcuts: ⌘+.S (Capture Visible), ⌘+.R (Select Region), ⌘+.C (Crop Tool). In editor: V=Select, A=Arrow, R=Rectangle, T=Text, N=Step, B=Blur, X=Crop, ⌘Z=Undo, ⌘⇧Z=Redo."
    },
    {
      question: "How do I upgrade to Pro?",
      answer: "Click 'Upgrade to Pro' in the extension popup or visit our website. Pro is $4.99/month or $39.99/year (save 33%). All payments are processed securely through Stripe."
    },
    {
      question: "What happens if I reach my free quota?",
      answer: "You'll see a notification when you have 5 screenshots left. Once you reach 20, you'll need to wait until the next month or upgrade to Pro for unlimited screenshots."
    },
    {
      question: "Can I use Sightline on multiple computers?",
      answer: "Yes! The extension works on any Chrome browser where you're signed in. Pro subscription is tied to your Google account, so it works across all your devices."
    },
    {
      question: "How do I change the keyboard shortcuts?",
      answer: "Go to chrome://extensions/shortcuts in your browser to customize Sightline shortcuts. You can change the default ⌘+. combinations to whatever you prefer."
    }
  ]

  // Notion Highlights FAQs - ALL ORIGINAL FAQs RESTORED
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

  // Focus Dock FAQs - ALL ORIGINAL FAQs RESTORED
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

  // CleanRead FAQs - ALL ORIGINAL FAQs RESTORED
  const cleanReadFAQs = [
    {
      question: "How do I activate CleanRead on a webpage?",
      answer: "Click the CleanRead extension icon in your Chrome toolbar, or use the keyboard shortcut Cmd/Ctrl+R. CleanRead will instantly extract the article content and open it in a distraction-free reader view."
    },
    {
      question: "What websites does CleanRead work with?",
      answer: "CleanRead works with: • All news sites and blogs • Social media: Twitter/X, Facebook, LinkedIn, Reddit • AI chats: ChatGPT, Claude, Gemini • Documents: Notion, Google Docs • Plus thousands of other content websites"
    },
    {
      question: "How do I change the theme or appearance?",
      answer: "Click the theme buttons in the reader toolbar to switch between Dark, Gold, and custom themes. You can also adjust font size, column width, and enable features like Vision Mode or Focus Mode."
    },
    {
      question: "What's the difference between Free and Pro?",
      answer: "Free includes: Clean reading on any site, dark/gold themes, adjustable fonts, focus mode, save 3 articles. Pro adds: Unlimited saved articles, custom themes, PDF export, auto-scroll, vision accessibility mode, hover zoom, and priority features."
    },
    {
      question: "How do I save articles to read later?",
      answer: "In reader mode, click the bookmark icon. Free users can save up to 3 articles. Pro users get unlimited saves. Saved articles sync across your Chrome browser."
    },
    {
      question: "How do I export articles as PDF?",
      answer: "PDF export is a Pro feature. In reader mode, click the export button and select 'PDF'. This creates a clean, printable version of the article with the CleanRead branding."
    },
    {
      question: "What is Vision Mode?",
      answer: "Vision Mode is a Pro feature designed for accessibility and enhanced readability. It provides high contrast, increased line spacing, and optimized typography for readers with visual impairments or those who prefer maximum readability."
    },
    {
      question: "Does CleanRead work on AI chat platforms like ChatGPT?",
      answer: "Yes! CleanRead extracts the last AI response from ChatGPT, Claude, and Gemini conversations, presenting them in a clean, readable format perfect for saving or sharing."
    },
    {
      question: "How do I remove CleanRead's floating notification?",
      answer: "The notification automatically disappears after 8 seconds. You can also click it to immediately activate CleanRead on that page."
    },
    {
      question: "Is my reading data tracked or stored?",
      answer: "CleanRead operates locally on your browser. We don't track what you read, and saved articles are stored only in your Chrome browser's local storage, not on our servers."
    },
    {
      question: "How do I enable auto-activation on supported sites?",
      answer: "Auto-activation can be enabled in the settings. When enabled, CleanRead will automatically open reader mode on article pages and supported platforms. (This feature is off by default.)"
    },
    {
      question: "What keyboard shortcuts are available?",
      answer: "• Cmd/Ctrl+R - Activate CleanRead • Cmd/Ctrl+J - Alternative shortcut • In reader mode: +/- to adjust font size, T for themes, F for focus mode, V for vision mode (Pro)"
    },
    {
      question: "How do I access my saved articles?",
      answer: "Click 'View Saved' in the reader toolbar or open the CleanRead saved articles page from the extension menu. Your saved articles are organized by date with quick access to re-read them."
    },
    {
      question: "Can I edit articles in CleanRead?",
      answer: "Yes! Enable Edit Mode from the reader toolbar to make content editable. You can add bold, italics, headings, lists, and links. Click Save to keep your edited version."
    },
    {
      question: "What's auto-scroll mode?",
      answer: "Auto-scroll (Pro feature) automatically scrolls through articles at your preferred speed. Great for long reads or when you want hands-free reading. Click the auto-scroll button to start/stop."
    },
    {
      question: "How do I share articles from CleanRead?",
      answer: "Use the share button to copy a clean reading link to the clipboard, or export as PDF/HTML to share formatted versions. Shared articles maintain the clean reading experience."
    }
  ]

  // AutoFlow FAQs
  const autoflowFAQs = [
    {
      question: "How do I get started with AutoFlow?",
      answer: "Install the extension and click the extension icon to open the manager. You'll see 3 starter snippets ready to use. Press Ctrl/Cmd+Shift+Space anywhere you can type to open the snippet menu. No setup required!"
    },
    {
      question: "What keyboard shortcuts are available?",
      answer: "• Ctrl/Cmd+Shift+Space - Open snippet menu anywhere (primary shortcut)\n• Ctrl/Cmd+K - Alternative shortcut\n• Arrow keys - Navigate snippets in menu\n• Enter - Insert selected snippet\n• Esc - Close menu\n• Tab - Navigate between results"
    },
    {
      question: "How do I insert a snippet?",
      answer: "Press Ctrl/Cmd+Shift+Space anywhere you can type to open the snippet menu, search for your snippet using keywords, then press Enter. The snippet will be inserted at your cursor position. You can also click the extension icon, select your snippet, and click 'Insert'."
    },
    {
      question: "What's the difference between Free and Pro?",
      answer: "Free: 5 snippets limit, 50 insertions/month, 10 clipboard items, basic variables. Pro: Unlimited snippets and insertions, 100 clipboard items, custom variables, categories, priority support, and advanced features."
    },
    {
      question: "How do variables work in snippets?",
      answer: "Use {{variable}} in your snippets. Built-in variables: {{name}}, {{email}}, {{company}}, {{date}}. Variables are filled from your profile or you can set custom values in the Variables tab of the extension."
    },
    {
      question: "How do I create custom variables?",
      answer: "Custom variables are a Pro feature. Go to Variables tab, click 'Add Custom Variable', give it a name and default value. Use {{variable_name}} in snippets. Perfect for project names, roles, URLs, etc."
    },
    {
      question: "How do categories work?",
      answer: "Categories help organize snippets. Free: 1 category (General). Pro: Unlimited categories. Create categories like 'Email', 'Code', 'Social', etc. Assign snippets to categories for better organization."
    },
    {
      question: "How does clipboard history work?",
      answer: "AutoFlow automatically saves text you copy. Go to Clipboard tab to see history. Click any item to copy it again. Free: 10 items, Pro: 100 items. Great for reusing text across sessions."
    },
    {
      question: "Can I use AutoFlow in AI chats like ChatGPT?",
      answer: "Yes! AutoFlow works anywhere you can type, including ChatGPT, Claude, Gemini, and all other AI chat interfaces. Press Ctrl/Cmd+Shift+Space to open the menu at your cursor position."
    },
    {
      question: "How do I save text as a snippet quickly?",
      answer: "Select text on any page, right-click and choose 'Save Selection as Snippet'. Or copy text, open AutoFlow, and click 'Save from Clipboard'. You can also use the keyboard shortcut after selecting text."
    },
    {
      question: "What happens if I reach my free monthly limit?",
      answer: "Free users get 50 snippet insertions per month. Once reached, you'll see a notification. Upgrade to Pro for unlimited usage. Usage resets on the 1st of each month."
    },
    {
      question: "Are my snippets stored locally or in the cloud?",
      answer: "All your data is stored locally in your browser by default. If you sign in with an account (Pro feature), your data syncs across devices through our secure cloud."
    },
    {
      question: "How do I organize my snippets?",
      answer: "Use categories, tags, and search. Free: Add tags to snippets. Pro: Create unlimited categories, use advanced search with filters, and sort by usage frequency."
    },
    {
      question: "How do I export/import my snippets?",
      answer: "Go to Settings tab, click 'Export Data' to download all snippets as JSON. To import, click 'Import Data' and select your JSON file. Great for backups or migrating to a new computer."
    },
    {
      question: "How do I search for snippets quickly?",
      answer: "Press Ctrl/Cmd+Shift+Space to open the menu, then start typing to search through your snippets. Results update in real-time. You can search by snippet name, content, or tags."
    },
    {
      question: "How do I upgrade to Pro?",
      answer: "Click 'Upgrade to Pro' in the extension popup or visit autoflow.app/upgrade. Pro is $9/month or $79/year. All payments are processed securely through Stripe."
    }
  ]

  const currentFAQs = selectedProduct === 'sightline'
    ? sightlineFAQs 
    : selectedProduct === 'notion-highlights' 
    ? notionHighlightsFAQs 
    : selectedProduct === 'focus-dock'
    ? focusDockFAQs
    : selectedProduct === 'clean-read'
    ? cleanReadFAQs
    : autoflowFAQs

  return (
    <Layout>
      {/* Base Background from index.tsx */}
      <div className="min-h-screen bg-[#030303] pt-32 pb-20 px-6">
        
        {/* Dynamic Glow synced with Home Page gradients */}
        <div className="fixed inset-0 pointer-events-none -z-10">
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b ${products[selectedProduct].color} blur-[160px] opacity-40 transition-all duration-1000`} />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-6">
              Support <span className="text-white/20">Center</span>
            </h1>
            <p className="text-white/40 text-lg max-w-xl mx-auto font-light">
              Get the most out of your productivity suite. Select an app to begin.
            </p>
          </div>

          {/* Product Pill Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-20">
            {Object.entries(products).map(([id, info]) => (
              <button
                key={id}
                onClick={() => { 
                  setSelectedProduct(id as any); 
                  setActiveFAQ(null);
                  gaEvent('product_selected', { product: id });
                }}
                className={`flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-500 ${
                  selectedProduct === id 
                  ? 'bg-white text-black border-white shadow-[0_0_40px_rgba(255,255,255,0.15)]' 
                  : 'bg-white/[0.03] border-white/10 text-white/40 hover:border-white/20'
                }`}
              >
                <span className="font-bold text-xs uppercase tracking-widest">{info.name}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Card - Glass style from index.tsx */}
            <div className="space-y-6">
              <div className="glass-card-chrome p-8 rounded-[2.5rem] border border-white/10">
                <h3 className="text-white font-black text-xl mb-6">Need human help?</h3>
                <div className="space-y-4">
                  <button 
                    onClick={contactMethods[0].onClick}
                    className="w-full py-5 bg-white text-black font-black rounded-2xl hover:scale-105 transition-all text-sm uppercase tracking-widest"
                  >
                    {contactMethods[0].action}
                  </button>
                  <button 
                    onClick={contactMethods[1].onClick}
                    className="w-full py-5 bg-white/5 text-white font-bold border border-white/10 rounded-2xl hover:bg-white/10 transition-all text-sm uppercase tracking-widest"
                  >
                    {contactMethods[1].action}
                  </button>
                  <button 
                    onClick={contactMethods[2].onClick}
                    className="w-full py-5 bg-white/5 text-white font-bold border border-white/10 rounded-2xl hover:bg-white/10 transition-all text-sm uppercase tracking-widest"
                  >
                    {contactMethods[2].action}
                  </button>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-white/40 text-sm font-light mb-2">Direct email for {products[selectedProduct].name}:</p>
                  <a 
                    href={`mailto:${selectedProduct === 'sightline' 
                      ? 'sightline@notionhighlights.com' 
                      : selectedProduct === 'notion-highlights' 
                      ? 'support@notionhighlights.com' 
                      : selectedProduct === 'focus-dock'
                      ? 'focusdock@notionhighlights.com'
                      : selectedProduct === 'clean-read'
                      ? 'cleanread@notionhighlights.com'
                      : 'autoflow@notionhighlights.com'
                    }`}
                    className="text-white font-medium hover:text-white/80 transition-colors text-sm"
                  >
                    {selectedProduct === 'sightline' 
                      ? 'sightline@notionhighlights.com' 
                      : selectedProduct === 'notion-highlights' 
                      ? 'support@notionhighlights.com' 
                      : selectedProduct === 'focus-dock'
                      ? 'focusdock@notionhighlights.com'
                      : selectedProduct === 'clean-read'
                      ? 'cleanread@notionhighlights.com'
                      : 'autoflow@notionhighlights.com'
                    }
                  </a>
                </div>
              </div>
            </div>

            {/* Knowledge Base */}
            <div className="lg:col-span-2 space-y-4">
              <AnimatePresence mode="wait">
                {currentFAQs.map((faq, i) => (
                  <motion.div
                    key={`${selectedProduct}-${i}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="glass-card-chrome rounded-[2rem] border border-white/5 overflow-hidden"
                  >
                    <button 
                      onClick={() => {
                        if (activeFAQ !== i) {
                          gaEvent('faq_opened', { 
                            product: selectedProduct, 
                            question: faq.question.substring(0, 50) 
                          })
                        }
                        setActiveFAQ(activeFAQ === i ? null : i)
                      }}
                      className="w-full p-8 text-left flex items-center justify-between group"
                    >
                      <span className="text-white/80 group-hover:text-white font-bold text-lg transition-colors">{faq.question}</span>
                      <span className={`text-white/20 transition-transform ${activeFAQ === i ? 'rotate-180' : ''}`}>▼</span>
                    </button>
                    <AnimatePresence>
                      {activeFAQ === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="px-8 pb-8 text-white/40 leading-relaxed font-light border-t border-white/5 pt-4">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Response Time Notice */}
              <div className="mt-8 glass-card-chrome p-6 rounded-2xl border border-white/10">
                <p className="text-white/40 text-sm font-light">
                  <span className="text-white font-medium">📅 Response Time:</span> We strive to respond to all emails within <strong>24 hours</strong> on weekdays. For faster responses, use the live chat during business hours (9AM-5PM EST).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        body { background: #030303; }
        .glass-card-chrome {
          background: rgba(255, 255, 255, 0.01);
          backdrop-filter: blur(40px) saturate(200%);
          -webkit-backdrop-filter: blur(40px) saturate(200%);
        }
      `}</style>
    </Layout>
  )
}