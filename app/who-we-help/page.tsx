import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import CTABanner from '@/components/CTABanner'
import { verticals } from '@/lib/verticals'

export const metadata: Metadata = {
  title: {
    absolute: 'AI Workshops Built for Every Industry | Lumii Advisory',
  },
  description:
    'Find Your Light: practical AI workshops tailored to your industry. Marketing, retail, financial services, healthcare, real estate, hospitality and more — real skills, real impact.',
  alternates: {
    canonical: 'https://lumiiadvisory.com/who-we-help',
  },
}

// Map each vertical slug to a line-art SVG icon
const industryIcons: Record<string, JSX.Element> = {
  marketers: (
    // megaphone
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 26v12l30 10V16L14 26z" />
      <path d="M14 26H8a3 3 0 00-3 3v6a3 3 0 003 3h6" />
      <path d="M44 22v20" />
      <path d="M22 40v8a4 4 0 008 0v-4" />
      <path d="M50 24l6-2M50 32h6M50 40l6 2" />
    </svg>
  ),
  'estate-agents': (
    // house with key
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 32l22-18 22 18" />
      <path d="M16 30v22h32V30" />
      <path d="M28 52V38h8v14" />
      <circle cx="42" cy="22" r="2.5" />
    </svg>
  ),
  'sales-teams': (
    // target / arrow
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="32" r="20" />
      <circle cx="32" cy="32" r="12" />
      <circle cx="32" cy="32" r="4" />
      <path d="M48 16l8-8M48 16h6M48 16v6" />
    </svg>
  ),
  retailers: (
    // shopping bag
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22h40l-4 30H16L12 22z" />
      <path d="M22 22v-4a10 10 0 0120 0v4" />
      <path d="M22 32v4M42 32v4" />
    </svg>
  ),
  'professional-services': (
    // scales / briefcase
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 22h36v28a4 4 0 01-4 4H18a4 4 0 01-4-4V22z" />
      <path d="M24 22v-4a4 4 0 014-4h8a4 4 0 014 4v4" />
      <path d="M14 34h36" />
      <path d="M30 34v4h4v-4" />
    </svg>
  ),
  hospitality: (
    // serving plate / glass
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 38c0-13 11-24 24-24s24 11 24 24" />
      <path d="M6 38h52" />
      <path d="M30 50h4M22 50h20" />
      <path d="M32 14V8M28 8h8" />
    </svg>
  ),
  'financial-services': (
    // bank / column
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 24L32 12l24 12" />
      <path d="M10 24h44" />
      <path d="M14 28v22M24 28v22M40 28v22M50 28v22" />
      <path d="M6 52h52" />
    </svg>
  ),
  healthcare: (
    // heart with pulse
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M32 50s-18-10-18-24a10 10 0 0118-6 10 10 0 0118 6c0 14-18 24-18 24z" />
      <path d="M14 30h8l3-6 5 12 3-6h17" />
    </svg>
  ),
  startups: (
    // rocket
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M32 6c8 6 14 16 14 28 0 6-2 12-4 14H22c-2-2-4-8-4-14 0-12 6-22 14-28z" />
      <circle cx="32" cy="26" r="4" />
      <path d="M22 48l-6 8 8-2M42 48l6 8-8-2" />
      <path d="M28 58l4 4 4-4" />
    </svg>
  ),
  education: (
    // graduation cap
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 24L32 12l28 12-28 12L4 24z" />
      <path d="M16 30v12c0 4 7 8 16 8s16-4 16-8V30" />
      <path d="M60 24v14" />
    </svg>
  ),
}

const whyPillars = [
  {
    number: '01',
    title: 'Practical AI skills',
    body: 'Workshops focused on what teams can use immediately — not theory. Every session ends with skills your people can apply on Monday morning.',
  },
  {
    number: '02',
    title: 'Industry-relevant',
    body: 'Tailored to the specific tools, workflows and pressures of your sector. No generic templates — real use cases from real businesses like yours.',
  },
  {
    number: '03',
    title: 'Built for teams',
    body: 'Hands-on, interactive sessions designed to build shared capability across the team. Adoption is the outcome, not just attendance.',
  },
  {
    number: '04',
    title: 'Outcomes that matter',
    body: 'Time saved. Quality improved. Decisions sharpened. Every workshop is built around measurable outcomes you can defend to a CFO.',
  },
]

const inclusions = [
  {
    title: 'Live, interactive sessions',
    body: 'Led by Agata Adamczak — 18 years of enterprise AI and digital experience.',
  },
  {
    title: 'Ready-to-use prompts and templates',
    body: 'Take home a working library of prompts, frameworks, and playbooks tailored to your industry.',
  },
  {
    title: 'Industry-specific use cases',
    body: 'Worked examples drawn from real client engagements — not hypotheticals or marketing slideware.',
  },
  {
    title: 'Practical takeaways',
    body: 'Every participant leaves with a personal action list — three to five things they can apply this week.',
  },
  {
    title: 'Recorded for the team',
    body: 'Optional session recording so the learning compounds across the team — not just those in the room.',
  },
  {
    title: 'Ongoing support',
    body: 'Follow-up materials and resources to keep your team moving long after the workshop ends.',
  },
]

export default function WhoWeHelpPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-stone pt-40 pb-24 px-8 lg:px-12 overflow-hidden">
        <div className="max-w-[1180px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">
            <div>
              <p className="font-body text-[12px] tracking-[0.25em] uppercase text-gold mb-8">
                Find Your Light
              </p>
              <h1 className="font-display font-light text-[clamp(48px,6vw,88px)] leading-[1.02] text-near-black mb-8 tracking-[-0.015em]">
                AI skills.<br />
                Real impact.<br />
                <em className="italic text-gold">For every industry.</em>
              </h1>
              <p className="font-body text-[17px] leading-[1.8] text-slate-warm max-w-[540px] font-light mb-10">
                The Find Your Light training series helps teams across industries build practical AI skills and the confidence to work smarter, deliver more value, and lead change.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <Link
                  href="/work-with-us"
                  className="font-body text-[14px] tracking-[0.1em] uppercase text-warm-white bg-near-black px-9 py-4 hover:-translate-y-px transition-all duration-200 inline-block whitespace-nowrap"
                >
                  Explore Workshops →
                </Link>
                <Link
                  href="/resources/ebook"
                  className="font-body text-[13px] tracking-[0.1em] uppercase text-near-black border-b border-near-black/40 hover:border-near-black pb-1 transition-colors duration-200 inline-block whitespace-nowrap"
                >
                  Download the Ebook ↓
                </Link>
              </div>
            </div>

            {/* Visual right side — workshop illustration */}
            <div className="relative w-full max-w-[560px] mx-auto lg:ml-auto lg:mr-0">
              <div className="relative aspect-[5/4] w-full">
                <Image
                  src="/images/workshop.png"
                  alt="Illustration of a team at a workshop table with a laptop, surrounded by gold-line icons of growth, people and targets — Lumii's Find Your Light AI workshops"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 560px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands advised strip — social proof under hero */}
      <section className="bg-warm-white border-y border-parchment py-10 lg:py-12 px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <p className="font-body text-[12px] tracking-[0.2em] uppercase text-ash mb-5 flex items-center gap-4">
            <span className="w-6 h-px bg-gold block" />
            Brands Agata has advised
          </p>
          <p className="font-display text-[16px] lg:text-[18px] italic font-light text-charcoal leading-[1.9]">
            Canva · MYER · Optus · Harvey Norman · Medibank · Nike · Adidas · ASOS · Net-a-Porter · Australia Post · David Jones · Avis Budget Group · Reckitt
          </p>
        </div>
      </section>

      {/* Why Find Your Light? */}
      <section className="bg-warm-white py-[clamp(80px,10vw,140px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <div className="text-center mb-16">
            <p className="font-body text-[12px] tracking-[0.25em] uppercase text-gold mb-5">
              Why Find Your Light
            </p>
            <h2 className="font-display font-light text-[clamp(36px,4vw,56px)] leading-[1.1] text-near-black tracking-[-0.01em] max-w-[820px] mx-auto">
              Built for the way teams<br />
              <em className="italic text-gold">actually work.</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {whyPillars.map((pillar) => (
              <div key={pillar.number} className="flex flex-col">
                <span className="font-display text-[28px] font-light text-gold leading-none mb-5">
                  {pillar.number}
                </span>
                <div className="w-8 h-px bg-gold/40 mb-5" />
                <h3 className="font-display text-[22px] font-light text-near-black mb-3 leading-[1.3]">
                  {pillar.title}
                </h3>
                <p className="font-body text-[15px] leading-[1.75] text-slate-warm font-light">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries grid */}
      <section className="bg-ivory py-[clamp(80px,10vw,140px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <div className="text-center mb-14">
            <p className="font-body text-[12px] tracking-[0.25em] uppercase text-gold mb-5">
              Choose Your Industry
            </p>
            <h2 className="font-display font-light text-[clamp(36px,4.5vw,60px)] leading-[1.08] text-near-black mb-6 tracking-[-0.01em]">
              Workshops designed for<br />
              <em className="italic text-gold">your world.</em>
            </h2>
            <p className="font-body text-[17px] leading-[1.8] text-slate-warm font-light max-w-[620px] mx-auto">
              Practical AI training tailored to the workflows, tools, and pressures of your sector. Click your industry to explore use cases and book a workshop.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {verticals.map((v) => (
              <Link
                key={v.slug}
                href={`/who-we-help/${v.slug}`}
                className="group flex flex-col bg-warm-white border border-parchment p-8 lg:p-10 hover:border-gold/50 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-14 h-14 text-gold mb-7 group-hover:scale-105 transition-transform duration-300">
                  {industryIcons[v.slug] ?? industryIcons.startups}
                </div>
                <p className="font-body text-[12px] tracking-[0.18em] uppercase text-gold/80 mb-2">
                  {v.category}
                </p>
                <h3 className="font-display font-light text-[26px] leading-[1.25] text-near-black mb-3 tracking-[-0.005em]">
                  {v.heading}
                </h3>
                <p className="font-body text-[15px] leading-[1.7] text-slate-warm font-light mb-8 flex-1">
                  {v.subheading}
                </p>
                <div className="flex items-center justify-between pt-5 border-t border-parchment">
                  <span className="font-body text-[13px] tracking-[0.12em] uppercase text-near-black group-hover:text-gold transition-colors duration-200">
                    Learn More
                  </span>
                  <span className="font-display text-gold group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Inline contact CTA below the grid */}
          <div className="mt-16 bg-near-black p-10 lg:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="font-body text-[12px] tracking-[0.22em] uppercase text-gold mb-3">
                Don't see your industry?
              </p>
              <h3 className="font-display font-light text-[clamp(24px,2.5vw,32px)] text-warm-white leading-[1.25] mb-3">
                We design custom workshops for any team.
              </h3>
              <p className="font-body text-[15px] text-warm-white/65 font-light leading-[1.8] max-w-[480px]">
                Tell us about your business and we'll build a bespoke session around the use cases that matter most to you.
              </p>
            </div>
            <Link
              href="/contact?interest=workshop"
              className="font-body text-[14px] tracking-[0.1em] uppercase text-near-black bg-gold px-8 py-4 hover:bg-[#d4b47a] hover:-translate-y-px transition-all duration-200 inline-block whitespace-nowrap flex-shrink-0"
            >
              Get in Touch →
            </Link>
          </div>
        </div>
      </section>

      {/* Every workshop includes */}
      <section className="bg-warm-white py-[clamp(80px,10vw,140px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
            <div className="lg:sticky lg:top-32">
              <p className="font-body text-[12px] tracking-[0.25em] uppercase text-gold mb-6">
                Every Workshop Includes
              </p>
              <h2 className="font-display font-light text-[clamp(32px,3.5vw,48px)] leading-[1.1] text-near-black mb-6 tracking-[-0.01em]">
                Six things you can <em className="italic text-gold">count on.</em>
              </h2>
              <p className="font-body text-[16px] leading-[1.85] text-slate-warm font-light">
                Whatever your industry, every Find Your Light workshop is built on the same foundation — practical, applied, and designed for long-term capability building.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
              {inclusions.map((item, i) => (
                <div key={item.title} className="flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-display text-[18px] font-light text-gold tracking-[0.05em]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="w-6 h-px bg-gold/40" />
                  </div>
                  <h3 className="font-display text-[20px] font-light text-near-black mb-2 leading-[1.3]">
                    {item.title}
                  </h3>
                  <p className="font-body text-[15px] leading-[1.75] text-slate-warm font-light">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial pull quote */}
      <section className="bg-ivory py-[clamp(70px,9vw,120px)] px-8 lg:px-12">
        <div className="max-w-[920px] mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="w-12 h-px bg-gold" />
          </div>
          <blockquote className="font-display italic font-light text-[clamp(24px,3vw,40px)] leading-[1.35] text-near-black tracking-[-0.005em] mb-8">
            "The Find Your Light workshop gave our team the clarity and confidence to start using AI in ways that save time and create impact — from day one."
          </blockquote>
          <p className="font-body text-[12px] tracking-[0.18em] uppercase text-ash">
            Head of Marketing · APAC Retail Brand
          </p>
        </div>
      </section>

      {/* Dark CTA — Ready to equip your team */}
      <section className="bg-near-black py-[clamp(80px,10vw,130px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <p className="font-body text-[12px] tracking-[0.25em] uppercase text-gold mb-6">
                Ready to begin
              </p>
              <h2 className="font-display font-light text-[clamp(36px,4.5vw,60px)] leading-[1.08] text-warm-white tracking-[-0.01em]">
                Ready to equip your team with <em className="italic text-gold">AI skills that shine?</em>
              </h2>
              <p className="font-body text-[17px] leading-[1.8] text-warm-white/65 font-light mt-6 max-w-[520px]">
                Let's find the right workshop for your industry and your team. A 30-minute call is the fastest way to scope what makes sense.
              </p>
            </div>
            <div className="flex flex-col items-start lg:items-end gap-5">
              <Link
                href="/contact"
                className="font-body text-[14px] tracking-[0.1em] uppercase text-near-black bg-gold px-10 py-4 hover:bg-[#d4b47a] hover:-translate-y-px transition-all duration-200 inline-block whitespace-nowrap"
              >
                Book a Discovery Call →
              </Link>
              <Link
                href="/work-with-us"
                className="font-body text-[13px] tracking-[0.1em] uppercase text-warm-white border-b border-warm-white/40 hover:border-warm-white pb-1 transition-colors duration-200 inline-block whitespace-nowrap"
              >
                Explore All Workshops →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
