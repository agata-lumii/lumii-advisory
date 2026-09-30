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
        url: 'https://lumiiadvisory.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lumii Advisory — Find Your Light with AI',
      },
    ],
  },
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

const jsonLd = [
  // ── Organization ──
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Lumii Advisory',
    legalName: 'Lumii Advisory',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/og-image.jpg`,
      width: 1200,
      height: 630,
    },
    image: `${SITE_URL}/og-image.jpg`,
    description:
      'Founder-led AI enablement business in Sydney, Australia. Lumii Advisory offers practical AI courses (Find Your Light with AI), speaking and hands-on offsite training, with AI advisory and AI visibility services for businesses that need deeper support. Its work is built on the Lumii AI Operating System: Thesis, Guardrails, Workflows, People and Measurement.',
    slogan: 'Find your light. Put AI to work.',
    email: 'hello@lumiiadvisory.com',
    founder: { '@id': `${SITE_URL}/#agata` },
    foundingDate: '2025',
    foundingLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Sydney',
        addressRegion: 'NSW',
        addressCountry: 'AU',
      },
    },
    areaServed: [
      { '@type': 'Country', name: 'Australia' },
      { '@type': 'Place', name: 'Asia-Pacific' },
    ],
    knowsAbout: [
      'AI Training',
      'AI Enablement',
      'AI Operating System',
      'AI Strategy',
      'AI Visibility',
      'Brand Entity Optimisation',
      'Generative Engine Optimisation',
      'Digital Transformation',
      'Customer Experience',
      'MarTech',
      'Ecommerce',
      'AI Adoption',
      'AI Governance',
    ],
    sameAs: [
      'https://www.linkedin.com/company/lumii-advisory',
      'https://www.linkedin.com/in/agata-a-47295a24/',
    ],
  },

  // ── LocalBusiness ──
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: 'Lumii Advisory',
    url: SITE_URL,
    image: `${SITE_URL}/og-image.jpg`,
    logo: `${SITE_URL}/og-image.jpg`,
    description:
      'Founder-led AI enablement business based in Sydney, offering AI courses, speaking, offsite team training and AI advisory across Australia and APAC.',
    email: 'hello@lumiiadvisory.com',
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sydney',
      addressRegion: 'NSW',
      addressCountry: 'AU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -33.8688,
      longitude: 151.2093,
    },
    areaServed: [
      { '@type': 'Country', name: 'Australia' },
      { '@type': 'Place', name: 'Asia-Pacific' },
    ],
    serviceType: [
      'AI Training Courses',
      'AI Speaking and Panels',
      'Offsite AI Team Training',
      'AI Advisory',
      'AI Visibility',
      'AI Readiness Assessment',
    ],
    parentOrganization: { '@id': `${SITE_URL}/#organization` },
    founder: { '@id': `${SITE_URL}/#agata` },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    sameAs: [
      'https://www.linkedin.com/company/lumii-advisory',
      'https://www.linkedin.com/in/agata-a-47295a24/',
    ],
  },

  // ── Person (Founder) ──
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#agata`,
    name: 'Agata Adamczak',
    givenName: 'Agata',
    familyName: 'Adamczak',
    jobTitle: 'Founder',
    hasOccupation: {
      '@type': 'Occupation',
      name: 'AI strategy consultant',
      occupationLocation: { '@type': 'City', name: 'Sydney' },
    },
    description:
      'Founder of Lumii Advisory, based in Sydney, Australia. Agata Adamczak has nearly 20 years across data, digital strategy, search and AI visibility, and leads Lumii’s AI courses, talks and offsite training. She is the author of the Lumii AI Operating System framework.',
    url: `${SITE_URL}/about`,
    image: `${SITE_URL}/images/agata-charcoal-editorial.webp`,
    worksFor: { '@id': `${SITE_URL}/#organization` },
    sameAs: ['https://www.linkedin.com/in/agata-a-47295a24/'],
    knowsAbout: [
      'AI Training',
      'AI Enablement',
      'AI Operating System',
      'AI Strategy',
      'AI Visibility',
      'Brand Entity Optimisation',
      'Digital Transformation',
      'MarTech',
      'Customer Experience',
      'Ecommerce',
      'AI Readiness',
      'AI Adoption',
    ],
    knowsLanguage: ['English', 'Polish'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sydney',
      addressRegion: 'NSW',
      addressCountry: 'AU',
    },
  },

  // ── WebSite (enables sitelinks searchbox) ──
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'Lumii Advisory',
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
