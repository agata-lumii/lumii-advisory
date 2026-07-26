export interface Discipline {
  number: string
  name: string
  /** Homepage grid copy — kept short. */
  description: string
  /** /services grid copy — the fuller version. */
  descriptionLong: string
  tags: string[]
  tagsLong: string[]
  /** Present only where a dedicated service page exists. */
  href?: string
}

/**
 * Order is the message: AI Enablement leads, AI Visibility follows, and the
 * remaining four are the foundations that AI work depends on.
 */
export const disciplines: Discipline[] = [
  {
    number: '01',
    name: 'AI Enablement',
    description:
      'The lead discipline. I find where AI creates real commercial value, build the workflows and guardrails around it, and lift the capability of the people who have to use it every day.',
    descriptionLong:
      'The lead discipline, and the one the rest exist to support. I find where AI creates real commercial value in your business, build the workflows and guardrails around it, and lift the capability of the people who have to use it every day. This is where the AI Operating System gets installed — not as a pilot that stalls, but as a capability that stays after I leave.',
    tags: ['AI Readiness', 'Use Case Design', 'Capability Building'],
    tagsLong: ['AI Readiness', 'Use Case Design', 'Guardrails', 'Capability Building', 'Workflow Design'],
    href: '/ai-operating-system',
  },
  {
    number: '02',
    name: 'AI Visibility',
    description:
      'Your buyers now ask ChatGPT, Claude, Gemini, and Perplexity who to shortlist. I measure how your brand shows up in those answers, fix the entity work underneath, and track the shift over time.',
    descriptionLong:
      'Your buyers now ask ChatGPT, Claude, Gemini, and Perplexity who to shortlist — often before they reach your website at all. I measure how often and how accurately your brand appears in those answers, fix the structured data and entity consistency underneath, and report the shift over time in plain English. Not rankings, and not guarantees: measured presence, tracked honestly.',
    tags: ['Visibility Audit', 'Entity Optimisation', 'Share-of-Voice'],
    tagsLong: [
      'AI Visibility Audit',
      'Brand Entity Optimisation',
      'Structured Data',
      'Share-of-Voice Reporting',
      'Competitor Comparison',
    ],
    href: '/services/ai-visibility',
  },
  {
    number: '03',
    name: 'Digital Strategy',
    description:
      'A prioritised roadmap that ties digital investment to business outcomes — the ground AI adoption either builds on or falls through.',
    descriptionLong:
      'A clear, prioritised roadmap that ties digital investment to business outcomes. I audit, advise, and architect plans that are ambitious but executable — starting from your business model, your competitive position, and your growth constraints. This is the ground AI adoption either builds on or falls through.',
    tags: ['Roadmapping', 'Audits', 'Digital Maturity'],
    tagsLong: ['Roadmapping', 'Audits', 'Transformation', 'Digital Maturity', 'KPI Frameworks'],
  },
  {
    number: '04',
    name: 'Customer Experience',
    description:
      'The journeys AI touches first. I map where the friction actually sits, then redesign the moments that decide whether a buyer stays.',
    descriptionLong:
      'The journeys AI touches first, and the ones it can quietly damage. I map where the friction actually sits — combining qualitative research with the numbers — then redesign the moments that decide whether a buyer converts, returns, or leaves. Automating a broken journey only makes it break faster.',
    tags: ['Journey Mapping', 'CX Design', 'NPS & VOC'],
    tagsLong: ['Journey Mapping', 'CX Design', 'NPS & VOC', 'Persona Research', 'Experience Audits'],
  },
  {
    number: '05',
    name: 'Ecommerce',
    description:
      'Platform strategy through to conversion. Where AI meets trading, the operational discipline underneath has to hold.',
    descriptionLong:
      'Platform strategy through to conversion optimisation — building, scaling, and refining ecommerce operations that outperform their benchmarks. Whether you are launching a D2C brand, migrating platforms, or sharpening an established store, the operational discipline underneath has to hold before AI is layered on top of it.',
    tags: ['Platform Strategy', 'CRO', 'D2C'],
    tagsLong: ['Platform Strategy', 'CRO', 'D2C', 'Migration', 'Performance Optimisation'],
  },
  {
    number: '06',
    name: 'MarTech Advisory',
    description:
      'The right stack, properly integrated — no vendor agenda. AI compounds what your systems already do, including their flaws.',
    descriptionLong:
      'The right stack, properly integrated. I help you evaluate, select, implement, and get genuine value from marketing technology — no vendor agenda, no hidden commissions. This matters more with AI than without it: AI compounds whatever your data and systems already do, including their flaws.',
    tags: ['Stack Audit', 'CDP / CRM', 'Automation'],
    tagsLong: ['Stack Audit', 'CDP / CRM', 'Automation', 'Attribution', 'Integration Architecture'],
  },
]

/** Shown directly above the discipline grid on the homepage and /services. */
export const disciplinesConnectiveTissue =
  "AI adoption fails when it's bolted onto broken foundations. That's why the AI Operating System work extends into strategy, customer experience, ecommerce, and MarTech — the disciplines AI actually touches."
