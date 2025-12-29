// pages/privacy.tsx
import Layout from '../components/Layout'
import { motion } from 'framer-motion'

export default function Privacy() {
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
              <span className="text-white/80 text-[10px] font-black uppercase tracking-[0.3em]">Privacy & Security</span>
            </div>

            <h1 className="text-6xl md:text-[8rem] font-black text-white mb-8 tracking-tighter leading-[0.8] mix-blend-exclusion">
              Privacy
              <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500">Policy</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/40 max-w-3xl mx-auto font-light leading-snug">
              We believe in transparency and your right to privacy. Here's how we handle your data across all our extensions.
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
                  {/* Our Commitment */}
                  <div className="group">
                    <h2 className="text-3xl font-black text-white mb-6 tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-200 group-hover:to-yellow-500 transition-all">
                      Our Commitment to Your Privacy
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed">
                      We ("we," "our," or "us") are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Chrome extensions and related services, including Notion Highlights, Focus Dock, and future extensions.
                    </p>
                  </div>

                  {/* Scope */}
                  <div className="group">
                    <h2 className="text-3xl font-black text-white mb-6 tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-200 group-hover:to-yellow-500 transition-all">
                      Scope
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed">
                      This Privacy Policy applies to all our browser extensions, websites, and services (collectively, "Services"). Each extension may collect different types of information based on its functionality.
                    </p>
                  </div>

                  {/* Information We Collect */}
                  <div className="group">
                    <h2 className="text-3xl font-black text-white mb-6 tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-200 group-hover:to-yellow-500 transition-all">
                      Information We Collect
                    </h2>
                    
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Personal Information</h3>
                        <ul className="space-y-4">
                          <li className="flex items-start gap-3">
                            <span className="text-yellow-500 text-xl mt-1">•</span>
                            <span className="text-white/60 leading-relaxed"><strong className="text-white">Email Address:</strong> Only if you voluntarily provide it for account creation, Pro upgrades, or product updates</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-yellow-500 text-xl mt-1">•</span>
                            <span className="text-white/60 leading-relaxed"><strong className="text-white">Third-Party Account Information:</strong> Basic profile information needed for integrations (e.g., Notion OAuth authentication for Notion Highlights)</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-yellow-500 text-xl mt-1">•</span>
                            <span className="text-white/60 leading-relaxed"><strong className="text-white">Payment Information:</strong> Processed securely by Stripe - we never store your payment details</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-yellow-500 text-xl mt-1">•</span>
                            <span className="text-white/60 leading-relaxed"><strong className="text-white">Communication Data:</strong> Messages you send us via support or contact forms</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Extension-Specific Information</h3>
                        <ul className="space-y-4">
                          <li className="flex items-start gap-3">
                            <span className="text-yellow-500 text-xl mt-1">•</span>
                            <span className="text-white/60 leading-relaxed"><strong className="text-white">Notion Highlights:</strong> Highlight counts for free tier management, basic Notion page information for saving destinations</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-yellow-500 text-xl mt-1">•</span>
                            <span className="text-white/60 leading-relaxed"><strong className="text-white">Focus Dock:</strong> Local browser data (tabs, bookmarks, notes) stored entirely on your device</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-yellow-500 text-xl mt-1">•</span>
                            <span className="text-white/60 leading-relaxed"><strong className="text-white">Usage Analytics:</strong> Anonymous feature usage data to improve our extensions</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-yellow-500 text-xl mt-1">•</span>
                            <span className="text-white/60 leading-relaxed"><strong className="text-white">Technical Data:</strong> Browser type, version, and basic error logs</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4">What We Never Collect</h3>
                        <ul className="space-y-4">
                          <li className="flex items-start gap-3">
                            <span className="text-yellow-500 text-xl mt-1">•</span>
                            <span className="text-white/60 leading-relaxed">Your personal content (highlights, notes, bookmarks, etc.)</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-yellow-500 text-xl mt-1">•</span>
                            <span className="text-white/60 leading-relaxed">Third-party service data (Notion pages, database contents)</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-yellow-500 text-xl mt-1">•</span>
                            <span className="text-white/60 leading-relaxed">Personal documents or sensitive information</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-yellow-500 text-xl mt-1">•</span>
                            <span className="text-white/60 leading-relaxed">Browsing history unrelated to our extensions</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-yellow-500 text-xl mt-1">•</span>
                            <span className="text-white/60 leading-relaxed">Passwords or authentication tokens (except for required OAuth flows)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Data Storage and Local Processing */}
                  <div className="group">
                    <h2 className="text-3xl font-black text-white mb-6 tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-200 group-hover:to-yellow-500 transition-all">
                      Data Storage and Local Processing
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed mb-6">
                      Our extensions are designed with privacy in mind:
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed"><strong className="text-white">Focus Dock:</strong> All data (notes, reading list, workspaces, clipboard) is stored locally in your browser. Nothing is sent to our servers. Your data stays private and works offline.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed"><strong className="text-white">Notion Highlights:</strong> Highlights go directly from your browser to your Notion workspace. We only track highlight counts for free tier management.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed"><strong className="text-white">Zero-OAuth Mode:</strong> For Notion Highlights, the zero-OAuth mode works without sending any data to our servers - it goes directly from browser to Notion.</span>
                      </li>
                    </ul>
                  </div>

                  {/* How We Use Your Information */}
                  <div className="group">
                    <h2 className="text-3xl font-black text-white mb-6 tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-200 group-hover:to-yellow-500 transition-all">
                      How We Use Your Information
                    </h2>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed">To provide and maintain our Services</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed">To manage free tier limits and Pro subscriptions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed">To notify you about service updates (if you opt-in)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed">To provide customer support across all extensions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed">To improve our extensions and user experience</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed">To detect and prevent technical issues</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed">To process refunds under our 30-day money-back guarantee</span>
                      </li>
                    </ul>
                  </div>

                  {/* Email Communications */}
                  <div className="group">
                    <h2 className="text-3xl font-black text-white mb-6 tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-200 group-hover:to-yellow-500 transition-all">
                      Email Communications
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed mb-4">
                      We use Resend for email delivery. When you provide your email address, we may send you:
                    </p>
                    <ul className="space-y-4 mb-6">
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed">Account verification and setup instructions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed">Product updates and new features across extensions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed">Tips and tricks for better workflows</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed">Extension-specific announcements</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed">Important policy updates</span>
                      </li>
                    </ul>
                    <p className="text-white/60 text-lg leading-relaxed">
                      <strong className="text-white">You can unsubscribe at any time</strong> by clicking the unsubscribe link in any email or contacting us at support@notionhighlights.com. Unsubscribing from emails does not affect your extension access.
                    </p>
                  </div>

                  {/* Data Sharing and Disclosure */}
                  <div className="group">
                    <h2 className="text-3xl font-black text-white mb-6 tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-200 group-hover:to-yellow-500 transition-all">
                      Data Sharing and Disclosure
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed mb-4">
                      We do not sell, trade, or rent your personal information to third parties. We may share information with:
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed"><strong className="text-white">Service Providers:</strong> Trusted third parties who assist us in operating our services (e.g., Resend for emails, Stripe for payments, Google Analytics for anonymous usage data)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed"><strong className="text-white">Legal Requirements:</strong> When required by law or to protect our rights</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed"><strong className="text-white">Business Transfers:</strong> In connection with a merger or sale of company assets</span>
                      </li>
                    </ul>
                  </div>

                  {/* Data Security */}
                  <div className="group">
                    <h2 className="text-3xl font-black text-white mb-6 tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-200 group-hover:to-yellow-500 transition-all">
                      Data Security
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed">
                      We implement appropriate technical and organizational security measures to protect your personal information. All payment processing is handled securely by Stripe. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                    </p>
                  </div>

                  {/* Your Rights */}
                  <div className="group">
                    <h2 className="text-3xl font-black text-white mb-6 tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-200 group-hover:to-yellow-500 transition-all">
                      Your Rights
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed mb-4">You have the right to:</p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed">Access and receive a copy of your personal data</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed">Correct inaccurate personal information</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed">Request deletion of your personal information</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed">Opt-out of marketing communications</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed">Data portability</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl mt-1">•</span>
                        <span className="text-white/60 leading-relaxed">Request a refund under our 30-day money-back guarantee</span>
                      </li>
                    </ul>
                  </div>

                  {/* Refund Policy */}
                  <div className="group">
                    <h2 className="text-3xl font-black text-white mb-6 tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-200 group-hover:to-yellow-500 transition-all">
                      Refund Policy
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed">
                      We offer a 30-day money-back guarantee on all Pro purchases. If you're not satisfied with any of our extensions, contact us within 30 days of purchase for a full refund, no questions asked. This applies to all current and future extensions.
                    </p>
                  </div>

                  {/* Children's Privacy */}
                  <div className="group">
                    <h2 className="text-3xl font-black text-white mb-6 tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-200 group-hover:to-yellow-500 transition-all">
                      Children's Privacy
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed">
                      Our Services are not intended for children under 13. We do not knowingly collect information from children under 13.
                    </p>
                  </div>

                  {/* Changes to This Policy */}
                  <div className="group">
                    <h2 className="text-3xl font-black text-white mb-6 tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-200 group-hover:to-yellow-500 transition-all">
                      Changes to This Policy
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed">
                      We may update this Privacy Policy periodically. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. For significant changes, we may also notify you via email.
                    </p>
                  </div>

                  {/* Contact Us */}
                  <div className="group">
                    <h2 className="text-3xl font-black text-white mb-6 tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-200 group-hover:to-yellow-500 transition-all">
                      Contact Us
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed">
                      If you have questions about this Privacy Policy or our refund guarantee, please contact us at:
                      <br /><br />
                      <strong className="text-white">Email:</strong> support@notionhighlights.com
                      <br />
                      <strong className="text-white">Response Time:</strong> We aim to respond within 24 hours
                      <br />
                      <strong className="text-white">Refund Requests:</strong> Processed within 3 business days
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