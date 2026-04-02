'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'

/* ─── Data ────────────────────────────────────────────────────────────────── */

const DIMENSIONS = [
  {
    id: 'strategy',
    number: '01',
    title: 'Leadership & Strategy',
    description:
      'AI programmes without executive alignment and a clear strategy rarely survive first contact with implementation. This dimension assesses whether your leadership team has the vision, mandate, and plan to lead AI adoption effectively.',
    questions: [
      'Our leadership team has a defined AI strategy that is aligned to our business goals.',
      'We have allocated a dedicated budget for AI initiatives in the next 12 months.',
      'There is active executive sponsorship for AI adoption at board or C-suite level.',
      'We have conducted a formal review of AI opportunities specific to our industry.',
      'We track competitor AI adoption and benchmark our progress against peers.',
    ],
  },
  {
    id: 'data',
    number: '02',
    title: 'Data & Infrastructure',
    description:
      'AI is only as good as the data that powers it. Organisations with siloed, inconsistent, or inaccessible data consistently underperform in AI adoption — regardless of the tools they invest in.',
    questions: [
      'Our core business data is centrally stored and accessible (not siloed across spreadsheets and legacy systems).',
      'We have documented data governance policies covering quality, ownership, and privacy.',
      'Our data is regularly cleaned, labelled, and structured in a consistent format.',
      'We have the infrastructure to collect and process data in near real-time.',
      'We are compliant with relevant data privacy regulations (GDPR, Australian Privacy Act, etc.).',
    ],
  },
  {
    id: 'technology',
    number: '03',
    title: 'Technology & Tools',
    description:
      'The right technology foundation does not mean the most advanced stack — it means a stack that is integrated, cloud-capable, and maintainable. This dimension assesses your current technical readiness for AI integration.',
    questions: [
      'Our current tech stack includes cloud infrastructure (AWS, Azure, or Google Cloud).',
      'We already use AI-powered tools today, even off-the-shelf products like Microsoft Copilot or Salesforce Einstein.',
      'Our key systems are integrated via APIs rather than requiring manual data transfer between platforms.',
      'We have a structured process for evaluating and onboarding new technology.',
      'Our IT team or external partner is capable of supporting AI tool deployment and maintenance.',
    ],
  },
  {
    id: 'people',
    number: '04',
    title: 'People & Skills',
    description:
      'Technology is the easy part. People are where most AI programmes succeed or fail. This dimension assesses AI literacy, capability, ownership, and your approach to reskilling across the organisation.',
    questions: [
      'Our team includes someone with AI, data science, or machine learning expertise.',
      'We have provided AI literacy training to non-technical staff in the last 12 months.',
      'Employees understand how AI can assist their specific roles and day-to-day work.',
      'There is a clear owner or internal champion for AI initiatives within the business.',
      'We have a structured approach to reskilling staff whose roles may change as a result of AI.',
    ],
  },
  {
    id: 'process',
    number: '05',
    title: 'Process & Operations',
    description:
      'AI delivers the highest ROI when applied to processes that are well-defined, measurable, and genuinely time-consuming or error-prone. This dimension assesses how well you have identified and documented those opportunities.',
    questions: [
      'We have mapped the business processes that are most repetitive, time-consuming, or error-prone.',
      'We have identified specific processes where AI automation could deliver measurable ROI.',
      'We have documented standard operating procedures (SOPs) that could be used to configure or train AI tools.',
      'We measure operational KPIs (productivity, error rates, turnaround time) that AI could improve.',
      'We have run at least one AI pilot or proof-of-concept project, even informally.',
    ],
  },
  {
    id: 'governance',
    number: '06',
    title: 'Ethics & Governance',
    description:
      'As AI becomes embedded in business decisions, the risk of bias, error, and regulatory exposure increases. This dimension assesses whether your organisation has the frameworks to deploy AI responsibly.',
    questions: [
      'Our organisation has an AI ethics policy or guidelines for responsible use.',
      'There are processes to review AI outputs for bias, accuracy, and fairness before acting on them.',
      'We have a risk register that includes AI-specific risks such as hallucinations, data misuse, or reputational harm.',
      'Customer data used in AI systems is protected with appropriate consent and security controls.',
      'We have a process to explain AI-driven decisions to customers or regulators if required.',
    ],
  },
  {
    id: 'culture',
    number: '07',
    title: 'Culture & Change',
    description:
      'Organisations that successfully scale AI have one thing in common: a culture that embraces learning, tolerates experimentation, and communicates openly about change. Technology without cultural readiness rarely lands.',
    questions: [
      'There is a culture of experimentation and learning from failure in our organisation.',
      'Employees generally see AI as an opportunity rather than a threat to their jobs.',
      'Leadership actively communicates AI goals and progress to the wider team.',
      'We have involved frontline staff in identifying AI use cases and testing solutions.',
      'We celebrate and share early AI wins internally to build momentum and confidence.',
    ],
  },
]

const SCORE_OPTIONS = [
  { label: 'Not yet', value: 0 },
  { label: 'Partially', value: 1 },
  { label: 'Mostly', value: 2 },
  { label: 'Fully in place', value: 3 },
]

const MATURITY_BANDS = [
  {
    label: 'AI Unaware',
    range: [0, 26],
    colour: 'text-red-600',
    barColour: 'bg-red-400',
    description:
      'Few AI foundations are in place across your organisation. This is not a failing — it is a starting point. The risk lies in inaction: the businesses that begin building AI capability now will have a significant and compounding advantage over those that wait. The priority at this stage is leadership alignment, a data audit, and identifying one high-value AI use case to pilot.',
    actions: [
      'Commission an AI readiness assessment to establish a clear baseline',
      'Appoint an internal AI champion with mandate and time',
      'Conduct a data audit before committing to AI tooling',
      'Begin AI literacy conversations at leadership level',
    ],
  },
  {
    label: 'AI Aware',
    range: [27, 52],
    colour: 'text-amber-600',
    barColour: 'bg-amber-400',
    description:
      'You understand the potential of AI and have begun exploring the landscape, but the infrastructure, skills, and strategy to move beyond exploration are not yet fully in place. This is a pivotal stage — organisations that invest in the right foundations now will accelerate rapidly. The priority is closing the gaps between awareness and action.',
    actions: [
      'Develop a prioritised AI use case register with business cases',
      'Invest in data governance and infrastructure before scaling AI tooling',
      'Build a structured AI training programme for key teams',
      'Define and commit to success metrics for your first AI deployment',
    ],
  },
  {
    label: 'AI Active',
    range: [53, 79],
    colour: 'text-blue-600',
    barColour: 'bg-blue-500',
    description:
      'Strong foundations are in place. You are implementing AI in pockets of the business and seeing early results, but you have not yet achieved consistent, enterprise-wide adoption. The priority now is scaling what is working, addressing the governance and capability gaps that are slowing you down, and building the measurement systems that will sustain momentum.',
    actions: [
      'Scale proven pilots across additional teams and functions',
      'Strengthen AI governance and ethics frameworks',
      'Implement a capability-building programme to elevate the whole organisation',
      'Establish a formal AI Centre of Excellence or steering group',
    ],
  },
  {
    label: 'AI Leader',
    range: [80, 105],
    colour: 'text-green-700',
    barColour: 'bg-green-500',
    description:
      'You are ahead of most peers. AI is embedded in your strategy, your operations, and your culture — and you are seeing measurable returns. The priority now is optimisation, governance at scale, and staying ahead as the technology and competitive landscape continue to evolve. The risk at this stage is complacency: the organisations that sustain AI leadership are those that treat it as a continuous capability, not a project to complete.',
    actions: [
      'Optimise and measure AI programmes against strategic KPIs',
      'Invest in advanced governance, bias monitoring, and auditability',
      'Explore emerging AI capabilities relevant to your sector',
      'Share learnings externally to build brand and attract AI talent',
    ],
  },
]

/* ─── Component ───────────────────────────────────────────────────────────── */

export default function AIReadinessChecklist() {
  const TOTAL_QUESTIONS = DIMENSIONS.reduce((acc, d) => acc + d.questions.length, 0)
  const MAX_SCORE = TOTAL_QUESTIONS * 3

  const [scores, setScores] = useState<Record<string, number[]>>(
    Object.fromEntries(DIMENSIONS.map((d) => [d.id, new Array(d.questions.length).fill(-1)]))
  )
  const [submitted, setSubmitted] = useState(false)
  const resultsRef = useRef<HTMLDivElement>(null)

  const setScore = (dimensionId: string, questionIdx: number, value: number) => {
    setScores((prev) => {
      const updated = [...prev[dimensionId]]
      updated[questionIdx] = value
      return { ...prev, [dimensionId]: updated }
    })
  }

  const totalAnswered = Object.values(scores).reduce(
    (acc, arr) => acc + arr.filter((v) => v >= 0).length,
    0
  )
  const totalScore = Object.values(scores).reduce(
    (acc, arr) => acc + arr.filter((v) => v >= 0).reduce((s, v) => s + v, 0),
    0
  )
  const allAnswered = totalAnswered === TOTAL_QUESTIONS

  const maturity = MATURITY_BANDS.find(
    (b) => totalScore >= b.range[0] && totalScore <= b.range[1]
  ) ?? MATURITY_BANDS[0]

  const dimensionScores = DIMENSIONS.map((d) => {
    const answered = scores[d.id].filter((v) => v >= 0)
    const dimScore = answered.reduce((s, v) => s + v, 0)
    const dimMax = d.questions.length * 3
    return { ...d, score: dimScore, max: dimMax, pct: Math.round((dimScore / dimMax) * 100) }
  })

  const handleSubmit = () => {
    if (!allAnswered) return
    setSubmitted(true)
    setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: 'smooth' }), 100)
  }

  const handleReset = () => {
    setScores(Object.fromEntries(DIMENSIONS.map((d) => [d.id, new Array(d.questions.length).fill(-1)])))
    setSubmitted(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const progressPct = Math.round((totalAnswered / TOTAL_QUESTIONS) * 100)

  return (
    <>
      {/* Hero / intro */}
      <section className="bg-near-black pt-40 pb-24 px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Link
                href="/resources"
                className="font-body text-[11px] tracking-[0.2em] uppercase text-gold/70 hover:text-gold transition-colors"
              >
                ← Resources
              </Link>
            </div>
            <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-4">
              Free Assessment
            </p>
            <h1 className="font-display font-light text-[clamp(40px,5vw,68px)] leading-[1.1] text-warm-white mb-6 tracking-[-0.01em]">
              AI Readiness<br />
              <em className="italic text-gold">Checklist</em>
            </h1>
            <p className="font-body text-[16px] leading-[1.8] text-warm-white/60 font-light">
              Assess your organisation across 7 critical dimensions. Answer honestly — this is for your eyes only. At the end you will receive a scored maturity result with guidance on where to focus first.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: '7', label: 'Dimensions' },
              { value: '35', label: 'Questions' },
              { value: '15 min', label: 'To complete' },
            ].map((stat) => (
              <div key={stat.label} className="bg-warm-white/5 border border-warm-white/10 p-6 text-center">
                <p className="font-display font-light text-[36px] text-gold leading-none mb-2">{stat.value}</p>
                <p className="font-body text-[11px] tracking-[0.15em] uppercase text-warm-white/40">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO landing content — visible to search engines and AI tools */}
      <section className="bg-ivory py-16 px-8 lg:px-12">
        <div className="max-w-[860px] mx-auto">
          <p className="font-body text-[11px] tracking-[0.25em] uppercase text-gold mb-4">About this assessment</p>
          <h2 className="font-display font-light text-[clamp(24px,2.5vw,34px)] text-near-black leading-[1.25] mb-6">
            What the AI Readiness Checklist measures
          </h2>
          <p className="font-body text-[15px] leading-[1.85] text-slate-warm font-light mb-6">
            The Lumii AI Readiness Checklist is designed to give business leaders an honest, evidence-based view of their organisation's readiness to adopt and benefit from artificial intelligence. It assesses seven dimensions that our advisory practice has identified as the critical determinants of AI programme success — spanning strategy, infrastructure, people, and governance.
          </p>
          <p className="font-body text-[15px] leading-[1.85] text-slate-warm font-light mb-10">
            Each dimension contains five questions rated on a four-point scale. Scores are totalled across all 35 questions to produce a maturity band: AI Unaware, AI Aware, AI Active, or AI Leader. Each band comes with a description of your current position and a set of prioritised actions to move forward.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {DIMENSIONS.map((d) => (
              <div key={d.id} className="bg-warm-white border border-parchment p-6">
                <div className="flex items-start gap-4">
                  <span className="font-display text-[13px] text-gold/50 tracking-[0.08em] flex-shrink-0 mt-0.5">{d.number}</span>
                  <div>
                    <p className="font-body text-[12px] tracking-[0.15em] uppercase text-near-black font-medium mb-2">{d.title}</p>
                    <p className="font-body text-[13px] text-slate-warm font-light leading-[1.7]">{d.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Progress bar */}
      {!submitted && (
        <div className="sticky top-[64px] z-40 bg-warm-white/95 backdrop-blur-sm border-b border-parchment px-8 lg:px-12 py-3">
          <div className="max-w-[860px] mx-auto flex items-center gap-4">
            <div className="flex-1 bg-parchment h-1.5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gold transition-all duration-500 rounded-full"
                style={{ width: `${progressPct}%` }}
              />
            </div>
            <span className="font-body text-[12px] text-ash whitespace-nowrap">
              {totalAnswered} / {TOTAL_QUESTIONS} answered
            </span>
          </div>
        </div>
      )}

      {/* Questions */}
      {!submitted && (
        <section className="bg-warm-white py-[clamp(60px,8vw,100px)] px-8 lg:px-12">
          <div className="max-w-[860px] mx-auto space-y-16">
            {DIMENSIONS.map((dim) => (
              <div key={dim.id}>
                {/* Dimension header */}
                <div className="flex items-start gap-4 mb-8 pb-6 border-b border-parchment">
                  <span className="font-display text-[40px] leading-none text-gold/20 font-light select-none flex-shrink-0">
                    {dim.number}
                  </span>
                  <div>
                    <h2 className="font-display font-light text-[clamp(22px,2.5vw,30px)] text-near-black leading-[1.2]">
                      {dim.title}
                    </h2>
                    <p className="font-body text-[14px] text-slate-warm font-light leading-[1.75] mt-2">
                      {dim.description}
                    </p>
                  </div>
                </div>

                {/* Questions */}
                <div className="space-y-8">
                  {dim.questions.map((question, qIdx) => {
                    const current = scores[dim.id][qIdx]
                    return (
                      <div key={qIdx}>
                        <p className="font-body text-[15px] text-near-black font-light leading-[1.7] mb-4">
                          <span className="text-gold/60 mr-2 font-display text-[13px]">
                            {String(qIdx + 1).padStart(2, '0')}
                          </span>
                          {question}
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                          {SCORE_OPTIONS.map((opt) => (
                            <button
                              key={opt.value}
                              onClick={() => setScore(dim.id, qIdx, opt.value)}
                              className={`py-3 px-4 font-body text-[11px] tracking-[0.1em] uppercase border transition-all duration-150 text-center ${
                                current === opt.value
                                  ? 'bg-near-black text-warm-white border-near-black'
                                  : 'text-slate-warm border-parchment hover:border-charcoal hover:text-near-black'
                              }`}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}

            {/* Submit */}
            <div className="pt-8 border-t border-parchment flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <p className="font-body text-[14px] text-ash font-light">
                {allAnswered
                  ? 'All questions answered. Ready to see your results.'
                  : `${TOTAL_QUESTIONS - totalAnswered} question${TOTAL_QUESTIONS - totalAnswered !== 1 ? 's' : ''} remaining.`}
              </p>
              <button
                onClick={handleSubmit}
                disabled={!allAnswered}
                className={`font-body text-[12px] tracking-[0.1em] uppercase px-10 py-4 transition-all duration-200 ${
                  allAnswered
                    ? 'bg-near-black text-warm-white hover:-translate-y-px cursor-pointer'
                    : 'bg-parchment text-ash cursor-not-allowed'
                }`}
              >
                See My Results →
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Results */}
      {submitted && (
        <div ref={resultsRef}>
          {/* Overall score */}
          <section className="bg-near-black py-[clamp(80px,10vw,140px)] px-8 lg:px-12 print:py-12">
            <div className="max-w-[1180px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div>
                  <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-6">
                    Your Results
                  </p>
                  <div className="mb-6">
                    <p className="font-body text-[14px] text-warm-white/50 uppercase tracking-[0.15em] mb-2">
                      Maturity Level
                    </p>
                    <h2 className={`font-display font-light text-[clamp(42px,5vw,64px)] leading-[1.1] ${maturity.colour.replace('text-', 'text-')}`}>
                      {maturity.label}
                    </h2>
                  </div>
                  <div className="flex items-end gap-4 mb-8">
                    <span className="font-display font-light text-[80px] leading-none text-warm-white">
                      {totalScore}
                    </span>
                    <span className="font-body text-[18px] text-warm-white/40 pb-4">/ {MAX_SCORE}</span>
                  </div>
                  <div className="w-full bg-warm-white/10 h-2 rounded-full overflow-hidden mb-8">
                    <div
                      className={`h-full ${maturity.barColour} transition-all duration-1000 rounded-full`}
                      style={{ width: `${Math.round((totalScore / MAX_SCORE) * 100)}%` }}
                    />
                  </div>
                  <p className="font-body text-[15px] leading-[1.85] text-warm-white/70 font-light">
                    {maturity.description}
                  </p>
                </div>

                {/* Dimension breakdown */}
                <div className="space-y-4">
                  <p className="font-body text-[10px] tracking-[0.25em] uppercase text-ash mb-6">
                    By Dimension
                  </p>
                  {dimensionScores.map((d) => (
                    <div key={d.id}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-body text-[12px] text-warm-white/70 uppercase tracking-[0.1em]">
                          {d.title}
                        </span>
                        <span className="font-body text-[12px] text-warm-white/50">
                          {d.score}/{d.max}
                        </span>
                      </div>
                      <div className="w-full bg-warm-white/10 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gold transition-all duration-700 rounded-full"
                          style={{ width: `${d.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Priority actions */}
          <section className="bg-ivory py-[clamp(60px,8vw,100px)] px-8 lg:px-12 print:py-12">
            <div className="max-w-[1180px] mx-auto">
              <p className="font-body text-[10px] tracking-[0.25em] uppercase text-ash mb-4">
                Recommended Next Steps
              </p>
              <h2 className="font-display font-light text-[clamp(28px,3vw,40px)] text-near-black leading-[1.2] mb-10">
                Where to focus first
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {maturity.actions.map((action, idx) => (
                  <div key={idx} className="bg-warm-white border border-parchment p-6 flex items-start gap-4">
                    <span className="font-display text-[22px] text-gold/30 leading-none flex-shrink-0 font-light">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <p className="font-body text-[14px] text-near-black font-light leading-[1.75]">
                      {action}
                    </p>
                  </div>
                ))}
              </div>

              {/* Weak dimensions */}
              {dimensionScores.filter((d) => d.pct < 50).length > 0 && (
                <div className="bg-warm-white border border-parchment p-8 mb-10">
                  <p className="font-body text-[11px] tracking-[0.2em] uppercase text-gold mb-4">
                    Areas Needing Attention
                  </p>
                  <p className="font-body text-[14px] text-slate-warm font-light leading-[1.8] mb-6">
                    The following dimensions scored below 50% and represent your highest-priority areas:
                  </p>
                  <div className="space-y-3">
                    {dimensionScores
                      .filter((d) => d.pct < 50)
                      .sort((a, b) => a.pct - b.pct)
                      .map((d) => (
                        <div key={d.id} className="flex items-center justify-between py-2 border-b border-parchment last:border-0">
                          <span className="font-body text-[14px] text-near-black">{d.title}</span>
                          <span className="font-body text-[13px] text-ash">{d.pct}%</span>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 print:hidden">
                <button
                  onClick={() => window.print()}
                  className="font-body text-[12px] tracking-[0.1em] uppercase text-near-black border border-near-black px-8 py-4 hover:bg-near-black hover:text-warm-white transition-all duration-200"
                >
                  Print / Save as PDF
                </button>
                <button
                  onClick={handleReset}
                  className="font-body text-[12px] tracking-[0.1em] uppercase text-ash border border-parchment px-8 py-4 hover:border-near-black hover:text-near-black transition-all duration-200"
                >
                  Start Again
                </button>
                <Link
                  href="/contact"
                  className="font-body text-[12px] tracking-[0.1em] uppercase text-warm-white bg-gold px-8 py-4 hover:-translate-y-px transition-all duration-200 inline-block text-center"
                >
                  Discuss Your Results with Agata →
                </Link>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Print styles */}
      <style jsx global>{`
        @media print {
          nav, footer, .print\\:hidden { display: none !important; }
          body { font-size: 12px; }
          section { break-inside: avoid; }
        }
      `}</style>
    </>
  )
}
