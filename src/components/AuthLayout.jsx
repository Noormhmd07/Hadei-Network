import { Link } from 'react-router-dom'

export default function AuthLayout({ children, title, subtitle, footerText, footerLinkLabel, footerLinkTo }) {
  return (
    <div className="min-h-screen bg-black flex">
      {/* Left decorative panel — hidden on mobile */}
      <div className="hidden lg:flex lg:w-1/2 bg-yellow-400 relative overflow-hidden flex-col justify-between p-16">
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(black 1px, transparent 1px), linear-gradient(90deg, black 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Logo */}
        <Link to="/" className="relative z-10 flex items-center gap-2">
          <span className="text-black text-2xl font-black tracking-tighter">HADEI</span>
          <span className="text-black/50 text-2xl font-thin tracking-widest">NETWORK</span>
        </Link>

        {/* Tagline */}
        <div className="relative z-10">
          <p className="text-black text-5xl font-black leading-tight tracking-tight mb-6">
            WHERE<br />
            CRAFT<br />
            MEETS<br />
            CLIENT.
          </p>
          <p className="text-black/60 text-sm leading-relaxed max-w-xs">
            India's creative freelance network — built for video editors, designers, and visual storytellers.
          </p>
        </div>

        {/* Bottom decorative marks */}
        <div className="relative z-10 flex items-center gap-2">
          <div className="h-px w-8 bg-black/30" />
          <span className="text-black/40 text-xs tracking-widest uppercase font-medium">
            Trusted by 2,400+ creatives
          </span>
        </div>

        {/* Corner decoration */}
        <div className="absolute bottom-0 right-0 w-64 h-64 border-l border-t border-black/10" />
        <div className="absolute bottom-8 right-8 w-40 h-40 border-l border-t border-black/10" />
      </div>

      {/* Right form panel */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-16 overflow-y-auto">
        {/* Mobile logo */}
        <div className="lg:hidden mb-10">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-yellow-400 text-xl font-black tracking-tighter">HADEI</span>
            <span className="text-white text-xl font-thin tracking-widest">NETWORK</span>
          </Link>
        </div>

        <div className="w-full max-w-md mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-6 bg-yellow-400" />
              <span className="text-yellow-400 text-xs font-bold tracking-[0.25em] uppercase">
                {title}
              </span>
            </div>
            {subtitle && (
              <p className="text-white/40 text-sm leading-relaxed">{subtitle}</p>
            )}
          </div>

          {/* Form content injected here */}
          {children}

          {/* Footer link */}
          {footerText && (
            <p className="text-white/30 text-sm text-center mt-8">
              {footerText}{' '}
              <Link
                to={footerLinkTo}
                className="text-yellow-400 hover:text-yellow-300 font-bold transition-colors"
              >
                {footerLinkLabel}
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
