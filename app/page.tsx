import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import ProcessStrip from '@/components/ProcessStrip'
import MarqueeStrip from '@/components/MarqueeStrip'
import PhilosophySection from '@/components/PhilosophySection'
import PillarsSection from '@/components/PillarsSection'
import ServicesSection from '@/components/ServicesSection'
import VerticalsSection from '@/components/VerticalsSection'
import AboutSection from '@/components/AboutSection'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'AI Strategy Consultant — Lumii Advisory',
  description:
    'Lumii Advisory is an independent AI strategy consultancy. We help ambitious mid-market businesses identify where AI creates real value and implement it — with clarity, no vendor bias, and measurable results.',
  alternates: {
    canonical: 'https://lumii-advisory.com',
  },
  openGraph: {
    title: 'AI Strategy Consultant — Lumii Advisory',
    description:
      'Independent AI strategy consulting for mid-market businesses. Identify where AI creates real value and implement it — clearly, practically, and without vendor bias.',
    url: 'https://lumii-advisory.com',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <ProcessStrip />
      <PhilosophySection />
      <PillarsSection />
      <ServicesSection />

      {/* Case Studies callout */}
      <section className="bg-warm-white py-[clamp(60px,8vw,100px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border border-parchment p-10 lg:p-14 hover:border-gold/40 transition-colors duration-300">
          <div>
            <p className="font-body text-[10px] tracking-[0.25em] uppercase text-gold mb-3">
              AI in Action
            </p>
            <h2 className="font-display font-light text-[clamp(24px,2.5vw,36px)] text-near-black leading-[1.2] mb-3">
              Real results from real businesses.
            </h2>
            <p className="font-body text-[15px] text-slate-warm font-light leading-[1.8] max-w-[520px]">
              See how Klarna, Goldman Sachs, Microsoft and others achieved measurable AI results — with the strategies, timelines, and outcomes behind each.
            </p>
          </div>
          <Link
            href="/ai-case-studies"
            className="font-body text-[12px] tracking-[0.1em] uppercase text-warm-white bg-near-black px-8 py-4 hover:-translate-y-px transition-all duration-200 inline-block whitespace-nowrap flex-shrink-0"
          >
            View Case Studies →
          </Link>
        </div>
      </section>

      <VerticalsSection />
      <AboutSection />
      <CTABanner />
    </>
  )
}
