import { articles, type Article } from './insights'

/**
 * Editorial order for the Insights page, from the Sept 2026 redesign:
 * enablement, readiness and governance ahead of tool comparisons.
 *
 * Articles published later (for example by the Sunday publisher) don't need
 * adding here — anything not listed appears at the top of the library,
 * newest first.
 */
export const FEATURED_SLUGS = ['what-is-ai-enablement', 'shadow-ai-mid-market', 'ai-readiness-gap']

const CURATED_ORDER = [
  'what-is-ai-enablement',
  'shadow-ai-mid-market',
  'ai-readiness-gap',
  'ceo-questions-ai-investment',
  'emerging-ai-roles-future',
  'how-small-business-start-with-ai',
  'ai-business-case-board',
  'cost-of-delayed-ai-adoption',
  'ai-professional-services',
  'data-readiness-ai',
  'ai-readiness-assessment-explained',
  'chatgpt-vs-claude-business',
  'gemini-vs-copilot-workspace',
  'copilot-vs-chatgpt-enterprise',
  'ai-coding-agents-compared',
  'ai-engagement-models-compared',
  'choosing-an-ai-strategy-consultant',
  'ai-consulting-engagement-cost',
]

export function featuredArticles(): Article[] {
  return FEATURED_SLUGS.map((slug) => articles.find((a) => a.slug === slug)).filter(
    (a): a is Article => Boolean(a),
  )
}

export function libraryArticles(): Article[] {
  const curated = CURATED_ORDER.map((slug) => articles.find((a) => a.slug === slug)).filter(
    (a): a is Article => Boolean(a),
  )
  const uncurated = articles
    .filter((a) => !CURATED_ORDER.includes(a.slug))
    .sort((a, b) => b.date.localeCompare(a.date))
  return [...uncurated, ...curated]
}
