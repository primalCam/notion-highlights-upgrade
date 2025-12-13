// pages/terms.tsx
import Layout from '../components/Layout'

export default function Terms() {
  return (
    <Layout>
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Clear rules for a great experience across all our extensions. Please read these terms carefully.
            </p>
          </div>

          {/* Content */}
          <div className="glass-card p-8">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-white/80 mb-8">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
              <p className="text-white/70 mb-6">
                By accessing or using any of our browser extensions or services ("Services"), including Notion Highlights, Focus Dock, and future extensions, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our Services.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Scope</h2>
              <p className="text-white/70 mb-6">
                These Terms apply to all our browser extensions, websites, and related services. Each extension may have specific features and limitations described on its respective page.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Our Extensions</h2>
              <ul className="text-white/70 mb-6 list-disc list-inside space-y-2">
                <li><strong>Notion Highlights:</strong> Chrome extension for saving web content directly to Notion</li>
                <li><strong>Focus Dock:</strong> Universal Chrome launcher for tabs, notes, bookmarks, and workspaces</li>
                <li><strong>Future Extensions:</strong> Additional productivity tools as they are released</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">Free Tiers</h2>
              <p className="text-white/70 mb-4">Each extension offers a generous free tier:</p>
              <ul className="text-white/70 mb-6 list-disc list-inside space-y-2">
                <li><strong>Notion Highlights:</strong> 30 highlights per month, no credit card required</li>
                <li><strong>Focus Dock:</strong> 5 notes, 1 workspace, 10 reading list items, 3 clipboard items</li>
                <li>No account registration with us required for free tiers</li>
                <li>Free tier limits reset monthly (where applicable)</li>
                <li>We reserve the right to modify free tier limits with 30 days notice</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">Pro Subscriptions</h2>
              <ul className="text-white/70 mb-6 list-disc list-inside space-y-2">
                <li>Unlimited access to all extension features</li>
                <li>Separate subscriptions for each extension</li>
                <li>Billed monthly or annually as shown during purchase</li>
                <li>Automatic renewal unless canceled</li>
                <li>Cancel anytime - no long-term contracts</li>
                <li>Subscription applies only to the specific extension purchased</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">30-Day Money-Back Guarantee</h2>
              <p className="text-white/70 mb-4">
                We stand behind all our extensions with a 30-day money-back guarantee. If you're not satisfied with any Pro purchase for any reason, contact us within 30 days of purchase for a full refund, no questions asked.
              </p>
              <ul className="text-white/70 mb-6 list-disc list-inside space-y-2">
                <li><strong>Full Coverage:</strong> Applies to all current and future extensions</li>
                <li><strong>No Questions Asked:</strong> No explanation required for refund requests</li>
                <li><strong>Processing Time:</strong> Refunds processed within 3 business days</li>
                <li><strong>How to Request:</strong> Email support@notionhighlights.com with your purchase details</li>
                <li><strong>Guarantee Period:</strong> 30 days from date of purchase</li>
                <li><strong>Refund Method:</strong> Refunded to original payment method</li>
              </ul>
              <p className="text-white/70 mb-6">
                This guarantee is our commitment to your satisfaction and confidence in our products.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Payment and Billing</h2>
              <ul className="text-white/70 mb-6 list-disc list-inside space-y-2">
                <li>All payments processed securely by Stripe</li>
                <li>Prices subject to change with 30 days notice to existing subscribers</li>
                <li>No refunds for partial subscription periods (except under 30-day guarantee)</li>
                <li>Chargebacks may result in service termination across all extensions</li>
                <li>Each extension requires separate purchase for Pro features</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">User Responsibilities</h2>
              <p className="text-white/70 mb-4">You agree to:</p>
              <ul className="text-white/70 mb-6 list-disc list-inside space-y-2">
                <li>Use our Services in compliance with all applicable laws</li>
                <li>Respect intellectual property rights of others</li>
                <li>Not use our Services for illegal or unauthorized purposes</li>
                <li>Maintain the security of your accounts and credentials</li>
                <li>Not attempt to reverse engineer, hack, or circumvent our Services</li>
                <li>Not abuse our refund policy with repeated purchase/refund cycles</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
              <p className="text-white/70 mb-6">
                Our extensions, including all source code, databases, functionality, software, website designs, and text, are owned by us and protected by copyright and trademark laws. Your content (highlights, notes, etc.) remains your property. We claim no ownership over your data.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
              <p className="text-white/70 mb-6">
                Some extensions integrate with third-party services:
              </p>
              <ul className="text-white/70 mb-6 list-disc list-inside space-y-2">
                <li><strong>Notion Highlights:</strong> Integrates with Notion through their official API</li>
                <li><strong>Focus Dock:</strong> Works with Chrome's native APIs for tabs, bookmarks, and history</li>
                <li><strong>Payment Processing:</strong> Handled by Stripe</li>
              </ul>
              <p className="text-white/70 mb-6">
                Your use of third-party services is governed by their respective Terms of Service. We are not responsible for third-party service availability or API changes.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Data and Privacy</h2>
              <p className="text-white/70 mb-6">
                We respect your privacy. Our extensions are designed to keep your data local whenever possible:
              </p>
              <ul className="text-white/70 mb-6 list-disc list-inside space-y-2">
                <li><strong>Focus Dock:</strong> All data stored locally in your browser</li>
                <li><strong>Notion Highlights:</strong> Highlights go directly to your Notion workspace</li>
                <li>We collect minimal anonymous usage data to improve our Services</li>
                <li>See our Privacy Policy for complete details</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
              <p className="text-white/70 mb-6">
                We may terminate or suspend your access to our Services immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties. Pro-rated refunds may be issued at our discretion for terminated paid accounts.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Disclaimer of Warranties</h2>
              <p className="text-white/70 mb-6">
                OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT GUARANTEE THAT OUR SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPATIBLE WITH ALL BROWSER VERSIONS.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
              <p className="text-white/70 mb-6">
                TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF OUR SERVICES. OUR TOTAL LIABILITY FOR ANY CLAIM SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE PAST 12 MONTHS.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Indemnification</h2>
              <p className="text-white/70 mb-6">
                You agree to defend, indemnify, and hold us harmless from any claims, damages, or demands arising from your use of our Services or violation of these Terms.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
              <p className="text-white/70 mb-6">
                These Terms shall be governed by the laws of North Carolina, without regard to its conflict of law provisions.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
              <p className="text-white/70 mb-6">
                We reserve the right to modify these terms at any time. We will provide notice of material changes via email or through our Services. Continued use after changes constitutes acceptance of the modified terms.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
              <p className="text-white/70">
                For questions about these Terms or to request a refund under our 30-day guarantee:
                <br />
                <strong>Email:</strong> support@notionhighlights.com
                <br />
                <strong>Support Hours:</strong> Monday-Friday, 9AM-5PM EST
                <br />
                <strong>Refund Response:</strong> Within 24 hours, processed within 3 business days
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}