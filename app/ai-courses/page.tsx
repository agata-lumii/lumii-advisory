import type { Metadata } from 'next'
import OfferIntro, { CourseCover } from '@/components/lumii/OfferIntro'
import { ContentCard, PageCta, TextLink } from '@/components/lumii/primitives'
import { FaqSection, JsonLd, SITE_URL } from '@/components/lumii/seo'
import { trainingAudiences } from '@/lib/training-audiences'
import { COURSE_NAME, OFFER_URLS, PRICING_ANSWER, SERVICE_AREA, learningSteps } from '@/lib/offers'

const PAGE_URL = `${SITE_URL}${OFFER_URLS.courses}`
const TITLE = 'AI Courses for Businesses & Teams in Sydney | Lumii Advisory'
const DESCRIPTION =
  'Find Your Light with AI: practical AI courses for business teams, led by Agata Adamczak in Sydney. Build the confidence, judgement and habits to use AI well at work.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PAGE_URL },
}

const DEFINITION =
  'Find Your Light with AI is Lumii Advisory’s AI course series for businesses, led by founder Agata Adamczak in Sydney. It builds the confidence, judgement and everyday habits people need to use AI well — starting with the tasks they already do, then turning useful ideas into repeatable workflows.'

const faqs = [
  {
    q: 'What will my team learn on an AI course?',
    a: `Three things, in order. ${learningSteps.map((s) => `${s.title}: ${s.body.charAt(0).toLowerCase()}${s.body.slice(1)}`).join(' ')}`,
  },
  {
    q: 'Who are Lumii’s AI courses for?',
    a: 'Businesses taking AI enablement seriously. Courses are shaped around the roles in your team — marketing and growth, sales and commercial, retail and ecommerce, professional services and other industries — so the examples come from the work your people actually do.',
  },
  {
    q: 'Is an AI course the same as the free ebook?',
    a: 'No. The free ebook helps you think through AI adoption. Find Your Light with AI is Lumii’s course series for businesses ready to build practical skills together.',
  },
  {
    q: 'Can the course run as part of a team offsite?',
    a: 'Yes. The same practical approach can run as a hands-on AI workshop within your offsite agenda, so the team works through real briefs together and leaves with next steps they can apply back at work.',
  },
  {
    q: 'How much does an AI course cost?',
    a: PRICING_ANSWER,
  },
  {
    q: 'Where are Lumii’s AI courses run?',
    a: SERVICE_AREA,
  },
]

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': `${PAGE_URL}#course`,
    name: COURSE_NAME,
    description: DEFINITION,
    url: PAGE_URL,
    inLanguage: 'en-AU',
    // Named inline as well: Google's Course check wants the provider name here.
    provider: { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: 'Lumii Advisory', sameAs: SITE_URL },
    about: ['AI enablement', 'Generative AI at work', 'AI literacy'],
    teaches: learningSteps.map((s) => `${s.title}: ${s.body}`),
    audience: { '@type': 'BusinessAudience', audienceType: 'Businesses and their teams' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${PAGE_URL}#service`,
    name: 'AI courses for businesses',
    alternateName: ['AI team training', 'AI training for employees'],
    serviceType: 'AI Training Courses',
    description: DESCRIPTION,
    url: PAGE_URL,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: [
      { '@type': 'City', name: 'Sydney' },
      { '@type': 'Country', name: 'Australia' },
      { '@type': 'Place', name: 'Asia-Pacific' },
    ],
    subjectOf: { '@id': `${PAGE_URL}#course` },
  },
]

export default function AiCoursesPage() {
  return (
    <div className="lumii">
      <JsonLd data={schema} />
      <OfferIntro
        trail={[
          { name: 'Work with Lumii', href: '/work-with-us' },
          { name: 'AI courses', href: OFFER_URLS.courses },
        ]}
        eyebrow="AI COURSES FOR BUSINESSES · SYDNEY"
        title={
          <>
            AI courses that show up
            <br />
            in the work.
          </>
        }
        lead="For businesses taking AI enablement seriously. Give your team a clearer understanding of AI, practical ways to apply it and the judgement to use it well."
        primary={{ href: '/contact?interest=courses', label: 'Talk about courses for your team' }}
        secondary={{ href: OFFER_URLS.workshops, label: 'Run it as an offsite workshop' }}
        media={<CourseCover />}
      />

      <section className="section split" aria-labelledby="what-title">
        <h2 id="what-title">
          What is Find Your Light with AI?
        </h2>
        <div className="prose">
          <p className="lead">{DEFINITION}</p>
          <p>
            Buying the tools is the easy part. Building the confidence, judgement and everyday
            habits to use them well takes something more. The course brings AI into the work your
            people actually do, so learning has somewhere to go when everyone gets back to their
            desk.
          </p>
        </div>
      </section>

      <section className="section courses" aria-labelledby="learn-title">
        <div className="section-top">
          <div>
            <p className="eyebrow">THE COURSE</p>
            <h2 id="learn-title">What your team will learn.</h2>
          </div>
        </div>
        <div className="card-grid three">
          {learningSteps.map((step) => (
            <ContentCard key={step.number} label={step.number} title={step.title} description={step.body} as="h3" />
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="who-title">
        <div className="section-top">
          <div>
            <p className="eyebrow">FOR YOUR TEAM</p>
            <h2 id="who-title">Who the courses are for.</h2>
          </div>
          <p className="topics-intro">
            Start with the work your people actually do. Each course is shaped around their roles,
            questions and workflows.
          </p>
        </div>
        <div className="card-grid two">
          {trainingAudiences.map((audience) => (
            <ContentCard
              key={audience.slug}
              label="AI TRAINING"
              title={audience.name}
              description={audience.description}
              href={`/who-we-help/${audience.slug}`}
              action="Explore training"
              as="h3"
            />
          ))}
        </div>
        <p className="stack-top">
          <TextLink href="/who-we-help">Training for other industries</TextLink>
        </p>
      </section>

      <section className="section secondary-offer" aria-labelledby="built-title">
        <div>
          <p className="eyebrow">BUILT AROUND YOUR TEAM</p>
          <h2 id="built-title">
            Bring a real task.
            <br />
            Leave with a next step.
          </h2>
        </div>
        <div>
          <p>
            We start with your team’s roles, current use of AI and the work you want to improve. The
            examples and exercises follow from that conversation.
          </p>
          <p>
            Clear briefs, careful review and responsible information handling run through the
            learning. The aim is to build ways of working your people can apply and keep improving.
          </p>
          <TextLink href={OFFER_URLS.workshops}>AI workshops for team offsites</TextLink>
          <TextLink href={OFFER_URLS.keynotes}>AI keynotes and panel talks</TextLink>
          <TextLink href={OFFER_URLS.enablement}>AI enablement consulting</TextLink>
        </div>
      </section>

      <FaqSection faqs={faqs} title="Questions about AI courses for teams." />

      <PageCta />
    </div>
  )
}
