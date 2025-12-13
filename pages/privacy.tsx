// pages/privacy.tsx
import Layout from '../components/Layout'

export default function Privacy() {
  return (
    <Layout>
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              We believe in transparency and your right to privacy. Here's how we handle your data across all our extensions.
            </p>
          </div>

          {/* Content */}
          <div className="glass-card p-8">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-white/80 mb-8">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Our Commitment to Your Privacy</h2>
              <p className="text-white/70 mb-6">
                We ("we," "our," or "us") are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Chrome extensions and related services, including Notion Highlights, Focus Dock, and future extensions.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Scope</h2>
              <p className="text-white/70 mb-6">
                This Privacy Policy applies to all our browser extensions, websites, and services (collectively, "Services"). Each extension may collect different types of information based on its functionality.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">Personal Information</h3>
              <ul className="text-white/70 mb-6 list-disc list-inside space-y-2">
                <li><strong>Email Address:</strong> Only if you voluntarily provide it for account creation, Pro upgrades, or product updates</li>
                <li><strong>Third-Party Account Information:</strong> Basic profile information needed for integrations (e.g., Notion OAuth authentication for Notion Highlights)</li>
                <li><strong>Payment Information:</strong> Processed securely by Stripe - we never store your payment details</li>
                <li><strong>Communication Data:</strong> Messages you send us via support or contact forms</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">Extension-Specific Information</h3>
              <ul className="text-white/70 mb-6 list-disc list-inside space-y-2">
                <li><strong>Notion Highlights:</strong> Highlight counts for free tier management, basic Notion page information for saving destinations</li>
                <li><strong>Focus Dock:</strong> Local browser data (tabs, bookmarks, notes) stored entirely on your device</li>
                <li><strong>Usage Analytics:</strong> Anonymous feature usage data to improve our extensions</li>
                <li><strong>Technical Data:</strong> Browser type, version, and basic error logs</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">What We Never Collect</h3>
              <ul className="text-white/70 mb-6 list-disc list-inside space-y-2">
                <li>Your personal content (highlights, notes, bookmarks, etc.)</li>
                <li>Third-party service data (Notion pages, database contents)</li>
                <li>Personal documents or sensitive information</li>
                <li>Browsing history unrelated to our extensions</li>
                <li>Passwords or authentication tokens (except for required OAuth flows)</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">Data Storage and Local Processing</h2>
              <p className="text-white/70 mb-4">
                Our extensions are designed with privacy in mind:
              </p>
              <ul className="text-white/70 mb-6 list-disc list-inside space-y-2">
                <li><strong>Focus Dock:</strong> All data (notes, reading list, workspaces, clipboard) is stored locally in your browser. Nothing is sent to our servers. Your data stays private and works offline.</li>
                <li><strong>Notion Highlights:</strong> Highlights go directly from your browser to your Notion workspace. We only track highlight counts for free tier management.</li>
                <li><strong>Zero-OAuth Mode:</strong> For Notion Highlights, the zero-OAuth mode works without sending any data to our servers - it goes directly from browser to Notion.</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <ul className="text-white/70 mb-6 list-disc list-inside space-y-2">
                <li>To provide and maintain our Services</li>
                <li>To manage free tier limits and Pro subscriptions</li>
                <li>To notify you about service updates (if you opt-in)</li>
                <li>To provide customer support across all extensions</li>
                <li>To improve our extensions and user experience</li>
                <li>To detect and prevent technical issues</li>
                <li>To process refunds under our 30-day money-back guarantee</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">Email Communications</h2>
              <p className="text-white/70 mb-4">
                We use Resend for email delivery. When you provide your email address, we may send you:
              </p>
              <ul className="text-white/70 mb-6 list-disc list-inside space-y-2">
                <li>Account verification and setup instructions</li>
                <li>Product updates and new features across extensions</li>
                <li>Tips and tricks for better workflows</li>
                <li>Extension-specific announcements</li>
                <li>Important policy updates</li>
              </ul>
              <p className="text-white/70 mb-6">
                <strong>You can unsubscribe at any time</strong> by clicking the unsubscribe link in any email or contacting us at support@notionhighlights.com. Unsubscribing from emails does not affect your extension access.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Data Sharing and Disclosure</h2>
              <p className="text-white/70 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share information with:
              </p>
              <ul className="text-white/70 mb-6 list-disc list-inside space-y-2">
                <li><strong>Service Providers:</strong> Trusted third parties who assist us in operating our services (e.g., Resend for emails, Stripe for payments, Google Analytics for anonymous usage data)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with a merger or sale of company assets</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
              <p className="text-white/70 mb-6">
                We implement appropriate technical and organizational security measures to protect your personal information. All payment processing is handled securely by Stripe. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
              <p className="text-white/70 mb-4">You have the right to:</p>
              <ul className="text-white/70 mb-6 list-disc list-inside space-y-2">
                <li>Access and receive a copy of your personal data</li>
                <li>Correct inaccurate personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Data portability</li>
                <li>Request a refund under our 30-day money-back guarantee</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">Refund Policy</h2>
              <p className="text-white/70 mb-6">
                We offer a 30-day money-back guarantee on all Pro purchases. If you're not satisfied with any of our extensions, contact us within 30 days of purchase for a full refund, no questions asked. This applies to all current and future extensions.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
              <p className="text-white/70 mb-6">
                Our Services are not intended for children under 13. We do not knowingly collect information from children under 13.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
              <p className="text-white/70 mb-6">
                We may update this Privacy Policy periodically. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. For significant changes, we may also notify you via email.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-white/70">
                If you have questions about this Privacy Policy or our refund guarantee, please contact us at:
                <br />
                <strong>Email:</strong> support@notionhighlights.com
                <br />
                <strong>Response Time:</strong> We aim to respond within 24 hours
                <br />
                <strong>Refund Requests:</strong> Processed within 3 business days
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}