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
  metadataBase: new URL('https://lumii-advisory.com'),
  openGraph: {
    title: 'Lumii Advisory — AI Strategy & Digital Transformation',
    description:
      'Specialist AI strategy and digital transformation consulting for ambitious mid-market businesses.',
    siteName: 'Lumii Advisory',
    type: 'website',
    locale: 'en_AU',
    images: [
      {
        url: 'https://lumii-advisory.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lumii Advisory ��� AI Strategy & Digital Transformation',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://lumii-advisory.com',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Lumii Advisory',
    description:
      'Specialist AI strategy and digital transformation consultancy helping ambitious mid-market businesses adopt AI with clarity and measurable results.',
    url: 'https://lumii-advisory.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sydney',
      addressRegion: 'NSW',
      addressCountry: 'AU',
    },
    areaServed: 'AU',
    founder: {
      '@type': 'Person',
      name: 'Agata Adamczak',
      jobTitle: 'Founder',
      url: 'https://lumii-advisory.com/about',
      sameAs: ['https://www.linkedin.com/in/agata-adamczak'],
    },
    sameAs: ['https://www.linkedin.com/company/lumii-advisory'],
    serviceType: [
      'AI Strategy Consulting',
      'Digital Transformation',
      'Customer Experience',
      'MarTech Advisory',
      'AI Enablement',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Agata Adamczak',
    jobTitle: 'Founder & AI Strategy Consultant',
    worksFor: {
      '@type': 'Organization',
      name: 'Lumii Advisory',
      url: 'https://lumii-advisory.com',
    },
    url: 'https://lumii-advisory.com/about',
    sameAs: ['https://www.linkedin.com/in/agata-adamczak'],
    knowsAbout: [
      'AI Strategy',
      'Digital Transformation',
      'AI Enablement',
      'MarTech',
      'Customer Experience',
      'Ecommerce',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sydney',
      addressRegion: 'NSW',
      addressCountry: 'AU',
    },
  },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd[0]) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd[1]) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
