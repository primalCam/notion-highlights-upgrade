// pages/about.tsx
import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Built by Researchers,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] to-[#ffed4e] block">
                For Researchers
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              The story behind Notion Highlights and the developer who created it
            </p>
          </div>

          {/* Main Content */}
          <div className="glass-card p-8 mb-12">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-white mb-6">From Trucker to Tech Creator</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-8">
                <div>
                  <p className="text-white/70 mb-4 text-lg">
                    Hi, I'm <strong className="text-white">Cameryn Smith</strong> (though most people know me as <strong className="text-[#ffd700]">Primal Cam</strong>), the indie developer behind Notion Highlights.
                  </p>
                  
                  <p className="text-white/70 mb-4">
                    My journey to creating this extension started after 7 years on the road as a trucker. While the open road taught me discipline and perseverance, I knew my true passion was in technology and creating solutions that make people's lives better.
                  </p>

                  <p className="text-white/70 mb-4">
                    I left trucking behind to pursue my dream of building high-quality software products full-time. With 15 years of self-taught and college-honed development experience, I'm now dedicated to creating tools that solve real problems for real people.
                  </p>
                </div>
                
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4">Beyond Code</h3>
                  <ul className="text-white/70 space-y-3">
                    <li className="flex items-start">
                      <span className="text-[#ffd700] mr-3">🥊</span>
                      <span><strong>Muay Thai Kickboxing:</strong> Where I channel my focus and discipline</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ffd700] mr-3">💨</span>
                      <span><strong>Premium Cigars:</strong> Enjoyed with family during quality time</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ffd700] mr-3">🚛</span>
                      <span><strong>Former Trucker:</strong> 7 years on the road gave me perspective</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ffd700] mr-3">💻</span>
                      <span><strong>Self-Taught Dev:</strong> 15 years of coding experience</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mb-6">Why I Built Notion Highlights</h2>
              
              <p className="text-white/70 mb-6">
                As someone who spends hours researching online—whether it's for coding solutions, business strategies, or personal interests—I found myself constantly frustrated by the friction of saving valuable insights. The constant tab-switching, copying, pasting, and formatting disrupted my flow state.
              </p>

              <p className="text-white/70 mb-6">
                I created Notion Highlights to solve this exact problem. I wanted a tool that would:
              </p>

              <ul className="text-white/70 mb-8 list-disc list-inside space-y-3">
                <li><strong>Keep me in flow state</strong> without breaking concentration</li>
                <li><strong>Respect privacy</strong> by never storing personal data</li>
                <li><strong>Be truly free to start</strong> with no hidden requirements</li>
                <li><strong>Work seamlessly</strong> with the tools I already use (Notion)</li>
                <li><strong>Handle any content</strong> - not just plain text</li>
              </ul>

              <div className="bg-gradient-to-r from-[#ffd700]/10 to-[#ffed4e]/10 rounded-lg p-6 border border-[#ffd700]/20 mb-8">
                <h3 className="text-2xl font-bold text-white mb-4 text-center">My Development Philosophy</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl mb-2">🎯</div>
                    <h4 className="font-bold text-white mb-2">Solve Real Problems</h4>
                    <p className="text-white/70 text-sm">Build tools that address genuine user pain points</p>
                  </div>
                  <div>
                    <div className="text-3xl mb-2">🔒</div>
                    <h4 className="font-bold text-white mb-2">Privacy First</h4>
                    <p className="text-white/70 text-sm">Your data belongs to you, always</p>
                  </div>
                  <div>
                    <div className="text-3xl mb-2">⚡</div>
                    <h4 className="font-bold text-white mb-2">Minimal Friction</h4>
                    <p className="text-white/70 text-sm">Get value immediately, no barriers</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mb-6">The Future</h2>
              
              <p className="text-white/70 mb-6">
                Notion Highlights is just the beginning. I'm committed to continuously improving this tool based on user feedback and adding features that genuinely enhance your research workflow. As an indie developer, every user matters, and I read every piece of feedback that comes in.
              </p>

              <p className="text-white/70">
                This isn't just another Chrome extension—it's a solution built from personal frustration and a genuine desire to make research and knowledge management better for everyone.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Research Workflow?
            </h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Join me in building better research habits. Try Notion Highlights completely free—no strings attached.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = 'https://chrome.google.com/webstore/detail/notion-highlights/your-extension-id'}
                className="gradient-button text-lg py-3 px-8"
              >
                Install Free Extension
              </button>
              <button 
                onClick={() => window.location.href = '/support'}
                className="glass-button text-lg py-3 px-8"
              >
                Send Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}