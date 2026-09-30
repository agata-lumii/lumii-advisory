import type { Metadata } from 'next'
import Image from 'next/image'
import OfferIntro from '@/components/lumii/OfferIntro'
import { ContentCard, PageCta, TextLink } from '@/components/lumii/primitives'
import { FaqSection, JsonLd, SITE_URL } from '@/components/lumii/seo'
import { OFFER_URLS, PRICING_ANSWER, SERVICE_AREA, speakingTopics, topicTitle } from '@/lib/offers'

const PAGE_URL = `${SITE_URL}${OFFER_URLS.keynotes}`
const TITLE = 'AI Keynote Speaker Sydney: Talks & Panels | Agata Adamczak'
const DESCRIPTION =
  'AI keynotes and panel talks by Agata Adamczak, founder of Lumii Advisory. Four topics on AI at work, leadership, briefing AI and brand visibility in AI search. Sydney-based.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    images: [{ url: `${SITE_URL}/images/agata-speaking-panel.jpg`, width: 1170, height: 784, alt: 'Agata Adamczak speaking on a panel' }],
  },
}

const DEFINITION =
  'Agata Adamczak is a Sydney-based AI speaker and the founder of Lumii Advisory. Her keynotes and panel talks bring a clear, practical perspective on AI into the room — how work is changing, what leaders need to put in place, how to brief AI well, and how brands get found in AI search — drawing on nearly 20 years across data, digital strategy, search and AI visibility.'

const faqs = [
  {
    q: 'What does Agata Adamczak speak about?',
    a: `Four topics, each shaped around your audience: ${speakingTopics.map((t) => `${topicTitle(t)} (for ${t.audience})`).join('; ')}.`,
  },
  {
    q: 'Can an AI keynote be tailored to our audience?',
    a: 'Yes. Start with the question your audience needs to answer, then shape the session around your people and your event. The topics are starting points, not fixed scripts.',
  },
  {
    q: 'Does Agata speak on panels as well as giving keynotes?',
    a: 'Yes. Agata speaks on panels as well as giving talks — for example on a Havas panel at Amazon’s office — and can join a panel discussion shaped around your event.',
  },
  {
    q: 'Can a keynote be combined with hands-on AI training?',
    a: 'Yes. A talk gets people thinking; a hands-on workshop gets them doing. The two work well together: the keynote sets the perspective, and the workshop turns it into practice.',
  },
  {
    q: 'What is Agata’s background?',
    a: 'Nearly 20 years across data, digital strategy, search and AI visibility, with experience across the UK, US and APAC. As Botify’s first ANZ hire and Solutions Consulting Director for JAPAC, she helped establish the company’s regional presence and bring its emerging AI capabilities to market, before founding Lumii Advisory.',
  },
  {
    q: 'How much does an AI keynote cost?',
    a: PRICING_ANSWER,
  },
  {
    q: 'Where is Agata based?',
    a: SERVICE_AREA,
  },
]

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${PAGE_URL}#service`,
    name: 'AI keynotes and panel talks',
    alternateName: ['AI keynote speaker', 'AI conference speaker', 'AI panel speaker'],
    serviceType: 'AI Speaking and Panels',
    description: DEFINITION,
    url: PAGE_URL,
    // Delivered by Agata, through Lumii Advisory.
    provider: [{ '@id': `${SITE_URL}/#organization` }, { '@id': `${SITE_URL}/#agata` }],
    areaServed: [
      { '@type': 'City', name: 'Sydney' },
      { '@type': 'Country', name: 'Australia' },
      { '@type': 'Place', name: 'Asia-Pacific' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Speaking topics',
      itemListElement: speakingTopics.map((topic) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: topicTitle(topic),
          description: topic.body,
          url: `${PAGE_URL}#${topic.id}`,
        },
      })),
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: `${SITE_URL}/images/agata-speaking-panel.jpg`,
    caption: 'Agata Adamczak on the panel at a Havas event at Amazon',
    about: { '@id': `${SITE_URL}/#agata` },
  },
]

export default function AiKeynotePage() {
  return (
    <div className="lumii">
      <JsonLd data={schema} />
      <OfferIntro
        trail={[
          { name: 'Work with Lumii', href: '/work-with-us' },
          { name: 'AI keynotes', href: OFFER_URLS.keynotes },
        ]}
        eyebrow="AI KEYNOTE SPEAKER · SYDNEY"
        title={
          <>
            AI keynotes and panels that
            <br />
            move people forward.
          </>
        }
        lead="Bring a fresh perspective on AI into the room. Give your people space to question, experiment and connect it to their own work."
        primary={{ href: '/contact?interest=speaking', label: 'Discuss your event' }}
        secondary={{ href: '#topics', label: 'See the four topics' }}
        media={
          <figure className="event-image">
            {/* Original supplied photo; lighting lift and ratio applied in CSS only. */}
            <Image
              src="/images/agata-speaking-panel.jpg"
              width={1170}
              height={784}
              priority
              alt="Agata Adamczak speaking on a Havas panel at Amazon’s office"
            />
            <figcaption>Agata on the panel · Havas event at Amazon</figcaption>
          </figure>
        }
      />

      <section className="section split" aria-labelledby="who-title">
        <h2 id="who-title">Who is Agata Adamczak?</h2>
        <div className="prose">
          <p className="lead">{DEFINITION}</p>
          <p>
            As Botify’s first ANZ hire and Solutions Consulting Director for JAPAC, she helped
            establish the company’s regional presence and bring its emerging AI capabilities to
            market. It’s the perspective she brings to every talk: explain the technology clearly,
            connect it to real work and help people use it with confidence.
          </p>
          <TextLink href="/about">More about Agata</TextLink>
        </div>
      </section>

      <section className="topics section" id="topics" aria-labelledby="topics-title">
        <div className="section-top">
          <div>
            <p className="eyebrow">SPEAKING TOPICS</p>
            <h2 id="topics-title">
              Four AI keynote topics,
              <br />
              <em>shaped around your event.</em>
            </h2>
          </div>
          <p className="topics-intro">
            Start with the question your audience needs to answer. Shape the session around your
            people and your event.
          </p>
        </div>
        <div className="topics-grid">
          {speakingTopics.map((topic) => (
            <article className="topic" id={topic.id} key={topic.id}>
              <span className="eyebrow">{topic.label}</span>
              <h3>
                {topic.title[0]}
                <br />
                {topic.title[1]}
              </h3>
              <p>{topic.body}</p>
              <p className="topic-audience">
                <strong>For:</strong> {topic.audience}
              </p>
              <TextLink href="/contact?interest=speaking" arrow="↗">
                Discuss this topic
              </TextLink>
            </article>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="formats-title">
        <div className="section-top">
          <div>
            <p className="eyebrow">SHAPE YOUR EVENT</p>
            <h2 id="formats-title">Get people thinking. Get people doing.</h2>
          </div>
        </div>
        <div className="card-grid three">
          <ContentCard
            label="GET PEOPLE THINKING"
            title="Keynotes & panels"
            description="Clear perspectives on AI, the changing way we work and what it means for the people in your business."
            as="h3"
          />
          <ContentCard
            label="GET PEOPLE DOING"
            title="Hands-on team training"
            description="Give AI a place in your offsite agenda with practical exploration, shared learning and work your team recognises."
            href={OFFER_URLS.workshops}
            action="AI workshops for offsites"
            as="h3"
          />
          <ContentCard
            label="BRANDS & AI SEARCH"
            title="AI visibility advisory"
            description="For brands that want to know how they show up when buyers ask AI to shortlist their options."
            href={OFFER_URLS.visibility}
            action="Explore AI visibility"
            as="h3"
          />
        </div>
      </section>

      <FaqSection faqs={faqs} title="Questions about booking an AI keynote." />

      <PageCta
        title="A spark in the room. A shift in the work."
        description="Tell me about your audience and your event."
      />
    </div>
  )
}
