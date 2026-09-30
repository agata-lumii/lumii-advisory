/**
 * The Lumii AI Operating System: what Lumii builds. The method (Illuminate,
 * Align, Activate, Accelerate) is how it gets built.
 * Component and method copy is the approved text from the Sept 2026 redesign.
 */

export interface OSComponent {
  label: string
  title: string
  text: string
}

export const osComponents: OSComponent[] = [
  {
    label: '01 / THESIS',
    title: 'A clear commercial direction.',
    text: 'Decide what AI should help the business achieve. Choose problems worth solving and define what a useful result looks like.',
  },
  {
    label: '02 / GUARDRAILS',
    title: 'Boundaries people can use.',
    text: 'Make approved tools, information handling and review responsibilities clear enough to apply in everyday work.',
  },
  {
    label: '03 / WORKFLOWS',
    title: 'A place in the actual work.',
    text: 'Connect AI to repeatable tasks and handoffs. Decide what it supports, what people check and who remains accountable.',
  },
  {
    label: '04 / PEOPLE',
    title: 'Capability and ownership.',
    text: 'Give people the skills, confidence and responsibility to use AI well. Learning should connect directly to their roles.',
  },
  {
    label: '05 / MEASUREMENT',
    title: 'Evidence of useful change.',
    text: 'Look at quality, time, adoption and business outcomes. Use what you learn to improve the way the work is done.',
  },
]

export const methodSteps = [
  { number: '01', title: 'Illuminate', text: 'Understand the current work, the people doing it and the opportunities worth exploring.' },
  { number: '02', title: 'Align', text: 'Agree on the priorities, outcomes and responsibilities before choosing tools or designing a session.' },
  { number: '03', title: 'Activate', text: 'Apply the learning through practical work, review the results and build confidence through use.' },
  { number: '04', title: 'Accelerate', text: 'Use feedback and evidence to refine workflows and extend what works across the team.' },
]

/**
 * Retained from the pre-redesign framework page (with its FAQPage schema) so
 * the page keeps its indexed, answer-first content.
 */
export const osFaqs: { q: string; a: string }[] = [
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
