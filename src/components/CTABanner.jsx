import { Link } from 'react-router-dom'
import Button from './Button'

export default function CTABanner() {
  return (
    <section className="bg-yellow-400 py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-black text-black leading-none mb-6 tracking-tight">
          READY TO<br />CREATE?
        </h2>
        <p className="text-black/60 text-lg max-w-xl mx-auto mb-12 font-light">
          Join Hadei Network and be part of India's most discerning creative community.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/signup">
            <Button
              variant="primary"
              size="xl"
              className="!bg-black !text-yellow-400 hover:!bg-black/80"
            >
              Get Started Free
            </Button>
          </Link>
          <Link to="/login">
            <Button
              variant="ghost"
              size="xl"
              className="!text-black/60 hover:!text-black"
            >
              Already a member? Log in →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
