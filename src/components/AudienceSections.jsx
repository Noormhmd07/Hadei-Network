import { Link } from 'react-router-dom'
import Button from './Button'

const freelancerFeatures = [
  'Verified style & feel badges',
  'Escrow-backed payment protection',
  'Portfolio showcase with media support',
  'Performance scores & reviews',
  'Project workspace & collaboration tools',
  'Community, events & mentorships',
]

const clientFeatures = [
  'Feel-based freelancer matching',
  'Structured proposals & milestones',
  'Escrow holds until you approve',
  'Dispute resolution with evidence trail',
  'In-house takeover for critical projects',
  'AI-powered brief generation (coming soon)',
]

function FeatureList({ items, accent }) {
  return (
    <ul className="space-y-3 mt-8">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className={`mt-1 text-xs ${accent}`}>◆</span>
          <span className="text-white/60 text-sm leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function AudienceSections() {
  return (
    <>
      {/* For Freelancers */}
      <section id="for-freelancers" className="bg-black py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual panel */}
            <div className="relative">
              <div className="aspect-square max-w-md bg-white/[0.03] border border-white/10 relative overflow-hidden">
                {/* Decorative grid */}
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-10">
                  <div className="bg-yellow-400/10 border border-yellow-400/20 px-4 py-2">
                    <span className="text-yellow-400 text-xs font-bold tracking-widest">CINEMATIC</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 px-4 py-2">
                    <span className="text-white/50 text-xs font-bold tracking-widest">LUXURY</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 px-4 py-2">
                    <span className="text-white/50 text-xs font-bold tracking-widest">EMOTIONAL</span>
                  </div>
                  <p className="text-white/20 text-xs text-center tracking-widest uppercase mt-4">
                    Your feel. Your badge.
                  </p>
                </div>
              </div>
              {/* Floating stat */}
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-black p-5">
                <div className="text-3xl font-black">4.9</div>
                <div className="text-xs font-bold tracking-wider">Avg Rating</div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-yellow-400" />
                <span className="text-yellow-400 text-xs font-bold tracking-[0.3em] uppercase">For Freelancers</span>
              </div>
              <h2 className="text-5xl font-black text-white leading-tight mb-4">
                Your craft.<br />
                <span className="text-yellow-400">Your rules.</span>
              </h2>
              <p className="text-white/50 text-base leading-relaxed">
                Hadei Network is built for India's visual creatives. Get found for your <em>feel</em>, not just your skillset. Protect your earnings with escrow and build a reputation that travels.
              </p>
              <FeatureList items={freelancerFeatures} accent="text-yellow-400" />
              <div className="mt-10">
                <Link to="/signup">
                  <Button variant="primary" size="lg">Join as Freelancer</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Clients */}
      <section id="for-clients" className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-black" />
                <span className="text-black text-xs font-bold tracking-[0.3em] uppercase">For Clients</span>
              </div>
              <h2 className="text-5xl font-black text-black leading-tight mb-4">
                Hire for feel,<br />
                <span className="text-yellow-500">not just skill.</span>
              </h2>
              <p className="text-black/50 text-base leading-relaxed">
                Stop scrolling through generic portfolios. Our feel-based matching surfaces creatives who share your aesthetic vision — before you even write a brief.
              </p>
              <ul className="space-y-3 mt-8">
                {clientFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-yellow-500 mt-1 text-xs">◆</span>
                    <span className="text-black/60 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link to="/signup">
                  <Button variant="primary" size="lg" className="!bg-black !text-white hover:!bg-black/80">
                    Post a Job
                  </Button>
                </Link>
              </div>
            </div>

            {/* Visual panel */}
            <div className="relative">
              <div className="aspect-square max-w-md bg-black/[0.04] border border-black/10 relative overflow-hidden">
                <div className="absolute inset-0 flex flex-col justify-end p-10 gap-3">
                  {[
                    { name: 'Arjun V.', tag: 'CINEMATIC', score: '98', active: true },
                    { name: 'Priya M.', tag: 'EMOTIONAL', score: '95', active: false },
                    { name: 'Ravi S.', tag: 'LUXURY', score: '91', active: false },
                  ].map((card) => (
                    <div key={card.name} className={`flex items-center justify-between px-4 py-3 border ${card.active ? 'bg-black border-black text-white' : 'bg-white border-black/10 text-black'}`}>
                      <div>
                        <p className={`text-sm font-bold ${card.active ? 'text-white' : 'text-black'}`}>{card.name}</p>
                        <p className={`text-xs tracking-widest ${card.active ? 'text-yellow-400' : 'text-black/40'}`}>{card.tag}</p>
                      </div>
                      <div className={`text-2xl font-black ${card.active ? 'text-yellow-400' : 'text-black/20'}`}>{card.score}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-6 -left-6 bg-black text-white p-5">
                <div className="text-3xl font-black text-yellow-400">2.4K</div>
                <div className="text-xs font-bold tracking-wider">Verified Creatives</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
