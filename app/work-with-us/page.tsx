import type { Metadata } from 'next'
import { ContentCard, PageCta, PageIntro, TextLink } from '@/components/lumii/primitives'

const SITE_URL = 'https://lumiiadvisory.com'
const PAGE_URL = `${SITE_URL}/work-with-us`

export const metadata: Metadata = {
  title: { absolute: 'Courses, Speaking & AI Training | Lumii Advisory' },
  description:
    'Find Your Light with AI courses, speaking, offsite training and focused AI advisory for businesses.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Courses, Speaking & AI Training | Lumii Advisory',
    description:
      'Find Your Light with AI courses, speaking, offsite training and focused AI advisory for businesses.',
    url: PAGE_URL,
  },
}

const offers = [
  {
    id: 'courses',
    label: '01 / COURSES',
    title: 'Find Your Light with AI',
    description:
      'Build the confidence, judgement and everyday habits to use AI well. Start with the tasks your people do, then practise turning useful ideas into repeatable workflows.',
    href: '/#courses',
    action: 'Explore the course series',
    serviceType: 'AI Training Courses',
  },
  {
    id: 'speaking',
    label: '02 / SPEAKING',
    title: 'A perspective worth bringing into the room.',
    description:
      'Talks and panels on AI at work, leadership and how brands get discovered. Choose from four topics, then shape the discussion around your audience.',
    href: '/#speaking',
    action: 'Explore speaking topics',
    serviceType: 'AI Speaking and Panels',
  },
  {
    id: 'offsite-training',
    label: '03 / OFFSITE TRAINING',
    title: 'Put the learning into practice.',
    description:
      'Make room in your offsite for hands-on AI exploration. Work through briefs, question the outputs and identify what your team can apply when they return to work.',
    href: '/#offsite-training',
    action: 'Plan your offsite session',
    serviceType: 'Offsite AI Team Training',
  },
]

const advisoryDescription =
  'Some challenges need more than a course or a workshop. Lumii also supports AI readiness, workflow design and adoption through scoped projects and ongoing advisory.'

// Carries forward the Service catalogue that previously lived here and on the
// retired /services page, now describing the offers that exist.
const servicesSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    ...offers.map((offer) => ({
      '@type': 'Service',
      '@id': `${PAGE_URL}#${offer.id}`,
      name: offer.id === 'courses' ? 'Find Your Light with AI' : offer.title,
      description: offer.description,
      serviceType: offer.serviceType,
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: [
        { '@type': 'Country', name: 'Australia' },
        { '@type': 'Place', name: 'Asia-Pacific' },
      ],
      url: `${PAGE_URL}#${offer.id}`,
    })),
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#advisory`,
      name: 'AI Advisory',
      description: advisoryDescription,
      serviceType: 'AI Advisory',
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: [
        { '@type': 'Country', name: 'Australia' },
        { '@type': 'Place', name: 'Asia-Pacific' },
      ],
      url: `${PAGE_URL}#advisory`,
    },
    // Full description lives on its own page; referenced here by @id.
    { '@id': `${SITE_URL}/services/ai-visibility#service` },
  ],
}

export default function WorkWithUsPage() {
  return (
    <div className="lumii">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <PageIntro
        label="WORK WITH LUMII"
        title={
          <>
            Start with the change
            <br />
            you want to make.
          </>
        }
        lead="A more capable team. A useful conversation. A clearer way forward. Choose the kind of support that fits your business."
      />

      <section className="section card-grid three">
        {offers.map((offer) => (
          <ContentCard
            key={offer.id}
            id={offer.id}
            label={offer.label}
            title={offer.title}
            description={offer.description}
            href={offer.href}
            action={offer.action}
          />
        ))}
      </section>

      <section className="section secondary-offer" id="advisory">
        <div>
          <p className="eyebrow">WHEN THE WORK GOES DEEPER</p>
          <h2>Advisory, with a clear purpose.</h2>
        </div>
        <div>
          <p>{advisoryDescription}</p>
          <p>
            Experience in digital strategy, customer experience, ecommerce and MarTech informs that
            work. The starting point is the business problem, the people involved and the outcome
            you need.
          </p>
          <p>For brands navigating AI discovery, explore dedicated AI visibility advisory.</p>
          <TextLink href="/services/ai-visibility">Explore AI visibility advisory</TextLink>
          <TextLink href="/contact?interest=advisory">Discuss an advisory engagement</TextLink>
        </div>
      </section>

      <PageCta />
    </div>
  )
}
