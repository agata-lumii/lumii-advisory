import type { Metadata } from 'next'
import Link from 'next/link'
import { verticals } from '@/lib/verticals'
import { articles } from '@/lib/insights'
import { platforms } from '@/lib/ai-tools'

export const metadata: Metadata = {
  title: 'Site Map',
  description: 'A complete directory of all pages on the Lumii Advisory website.',
  robots: { index: false, follow: true },
}

const sections = [
  {
    title: 'Main Pages',
    links: [
      { href: '/', label: 'Home' },
      { href: '/ai-operating-system', label: 'The AI Operating System' },
      { href: '/services', label: 'Services' },
      { href: '/work-with-us', label: 'Work With Us' },
      { href: '/how-we-work', label: 'How We Work' },
      { href: '/about', label: 'About Agata' },
      { href: '/contact', label: 'Contact' },
      { href: '/faq', label: 'FAQ' },
    ],
  },
  {
    title: 'Who We Help',
    links: [
      { href: '/who-we-help', label: 'Overview' },
      ...verticals.map((v) => ({
        href: `/who-we-help/${v.slug}`,
        label: v.heading,
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
      { href: '/resources/ai-team-structure', label: 'AI Team Structure' },
      { href: '/resources/ai-tools', label: 'AI Tools Directory' },
      { href: '/ai-case-studies', label: 'AI Case Studies' },
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
    <>
      <section className="bg-near-black pt-40 pb-24 px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-8">
            Navigation
          </p>
          <h1 className="font-display font-light text-[clamp(48px,5.5vw,80px)] leading-[1.08] text-warm-white mb-6 tracking-[-0.01em]">
            Site Map
          </h1>
          <p className="font-body text-[17px] leading-[1.8] text-warm-white/60 max-w-[560px] font-light">
            A complete directory of every page on the Lumii Advisory website.
          </p>
        </div>
      </section>

      <section className="bg-warm-white py-[clamp(60px,8vw,100px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {sections.map((section) => (
              <div key={section.title}>
                <p className="font-body text-[10px] tracking-[0.25em] uppercase text-gold mb-6">
                  {section.title}
                </p>
                <ul className="space-y-3 list-none p-0 m-0">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="font-body text-[14px] text-slate-warm font-light hover:text-near-black transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
