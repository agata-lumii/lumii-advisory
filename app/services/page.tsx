import type { Metadata } from 'next'
import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'
import ServiceCard from '@/components/ServiceCard'
import ProcessSection from '@/components/ProcessSection'
import CTABanner from '@/components/CTABanner'
import { disciplines, disciplinesConnectiveTissue } from '@/lib/disciplines'

export const metadata: Metadata = {
  title: {
    absolute: 'AI Consulting & Digital Strategy Services Sydney | Lumii',
  },
  description:
    'AI enablement, AI visibility, MarTech, ecommerce & CX consulting for Australian mid-market businesses. Sprint, project & retainer engagements. Book a free call.',
  alternates: {
    canonical: 'https://lumiiadvisory.com/services',
  },
}

const SITE_URL = 'https://lumiiadvisory.com'

// Service JSON-LD for AI/LLM discovery and search rich results
const servicesSchema = {
  '@context': 'https://schema.org',
  '@graph': disciplines.map((d) => {
    const slug = d.name.toLowerCase().replace(/\s+/g, '-')
    const pageUrl = d.href?.startsWith('/services/')
      ? `${SITE_URL}${d.href}`
      : `${SITE_URL}/services`

    return {
      '@type': 'Service',
      '@id': `${SITE_URL}/services#${slug}`,
      name: d.name,
      description: d.descriptionLong,
      serviceType: d.name,
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: [
        { '@type': 'Country', name: 'Australia' },
        { '@type': 'Place', name: 'Asia-Pacific' },
      ],
      audience: {
        '@type': 'Audience',
        audienceType: 'Mid-market businesses',
      },
      category: 'AI Strategy and Digital Transformation Consulting',
      url: pageUrl,
    }
  }),
}

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />

      {/* Hero banner */}
      <section className="bg-near-black pt-40 pb-24 px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-8">
            What I do
          </p>
          <h1 className="font-display font-light text-[clamp(52px,5.5vw,82px)] leading-[1.08] text-warm-white mb-8 tracking-[-0.01em] max-w-[820px]">
            Six disciplines.<br />
            <em className="italic text-gold">One direction.</em>
          </h1>
          <p className="font-body text-[17px] leading-[1.8] text-warm-white/60 max-w-[620px] font-light">
            AI enablement leads, and AI visibility follows it. The other four are the
            foundations that decide whether either of them works.
          </p>
        </div>
      </section>

      {/* Disciplines grid */}
      <section className="bg-near-black px-8 lg:px-12 pb-[clamp(80px,10vw,140px)]">
        <div className="max-w-[1180px] mx-auto">
          <p className="font-body text-[16px] leading-[1.85] text-warm-white/55 font-light max-w-[720px] mb-14 pl-6 border-l border-gold/40">
            {disciplinesConnectiveTissue}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(180,175,168,0.12)] border border-[rgba(180,175,168,0.12)]">
            {disciplines.map((d) => (
              <ServiceCard
                key={d.number}
                number={d.number}
                name={d.name}
                description={d.descriptionLong}
                tags={d.tagsLong}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Framework anchor — the model underneath all six disciplines */}
      <section className="bg-warm-white py-[clamp(70px,8vw,110px)] px-8 lg:px-12 border-y border-parchment">
        <div className="max-w-[1180px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-[640px]">
            <p className="font-body text-[12px] tracking-[0.22em] uppercase text-gold mb-4">
              The framework behind these services
            </p>
            <h2 className="font-display font-light text-[clamp(26px,2.8vw,38px)] leading-[1.2] text-near-black mb-4 tracking-[-0.005em]">
              Six disciplines. One operating system.
            </h2>
            <p className="font-body text-[16px] text-slate-warm font-light leading-[1.8]">
              Every Lumii engagement is anchored in the same model: the AI Operating
              System. The five components — Thesis, Guardrails, Workflows, People,
              Measurement — define what I build, regardless of which discipline you
              start with.
            </p>
          </div>
          <Link
            href="/ai-operating-system"
            className="font-body text-[13px] tracking-[0.1em] uppercase text-warm-white bg-near-black px-8 py-4 hover:-translate-y-px transition-all duration-200 inline-block whitespace-nowrap flex-shrink-0"
          >
            Read the framework →
          </Link>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="bg-ivory py-[clamp(80px,10vw,140px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <SectionHeader
            tag="How I engage"
            heading={
              <>
                The right model for<br />
                <em className="italic text-gold">your situation.</em>
              </>
            }
            lead="Every business is different. I offer a range of engagement models to suit your stage, budget, and ambitions — from a focused advisory sprint to a long-term transformation partnership."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: 'Strategy Sprint',
                duration: '2–4 weeks',
                description:
                  'An intensive, focused engagement to solve a specific strategic challenge — for businesses that need clarity quickly. I deliver a clear diagnosis and an actionable roadmap.',
                ideal: 'Ideal for: New initiatives, stack evaluations, pre-investment planning',
              },
              {
                title: 'Transformation Partnership',
                duration: '3–6 months',
                description:
                  'A deeper, sustained engagement covering strategy, planning, implementation oversight, and capability building. I become a genuine extension of your leadership team.',
                ideal: 'Ideal for: Major digital transformations, platform migrations, AI programmes',
              },
              {
                title: 'Advisory Retainer',
                duration: 'Ongoing monthly',
                description:
                  'A flexible monthly relationship providing ongoing strategic guidance, review of key decisions, and access to expert thinking as your business evolves and grows.',
                ideal: 'Ideal for: Growing businesses wanting sustained strategic support',
              },
            ].map((model) => (
              <div key={model.title} className="bg-warm-white p-10 border border-parchment">
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-gold mb-3">
                  {model.duration}
                </p>
                <h3 className="font-display text-[26px] font-light text-near-black leading-[1.25] mb-4">
                  {model.title}
                </h3>
                <p className="font-body text-[14px] text-slate-warm font-light leading-[1.75] mb-6">
                  {model.description}
                </p>
                <p className="font-body text-[12px] text-ash font-light italic">{model.ideal}</p>
              </div>
            ))}
          </div>

          {/* Link to full engagements page */}
          <div className="mt-16 text-center">
            <Link
              href="/work-with-us"
              className="inline-block font-body text-[12px] tracking-[0.12em] uppercase text-near-black border border-near-black px-10 py-4 hover:bg-near-black hover:text-warm-white transition-all duration-200"
            >
              Explore ways to work together →
            </Link>
          </div>
        </div>
      </section>

      <ProcessSection />

      <CTABanner />
    </>
  )
}
