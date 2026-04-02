import Hero from '@/components/Hero'
import ProcessStrip from '@/components/ProcessStrip'
import MarqueeStrip from '@/components/MarqueeStrip'
import PhilosophySection from '@/components/PhilosophySection'
import PillarsSection from '@/components/PillarsSection'
import ServicesSection from '@/components/ServicesSection'
import VerticalsSection from '@/components/VerticalsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import AboutSection from '@/components/AboutSection'
import CTABanner from '@/components/CTABanner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <ProcessStrip />
      <PhilosophySection />
      <PillarsSection />
      <ServicesSection />
      <VerticalsSection />
      <TestimonialsSection />
      <AboutSection />
      <CTABanner />
    </>
  )
}
