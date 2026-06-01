export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  loading = false,
  type = 'button',
  onClick,
}) {
  const base =
    'inline-flex items-center justify-center font-black tracking-wider uppercase transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black'

  const variants = {
    primary: 'bg-yellow-400 hover:bg-yellow-300 text-black',
    secondary: 'bg-transparent border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black',
    ghost: 'bg-transparent text-white/70 hover:text-yellow-400',
    danger: 'bg-red-500 hover:bg-red-400 text-white',
  }

  const sizes = {
    sm: 'text-xs px-4 py-2',
    md: 'text-sm px-6 py-3',
    lg: 'text-sm px-8 py-4',
    xl: 'text-base px-10 py-5',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
          </svg>
          Processing…
        </span>
      ) : children}
    </button>
  )
}
