// pages/terms.tsx
import Layout from '../components/Layout'
import { motion } from 'framer-motion'

export default function Terms() {
  return (
    <Layout>
      {/* Background effects matching index.tsx */}
      <div className="fixed inset-0 -z-10 bg-[#030303] overflow-hidden pointer-events-none">
        <div className="absolute top-[-25%] left-[-10%] w-[80%] h-[80%] bg-yellow-500/10 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150 mix-blend-overlay" />
      </div>

      <div className="min-h-screen py-20 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-2xl rounded-full px-5 py-2 mb-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
              <span className="flex h-2 w-2 rounded-full bg-yellow-500 animate-ping" />
              <span className="text-white/80 text-[10px] font-black uppercase tracking-[0.3em]">Legal Framework</span>
            </div>

            <h1 className="text-6xl md:text-[8rem] font-black text-white mb-8 tracking-tighter leading-[0.8] mix-blend-exclusion">
              Terms of
              <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500">Service</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/40 max-w-3xl mx-auto font-light leading-snug">
              Clear rules for a great experience across all our extensions. Please read these terms carefully.
            </p>
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="glass-card-chrome p-10 rounded-[2.5rem] border border-white/5 overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-yellow-500/5 via-transparent to-blue-500/5 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="mb-12">
                <p className="text-lg text-white/60 mb-8 font-light">
                  Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>

                <div className="space-y-12">
                  {/* Agreement to Terms */}
                  <div className="group">
                    <h2 className="text-3xl font-black text-white mb-6 tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-200 group-hover:to-yellow-500 transition-all">
                      Agreement to Terms
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed">
                      By accessing or using any of our browser extensions or services ("Services"), including Notion Highlights, Focus Dock, and future extensions, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our Services.
                    </p>
                  </div>

                  {/* Scope */}
                  <div className="group">
                    <h2 className="text-3xl font-black text-white mb-6 tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-200 group-hover:to-yellow-500 transition-all">
                      Scope
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed">
                      These Terms apply to all our browser extensions, websites, and related services. Each extension may have specific features and limitations described on its respective page.
                    </p>
                  </div>

                  {/* Our Extensions */}
                  <div className="group">
                    <h2 className="text-3xl font-black text-white mb-6 tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-200 group-hover:to-yellow-500 transition-all">
                      Our Extensions
                    </h2>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed"><strong className="text-white">Notion Highlights:</strong> Chrome extension for saving web content directly to Notion</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed"><strong className="text-white">Focus Dock:</strong> Universal Chrome launcher for tabs, notes, bookmarks, and workspaces</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed"><strong className="text-white">Future Extensions:</strong> Additional productivity tools as they are released</span>
                      </li>
                    </ul>
                  </div>

                  {/* Free Tiers */}
                  <div className="group">
                    <h2 className="text-3xl font-black text-white mb-6 tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-200 group-hover:to-yellow-500 transition-all">
                      Free Tiers
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed mb-4">Each extension offers a generous free tier:</p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed"><strong className="text-white">Notion Highlights:</strong> 30 highlights per month, no credit card required</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed"><strong className="text-white">Focus Dock:</strong> 5 notes, 1 workspace, 10 reading list items, 3 clipboard items</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed">No account registration with us required for free tiers</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed">Free tier limits reset monthly (where applicable)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed">We reserve the right to modify free tier limits with 30 days notice</span>
                      </li>
                    </ul>
                  </div>

                  {/* Pro Subscriptions */}
                  <div className="group">
                    <h2 className="text-3xl font-black text-white mb-6 tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-200 group-hover:to-yellow-500 transition-all">
                      Pro Subscriptions
                    </h2>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed">Unlimited access to all extension features</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed">Separate subscriptions for each extension</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed">Billed monthly or annually as shown during purchase</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed">Automatic renewal unless canceled</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed">Cancel anytime - no long-term contracts</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed">Subscription applies only to the specific extension purchased</span>
                      </li>
                    </ul>
                  </div>

                  {/* 30-Day Money-Back Guarantee */}
                  <div className="group">
                    <h2 className="text-3xl font-black text-white mb-6 tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-200 group-hover:to-yellow-500 transition-all">
                      30-Day Money-Back Guarantee
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed mb-6">
                      We stand behind all our extensions with a 30-day money-back guarantee. If you're not satisfied with any Pro purchase for any reason, contact us within 30 days of purchase for a full refund, no questions asked.
                    </p>
                    <ul className="space-y-4 mb-6">
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed"><strong className="text-white">Full Coverage:</strong> Applies to all current and future extensions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed"><strong className="text-white">No Questions Asked:</strong> No explanation required for refund requests</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed"><strong className="text-white">Processing Time:</strong> Refunds processed within 3 business days</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed"><strong className="text-white">How to Request:</strong> Email support@notionhighlights.com with your purchase details</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed"><strong className="text-white">Guarantee Period:</strong> 30 days from date of purchase</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed"><strong className="text-white">Refund Method:</strong> Refunded to original payment method</span>
                      </li>
                    </ul>
                    <p className="text-white/60 text-lg leading-relaxed">
                      This guarantee is our commitment to your satisfaction and confidence in our products.
                    </p>
                  </div>

                  {/* Payment and Billing */}
                  <div className="group">
                    <h2 className="text-3xl font-black text-white mb-6 tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-200 group-hover:to-yellow-500 transition-all">
                      Payment and Billing
                    </h2>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed">All payments processed securely by Stripe</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed">Prices subject to change with 30 days notice to existing subscribers</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed">No refunds for partial subscription periods (except under 30-day guarantee)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed">Chargebacks may result in service termination across all extensions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed">Each extension requires separate purchase for Pro features</span>
                      </li>
                    </ul>
                  </div>

                  {/* User Responsibilities */}
                  <div className="group">
                    <h2 className="text-3xl font-black text-white mb-6 tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-200 group-hover:to-yellow-500 transition-all">
                      User Responsibilities
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed mb-4">You agree to:</p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed">Use our Services in compliance with all applicable laws</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed">Respect intellectual property rights of others</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed">Not use our Services for illegal or unauthorized purposes</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed">Maintain the security of your accounts and credentials</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed">Not attempt to reverse engineer, hack, or circumvent our Services</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed">Not abuse our refund policy with repeated purchase/refund cycles</span>
                      </li>
                    </ul>
                  </div>

                  {/* Intellectual Property */}
                  <div className="group">
                    <h2 className="text-3xl font-black text-white mb-6 tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-200 group-hover:to-yellow-500 transition-all">
                      Intellectual Property
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed">
                      Our extensions, including all source code, databases, functionality, software, website designs, and text, are owned by us and protected by copyright and trademark laws. Your content (highlights, notes, etc.) remains your property. We claim no ownership over your data.
                    </p>
                  </div>

                  {/* Third-Party Services */}
                  <div className="group">
                    <h2 className="text-3xl font-black text-white mb-6 tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-200 group-hover:to-yellow-500 transition-all">
                      Third-Party Services
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed mb-6">
                      Some extensions integrate with third-party services:
                    </p>
                    <ul className="space-y-4 mb-6">
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed"><strong className="text-white">Notion Highlights:</strong> Integrates with Notion through their official API</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed"><strong className="text-white">Focus Dock:</strong> Works with Chrome's native APIs for tabs, bookmarks, and history</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed"><strong className="text-white">Payment Processing:</strong> Handled by Stripe</span>
                      </li>
                    </ul>
                    <p className="text-white/60 text-lg leading-relaxed">
                      Your use of third-party services is governed by their respective Terms of Service. We are not responsible for third-party service availability or API changes.
                    </p>
                  </div>

                  {/* Data and Privacy */}
                  <div className="group">
                    <h2 className="text-3xl font-black text-white mb-6 tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-200 group-hover:to-yellow-500 transition-all">
                      Data and Privacy
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed mb-6">
                      We respect your privacy. Our extensions are designed to keep your data local whenever possible:
                    </p>
                    <ul className="space-y-4 mb-6">
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed"><strong className="text-white">Focus Dock:</strong> All data stored locally in your browser</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed"><strong className="text-white">Notion Highlights:</strong> Highlights go directly to your Notion workspace</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed">We collect minimal anonymous usage data to improve our Services</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed">See our Privacy Policy for complete details</span>
                      </li>
                    </ul>
                  </div>

                  {/* Termination */}
                  <div className="group">
                    <h2 className="text-3xl font-black text-white mb-6 tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-200 group-hover:to-yellow-500 transition-all">
                      Termination
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed">
                      We may terminate or suspend your access to our Services immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties. Pro-rated refunds may be issued at our discretion for terminated paid accounts.
                    </p>
                  </div>

                  {/* Disclaimer of Warranties */}
                  <div className="group">
                    <h2 className="text-3xl font-black text-white mb-6 tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-200 group-hover:to-yellow-500 transition-all">
                      Disclaimer of Warranties
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed">
                      OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT GUARANTEE THAT OUR SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPATIBLE WITH ALL BROWSER VERSIONS.
                    </p>
                  </div>

                  {/* Limitation of Liability */}
                  <div className="group">
                    <h2 className="text-3xl font-black text-white mb-6 tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-200 group-hover:to-yellow-500 transition-all">
                      Limitation of Liability
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed">
                      TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF OUR SERVICES. OUR TOTAL LIABILITY FOR ANY CLAIM SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE PAST 12 MONTHS.
                    </p>
                  </div>

                  {/* Indemnification */}
                  <div className="group">
                    <h2 className="text-3xl font-black text-white mb-6 tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-200 group-hover:to-yellow-500 transition-all">
                      Indemnification
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed">
                      You agree to defend, indemnify, and hold us harmless from any claims, damages, or demands arising from your use of our Services or violation of these Terms.
                    </p>
                  </div>

                  {/* Governing Law */}
                  <div className="group">
                    <h2 className="text-3xl font-black text-white mb-6 tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-200 group-hover:to-yellow-500 transition-all">
                      Governing Law
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed">
                      These Terms shall be governed by the laws of North Carolina, without regard to its conflict of law provisions.
                    </p>
                  </div>

                  {/* Changes to Terms */}
                  <div className="group">
                    <h2 className="text-3xl font-black text-white mb-6 tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-200 group-hover:to-yellow-500 transition-all">
                      Changes to Terms
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed">
                      We reserve the right to modify these terms at any time. We will provide notice of material changes via email or through our Services. Continued use after changes constitutes acceptance of the modified terms.
                    </p>
                  </div>

                  {/* Contact Information */}
                  <div className="group">
                    <h2 className="text-3xl font-black text-white mb-6 tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-200 group-hover:to-yellow-500 transition-all">
                      Contact Information
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed">
                      For questions about these Terms or to request a refund under our 30-day guarantee:
                      <br /><br />
                      <strong className="text-white">Email:</strong> support@notionhighlights.com
                      <br />
                      <strong className="text-white">Support Hours:</strong> Monday-Friday, 9AM-5PM EST
                      <br />
                      <strong className="text-white">Refund Response:</strong> Within 24 hours, processed within 3 business days
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        body { background: #030303; color: white; overflow-x: hidden; font-family: 'Inter', sans-serif; }
        .glass-card-chrome {
          background: rgba(255, 255, 255, 0.01);
          backdrop-filter: blur(40px) saturate(200%);
          -webkit-backdrop-filter: blur(40px) saturate(200%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: inset 0 1px 1px rgba(255,255,255,0.1);
        }
      `}</style>
    </Layout>
  )
}