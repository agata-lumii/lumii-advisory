import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'
import SectionTag from '@/components/SectionTag'
import { verticals, getVerticalBySlug, sharedAIStats } from '@/lib/verticals'

export async function generateStaticParams() {
  return verticals.map((v) => ({ slug: v.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const vertical = getVerticalBySlug(params.slug)
  if (!vertical) return {}
  return {
    title: vertical.metaTitle,
    description: vertical.metaDescription,
  }
}

export default function VerticalPage({ params }: { params: { slug: string } }) {
  const vertical = getVerticalBySlug(params.slug)
  if (!vertical) notFound()

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-near-black pt-40 pb-24 px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 mb-12">
            <Link href="/who-we-help" className="font-body text-[11px] tracking-[0.2em] uppercase text-ash hover:text-warm-white transition-colors duration-200">
              Who We Help
            </Link>
            <span className="text-ash/40 text-[11px]">/</span>
            <span className="font-body text-[11px] tracking-[0.2em] uppercase text-gold">{vertical.category}</span>
          </div>

          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-gold block" />
            {vertical.category}
          </p>
          <h1 className="font-display font-light text-[clamp(48px,5vw,78px)] leading-[1.08] text-warm-white mb-6 tracking-[-0.01em] max-w-[800px]">
            {vertical.heading}
          </h1>
          <p className="font-display text-[clamp(20px,2.2vw,28px)] italic font-light text-gold/80 max-w-[640px] mb-16 leading-[1.4]">
            {vertical.subheading}
          </p>

          {/* Shared AI stats row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[rgba(180,175,168,0.12)]">
            {sharedAIStats.map((stat) => (
              <div key={stat.value} className="bg-near-black px-8 py-8 border border-[rgba(180,175,168,0.12)]">
                <p className="font-display text-[clamp(32px,3.5vw,48px)] font-light text-gold leading-none mb-3">{stat.value}</p>
                <p className="font-body text-[13px] text-warm-white/60 font-light leading-[1.55] mb-3">{stat.label}</p>
                <a
                  href={stat.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-[10px] tracking-[0.15em] uppercase text-ash/50 hover:text-ash transition-colors duration-200"
                >
                  {stat.source}, {stat.year} ↗
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE CHALLENGE ── */}
      <section className="bg-ivory py-[clamp(80px,10vw,140px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <SectionTag>The Challenge</SectionTag>
              <h2 className="font-display font-light text-[clamp(36px,4vw,54px)] leading-[1.12] text-near-black tracking-[-0.01em] mb-8">
                What we see in the <em className="italic text-gold">market.</em>
              </h2>
              <p className="font-body text-[16px] leading-[1.85] text-slate-warm font-light">
                {vertical.challenge}
              </p>
              <p className="font-body text-[16px] leading-[1.85] text-slate-warm font-light mt-5">
                {vertical.body}
              </p>
            </div>
            <div className="bg-near-black p-12 lg:p-14 lg:sticky lg:top-32 lg:self-start">
              <div className="w-10 h-px bg-gold mb-8" />
              <blockquote className="font-display text-[clamp(20px,2.2vw,26px)] italic font-light text-warm-white leading-[1.5] mb-8">
                &ldquo;The right digital strategy doesn&rsquo;t just solve today&rsquo;s problems — it builds the capability to handle tomorrow&rsquo;s opportunities.&rdquo;
              </blockquote>
              <p className="font-display text-[16px] italic font-light text-gold">Agata Adamczak</p>
              <p className="font-body text-[11px] tracking-[0.15em] uppercase text-ash mt-1">Founder, Lumii Advisory</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW WE HELP ── */}
      <section className="bg-stone py-[clamp(80px,10vw,140px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <SectionTag>How We Help</SectionTag>
              <h2 className="font-display font-light text-[clamp(36px,4vw,54px)] leading-[1.12] text-near-black tracking-[-0.01em]">
                What working with Lumii <em className="italic text-gold">delivers.</em>
              </h2>
            </div>
            <ul className="space-y-6 lg:pt-4">
              {vertical.outcomes.map((outcome, i) => (
                <li key={i} className="flex items-start gap-6 py-6 border-b border-parchment last:border-0">
                  <span className="font-display text-[13px] text-gold tracking-[0.1em] flex-shrink-0 mt-1">0{i + 1}</span>
                  <p className="font-body text-[16px] text-charcoal font-light leading-[1.7]">{outcome}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── AI IN ACTION ── */}
      <section className="bg-near-black py-16 px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-body text-[10px] tracking-[0.25em] uppercase text-ash mb-2">Further Reading</p>
            <p className="font-display text-[22px] font-light text-warm-white leading-[1.35]">
              See how leading global businesses are using AI to transform their operations.
            </p>
          </div>
          <Link
            href="/ai-case-studies"
            className="flex-shrink-0 font-body text-[12px] tracking-[0.12em] uppercase text-near-black bg-gold px-8 py-4 hover:bg-[#d4b47a] hover:-translate-y-px transition-all duration-200 whitespace-nowrap"
          >
            AI Case Studies →
          </Link>
        </div>
      </section>

      {/* ── RELEVANT SERVICES ── */}
      <section className="bg-warm-white py-[clamp(80px,10vw,140px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <SectionTag>Relevant Services</SectionTag>
          <h2 className="font-display font-light text-[clamp(36px,4vw,54px)] leading-[1.12] text-near-black tracking-[-0.01em] mb-12">
            The disciplines we bring to <em className="italic text-gold">{vertical.category.toLowerCase()}.</em>
          </h2>
          <div className="flex flex-wrap gap-4">
            {vertical.services.map((service) => (
              <Link
                key={service}
                href="/services"
                className="font-body text-[12px] tracking-[0.12em] uppercase text-near-black border border-near-black px-8 py-4 hover:bg-near-black hover:text-warm-white transition-all duration-200"
              >
                {service}
              </Link>
            ))}
          </div>
          <div className="mt-16 p-10 lg:p-14 bg-near-black">
            <p className="font-body text-[11px] tracking-[0.25em] uppercase text-gold mb-4">Ways to Engage</p>
            <p className="font-display text-[clamp(22px,2.5vw,32px)] font-light text-warm-white leading-[1.4] mb-10 max-w-[560px]">
              Three shapes to engage with Lumii — chosen around where you are.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-10">
              {[
                {
                  title: 'Workshops',
                  description: 'A half or full day to align leadership on what AI means for your business.',
                  href: '/work-with-us#workshops',
                },
                {
                  title: 'Project Sprints',
                  description: 'A fixed-scope engagement to deliver one measurable outcome in 6–12 weeks.',
                  href: '/work-with-us#projects',
                },
                {
                  title: 'Advisory Retainer',
                  description: 'Ongoing senior counsel as your AI and digital strategy evolves.',
                  href: '/work-with-us#retainer',
                },
              ].map((opt) => (
                <Link
                  key={opt.title}
                  href={opt.href}
                  className="group block p-6 border border-warm-white/15 hover:border-gold/50 hover:bg-warm-white/[0.03] transition-all duration-200"
                >
                  <p className="font-display text-[19px] font-light text-warm-white mb-3 group-hover:text-gold transition-colors duration-200">
                    {opt.title}
                  </p>
                  <p className="font-body text-[13px] text-warm-white/55 font-light leading-[1.7]">
                    {opt.description}
                  </p>
                  <span className="inline-block mt-4 font-body text-[10px] tracking-[0.2em] uppercase text-gold/70 group-hover:text-gold group-hover:translate-x-0.5 transition-all duration-200">
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-8 border-t border-warm-white/10">
              <p className="font-body text-[13px] text-warm-white/55 font-light flex-1">
                Not sure which fits? Every engagement starts with a conversation.
              </p>
              <Link
                href="/contact"
                className="font-body text-[12px] tracking-[0.12em] uppercase text-near-black bg-gold px-8 py-3.5 hover:bg-[#d4b47a] hover:-translate-y-px transition-all duration-200 inline-block whitespace-nowrap flex-shrink-0"
              >
                Book a Discovery Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
