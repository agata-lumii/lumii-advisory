import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Our AI Consulting Process: From Readiness to Scale',
  description:
    'A transparent, four-phase AI consulting methodology — Discovery, Strategy, Pilot, and Scale. See how Lumii Advisory helps businesses reduce implementation risk and accelerate AI time-to-value.',
}

const phases = [
  {
    number: '01',
    name: 'Discovery & Diagnosis',
    duration: 'Weeks 1–2',
    description:
      'Every engagement begins with a rigorous diagnostic — not assumptions. We conduct structured interviews with your leadership team, audit your existing data infrastructure and technology stack, map your current processes, and assess AI literacy across the organisation. The output is an honest, evidence-based picture of where you are and what is actually possible.',
    deliverables: [
      'AI Readiness Assessment report',
      'Current-state process map',
      'Data infrastructure audit',
      'Stakeholder interview synthesis',
      'Identified opportunity areas',
    ],
  },
  {
    number: '02',
    name: 'Strategy & Roadmap',
    duration: 'Weeks 3–5',
    description:
      'With a clear baseline established, we work with your leadership team to prioritise AI opportunities by business impact, feasibility, and strategic fit. We build the business case, define success metrics, design the implementation roadmap, and identify the resources — internal and external — required to execute it. Everything is tied to your P&L, not to technology trends.',
    deliverables: [
      'Prioritised AI use case register',
      'Phased implementation roadmap',
      'Board-ready business case',
      'Success metrics framework',
      'Resource and capability plan',
    ],
  },
  {
    number: '03',
    name: 'Pilot Design & Implementation',
    duration: 'Weeks 6–16',
    description:
      'The first implementation phase is deliberately focused — a single, high-value use case with clear success criteria and a defined timeline. We provide strategic oversight and programme management, working alongside your internal teams and technology partners. Every decision is driven by the evidence emerging from the pilot, not by the original plan.',
    deliverables: [
      'Pilot scope and success criteria',
      'Technology partner selection (where needed)',
      'Implementation oversight and QA',
      'Staff training and change management',
      'Pilot results and learnings report',
    ],
  },
  {
    number: '04',
    name: 'Scale & Optimise',
    duration: 'Ongoing',
    description:
      'With a successful pilot proven, the focus shifts to scaling — extending the programme across additional use cases, teams, and functions. We help you build the internal capability, governance structures, and measurement systems to sustain AI adoption as a long-term competitive advantage, rather than a one-off project. The goal is a business that is genuinely AI-capable, not just AI-adjacent.',
    deliverables: [
      'Scaled implementation programme',
      'AI governance framework',
      'Internal capability building plan',
      'Ongoing performance measurement',
      'Quarterly strategic review',
    ],
  },
]

const principles = [
  {
    title: 'Evidence before investment',
    body: 'We never recommend a tool, approach, or vendor before understanding your specific situation. Every recommendation is grounded in what we have observed — not in what is fashionable or what we have a commercial relationship with.',
  },
  {
    title: 'Business outcomes, not technology outputs',
    body: 'Our engagement metrics are always tied to your P&L: time saved, revenue generated, costs reduced, errors eliminated. We measure what matters to your business, not what makes AI look impressive.',
  },
  {
    title: 'Capability over dependency',
    body: 'Our goal is to build your organisation\'s ability to think about and manage AI — not to create a reliance on external consultants. Every engagement includes knowledge transfer and capability building as a core component.',
  },
  {
    title: 'Honest counsel',
    body: 'If AI is not the right solution for a particular problem, we will say so. If your data is not ready, we will tell you before you spend the budget. The trust we build with our clients is more valuable to us than any individual engagement fee.',
  },
]

export default function HowWeWorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-near-black pt-40 pb-24 px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-8">
            Our Process
          </p>
          <h1 className="font-display font-light text-[clamp(48px,5.5vw,80px)] leading-[1.08] text-warm-white mb-6 tracking-[-0.01em] max-w-[780px]">
            A process built for<br />
            <em className="italic text-gold">real results.</em>
          </h1>
          <p className="font-body text-[17px] leading-[1.8] text-warm-white/60 max-w-[580px] font-light">
            Most AI programmes fail not because the technology is wrong, but because the process is. We have designed our engagement methodology to eliminate the most common failure modes — from technology-first thinking to capability gaps to missing business cases.
          </p>
        </div>
      </section>

      {/* Phases */}
      <section className="bg-warm-white py-[clamp(80px,10vw,140px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <div className="space-y-0">
            {phases.map((phase, idx) => (
              <div
                key={phase.number}
                className={`grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 py-16 ${
                  idx < phases.length - 1 ? 'border-b border-parchment' : ''
                }`}
              >
                {/* Left: number + meta */}
                <div>
                  <p className="font-display text-[64px] leading-none text-gold/15 font-light mb-4 select-none">
                    {phase.number}
                  </p>
                  <p className="font-body text-[10px] tracking-[0.25em] uppercase text-gold mb-2">
                    {phase.duration}
                  </p>
                  <h2 className="font-display font-light text-[clamp(24px,2.5vw,32px)] text-near-black leading-[1.2]">
                    {phase.name}
                  </h2>
                </div>

                {/* Right: description + deliverables */}
                <div>
                  <p className="font-body text-[16px] leading-[1.85] text-slate-warm font-light mb-8">
                    {phase.description}
                  </p>
                  <div>
                    <p className="font-body text-[10px] tracking-[0.2em] uppercase text-ash mb-4">
                      Key Deliverables
                    </p>
                    <ul className="space-y-2.5">
                      {phase.deliverables.map((d) => (
                        <li key={d} className="flex items-center gap-3">
                          <span className="w-1 h-1 bg-gold rounded-full flex-shrink-0" />
                          <span className="font-body text-[14px] text-slate-warm font-light">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-ivory py-[clamp(80px,10vw,140px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-4">
            Our Principles
          </p>
          <h2 className="font-display font-light text-[clamp(36px,4vw,56px)] leading-[1.12] text-near-black mb-16 tracking-[-0.01em] max-w-[640px]">
            How we think, not just<br />
            <em className="italic text-gold">how we work.</em>
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
              Engagement Models
            </p>
            <h2 className="font-display font-light text-[clamp(32px,3.5vw,48px)] leading-[1.15] text-warm-white max-w-[520px]">
              The right structure for<br />
              <em className="italic text-gold">your situation.</em>
            </h2>
            <p className="font-body text-[15px] leading-[1.8] text-warm-white/55 font-light mt-4 max-w-[480px]">
              We offer Strategy Sprints, Transformation Partnerships, and Advisory Retainers — each designed for a different stage of the journey.
            </p>
          </div>
          <Link
            href="/services"
            className="font-body text-[12px] tracking-[0.12em] uppercase text-warm-white border border-warm-white/30 px-8 py-4 hover:border-warm-white hover:bg-warm-white hover:text-near-black transition-all duration-200 whitespace-nowrap"
          >
            View Engagement Models →
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
              Take the AI Readiness Checklist
            </h2>
            <p className="font-body text-[14px] text-slate-warm font-light mt-2 max-w-[500px] leading-relaxed">
              15 minutes. 35 questions. A clear picture of where your business stands — and where to focus first.
            </p>
          </div>
          <Link
            href="/resources/ai-readiness-checklist"
            className="font-body text-[12px] tracking-[0.1em] uppercase text-near-black border border-near-black px-8 py-4 hover:bg-near-black hover:text-warm-white transition-all duration-200 whitespace-nowrap"
          >
            Start the Checklist →
          </Link>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
