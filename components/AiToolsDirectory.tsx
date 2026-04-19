'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import type { AiTool } from '@/lib/ai-tools-directory'
import { CATEGORIES } from '@/lib/ai-tools-directory'

// ── Category metadata ────────────────────────────────────────────────
type CategoryMeta = { color: string; bg: string; icon: React.ReactNode }

function Ico({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      {children}
    </svg>
  )
}

const CATEGORY_META: Record<string, CategoryMeta> = {
  'Writing & Content': {
    color: '#A07030',
    bg: '#FBF5EA',
    icon: <Ico><path d="M15.232 5.232l3.536 3.536M2.5 21.5l1-4L14 7l3.5 3.5L7 21l-4.5.5zM14 7l3-3 3 3-3 3-3-3z" /></Ico>,
  },
  'Research & Search': {
    color: '#3A6A8C',
    bg: '#EDF3F8',
    icon: <Ico><circle cx="11" cy="11" r="7" /><path d="m21 21-4.35-4.35" /></Ico>,
  },
  'Image Generation': {
    color: '#7A5A9E',
    bg: '#F3EEF9',
    icon: <Ico>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="m21 15-5-5L5 21" />
    </Ico>,
  },
  'Video Creation': {
    color: '#A04A38',
    bg: '#F9EDEA',
    icon: <Ico>
      <path d="m15 10 4.553-2.069A1 1 0 0 1 21 8.82v6.361a1 1 0 0 1-1.447.894L15 14" />
      <rect x="3" y="6" width="12" height="12" rx="2" />
    </Ico>,
  },
  'Audio & Voice': {
    color: '#2E7A6E',
    bg: '#E9F4F2',
    icon: <Ico>
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3M8 22h8" />
    </Ico>,
  },
  'Presentations & Design': {
    color: '#9A3A60',
    bg: '#F8ECF2',
    icon: <Ico>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
      <path d="m9 8 3 3 3-3" />
    </Ico>,
  },
  'Coding & Development': {
    color: '#2E6E50',
    bg: '#E9F3EE',
    icon: <Ico><path d="m16 18 6-6-6-6M8 6l-6 6 6 6" /></Ico>,
  },
  'Meetings & Productivity': {
    color: '#9A5020',
    bg: '#F9EEE6',
    icon: <Ico>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
    </Ico>,
  },
  'Data & Analytics': {
    color: '#3A508A',
    bg: '#ECEEF7',
    icon: <Ico>
      <path d="M18 20V10M12 20V4M6 20v-6" />
    </Ico>,
  },
  'SEO & Marketing': {
    color: '#5A7030',
    bg: '#EFF3E8',
    icon: <Ico>
      <path d="m22 7-8.5 8.5-5-5L2 17" />
      <path d="M16 7h6v6" />
    </Ico>,
  },
  'Customer Service & CX': {
    color: '#8A3050',
    bg: '#F6ECF0',
    icon: <Ico>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M8 10h.01M12 10h.01M16 10h.01" />
    </Ico>,
  },
  'HR & Recruiting': {
    color: '#6A3A8A',
    bg: '#F1EBF7',
    icon: <Ico>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </Ico>,
  },
}

const PRICING_META: Record<string, { label: string; bg: string; color: string; border: string }> = {
  Free:     { label: 'Free',     bg: '#F0FAF5', color: '#2A7A50', border: '#B0DFC8' },
  Freemium: { label: 'Freemium', bg: '#FBF5EA', color: '#A07030', border: '#DEC88A' },
  Paid:     { label: 'Paid',     bg: '#F2F2F2', color: '#5A5652', border: '#C8C4BC' },
}

export default function AiToolsDirectory({ tools }: { tools: AiTool[] }) {
  const [active, setActive] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    let list = active === 'All' ? tools : tools.filter(t => t.category === active)
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(
        t =>
          t.name.toLowerCase().includes(q) ||
          t.tagline.toLowerCase().includes(q) ||
          t.bestFor.toLowerCase().includes(q)
      )
    }
    return list
  }, [active, search, tools])

  const counts = useMemo(() => {
    const map: Record<string, number> = { All: tools.length }
    CATEGORIES.forEach(cat => { map[cat] = tools.filter(t => t.category === cat).length })
    return map
  }, [tools])

  return (
    <section className="bg-ivory py-[clamp(60px,8vw,100px)] px-8 lg:px-12">
      <div className="max-w-[1180px] mx-auto">

        {/* Search + count */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10">
          <div className="relative">
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-ash" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search tools…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="font-body text-[14px] text-near-black placeholder:text-ash bg-warm-white border border-parchment focus:border-gold/60 outline-none pl-10 pr-4 py-3 w-full sm:w-[300px] transition-colors duration-200"
            />
          </div>
          <p className="font-body text-[12px] text-ash font-light">
            {filtered.length} tool{filtered.length !== 1 ? 's' : ''}
            {active !== 'All' && ` in ${active}`}
            {search && ` matching "${search}"`}
          </p>
        </div>

        {/* Category filter pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {/* All pill */}
          <button
            onClick={() => setActive('All')}
            className={`inline-flex items-center gap-2 font-body text-[11px] tracking-[0.06em] uppercase px-4 py-2.5 border transition-all duration-150 ${
              active === 'All'
                ? 'bg-near-black text-warm-white border-near-black'
                : 'bg-warm-white text-slate-warm border-parchment hover:border-charcoal/40 hover:text-charcoal'
            }`}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 shrink-0">
              <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
            </svg>
            All
            <span className={`text-[10px] ${active === 'All' ? 'text-warm-white/50' : 'text-ash'}`}>
              {counts['All']}
            </span>
          </button>

          {CATEGORIES.map(cat => {
            const meta = CATEGORY_META[cat]
            const isActive = active === cat
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={isActive ? { backgroundColor: meta.color, borderColor: meta.color, color: '#FDFCFA' } : {}}
                className={`inline-flex items-center gap-2 font-body text-[11px] tracking-[0.06em] uppercase px-4 py-2.5 border transition-all duration-150 ${
                  isActive
                    ? ''
                    : 'bg-warm-white text-slate-warm border-parchment hover:border-charcoal/30 hover:text-charcoal'
                }`}
              >
                <span
                  className="w-3.5 h-3.5 shrink-0"
                  style={{ color: isActive ? '#FDFCFA' : meta.color }}
                >
                  {meta.icon}
                </span>
                {cat}
                <span className={`text-[10px] ${isActive ? 'opacity-60' : 'text-ash'}`}>
                  {counts[cat]}
                </span>
              </button>
            )
          })}
        </div>

        {/* Tool grid */}
        {filtered.length === 0 ? (
          <p className="font-body text-[14px] text-ash font-light py-16 text-center">
            No tools match your search. Try a different term or category.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(tool => {
              const catMeta = CATEGORY_META[tool.category] ?? { color: '#B8B4AC', bg: '#F9F7F4' }
              const priceMeta = PRICING_META[tool.pricing]
              return (
                <div
                  key={tool.name}
                  className="bg-warm-white border border-parchment flex flex-col overflow-hidden hover:shadow-[0_4px_24px_rgba(30,28,26,0.08)] hover:-translate-y-0.5 transition-all duration-200 group"
                >
                  {/* Coloured top stripe */}
                  <div className="h-1 w-full shrink-0" style={{ backgroundColor: catMeta.color }} />

                  {/* Card body */}
                  <div className="p-6 flex flex-col gap-4 flex-1">

                    {/* Header row: name + pricing badge */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display font-light text-[22px] text-near-black leading-[1.15]">
                          {tool.name}
                        </h3>
                        {/* Category badge with icon */}
                        <div className="flex items-center gap-1.5 mt-1.5">
                          <span className="w-3 h-3 shrink-0" style={{ color: catMeta.color }}>
                            {catMeta.icon}
                          </span>
                          <p className="font-body text-[10px] tracking-[0.18em] uppercase" style={{ color: catMeta.color }}>
                            {tool.category}
                          </p>
                        </div>
                      </div>

                      {/* Pricing badge */}
                      <span
                        className="font-body text-[10px] tracking-[0.08em] uppercase px-2.5 py-1 border shrink-0 mt-0.5"
                        style={{ backgroundColor: priceMeta.bg, color: priceMeta.color, borderColor: priceMeta.border }}
                      >
                        {priceMeta.label}
                      </span>
                    </div>

                    {/* Large decorative icon in background */}
                    <div className="relative">
                      <div
                        className="absolute -top-8 -right-2 w-16 h-16 opacity-[0.07] pointer-events-none"
                        style={{ color: catMeta.color }}
                        aria-hidden
                      >
                        {catMeta.icon}
                      </div>
                    </div>

                    {/* Tagline */}
                    <p className="font-body text-[13px] leading-[1.75] text-slate-warm font-light flex-1">
                      {tool.tagline}
                    </p>

                    {/* Best for */}
                    <div
                      className="rounded-none px-4 py-3 mt-auto"
                      style={{ backgroundColor: catMeta.bg }}
                    >
                      <p
                        className="font-body text-[9px] tracking-[0.2em] uppercase mb-1"
                        style={{ color: catMeta.color }}
                      >
                        Best for
                      </p>
                      <p className="font-body text-[12px] leading-[1.65] text-charcoal font-light">
                        {tool.bestFor}
                      </p>
                    </div>

                    {/* Link */}
                    <Link
                      href={tool.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-[11px] tracking-[0.1em] uppercase inline-flex items-center gap-1.5 transition-colors duration-200 hover:opacity-70"
                      style={{ color: catMeta.color }}
                    >
                      Visit website
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-parchment">
          <p className="font-body text-[11px] text-ash uppercase tracking-[0.15em]">Pricing</p>
          {Object.values(PRICING_META).map(p => (
            <span
              key={p.label}
              className="font-body text-[10px] tracking-[0.08em] uppercase px-2.5 py-1 border"
              style={{ backgroundColor: p.bg, color: p.color, borderColor: p.border }}
            >
              {p.label}
            </span>
          ))}
          <p className="font-body text-[11px] text-ash font-light italic ml-auto hidden sm:block">
            Pricing tiers are indicative — always verify directly with the vendor.
          </p>
        </div>

      </div>
    </section>
  )
}
