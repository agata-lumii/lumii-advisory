import type { Metadata } from 'next'
import CTABanner from '@/components/CTABanner'
import AiToolsDirectory from '@/components/AiToolsDirectory'
import { AI_TOOLS, CATEGORIES } from '@/lib/ai-tools-directory'

export const metadata: Metadata = {
  title: 'AI Tools Directory — By Category & Use Case | Lumii Advisory',
  description:
    'Browse 60+ AI tools organised by use case: writing, video, coding, research, meetings, data, and more. Pricing tiers, best-for summaries, and direct links to every tool.',
}

const STAT_ROWS = [
  { label: 'Tools listed', value: String(AI_TOOLS.length) },
  { label: 'Categories', value: String(CATEGORIES.length) },
  {
    label: 'Free or freemium',
    value:
      String(AI_TOOLS.filter(t => t.pricing === 'Free' || t.pricing === 'Freemium').length) + '+',
  },
]

export default function AiToolsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-near-black pt-40 pb-24 px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-8">
            Resources · AI Tools Directory
          </p>
          <h1 className="font-display font-light text-[clamp(48px,5.5vw,80px)] leading-[1.08] text-warm-white mb-6 tracking-[-0.01em] max-w-[760px]">
            Every AI tool worth<br />
            <em className="italic text-gold">knowing about.</em>
          </h1>
          <p className="font-body text-[17px] leading-[1.8] text-warm-white/60 max-w-[580px] font-light mb-14">
            Organised by what you actually want to do — write, create, research, build, analyse. Each tool includes a plain-English summary, pricing tier, and a direct link.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-10">
            {STAT_ROWS.map(({ label, value }) => (
              <div key={label}>
                <p className="font-display font-light text-[clamp(36px,4vw,52px)] text-gold leading-none mb-1">
                  {value}
                </p>
                <p className="font-body text-[12px] tracking-[0.15em] uppercase text-warm-white/40">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Directory */}
      <AiToolsDirectory tools={AI_TOOLS} />

      {/* Note */}
      <section className="bg-warm-white py-14 px-8 lg:px-12 border-t border-parchment">
        <div className="max-w-[1180px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-body text-[13px] text-slate-warm font-light leading-[1.8] max-w-[560px]">
              This directory is curated and updated regularly. Pricing and features change frequently — links take you directly to each tool's website for the most accurate information. Missing a tool you rely on?{' '}
              <a href="/contact" className="text-gold hover:text-near-black transition-colors duration-200 underline underline-offset-2">
                Let us know.
              </a>
            </p>
          </div>
          <a
            href="/learn"
            className="font-body text-[12px] tracking-[0.1em] uppercase text-warm-white bg-near-black px-8 py-4 hover:-translate-y-px transition-all duration-200 inline-block shrink-0"
          >
            Deep-dive guides →
          </a>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
