import type { Metadata } from 'next'
import OfferIntro, { CoverCard } from '@/components/lumii/OfferIntro'
import { ContentCard, PageCta, TextLink } from '@/components/lumii/primitives'
import { FaqSection, JsonLd, SITE_URL } from '@/components/lumii/seo'
import { OFFER_URLS, PRICING_ANSWER, SERVICE_AREA, learningSteps, speakingTopics, topicTitle } from '@/lib/offers'

const PAGE_URL = `${SITE_URL}${OFFER_URLS.workshops}`
const TITLE = 'AI Workshops & Team Training for Offsites | Sydney | Lumii'
const DESCRIPTION =
  'Hands-on AI workshops and team training for offsites and planning days. Your team works through real briefs, questions the outputs and leaves with next steps. Sydney-based.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PAGE_URL },
}

const DEFINITION =
  'An AI team workshop is a hands-on session where your people practise using AI on their own work, together. At Lumii, workshops are led by Agata Adamczak and built into your team training day or offsite agenda: the team works through real briefs, questions what AI produces and identifies what they can apply when they return to work.'

const briefing = speakingTopics.find((t) => t.id === 'topic-briefing')!

const faqs = [
  {
    q: 'What is an AI workshop for teams?',
    a: DEFINITION,
  },
  {
    q: 'What’s the difference between an AI workshop and an AI talk?',
    a: 'A talk gets people thinking: a clear perspective on AI, the changing way we work and what it means for your people. A workshop gets people doing: practical exploration and shared learning on work your team recognises. Many events combine the two.',
  },
  {
    q: 'Can an AI workshop be part of our team offsite?',
    a: 'Yes — that’s what it’s designed for. Give AI a place in your offsite agenda with hands-on exploration, then leave with specific next steps the team can apply back at work.',
  },
  {
    q: 'What will our team be able to do after an AI workshop?',
    a: 'Write clearer briefs for AI, check and challenge what comes back, handle information responsibly, and apply those habits to repeatable tasks in their own roles. The aim is ways of working your people can keep improving, not a one-off demonstration.',
  },
  {
    q: 'Do you tailor AI training to our team and industry?',
    a: 'Yes. Every session starts with your people, their roles and what you want to change, and the examples and exercises follow from that conversation — for marketing, sales, retail, professional services and other teams.',
  },
  {
    q: 'How much does an AI workshop cost?',
    a: PRICING_ANSWER,
  },
  {
    q: 'Where do you run AI workshops?',
    a: SERVICE_AREA,
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'AI workshops and team training',
  alternateName: ['AI team offsite workshops', 'AI team training', 'Corporate AI workshops'],
  serviceType: 'Offsite AI Team Training',
  description: DEFINITION,
  url: PAGE_URL,
  provider: { '@id': `${SITE_URL}/#organization` },
  areaServed: [
    { '@type': 'City', name: 'Sydney' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Place', name: 'Asia-Pacific' },
  ],
  audience: { '@type': 'BusinessAudience', audienceType: 'Business teams and leadership groups' },
}

export default function AiWorkshopsPage() {
  return (
    <div className="lumii">
      <JsonLd data={schema} />
      <OfferIntro
        trail={[
          { name: 'Work with Lumii', href: '/work-with-us' },
          { name: 'AI workshops', href: OFFER_URLS.workshops },
        ]}
        eyebrow="AI WORKSHOPS & TEAM TRAINING · SYDNEY"
        title={
          <>
            AI workshops that make your offsite
            <br />
            the start of something.
          </>
        }
        lead="Give AI a place in your offsite agenda. Hands-on exploration and shared learning, on work your team recognises — so the energy in the room carries back to the desk."
        primary={{ href: '/contact?interest=offsite', label: 'Plan your team workshop' }}
        secondary={{ href: OFFER_URLS.keynotes, label: 'Add a keynote or panel talk' }}
        media={
          <CoverCard
            label="HANDS-ON TEAM TRAINING"
            lines={['Stop', 'Prompting.', 'Start', <em key="b">Briefing</em>]}
            footer={['BRING A REAL TASK.', 'LEAVE WITH', 'A NEXT STEP.']}
          />
        }
      />

      <section className="section split" aria-labelledby="what-title">
        <h2 id="what-title">What is an AI team workshop?</h2>
        <div className="prose">
          <p className="lead">{DEFINITION}</p>
          <p>
            Bring a fresh perspective on AI into the room. Give your people space to question,
            experiment and connect it to their own work.
          </p>
        </div>
      </section>

      <section className="section courses" aria-labelledby="work-title">
        <div className="section-top">
          <div>
            <p className="eyebrow">WHAT WE CAN WORK THROUGH</p>
            <h2 id="work-title">What happens in the room.</h2>
          </div>
        </div>
        <div className="card-grid three">
          {learningSteps.map((step) => (
            <ContentCard key={step.number} label={step.number} title={step.title} description={step.body} as="h3" />
          ))}
        </div>
      </section>

      <section className="section secondary-offer" id={briefing.id} aria-labelledby="briefing-title">
        <div>
          <p className="eyebrow">{briefing.label}</p>
          <h2 id="briefing-title">{topicTitle(briefing)}</h2>
        </div>
        <div>
          <p>{briefing.body}</p>
          <p>
            <strong>For:</strong> {briefing.audience}.
          </p>
          <TextLink href={`${OFFER_URLS.keynotes}#topics`}>See all four speaking topics</TextLink>
        </div>
      </section>

      <section className="section" aria-labelledby="options-title">
        <div className="section-top">
          <div>
            <p className="eyebrow">SHAPE YOUR EVENT</p>
            <h2 id="options-title">Get people thinking. Get people doing.</h2>
          </div>
        </div>
        <div className="card-grid three">
          <ContentCard
            label="GET PEOPLE THINKING"
            title="Keynotes & panels"
            description="Clear perspectives on AI, the changing way we work and what it means for the people in your business."
            href={OFFER_URLS.keynotes}
            action="AI keynote topics"
            as="h3"
          />
          <ContentCard
            label="GET PEOPLE DOING"
            title="Hands-on team training"
            description="Practical exploration, shared learning and work your team recognises, built into your offsite or planning day."
            href="/contact?interest=offsite"
            action="Plan a workshop"
            as="h3"
          />
          <ContentCard
            label="KEEP IT GOING"
            title="The course series"
            description="Build the confidence, judgement and everyday habits to use AI well, with Find Your Light with AI."
            href={OFFER_URLS.courses}
            action="Explore AI courses"
            as="h3"
          />
        </div>
      </section>

      <FaqSection faqs={faqs} title="Questions about AI workshops and team training." />

      <PageCta
        title="Make your next offsite the start of something."
        description="Tell me about your team, your event and what you want to change."
      />
    </div>
  )
}
