import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: {
    absolute: 'The AI Operating System: A Framework for Mid-Market Businesses | Lumii',
  },
  description:
    'Most AI programmes fail because businesses buy tools instead of building an AI operating system. The five components, explained — and why isolated AI tools never reach the P&L.',
  alternates: {
    canonical: 'https://lumiiadvisory.com/ai-operating-system',
  },
  openGraph: {
    title: 'The AI Operating System | Lumii Advisory',
    description:
      'The structure, workflows, governance and capability that turn isolated AI tools into a coordinated, business-wide capability. The Lumii framework.',
    url: 'https://lumiiadvisory.com/ai-operating-system',
    type: 'article',
  },
}

// Five-component AI Operating System framework
const components = [
  {
    number: '01',
    name: 'The Thesis',
    summary: 'The commercial direction. The single answer to "why are we doing this?"',
    body: 'Every successful AI programme begins with a defensible commercial thesis — a clear, written answer to the question of why this business is investing in AI, what outcomes it is pursuing, and how those outcomes are tied to the P&L. Without a thesis, AI investment becomes a portfolio of disconnected tools attached to no strategy. Most failed programmes can be traced back to this missing step. The Thesis names the business problem, the value pool, the timeline, and the accountable executive. It is short — usually a single page — but it disciplines every decision downstream.',
    examples: [
      'A board-ready commercial case for AI investment',
      'A defined value pool: cost out, revenue up, or risk down',
      'A named executive sponsor with P&L accountability',
      'A 12 to 24-month time horizon for measurable outcomes',
    ],
  },
  {
    number: '02',
    name: 'The Guardrails',
    summary: 'Governance, data classification, sanctioned tools, and the boundaries that make AI safe to scale.',
    body: 'Shadow AI is already happening inside almost every mid-market business. Employees are using ChatGPT, Claude, Gemini, and a dozen other tools whether the organisation has approved them or not — and the data those tools see is, by default, leaving the business. The Guardrails layer addresses this directly: a sanctioned tool list, a data classification policy, role-based access rules, and an incident response framework. The objective is not to ban AI. The objective is to make AI visible — and therefore manageable. Businesses that try to ban AI lose the talent that knows how to use it. Businesses that govern AI keep both.',
    examples: [
      'A sanctioned AI tool register with approved use cases',
      'A 4-tier data classification policy (public, internal, confidential, restricted)',
      'Role-based access controls and audit logging',
      'An incident response and disclosure framework',
    ],
  },
  {
    number: '03',
    name: 'The Workflows',
    summary: 'AI embedded inside the operating model — not bolted on top of it.',
    body: 'This is where most AI programmes break down. A team rolls out Microsoft Copilot, ChatGPT Enterprise, or a custom GPT — and three months later, usage has dropped, no one is sure what value it has created, and the team is back to the same workflows they had before. The Workflows layer is the work of redesigning specific business processes so AI is doing the heaviest cognitive lifting — and humans are doing the judgement, the relationships, and the final-mile decisions. This is not training. It is operational redesign. Done well, a single workflow rebuild can deliver more measurable value than an entire enterprise licence.',
    examples: [
      'End-to-end workflow redesigns inside priority business processes',
      'Standard operating procedures rewritten around AI-assisted execution',
      'Prompt libraries and templates for high-frequency tasks',
      'Defined handoff points between AI execution and human judgement',
    ],
  },
  {
    number: '04',
    name: 'The People',
    summary: 'Internal ownership, accountable roles, and the capability lift that makes AI stick.',
    body: 'AI does not adopt itself. Every successful AI programme has a named internal owner — sometimes a Head of AI, sometimes a Chief AI Officer, sometimes a delegated head of operations or technology with the explicit mandate. Around that owner, capability needs to be built deliberately: a network of internal AI champions across functions, a literacy programme that lifts the floor, and a clear evolution path for roles whose work is changing fastest. The single most common cause of stalled AI programmes is the absence of a single accountable owner with the time, the mandate, and the authority to drive it forward.',
    examples: [
      'A named internal owner with executive sponsorship',
      'A network of departmental AI champions',
      'A tiered capability programme (literacy, fluency, mastery)',
      'A defined evolution path for roles being reshaped by AI',
    ],
  },
  {
    number: '05',
    name: 'The Measurement',
    summary: 'Outcomes tracked, learning loops in place, and the discipline of continuous iteration.',
    body: 'AI programmes that are not measured do not compound. The Measurement layer establishes the metrics that prove the thesis — usually a small number of P&L-tied indicators rather than a dashboard of vanity metrics — and the cadence of programme reviews that turn lessons into the next set of decisions. The metrics include both leading indicators (adoption, workflow coverage, capability maturity) and lagging indicators (cost reduction, revenue lift, time saved, error rates). The cadence is monthly at the working level and quarterly at the executive level. Without measurement, AI programmes drift. With measurement, they compound.',
    examples: [
      'A small set of P&L-tied outcome metrics',
      'Leading indicators tracked monthly (adoption, coverage, maturity)',
      'A quarterly executive review cadence',
      'A documented learning loop turning insight into the next set of decisions',
    ],
  },
]

const faqs = [
  {
    q: 'What is an AI operating system?',
    a: 'An AI operating system is the combined structure, workflows, governance, and internal capability that turn isolated AI tools into a coordinated, business-wide capability. It is the difference between owning AI tools and operating an AI-enabled business. The Lumii framework defines five components: the Thesis (commercial direction), the Guardrails (governance), the Workflows (operating model integration), the People (capability and ownership), and the Measurement (outcomes and iteration).',
  },
  {
    q: "What is the difference between AI strategy and an AI operating system?",
    a: 'An AI strategy is a plan. An AI operating system is the running structure that executes the plan. Strategy documents typically describe what a business intends to do with AI. An operating system is what actually delivers it — the workflows, the governance, the people, the measurement, and the iteration cadence. Many businesses have written an AI strategy. Far fewer have built the operating system that turns the strategy into outcomes.',
  },
  {
    q: 'Why do AI tools alone fail to deliver business value?',
    a: 'AI tools fail to deliver business value when they are deployed without the operating model around them. A Microsoft Copilot licence rolled out to 400 staff with no use cases, no training, and no workflow redesign produces 400 people using it to draft emails. The tool is fine. The system around it is missing. Every component of the operating system — the thesis, the guardrails, the workflows, the people, the measurement — has to be present and connected for AI investment to compound into commercial outcomes.',
  },
  {
    q: 'How long does it take to build an AI operating system?',
    a: 'For a mid-market business, the foundation of an AI operating system can be built in 90 days. The first 30 days establish the Thesis and the Guardrails. The next 30 days design the priority Workflows and identify the People who will own them. The final 30 days establish the Measurement cadence and run the first programme review. After 90 days, the operating system is in place and the programme begins to compound. Full maturity — every department covered, capability built across the team — typically takes 12 to 18 months.',
  },
  {
    q: 'Who owns an AI operating system inside a business?',
    a: 'A single named executive owner. The role title varies — Chief AI Officer, Head of AI, Director of Transformation, sometimes the CTO or COO with an explicit AI mandate — but the accountability sits with one person. That owner has the budget, the authority, and the P&L accountability for the programme. They are supported by a network of departmental AI champions and, in mid-market businesses, often by senior external advisory counsel for the first 12 to 18 months. The single most common cause of stalled AI programmes is the absence of this named owner.',
  },
  {
    q: 'How does an AI operating system handle shadow AI?',
    a: 'The Guardrails layer addresses shadow AI directly. The framework treats employee AI usage as a fact to be governed, not a behaviour to be banned. A sanctioned tool list gives staff approved options for high-value use cases. A data classification policy defines what categories of data can be used with which tools. Training closes the literacy gap that drives ungoverned usage. Monitoring makes shadow AI visible. The result is not less AI usage — it is AI usage that the business can see, manage, and scale safely.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The AI Operating System: A Framework for Mid-Market Businesses',
  description:
    'The structure, workflows, governance and capability that turn isolated AI tools into a coordinated, business-wide capability. The five-component Lumii AI Operating System framework.',
  author: {
    '@type': 'Person',
    name: 'Agata Adamczak',
    url: 'https://lumiiadvisory.com/about',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Lumii Advisory',
    url: 'https://lumiiadvisory.com',
  },
  datePublished: '2026-06-05',
  dateModified: '2026-06-05',
  url: 'https://lumiiadvisory.com/ai-operating-system',
  mainEntityOfPage: 'https://lumiiadvisory.com/ai-operating-system',
}

export default function AIOperatingSystemPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero — dark, large editorial */}
      <section className="bg-near-black pt-40 pb-28 px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <p className="font-body text-[12px] tracking-[0.25em] uppercase text-gold mb-8">
            The Lumii Framework
          </p>
          <h1 className="font-display font-light text-[clamp(44px,5.2vw,78px)] leading-[1.06] text-warm-white mb-10 tracking-[-0.01em] max-w-[1000px]">
            AI tools don't transform businesses. <em className="italic text-gold">AI operating systems do.</em>
          </h1>
          <p className="font-body text-[19px] leading-[1.75] text-warm-white/75 max-w-[680px] font-light mb-10">
            Most mid-market AI programmes fail for the same reason: businesses buy AI tools and call it a strategy. An AI operating system is what actually turns AI investment into commercial outcomes — the structure, workflows, governance, and capability that make adoption reach the P&L.
          </p>
          <div className="flex items-center gap-6 pt-8 border-t border-warm-white/10 max-w-[680px]">
            <p className="font-body text-[12px] tracking-[0.2em] uppercase text-warm-white/40">
              By Agata Adamczak · Founder, Lumii
            </p>
            <span className="text-warm-white/20">·</span>
            <p className="font-body text-[12px] text-warm-white/40">
              Last updated 5 June 2026
            </p>
          </div>
        </div>
      </section>

      {/* Direct answer / definition section — first 100 words for LLM citation */}
      <section className="bg-warm-white py-[clamp(70px,8vw,110px)] px-8 lg:px-12">
        <div className="max-w-[820px] mx-auto">
          <p className="font-body text-[12px] tracking-[0.22em] uppercase text-gold mb-6">
            Definition
          </p>
          <h2 className="font-display font-light text-[clamp(28px,3vw,40px)] leading-[1.2] text-near-black mb-8 tracking-[-0.005em]">
            What is an AI operating system?
          </h2>
          <p className="font-body text-[18px] leading-[1.85] text-near-black font-light mb-6">
            An <strong className="font-medium">AI operating system</strong> is the combined structure, workflows, governance, and internal capability that turn isolated AI tools into a coordinated, business-wide capability. It is the difference between owning AI tools and operating an AI-enabled business.
          </p>
          <p className="font-body text-[17px] leading-[1.85] text-slate-warm font-light mb-6">
            The Lumii AI Operating System framework defines five components: <strong className="text-near-black font-medium">the Thesis</strong> (commercial direction), <strong className="text-near-black font-medium">the Guardrails</strong> (governance), <strong className="text-near-black font-medium">the Workflows</strong> (operating model integration), <strong className="text-near-black font-medium">the People</strong> (capability and ownership), and <strong className="text-near-black font-medium">the Measurement</strong> (outcomes and iteration).
          </p>
          <p className="font-body text-[17px] leading-[1.85] text-slate-warm font-light">
            All five components must be present and connected. Programmes that have four out of five do not deliver four-fifths of the value — they typically deliver none. This is why most AI investment fails to reach the P&L.
          </p>
        </div>
      </section>

      {/* The contrarian frame — why tools alone fail */}
      <section className="bg-stone py-[clamp(70px,8vw,110px)] px-8 lg:px-12 border-y border-parchment">
        <div className="max-w-[1180px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
            <div>
              <p className="font-body text-[12px] tracking-[0.22em] uppercase text-gold mb-5">
                The Failure Pattern
              </p>
              <h2 className="font-display font-light text-[clamp(32px,3.6vw,48px)] leading-[1.1] text-near-black tracking-[-0.005em]">
                Why most AI programmes never reach <em className="italic text-gold">the P&L.</em>
              </h2>
            </div>
            <div className="space-y-7">
              <p className="font-body text-[17px] leading-[1.85] text-slate-warm font-light">
                A mid-market business buys Microsoft 365 Copilot for 400 staff. Three months later, usage has dropped to 12 percent. The tool is fine. The system around the tool is missing. There is no thesis, no governance, no workflow redesign, no internal owner, no measurement. The licence becomes a line item the CFO questions at the next budget review.
              </p>
              <p className="font-body text-[17px] leading-[1.85] text-slate-warm font-light">
                This is not a tool problem. It is an operating system problem. And it is the dominant failure pattern in mid-market AI adoption today.
              </p>
              <blockquote className="border-l-2 border-gold pl-7 py-2">
                <p className="font-display italic text-[20px] lg:text-[22px] font-light text-near-black leading-[1.5]">
                  "AI tools are commodities. The operating system around them is the moat."
                </p>
              </blockquote>
              <p className="font-body text-[17px] leading-[1.85] text-slate-warm font-light">
                Every business in your market can buy the same Copilot licence. Only the businesses that build the operating system around it will turn the licence into compounded commercial advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The five components — detailed sections */}
      <section className="bg-warm-white py-[clamp(80px,10vw,140px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <div className="text-center mb-20 max-w-[820px] mx-auto">
            <p className="font-body text-[12px] tracking-[0.25em] uppercase text-gold mb-5">
              The Framework
            </p>
            <h2 className="font-display font-light text-[clamp(36px,4.2vw,58px)] leading-[1.08] text-near-black mb-6 tracking-[-0.01em]">
              The five components of an<br />
              <em className="italic text-gold">AI operating system.</em>
            </h2>
            <p className="font-body text-[17px] leading-[1.8] text-slate-warm font-light">
              Every functional AI operating system has these five components in place and connected. Each is necessary; none is sufficient on its own.
            </p>
          </div>

          <div className="space-y-20 lg:space-y-28">
            {components.map((c, i) => (
              <div key={c.number} id={c.name.toLowerCase().replace(/\s+/g, '-')} className="grid grid-cols-1 lg:grid-cols-[0.4fr_1.6fr] gap-10 lg:gap-16 items-start">
                <div className="lg:sticky lg:top-32">
                  <span className="font-display text-[72px] lg:text-[88px] font-light text-gold/30 leading-none block mb-4">
                    {c.number}
                  </span>
                  <div className="w-10 h-px bg-gold mb-6" />
                  <h3 className="font-display font-light text-[clamp(28px,3vw,40px)] leading-[1.15] text-near-black tracking-[-0.005em] mb-4">
                    {c.name}
                  </h3>
                  <p className="font-body text-[16px] leading-[1.7] text-slate-warm font-light italic">
                    {c.summary}
                  </p>
                </div>
                <div>
                  <p className="font-body text-[17px] leading-[1.9] text-near-black/85 font-light mb-8">
                    {c.body}
                  </p>
                  <div className="bg-ivory border-l-2 border-gold/60 p-7 lg:p-8">
                    <p className="font-body text-[11px] tracking-[0.22em] uppercase text-gold mb-4">
                      What this looks like in practice
                    </p>
                    <ul className="space-y-3 list-none p-0 m-0">
                      {c.examples.map((ex, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className="font-display text-[14px] text-gold/70 flex-shrink-0 mt-1">
                            {String(j + 1).padStart(2, '0')}
                          </span>
                          <p className="font-body text-[15px] leading-[1.7] text-near-black font-light">
                            {ex}
                          </p>
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

      {/* How Lumii builds it — process strip */}
      <section className="bg-near-black py-[clamp(80px,10vw,140px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <div className="mb-16 max-w-[820px]">
            <p className="font-body text-[12px] tracking-[0.25em] uppercase text-gold mb-5">
              How Lumii builds it
            </p>
            <h2 className="font-display font-light text-[clamp(36px,4.2vw,56px)] leading-[1.08] text-warm-white mb-6 tracking-[-0.01em]">
              From zero to operating system in <em className="italic text-gold">90 days.</em>
            </h2>
            <p className="font-body text-[17px] leading-[1.8] text-warm-white/65 font-light">
              A structured 90-day engagement that installs the foundation of the operating system across all five components — designed for mid-market businesses ready to move from AI experiments to a coordinated programme.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                phase: 'Days 1–30',
                title: 'Thesis + Guardrails',
                body: 'Establish the commercial thesis with the executive team. Draft and implement the governance layer — sanctioned tool list, data classification, access controls. The foundation everything else rests on.',
              },
              {
                phase: 'Days 31–60',
                title: 'Workflows + People',
                body: 'Identify the priority workflows for redesign. Begin the operational rebuild of two or three high-value processes. Name the internal owner. Stand up the AI champion network across functions.',
              },
              {
                phase: 'Days 61–90',
                title: 'Measurement + Review',
                body: 'Set up the measurement layer with leading and lagging indicators. Run the first programme review with the executive team. Hand over the operating system to internal ownership with a documented playbook.',
              },
            ].map((p) => (
              <div key={p.phase} className="border border-warm-white/15 p-8 lg:p-10 hover:border-gold/40 transition-colors duration-300">
                <p className="font-body text-[12px] tracking-[0.2em] uppercase text-gold mb-5">
                  {p.phase}
                </p>
                <h3 className="font-display font-light text-[24px] leading-[1.25] text-warm-white mb-5">
                  {p.title}
                </h3>
                <p className="font-body text-[15px] leading-[1.8] text-warm-white/65 font-light">
                  {p.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <Link
              href="/work-with-us"
              className="font-body text-[14px] tracking-[0.1em] uppercase text-near-black bg-gold px-9 py-4 hover:bg-[#d4b47a] hover:-translate-y-px transition-all duration-200 inline-block whitespace-nowrap"
            >
              Explore Engagements →
            </Link>
            <Link
              href="/contact"
              className="font-body text-[13px] tracking-[0.1em] uppercase text-warm-white border-b border-warm-white/40 hover:border-warm-white pb-1 transition-colors duration-200 inline-block whitespace-nowrap"
            >
              Book a Discovery Call →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ block — answer-first, FAQPage schema injected */}
      <section className="bg-warm-white py-[clamp(80px,10vw,140px)] px-8 lg:px-12">
        <div className="max-w-[860px] mx-auto">
          <div className="mb-14">
            <p className="font-body text-[12px] tracking-[0.25em] uppercase text-gold mb-5">
              Questions answered
            </p>
            <h2 className="font-display font-light text-[clamp(34px,4vw,52px)] leading-[1.1] text-near-black tracking-[-0.01em]">
              The AI operating system, <em className="italic text-gold">explained.</em>
            </h2>
          </div>
          <div className="divide-y divide-parchment">
            {faqs.map((f, i) => (
              <div key={i} className="py-8 lg:py-10">
                <h3 className="font-display font-light text-[clamp(20px,2vw,26px)] leading-[1.3] text-near-black mb-5 tracking-[-0.005em]">
                  {f.q}
                </h3>
                <p className="font-body text-[16px] leading-[1.85] text-slate-warm font-light">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related reading */}
      <section className="bg-ivory py-[clamp(70px,8vw,110px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <p className="font-body text-[12px] tracking-[0.25em] uppercase text-gold mb-5">
            Related Reading
          </p>
          <h2 className="font-display font-light text-[clamp(28px,3vw,40px)] leading-[1.15] text-near-black mb-10 tracking-[-0.005em]">
            Go deeper on each component.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Shadow AI: The Governance Crisis',
                tag: 'Guardrails',
                href: '/insights/shadow-ai-mid-market',
              },
              {
                title: 'The AI Readiness Gap: Why Pilots Stall',
                tag: 'Workflows',
                href: '/insights/ai-readiness-gap',
              },
              {
                title: 'The New AI Org: Roles Being Created Now',
                tag: 'People',
                href: '/insights/emerging-ai-roles-future',
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group block border border-parchment bg-warm-white p-8 hover:border-gold/50 transition-colors duration-300"
              >
                <p className="font-body text-[12px] tracking-[0.2em] uppercase text-gold mb-4">
                  {item.tag}
                </p>
                <h3 className="font-display font-light text-[20px] leading-[1.3] text-near-black group-hover:text-charcoal transition-colors mb-6">
                  {item.title}
                </h3>
                <span className="font-body text-[12px] tracking-[0.15em] uppercase text-near-black group-hover:text-gold transition-colors">
                  Read →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
