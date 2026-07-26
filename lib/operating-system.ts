export interface OSComponent {
  number: string
  name: string
  /** One line — used on the homepage summary grid. */
  summary: string
  /** Long form — used on /ai-operating-system. */
  body: string
  examples: string[]
}

/**
 * The AI Operating System: the five components Lumii installs.
 * This is what I build. The Illuminate → Align → Activate → Accelerate
 * method in lib/method.ts is how I build it.
 */
export const osComponents: OSComponent[] = [
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
