import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import ExperienceStrip from '@/components/ExperienceStrip'
import ThesisSection from '@/components/ThesisSection'
import OperatingSystemSection from '@/components/OperatingSystemSection'
import ServicesSection from '@/components/ServicesSection'
import ProcessStrip from '@/components/ProcessStrip'
import VerticalsSection from '@/components/VerticalsSection'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: {
    absolute: 'AI Strategy Consultant Sydney | Mid-Market AI Advisory',
  },
  description:
    'Independent AI strategy consulting for mid-market businesses in Sydney & APAC. 18+ years’ enterprise expertise. Book a free 30-min discovery call.',
  alternates: {
    canonical: 'https://lumiiadvisory.com',
  },
  openGraph: {
    title: 'AI Strategy Consultant Sydney | Mid-Market AI Advisory | Lumii',
    description:
      'Independent AI strategy consulting for mid-market businesses in Sydney & APAC. 18+ years’ enterprise expertise. Book a free 30-min discovery call.',
    url: 'https://lumiiadvisory.com',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ExperienceStrip />
      <ThesisSection />
      <OperatingSystemSection />
      <ServicesSection />
      <ProcessStrip />
      <VerticalsSection
        slugs={['marketers', 'sales-teams', 'professional-services', 'retailers']}
      />

      {/* Proof — enterprise AI programmes analysed. Not Lumii clients. */}
      <section className="bg-warm-white py-[clamp(80px,10vw,130px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-24 items-center">
          <div className="lg:order-last">
            <div className="flex items-center gap-5 mb-6">
              <span className="w-8 h-px bg-gold block" />
              <p className="font-body text-[11px] tracking-[0.3em] uppercase text-ash">
                AI adoption, analysed
              </p>
            </div>
            <h2 className="font-display font-light text-[clamp(30px,3.4vw,46px)] leading-[1.15] text-near-black mb-6 tracking-[-0.005em]">
              How the largest businesses in the world are{' '}
              <em className="italic text-gold">actually</em> deploying AI.
            </h2>
            <p className="font-body text-[16px] text-slate-warm font-light leading-[1.85] mb-4">
              Klarna, Goldman Sachs, Microsoft, Walmart and others have published what
              their AI programmes did, what changed, and what it cost them. I read that
              record closely and break down the patterns — what transferred, what
              didn&rsquo;t, and what a mid-market business should take from each.
            </p>
            <p className="font-body text-[14px] text-ash font-light leading-[1.8] mb-9 italic">
              These are published enterprise programmes I analyse — not Lumii clients.
            </p>
            <Link
              href="/ai-case-studies"
              className="font-body text-[12px] tracking-[0.12em] uppercase text-near-black border border-near-black px-9 py-4 hover:bg-near-black hover:text-warm-white transition-all duration-200 inline-block"
            >
              Read the analysis →
            </Link>
          </div>

          {/* Counterweight: the honest position */}
          <div className="lg:order-first border-l border-gold/40 pl-8 lg:pl-10">
            <blockquote className="font-display text-[clamp(24px,2.8vw,34px)] italic font-light text-near-black leading-[1.4] mb-7">
              &ldquo;The technology was almost never the hard part. The structure around
              it always was.&rdquo;
            </blockquote>
            <p className="font-body text-[13px] text-slate-warm font-light leading-[1.8]">
              Eighteen years inside global technology businesses, watching enterprise
              programmes succeed and fail at close range.
            </p>
            <p className="font-body text-[11px] tracking-[0.15em] uppercase text-ash mt-4">
              Agata Adamczak — Founder, Lumii Advisory
            </p>
            <Link
              href="/about"
              className="font-body text-[11px] tracking-[0.15em] uppercase text-gold hover:text-charcoal transition-colors duration-200 mt-6 inline-block"
            >
              More about Agata →
            </Link>
          </div>
        </div>
      </section>

      {/* Ebook banner */}
      <section className="bg-near-black py-[clamp(60px,8vw,90px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-body text-[10px] tracking-[0.25em] uppercase text-gold mb-3">
              Free ebook
            </p>
            <h2 className="font-display font-light text-[clamp(24px,2.5vw,36px)] text-warm-white leading-[1.2] mb-3">
              Find your light in the age of AI.
            </h2>
            <p className="font-body text-[15px] text-warm-white/60 font-light leading-[1.8] max-w-[520px]">
              The 90-day AI strategy system for business leaders — from first principles
              to a scaled capability. Free download, no subscription.
            </p>
          </div>
          <Link
            href="/resources/ebook"
            className="font-body text-[12px] tracking-[0.12em] uppercase text-near-black bg-gold px-8 py-4 hover:bg-gold-light hover:-translate-y-px transition-all duration-200 inline-block whitespace-nowrap flex-shrink-0"
          >
            Download free →
          </Link>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
