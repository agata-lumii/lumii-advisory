import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CTABanner from '@/components/CTABanner'
import { ContentCard, TextLink } from '@/components/lumii/primitives'
import { Breadcrumbs, FaqSection, JsonLd, StatRow } from '@/components/lumii/seo'
import { liveVerticals, getVerticalBySlug, sharedAIStats } from '@/lib/verticals'
import { getTrainingAudience } from '@/lib/training-audiences'
import TrainingAudiencePage from '@/components/lumii/TrainingAudiencePage'

function breadcrumbSchema(slug: string, name: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `https://lumiiadvisory.com/who-we-help/${slug}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://lumiiadvisory.com' },
      { '@type': 'ListItem', position: 2, name: 'Training for your team', item: 'https://lumiiadvisory.com/who-we-help' },
      { '@type': 'ListItem', position: 3, name, item: `https://lumiiadvisory.com/who-we-help/${slug}` },
    ],
  }
}

export async function generateStaticParams() {
  // Retired industry pages are redirected in next.config.mjs, so aren't built.
  return liveVerticals.map((v) => ({ slug: v.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // Priority audiences use the Sept 2026 training pages.
  const audience = getTrainingAudience(params.slug)
  if (audience) {
    return {
      title: { absolute: `AI Training for ${audience.name} | Lumii Advisory` },
      description: audience.description,
      alternates: { canonical: `https://lumiiadvisory.com/who-we-help/${audience.slug}` },
    }
  }
  const vertical = getVerticalBySlug(params.slug)
  if (!vertical) return {}
  return {
    title: { absolute: vertical.metaTitle },
    description: vertical.metaDescription,
    alternates: {
      canonical: `https://lumiiadvisory.com/who-we-help/${vertical.slug}`,
    },
  }
}

export default function VerticalPage({ params }: { params: { slug: string } }) {
  const audience = getTrainingAudience(params.slug)
  if (audience) {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(audience.slug, audience.name)) }}
        />
        <TrainingAudiencePage audience={audience} />
      </>
    )
  }

  const vertical = getVerticalBySlug(params.slug)
  if (!vertical) notFound()

  // Inject FAQPage + Article schema only on AEO-priority verticals
  // that have rich answer-first content. Others render as-is.
  const hasRichContent = Boolean(vertical.directAnswer && vertical.useCases && vertical.faqs)

  const articleSchema = hasRichContent
    ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: vertical.metaTitle,
        description: vertical.metaDescription,
        author: { '@type': 'Person', name: 'Agata Adamczak', url: 'https://lumiiadvisory.com/about' },
        publisher: { '@type': 'Organization', name: 'Lumii Advisory', url: 'https://lumiiadvisory.com' },
        datePublished: vertical.lastUpdated,
        dateModified: vertical.lastUpdated,
        url: `https://lumiiadvisory.com/who-we-help/${vertical.slug}`,
        mainEntityOfPage: `https://lumiiadvisory.com/who-we-help/${vertical.slug}`,
      }
    : null

  return (
    <div className="lumii">
      {articleSchema && <JsonLd data={articleSchema} />}

      <section className="page-intro section">
        <Breadcrumbs
          trail={[
            { name: 'Training for your team', href: '/who-we-help' },
            { name: vertical.heading, href: `/who-we-help/${vertical.slug}` },
          ]}
          lastLabel={vertical.category}
        />
        <p className="eyebrow">{vertical.category.toUpperCase()}</p>
        <h1>{vertical.heading}</h1>
        <p className="page-lead">{vertical.subheading}</p>
        <StatRow
          stats={sharedAIStats.map((stat) => ({
            value: stat.value,
            label: stat.label,
            source: `${stat.source}, ${stat.year}`,
            url: stat.url,
          }))}
        />
      </section>

      {hasRichContent && (
        <section className="section split" aria-labelledby="answer-title">
          <div>
            <p className="eyebrow">THE DIRECT ANSWER</p>
            <h2 id="answer-title">How is AI being used in {vertical.category.toLowerCase()} today?</h2>
          </div>
          <div className="prose">
            <p className="lead">{vertical.directAnswer}</p>
            {vertical.lastUpdated && (
              <p className="form-note">
                Last updated{' '}
                {new Date(vertical.lastUpdated).toLocaleDateString('en-AU', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}{' '}
                · By Agata Adamczak, Founder of Lumii Advisory
              </p>
            )}
          </div>
        </section>
      )}

      {hasRichContent && (
        <section className="section tint" aria-labelledby="usecases-title">
          <div className="section-top">
            <div>
              <p className="eyebrow">THE HIGHEST-VALUE USE CASES</p>
              <h2 id="usecases-title">Where AI delivers the strongest return in {vertical.category.toLowerCase()}.</h2>
            </div>
            <p className="topics-intro">
              Each use case is structured for measurable outcomes — with the proof point and the
              practical pattern that works inside a regulated environment.
            </p>
          </div>
          <div className="case-list">
            {vertical.useCases!.map((uc) => (
              <article
                className="case"
                key={uc.number}
                id={uc.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}
              >
                <div>
                  <p className="quiz-number">{uc.number}</p>
                  <h3 className="case-headline">{uc.title}</h3>
                  <p className="consequence">{uc.question}</p>
                </div>
                <div className="prose">
                  <p>{uc.body}</p>
                  {uc.stat && (
                    <div className="callout dark">
                      <p className="stat-feature">{uc.stat.value}</p>
                      <p>{uc.stat.label}</p>
                      {uc.stat.source && <p className="eyebrow">SOURCE: {uc.stat.source.toUpperCase()}</p>}
                    </div>
                  )}
                  <div className="callout">
                    <p className="eyebrow">THE PATTERN THAT WORKS</p>
                    <ol>
                      {uc.examples.map((ex, j) => (
                        <li key={j}>{ex}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="section split" aria-labelledby="challenge-title">
        <div>
          <p className="eyebrow">THE CHALLENGE</p>
          <h2 id="challenge-title">What I see in the market.</h2>
          <div className="prose stack-top">
            <p>{vertical.challenge}</p>
            <p>{vertical.body}</p>
          </div>
        </div>
        <blockquote className="callout dark" style={{ marginTop: 0 }}>
          <p className="band-quote small">
            “The right digital strategy doesn’t just solve today’s problems — it builds the capability
            to handle tomorrow’s opportunities.”
          </p>
          <p className="eyebrow">AGATA ADAMCZAK, FOUNDER</p>
        </blockquote>
      </section>

      <section className="section tint" aria-labelledby="help-title">
        <div className="section-top">
          <div>
            <p className="eyebrow">HOW I HELP</p>
            <h2 id="help-title">What working with Lumii delivers.</h2>
          </div>
        </div>
        <div className="detail-list">
          {vertical.outcomes.map((outcome, i) => (
            <div key={i}>
              <p className="eyebrow">{String(i + 1).padStart(2, '0')}</p>
              <p className="detail-title">{outcome}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="engage-title">
        <div className="section-top">
          <div>
            <p className="eyebrow">WAYS TO ENGAGE</p>
            <h2 id="engage-title">Three ways to work with Lumii.</h2>
          </div>
          <TextLink href="/ai-case-studies">AI adoption, analysed</TextLink>
        </div>
        <div className="card-grid three">
          {/* Current offers (Sept 2026 redesign), in its approved wording. */}
          <ContentCard
            label="COURSES"
            title="Find Your Light with AI"
            description="Practical AI skills, useful workflows and the judgement to use them well."
            href="/ai-courses"
            action="Explore AI courses"
            as="h3"
          />
          <ContentCard
            label="SPEAKING & OFFSITES"
            title="Keynotes & team workshops"
            description="Talks, panels and hands-on training shaped around your people."
            href="/ai-workshops"
            action="Explore AI workshops"
            as="h3"
          />
          <ContentCard
            label="ADVISORY"
            title={`AI advisory for ${vertical.category.toLowerCase()}`}
            description="AI readiness, workflow design and adoption through scoped projects and ongoing advisory."
            href="/work-with-us#advisory"
            action="Explore advisory"
            as="h3"
          />
        </div>
        <div className="tag-list stack-top" aria-label="Relevant disciplines">
          {vertical.services.map((service) => (
            <span className="tag" key={service}>
              {service}
            </span>
          ))}
        </div>
      </section>

      {hasRichContent && (
        <FaqSection
          faqs={vertical.faqs!}
          eyebrow="FREQUENTLY ASKED"
          title={`AI in ${vertical.category.toLowerCase()}, answered.`}
        />
      )}

      <CTABanner variant="industry" />
    </div>
  )
}
