import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup'

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-yellow-400/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-yellow-400 text-2xl font-black tracking-tighter leading-none">
            HADEI
          </span>
          <span className="text-white text-2xl font-thin tracking-widest leading-none">
            NETWORK
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/#how-it-works"
            className="text-white/60 hover:text-yellow-400 text-sm font-medium tracking-widest uppercase transition-colors duration-200"
          >
            How It Works
          </Link>
          <Link
            to="/#for-freelancers"
            className="text-white/60 hover:text-yellow-400 text-sm font-medium tracking-widest uppercase transition-colors duration-200"
          >
            Freelancers
          </Link>
          <Link
            to="/#for-clients"
            className="text-white/60 hover:text-yellow-400 text-sm font-medium tracking-widest uppercase transition-colors duration-200"
          >
            Clients
          </Link>
        </div>

        {/* CTA buttons */}
        {!isAuthPage && (
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="text-white/80 hover:text-yellow-400 text-sm font-medium tracking-wider uppercase transition-colors duration-200 px-4 py-2"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="bg-yellow-400 hover:bg-yellow-300 text-black text-sm font-black tracking-wider uppercase px-5 py-2.5 transition-colors duration-200"
            >
              Join Now
            </Link>
          </div>
        )}

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/80 hover:text-yellow-400 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-yellow-400/20 px-6 py-6 flex flex-col gap-5">
          <Link to="/#how-it-works" className="text-white/70 hover:text-yellow-400 text-sm font-medium tracking-widest uppercase" onClick={() => setMenuOpen(false)}>How It Works</Link>
          <Link to="/#for-freelancers" className="text-white/70 hover:text-yellow-400 text-sm font-medium tracking-widest uppercase" onClick={() => setMenuOpen(false)}>Freelancers</Link>
          <Link to="/#for-clients" className="text-white/70 hover:text-yellow-400 text-sm font-medium tracking-widest uppercase" onClick={() => setMenuOpen(false)}>Clients</Link>
          <hr className="border-yellow-400/20" />
          {!isAuthPage && (
            <>
              <Link to="/login" className="text-white/80 hover:text-yellow-400 text-sm font-medium tracking-wider uppercase" onClick={() => setMenuOpen(false)}>Log In</Link>
              <Link to="/signup" className="bg-yellow-400 text-black text-sm font-black tracking-wider uppercase px-5 py-3 text-center" onClick={() => setMenuOpen(false)}>Join Now</Link>
            </>
          )}
        </div>
      )}
    </nav>
  )
}
