import type { Metadata } from 'next'
import { PageCta, PageIntro } from '@/components/lumii/primitives'
import { methodSteps, osComponents, osFaqs } from '@/lib/operating-system'

const PAGE_URL = 'https://lumiiadvisory.com/ai-operating-system'
const TITLE = 'The Lumii AI Operating System & Approach'
const DESCRIPTION =
  'The five components behind practical AI enablement, and the Lumii method: Illuminate, Align, Activate, Accelerate.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PAGE_URL, type: 'article' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: osFaqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: TITLE,
  description: DESCRIPTION,
  author: { '@type': 'Person', name: 'Agata Adamczak', url: 'https://lumiiadvisory.com/about' },
  publisher: { '@type': 'Organization', name: 'Lumii Advisory', url: 'https://lumiiadvisory.com' },
  datePublished: '2026-06-05',
  dateModified: '2026-09-30',
  url: PAGE_URL,
  mainEntityOfPage: PAGE_URL,
}

export default function AiOperatingSystemPage() {
  return (
    <div className="lumii">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <PageIntro
        label="THE LUMII FRAMEWORK"
        title={
          <>
            AI needs a place
            <br />
            in the way you work.
          </>
        }
        lead="Tools alone do not create capability. The Lumii AI Operating System connects commercial direction, guardrails, workflows, people and measurement."
      />

      <section className="section editorial-list">
        {osComponents.map((component) => (
          <article key={component.label}>
            <p className="eyebrow">{component.label}</p>
            <h2>{component.title}</h2>
            <p>{component.text}</p>
          </article>
        ))}
      </section>

      {/* Consolidates the retired /how-we-work page, which 301s here. */}
      <section className="section method" id="method">
        <p className="eyebrow">HOW WE PUT IT INTO PRACTICE</p>
        <h2>
          Illuminate. Align.
          <br />
          Activate. Accelerate.
        </h2>
        <p className="section-description">
          The scope changes with the engagement. The discipline stays the same.
        </p>
        <div className="card-grid two">
          {methodSteps.map((step) => (
            <article className="content-card" key={step.number}>
              <p className="eyebrow">{step.number}</p>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Not in the design reference: the page's existing FAQ, kept with its
          FAQPage schema so indexed, answer-first content isn't lost. */}
      <section className="section" id="questions" aria-labelledby="questions-title">
        <div className="section-top">
          <div>
            <p className="eyebrow">COMMON QUESTIONS</p>
            <h2 id="questions-title">Questions about the framework.</h2>
          </div>
        </div>
        <div className="editorial-list">
          {osFaqs.map((faq, i) => (
            <article key={faq.q}>
              <p className="eyebrow">{String(i + 1).padStart(2, '0')}</p>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </article>
          ))}
        </div>
      </section>

      <PageCta
        title="Build capability that stays."
        description="Explore the course series or discuss the support your team needs."
      />
    </div>
  )
}
