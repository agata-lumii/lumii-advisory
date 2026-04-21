import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import ProcessStrip from '@/components/ProcessStrip'
import ExperienceStrip from '@/components/ExperienceStrip'
import ServicesSection from '@/components/ServicesSection'
import VerticalsSection from '@/components/VerticalsSection'
import AboutSection from '@/components/AboutSection'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'AI Strategy Consultant — Lumii Advisory',
  description:
    'Lumii Advisory is an independent AI strategy consultancy led by Agata Adamczak. Eighteen years inside global technology businesses, now advising ambitious mid-market leaders on where AI creates real value — senior-led, vendor-neutral, outcome-accountable.',
  alternates: {
    canonical: 'https://lumiiadvisory.com',
  },
  openGraph: {
    title: 'AI Strategy Consultant — Lumii Advisory',
    description:
      'Independent AI strategy consulting for mid-market businesses. Senior-led, vendor-neutral, outcome-accountable — from a consultant with eighteen years inside global technology businesses.',
    url: 'https://lumiiadvisory.com',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ExperienceStrip />
      <ProcessStrip />
      <ServicesSection />

      {/* Work With Us callout */}
      <section className="bg-warm-white pt-[clamp(60px,8vw,100px)] pb-[clamp(30px,4vw,50px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border border-parchment p-10 lg:p-14 hover:border-gold/40 transition-colors duration-300">
          <div>
            <p className="font-body text-[10px] tracking-[0.25em] uppercase text-gold mb-3">
              Ways to Engage
            </p>
            <h2 className="font-display font-light text-[clamp(24px,2.5vw,36px)] text-near-black leading-[1.2] mb-3">
              Workshops, projects, or ongoing counsel.
            </h2>
            <p className="font-body text-[15px] text-slate-warm font-light leading-[1.8] max-w-[560px]">
              Whether you need a single day of clarity, a focused sprint, or a long-term advisor alongside your leadership team — three clear ways to work with us, each shaped around your business.
            </p>
          </div>
          <Link
            href="/work-with-us"
            className="font-body text-[12px] tracking-[0.1em] uppercase text-warm-white bg-near-black px-8 py-4 hover:-translate-y-px transition-all duration-200 inline-block whitespace-nowrap flex-shrink-0"
          >
            Work With Us →
          </Link>
        </div>
      </section>

      {/* Case Studies callout */}
      <section className="bg-warm-white pt-[clamp(30px,4vw,50px)] pb-[clamp(60px,8vw,100px)] px-8 lg:px-12">
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
