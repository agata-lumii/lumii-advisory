import type { Metadata } from 'next'
import { ContentCard, PageCta, PageIntro } from '@/components/lumii/primitives'
import InsightsLibrary from '@/components/lumii/InsightsLibrary'
import { featuredArticles, libraryArticles } from '@/lib/insights-curation'

const PAGE_URL = 'https://lumiiadvisory.com/insights'

export const metadata: Metadata = {
  title: { absolute: 'AI Adoption & Leadership Insights | Lumii Advisory' },
  description:
    'Practical perspectives on AI enablement, leadership, governance and business adoption from Lumii Advisory.',
  alternates: { canonical: PAGE_URL },
}

export default function InsightsPage() {
  const featured = featuredArticles()
  const library = libraryArticles().map(({ slug, title, category }) => ({ slug, title, category }))

  return (
    <div className="lumii">
      <PageIntro
        label="INSIGHTS"
        title={
          <>
            Thinking clearly.
            <br />
            Putting it to work.
          </>
        }
        lead="Perspectives on AI adoption, leadership and the decisions that turn experimentation into everyday capability."
      />

      <section className="section featured-reading">
        <p className="eyebrow">START WITH ENABLEMENT</p>
        <div className="card-grid three">
          {featured.map((article) => (
            <ContentCard
              key={article.slug}
              label={article.category.toUpperCase()}
              title={article.title}
              href={`/insights/${article.slug}`}
              action="Read the article"
            />
          ))}
        </div>
      </section>

      <section className="section article-archive">
        <div className="section-top">
          <h2>Explore the library.</h2>
          <p>{library.length} articles on AI and business.</p>
        </div>
        <InsightsLibrary items={library} />
      </section>

      <PageCta
        title="Turn a useful idea into a working habit."
        description="Bring practical AI learning to your team or your next offsite."
      />
    </div>
  )
}
