'use client'

import { useState, useRef } from 'react'
import { TextLink } from '@/components/lumii/primitives'
import { Breadcrumbs, StatRow } from '@/components/lumii/seo'

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
  const weakDimensions = dimensionScores.filter((d) => d.pct < 50).sort((a, b) => a.pct - b.pct)

  return (
    <div className="lumii">
      <section className="page-intro section">
        <Breadcrumbs
          trail={[
            { name: 'Resources', href: '/resources' },
            { name: 'AI readiness checklist', href: '/resources/ai-readiness-checklist' },
          ]}
        />
        <p className="eyebrow">FREE ASSESSMENT</p>
        <h1>AI Readiness Checklist</h1>
        <p className="page-lead">
          Assess your organisation across 7 critical dimensions. Answer honestly — this is for your
          eyes only. At the end you will receive a scored maturity result with guidance on where to
          focus first.
        </p>
        <StatRow
          stats={[
            { value: '7', label: 'Dimensions' },
            { value: '35', label: 'Questions' },
            { value: '15 min', label: 'To complete' },
          ]}
        />
      </section>

      {/* Landing content — visible to search engines and AI tools */}
      <section className="section tint print-hide" aria-labelledby="measures-title">
        <div className="split">
          <div>
            <p className="eyebrow">ABOUT THIS ASSESSMENT</p>
            <h2 id="measures-title">What the AI Readiness Checklist measures.</h2>
          </div>
          <div className="prose">
            <p>
              The Lumii AI Readiness Checklist gives business leaders an honest, evidence-based view of
              their organisation’s readiness to adopt and benefit from artificial intelligence. It
              assesses seven dimensions I’ve found to be the critical determinants of AI programme
              success — spanning strategy, infrastructure, people, and governance.
            </p>
            <p>
              Each dimension contains five questions rated on a four-point scale. Scores are totalled
              across all 35 questions to produce a maturity band: AI Unaware, AI Aware, AI Active, or AI
              Leader. Each band comes with a description of your current position and a set of
              prioritised actions to move forward.
            </p>
          </div>
        </div>
        <div className="card-grid two stack-top">
          {DIMENSIONS.map((d) => (
            <article className="content-card" key={d.id}>
              <p className="eyebrow">{d.number}</p>
              <h3>{d.title}</h3>
              <p>{d.description}</p>
              <p className="consequence">{d.consequence}</p>
            </article>
          ))}
        </div>
      </section>

      {!submitted && (
        <div className="quiz-progress print-hide" role="status" aria-live="polite">
          <div className="progress-track" aria-hidden="true">
            <div className="progress-fill" style={{ width: `${progressPct}%` }} />
          </div>
          <span>
            {totalAnswered} / {TOTAL_QUESTIONS} answered
          </span>
        </div>
      )}

      {!submitted && (
        <section className="section" aria-label="Assessment questions">
          <div className="quiz">
            {DIMENSIONS.map((dim) => (
              <fieldset key={dim.id} className="quiz-dimension">
                <legend>
                  <span className="quiz-number" aria-hidden="true">
                    {dim.number}
                  </span>
                  <span className="quiz-title">{dim.title}</span>
                </legend>
                <p className="form-note">{dim.description}</p>
                <p className="consequence">{dim.consequence}</p>

                {dim.questions.map((question, qIdx) => {
                  const current = scores[dim.id][qIdx]
                  const qid = `${dim.id}-${qIdx}`
                  return (
                    <div className="quiz-question" key={qIdx} role="group" aria-labelledby={qid}>
                      <p id={qid}>
                        <span className="number">{String(qIdx + 1).padStart(2, '0')}</span> {question}
                      </p>
                      <div className="options">
                        {SCORE_OPTIONS.map((opt) => (
                          <button
                            key={opt.value}
                            type="button"
                            className="option"
                            aria-pressed={current === opt.value}
                            onClick={() => setScore(dim.id, qIdx, opt.value)}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </fieldset>
            ))}

            <div className="quiz-submit">
              <p className="form-note">
                {allAnswered
                  ? 'All questions answered. Ready to see your results.'
                  : `${TOTAL_QUESTIONS - totalAnswered} question${TOTAL_QUESTIONS - totalAnswered !== 1 ? 's' : ''} remaining.`}
              </p>
              <button type="button" className="button" onClick={handleSubmit} disabled={!allAnswered}>
                See my results <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </section>
      )}

      {submitted && (
        <div ref={resultsRef}>
          <section className="section method" aria-labelledby="result-title">
            <div className="split">
              <div>
                <p className="eyebrow">YOUR RESULTS · MATURITY LEVEL</p>
                <h2 id="result-title">{maturity.label}</h2>
                <p className="result-score">
                  <strong>{totalScore}</strong> / {MAX_SCORE}
                </p>
                <div className="progress-track on-dark" aria-hidden="true">
                  <div
                    className={`progress-fill ${maturity.barColour}`}
                    style={{ width: `${Math.round((totalScore / MAX_SCORE) * 100)}%` }}
                  />
                </div>
                <p className="section-description stack-top">{maturity.description}</p>
              </div>
              <div>
                <p className="eyebrow">BY DIMENSION</p>
                {dimensionScores.map((d) => (
                  <div className="dimension-score" key={d.id}>
                    <p>
                      <span>{d.title}</span>
                      <span>
                        {d.score}/{d.max}
                      </span>
                    </p>
                    <div className="progress-track on-dark" aria-hidden="true">
                      <div className="progress-fill yellow" style={{ width: `${d.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section tint" aria-labelledby="means-title">
            <p className="eyebrow">THE DECISION IN FRONT OF YOU</p>
            <h2 id="means-title">What this means for your business.</h2>
            <div className="card-grid three stack-top">
              <article className="panel">
                <p className="eyebrow">START NOW</p>
                <h3 className="detail-title">Your highest-leverage moves</h3>
                <ol className="result-list">
                  {maturity.whatThisMeans.startNow.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ol>
              </article>
              <article className="panel">
                <p className="eyebrow">STOP DOING</p>
                <h3 className="detail-title">The behaviours holding you back</h3>
                <ul className="result-list">
                  {maturity.whatThisMeans.stopDoing.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </article>
              <article className="callout dark" style={{ margin: 0 }}>
                <p className="eyebrow">COST OF INACTION</p>
                <h3>What 12 months of doing nothing looks like</h3>
                <p>{maturity.whatThisMeans.costOfInaction}</p>
              </article>
            </div>

            {weakDimensions.length > 0 && (
              <div className="panel stack-top">
                <p className="eyebrow">AREAS NEEDING ATTENTION</p>
                <p className="form-note">
                  These dimensions scored below 50% and are your highest-priority areas:
                </p>
                <table className="data-table stack-top">
                  <tbody>
                    {weakDimensions.map((d) => (
                      <tr key={d.id}>
                        <td>{d.title}</td>
                        <td>{d.pct}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            <div className="hero-actions row print-hide">
              <button type="button" className="button" onClick={() => window.print()}>
                Print / save as PDF <span aria-hidden="true">↓</span>
              </button>
              <button type="button" className="text-link" onClick={handleReset}>
                Start again
              </button>
              <TextLink href="/contact?interest=advisory" className="button yellow" arrow="↗">
                Discuss your results with Agata
              </TextLink>
            </div>
          </section>
        </div>
      )}
    </div>
  )
}
