import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { platforms, getPlatformBySlug } from '@/lib/ai-tools'
import EcosystemDiagram from '@/components/EcosystemDiagram'
import CTABanner from '@/components/CTABanner'

export function generateStaticParams() {
  return platforms.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const platform = getPlatformBySlug(params.slug)
  if (!platform) return {}
  return {
    title: platform.metaTitle,
    description: platform.metaDescription,
  }
}

const TIER_STYLES = {
  free: {
    label: 'Free',
    bg: 'bg-[#9CA3A0]/10',
    text: 'text-[#6B7280]',
    border: 'border-[#9CA3A0]/30',
  },
  pro: {
    label: 'Pro',
    bg: 'bg-gold/10',
    text: 'text-gold',
    border: 'border-gold/30',
  },
  enterprise: {
    label: 'Enterprise',
    bg: 'bg-charcoal/10',
    text: 'text-charcoal',
    border: 'border-charcoal/30',
  },
}

export default function PlatformPage({ params }: { params: { slug: string } }) {
  const platform = getPlatformBySlug(params.slug)
  if (!platform) notFound()

  const otherPlatforms = platforms.filter((p) => p.slug !== platform.slug)

  const tierStyle = (tier: 'free' | 'pro' | 'enterprise', brandColor: string) => {
    if (tier === 'enterprise') return { color: brandColor, borderColor: `${brandColor}40`, background: `${brandColor}12` }
    if (tier === 'pro') return { color: '#C4964A', borderColor: 'rgba(196,150,74,0.3)', background: 'rgba(196,150,74,0.1)' }
    return { color: '#9CA3A0', borderColor: 'rgba(156,163,160,0.3)', background: 'rgba(156,163,160,0.1)' }
  }

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-near-black pt-40 pb-24 px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 mb-12">
            <Link
              href="/learn"
              className="font-body text-[11px] tracking-[0.2em] uppercase text-ash hover:text-warm-white transition-colors duration-200"
            >
              AI Tools Guide
            </Link>
            <span className="text-ash/40">/</span>
            <span
              className="font-body text-[11px] tracking-[0.2em] uppercase"
              style={{ color: platform.brandColor }}
            >
              {platform.brand}
            </span>
          </div>

          <p
            className="font-body text-[11px] tracking-[0.3em] uppercase mb-6 flex items-center gap-4"
            style={{ color: platform.brandColor }}
          >
            <span className="w-8 h-px block" style={{ backgroundColor: platform.brandColor }} />
            {platform.brand}
          </p>

          <h1 className="font-display font-light text-[clamp(48px,5vw,78px)] leading-[1.08] text-warm-white mb-6 tracking-[-0.01em] max-w-[820px]">
            {platform.name}
          </h1>
          <p className="font-display text-[clamp(20px,2.2vw,28px)] italic font-light max-w-[640px] mb-12 leading-[1.4]"
            style={{ color: `${platform.brandColor}CC` }}>
            {platform.tagline}
          </p>
          <p className="font-body text-[17px] leading-[1.85] text-warm-white/60 font-light max-w-[660px] mb-12">
            {platform.overview}
          </p>

          {/* Overview points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[720px]">
            {platform.overviewPoints.map((pt) => (
              <div key={pt} className="flex items-start gap-4">
                <span
                  className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0"
                  style={{ backgroundColor: platform.brandColor }}
                />
                <p className="font-body text-[14px] text-warm-white/70 font-light leading-[1.65]">
                  {pt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ECOSYSTEM DIAGRAM ── */}
      <section className="bg-warm-white py-[clamp(80px,10vw,140px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <p
            className="font-body text-[10px] tracking-[0.25em] uppercase mb-4"
            style={{ color: platform.brandColor }}
          >
            Ecosystem Map
          </p>
          <h2 className="font-display font-light text-[clamp(32px,3.5vw,48px)] leading-[1.12] text-near-black tracking-[-0.01em] mb-4">
            The {platform.brand} ecosystem,{' '}
            <em className="italic" style={{ color: platform.brandColor }}>
              mapped.
            </em>
          </h2>
          <p className="font-body text-[15px] text-slate-warm font-light leading-[1.8] mb-10 max-w-[580px]">
            Every tool in the {platform.brand} suite — what it does, which plan you need, and how
            the pieces fit together.
          </p>

          {/* The diagram */}
          <div className="border border-parchment overflow-hidden">
            <EcosystemDiagram
              platform={platform.name}
              tagline={platform.tagline}
              brandColor={platform.brandColor}
              categories={platform.toolCategories}
            />
          </div>

          {/* Tier legend caption */}
          <div className="flex flex-wrap gap-6 mt-6">
            {[
              { label: 'Free tier available', color: '#9CA3A0' },
              { label: 'Paid / Pro plan', color: '#C4964A' },
              { label: 'Enterprise plan', color: platform.brandColor },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-sm flex-shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span className="font-body text-[12px] text-ash font-light">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOOL GUIDE ── */}
      <section className="bg-ivory py-[clamp(80px,10vw,140px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <p
            className="font-body text-[10px] tracking-[0.25em] uppercase mb-4"
            style={{ color: platform.brandColor }}
          >
            Tool Guide
          </p>
          <h2 className="font-display font-light text-[clamp(32px,3.5vw,48px)] leading-[1.12] text-near-black tracking-[-0.01em] mb-16">
            What each tool{' '}
            <em className="italic" style={{ color: platform.brandColor }}>
              does.
            </em>
          </h2>

          <div className="space-y-16">
            {platform.toolCategories.map((cat) => (
              <div key={cat.category}>
                {/* Category header */}
                <div className="flex items-center gap-4 mb-8">
                  <span
                    className="w-1 h-8 flex-shrink-0"
                    style={{ backgroundColor: platform.brandColor }}
                  />
                  <h3 className="font-body text-[11px] tracking-[0.25em] uppercase text-near-black font-semibold">
                    {cat.category}
                  </h3>
                </div>

                {/* Tool cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.tools.map((tool) => {
                    const ts = tierStyle(tool.tier, platform.brandColor)
                    return (
                      <div
                        key={tool.name}
                        className="bg-warm-white border border-parchment p-7"
                      >
                        {/* Tool name + tier */}
                        <div className="flex items-start justify-between gap-3 mb-4">
                          <h4 className="font-display text-[18px] font-light text-near-black leading-snug">
                            {tool.name}
                          </h4>
                          <span
                            className="font-body text-[9px] tracking-[0.12em] uppercase px-2.5 py-1 border flex-shrink-0 mt-1"
                            style={{
                              color: ts.color,
                              borderColor: ts.borderColor,
                              backgroundColor: ts.background,
                            }}
                          >
                            {tool.tier === 'free' ? 'Free' : tool.tier === 'pro' ? 'Pro' : 'Enterprise'}
                          </span>
                        </div>

                        {/* Best for */}
                        <p
                          className="font-body text-[10px] tracking-[0.15em] uppercase mb-3 font-medium"
                          style={{ color: platform.brandColor }}
                        >
                          Best for: {tool.bestFor}
                        </p>

                        {/* Description */}
                        <p className="font-body text-[13px] text-slate-warm font-light leading-[1.75]">
                          {tool.description}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className="bg-warm-white py-[clamp(80px,10vw,140px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <p
            className="font-body text-[10px] tracking-[0.25em] uppercase mb-4"
            style={{ color: platform.brandColor }}
          >
            In Practice
          </p>
          <h2 className="font-display font-light text-[clamp(32px,3.5vw,48px)] leading-[1.12] text-near-black tracking-[-0.01em] mb-16">
            {platform.brand} at work.{' '}
            <em className="italic" style={{ color: platform.brandColor }}>
              Real scenarios.
            </em>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platform.useCases.map((uc, i) => (
              <div key={i} className="bg-ivory border border-parchment p-8 lg:p-10">
                {/* Industry */}
                <p
                  className="font-body text-[10px] tracking-[0.25em] uppercase mb-5 font-semibold"
                  style={{ color: platform.brandColor }}
                >
                  {uc.industry}
                </p>

                {/* Scenario */}
                <div className="mb-6">
                  <p className="font-body text-[11px] tracking-[0.15em] uppercase text-ash mb-3">
                    The situation
                  </p>
                  <p className="font-body text-[14px] text-slate-warm font-light leading-[1.75]">
                    {uc.scenario}
                  </p>
                </div>

                {/* Tools used */}
                <div className="mb-6">
                  <p className="font-body text-[11px] tracking-[0.15em] uppercase text-ash mb-3">
                    Tools used
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {uc.toolsUsed.map((t) => (
                      <span
                        key={t}
                        className="font-body text-[10px] tracking-[0.1em] uppercase px-3 py-1.5 border"
                        style={{
                          color: platform.brandColor,
                          borderColor: `${platform.brandColor}40`,
                          backgroundColor: `${platform.brandColor}08`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Outcome */}
                <div className="pt-6 border-t border-parchment">
                  <p className="font-body text-[11px] tracking-[0.15em] uppercase text-ash mb-3">
                    The result
                  </p>
                  <p className="font-body text-[14px] text-near-black font-light leading-[1.75]">
                    {uc.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPLORE MORE ── */}
      <section className="bg-near-black py-[clamp(80px,10vw,140px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <p className="font-body text-[10px] tracking-[0.25em] uppercase text-ash mb-6">
            Explore More Platforms
          </p>
          <h2 className="font-display font-light text-[clamp(28px,3vw,40px)] leading-[1.15] text-warm-white mb-12">
            The AI landscape is bigger than one platform.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherPlatforms.map((p) => (
              <Link
                key={p.slug}
                href={`/learn/${p.slug}`}
                className="group bg-warm-white/5 border border-warm-white/10 p-7 hover:border-warm-white/25 transition-colors duration-200"
                style={{ borderTopColor: p.brandColor, borderTopWidth: 2 }}
              >
                <p
                  className="font-body text-[10px] tracking-[0.2em] uppercase mb-2"
                  style={{ color: p.brandColor }}
                >
                  {p.brand}
                </p>
                <p className="font-display text-[16px] font-light text-warm-white leading-snug mb-3">
                  {p.name}
                </p>
                <p className="font-body text-[12px] text-warm-white/40 font-light italic">
                  {p.tagline}
                </p>
                <p
                  className="font-body text-[11px] tracking-[0.1em] uppercase mt-5 group-hover:tracking-[0.18em] transition-all duration-300"
                  style={{ color: p.brandColor }}
                >
                  Read guide →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
