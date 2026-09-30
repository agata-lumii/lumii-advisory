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

/**
 * Articles most related to `article`, best first: shared tags count most,
 * then the same category, then the same AI Operating System component. Ties go
 * to the newer article. Used for "Keep reading" and in-article related links.
 */
// "Comparison" describes an article's format, not its topic, and "AI" is on
// nearly everything, so neither counts as a shared topic.
const IGNORED_TAG = new Set(['comparison'])
const IGNORED_WORD = new Set(['ai', 'comparison', 'and', 'the', 'of'])

const topicTags = (a: Article) => a.tags.map((t) => t.toLowerCase()).filter((t) => !IGNORED_TAG.has(t))
const topicWords = (a: Article) =>
  new Set(topicTags(a).flatMap((t) => t.split(/\s+/)).filter((w) => !IGNORED_WORD.has(w)))

export function relatedArticles(article: Article, count: number): Article[] {
  const tags = new Set(topicTags(article))
  const words = topicWords(article)
  const score = (other: Article) =>
    topicTags(other).filter((t) => tags.has(t)).length * 3 +
    // Partial matches: "Governance" relates to "Data Governance".
    Array.from(topicWords(other)).filter((w) => words.has(w)).length +
    (other.category === article.category ? 2 : 0) +
    (other.frameworkAnchor &&
    other.frameworkAnchor.component === article.frameworkAnchor?.component
      ? 1
      : 0)
  return articles
    .filter((a) => a.slug !== article.slug)
    .map((a) => ({ a, s: score(a) }))
    .sort((x, y) => y.s - x.s || y.a.date.localeCompare(x.a.date))
    .slice(0, count)
    .map(({ a }) => a)
}

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
