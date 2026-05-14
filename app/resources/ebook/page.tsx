import type { Metadata } from 'next'
import Image from 'next/image'
import EbookForm from '@/components/EbookForm'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: {
    absolute: 'Free Ebook: Find Your Light in the Age of AI | Lumii Advisory',
  },
  description:
    'Download the free ebook by Agata Adamczak — the 90-day AI strategy system for business leaders. A practical roadmap from AI curiosity to confident execution.',
  alternates: {
    canonical: 'https://lumiiadvisory.com/resources/ebook',
  },
}

const chapters = [
  {
    number: '01',
    title: 'Where You Actually Stand',
    description: 'The honest diagnostic — assess your AI readiness across leadership, data, technology, and capability before you spend a dollar.',
  },
  {
    number: '02',
    title: 'Choosing the Right Use Cases',
    description: 'The prioritisation framework for identifying where AI creates real commercial value in your business — and what to ignore.',
  },
  {
    number: '03',
    title: 'Building the Business Case',
    description: 'How to frame AI investment in the language boards and CFOs respond to — risk, return, and accountability, not technology hype.',
  },
  {
    number: '04',
    title: 'Running Your First Pilot',
    description: 'The 30-day pilot structure that produces a measurable result without over-engineering — and how to avoid the most common failure modes.',
  },
  {
    number: '05',
    title: 'Scaling What Works',
    description: 'The operational and governance model for moving from one successful pilot to an AI capability embedded across the business.',
  },
  {
    number: '06',
    title: 'The 90-Day Roadmap',
    description: 'A week-by-week action plan — who does what, in what order, with what outcome. Built for business leaders, not technologists.',
  },
]

export default function EbookPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-near-black pt-40 pb-24 px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-8">
            Free Ebook
          </p>
          <h1 className="font-display font-light text-[clamp(44px,5.5vw,76px)] leading-[1.08] text-warm-white mb-6 tracking-[-0.01em] max-w-[780px]">
            Find Your Light <em className="italic text-gold">in the Age of AI.</em>
          </h1>
          <p className="font-body text-[17px] leading-[1.8] text-warm-white/60 max-w-[560px] font-light">
            The 90-day AI strategy system for business leaders — from AI curiosity to confident, commercially-grounded execution.
          </p>
        </div>
      </section>

      {/* Main content — photo left, form right */}
      <section className="bg-warm-white py-[clamp(80px,10vw,130px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Left — photo + what's inside */}
            <div>
              {/* Agata holding the ebook */}
              <div className="relative w-full max-w-[480px] aspect-[4/5] overflow-hidden bg-ivory mb-12">
                <Image
                  src="/images/agata-ebook.png"
                  alt="Agata Adamczak holding the Find Your Light in the Age of AI ebook"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover object-top"
                />
              </div>

              {/* What's inside */}
              <div>
                <div className="w-8 h-px bg-gold mb-7" />
                <h2 className="font-display font-light text-[clamp(26px,2.8vw,36px)] leading-[1.2] text-near-black mb-3 tracking-[-0.01em]">
                  What's inside.
                </h2>
                <p className="font-body text-[15px] leading-[1.8] text-slate-warm font-light mb-10">
                  A six-part system built for mid-market leaders who want to move from AI experimentation to real commercial results — without burning budget on the wrong things.
                </p>
                <div className="space-y-6">
                  {chapters.map((chapter) => (
                    <div key={chapter.number} className="flex items-start gap-5">
                      <span className="font-display text-[13px] text-gold/60 tracking-[0.08em] flex-shrink-0 mt-0.5 w-6">
                        {chapter.number}
                      </span>
                      <div>
                        <p className="font-body text-[13px] font-medium text-near-black mb-1">
                          {chapter.title}
                        </p>
                        <p className="font-body text-[13px] leading-[1.7] text-slate-warm font-light">
                          {chapter.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Author attribution */}
                <div className="mt-12 pt-8 border-t border-parchment flex items-center gap-5">
                  <div className="w-12 h-12 bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-gold text-[18px]">A</span>
                  </div>
                  <div>
                    <p className="font-body text-[13px] font-medium text-near-black mb-0.5">Agata Adamczak</p>
                    <p className="font-body text-[12px] text-ash font-light">
                      Founder, Lumii Advisory · 18 years in global AI and digital strategy
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:sticky lg:top-32">
              <div className="bg-ivory border border-parchment p-10 lg:p-12">
                <p className="font-body text-[10px] tracking-[0.25em] uppercase text-gold mb-5">
                  Free Download
                </p>
                <h2 className="font-display font-light text-[clamp(24px,2.5vw,32px)] leading-[1.2] text-near-black mb-3">
                  Get the free guide.
                </h2>
                <p className="font-body text-[14px] leading-[1.8] text-slate-warm font-light mb-10">
                  Enter your details below and your copy will download instantly. No spam — just the ebook.
                </p>
                <EbookForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Social proof strip */}
      <section className="bg-ivory border-t border-parchment py-[clamp(60px,7vw,90px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            <div>
              <p className="font-display text-[clamp(36px,4vw,52px)] font-light text-gold leading-none mb-3">90</p>
              <p className="font-body text-[13px] text-near-black font-medium mb-1">Day roadmap</p>
              <p className="font-body text-[12px] text-ash font-light leading-[1.7]">A week-by-week plan from day one to a scaled AI capability — built for leaders, not engineers.</p>
            </div>
            <div>
              <p className="font-display text-[clamp(36px,4vw,52px)] font-light text-gold leading-none mb-3">6</p>
              <p className="font-body text-[13px] text-near-black font-medium mb-1">Core chapters</p>
              <p className="font-body text-[12px] text-ash font-light leading-[1.7]">From readiness diagnostic to scaling model — each chapter builds on the last with clear action steps.</p>
            </div>
            <div>
              <p className="font-display text-[clamp(36px,4vw,52px)] font-light text-gold leading-none mb-3">18</p>
              <p className="font-body text-[13px] text-near-black font-medium mb-1">Years of experience</p>
              <p className="font-body text-[12px] text-ash font-light leading-[1.7]">Frameworks drawn from real client engagements across retail, finance, professional services and beyond.</p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
