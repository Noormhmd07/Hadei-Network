import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import HowItWorksSection from '../components/HowItWorksSection'
import AudienceSections from '../components/AudienceSections'
import CTABanner from '../components/CTABanner'
import Footer from '../components/Footer'

export default function LandingPage() {
  return (
    <div className="bg-black">
      <Navbar />
      <main className="pt-[72px]">
        <HeroSection />
        <HowItWorksSection />
        <AudienceSections />
        <CTABanner />
      </main>
      <Footer />
    </div>
  )
}
