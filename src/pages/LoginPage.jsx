import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'
import AuthLayout from '../components/AuthLayout'
import Input from '../components/Input'
import Button from '../components/Button'
import Alert from '../components/Alert'

export default function LoginPage() {
  const navigate = useNavigate()

  const [form, setForm] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [alert, setAlert] = useState(null)
  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    const { id, value } = e.target
    setForm((prev) => ({ ...prev, [id]: value }))
    if (errors[id]) setErrors((prev) => ({ ...prev, [id]: '' }))
  }

  function validate() {
    const errs = {}
    if (!form.email.trim()) errs.email = 'Email is required.'
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Enter a valid email address.'
    if (!form.password) errs.password = 'Password is required.'
    return errs
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setAlert(null)

    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }

    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: form.email.trim().toLowerCase(),
      password: form.password,
    })
    setLoading(false)

    if (error) {
      setAlert({ type: 'error', message: error.message })
    } else {
      navigate('/login-success')
    }
  }

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to your Hadei Network account."
      footerText="Don't have an account?"
      footerLinkLabel="Create one →"
      footerLinkTo="/signup"
    >
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <Alert type={alert?.type} message={alert?.message} />

        <Input
          label="Email Address"
          id="email"
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
          required
          autoComplete="email"
        />

        <Input
          label="Password"
          id="password"
          type="password"
          placeholder="••••••••"
          value={form.password}
          onChange={handleChange}
          error={errors.password}
          required
          autoComplete="current-password"
        />

        <div className="flex justify-end">
          <a
            href="#"
            className="text-yellow-400/70 hover:text-yellow-400 text-xs tracking-wide transition-colors"
          >
            Forgot password?
          </a>
        </div>

        <Button type="submit" variant="primary" size="lg" loading={loading} className="w-full mt-2">
          Sign In
        </Button>

        {/* Divider */}
        <div className="relative flex items-center gap-4 py-2">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-white/20 text-xs tracking-widest uppercase">or</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Google OAuth placeholder — wire up when ready */}
        <Button
          type="button"
          variant="secondary"
          size="lg"
          className="w-full"
          onClick={async () => {
            await supabase.auth.signInWithOAuth({ provider: 'google' })
          }}
        >
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Continue with Google
          </span>
        </Button>
      </form>
    </AuthLayout>
  )
}
