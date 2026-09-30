'use client'

import { useState, useMemo } from 'react'
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

const PRICING_LABEL: Record<string, string> = { Free: 'Free', Freemium: 'Freemium', Paid: 'Paid' }

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
    <section className="section" aria-labelledby="directory-title">
      <div className="section-top">
        <div>
          <p className="eyebrow">THE DIRECTORY</p>
          <h2 id="directory-title">Browse by what you want to do.</h2>
        </div>
      </div>

      <div className="directory-toolbar">
        <div className="field">
          <label htmlFor="tool-search">Search tools</label>
          <input
            id="tool-search"
            type="search"
            placeholder="Try “meeting notes” or “video”"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <p className="form-note" aria-live="polite">
          {filtered.length} tool{filtered.length !== 1 ? 's' : ''}
          {active !== 'All' && ` in ${active}`}
          {search && ` matching “${search}”`}
        </p>
      </div>

      <div className="library-filters" role="group" aria-label="Filter tools by category">
        <button type="button" className="library-filter" aria-pressed={active === 'All'} onClick={() => setActive('All')}>
          All <span>{counts['All']}</span>
        </button>
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            type="button"
            className="library-filter"
            aria-pressed={active === cat}
            onClick={() => setActive(cat)}
          >
            <span className="filter-icon" style={{ color: CATEGORY_META[cat]?.color }} aria-hidden="true">
              {CATEGORY_META[cat]?.icon}
            </span>
            {cat} <span>{counts[cat]}</span>
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="form-note">No tools match your search. Try a different term or category.</p>
      ) : (
        <div className="tool-grid">
          {filtered.map(tool => {
            const meta = CATEGORY_META[tool.category]
            return (
              <article className="tool-card" key={tool.name}>
                <p className="tool-category">
                  <span className="filter-icon" style={{ color: meta?.color }} aria-hidden="true">
                    {meta?.icon}
                  </span>
                  {tool.category}
                </p>
                <h3 className="tool-name">{tool.name}</h3>
                <span className="tag">{PRICING_LABEL[tool.pricing] ?? tool.pricing}</span>
                <p>{tool.tagline}</p>
                <p className="best-for">Best for</p>
                <p>{tool.bestFor}</p>
                <a className="text-link" href={tool.website} target="_blank" rel="noopener noreferrer">
                  Visit {tool.name} <span aria-hidden="true">↗</span>
                </a>
              </article>
            )
          })}
        </div>
      )}

      <p className="form-note stack-top">
        Pricing tiers are indicative — always verify directly with the vendor.
      </p>
    </section>
  )
}
