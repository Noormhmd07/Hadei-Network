const roles = [
  {
    value: 'freelancer',
    label: 'Freelancer',
    description: 'I offer creative services — video, design, photography, and more.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    value: 'client',
    label: 'Client',
    description: 'I want to hire talented creatives for my projects.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
      </svg>
    ),
  },
]

export default function RoleSelector({ value, onChange, error }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-white/70 text-xs font-bold tracking-widest uppercase">
        I am joining as <span className="text-yellow-400">*</span>
      </label>
      <div className="grid grid-cols-2 gap-3">
        {roles.map((role) => (
          <button
            key={role.value}
            type="button"
            onClick={() => onChange(role.value)}
            className={`
              flex flex-col items-start gap-2 p-4 border text-left transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:ring-offset-black
              ${
                value === role.value
                  ? 'border-yellow-400 bg-yellow-400/10 text-white'
                  : 'border-white/15 bg-white/5 text-white/60 hover:border-white/30 hover:text-white/80'
              }
            `}
          >
            <span className={value === role.value ? 'text-yellow-400' : 'text-white/40'}>
              {role.icon}
            </span>
            <div>
              <p className={`text-sm font-bold tracking-wide ${value === role.value ? 'text-white' : ''}`}>
                {role.label}
              </p>
              <p className="text-xs text-white/40 leading-relaxed mt-0.5">{role.description}</p>
            </div>
          </button>
        ))}
      </div>
      {error && <p className="text-red-400 text-xs mt-0.5">{error}</p>}
    </div>
  )
}
