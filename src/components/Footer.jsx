import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-yellow-400 text-xl font-black tracking-tighter">HADEI</span>
              <span className="text-white text-xl font-thin tracking-widest">NETWORK</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Where India's creative freelancers meet clients who value craft. Built for the visual arts community.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-5">Platform</h4>
            <ul className="space-y-3">
              {['How It Works', 'Browse Freelancers', 'Post a Job', 'Pricing'].map(item => (
                <li key={item}>
                  <a href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-200">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-5">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Blog', 'Careers', 'Contact'].map(item => (
                <li key={item}>
                  <a href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-200">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs tracking-wide">
            © {new Date().getFullYear()} Hadei Network. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
