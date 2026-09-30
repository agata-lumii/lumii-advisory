import type { Metadata } from 'next'
import CTABanner from '@/components/CTABanner'
import AiToolsDirectory from '@/components/AiToolsDirectory'
import { TextLink } from '@/components/lumii/primitives'
import { Breadcrumbs, JsonLd, SITE_URL, StatRow } from '@/components/lumii/seo'
import { AI_TOOLS, CATEGORIES } from '@/lib/ai-tools-directory'

const PAGE_URL = `${SITE_URL}/resources/ai-tools`

export const metadata: Metadata = {
  title: {
    absolute: 'AI Tools Directory for Business Teams (2026) | Lumii Advisory',
  },
  description:
    'The AI tools I actually recommend — by use case, by stack, by budget. Vendor-neutral, hands-on reviews. Updated quarterly.',
  alternates: { canonical: PAGE_URL },
}

export default function AiToolsPage() {
  const freeCount = AI_TOOLS.filter((t) => t.pricing === 'Free' || t.pricing === 'Freemium').length
  return (
    <div className="lumii">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'AI tools directory for business teams',
          url: PAGE_URL,
          numberOfItems: AI_TOOLS.length,
          itemListElement: AI_TOOLS.map((tool, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: tool.name,
            url: tool.website,
          })),
        }}
      />
      <section className="page-intro section">
        <Breadcrumbs
          trail={[
            { name: 'Resources', href: '/resources' },
            { name: 'AI tools directory', href: '/resources/ai-tools' },
          ]}
        />
        <p className="eyebrow">AI TOOLS DIRECTORY</p>
        <h1>
          Every AI tool worth
          <br />
          knowing about.
        </h1>
        <p className="page-lead">
          Organised by what you actually want to do — write, create, research, build, analyse. Each
          tool includes a plain-English summary, pricing tier, and a direct link.
        </p>
        <StatRow
          stats={[
            { value: String(AI_TOOLS.length), label: 'Tools listed' },
            { value: String(CATEGORIES.length), label: 'Categories' },
            { value: `${freeCount}+`, label: 'Free or freemium' },
          ]}
        />
      </section>

      <AiToolsDirectory tools={AI_TOOLS} />

      <section className="section secondary-offer" aria-label="About this directory">
        <div>
          <p className="eyebrow">ABOUT THE DIRECTORY</p>
          <h2>Curated, and kept current.</h2>
        </div>
        <div>
          <p>
            This directory is curated and updated regularly. Pricing and features change frequently —
            links take you directly to each tool’s website for the most accurate information. Missing a
            tool you rely on? <a href="/contact">Let me know.</a>
          </p>
          <TextLink href="/learn">Deep-dive platform guides</TextLink>
          <TextLink href="/ai-courses">Learn to use AI well with your team</TextLink>
        </div>
      </section>

      <CTABanner variant="reading" />
    </div>
  )
}
