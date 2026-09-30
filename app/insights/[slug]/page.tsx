import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { articles, getArticleBySlug } from '@/lib/insights'
import CTABanner from '@/components/CTABanner'
import ReadingProgress from '@/components/ReadingProgress'
import { TextLink } from '@/components/lumii/primitives'
import { Breadcrumbs, JsonLd, SITE_URL } from '@/components/lumii/seo'

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const article = getArticleBySlug(params.slug)
  if (!article) return {}
  return {
    title: { absolute: article.metaTitle },
    description: article.metaDescription,
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      type: 'article',
      publishedTime: article.date,
      modifiedTime: article.date,
      authors: ['Agata Adamczak'],
      ...(article.heroImage && {
        images: [
          {
            url: `${SITE_URL}${article.heroImage.src}`,
            alt: article.heroImage.alt,
          },
        ],
      }),
    },
    alternates: {
      canonical: `${SITE_URL}/insights/${article.slug}`,
    },
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  const url = `${SITE_URL}/insights/${article.slug}`
  const otherArticles = articles.filter((a) => a.slug !== article.slug).slice(0, 3)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.date,
    dateModified: article.date,
    author: { '@type': 'Person', '@id': `${SITE_URL}/#agata`, name: 'Agata Adamczak', url: `${SITE_URL}/about` },
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Lumii Advisory',
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/lumii-logo.png` },
    },
    url,
    mainEntityOfPage: url,
    articleSection: article.category,
    keywords: article.tags.join(', '),
    inLanguage: 'en-AU',
    ...(article.heroImage && { image: `${SITE_URL}${article.heroImage.src}` }),
  }

  const cta = article.cta ?? {
    label: 'Free Resource',
    title: 'AI Readiness Checklist',
    description: 'Assess your organisation across 7 dimensions in 15 minutes.',
    href: '/resources/ai-readiness-checklist',
  }
  const ctaAction =
    cta.href.startsWith('/resources') && cta.href !== '/resources/ai-readiness-checklist'
      ? 'View the guide'
      : 'Get the checklist'

  const intro = (
    <>
      <Breadcrumbs
        trail={[
          { name: 'Insights', href: '/insights' },
          { name: article.title, href: `/insights/${article.slug}` },
        ]}
        lastLabel={article.category}
      />
      <h1 className="article-title">{article.title}</h1>
      <p className="page-lead">{article.excerpt}</p>
      <p className="intro-meta">
        <span>By Agata Adamczak</span>
        <span>{formatDate(article.date)}</span>
        <span>{article.readTime}</span>
      </p>
      <div className="tag-list">
        {article.tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </>
  )

  return (
    <div className="lumii">
      <JsonLd data={articleSchema} />
      <ReadingProgress />

      {article.heroImage ? (
        <section className="page-intro section with-media">
          <div>{intro}</div>
          <figure className="intro-media">
            <Image
              src={article.heroImage.src}
              alt={article.heroImage.alt}
              width={1200}
              height={800}
              priority
              sizes="(max-width: 1000px) 100vw, 40vw"
            />
          </figure>
        </section>
      ) : (
        <section className="page-intro section wide">{intro}</section>
      )}

      <section className="section">
        <article className="prose centre">
          {article.keyTakeaways && article.keyTakeaways.length > 0 && (
            <aside className="callout" aria-label="Key takeaways">
              <p className="eyebrow">KEY TAKEAWAYS</p>
              <ol>
                {article.keyTakeaways.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ol>
            </aside>
          )}

          {article.content.map((block, i) => (
            <div key={i}>
              {block.image ? (
                <figure>
                  <Image
                    src={block.image.src}
                    alt={block.image.alt}
                    width={1440}
                    height={960}
                    sizes="(max-width: 760px) 100vw, 720px"
                  />
                  {block.image.caption && <figcaption>{block.image.caption}</figcaption>}
                </figure>
              ) : (
                <>
                  {block.heading && <h2>{block.heading}</h2>}
                  {block.body && <p>{block.body}</p>}
                </>
              )}
              {/* Related reading after the third block */}
              {i === 2 && otherArticles.length > 0 && (
                <aside className="callout" aria-label="Related reading">
                  <p className="eyebrow">RELATED READING</p>
                  {otherArticles.slice(0, 2).map((a) => (
                    <p key={a.slug}>
                      <Link href={`/insights/${a.slug}`}>{a.title}</Link>
                    </p>
                  ))}
                </aside>
              )}
            </div>
          ))}

          {/* Links the article to the framework page for topic-cluster building
              and LLM citation. Shown when the article is flagged. */}
          {article.frameworkAnchor && (
            <aside className="callout dark" aria-label="The Lumii AI Operating System">
              <p className="eyebrow">THE LUMII FRAMEWORK · {article.frameworkAnchor.component.toUpperCase()}</p>
              <h3>
                {article.frameworkAnchor.component === 'Framework'
                  ? 'This is one piece of the larger model.'
                  : `This article sits inside the “${article.frameworkAnchor.component}” component.`}
              </h3>
              <p>
                {article.frameworkAnchor.note ??
                  'The Lumii AI Operating System defines the five components that turn isolated AI tools into a coordinated business capability — Thesis, Guardrails, Workflows, People, and Measurement.'}
              </p>
              <TextLink href="/ai-operating-system" className="button yellow">
                Read the framework
              </TextLink>
            </aside>
          )}

          <div className="byline">
            <Image src="/images/agata-charcoal-editorial.webp" width={120} height={120} alt="Agata Adamczak" />
            <div>
              <strong>Agata Adamczak</strong>
              <span>
                Founder, Lumii Advisory ·{' '}
                <Link href="/ai-enablement">AI enablement consultant</Link>, trainer and{' '}
                <Link href="/ai-keynote-speaker">keynote speaker</Link>, Sydney
              </span>
            </div>
          </div>

          <div className="panel stack-top">
            <p className="eyebrow">{cta.label.toUpperCase()}</p>
            <h3 className="panel-title">{cta.title}</h3>
            <p className="form-note">{cta.description}</p>
            <TextLink href={cta.href}>{ctaAction}</TextLink>
          </div>
        </article>
      </section>

      {otherArticles.length > 0 && (
        <section className="section tint" aria-labelledby="more-title">
          <div className="section-top">
            <div>
              <p className="eyebrow">MORE FROM INSIGHTS</p>
              <h2 id="more-title">Keep reading.</h2>
            </div>
            <TextLink href="/insights">All insights</TextLink>
          </div>
          <div className="card-grid three">
            {otherArticles.map((a) => (
              <article className="content-card" key={a.slug}>
                {a.heroImage && (
                  <Link href={`/insights/${a.slug}`} className="card-media" tabIndex={-1} aria-hidden="true">
                    <Image
                      src={a.heroImage.src}
                      alt=""
                      width={600}
                      height={400}
                      sizes="(max-width: 1000px) 100vw, 33vw"
                    />
                  </Link>
                )}
                <p className="eyebrow">{a.category.toUpperCase()}</p>
                <h3>{a.title}</h3>
                <TextLink href={`/insights/${a.slug}`}>Read the article</TextLink>
              </article>
            ))}
          </div>
        </section>
      )}

      <CTABanner variant="reading" />
    </div>
  )
}
