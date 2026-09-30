'use client'

import { useState } from 'react'
import { faqs } from '@/lib/faq'
import { ContentCard, PageCta, PageIntro } from '@/components/lumii/primitives'

const categories = Array.from(new Set(faqs.map((f) => f.category)))

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

export default function FAQPage() {
  const [active, setActive] = useState<string | null>(null)
  const shown = active ? faqs.filter((f) => f.category === active) : faqs

  const filter = (label: string, value: string | null, count: number) => (
    <button
      key={label}
      type="button"
      className="library-filter"
      aria-pressed={active === value}
      onClick={() => setActive(value)}
    >
      {label} <span>{count}</span>
    </button>
  )

  return (
    <div className="lumii">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageIntro
        label="COMMON QUESTIONS"
        title={
          <>
            Questions I hear
            <br />
            most often.
          </>
        }
        lead="Straightforward answers about AI courses, workshops, keynotes and advisory — before, during and after the first conversation."
      />

      <section className="section" aria-label="Questions and answers">
        <div className="prose prose-wide">
          <div className="library-filters" role="group" aria-label="Filter questions by topic">
            {filter('All', null, faqs.length)}
            {categories.map((c) => filter(c, c, faqs.filter((f) => f.category === c).length))}
          </div>
          {/* Native <details>: every answer is in the HTML, so search engines
              and AI crawlers read it without running JavaScript. */}
          <div className="learning-list">
            {shown.map((item, i) => (
              <details key={item.question} open={i === 0}>
                <summary>
                  <span className="number">{String(i + 1).padStart(2, '0')}</span>
                  <h2 className="faq-question">{item.question}</h2>
                  <span className="plus" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section tint" aria-label="Next steps">
        <div className="card-grid three">
          <ContentCard
            label="STILL HAVE A QUESTION?"
            title="Speak to Agata directly."
            description="If your question isn’t answered here, book a 30-minute call. No pitch — just an honest conversation about your situation."
            href="/contact"
            action="Get in touch"
            as="h3"
          />
          <ContentCard
            label="FREE EBOOK"
            title="Start with the 90-day guide."
            description="Find Your Light in the Age of AI — six chapters covering readiness, use case selection, business case, pilot design and scaling."
            href="/resources/ebook"
            action="Get the free ebook"
            as="h3"
          />
          <ContentCard
            label="ASSESS YOUR READINESS"
            title="Where does your business sit?"
            description="Take the AI Readiness Checklist — 35 questions across 7 dimensions — for a scored picture of your AI maturity in 15 minutes."
            href="/resources/ai-readiness-checklist"
            action="Start the checklist"
            as="h3"
          />
        </div>
      </section>

      <PageCta />
    </div>
  )
}
