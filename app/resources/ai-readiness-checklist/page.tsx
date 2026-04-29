'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'

/* ─── Data ────────────────────────────────────────────────────────────────── */

const DIMENSIONS = [
  {
    id: 'commercial',
    number: '01',
    title: 'Commercial Clarity',
    description:
      'Leaders care about return, risk, and accountability — not technology. This dimension assesses whether AI is tied to specific commercial outcomes your leadership team can quantify and own.',
    consequence: 'If this is weak, you don’t have an AI strategy — you have experiments.',
    questions: [
      'We have defined the specific business outcomes (revenue, cost, time saved, error reduction) we expect AI to deliver in the next 12–24 months.',
      'We can quantify a conservative 12-month commercial impact for at least one AI use case.',
      'AI is tied to existing strategic priorities, not run as a side project.',
      'Our leadership team has agreed on the level of risk we are willing to take with AI deployment.',
      'We have allocated a dedicated budget for AI initiatives in the next 12 months.',
    ],
  },
  {
    id: 'use-cases',
    number: '02',
    title: 'Use Case Discipline',
    description:
      'AI fails most often from too many use cases and no sequencing. The businesses that succeed pick the few high-leverage opportunities, attach numbers to them, and execute one at a time.',
    consequence: 'If this is weak, you’ll stay in exploration. You won’t reach impact.',
    questions: [
      'We have mapped the business processes that are most repetitive, time-consuming, or error-prone.',
      'We have a prioritised list of 3–5 high-impact AI use cases with estimated business value attached to each.',
      'Each AI use case is tied to a specific team and measurable metric (time saved, revenue, error rate).',
      'We have documented standard operating procedures that could be used to configure or train AI tools.',
      'We have run at least one AI pilot with defined success criteria and measured results.',
    ],
  },
  {
    id: 'ownership',
    number: '03',
    title: 'Execution Ownership',
    description:
      'Programmes without a single accountable owner stall at pilot stage. Ownership is the single biggest predictor of whether AI moves from experiment to embedded capability.',
    consequence: 'If this is weak, you will stall at pilot stage.',
    questions: [
      'We have a single, named accountable owner for AI outcomes — not a committee.',
      'We have active executive sponsorship for AI adoption at board or C-suite level.',
      'Our teams know what changes in their workflow over the next 30–60 days.',
      'AI is embedded in how work gets done, not just which tools sit on the desktop.',
      'Our leadership actively communicates AI goals and progress to the wider team.',
    ],
  },
  {
    id: 'data',
    number: '04',
    title: 'Data & Systems',
    description:
      'AI is only as good as the data that powers it. Mid-market businesses with siloed, inconsistent, or inaccessible data consistently underperform — regardless of the tools they invest in.',
    consequence: 'If this is weak, AI will produce output, not impact.',
    questions: [
      'Our core business data is centrally stored and accessible — not siloed across spreadsheets and legacy systems.',
      'We have a single, unified view of our customer or operational data — not multiple disconnected versions across systems.',
      'We have documented data governance policies covering quality, ownership, and privacy.',
      'Our data is regularly cleaned, labelled, and structured in a consistent format.',
      'We have a clear understanding of which data we can and cannot use to train or feed AI systems.',
    ],
  },
  {
    id: 'technology',
    number: '05',
    title: 'Technology & Tools',
    description:
      'The right technology foundation is not the most advanced stack — it is one that is integrated, cloud-capable, and maintainable. Without it, AI tools either fail to deploy or fail to scale.',
    consequence: 'If this is weak, AI tools will get stuck in pilot, not move into production.',
    questions: [
      'Our current tech stack includes cloud infrastructure (AWS, Azure, or Google Cloud).',
      'We have evaluated and deployed at least one AI tool with measurable adoption beyond casual experimentation.',
      'Our key systems are integrated via APIs rather than requiring manual data transfer between platforms.',
      'We have a structured process for evaluating and onboarding new technology.',
      'Our IT team or external partner is capable of supporting AI tool deployment and maintenance.',
    ],
  },
  {
    id: 'capability',
    number: '06',
    title: 'Capability & Skills',
    description:
      'Technology is the easy part. People are where AI programmes succeed or fail. Capability is not the same as buying training — it is whether AI changes how work gets done, supported by ongoing learning and structured rollout.',
    consequence: 'If this is weak, you’re renting intelligence, not building it.',
    questions: [
      'We have access to AI or data expertise — internal or external — that we can call on for advice and implementation.',
      'AI literacy training is part of our regular learning programme, not a one-off event.',
      'Our employees understand how AI can assist their specific roles and day-to-day work.',
      'We have involved frontline staff in identifying AI use cases and testing solutions.',
      'We have a structured approach to rolling out new tools and processes — training, communication, ongoing support — not just announcing and hoping for the best.',
    ],
  },
  {
    id: 'governance',
    number: '07',
    title: 'Risk & Governance',
    description:
      'AI risk is not just a compliance question — it is a business-continuity question. The biggest governance issue in mid-market today is shadow AI: employees using tools and inputting data without anyone knowing what is happening or where the data goes.',
    consequence: 'If this is weak, risk will slow your adoption more than regulation will.',
    questions: [
      'Our organisation has an AI ethics policy or guidelines for responsible use.',
      'We have clear policies on which AI tools employees are permitted to use, and what company or customer data they can input into them.',
      'We have processes to review AI outputs for bias, accuracy, and fairness before acting on them.',
      'We have a risk register that includes AI-specific risks such as hallucinations, data misuse, or reputational harm.',
      'We have a process to explain AI-driven decisions to customers or regulators if required.',
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
      'You are not AI-ready. Any investment now will underperform — and the gap to your peers is widening every quarter you delay. This is not a failing; it is a starting point. The decision in front of you is whether to begin building capability deliberately or keep paying the compounding cost of inaction.',
    whatThisMeans: {
      startNow: [
        'Commission a 4-week AI readiness assessment to establish a clear baseline.',
        'Appoint a single accountable internal owner — name, mandate, time.',
      ],
      stopDoing: [
        'Stop running uncoordinated tool experiments across teams.',
        'Stop waiting for "the right time" — the technology is mature; the gap is not closing on its own.',
      ],
      costOfInaction:
        '12 months from now you will be 18 months behind any competitor who started today. The gap compounds — capability, talent, customer expectations, and operating cost all move against you.',
    },
  },
  {
    label: 'AI Aware',
    range: [27, 52],
    colour: 'text-amber-600',
    barColour: 'bg-amber-400',
    description:
      'You will get isolated wins, but you will not reach scale. The risk at this stage is mistaking activity for progress — broad AI access mistaken for an AI strategy, training mistaken for capability, pilots mistaken for production. The priority now is sequencing.',
    whatThisMeans: {
      startNow: [
        'Pick one high-value use case, attach a number to it, and run it as a focused 12-week pilot with defined success metrics.',
        'Invest in data governance and a single source of truth before scaling AI tooling further.',
      ],
      stopDoing: [
        'Stop generating new ideas. Stop training without changing workflows.',
        'Stop pretending broad ChatGPT access is an AI strategy.',
      ],
      costOfInaction:
        '12 months of "exploring" will leave you with nothing to show your board. Your peers will move from awareness to active deployment — and the gap will not close on its own.',
    },
  },
  {
    label: 'AI Active',
    range: [53, 79],
    colour: 'text-blue-600',
    barColour: 'bg-blue-500',
    description:
      'You can drive measurable impact, if execution is focused. Strong foundations are in place and pilots are showing results, but enterprise-wide adoption is still ahead of you. The biggest risk now is too many use cases and not enough sequencing.',
    whatThisMeans: {
      startNow: [
        'Scale your highest-performing pilots into production with formal measurement and governance.',
        'Establish an AI Centre of Excellence (or steering group) with a clear remit and reporting line.',
      ],
      stopDoing: [
        'Stop scaling without measurement. Stop adding new pilots before existing ones reach production.',
        'Stop assuming culture follows tooling — it does not.',
      ],
      costOfInaction:
        'Your existing pilots will plateau. The team that built early momentum will move on. New pilots will inherit the governance gaps the first ones revealed — and so will the next ones.',
    },
  },
  {
    label: 'AI Leader',
    range: [80, 105],
    colour: 'text-green-700',
    barColour: 'bg-green-500',
    description:
      'You are positioned to compound advantage. AI is embedded in your strategy, your operations, and your culture, and you are seeing measurable returns. The only thing that takes that away from you now is complacency.',
    whatThisMeans: {
      startNow: [
        'Treat AI as a continuous capability, not a programme — invest in advanced governance, bias monitoring, and emerging-capability scanning.',
        'Use your AI lead to attract talent and build external authority — case studies, published thinking, sector leadership.',
      ],
      stopDoing: [
        'Stop assuming current advantage is permanent. Stop under-investing in talent retention.',
        'Stop letting AI reporting become routine — keep board engagement live.',
      ],
      costOfInaction:
        '18 months is the half-life of an AI advantage. Without active investment, your lead becomes parity. The organisations that sustain leadership treat it as a continuous capability, not a project to complete.',
    },
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
                    <p className="font-body text-[13px] text-slate-warm font-light leading-[1.7] mb-3">{d.description}</p>
                    <p className="font-display text-[13px] italic font-light text-gold leading-[1.55]">
                      {d.consequence}
                    </p>
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
                    <p className="font-display text-[14px] italic font-light text-gold leading-[1.6] mt-3">
                      {dim.consequence}
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

          {/* What this means for your business */}
          <section className="bg-ivory py-[clamp(60px,8vw,100px)] px-8 lg:px-12 print:py-12">
            <div className="max-w-[1180px] mx-auto">
              <p className="font-body text-[10px] tracking-[0.25em] uppercase text-ash mb-4">
                The Decision in Front of You
              </p>
              <h2 className="font-display font-light text-[clamp(28px,3vw,40px)] text-near-black leading-[1.2] mb-10">
                What this means for your business
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                {/* Start now */}
                <div className="bg-warm-white border border-parchment p-7 flex flex-col">
                  <p className="font-body text-[10px] tracking-[0.25em] uppercase text-gold mb-4 flex items-center gap-3">
                    <span className="w-6 h-px bg-gold block" />
                    Start Now
                  </p>
                  <p className="font-display text-[18px] font-light text-near-black leading-[1.3] mb-5">
                    Your highest-leverage moves
                  </p>
                  <ul className="space-y-3 list-none p-0 m-0">
                    {maturity.whatThisMeans.startNow.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="font-display text-[12px] text-gold/60 tracking-[0.08em] flex-shrink-0 mt-1">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <p className="font-body text-[14px] text-near-black font-light leading-[1.7]">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stop doing */}
                <div className="bg-warm-white border border-parchment p-7 flex flex-col">
                  <p className="font-body text-[10px] tracking-[0.25em] uppercase text-charcoal mb-4 flex items-center gap-3">
                    <span className="w-6 h-px bg-charcoal block" />
                    Stop Doing
                  </p>
                  <p className="font-display text-[18px] font-light text-near-black leading-[1.3] mb-5">
                    The behaviours holding you back
                  </p>
                  <ul className="space-y-3 list-none p-0 m-0">
                    {maturity.whatThisMeans.stopDoing.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="font-body text-[14px] text-charcoal/60 flex-shrink-0 mt-0.5">
                          ×
                        </span>
                        <p className="font-body text-[14px] text-near-black font-light leading-[1.7]">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cost of inaction */}
                <div className="bg-near-black border border-near-black p-7 flex flex-col">
                  <p className="font-body text-[10px] tracking-[0.25em] uppercase text-gold mb-4 flex items-center gap-3">
                    <span className="w-6 h-px bg-gold block" />
                    Cost of Inaction
                  </p>
                  <p className="font-display text-[18px] font-light text-warm-white leading-[1.3] mb-5">
                    What 12 months of doing nothing looks like
                  </p>
                  <p className="font-body text-[14px] text-warm-white/75 font-light leading-[1.7]">
                    {maturity.whatThisMeans.costOfInaction}
                  </p>
                </div>
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
