import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
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
      ...(article.heroImage && {
        images: [
          {
            url: `https://lumiiadvisory.com${article.heroImage.src}`,
            alt: article.heroImage.alt,
          },
        ],
      }),
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
    ...(article.heroImage && { image: `https://lumiiadvisory.com${article.heroImage.src}` }),
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
      {/* Hero — split layout when an article has a heroImage, single-column otherwise */}
      {article.heroImage ? (
        <section className="bg-near-black">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
            {/* Left: dark text column */}
            <div className="pt-40 lg:pt-44 pb-16 lg:pb-20 px-8 lg:px-12 order-2 lg:order-1">
              <div className="max-w-[640px] lg:ml-auto lg:mr-12">
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
                <h1 className="font-display font-light text-[clamp(34px,4vw,54px)] leading-[1.15] text-warm-white mb-6 tracking-[-0.01em]">
                  {article.title}
                </h1>
                <p className="font-body text-[16px] leading-[1.75] text-warm-white/60 font-light mb-10">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-6 pt-6 border-t border-warm-white/10 flex-wrap">
                  <span className="font-body text-[12px] text-warm-white/40">{formatDate(article.date)}</span>
                  <span className="text-warm-white/20">·</span>
                  <span className="font-body text-[12px] text-warm-white/40">{article.readTime}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-5">
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
            {/* Right: hero image on cream surface */}
            <div className="relative bg-ivory min-h-[44vh] lg:min-h-[640px] order-1 lg:order-2 overflow-hidden">
              <Image
                src={article.heroImage.src}
                alt={article.heroImage.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>
      ) : (
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
      )}

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
              {block.image ? (
                <figure className="my-12">
                  <div className="relative w-full aspect-[3/2] overflow-hidden bg-ivory border border-parchment">
                    <Image
                      src={block.image.src}
                      alt={block.image.alt}
                      fill
                      sizes="(max-width: 720px) 100vw, 720px"
                      className="object-contain"
                    />
                  </div>
                  {block.image.caption && (
                    <figcaption className="font-body text-[12px] text-ash font-light italic mt-3 text-center">
                      {block.image.caption}
                    </figcaption>
                  )}
                </figure>
              ) : (
                <div className="mb-8">
                  {block.heading && (
                    <h2 className="font-display font-light text-[clamp(22px,2.5vw,30px)] text-near-black leading-[1.3] mb-4 mt-12 first:mt-0">
                      {block.heading}
                    </h2>
                  )}
                  {block.body && (
                    <p className="font-body text-[16px] leading-[1.9] text-slate-warm font-light">
                      {block.body}
                    </p>
                  )}
                </div>
              )}
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

          {/* Framework anchor — links the article to the canonical
              /ai-operating-system page for topic-cluster building and
              LLM citation. Shown when the article is flagged. */}
          {article.frameworkAnchor && (
            <aside className="mt-14 bg-near-black p-8 lg:p-10" aria-label="The Lumii AI Operating System">
              <p className="font-body text-[10px] tracking-[0.25em] uppercase text-gold mb-4">
                The Lumii Framework · {article.frameworkAnchor.component}
              </p>
              <h3 className="font-display font-light text-[clamp(22px,2.4vw,30px)] text-warm-white leading-[1.25] mb-4">
                {article.frameworkAnchor.component === 'Framework'
                  ? 'This is one piece of the larger model.'
                  : `This article sits inside the "${article.frameworkAnchor.component}" component.`}
              </h3>
              <p className="font-body text-[15px] text-warm-white/65 font-light leading-[1.8] mb-6 max-w-[560px]">
                {article.frameworkAnchor.note ??
                  'The Lumii AI Operating System framework defines the five components that turn isolated AI tools into a coordinated business capability — Thesis, Guardrails, Workflows, People, and Measurement.'}
              </p>
              <Link
                href="/ai-operating-system"
                className="font-body text-[12px] tracking-[0.12em] uppercase text-near-black bg-gold px-7 py-3 hover:bg-gold-light hover:-translate-y-px transition-all duration-200 inline-block"
              >
                Read The Framework →
              </Link>
            </aside>
          )}

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
                  className="group flex flex-col bg-warm-white border border-parchment hover:border-gold/40 transition-colors duration-300 overflow-hidden"
                >
                  {a.heroImage && (
                    <div className="relative w-full aspect-[3/2] bg-ivory overflow-hidden border-b border-parchment">
                      <Image
                        src={a.heroImage.src}
                        alt={a.heroImage.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 360px"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                    </div>
                  )}
                  <div className="p-8 flex flex-col flex-1">
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
