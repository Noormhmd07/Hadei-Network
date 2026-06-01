export default function Input({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required = false,
  className = '',
  autoComplete,
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label htmlFor={id} className="text-white/70 text-xs font-bold tracking-widest uppercase">
          {label}
          {required && <span className="text-yellow-400 ml-1">*</span>}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
        className={`
          bg-white/5 border text-white placeholder-white/20 text-sm px-4 py-3
          focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent
          transition-all duration-200
          ${error ? 'border-red-500' : 'border-white/15 hover:border-white/30'}
        `}
      />
      {error && (
        <p className="text-red-400 text-xs mt-0.5">{error}</p>
      )}
    </div>
  )
}
