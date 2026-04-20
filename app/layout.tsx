import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Lumii Advisory | AI Strategy & Digital Transformation Consulting, Sydney',
    template: '%s | Lumii Advisory',
  },
  description:
    'Lumii Advisory is a specialist AI strategy and digital transformation consultancy based in Sydney, Australia. We help ambitious mid-market businesses adopt AI with clarity, rigour, and measurable commercial results.',
  metadataBase: new URL('https://lumiiadvisory.com'),
  openGraph: {
    title: 'Lumii Advisory — AI Strategy & Digital Transformation',
    description:
      'Specialist AI strategy and digital transformation consulting for ambitious mid-market businesses.',
    siteName: 'Lumii Advisory',
    type: 'website',
    locale: 'en_AU',
    images: [
      {
        url: 'https://lumiiadvisory.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lumii Advisory — AI Strategy & Digital Transformation',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://lumiiadvisory.com',
  },
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
      'Specialist AI strategy and digital transformation consultancy helping ambitious mid-market businesses adopt AI with clarity and measurable results.',
    email: 'hello@lumii.com.au',
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
      'AI Strategy',
      'Digital Transformation',
      'AI Enablement',
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
      'Independent AI strategy and digital transformation consultancy based in Sydney, working with mid-market businesses across Australia and APAC.',
    email: 'hello@lumii.com.au',
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
      'AI Strategy Consulting',
      'Digital Transformation',
      'Customer Experience',
      'MarTech Advisory',
      'AI Enablement',
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
    jobTitle: 'Founder & AI Strategy Consultant',
    description:
      'Founder of Lumii Advisory. AI strategy and digital transformation consultant helping mid-market businesses translate AI into measurable commercial outcomes.',
    url: `${SITE_URL}/about`,
    image: `${SITE_URL}/og-image.jpg`,
    worksFor: { '@id': `${SITE_URL}/#organization` },
    sameAs: ['https://www.linkedin.com/in/agata-a-47295a24/'],
    knowsAbout: [
      'AI Strategy',
      'Digital Transformation',
      'AI Enablement',
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
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        <GoogleAnalytics />
        {jsonLd.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
