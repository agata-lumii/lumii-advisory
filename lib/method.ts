export interface MethodStep {
  num: string
  title: string
  /** Condensed — homepage strip. */
  body: string
  /** Fuller — /services and /how-we-work. */
  bodyLong: string
}

/**
 * The engagement method: how the AI Operating System gets built.
 * Distinct from the AI Operating System itself, which is what gets built.
 */
export const methodSteps: MethodStep[] = [
  {
    num: '01',
    title: 'Illuminate',
    body: 'A rigorous audit of your digital landscape, AI readiness, and growth constraints — revealing where the real opportunities sit.',
    bodyLong:
      'I start by getting genuinely clear on where you are. A rigorous audit of your digital landscape, customer experience, technology stack, data, and competitive position — plus structured interviews with your leadership team. The output is an honest, evidence-based picture of what is actually possible, not a list of assumptions.',
  },
  {
    num: '02',
    title: 'Align',
    body: 'Insight becomes a shared roadmap your leadership team can execute against — with real buy-in, not passive agreement.',
    bodyLong:
      'Strategy only works when the whole organisation points the same way. I translate the diagnosis into a prioritised roadmap — sequenced by business impact and feasibility, costed, and tied to your P&L — then work it through leadership, marketing, sales, and technology until the agreement is real rather than polite.',
  },
  {
    num: '03',
    title: 'Activate',
    body: 'Strategy becomes working capability. I implement alongside your team, starting with one high-value use case and building out.',
    bodyLong:
      'Strategy becomes working capability. I start deliberately narrow — a single high-value use case with defined success criteria — then scope it, oversee the build, select technology partners where needed, and run the training and change work that makes it stick. I work alongside your team rather than above it, so the capability stays when the engagement ends.',
  },
  {
    num: '04',
    title: 'Accelerate',
    body: 'Measurement frameworks and review cadences that keep the value compounding long after the initial work is done.',
    bodyLong:
      'Good strategy evolves. I establish the measurement frameworks, governance, feedback loops, and quarterly review cadence that let you keep extending the work across teams and use cases — so the value compounds long after the initial engagement, and AI becomes a standing capability rather than a completed project.',
  },
]

/** Used wherever both frameworks appear near each other. */
export const frameworkHierarchyLine =
  'The AI Operating System is what I build. Illuminate → Align → Activate → Accelerate is how I build it.'
