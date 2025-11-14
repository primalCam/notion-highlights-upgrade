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
              We believe in transparency and your right to privacy. Here's how we handle your data.
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
                Notion Highlights ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Chrome extension and related services.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">Personal Information</h3>
              <ul className="text-white/70 mb-6 list-disc list-inside space-y-2">
                <li><strong>Email Address:</strong> Only if you voluntarily provide it for account creation or updates</li>
                <li><strong>Notion Account Information:</strong> Basic profile information needed for OAuth authentication</li>
                <li><strong>Communication Data:</strong> Messages you send us via support or contact forms</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">Usage Information</h3>
              <ul className="text-white/70 mb-6 list-disc list-inside space-y-2">
                <li><strong>Extension Usage:</strong> Basic analytics about feature usage (anonymous)</li>
                <li><strong>Technical Data:</strong> Browser type, version, and basic error logs</li>
                <li><strong>Highlight Counts:</strong> To manage your free tier usage</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">What We Never Collect</h3>
              <ul className="text-white/70 mb-6 list-disc list-inside space-y-2">
                <li>Your highlighted content or personal notes</li>
                <li>Your Notion database contents</li>
                <li>Personal documents or sensitive information</li>
                <li>Browsing history unrelated to our extension</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <ul className="text-white/70 mb-6 list-disc list-inside space-y-2">
                <li>To provide and maintain our service</li>
                <li>To manage your free tier highlights count</li>
                <li>To notify you about service updates (if you opt-in)</li>
                <li>To provide customer support</li>
                <li>To improve our extension and user experience</li>
                <li>To detect and prevent technical issues</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">Email Communications</h2>
              <p className="text-white/70 mb-4">
                We use Resend for email delivery. When you provide your email address, we may send you:
              </p>
              <ul className="text-white/70 mb-6 list-disc list-inside space-y-2">
                <li>Account verification and setup instructions</li>
                <li>Product updates and new features</li>
                <li>Tips and tricks for better research workflows</li>
                <li>Occasional event announcements</li>
              </ul>
              <p className="text-white/70 mb-6">
                <strong>You can unsubscribe at any time</strong> by clicking the unsubscribe link in any email or contacting us at support@notionhighlights.com. Unsubscribing from emails does not affect your extension account or access.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Data Sharing and Disclosure</h2>
              <p className="text-white/70 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share information with:
              </p>
              <ul className="text-white/70 mb-6 list-disc list-inside space-y-2">
                <li><strong>Service Providers:</strong> Trusted third parties who assist us in operating our service (e.g., Resend for emails, Stripe for payments)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with a merger or sale of company assets</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
              <p className="text-white/70 mb-6">
                We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
              <p className="text-white/70 mb-4">You have the right to:</p>
              <ul className="text-white/70 mb-6 list-disc list-inside space-y-2">
                <li>Access and receive a copy of your personal data</li>
                <li>Correct inaccurate personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Data portability</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
              <p className="text-white/70 mb-6">
                Our service is not intended for children under 13. We do not knowingly collect information from children under 13.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
              <p className="text-white/70 mb-6">
                We may update this Privacy Policy periodically. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-white/70">
                If you have questions about this Privacy Policy, please contact us at:
                <br />
                <strong>Email:</strong> support@notionhighlights.com
                <br />
                <strong>Response Time:</strong> We aim to respond within 48 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}