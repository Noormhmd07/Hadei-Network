const steps = [
  {
    number: '01',
    title: 'Build Your Profile',
    description:
      'Showcase your portfolio, claim your style badges, and set your availability. Your work speaks for itself.',
    forFreelancer: true,
  },
  {
    number: '02',
    title: 'Get Matched',
    description:
      'Our feel-based matching pairs clients with creatives who share their aesthetic vision — not just skills.',
    forFreelancer: false,
  },
  {
    number: '03',
    title: 'Deliver with Confidence',
    description:
      'Escrow-backed payments, structured milestones, and a clear revision process protect everyone.',
    forFreelancer: true,
  },
  {
    number: '04',
    title: 'Grow Together',
    description:
      'Reviews, performance scores, and community features help you level up after every project.',
    forFreelancer: false,
  },
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-black py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-10 bg-yellow-400" />
          <span className="text-yellow-400 text-xs font-bold tracking-[0.3em] uppercase">Process</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
            How It<br />
            <span className="text-yellow-400">Works</span>
          </h2>
          <p className="text-white/40 max-w-sm text-sm leading-relaxed md:text-right">
            From discovery to delivery, every step is designed to build trust between creators and clients.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative p-8 border-t border-r border-white/10 first:border-l group hover:bg-white/[0.02] transition-colors duration-300"
            >
              {/* Step number */}
              <div className="text-6xl font-black text-white/5 group-hover:text-yellow-400/10 transition-colors duration-300 mb-6 leading-none">
                {step.number}
              </div>

              {/* Tag */}
              <div className={`inline-block text-xs font-bold tracking-widest uppercase px-2.5 py-1 mb-4 ${step.forFreelancer ? 'bg-yellow-400/10 text-yellow-400' : 'bg-white/10 text-white/50'}`}>
                {step.forFreelancer ? 'Freelancer' : 'Client'}
              </div>

              <h3 className="text-white font-bold text-lg mb-3 leading-tight">{step.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{step.description}</p>

              {/* Connector arrow (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 z-10 text-yellow-400/30 text-xl">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
