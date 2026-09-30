'use client'

import { useState } from 'react'
import Link from 'next/link'

interface LibraryItem {
  slug: string
  title: string
  category: string
}

/**
 * The Insights archive list from the redesign, keeping the category filter
 * the previous Insights page offered.
 */
export default function InsightsLibrary({ items }: { items: LibraryItem[] }) {
  const categories = Array.from(new Set(items.map((item) => item.category)))
  const [active, setActive] = useState<string | null>(null)
  const shown = active ? items.filter((item) => item.category === active) : items

  const filter = (label: string, value: string | null, count: number) => (
    <button
      key={label}
      type="button"
      className="library-filter"
      aria-pressed={active === value}
      onClick={() => setActive(value)}
    >
      {label} <span>{count}</span>
    </button>
  )

  return (
    <>
      <div className="library-filters" role="group" aria-label="Filter articles by category">
        {filter('All', null, items.length)}
        {categories.map((category) =>
          filter(category, category, items.filter((item) => item.category === category).length),
        )}
      </div>
      <div className="article-list">
        {shown.map((item) => (
          <Link key={item.slug} href={`/insights/${item.slug}`}>
            <span className="eyebrow">{item.category.toUpperCase()}</span>
            <h3>{item.title}</h3>
            <span aria-hidden="true">↗</span>
          </Link>
        ))}
      </div>
    </>
  )
}
