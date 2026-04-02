import type { Metadata } from 'next'
import Link from 'next/link'
import { platforms } from '@/lib/ai-tools'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'AI Platform Guides — ChatGPT, Claude, Gemini, Copilot & Perplexity',
  description:
    'Practical guides to the five major AI platforms reshaping business. Tool-by-tool breakdowns of OpenAI, Anthropic Claude, Google Gemini, Microsoft Copilot, and Perplexity — with ecosystem maps and real industry use cases.',
}

const platformOrder = ['openai', 'claude', 'gemini', 'microsoft-copilot', 'perplexity']

export default function LearnPage() {
  const sorted = platformOrder.map((slug) => platforms.find((p) => p.slug === slug)!)

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-near-black pt-40 pb-28 px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-8 flex items-center gap-4">
            <span className="w-8 h-px bg-gold block" />
            AI Tools Guide
          </p>
          <h1 className="font-display font-light text-[clamp(48px,5vw,78px)] leading-[1.08] text-warm-white mb-8 tracking-[-0.01em] max-w-[820px]">
            Five platforms.{' '}
            <em className="italic text-gold">Every tool. Explained.</em>
          </h1>
          <p className="font-body text-[17px] leading-[1.8] text-warm-white/60 font-light max-w-[600px] mb-12">
            The AI landscape moves fast. These guides cut through the noise — covering every major
            platform, every key tool, and exactly what each one is best at. Built for business
            leaders, not technologists.
          </p>

          {/* Platform quick-nav pills */}
          <div className="flex flex-wrap gap-3">
            {sorted.map((p) => (
              <Link
                key={p.slug}
                href={`/learn/${p.slug}`}
                className="font-body text-[11px] tracking-[0.12em] uppercase px-5 py-2.5 border border-warm-white/20 text-warm-white/60 hover:border-warm-white hover:text-warm-white transition-all duration-200"
                style={{ borderLeftColor: p.brandColor, borderLeftWidth: 3 }}
              >
                {p.brand}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORM CARDS ── */}
      <section className="bg-ivory py-[clamp(80px,10vw,140px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <p className="font-body text-[10px] tracking-[0.25em] uppercase text-ash mb-14">
            The Platforms
          </p>

          <div className="space-y-8">
            {sorted.map((platform, i) => (
              <Link
                key={platform.slug}
                href={`/learn/${platform.slug}`}
                className="group block bg-warm-white border border-parchment hover:border-gold/40 transition-colors duration-300 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr_180px] gap-0">
                  {/* Left: platform identity */}
                  <div
                    className="p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-parchment"
                    style={{ borderTopColor: platform.brandColor, borderTopWidth: 3 }}
                  >
                    <div>
                      <p
                        className="font-body text-[10px] tracking-[0.25em] uppercase mb-3"
                        style={{ color: platform.brandColor }}
                      >
                        {platform.brand}
                      </p>
                      <h2 className="font-display font-light text-[clamp(22px,2.2vw,28px)] text-near-black leading-[1.2] mb-3">
                        {platform.name}
                      </h2>
                      <p className="font-body text-[13px] text-ash font-light italic">
                        {platform.tagline}
                      </p>
                    </div>
                    <div className="mt-8">
                      <p className="font-body text-[10px] tracking-[0.2em] uppercase text-ash mb-3">
                        {platform.toolCategories.length} tool categories ·{' '}
                        {platform.toolCategories.reduce(
                          (acc, cat) => acc + cat.tools.length,
                          0
                        )}{' '}
                        tools covered
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {platform.toolCategories.map((cat) => (
                          <span
                            key={cat.category}
                            className="font-body text-[9px] tracking-[0.1em] uppercase text-ash border border-parchment px-2.5 py-1"
                          >
                            {cat.category}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Middle: overview */}
                  <div className="p-10 lg:p-12">
                    <div className="w-8 h-px bg-gold mb-6" />
                    <p className="font-body text-[15px] text-slate-warm font-light leading-[1.85] mb-8">
                      {platform.overview.slice(0, 280)}
                      {platform.overview.length > 280 ? '…' : ''}
                    </p>
                    <ul className="space-y-3">
                      {platform.overviewPoints.slice(0, 2).map((pt) => (
                        <li key={pt} className="flex items-start gap-3">
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: platform.brandColor }}
                          />
                          <span className="font-body text-[13px] text-slate-warm font-light leading-[1.6]">
                            {pt}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: CTA */}
                  <div className="p-10 flex flex-col items-start justify-center border-t lg:border-t-0 lg:border-l border-parchment">
                    <p className="font-body text-[10px] tracking-[0.2em] uppercase text-ash mb-4">
                      Includes
                    </p>
                    <ul className="space-y-2 mb-8">
                      {['Ecosystem map', 'Tool guide', 'Use cases'].map((item) => (
                        <li
                          key={item}
                          className="font-body text-[12px] text-slate-warm font-light flex items-center gap-2"
                        >
                          <span style={{ color: platform.brandColor }}>→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <span
                      className="font-body text-[12px] tracking-[0.1em] uppercase px-6 py-3 transition-all duration-200 group-hover:-translate-y-px"
                      style={{
                        color: platform.brandColor,
                        border: `1px solid ${platform.brandColor}`,
                      }}
                    >
                      Read Guide →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTEXT SECTION ── */}
      <section className="bg-near-black py-[clamp(80px,10vw,140px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-6">
              Why It Matters
            </p>
            <h2 className="font-display font-light text-[clamp(34px,4vw,52px)] leading-[1.12] text-warm-white tracking-[-0.01em] mb-8">
              The platform you choose shapes the results you get.
            </h2>
            <p className="font-body text-[16px] leading-[1.85] text-warm-white/60 font-light mb-6">
              Every major AI platform has real strengths — and real limitations. ChatGPT leads on
              ecosystem and integrations. Claude leads on long-form writing and document analysis.
              Gemini leads on Workspace integration and research tools. Copilot leads for
              Microsoft-heavy organisations. Perplexity leads on real-time information.
            </p>
            <p className="font-body text-[16px] leading-[1.85] text-warm-white/60 font-light">
              Most businesses should be using two or three of these — not one. The question is
              knowing which tool to reach for, and when.
            </p>
          </div>
          <div className="bg-warm-white/5 border border-warm-white/10 p-10 lg:p-12">
            <div className="w-10 h-px bg-gold mb-8" />
            <div className="space-y-6">
              {[
                { label: 'Long-form writing & document analysis', winner: 'Claude' },
                { label: 'Ecosystem depth & reasoning', winner: 'OpenAI' },
                { label: 'Google Workspace integration', winner: 'Gemini' },
                { label: 'Microsoft 365 integration', winner: 'Copilot' },
                { label: 'Real-time research with citations', winner: 'Perplexity' },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between border-b border-warm-white/10 pb-6 last:border-0 last:pb-0"
                >
                  <p className="font-body text-[13px] text-warm-white/60 font-light">{row.label}</p>
                  <span className="font-body text-[11px] tracking-[0.12em] uppercase text-gold border border-gold/30 px-3 py-1 flex-shrink-0 ml-6">
                    {row.winner}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
