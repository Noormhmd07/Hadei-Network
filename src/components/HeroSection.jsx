import { Link } from 'react-router-dom'
import Button from './Button'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
      {/* Grid background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Yellow accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-yellow-400/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative corner marks */}
      <div className="absolute top-24 left-8 w-12 h-12 border-l-2 border-t-2 border-yellow-400/30" />
      <div className="absolute top-24 right-8 w-12 h-12 border-r-2 border-t-2 border-yellow-400/30" />
      <div className="absolute bottom-12 left-8 w-12 h-12 border-l-2 border-b-2 border-yellow-400/30" />
      <div className="absolute bottom-12 right-8 w-12 h-12 border-r-2 border-b-2 border-yellow-400/30" />

      <div className="relative max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="max-w-4xl">
          {/* Eyebrow label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-10 bg-yellow-400" />
            <span className="text-yellow-400 text-xs font-bold tracking-[0.3em] uppercase">
              India's Creative Freelance Network
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-black text-white leading-none mb-8">
            <span className="block text-6xl md:text-8xl tracking-tight">CRAFT</span>
            <span className="block text-6xl md:text-8xl tracking-tight">MEETS</span>
            <span className="block text-6xl md:text-8xl tracking-tight text-yellow-400">
              CLIENT.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-white/50 text-lg md:text-xl max-w-xl leading-relaxed mb-12 font-light">
            Hadei Network connects India's finest video editors, designers, and creative professionals with clients who know the difference.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link to="/signup">
              <Button variant="primary" size="xl">
                Start as Freelancer
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="secondary" size="xl">
                Hire Talent
              </Button>
            </Link>
          </div>

          {/* Trust bar */}
          <div className="flex items-center gap-8 mt-16 pt-12 border-t border-white/10">
            {[
              { label: 'Verified Creatives', value: '2,400+' },
              { label: 'Projects Delivered', value: '8,100+' },
              { label: 'Average Rating', value: '4.9 ★' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-black text-white">{stat.value}</div>
                <div className="text-white/40 text-xs tracking-wider uppercase mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
