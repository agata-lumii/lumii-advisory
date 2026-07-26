import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'
import { methodSteps } from '@/lib/method'

export const metadata: Metadata = {
  title: {
    absolute: 'The Lumii Method: Illuminate, Align, Activate, Accelerate | Lumii',
  },
  description:
    'My four-phase AI consulting method — Illuminate, Align, Activate, Accelerate — and how it installs the AI Operating System inside mid-market businesses.',
  alternates: {
    canonical: 'https://lumiiadvisory.com/how-we-work',
  },
}

/**
 * Phase detail. The four phases are the single engagement method; the
 * deliverables below were previously presented as a separate Discovery →
 * Strategy → Pilot → Scale framework and are now folded into the phase each
 * belongs to.
 */
const phaseDetail: Record<string, { duration: string; deliverables: string[] }> = {
  Illuminate: {
    duration: 'Weeks 1–2',
    deliverables: [
      'AI readiness assessment report',
      'Current-state process map',
      'Data infrastructure audit',
      'Stakeholder interview synthesis',
      'Identified opportunity areas',
    ],
  },
  Align: {
    duration: 'Weeks 3–5',
    deliverables: [
      'Prioritised AI use case register',
      'Phased implementation roadmap',
      'Board-ready business case',
      'Success metrics framework',
      'Resource and capability plan',
    ],
  },
  Activate: {
    duration: 'Weeks 6–16',
    deliverables: [
      'Scoped first use case with success criteria',
      'Technology partner selection (where needed)',
      'Implementation oversight and QA',
      'Staff training and change management',
      'Results and learnings report',
    ],
  },
  Accelerate: {
    duration: 'Ongoing',
    deliverables: [
      'Scaled implementation programme',
      'AI governance framework',
      'Internal capability building plan',
      'Ongoing performance measurement',
      'Quarterly strategic review',
    ],
  },
}

const principles = [
  {
    title: 'Evidence before investment',
    body: 'I never recommend a tool, approach, or vendor before understanding your specific situation. Every recommendation is grounded in what I have observed in your business — not in what is fashionable, and not in what I have a commercial relationship with.',
  },
  {
    title: 'Business outcomes, not technology outputs',
    body: 'My engagement metrics are always tied to your P&L: time saved, revenue generated, costs reduced, errors eliminated. I measure what matters to your business, not what makes AI look impressive.',
  },
  {
    title: 'Capability over dependency',
    body: "My goal is to build your organisation's ability to think about and manage AI — not to create a reliance on an external consultant. Every engagement includes knowledge transfer and capability building as a core component.",
  },
  {
    title: 'Honest counsel',
    body: 'If AI is not the right solution for a particular problem, I will say so. If your data is not ready, I will tell you before you spend the budget. The trust I build with clients is worth more to me than any single engagement fee.',
  },
]

export default function HowWeWorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-near-black pt-40 pb-24 px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-8">
            My method
          </p>
          <h1 className="font-display font-light text-[clamp(48px,5.5vw,80px)] leading-[1.08] text-warm-white mb-6 tracking-[-0.01em] max-w-[780px]">
            A process built for<br />
            <em className="italic text-gold">real results.</em>
          </h1>
          <p className="font-body text-[17px] leading-[1.8] text-warm-white/60 max-w-[580px] font-light mb-8">
            Most AI programmes fail not because the technology is wrong, but because the
            process is. I designed this method to remove the most common failure modes —
            technology-first thinking, capability gaps, and missing business cases.
          </p>
          <p className="font-body text-[15px] leading-[1.8] text-warm-white/50 max-w-[580px] font-light pl-6 border-l border-gold/40">
            The{' '}
            <Link
              href="/ai-operating-system"
              className="text-gold hover:text-warm-white underline decoration-gold/40 underline-offset-[4px] hover:decoration-warm-white/60 transition-colors"
            >
              AI Operating System
            </Link>{' '}
            is what I build. Illuminate → Align → Activate → Accelerate is how I build it.
          </p>
        </div>
      </section>

      {/* Phases */}
      <section className="bg-warm-white py-[clamp(80px,10vw,140px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <div className="space-y-0">
            {methodSteps.map((phase, idx) => {
              const detail = phaseDetail[phase.title]
              return (
                <div
                  key={phase.num}
                  className={`grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 py-16 ${
                    idx < methodSteps.length - 1 ? 'border-b border-parchment' : ''
                  }`}
                >
                  {/* Left: number + meta */}
                  <div>
                    <p className="font-display text-[64px] leading-none text-gold/15 font-light mb-4 select-none">
                      {phase.num}
                    </p>
                    <p className="font-body text-[10px] tracking-[0.25em] uppercase text-gold mb-2">
                      {detail.duration}
                    </p>
                    <h2 className="font-display font-light text-[clamp(24px,2.5vw,32px)] text-near-black leading-[1.2]">
                      {phase.title}
                    </h2>
                  </div>

                  {/* Right: description + deliverables */}
                  <div>
                    <p className="font-body text-[16px] leading-[1.85] text-slate-warm font-light mb-8">
                      {phase.bodyLong}
                    </p>
                    <div>
                      <p className="font-body text-[10px] tracking-[0.2em] uppercase text-ash mb-4">
                        Key deliverables
                      </p>
                      <ul className="space-y-2.5">
                        {detail.deliverables.map((d) => (
                          <li key={d} className="flex items-center gap-3">
                            <span className="w-1 h-1 bg-gold rounded-full flex-shrink-0" />
                            <span className="font-body text-[14px] text-slate-warm font-light">{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-ivory py-[clamp(80px,10vw,140px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-4">
            My principles
          </p>
          <h2 className="font-display font-light text-[clamp(36px,4vw,56px)] leading-[1.12] text-near-black mb-16 tracking-[-0.01em] max-w-[640px]">
            How I think, not just<br />
            <em className="italic text-gold">how I work.</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((p) => (
              <div key={p.title} className="bg-warm-white border border-parchment p-8">
                <h3 className="font-display font-light text-[22px] text-near-black leading-[1.3] mb-4">
                  {p.title}
                </h3>
                <p className="font-body text-[14px] leading-[1.8] text-slate-warm font-light">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement models teaser */}
      <section className="bg-near-black py-[clamp(60px,8vw,100px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div>
            <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-4">
              Engagement models
            </p>
            <h2 className="font-display font-light text-[clamp(32px,3.5vw,48px)] leading-[1.15] text-warm-white max-w-[520px]">
              The right structure for<br />
              <em className="italic text-gold">your situation.</em>
            </h2>
            <p className="font-body text-[15px] leading-[1.8] text-warm-white/55 font-light mt-4 max-w-[480px]">
              Workshops, project sprints, and advisory retainers — each designed for a
              different stage of the journey.
            </p>
          </div>
          <Link
            href="/work-with-us"
            className="font-body text-[12px] tracking-[0.12em] uppercase text-warm-white border border-warm-white/30 px-8 py-4 hover:border-warm-white hover:bg-warm-white hover:text-near-black transition-all duration-200 whitespace-nowrap"
          >
            View engagement models →
          </Link>
        </div>
      </section>

      {/* AI Readiness prompt */}
      <section className="bg-parchment py-[clamp(60px,7vw,90px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-body text-[11px] tracking-[0.2em] uppercase text-gold mb-3">
              Not sure where to start?
            </p>
            <h2 className="font-display font-light text-[clamp(24px,2.5vw,36px)] text-near-black">
              Take the AI readiness checklist
            </h2>
            <p className="font-body text-[14px] text-slate-warm font-light mt-2 max-w-[500px] leading-relaxed">
              15 minutes. 35 questions. A clear picture of where your business stands —
              and where to focus first.
            </p>
          </div>
          <Link
            href="/resources/ai-readiness-checklist"
            className="font-body text-[12px] tracking-[0.1em] uppercase text-near-black border border-near-black px-8 py-4 hover:bg-near-black hover:text-warm-white transition-all duration-200 whitespace-nowrap"
          >
            Start the checklist →
          </Link>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
