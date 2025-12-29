// pages/about.tsx
import Layout from '../components/Layout'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <Layout>
      {/* Base Background */}
      <div className="min-h-screen bg-[#030303] pt-32 pb-20 px-6">
        
        {/* Dynamic Glow */}
        <div className="fixed inset-0 pointer-events-none -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-yellow-400/20 to-yellow-600/10 blur-[160px] opacity-40" />
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-6">
              Built by Researchers,
              <span className="text-white/20 block">For Researchers</span>
            </h1>
            <p className="text-white/40 text-lg max-w-xl mx-auto font-light">
              The story behind Notion Highlights and the developer who created it
            </p>
          </div>

          {/* Main Content */}
          <div className="glass-card-chrome p-12 rounded-[2.5rem] border border-white/10 mb-12">
            <div className="max-w-none">
              <h2 className="text-4xl font-black text-white mb-8 tracking-tight">From Trucker to Tech Creator</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="text-white/60 text-lg mb-6 leading-relaxed font-light">
                    Hi, I'm <strong className="text-yellow-400">Cameryn Smith</strong> (though most people know me as <strong className="text-yellow-400">Primal Cam</strong>), the indie developer behind Notion Highlights.
                  </p>
                  
                  <p className="text-white/60 mb-6 leading-relaxed font-light">
                    My journey to creating this extension started after 7 years on the road as a trucker. While the open road taught me discipline and perseverance, I knew my true passion was in technology and creating solutions that make people's lives better.
                  </p>

                  <p className="text-white/60 mb-6 leading-relaxed font-light">
                    I left trucking behind to pursue my dream of building high-quality software products full-time. With 15 years of self-taught and college-honed development experience, I'm now dedicated to creating tools that solve real problems for real people.
                  </p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="glass-card-chrome rounded-[2rem] border border-yellow-500/20 p-8 bg-gradient-to-br from-yellow-500/5 to-transparent"
                >
                  <h3 className="text-2xl font-black text-white mb-6 tracking-tight">Beyond Code</h3>
                  <ul className="space-y-4">
                    <motion.li 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="flex items-start group"
                    >
                      <span className="text-yellow-400 mr-4 text-xl group-hover:scale-110 transition-transform">🥊</span>
                      <div>
                        <div className="text-white font-bold mb-1">Muay Thai Kickboxing</div>
                        <div className="text-white/40 text-sm font-light">Where I channel my focus and discipline</div>
                      </div>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="flex items-start group"
                    >
                      <span className="text-yellow-400 mr-4 text-xl group-hover:scale-110 transition-transform">💨</span>
                      <div>
                        <div className="text-white font-bold mb-1">Premium Cigars</div>
                        <div className="text-white/40 text-sm font-light">Enjoyed with family during quality time</div>
                      </div>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="flex items-start group"
                    >
                      <span className="text-yellow-400 mr-4 text-xl group-hover:scale-110 transition-transform">🚛</span>
                      <div>
                        <div className="text-white font-bold mb-1">Former Trucker</div>
                        <div className="text-white/40 text-sm font-light">7 years on the road gave me perspective</div>
                      </div>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="flex items-start group"
                    >
                      <span className="text-yellow-400 mr-4 text-xl group-hover:scale-110 transition-transform">💻</span>
                      <div>
                        <div className="text-white font-bold mb-1">Self-Taught Dev</div>
                        <div className="text-white/40 text-sm font-light">15 years of coding experience</div>
                      </div>
                    </motion.li>
                  </ul>
                </motion.div>
              </div>

              <h2 className="text-4xl font-black text-white mb-8 tracking-tight">Why I Built Notion Highlights</h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-white/60 text-lg mb-8 leading-relaxed font-light"
              >
                As someone who spends hours researching online—whether it's for coding solutions, business strategies, or personal interests—I found myself constantly frustrated by the friction of saving valuable insights. The constant tab-switching, copying, pasting, and formatting disrupted my flow state.
              </motion.p>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-white/60 text-lg mb-8 leading-relaxed font-light"
              >
                I created Notion Highlights to solve this exact problem. I wanted a tool that would:
              </motion.p>

              <motion.ul 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
              >
                {[
                  { text: "Keep me in flow state without breaking concentration", emoji: "⚡" },
                  { text: "Respect privacy by never storing personal data", emoji: "🔒" },
                  { text: "Be truly free to start with no hidden requirements", emoji: "🎁" },
                  { text: "Work seamlessly with the tools I already use (Notion)", emoji: "🔄" },
                  { text: "Handle any content - not just plain text", emoji: "📄" },
                  { text: "Get value immediately, no learning curve", emoji: "🎯" },
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + (index * 0.1) }}
                    className="flex items-start"
                  >
                    <span className="text-yellow-400 mr-3 text-xl">{item.emoji}</span>
                    <span className="text-white/70 font-light">{item.text}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="glass-card-chrome rounded-[2rem] border border-yellow-500/30 p-8 mb-12 bg-gradient-to-br from-yellow-500/10 to-transparent"
              >
                <h3 className="text-3xl font-black text-white mb-8 text-center tracking-tight">My Development Philosophy</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { emoji: "🎯", title: "Solve Real Problems", description: "Build tools that address genuine user pain points" },
                    { emoji: "🔒", title: "Privacy First", description: "Your data belongs to you, always" },
                    { emoji: "⚡", title: "Minimal Friction", description: "Get value immediately, no barriers" },
                  ].map((philosophy, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.4 + (index * 0.1) }}
                      className="text-center p-6 rounded-2xl border border-white/5 hover:border-yellow-500/30 transition-all duration-300 hover:bg-yellow-500/5 group"
                    >
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{philosophy.emoji}</div>
                      <h4 className="text-xl font-black text-white mb-2 tracking-tight">{philosophy.title}</h4>
                      <p className="text-white/40 text-sm font-light">{philosophy.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <h2 className="text-4xl font-black text-white mb-8 tracking-tight">The Future</h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="text-white/60 text-lg mb-8 leading-relaxed font-light"
              >
                Notion Highlights is just the beginning. I'm committed to continuously improving this tool based on user feedback and adding features that genuinely enhance your research workflow. As an indie developer, every user matters, and I read every piece of feedback that comes in.
              </motion.p>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.7 }}
                className="text-white/60 text-lg leading-relaxed font-light"
              >
                This isn't just another Chrome extension—it's a solution built from personal frustration and a genuine desire to make research and knowledge management better for everyone.
              </motion.p>
            </div>
          </div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-center glass-card-chrome p-12 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-yellow-500/5 to-transparent"
          >
            <h3 className="text-3xl font-black text-white mb-6 tracking-tight">
              Ready to Transform Your Research Workflow?
            </h3>
            <p className="text-white/40 text-lg mb-8 max-w-xl mx-auto font-light">
              Join me in building better research habits. Try Notion Highlights completely free—no strings attached.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = 'https://chromewebstore.google.com/detail/notion-highlights/addpdkeebbfpcgificcaojjkbpddjhka?authuser=1&hl=en&pli=1'}
                className="bg-white text-black font-black text-sm uppercase tracking-widest py-5 px-8 rounded-2xl hover:scale-105 transition-all duration-300"
              >
                Install Free Extension
              </button>
              <button 
                onClick={() => window.location.href = '/contact'}
                className="bg-white/5 text-white font-bold text-sm uppercase tracking-widest py-5 px-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                Send Feedback
              </button>
            </div>
            <p className="text-white/30 text-sm mt-6 font-light">
              Already using it? <a href="/support" className="text-yellow-400 hover:text-yellow-300 transition-colors font-medium">Visit Support →</a>
            </p>
          </motion.div>
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