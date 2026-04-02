import type { Metadata } from 'next'
import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'
import ServiceCard from '@/components/ServiceCard'
import ProcessSection from '@/components/ProcessSection'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'AI Consulting & Digital Strategy Services',
  description:
    'Digital Strategy, AI Enablement, Customer Experience, Ecommerce, and MarTech Advisory services for ambitious mid-market businesses in Australia. Expert AI consulting with measurable commercial results.',
}

const services = [
  {
    number: '01',
    name: 'Digital Strategy',
    description:
      'A clear, prioritised roadmap that aligns your digital investments to business outcomes. We audit, advise, and architect transformation plans that are ambitious but executable. Every engagement begins with understanding your business model, your competitive landscape, and your growth constraints — then building the plan that closes the gap.',
    tags: ['Roadmapping', 'Audits', 'Transformation', 'Digital Maturity', 'KPI Frameworks'],
  },
  {
    number: '02',
    name: 'Customer Experience',
    description:
      'Seamless, intentional journeys that convert browsers into buyers and buyers into advocates. We map, redesign, and optimise the moments that matter most — from first touchpoint to long-term retention. We combine qualitative research with quantitative data to identify the friction points costing you revenue.',
    tags: ['Journey Mapping', 'CX Design', 'NPS & VOC', 'Persona Research', 'Experience Audits'],
  },
  {
    number: '03',
    name: 'Ecommerce',
    description:
      'From platform strategy to conversion optimisation, we help you build, scale, and refine ecommerce operations that consistently outperform benchmarks. Whether you\'re launching a D2C brand, migrating platforms, or optimising an established store, we bring the strategic and technical clarity to make it happen.',
    tags: ['Platform Strategy', 'CRO', 'D2C', 'Migration', 'Performance Optimisation'],
  },
  {
    number: '04',
    name: 'MarTech Advisory',
    description:
      'The right stack, properly integrated. We help you evaluate, select, implement, and get genuine value from your marketing technology investments — no vendor agenda, no hidden commissions. Just honest, expert guidance on what your business actually needs, and how to make it work together.',
    tags: ['Stack Audit', 'CDP / CRM', 'Automation', 'Attribution', 'Integration Architecture'],
  },
  {
    number: '05',
    name: 'AI Enablement',
    description:
      'Practical, responsible AI integration that saves time, improves decisions, and creates competitive advantage. We identify the use cases, implement the tools, and build the capability within your team to use AI effectively and sustainably. Not just tools — a genuine capability lift.',
    tags: ['AI Readiness', 'Use Case Design', 'Training', 'Generative AI', 'Workflow Automation'],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="bg-near-black pt-40 pb-24 px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-8">
            What We Do
          </p>
          <h1 className="font-display font-light text-[clamp(52px,5.5vw,82px)] leading-[1.08] text-warm-white mb-8 tracking-[-0.01em] max-w-[820px]">
            Five disciplines.<br />
            <em className="italic text-gold">One direction.</em>
          </h1>
          <p className="font-body text-[17px] leading-[1.8] text-warm-white/60 max-w-[580px] font-light">
            We work across the full spectrum of digital transformation — from strategy to execution, technology to culture — always with one eye on your customer and one on your bottom line.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-near-black px-8 lg:px-12 pb-[clamp(80px,10vw,140px)]">
        <div className="max-w-[1180px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(180,175,168,0.12)] border border-[rgba(180,175,168,0.12)]">
            {services.map((s) => (
              <ServiceCard key={s.number} {...s} />
            ))}
            {/* Empty spacer for grid alignment */}
            <div className="bg-near-black hidden lg:block" />
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="bg-ivory py-[clamp(80px,10vw,140px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <SectionHeader
            tag="How We Engage"
            heading={
              <>
                The right model for<br />
                <em className="italic text-gold">your situation.</em>
              </>
            }
            lead="Every business is different. We offer a range of engagement models to suit your stage, budget, and ambitions — from a focused advisory sprint to a long-term transformation partnership."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: 'Strategy Sprint',
                duration: '2–4 weeks',
                description:
                  'An intensive, focused engagement to solve a specific strategic challenge — ideal for businesses that need clarity quickly. We deliver a clear diagnosis and actionable roadmap.',
                ideal: 'Ideal for: New initiatives, stack evaluations, pre-investment planning',
              },
              {
                title: 'Transformation Partnership',
                duration: '3–6 months',
                description:
                  'A deeper, sustained engagement covering strategy, planning, implementation oversight, and capability building. We become a genuine extension of your leadership team.',
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
        </div>
      </section>

      <ProcessSection />

      {/* How We Work callout */}
      <section className="bg-near-black py-[clamp(48px,6vw,72px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-3">Our Methodology</p>
            <h2 className="font-display font-light text-[clamp(26px,3vw,38px)] leading-[1.2] text-warm-white">
              Want to understand how we actually work?
            </h2>
            <p className="font-body text-[14px] leading-[1.8] text-warm-white/55 font-light mt-2 max-w-[480px]">
              Our four-phase process — Discovery, Strategy, Pilot, and Scale — is designed to reduce implementation risk and build lasting AI capability inside your organisation.
            </p>
          </div>
          <Link
            href="/how-we-work"
            className="font-body text-[12px] tracking-[0.12em] uppercase text-warm-white border border-warm-white/30 px-8 py-4 hover:border-warm-white hover:bg-warm-white hover:text-near-black transition-all duration-200 whitespace-nowrap flex-shrink-0"
          >
            See How We Work →
          </Link>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
