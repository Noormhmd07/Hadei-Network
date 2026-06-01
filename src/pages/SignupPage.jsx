import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'
import AuthLayout from '../components/AuthLayout'
import Input from '../components/Input'
import Button from '../components/Button'
import Alert from '../components/Alert'
import RoleSelector from '../components/RoleSelector'

export default function SignupPage() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: '',
  })
  const [errors, setErrors] = useState({})
  const [alert, setAlert] = useState(null)
  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    const { id, value } = e.target
    setForm((prev) => ({ ...prev, [id]: value }))
    if (errors[id]) setErrors((prev) => ({ ...prev, [id]: '' }))
  }

  function handleRoleChange(role) {
    setForm((prev) => ({ ...prev, role }))
    if (errors.role) setErrors((prev) => ({ ...prev, role: '' }))
  }

  function validate() {
    const errs = {}
    if (!form.fullName.trim()) errs.fullName = 'Full name is required.'
    if (!form.email.trim()) errs.email = 'Email is required.'
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Enter a valid email address.'
    if (!form.phone.trim()) errs.phone = 'Phone number is required.'
    else if (!/^\+?[\d\s\-()]{7,15}$/.test(form.phone)) errs.phone = 'Enter a valid phone number.'
    if (!form.password) errs.password = 'Password is required.'
    else if (form.password.length < 8) errs.password = 'Password must be at least 8 characters.'
    if (!form.confirmPassword) errs.confirmPassword = 'Please confirm your password.'
    else if (form.password !== form.confirmPassword) errs.confirmPassword = 'Passwords do not match.'
    if (!form.role) errs.role = 'Please select a role to continue.'
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

    // 1. Create auth user
    const { error: signUpError } = await supabase.auth.signUp({
      email: form.email.trim().toLowerCase(),
      password: form.password,
      options: {
        data: {
          full_name: form.fullName.trim(),
          phone: form.phone.trim(),
          role: form.role,
        },
      },
    })

    if (signUpError) {
      setLoading(false)
      setAlert({ type: 'error', message: signUpError.message })
      return
    }

    setLoading(false)
    navigate('/login-success')
  }

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join Hadei Network — India's creative freelance community."
      footerText="Already have an account?"
      footerLinkLabel="Sign in →"
      footerLinkTo="/login"
    >
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <Alert type={alert?.type} message={alert?.message} />

        <Input
          label="Full Name"
          id="fullName"
          type="text"
          placeholder="Arjun Verma"
          value={form.fullName}
          onChange={handleChange}
          error={errors.fullName}
          required
          autoComplete="name"
        />

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
          label="Phone Number"
          id="phone"
          type="tel"
          placeholder="+91 98765 43210"
          value={form.phone}
          onChange={handleChange}
          error={errors.phone}
          required
          autoComplete="tel"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Password"
            id="password"
            type="password"
            placeholder="Min. 8 characters"
            value={form.password}
            onChange={handleChange}
            error={errors.password}
            required
            autoComplete="new-password"
          />
          <Input
            label="Confirm Password"
            id="confirmPassword"
            type="password"
            placeholder="Repeat password"
            value={form.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
            required
            autoComplete="new-password"
          />
        </div>

        <RoleSelector
          value={form.role}
          onChange={handleRoleChange}
          error={errors.role}
        />

        <p className="text-white/25 text-xs leading-relaxed">
          By creating an account you agree to our{' '}
          <a href="#" className="text-yellow-400/60 hover:text-yellow-400 transition-colors">Terms of Service</a>{' '}
          and{' '}
          <a href="#" className="text-yellow-400/60 hover:text-yellow-400 transition-colors">Privacy Policy</a>.
        </p>

        <Button type="submit" variant="primary" size="lg" loading={loading} className="w-full">
          Create My Account
        </Button>
      </form>
    </AuthLayout>
  )
}
