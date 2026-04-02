import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Free AI Strategy Resources, Tools & Checklists',
  description:
    'Free AI strategy resources for business leaders. Download the AI Readiness Checklist, access prioritisation frameworks, and governance templates. Built for executives, not technologists.',
}

const resources = [
  {
    type: 'Interactive Checklist',
    title: 'AI Readiness Checklist',
    description:
      'Assess your organisation across 7 critical dimensions — from leadership alignment and data infrastructure to workforce skills and governance. 35 questions, 15 minutes, a scored result with maturity band and tailored guidance.',
    tags: ['AI Readiness', 'Self-Assessment', 'Strategy', 'Free'],
    href: '/resources/ai-readiness-checklist',
    cta: 'Start the Checklist',
    highlight: true,
  },
]

const comingSoon = [
  {
    type: 'Framework',
    title: 'AI Use Case Prioritisation Matrix',
    description: 'A structured framework for evaluating and ranking AI use cases by business impact, feasibility, and strategic fit.',
    tags: ['AI Strategy', 'Use Cases', 'Prioritisation'],
  },
  {
    type: 'Guide',
    title: 'Building Your AI Business Case',
    description: 'A step-by-step guide to constructing a board-ready AI investment case, with financial model templates and risk frameworks.',
    tags: ['Business Case', 'ROI', 'Board'],
  },
  {
    type: 'Template',
    title: 'AI Governance Policy Template',
    description: 'A customisable policy template covering AI ethics, data usage, model oversight, and employee guidelines.',
    tags: ['Governance', 'Policy', 'Ethics'],
  },
]

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-near-black pt-40 pb-24 px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-8">
            Resources
          </p>
          <h1 className="font-display font-light text-[clamp(48px,5.5vw,80px)] leading-[1.08] text-warm-white mb-6 tracking-[-0.01em] max-w-[760px]">
            Tools to help you<br />
            <em className="italic text-gold">move with confidence.</em>
          </h1>
          <p className="font-body text-[17px] leading-[1.8] text-warm-white/60 max-w-[560px] font-light">
            Practical frameworks, checklists, and guides designed for leaders navigating AI adoption. No generic templates — everything is built around the decisions that actually matter.
          </p>
        </div>
      </section>

      {/* Available resources */}
      <section className="bg-ivory py-[clamp(80px,10vw,140px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <p className="font-body text-[10px] tracking-[0.25em] uppercase text-ash mb-12">
            Available Now
          </p>
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="bg-warm-white border border-parchment hover:border-gold/40 transition-colors duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-0">
                <div className="p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-parchment">
                  <p className="font-body text-[10px] tracking-[0.25em] uppercase text-gold mb-4">
                    {resource.type}
                  </p>
                  <h2 className="font-display font-light text-[clamp(28px,3vw,40px)] text-near-black leading-[1.2] mb-5">
                    {resource.title}
                  </h2>
                  <p className="font-body text-[15px] leading-[1.85] text-slate-warm font-light mb-8 max-w-[580px]">
                    {resource.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {resource.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`font-body text-[10px] tracking-[0.12em] uppercase px-3 py-1.5 border ${
                          tag === 'Free'
                            ? 'bg-gold/10 text-gold border-gold/20'
                            : 'text-ash border-parchment'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-10 lg:p-14 flex flex-col items-start justify-center">
                  <div className="mb-6">
                    <p className="font-body text-[13px] text-slate-warm font-light leading-[1.7] mb-1">
                      7 dimensions assessed
                    </p>
                    <p className="font-body text-[13px] text-slate-warm font-light leading-[1.7] mb-1">
                      35 diagnostic questions
                    </p>
                    <p className="font-body text-[13px] text-slate-warm font-light leading-[1.7] mb-1">
                      Scored maturity result
                    </p>
                    <p className="font-body text-[13px] text-slate-warm font-light leading-[1.7]">
                      Printable as PDF
                    </p>
                  </div>
                  <Link
                    href={resource.href}
                    className="font-body text-[12px] tracking-[0.1em] uppercase text-warm-white bg-near-black px-8 py-4 hover:-translate-y-px transition-all duration-200 inline-block"
                  >
                    {resource.cta} →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coming soon */}
      <section className="bg-warm-white py-[clamp(60px,8vw,100px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <p className="font-body text-[10px] tracking-[0.25em] uppercase text-ash mb-12">
            Coming Soon
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comingSoon.map((item) => (
              <div
                key={item.title}
                className="bg-ivory border border-parchment p-8 opacity-70"
              >
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-ash mb-4">
                  {item.type}
                </p>
                <h3 className="font-display font-light text-[20px] text-near-black leading-[1.3] mb-4">
                  {item.title}
                </h3>
                <p className="font-body text-[13px] leading-[1.75] text-slate-warm font-light mb-6">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-body text-[10px] tracking-[0.12em] uppercase text-ash border border-parchment px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="font-body text-[13px] text-ash font-light mt-8 italic">
            New resources are added regularly. Contact us if there is a specific tool or framework you would find valuable.
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
