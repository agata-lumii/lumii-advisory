import type { Metadata } from 'next'
import VerticalsSection from '@/components/VerticalsSection'
import CTABanner from '@/components/CTABanner'
import SectionHeader from '@/components/SectionHeader'

export const metadata: Metadata = {
  title: 'Who We Help: AI Strategy by Industry & Business Type',
  description:
    'AI strategy and digital transformation consulting for marketers, sales teams, retailers, financial services, healthcare, professional services, hospitality, startups, education, and real estate. Sydney, Australia.',
}

export default function WhoWeHelpPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="bg-stone pt-40 pb-24 px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-8">
            Who We Help
          </p>
          <h1 className="font-display font-light text-[clamp(52px,5.5vw,82px)] leading-[1.08] text-near-black mb-8 tracking-[-0.01em] max-w-[820px]">
            Built for the <em className="italic text-gold">ambitious.</em>
          </h1>
          <p className="font-body text-[17px] leading-[1.8] text-slate-warm max-w-[580px] font-light">
            We work with growth-stage businesses and established teams across a range of sectors — wherever digital complexity is creating friction or opportunity. Here's who we help most.
          </p>
        </div>
      </section>

      {/* Main verticals grid */}
      <VerticalsSection />

      {/* What to expect section */}
      <section className="bg-warm-white py-[clamp(80px,10vw,140px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <SectionHeader
              tag="What to Expect"
              heading={
                <>
                  Working with<br />
                  <em className="italic text-gold">Lumii.</em>
                </>
              }
              lead="Regardless of your sector, every Lumii engagement follows the same principles: radical clarity, honest advice, and a relentless focus on outcomes that matter to your business."
            />
            <div className="space-y-8 pt-4 lg:pt-16">
              {[
                {
                  title: 'No jargon, no ego',
                  body: 'We speak plainly. We\'ll never hide behind technical language or inflate complexity to justify our fees. You\'ll always know exactly what we\'re doing and why.',
                },
                {
                  title: 'Speed and substance',
                  body: 'We move quickly — but never at the expense of quality. Our structured methodology means we\'re always building on solid foundations, not cutting corners.',
                },
                {
                  title: 'Real partnership',
                  body: 'We work with you, not at you. Your team will learn alongside us — building the internal capability to sustain and extend the work long after our engagement ends.',
                },
                {
                  title: 'Commercial honesty',
                  body: 'We have no vendor relationships, no affiliate commissions, and no preferred platforms. Our only incentive is to give you the best possible advice for your specific situation.',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-6">
                  <div className="w-1 h-full bg-gold flex-shrink-0 min-h-[24px] self-start mt-1" style={{ width: 3 }} />
                  <div>
                    <h3 className="font-display text-[22px] font-light text-near-black mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-[14px] text-slate-warm font-light leading-[1.75]">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
