'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { Article } from '@/lib/insights'

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function InsightsGrid({ articles }: { articles: Article[] }) {
  const categories = ['All', ...Array.from(new Set(articles.map((a) => a.category)))]
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? articles : articles.filter((a) => a.category === active)
  const [featured, ...rest] = filtered

  return (
    <>
      {/* Category filters */}
      <section className="bg-ivory border-b border-parchment px-8 lg:px-12 py-6">
        <div className="max-w-[1180px] mx-auto flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-body text-[11px] tracking-[0.12em] uppercase px-4 py-2 border transition-all duration-150 ${
                active === cat
                  ? 'bg-near-black text-warm-white border-near-black'
                  : 'bg-warm-white text-slate-warm border-parchment hover:border-charcoal/40 hover:text-charcoal'
              }`}
            >
              {cat}
              <span className={`ml-1.5 text-[10px] ${active === cat ? 'text-warm-white/50' : 'text-ash'}`}>
                {cat === 'All' ? articles.length : articles.filter((a) => a.category === cat).length}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Featured article */}
      {featured && (
        <section className="bg-ivory py-[clamp(60px,8vw,100px)] px-8 lg:px-12">
          <div className="max-w-[1180px] mx-auto">
            <p className="font-body text-[10px] tracking-[0.25em] uppercase text-ash mb-10">
              {active === 'All' ? 'Latest' : `Latest in ${active}`}
            </p>
            <Link href={`/insights/${featured.slug}`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-warm-white border border-parchment p-10 lg:p-14 hover:border-gold/40 transition-colors duration-300">
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="font-body text-[10px] tracking-[0.2em] uppercase text-gold mb-4">
                      {featured.category}
                    </p>
                    <h2 className="font-display font-light text-[clamp(28px,3vw,42px)] leading-[1.2] text-near-black mb-5 group-hover:text-charcoal transition-colors">
                      {featured.title}
                    </h2>
                    <p className="font-body text-[15px] leading-[1.8] text-slate-warm font-light">
                      {featured.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-parchment">
                    <div className="flex items-center gap-4">
                      <span className="font-body text-[12px] text-ash">{formatDate(featured.date)}</span>
                      <span className="text-ash">·</span>
                      <span className="font-body text-[12px] text-ash">{featured.readTime}</span>
                    </div>
                    <span className="font-body text-[12px] tracking-[0.12em] uppercase text-gold group-hover:tracking-[0.2em] transition-all duration-300">
                      Read →
                    </span>
                  </div>
                </div>
                <div className="bg-near-black p-10 flex items-center justify-center min-h-[240px]">
                  <div className="text-center">
                    <p className="font-display font-light text-[80px] leading-none text-gold/20 select-none">
                      {featured.title.charAt(0)}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center mt-6">
                      {featured.tags.map((tag) => (
                        <span key={tag} className="font-body text-[10px] tracking-[0.15em] uppercase text-warm-white/40 border border-warm-white/10 px-3 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Article grid */}
      {rest.length > 0 && (
        <section className="bg-warm-white py-[clamp(60px,8vw,100px)] px-8 lg:px-12">
          <div className="max-w-[1180px] mx-auto">
            <p className="font-body text-[10px] tracking-[0.25em] uppercase text-ash mb-10">
              {active === 'All' ? 'All Articles' : active}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rest.map((article) => (
                <Link
                  key={article.slug}
                  href={`/insights/${article.slug}`}
                  className="group flex flex-col bg-ivory border border-parchment hover:border-gold/40 transition-colors duration-300"
                >
                  <div className="p-8 flex flex-col flex-1">
                    <p className="font-body text-[10px] tracking-[0.2em] uppercase text-gold mb-3">
                      {article.category}
                    </p>
                    <h3 className="font-display font-light text-[22px] leading-[1.3] text-near-black mb-4 group-hover:text-charcoal transition-colors flex-1">
                      {article.title}
                    </h3>
                    <p className="font-body text-[13px] leading-[1.75] text-slate-warm font-light line-clamp-3 mb-6">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-parchment">
                      <div className="flex items-center gap-3">
                        <span className="font-body text-[11px] text-ash">{formatDate(article.date)}</span>
                        <span className="text-ash text-[10px]">·</span>
                        <span className="font-body text-[11px] text-ash">{article.readTime}</span>
                      </div>
                      <span className="font-body text-[11px] tracking-[0.12em] uppercase text-gold group-hover:tracking-[0.2em] transition-all duration-300">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {filtered.length === 0 && (
        <section className="bg-warm-white py-24 px-8 lg:px-12 text-center">
          <p className="font-body text-[14px] text-ash font-light">No articles in this category yet.</p>
        </section>
      )}
    </>
  )
}
