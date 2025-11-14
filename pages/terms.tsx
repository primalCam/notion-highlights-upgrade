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
              Clear rules for a great experience. Please read these terms carefully.
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
                By accessing or using Notion Highlights ("the Service"), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our Service.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Description of Service</h2>
              <p className="text-white/70 mb-6">
                Notion Highlights is a Chrome extension that allows users to save web content directly to their Notion workspace. The Service includes both free and paid subscription tiers.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Free Tier</h2>
              <ul className="text-white/70 mb-6 list-disc list-inside space-y-2">
                <li>30 highlights per month at no cost</li>
                <li>No credit card required</li>
                <li>No account registration with us required</li>
                <li>Resets on the 1st of each month</li>
                <li>We reserve the right to modify free tier limits with 30 days notice</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">Pro Subscription</h2>
              <ul className="text-white/70 mb-6 list-disc list-inside space-y-2">
                <li>Unlimited highlights</li>
                <li>Billed monthly or annually</li>
                <li>Automatic renewal unless canceled</li>
                <li>Cancel anytime - no long-term contracts</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">Payment and Billing</h2>
              <ul className="text-white/70 mb-6 list-disc list-inside space-y-2">
                <li>All payments processed by Stripe</li>
                <li>Prices subject to change with 30 days notice</li>
                <li>No refunds for partial months</li>
                <li>Chargebacks may result in service termination</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">Refund Policy</h2>
              <p className="text-white/70 mb-4">
                We stand by the value our Pro features provide and offer multiple ways to ensure satisfaction before purchase:
              </p>
              <ul className="text-white/70 mb-6 list-disc list-inside space-y-2">
                <li><strong>Free Testing:</strong> 30 highlights per month to fully evaluate the extension</li>
                <li><strong>Transparent Features:</strong> Clear documentation of all Pro capabilities</li>
                <li><strong>Support Available:</strong> Ask questions before purchasing via live chat or email</li>
                <li><strong>Instant Access:</strong> Immediate delivery of digital features upon payment</li>
              </ul>
              <p className="text-white/70 mb-6">
                Due to the nature of digital software and immediate access to features, 
                all sales are final. We encourage you to utilize our free tier to ensure 
                Notion Highlights meets your research workflow needs.
              </p>
              <p className="text-white/70 mb-6">
                In rare cases of technical issues that prevent core functionality, 
                we will work diligently to resolve the problem rather than process refunds.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">User Responsibilities</h2>
              <p className="text-white/70 mb-4">You agree to:</p>
              <ul className="text-white/70 mb-6 list-disc list-inside space-y-2">
                <li>Use the Service in compliance with all applicable laws</li>
                <li>Respect intellectual property rights</li>
                <li>Not use the Service for illegal or unauthorized purposes</li>
                <li>Maintain the security of your Notion account credentials</li>
                <li>Not attempt to reverse engineer or hack the Service</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
              <p className="text-white/70 mb-6">
                The Notion Highlights extension, including all source code, databases, functionality, software, website designs, and text, are owned by us and protected by copyright and trademark laws. Your highlighted content remains your property.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
              <p className="text-white/70 mb-6">
                Our Service integrates with Notion through their official API. Your use of Notion is governed by their Terms of Service. We are not responsible for Notion's service availability or changes to their API.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
              <p className="text-white/70 mb-6">
                We may terminate or suspend your access to the Service immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Disclaimer of Warranties</h2>
              <p className="text-white/70 mb-6">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT GUARANTEE THAT THE SERVICE WILL BE UNINTERRUPTED OR ERROR-FREE.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
              <p className="text-white/70 mb-6">
                TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT SHALL NOTION HIGHLIGHTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICE.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Indemnification</h2>
              <p className="text-white/70 mb-6">
                You agree to defend, indemnify, and hold us harmless from any claims, damages, or demands arising from your use of the Service or violation of these Terms.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
              <p className="text-white/70 mb-6">
                These Terms shall be governed by the laws of North Carolina, without regard to its conflict of law provisions.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
              <p className="text-white/70 mb-6">
                We reserve the right to modify these terms at any time. We will provide notice of material changes via email or through the Service. Continued use after changes constitutes acceptance.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
              <p className="text-white/70">
                For questions about these Terms, please contact:
                <br />
                <strong>Email:</strong> support@notionhighlights.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}