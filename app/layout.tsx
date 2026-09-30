import type { Metadata } from 'next'
import { DM_Sans, Manrope } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import './lumii.css'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import { isIndexable } from '@/lib/indexing'

// Variable fonts: the redesign uses intermediate weights (450, 550, 650) and
// retained pages still use DM Sans Light (300).
const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

// The original Lumii wordmark face, supplied with the design handoff.
const wordmark = localFont({
  src: './fonts/lumii-cormorant-garamond.woff2',
  weight: '300',
  variable: '--font-wordmark',
  display: 'swap',
})

const indexable = isIndexable()

export const metadata: Metadata = {
  title: {
    default: 'Lumii | Find Your Light with AI',
    template: '%s | Lumii Advisory',
  },
  description:
    'Practical AI courses, inspiring talks and hands-on offsite training for businesses ready to change how they work.',
  metadataBase: new URL('https://lumiiadvisory.com'),
  openGraph: {
    title: 'Lumii | Find Your Light with AI',
    description:
      'Practical AI courses, inspiring talks and hands-on offsite training for businesses ready to change how they work.',
    siteName: 'Lumii Advisory',
    type: 'website',
    locale: 'en_AU',
    images: [
      {
        url: 'https://lumiiadvisory.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Lumii Advisory — Find Your Light with AI',
      },
    ],
  },
  twitter: { card: 'summary_large_image' },
  // Production is indexable. Netlify deploy previews and branch deploys are
  // not, so a preview can never compete with the live site in search.
  // No canonical is set here: a root canonical would be inherited by every
  // page that doesn't set its own, marking it a duplicate of the homepage.
  robots: indexable
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-image-preview': 'large',
          'max-snippet': -1,
          'max-video-preview': -1,
        },
      }
    : { index: false, follow: false },
}

const SITE_URL = 'https://lumiiadvisory.com'

const AREA_SERVED = [
  { '@type': 'City', name: 'Sydney' },
  { '@type': 'Country', name: 'Australia' },
  { '@type': 'Place', name: 'Asia-Pacific' },
]

const SAME_AS = [
  'https://www.linkedin.com/company/lumii-advisory',
  'https://www.linkedin.com/in/agata-a-47295a24/',
]

const SYDNEY_ADDRESS = {
  '@type': 'PostalAddress',
  addressLocality: 'Sydney',
  addressRegion: 'NSW',
  addressCountry: 'AU',
}

// Each offer's full Service node lives on its landing page; the catalogue
// references them by @id so there is one entity per service.
const offerCatalog = {
  '@type': 'OfferCatalog',
  name: 'AI courses, workshops, keynotes and advisory',
  itemListElement: [
    ['/ai-courses#service', 'AI courses for businesses (Find Your Light with AI)'],
    ['/ai-workshops#service', 'AI workshops and team training for offsites'],
    ['/ai-keynote-speaker#service', 'AI keynotes and panel talks'],
    ['/ai-enablement#service', 'AI enablement consulting'],
    ['/services/ai-visibility#service', 'AI visibility advisory'],
    ['/work-with-us#advisory', 'AI advisory'],
  ].map(([id, name]) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', '@id': `${SITE_URL}${id}`, name },
  })),
}

const jsonLd = [
  // ── Organization ──
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Lumii Advisory',
    alternateName: 'Lumii',
    legalName: 'Lumii Advisory',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/lumii-logo.png`,
      width: 600,
      height: 600,
    },
    image: `${SITE_URL}/og-image.png`,
    description:
      'Founder-led AI enablement business in Sydney, Australia. Lumii Advisory runs practical AI courses for businesses (Find Your Light with AI), hands-on AI workshops and team training for offsites, and AI keynotes and panel talks, with AI enablement consulting and AI visibility advisory for businesses that need deeper support. Its work is built on the Lumii AI Operating System: Thesis, Guardrails, Workflows, People and Measurement.',
    slogan: 'Find your light. Put AI to work.',
    email: 'hello@lumiiadvisory.com',
    address: SYDNEY_ADDRESS,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'hello@lumiiadvisory.com',
      url: `${SITE_URL}/contact`,
      areaServed: 'AU',
      availableLanguage: 'English',
    },
    founder: { '@id': `${SITE_URL}/#agata` },
    foundingDate: '2025',
    foundingLocation: { '@type': 'Place', address: SYDNEY_ADDRESS },
    areaServed: AREA_SERVED,
    knowsAbout: [
      'AI Courses',
      'AI Workshops',
      'AI Team Training',
      'Corporate AI Training',
      'AI Keynotes',
      'AI Enablement',
      'AI Operating System',
      'AI Strategy',
      'AI Adoption',
      'AI Governance',
      'AI Visibility',
      'Brand Entity Optimisation',
      'Generative Engine Optimisation',
      'Digital Transformation',
    ],
    hasOfferCatalog: offerCatalog,
    sameAs: SAME_AS,
  },

  // ── ProfessionalService: the local-business view, for Sydney searches ──
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#localbusiness`,
    name: 'Lumii Advisory',
    url: SITE_URL,
    image: `${SITE_URL}/og-image.png`,
    logo: `${SITE_URL}/images/lumii-logo.png`,
    description:
      'Sydney-based AI enablement consultant offering AI courses, AI workshops and team training for offsites, AI keynotes and panels, and AI advisory across Australia and APAC.',
    email: 'hello@lumiiadvisory.com',
    priceRange: '$$$',
    address: SYDNEY_ADDRESS,
    geo: { '@type': 'GeoCoordinates', latitude: -33.8688, longitude: 151.2093 },
    areaServed: AREA_SERVED,
    serviceType: [
      'AI Courses',
      'AI Workshops',
      'AI Team Training',
      'AI Keynote Speaking',
      'AI Enablement Consulting',
      'AI Advisory',
      'AI Visibility',
    ],
    parentOrganization: { '@id': `${SITE_URL}/#organization` },
    founder: { '@id': `${SITE_URL}/#agata` },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    sameAs: SAME_AS,
  },

  // ── Person (Founder) ──
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#agata`,
    name: 'Agata Adamczak',
    givenName: 'Agata',
    familyName: 'Adamczak',
    jobTitle: 'Founder, Lumii Advisory',
    hasOccupation: [
      {
        '@type': 'Occupation',
        name: 'AI enablement consultant',
        occupationLocation: { '@type': 'City', name: 'Sydney' },
      },
      {
        '@type': 'Occupation',
        name: 'AI trainer and keynote speaker',
        occupationLocation: { '@type': 'City', name: 'Sydney' },
      },
    ],
    description:
      'Founder of Lumii Advisory, based in Sydney, Australia. Agata Adamczak has nearly 20 years across data, digital strategy, search and AI visibility. She leads Lumii’s AI courses, hands-on AI workshops and team training, and gives AI keynotes and panel talks. She is the author of the Lumii AI Operating System framework.',
    url: `${SITE_URL}/about`,
    image: `${SITE_URL}/images/agata-charcoal-editorial.webp`,
    worksFor: { '@id': `${SITE_URL}/#organization` },
    sameAs: ['https://www.linkedin.com/in/agata-a-47295a24/'],
    knowsAbout: [
      'AI Enablement',
      'AI Training',
      'AI Workshops',
      'AI Keynotes',
      'Briefing and prompting AI',
      'AI Operating System',
      'AI Strategy',
      'AI Adoption',
      'AI Visibility',
      'Search and AI search',
      'Digital Strategy',
    ],
    knowsLanguage: ['English', 'Polish'],
    address: SYDNEY_ADDRESS,
  },

  // ── WebSite ──
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'Lumii Advisory',
    alternateName: 'Lumii',
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-AU',
  },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-AU"
      className={`${manrope.variable} ${dmSans.variable} ${wordmark.variable}`}
      // The inline script below adds a class before hydration.
      suppressHydrationWarning
    >
      <head>
        {/* Marks JS as available before first paint, so the mobile menu starts
            collapsed instead of flashing open. Without JS it stays usable. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <GoogleAnalytics />
        {jsonLd.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
