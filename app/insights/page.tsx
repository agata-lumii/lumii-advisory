import type { Metadata } from 'next'
import { articles } from '@/lib/insights'
import CTABanner from '@/components/CTABanner'
import InsightsGrid from '@/components/InsightsGrid'

export const metadata: Metadata = {
  title: {
    absolute: 'AI Strategy Insights for Mid-Market Leaders | Lumii Advisory',
  },
  description:
    'No hype, no vendor agenda. Practical perspectives on AI strategy, readiness, business cases & implementation — written for mid-market CEOs and CMOs.',
  alternates: {
    canonical: 'https://lumiiadvisory.com/insights',
  },
}

export default function InsightsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-near-black pt-40 pb-24 px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-8">
            Insights
          </p>
          <h1 className="font-display font-light text-[clamp(48px,5.5vw,80px)] leading-[1.08] text-warm-white mb-6 tracking-[-0.01em] max-w-[760px]">
            Thinking clearly<br />
            <em className="italic text-gold">about AI.</em>
          </h1>
          <p className="font-body text-[17px] leading-[1.8] text-warm-white/60 max-w-[560px] font-light">
            Practical perspectives on AI strategy, digital transformation, and what it takes to lead through genuine change. No hype. No vendor agenda. Just clear thinking.
          </p>
        </div>
      </section>

      <InsightsGrid articles={articles} />

      <CTABanner />
    </>
  )
}
