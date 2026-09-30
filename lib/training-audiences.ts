/**
 * The four priority audiences from the Sept 2026 redesign, rewritten around
 * practical training. These slugs render the training layout; the other
 * /who-we-help/* pages keep their existing content from lib/verticals.ts.
 */

export interface TrainingAudience {
  slug: string
  name: string
  /** Page title, split where the design breaks the line. */
  title: [string, string]
  description: string
  focus: { title: string; text: string }[]
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
