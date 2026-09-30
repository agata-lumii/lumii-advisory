import type { Metadata } from 'next'
import Link from 'next/link'
import { PageIntro } from '@/components/lumii/primitives'
import { liveVerticals } from '@/lib/verticals'
import { articles } from '@/lib/insights'
import { platforms } from '@/lib/ai-tools'
import { getTrainingAudience } from '@/lib/training-audiences'

export const metadata: Metadata = {
  title: 'Site Map',
  description: 'A complete directory of all pages on the Lumii Advisory website.',
  // Intentional: a navigation aid, not a search landing page.
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://lumiiadvisory.com/site-map' },
}

const sections = [
  {
    title: 'Main Pages',
    links: [
      { href: '/', label: 'Home' },
      { href: '/work-with-us', label: 'Ways to work together' },
      { href: '/ai-courses', label: 'AI courses' },
      { href: '/ai-workshops', label: 'AI workshops & team training' },
      { href: '/ai-keynote-speaker', label: 'AI keynotes & panels' },
      { href: '/ai-enablement', label: 'AI enablement consulting' },
      { href: '/services/ai-visibility', label: 'AI visibility advisory' },
      { href: '/ai-operating-system', label: 'The framework & approach' },
      { href: '/about', label: 'About Agata' },
      { href: '/contact', label: 'Contact' },
      { href: '/faq', label: 'FAQ' },
    ],
  },
  {
    title: 'Training for your team',
    links: [
      { href: '/who-we-help', label: 'Overview' },
      ...liveVerticals.map((v) => ({
        href: `/who-we-help/${v.slug}`,
        label: getTrainingAudience(v.slug)?.name ?? v.heading,
      })),
    ],
  },
  {
    title: 'Insights',
    links: [
      { href: '/insights', label: 'All Articles' },
      ...articles.map((a) => ({
        href: `/insights/${a.slug}`,
        label: a.title,
      })),
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/resources', label: 'All Resources' },
      { href: '/resources/ai-readiness-checklist', label: 'AI Readiness Checklist' },
      { href: '/resources/ebook', label: 'Find Your Light: free ebook' },
      { href: '/resources/ai-team-structure', label: 'AI Team Structure' },
      { href: '/resources/ai-tools', label: 'AI Tools Directory' },
      { href: '/ai-case-studies', label: 'AI adoption, analysed' },
    ],
  },
  {
    title: 'AI Platform Guides',
    links: [
      { href: '/learn', label: 'All Guides' },
      ...platforms.map((p) => ({
        href: `/learn/${p.slug}`,
        label: p.name,
      })),
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/privacy-policy', label: 'Privacy Policy' },
      { href: '/terms-of-service', label: 'Terms of Service' },
    ],
  },
]

export default function SiteMapPage() {
  return (
    <div className="lumii">
      <PageIntro
        label="NAVIGATION"
        title="Site map"
        lead="A complete directory of every page on the Lumii Advisory website."
      />
      <section className="section">
        <div className="card-grid three">
          {sections.map((section) => (
            <div key={section.title} className="sitemap-group">
              <p className="eyebrow">{section.title.toUpperCase()}</p>
              <ul>
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
