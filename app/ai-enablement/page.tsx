import type { Metadata } from 'next'
import Image from 'next/image'
import OfferIntro from '@/components/lumii/OfferIntro'
import { ContentCard, PageCta, TextLink } from '@/components/lumii/primitives'
import { FaqSection, JsonLd, SITE_URL } from '@/components/lumii/seo'
import { OFFER_URLS, SERVICE_AREA } from '@/lib/offers'
import { methodSteps, osComponents } from '@/lib/operating-system'

/** "a, b and c" */
const listOf = (items: string[]) => `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`

const PAGE_URL = `${SITE_URL}${OFFER_URLS.enablement}`
const TITLE = 'AI Enablement Consultant Sydney | Lumii Advisory'
const DESCRIPTION =
  'AI enablement consulting in Sydney with Agata Adamczak: use cases, tools, training and guardrails that turn AI licences into everyday capability. Courses, workshops and advisory.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PAGE_URL },
}

// Definition and the four parts are from the Insights article
// "What Is AI Enablement?", so the site gives one consistent answer.
const DEFINITION =
  'AI enablement is the work of building an organisation’s capability to use AI effectively. It sits between AI strategy (the plan) and AI tools (the technology): identifying the right use cases, selecting and integrating the right tools, training people to use them well, and putting practical governance in place.'

const parts = [
  {
    label: '01 / USE CASES',
    title: 'Where AI actually helps',
    text: 'Working out which tasks, teams and workflows benefit from AI, rather than applying it everywhere at once.',
  },
  {
    label: '02 / TOOLS',
    title: 'The right tools, connected',
    text: 'Choosing AI tools for those use cases and connecting them into how your team already works, rather than adding an app nobody opens.',
  },
  {
    label: '03 / PEOPLE',
    title: 'Training and capability',
    text: 'Teaching people not just how to use a tool, but when and how to use it well — including its limits.',
  },
  {
    label: '04 / GOVERNANCE',
    title: 'Practical guardrails',
    text: 'Simple rules covering what data can be used, how outputs are checked, and who is accountable.',
  },
]

const faqs = [
  { q: 'What is AI enablement?', a: DEFINITION },
  {
    q: 'How is AI enablement different from AI strategy?',
    a: 'AI strategy answers “what should we do and why” at the organisational level — it’s the plan. AI governance answers “what are we and aren’t we allowed to do” — it’s the guardrails. AI enablement is the bridge between the two: the practical, hands-on work of turning a strategic decision and a governance framework into something your team can actually do on a Tuesday afternoon.',
  },
  {
    q: 'What does an AI enablement consultant do?',
    a: 'Turns AI from licences into working capability. At Lumii that means agreeing where AI should help, redesigning specific workflows around it, setting guardrails people can actually use, and training the team through courses and hands-on workshops — then measuring what changed.',
  },
  {
    q: 'Why do AI rollouts fail without enablement?',
    a: 'Most disappointing AI rollouts are tooling without enablement. Licences handed to staff with no training, no use cases and no guidance produce email drafts, not transformation.',
  },
  {
    q: 'How long does AI enablement take?',
    a: 'It depends on the scope. Courses, talks and workshops are shaped around your people and agreed with you first. For advisory work, a focused project on a specific challenge or AI readiness assessment typically runs two to four weeks; a longer programme covering strategy, planning and implementation oversight typically runs three to six months; and ongoing advisory is structured monthly.',
  },
  {
    q: 'Where should a business start with AI enablement?',
    a: 'Start with your people and the work they already do. Many businesses begin with a Find Your Light with AI course or a team workshop, alongside the free AI Readiness Checklist to see where the business stands.',
  },
  { q: 'Is Lumii an AI enablement consultant in Sydney?', a: `Yes. ${SERVICE_AREA}` },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'AI enablement consulting',
  alternateName: ['AI enablement consultant', 'AI adoption consulting'],
  serviceType: 'AI Enablement Consulting',
  description: DEFINITION,
  url: PAGE_URL,
  provider: [{ '@id': `${SITE_URL}/#organization` }, { '@id': `${SITE_URL}/#agata` }],
  areaServed: [
    { '@type': 'City', name: 'Sydney' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Place', name: 'Asia-Pacific' },
  ],
  isRelatedTo: [
    { '@id': `${SITE_URL}${OFFER_URLS.courses}#service` },
    { '@id': `${SITE_URL}${OFFER_URLS.workshops}#service` },
  ],
}

export default function AiEnablementPage() {
  return (
    <div className="lumii">
      <JsonLd data={schema} />
      <OfferIntro
        trail={[
          { name: 'Work with Lumii', href: '/work-with-us' },
          { name: 'AI enablement', href: OFFER_URLS.enablement },
        ]}
        eyebrow="AI ENABLEMENT CONSULTANT · SYDNEY"
        title={
          <>
            AI enablement for businesses
            <br />
            ready to put AI to work.
          </>
        }
        lead="Buying the tools is the easy part. Lumii helps businesses build the priorities, workflows, guardrails and confidence that make AI part of the way they work."
        primary={{ href: '/contact?interest=advisory', label: 'Talk about AI enablement' }}
        secondary={{ href: '/resources/ai-readiness-checklist', label: 'Take the free readiness checklist' }}
        media={
          <figure className="intro-media portrait">
            <Image
              src="/images/agata-charcoal-editorial.webp"
              width={1122}
              height={1402}
              priority
              alt="Agata Adamczak, AI enablement consultant and founder of Lumii Advisory, Sydney"
            />
          </figure>
        }
      />

      <section className="section split" aria-labelledby="what-title">
        <h2 id="what-title">What is AI enablement?</h2>
        <div className="prose">
          <p className="lead">{DEFINITION}</p>
          <p>
            It’s the difference between owning AI tools and using them well. A marketing team given
            AI enablement doesn’t just get access to a writing tool — they get specific, documented
            use cases, a working session on how to brief AI for each one, and a simple way to review
            output before it goes out.
          </p>
          <TextLink href="/insights/what-is-ai-enablement">Read: What is AI enablement?</TextLink>
        </div>
      </section>

      <section className="section courses" aria-labelledby="parts-title">
        <div className="section-top">
          <div>
            <p className="eyebrow">WHAT IT INCLUDES</p>
            <h2 id="parts-title">What an AI enablement consultant does.</h2>
          </div>
        </div>
        <div className="card-grid two">
          {parts.map((part) => (
            <ContentCard key={part.label} label={part.label} title={part.title} description={part.text} as="h3" />
          ))}
        </div>
      </section>

      {/* A summary only: the framework and method are explained in full on
          /ai-operating-system, so they aren't repeated here. */}
      <section className="section method" aria-labelledby="os-title">
        <p className="eyebrow">THE FRAMEWORK BEHIND THE WORK</p>
        <h2 id="os-title">Built on the Lumii AI Operating System.</h2>
        <p className="section-description">
          Every engagement draws on the same five components —{' '}
          {listOf(osComponents.map((c) => c.label.split(' / ')[1].toLowerCase()))} — and is put into
          practice in four steps: {listOf(methodSteps.map((s) => s.title.toLowerCase()))}. The scope
          changes with the engagement. The discipline stays the same.
        </p>
        <TextLink href="/ai-operating-system" className="button yellow">
          Explore the framework and method
        </TextLink>
      </section>

      <section className="section" aria-labelledby="start-title">
        <div className="section-top">
          <div>
            <p className="eyebrow">WAYS TO START</p>
            <h2 id="start-title">Choose the support that fits.</h2>
          </div>
        </div>
        <div className="card-grid three">
          <ContentCard
            label="BUILD CAPABILITY"
            title="AI courses"
            description="Find Your Light with AI builds the confidence, judgement and everyday habits to use AI well."
            href={OFFER_URLS.courses}
            action="Explore AI courses"
            as="h3"
          />
          <ContentCard
            label="BRING PEOPLE TOGETHER"
            title="Workshops & keynotes"
            description="Hands-on team training and talks for offsites, planning days and events."
            href={OFFER_URLS.workshops}
            action="Explore AI workshops"
            as="h3"
          />
          <ContentCard
            label="WHEN THE WORK GOES DEEPER"
            title="Advisory"
            description="AI readiness, workflow design and adoption through scoped projects and ongoing advisory."
            href="/work-with-us#advisory"
            action="Explore advisory"
            as="h3"
          />
        </div>
      </section>

      <FaqSection faqs={faqs} title="Questions about AI enablement." />

      <PageCta />
    </div>
  )
}
