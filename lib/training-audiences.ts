/**
 * The four priority audiences from the Sept 2026 redesign, rewritten around
 * practical training. Each renders at /who-we-help/[slug].
 *
 * `title`, `description` and `focus` are approved redesign copy. `practice`
 * and `faqs` (Oct 2026) give each page content of its own, so the four pages
 * aren't near-duplicates of each other or of /ai-courses. They elaborate on
 * the approved focus areas and make no claims about prices, durations,
 * formats or results — and each answer is written for its own page, since
 * the same FAQ text repeated across pages would be duplicate content.
 */

export interface TrainingAudience {
  slug: string
  name: string
  /** Page title, split where the design breaks the line. */
  title: [string, string]
  description: string
  focus: { title: string; text: string }[]
  /** Everyday tasks this team practises with AI during training. */
  practice: string[]
  faqs: { q: string; a: string }[]
}

export const trainingAudiences: TrainingAudience[] = [
  {
    slug: 'marketers',
    name: 'Marketing & growth teams',
    title: ['Better briefs.', 'More useful work.'],
    description:
      'Bring AI into research, campaign planning and content development, with a clear brief and a human standard for the result.',
    focus: [
      {
        title: 'Research with a question',
        text: 'Practise turning customer and market questions into research briefs, then check the evidence behind the answers.',
      },
      {
        title: 'Create with a clear brief',
        text: 'Give AI the audience, context, constraints and brand standards it needs. Review drafts for accuracy, relevance and voice.',
      },
      {
        title: 'Understand AI discovery',
        text: 'Explore how customers use AI to research brands, and what it means for your content and visibility.',
      },
    ],
    practice: [
      'Turning a campaign idea into a research brief: the audience questions to answer, the competitor angles to explore and the evidence to check.',
      'Drafting first versions of emails, social posts and landing-page copy against your brand guidelines, then reviewing them for accuracy and voice.',
      'Summarising campaign results into a clear story for leadership, with every number traced back to its source.',
      'Asking AI tools for recommendations in your own category, and seeing how your brand shows up — or doesn’t.',
    ],
    faqs: [
      {
        q: 'What does AI training for marketing teams cover?',
        a: 'Three things marketing teams use every week: researching with a clear question, creating with a clear brief, and understanding AI discovery — how customers now research brands through AI, and what that means for your content and visibility. The exercises use your own campaigns and channels.',
      },
      {
        q: 'Will the training work with our brand guidelines?',
        a: 'Yes. Briefing AI with your audience, context and brand standards is a core part of the course, and drafts are reviewed against your guidelines for accuracy, relevance and voice.',
      },
      {
        q: 'How is marketing AI training different from AI visibility advisory?',
        a: 'Training builds your team’s own skills. AI visibility advisory is a separate service that audits and improves how your brand appears in AI answers. The two work well together: the training explains AI discovery, and the advisory work acts on it.',
      },
    ],
  },
  {
    slug: 'sales-teams',
    name: 'Sales & commercial teams',
    title: ['Better preparation.', 'More useful conversations.'],
    description:
      'Explore practical ways to use AI in account research, meeting preparation and follow-up while keeping people responsible for the relationship.',
    focus: [
      {
        title: 'Prepare with purpose',
        text: 'Turn account information into questions worth asking. Separate sourced facts from assumptions before the conversation.',
      },
      {
        title: 'Make follow-up useful',
        text: 'Practise drafting follow-up from approved notes, checking commitments and making the next action clear.',
      },
      {
        title: 'Build a repeatable workflow',
        text: 'Map where AI can support preparation and admin, with clear boundaries for customer and commercial information.',
      },
    ],
    practice: [
      'Turning account information into a one-page meeting brief, with sourced facts clearly separated from assumptions.',
      'Preparing the questions worth asking in a first conversation, based on what the customer’s business is actually dealing with.',
      'Drafting follow-up emails from approved meeting notes, and checking every commitment before anything is sent.',
      'Mapping the preparation and admin tasks AI can take on, and the customer information that must stay out of it.',
    ],
    faqs: [
      {
        q: 'What does AI training for sales teams cover?',
        a: 'Preparing with purpose, making follow-up useful and building a repeatable workflow. Your team practises using AI for account research, meeting preparation and follow-up, while people stay responsible for the relationship.',
      },
      {
        q: 'How should sales teams handle customer information with AI?',
        a: 'Carefully and deliberately. Before building any workflow, the team maps where AI can help and agrees clear boundaries for customer and commercial information — what can go into which tools, and what never should.',
      },
      {
        q: 'Will AI write our sales follow-up for us?',
        a: 'It can draft it. The training is about making those drafts useful: briefing AI from approved notes, checking every commitment and making the next action clear, so follow-up is faster without losing the personal touch.',
      },
    ],
  },
  {
    slug: 'retailers',
    name: 'Retail & ecommerce teams',
    title: ['Put AI to work', 'across the customer journey.'],
    description:
      'Connect AI learning to product content, customer questions and the everyday work of running a retail business.',
    focus: [
      {
        title: 'Make product content useful',
        text: 'Practise producing clear product information from approved source material, checking specifications and claims.',
      },
      {
        title: 'Learn from customer questions',
        text: 'Explore how to organise customer feedback and spot recurring questions without losing context.',
      },
      {
        title: 'Prepare for AI discovery',
        text: 'Understand how people research and compare products through AI, and what they need to know about your brand.',
      },
    ],
    practice: [
      'Writing product descriptions from approved specifications, then checking every claim and detail before it goes live.',
      'Grouping reviews and customer enquiries to spot recurring questions and gaps in your product information.',
      'Drafting answers to common customer questions for your team to review and approve.',
      'Comparing products the way shoppers now do through AI tools, and checking how yours are described.',
    ],
    faqs: [
      {
        q: 'What does AI training for retail and ecommerce teams cover?',
        a: 'Making product content useful, learning from customer questions and preparing for AI discovery — all connected to the everyday work of running a retail business, using your own products and customer feedback.',
      },
      {
        q: 'Can AI write our product descriptions?',
        a: 'It can produce strong first drafts from approved source material. The training puts the emphasis on checking — specifications, claims and details — so what reaches your customers is accurate.',
      },
      {
        q: 'Why does AI discovery matter for retailers?',
        a: 'Shoppers increasingly research and compare products through AI tools before they ever reach your site. The training explores how that works and what those tools need to know about your brand and your products.',
      },
    ],
  },
  {
    slug: 'professional-services',
    name: 'Professional services teams',
    title: ['More room for', 'the work that needs you.'],
    description:
      'Explore AI support for research, drafting and knowledge work while protecting client trust and professional judgement.',
    focus: [
      {
        title: 'Research with evidence',
        text: 'Practise framing research, checking sources and spotting unsupported conclusions before they reach a client.',
      },
      {
        title: 'Draft with judgement',
        text: 'Use context and clear standards to develop first drafts, then apply the expertise that makes the work valuable.',
      },
      {
        title: 'Share useful ways of working',
        text: 'Identify repeatable tasks, agree information boundaries and turn individual experiments into team habits.',
      },
    ],
    practice: [
      'Framing a research question for a client matter, then checking every source before a conclusion goes anywhere near the client.',
      'Developing first drafts of reports, proposals and summaries from your own context and quality standards.',
      'Condensing long documents so senior people can spend their time on judgement rather than reading.',
      'Agreeing which tasks and information are off-limits for AI, so individual experiments become safe, shared team habits.',
    ],
    faqs: [
      {
        q: 'What does AI training for professional services teams cover?',
        a: 'Researching with evidence, drafting with judgement, and sharing useful ways of working — practical AI support for research, drafting and knowledge work that protects client trust and professional judgement.',
      },
      {
        q: 'How do you protect client confidentiality when using AI?',
        a: 'By deciding the boundaries before the habits form. As part of the training, the team identifies which tasks and which client information can go into AI tools, and which can’t, so everyone works to the same standard.',
      },
      {
        q: 'Does AI replace professional judgement?',
        a: 'No. The training treats AI as support for research and first drafts. The expertise that makes the work valuable — and responsibility for what reaches a client — stays with your people.',
      },
    ],
  },
]

export function getTrainingAudience(slug: string): TrainingAudience | undefined {
  return trainingAudiences.find((audience) => audience.slug === slug)
}

/**
 * Industries whose pages were retired (they 301 to /who-we-help). Named on
 * that page so it stays relevant for anyone arriving from the old address.
 */
export const otherIndustryNames = [
  'financial services',
  'real estate',
  'hospitality',
  'healthcare and allied health',
  'startups and scale-ups',
  'education and training providers',
]
