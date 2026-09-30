import type { Metadata } from 'next'
import { platforms } from '@/lib/ai-tools'
import CTABanner from '@/components/CTABanner'
import { TextLink } from '@/components/lumii/primitives'
import { Breadcrumbs, JsonLd, SITE_URL } from '@/components/lumii/seo'

export const metadata: Metadata = {
  title: {
    absolute: 'AI Platform Guides: ChatGPT, Claude, Gemini, Copilot | Lumii',
  },
  description:
    'Honest, plain-English guides to the major AI platforms — strengths, weaknesses, business use cases, and where each one actually wins.',
  alternates: { canonical: `${SITE_URL}/learn` },
}

const platformOrder = ['openai', 'claude', 'gemini', 'microsoft-copilot', 'perplexity']

const strengths = [
  { label: 'Coding, design & long-form writing', winner: 'Claude' },
  { label: 'Ecosystem depth & general reasoning', winner: 'OpenAI' },
  { label: 'Google Workspace integration', winner: 'Gemini' },
  { label: 'Microsoft 365 integration', winner: 'Copilot' },
  { label: 'Real-time research with citations', winner: 'Perplexity' },
]

export default function LearnPage() {
  const sorted = platformOrder.map((slug) => platforms.find((p) => p.slug === slug)!)

  return (
    <div className="lumii">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'AI platform guides for business',
          itemListElement: sorted.map((p, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: p.name,
            url: `${SITE_URL}/learn/${p.slug}`,
          })),
        }}
      />
      <section className="page-intro section">
        <Breadcrumbs
          trail={[
            { name: 'Resources', href: '/resources' },
            { name: 'AI platform guides', href: '/learn' },
          ]}
        />
        <p className="eyebrow">AI PLATFORM GUIDES</p>
        <h1>
          Five platforms.
          <br />
          Every tool. Explained.
        </h1>
        <p className="page-lead">
          The AI landscape moves fast. These guides cut through the noise — covering every major
          platform, every key tool, and exactly what each one is best at. Built for business leaders,
          not technologists.
        </p>
      </section>

      <section className="section" aria-labelledby="platforms-title">
        <div className="section-top">
          <div>
            <p className="eyebrow">THE PLATFORMS</p>
            <h2 id="platforms-title">Choose a guide.</h2>
          </div>
        </div>
        <div className="editorial-list">
          {sorted.map((platform) => {
            const toolCount = platform.toolCategories.reduce((n, c) => n + c.tools.length, 0)
            return (
              <article key={platform.slug}>
                <p className="eyebrow">
                  <span className="brand-dot" style={{ background: platform.brandColor }} aria-hidden="true" />
                  {platform.brand.toUpperCase()} · {toolCount} TOOLS
                </p>
                <h2>
                  {platform.name}
                  <span className="subtitle">{platform.tagline}</span>
                </h2>
                <div>
                  <p>
                    {platform.overview.slice(0, 280)}
                    {platform.overview.length > 280 ? '…' : ''}
                  </p>
                  <p className="stack-top">
                    <TextLink href={`/learn/${platform.slug}`}>Read the {platform.brand} guide</TextLink>
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="section split tint" aria-labelledby="why-title">
        <div>
          <p className="eyebrow">WHY IT MATTERS</p>
          <h2 id="why-title">The platform you choose shapes the results you get.</h2>
          <div className="prose stack-top">
            <p>
              Every major AI platform has real strengths — and real limitations. ChatGPT leads on
              ecosystem depth and integrations. Claude leads on coding, design prototyping, and nuanced
              long-form writing. Gemini leads on Workspace integration and research tools. Copilot
              leads for Microsoft-heavy organisations. Perplexity leads on real-time information with
              citations.
            </p>
            <p>
              Most businesses should be using two or three of these — not one. The question is knowing
              which tool to reach for, and when.
            </p>
          </div>
        </div>
        <div className="panel table-scroll">
          <table className="data-table">
            <thead>
              <tr>
                <th scope="col">Best at</th>
                <th scope="col">Platform</th>
              </tr>
            </thead>
            <tbody>
              {strengths.map((row) => (
                <tr key={row.label}>
                  <td>{row.label}</td>
                  <td>{row.winner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <CTABanner variant="reading" />
    </div>
  )
}
