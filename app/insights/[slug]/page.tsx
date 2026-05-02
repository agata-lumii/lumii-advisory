import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { articles, getArticleBySlug } from '@/lib/insights'
import CTABanner from '@/components/CTABanner'
import ReadingProgress from '@/components/ReadingProgress'

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
    },
    alternates: {
      canonical: `https://lumiiadvisory.com/insights/${article.slug}`,
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

  const otherArticles = articles.filter((a) => a.slug !== article.slug).slice(0, 3)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      '@type': 'Person',
      name: 'Agata Adamczak',
      url: 'https://lumiiadvisory.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Lumii Advisory',
      url: 'https://lumiiadvisory.com',
    },
    url: `https://lumiiadvisory.com/insights/${article.slug}`,
    mainEntityOfPage: `https://lumiiadvisory.com/insights/${article.slug}`,
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://lumiiadvisory.com' },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://lumiiadvisory.com/insights' },
      { '@type': 'ListItem', position: 3, name: article.title, item: `https://lumiiadvisory.com/insights/${article.slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ReadingProgress />
      {/* Hero */}
      <section className="bg-near-black pt-40 pb-20 px-8 lg:px-12">
        <div className="max-w-[860px] mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Link
              href="/insights"
              className="font-body text-[11px] tracking-[0.2em] uppercase text-gold/70 hover:text-gold transition-colors"
            >
              ← Insights
            </Link>
            <span className="text-warm-white/20">·</span>
            <span className="font-body text-[11px] tracking-[0.15em] uppercase text-warm-white/40">
              {article.category}
            </span>
          </div>
          <h1 className="font-display font-light text-[clamp(36px,4.5vw,60px)] leading-[1.15] text-warm-white mb-6 tracking-[-0.01em]">
            {article.title}
          </h1>
          <p className="font-body text-[17px] leading-[1.8] text-warm-white/60 font-light mb-10">
            {article.excerpt}
          </p>
          <div className="flex items-center gap-6 pt-6 border-t border-warm-white/10">
            <span className="font-body text-[12px] text-warm-white/40">{formatDate(article.date)}</span>
            <span className="text-warm-white/20">·</span>
            <span className="font-body text-[12px] text-warm-white/40">{article.readTime}</span>
            <div className="flex gap-2 ml-auto">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-body text-[10px] tracking-[0.12em] uppercase text-warm-white/30 border border-warm-white/10 px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-warm-white py-[clamp(60px,8vw,100px)] px-8 lg:px-12">
        <div className="max-w-[720px] mx-auto">
          {/* TL;DR — Key Takeaways */}
          {article.keyTakeaways && article.keyTakeaways.length > 0 && (
            <aside className="mb-14 bg-ivory border-l-2 border-gold p-7 lg:p-8" aria-label="Key takeaways">
              <p className="font-body text-[10px] tracking-[0.25em] uppercase text-gold mb-5 flex items-center gap-3">
                <span className="w-6 h-px bg-gold block" />
                Key Takeaways
              </p>
              <ul className="space-y-3 list-none p-0 m-0">
                {article.keyTakeaways.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="font-display text-[12px] text-gold/70 tracking-[0.08em] flex-shrink-0 mt-1.5">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="font-body text-[15px] text-near-black font-light leading-[1.7]">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
            </aside>
          )}
          {article.content.map((block, i) => (
            <div key={i}>
              <div className="mb-8">
                {block.heading && (
                  <h2 className="font-display font-light text-[clamp(22px,2.5vw,30px)] text-near-black leading-[1.3] mb-4 mt-12 first:mt-0">
                    {block.heading}
                  </h2>
                )}
                <p className="font-body text-[16px] leading-[1.9] text-slate-warm font-light">
                  {block.body}
                </p>
              </div>
              {/* Inline related links after 3rd block */}
              {i === 2 && otherArticles.length > 0 && (
                <div className="my-10 bg-ivory border border-parchment p-6">
                  <p className="font-body text-[10px] tracking-[0.2em] uppercase text-gold mb-3">
                    Related Reading
                  </p>
                  <ul className="space-y-2 list-none p-0 m-0">
                    {otherArticles.slice(0, 2).map((a) => (
                      <li key={a.slug}>
                        <Link
                          href={`/insights/${a.slug}`}
                          className="font-body text-[14px] text-near-black hover:text-gold transition-colors duration-200 font-light"
                        >
                          → {a.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

          {/* Author attribution */}
          <div className="mt-16 pt-10 border-t border-parchment flex items-start gap-6">
            <div className="w-12 h-12 bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
              <span className="font-display text-gold text-[18px]">A</span>
            </div>
            <div>
              <p className="font-body text-[13px] font-medium text-near-black mb-1">Agata Adamczak</p>
              <p className="font-body text-[13px] text-ash font-light">
                Founder, Lumii Advisory · AI Strategy & Digital Transformation
              </p>
            </div>
          </div>

          {/* Resource CTA */}
          {(() => {
            const cta = article.cta ?? {
              label: 'Free Resource',
              title: 'AI Readiness Checklist',
              description: 'Assess your organisation across 7 dimensions in 15 minutes.',
              href: '/resources/ai-readiness-checklist',
            }
            const btnText = cta.href.startsWith('/resources') && cta.href !== '/resources/ai-readiness-checklist'
              ? 'View the Guide →'
              : 'Get the Checklist →'
            return (
              <div className="mt-12 bg-ivory border border-parchment p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <p className="font-body text-[11px] tracking-[0.2em] uppercase text-gold mb-2">
                    {cta.label}
                  </p>
                  <p className="font-display text-[20px] font-light text-near-black leading-snug">
                    {cta.title}
                  </p>
                  <p className="font-body text-[13px] text-slate-warm font-light mt-1">
                    {cta.description}
                  </p>
                </div>
                <Link
                  href={cta.href}
                  className="font-body text-[12px] tracking-[0.1em] uppercase text-near-black border border-near-black px-8 py-3 hover:bg-near-black hover:text-warm-white transition-all duration-200 whitespace-nowrap flex-shrink-0"
                >
                  {btnText}
                </Link>
              </div>
            )
          })()}
        </div>
      </section>

      {/* More articles */}
      {otherArticles.length > 0 && (
        <section className="bg-ivory py-[clamp(60px,8vw,100px)] px-8 lg:px-12">
          <div className="max-w-[1180px] mx-auto">
            <p className="font-body text-[10px] tracking-[0.25em] uppercase text-ash mb-10">
              More from Insights
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {otherArticles.map((a) => (
                <Link
                  key={a.slug}
                  href={`/insights/${a.slug}`}
                  className="group flex flex-col bg-warm-white border border-parchment hover:border-gold/40 transition-colors duration-300 p-8"
                >
                  <p className="font-body text-[10px] tracking-[0.2em] uppercase text-gold mb-3">
                    {a.category}
                  </p>
                  <h3 className="font-display font-light text-[20px] leading-[1.35] text-near-black flex-1 group-hover:text-charcoal transition-colors">
                    {a.title}
                  </h3>
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-parchment">
                    <span className="font-body text-[11px] text-ash">{a.readTime}</span>
                    <span className="font-body text-[11px] uppercase tracking-[0.12em] text-gold group-hover:tracking-[0.2em] transition-all duration-300">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  )
}
