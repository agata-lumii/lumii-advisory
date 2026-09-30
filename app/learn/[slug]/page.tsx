import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { platforms, getPlatformBySlug } from '@/lib/ai-tools'
import EcosystemDiagram from '@/components/EcosystemDiagram'
import CTABanner from '@/components/CTABanner'
import { ContentCard, TextLink } from '@/components/lumii/primitives'
import { Breadcrumbs, JsonLd, SITE_URL } from '@/components/lumii/seo'

export function generateStaticParams() {
  return platforms.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const platform = getPlatformBySlug(params.slug)
  if (!platform) return {}
  return {
    title: { absolute: platform.metaTitle },
    description: platform.metaDescription,
    alternates: { canonical: `${SITE_URL}/learn/${platform.slug}` },
  }
}

const TIER_LABEL = { free: 'Free tier', pro: 'Paid / Pro', enterprise: 'Enterprise' } as const

export default function PlatformPage({ params }: { params: { slug: string } }) {
  const platform = getPlatformBySlug(params.slug)
  if (!platform) notFound()

  const url = `${SITE_URL}/learn/${platform.slug}`
  const otherPlatforms = platforms.filter((p) => p.slug !== platform.slug)

  return (
    <div className="lumii">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: platform.name,
          description: platform.metaDescription,
          author: { '@type': 'Person', '@id': `${SITE_URL}/#agata`, name: 'Agata Adamczak' },
          publisher: { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: 'Lumii Advisory' },
          url,
          mainEntityOfPage: url,
          inLanguage: 'en-AU',
          about: { '@type': 'SoftwareApplication', name: platform.brand, applicationCategory: 'BusinessApplication' },
        }}
      />

      <section className="page-intro section">
        <Breadcrumbs
          trail={[
            { name: 'AI platform guides', href: '/learn' },
            { name: platform.name, href: `/learn/${platform.slug}` },
          ]}
          lastLabel={platform.brand}
        />
        <p className="eyebrow">
          <span className="brand-dot" style={{ background: platform.brandColor }} aria-hidden="true" />
          {platform.brand.toUpperCase()} GUIDE
        </p>
        <h1>{platform.name}</h1>
        <p className="page-lead">{platform.tagline}</p>
      </section>

      <section className="section split" aria-labelledby="what-title">
        <h2 id="what-title">What is {platform.brand} for business?</h2>
        <div className="prose">
          <p className="lead">{platform.overview}</p>
          <ul>
            {platform.overviewPoints.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section tint" aria-labelledby="map-title">
        <div className="section-top">
          <div>
            <p className="eyebrow">ECOSYSTEM MAP</p>
            <h2 id="map-title">The {platform.brand} ecosystem, mapped.</h2>
          </div>
          <p className="topics-intro">
            Every tool in the {platform.brand} suite — what it does, which plan you need, and how the
            pieces fit together.
          </p>
        </div>
        <div className="panel table-scroll">
          <EcosystemDiagram
            platform={platform.name}
            tagline={platform.tagline}
            brandColor={platform.brandColor}
            categories={platform.toolCategories}
          />
        </div>
      </section>

      <section className="section" aria-labelledby="tools-title">
        <div className="section-top">
          <div>
            <p className="eyebrow">TOOL GUIDE</p>
            <h2 id="tools-title">What each tool does.</h2>
          </div>
        </div>
        {platform.toolCategories.map((cat) => (
          <div key={cat.category}>
            <h3 className="category-title">
              <span className="brand-dot" style={{ background: platform.brandColor }} aria-hidden="true" />
              {cat.category}
            </h3>
            <div className="tool-grid">
              {cat.tools.map((tool) => (
                <div className="tool-card" key={tool.name}>
                  <h4>{tool.name}</h4>
                  <span className="tag">{TIER_LABEL[tool.tier]}</span>
                  <p className="best-for">Best for: {tool.bestFor}</p>
                  <p>{tool.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="section tint" aria-labelledby="cases-title">
        <div className="section-top">
          <div>
            <p className="eyebrow">IN PRACTICE</p>
            <h2 id="cases-title">{platform.brand} at work: real scenarios.</h2>
          </div>
        </div>
        <div className="card-grid two">
          {platform.useCases.map((uc, i) => (
            <article className="content-card" key={i}>
              <p className="eyebrow">{uc.industry.toUpperCase()}</p>
              <h3 className="detail-title">The situation</h3>
              <p>{uc.scenario}</p>
              <div className="tag-list">
                {uc.toolsUsed.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="detail-title stack-top">The result</h3>
              <p>{uc.outcome}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="more-title">
        <div className="section-top">
          <div>
            <p className="eyebrow">EXPLORE MORE PLATFORMS</p>
            <h2 id="more-title">The AI landscape is bigger than one platform.</h2>
          </div>
          <TextLink href="/learn">All platform guides</TextLink>
        </div>
        <div className="card-grid two">
          {otherPlatforms.map((p) => (
            <ContentCard
              key={p.slug}
              label={p.brand.toUpperCase()}
              title={p.name}
              description={p.tagline}
              href={`/learn/${p.slug}`}
              action="Read the guide"
              as="h3"
            />
          ))}
        </div>
      </section>

      <CTABanner variant="reading" />
    </div>
  )
}
