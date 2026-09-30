import type { Metadata } from 'next'
import Image from 'next/image'
import EbookForm from '@/components/EbookForm'
import CTABanner from '@/components/CTABanner'
import { Breadcrumbs, JsonLd, SITE_URL, StatRow } from '@/components/lumii/seo'

const PAGE_URL = `${SITE_URL}/resources/ebook`

export const metadata: Metadata = {
  title: {
    absolute: 'Free AI Ebook: Find Your Light in the Age of AI | Lumii Advisory',
  },
  description:
    'Download the free ebook by Agata Adamczak — the 90-day AI strategy system for business leaders. A practical roadmap from AI curiosity to confident execution.',
  alternates: { canonical: PAGE_URL },
}

const chapters = [
  {
    number: '01',
    title: 'Where You Actually Stand',
    description: 'The honest diagnostic — assess your AI readiness across leadership, data, technology, and capability before you spend a dollar.',
  },
  {
    number: '02',
    title: 'Choosing the Right Use Cases',
    description: 'The prioritisation framework for identifying where AI creates real commercial value in your business — and what to ignore.',
  },
  {
    number: '03',
    title: 'Building the Business Case',
    description: 'How to frame AI investment in the language boards and CFOs respond to — risk, return, and accountability, not technology hype.',
  },
  {
    number: '04',
    title: 'Running Your First Pilot',
    description: 'The 30-day pilot structure that produces a measurable result without over-engineering — and how to avoid the most common failure modes.',
  },
  {
    number: '05',
    title: 'Scaling What Works',
    description: 'The operational and governance model for moving from one successful pilot to an AI capability embedded across the business.',
  },
  {
    number: '06',
    title: 'The 90-Day Roadmap',
    description: 'A week-by-week action plan — who does what, in what order, with what outcome. Built for business leaders, not technologists.',
  },
]

const bookSchema = {
  '@context': 'https://schema.org',
  '@type': 'Book',
  '@id': `${PAGE_URL}#book`,
  name: 'Find Your Light in the Age of AI',
  alternateName: 'The 90-Day AI Strategy System for Business Leaders',
  bookFormat: 'https://schema.org/EBook',
  author: { '@id': `${SITE_URL}/#agata` },
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en-AU',
  isAccessibleForFree: true,
  url: PAGE_URL,
  image: `${SITE_URL}/images/agata-ebook.png`,
  description:
    'A free six-part guide for business leaders: AI readiness, choosing use cases, building the business case, running a first pilot, scaling what works, and a 90-day roadmap.',
}

export default function EbookPage() {
  return (
    <div className="lumii">
      <JsonLd data={bookSchema} />
      <section className="page-intro section with-media">
        <div>
          <Breadcrumbs
            trail={[
              { name: 'Resources', href: '/resources' },
              { name: 'Free ebook', href: '/resources/ebook' },
            ]}
          />
          <p className="eyebrow">FREE EBOOK</p>
          <h1>Find Your Light in the Age of AI.</h1>
          <p className="page-lead">
            The 90-day AI strategy system for business leaders — from AI curiosity to confident,
            commercially-grounded execution.
          </p>
          <StatRow
            stats={[
              { value: '90', label: 'Day roadmap, week by week' },
              { value: '6', label: 'Core chapters with clear action steps' },
              { value: 'Free', label: 'Instant download, no spam' },
            ]}
          />
        </div>
        <div className="panel" id="download">
          <p className="eyebrow">FREE DOWNLOAD</p>
          <h2 className="panel-title">Get the free guide.</h2>
          <p className="form-note">
            Enter your details and your copy downloads instantly.
          </p>
          <EbookForm />
        </div>
      </section>

      <section className="section split" aria-labelledby="inside-title">
        <figure className="intro-media portrait">
          <Image
            src="/images/agata-ebook.png"
            width={1122}
            height={1402}
            alt="Agata Adamczak holding the Find Your Light in the Age of AI ebook"
          />
        </figure>
        <div>
          <p className="eyebrow">WHAT’S INSIDE</p>
          <h2 id="inside-title">Six chapters, one plan.</h2>
          <p className="page-lead stack-top">
            A six-part system built for mid-market leaders who want to move from AI experimentation
            to real commercial results — without burning budget on the wrong things.
          </p>
          <div className="detail-list stack-top">
            {chapters.map((chapter) => (
              <div key={chapter.number}>
                <p className="eyebrow">{chapter.number}</p>
                <h3 className="detail-title">{chapter.title}</h3>
                <p className="form-note">{chapter.description}</p>
              </div>
            ))}
          </div>
          <div className="byline">
            <Image
              src="/images/agata-charcoal-editorial.webp"
              width={120}
              height={120}
              alt="Agata Adamczak"
            />
            <div>
              <strong>Agata Adamczak</strong>
              <span>Founder, Lumii Advisory · Nearly 20 years across data, digital strategy, search and AI visibility</span>
            </div>
          </div>
        </div>
      </section>

      <CTABanner variant="reading" />
    </div>
  )
}
