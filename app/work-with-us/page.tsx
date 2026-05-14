import type { Metadata } from 'next'
import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: {
    absolute: 'AI Workshops, Sprints & Advisory Retainers Sydney | Lumii',
  },
  description:
    'Three ways to engage: AI workshops (1 day), project sprints (6–12 weeks), or advisory retainers. Senior-led, vendor-neutral. Get a fixed proposal.',
  alternates: {
    canonical: 'https://lumiiadvisory.com/work-with-us',
  },
  openGraph: {
    title: 'AI Workshops, Sprints & Advisory Retainers Sydney | Lumii',
    description:
      'Three ways to engage: AI workshops, project sprints, or advisory retainers. Senior-led, vendor-neutral. Pick the shape that fits your business.',
    url: 'https://lumiiadvisory.com/work-with-us',
  },
}

type Tier = {
  number: string
  anchor: string
  title: string
  tagline: string
  summary: string
  formats: {
    name: string
    detail: string
    description: string
  }[]
  idealFor: string
  enquiryValue: 'workshop' | 'project' | 'retainer'
  enquiryLabel: string
}

const tiers: Tier[] = [
  {
    number: '01',
    anchor: 'workshops',
    title: 'Workshops',
    tagline: 'A single day to align leadership on what AI means for your business.',
    summary:
      'Structured, high-impact sessions designed to take a leadership team from curious to clear. Every workshop is tailored to your sector, your stack, and your commercial reality — no generic slide decks, no AI-vendor agenda. You leave with a shared language, a point of view, and a roadmap of next moves.',
    formats: [
      {
        name: 'Half-Day Executive Briefing',
        detail: '3 hours · up to 8 leaders · in-person or virtual',
        description:
          'A focused briefing on the AI landscape in your sector, your competitive exposure, and three quick-win use cases scoped to your business. Ideal for boards and executive teams who want clarity without committing to a programme.',
      },
      {
        name: 'Full-Day Strategy Intensive',
        detail: '6 hours · up to 12 people · in-person or virtual',
        description:
          'A deep working session covering AI readiness, use-case prioritisation, and a 90-day activation plan. Delivered as a board-ready document within five business days. The fastest route from exploration to action.',
      },
      {
        name: 'Custom Multi-Day Programmes',
        detail: 'Tailored duration · team-wide capability build',
        description:
          'For organisations investing in genuine AI capability across the leadership and operating teams. Structured curriculum, hands-on labs, and an engagement plan designed for lasting behaviour change.',
      },
    ],
    idealFor:
      'Leadership teams wanting clarity fast — before committing budget, before briefing agencies, before making platform decisions.',
    enquiryValue: 'workshop',
    enquiryLabel: 'Enquire about a workshop',
  },
  {
    number: '02',
    anchor: 'projects',
    title: 'Project Sprints',
    tagline: 'A defined outcome, delivered in 6–12 weeks.',
    summary:
      'Fixed-scope engagements for businesses that know the problem and want it solved properly. Each sprint is shaped around a single, measurable outcome — with a clear deliverable, a defined timeline, and a senior consultant accountable from first call to final handover. No scope creep. No open-ended meter running.',
    formats: [
      {
        name: 'AI Readiness Diagnostic',
        detail: '6 weeks',
        description:
          'A structured audit of your data, people, processes, and platforms against a proven AI maturity framework. You receive a scored assessment, an honest diagnosis, and a prioritised roadmap your leadership team can execute against.',
      },
      {
        name: 'Use-Case Activation',
        detail: '8–10 weeks',
        description:
          'End-to-end delivery of one high-value AI initiative — from scoping and design through pilot, measurement, and handover. Ideal for businesses that want to prove AI value before scaling investment.',
      },
      {
        name: 'CX, Ecommerce or MarTech Transformation',
        detail: '8–12 weeks',
        description:
          'A shaped transformation sprint within one discipline — journey redesign, platform migration, stack rationalisation, or attribution rebuild. Clear scope, clear timeline, clear outcome.',
      },
    ],
    idealFor:
      'Businesses with a defined problem and a mandate to solve it — ready to commit budget to a time-boxed outcome.',
    enquiryValue: 'project',
    enquiryLabel: 'Enquire about a project',
  },
  {
    number: '03',
    anchor: 'retainer',
    title: 'Advisory Retainer',
    tagline: 'Ongoing counsel as your AI and digital strategy evolves.',
    summary:
      'A long-term partnership giving you a senior strategic brain on speed-dial. Ideal for founders and leadership teams navigating a period of change — a platform migration, an AI rollout, a new growth thesis — who want experienced counsel without hiring a full-time executive.',
    formats: [
      {
        name: 'Monthly Advisory',
        detail: 'Ongoing · minimum 3-month commitment',
        description:
          'One to four days of senior advisory time per month. Monthly strategy session, async support between, and a quarterly board-ready review. Light-touch when you need it, deep when it matters.',
      },
      {
        name: 'Fractional Leadership',
        detail: 'Ongoing · 6–12 month engagements',
        description:
          'A part-time seat at your leadership table — as fractional Chief Digital Officer, AI Advisor, or Transformation Lead. For businesses that need senior capability but aren\'t ready for a full-time hire.',
      },
      {
        name: 'Board & Committee Advisory',
        detail: 'Ongoing · quarterly rhythm',
        description:
          'Independent AI and digital transformation counsel to boards, audit committees, and investment committees. Strategic reviews, risk assessments, and discipline-specific briefings as required.',
      },
    ],
    idealFor:
      'Founders and CEOs of growing mid-market businesses who want experienced counsel over time — not a one-off project.',
    enquiryValue: 'retainer',
    enquiryLabel: 'Enquire about a retainer',
  },
]

const faqs = [
  {
    q: 'Do you share pricing upfront?',
    a: 'Not at the tier level. Every engagement is shaped around the business in front of us — scope, seniority of stakeholders, timeline, and outcomes all shift the number. We give a clear, fixed proposal after an initial discovery conversation so you can make a confident decision.',
  },
  {
    q: 'How do we get started?',
    a: 'Every engagement begins with a 30-minute discovery call — no obligation, no slide deck. We listen, ask hard questions, and tell you honestly whether we\'re the right fit. If we are, we\'ll follow up within a few days with a scoped proposal.',
  },
  {
    q: 'Do you work across Australia and internationally?',
    a: 'Yes. We\'re based in Sydney and work with clients across Australia and the Asia-Pacific region. Workshops and strategy sessions can be delivered in-person in major APAC cities or virtually across time zones.',
  },
  {
    q: 'Can engagements evolve over time?',
    a: 'Frequently, and by design. Many clients begin with a workshop or short sprint and move into a longer retainer once trust and context are established. The three tiers are starting points, not boxes.',
  },
  {
    q: 'Who actually delivers the work?',
    a: 'Agata Adamczak leads every engagement personally. For larger programmes we bring in a curated network of senior specialists — but you always have a single senior consultant accountable end-to-end.',
  },
]

export default function WorkWithUsPage() {
  return (
    <>
      {/* Dark hero */}
      <section className="bg-near-black pt-40 pb-24 px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-8">
            Ways to Engage
          </p>
          <h1 className="font-display font-light text-[clamp(52px,5.5vw,82px)] leading-[1.08] text-warm-white mb-8 tracking-[-0.01em] max-w-[900px]">
            Three ways to<br />
            <em className="italic text-gold">work with us.</em>
          </h1>
          <p className="font-body text-[17px] leading-[1.8] text-warm-white/60 max-w-[620px] font-light">
            Whether you need a single day of clarity, a focused sprint to ship an outcome, or a long-term advisor alongside your leadership team — pick the shape that fits. Every engagement is bespoke, senior-led, and accountable to measurable results.
          </p>
        </div>
      </section>

      {/* Three tiers */}
      <section className="bg-warm-white py-[clamp(80px,10vw,140px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto space-y-[clamp(60px,8vw,100px)]">
          {tiers.map((tier) => (
            <article
              key={tier.number}
              id={tier.anchor}
              className="scroll-mt-32 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 pb-[clamp(60px,8vw,100px)] border-b border-parchment last:border-b-0 last:pb-0"
            >
              {/* Left — tier header */}
              <div>
                <p className="font-display text-[14px] text-gold/70 tracking-[0.1em] mb-4">
                  {tier.number} — Tier {Number(tier.number)}
                </p>
                <h2 className="font-display font-light text-[clamp(36px,4vw,54px)] leading-[1.1] text-near-black tracking-[-0.01em] mb-6">
                  {tier.title}
                </h2>
                <p className="font-display italic text-[clamp(18px,2vw,22px)] font-light text-charcoal leading-[1.5] mb-6">
                  {tier.tagline}
                </p>
                <p className="font-body text-[15px] leading-[1.8] text-slate-warm font-light">
                  {tier.summary}
                </p>

                <div className="mt-10 pt-8 border-t border-parchment">
                  <p className="font-body text-[10px] tracking-[0.2em] uppercase text-ash mb-3">
                    Ideal for
                  </p>
                  <p className="font-body text-[14px] leading-[1.75] text-charcoal font-light italic">
                    {tier.idealFor}
                  </p>
                </div>

                <Link
                  href={`/contact?interest=${tier.enquiryValue}`}
                  className="inline-block mt-10 font-body text-[12px] tracking-[0.12em] uppercase text-near-black bg-gold px-8 py-4 hover:bg-[#d4b47a] hover:-translate-y-px transition-all duration-200"
                >
                  {tier.enquiryLabel} →
                </Link>
              </div>

              {/* Right — formats */}
              <div className="space-y-6">
                {tier.formats.map((f) => (
                  <div
                    key={f.name}
                    className="bg-ivory border border-parchment p-8 lg:p-10 hover:border-gold/40 transition-colors duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-4">
                      <h3 className="font-display text-[22px] font-light text-near-black leading-[1.25]">
                        {f.name}
                      </h3>
                      <p className="font-body text-[10px] tracking-[0.2em] uppercase text-gold flex-shrink-0">
                        {f.detail}
                      </p>
                    </div>
                    <p className="font-body text-[14px] leading-[1.8] text-slate-warm font-light">
                      {f.description}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Principles band */}
      <section className="bg-near-black py-[clamp(60px,8vw,100px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-8 text-center">
            What every engagement shares
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[
              {
                title: 'Senior-led.',
                description:
                  'Agata leads every engagement personally. You never get a graduate analyst and a template — you get the founder, the strategy, and the accountability.',
              },
              {
                title: 'Vendor-neutral.',
                description:
                  'No platform commissions, no reseller agreements, no hidden incentives. Our advice is shaped by your business, not our rate card.',
              },
              {
                title: 'Outcome-accountable.',
                description:
                  'Every engagement ties to a commercial outcome you can point at. If we can\'t find one, we\'ll tell you before you sign.',
              },
            ].map((p) => (
              <div key={p.title}>
                <div className="w-8 h-px bg-gold mb-6" />
                <h3 className="font-display text-[24px] font-light text-warm-white leading-[1.25] mb-4">
                  {p.title}
                </h3>
                <p className="font-body text-[14px] leading-[1.8] text-warm-white/60 font-light">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ivory py-[clamp(80px,10vw,140px)] px-8 lg:px-12">
        <div className="max-w-[920px] mx-auto">
          <SectionHeader
            tag="Common Questions"
            heading={
              <>
                Before you<br />
                <em className="italic text-gold">get in touch.</em>
              </>
            }
            lead="A few of the questions we hear most often. If yours isn't here, just ask."
          />
          <div className="mt-16 space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q} className="pb-8 border-b border-parchment last:border-b-0">
                <h3 className="font-display text-[22px] font-light text-near-black leading-[1.3] mb-4">
                  {faq.q}
                </h3>
                <p className="font-body text-[15px] leading-[1.85] text-slate-warm font-light">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not ready yet — ebook strip */}
      <section className="bg-ivory border-t border-parchment py-[clamp(60px,7vw,90px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-body text-[10px] tracking-[0.25em] uppercase text-ash mb-3">
              Not ready to engage yet?
            </p>
            <h2 className="font-display font-light text-[clamp(22px,2.5vw,34px)] text-near-black leading-[1.25] mb-3">
              Start with the free ebook.
            </h2>
            <p className="font-body text-[14px] text-slate-warm font-light leading-[1.8] max-w-[500px]">
              <em className="italic">Find Your Light in the Age of AI</em> — the 90-day AI strategy system for business leaders. Download free, keep forever.
            </p>
          </div>
          <Link
            href="/resources/ebook"
            className="font-body text-[12px] tracking-[0.1em] uppercase text-near-black border border-near-black px-8 py-4 hover:bg-near-black hover:text-warm-white transition-all duration-200 inline-block whitespace-nowrap flex-shrink-0"
          >
            Download Free →
          </Link>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
