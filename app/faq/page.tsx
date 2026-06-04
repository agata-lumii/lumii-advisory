'use client'

import { useState } from 'react'
import Link from 'next/link'
import { faqs } from '@/lib/faq'
import CTABanner from '@/components/CTABanner'

const categories = ['All', ...Array.from(new Set(faqs.map((f) => f.category)))]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.answer,
    },
  })),
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const filtered = activeCategory === 'All' ? faqs : faqs.filter((f) => f.category === activeCategory)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* Hero */}
      <section className="bg-near-black pt-40 pb-24 px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-8">
            FAQ
          </p>
          <h1 className="font-display font-light text-[clamp(48px,5.5vw,80px)] leading-[1.08] text-warm-white mb-6 tracking-[-0.01em] max-w-[720px]">
            Questions we<br />
            <em className="italic text-gold">hear most often.</em>
          </h1>
          <p className="font-body text-[17px] leading-[1.8] text-warm-white/60 max-w-[560px] font-light">
            Straightforward answers to the questions leadership teams ask before, during, and after their first conversation with us.
          </p>
        </div>
      </section>

      {/* FAQ content */}
      <section className="bg-warm-white py-[clamp(80px,10vw,140px)] px-8 lg:px-12">
        <div className="max-w-[860px] mx-auto">

          {/* Category filter */}
          <div className="flex flex-wrap gap-3 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setOpenIndex(null) }}
                className={`font-body text-[11px] tracking-[0.15em] uppercase px-5 py-2 border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-near-black text-warm-white border-near-black'
                    : 'text-slate-warm border-parchment hover:border-near-black hover:text-near-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion */}
          <div className="divide-y divide-parchment">
            {filtered.map((item, idx) => (
              <div key={idx}>
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-start justify-between gap-6 py-7 text-left bg-transparent border-0 cursor-pointer group"
                >
                  <span className={`font-display font-light text-[clamp(17px,1.8vw,22px)] leading-[1.35] transition-colors duration-200 ${
                    openIndex === idx ? 'text-near-black' : 'text-charcoal group-hover:text-near-black'
                  }`}>
                    {item.question}
                  </span>
                  <span className={`flex-shrink-0 w-6 h-6 border flex items-center justify-center transition-all duration-200 mt-0.5 ${
                    openIndex === idx ? 'bg-near-black border-near-black' : 'border-parchment group-hover:border-charcoal'
                  }`}>
                    <svg
                      className={`w-3 h-3 transition-transform duration-200 ${openIndex === idx ? 'rotate-45 text-warm-white' : 'text-near-black'}`}
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                {/*
                  Render the answer in the DOM at all times so search engines
                  and AI crawlers can read it without executing JS. Visual
                  expand/collapse handled via max-height + opacity transitions.
                */}
                <div
                  id={`faq-answer-${idx}`}
                  role="region"
                  aria-labelledby={`faq-question-${idx}`}
                  aria-hidden={openIndex !== idx}
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    openIndex === idx
                      ? 'max-h-[1600px] opacity-100 pb-8 pr-12'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="font-body text-[15px] leading-[1.85] text-slate-warm font-light">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="bg-ivory py-[clamp(60px,8vw,100px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-warm-white border border-parchment p-10">
            <p className="font-body text-[10px] tracking-[0.25em] uppercase text-gold mb-4">
              Still have a question?
            </p>
            <h2 className="font-display font-light text-[28px] text-near-black leading-[1.3] mb-4">
              Speak to Agata directly.
            </h2>
            <p className="font-body text-[14px] text-slate-warm font-light leading-[1.8] mb-8">
              If you have a question that is not answered here, book a 30-minute discovery call. There is no pitch — just an honest conversation about your situation.
            </p>
            <Link
              href="/contact"
              className="font-body text-[12px] tracking-[0.1em] uppercase text-near-black border border-near-black px-8 py-3 hover:bg-near-black hover:text-warm-white transition-all duration-200 inline-block"
            >
              Book a Discovery Call →
            </Link>
          </div>
          <div className="bg-warm-white border border-parchment p-10">
            <p className="font-body text-[10px] tracking-[0.25em] uppercase text-gold mb-4">
              Free Ebook
            </p>
            <h2 className="font-display font-light text-[28px] text-near-black leading-[1.3] mb-4">
              Start with the 90-day guide.
            </h2>
            <p className="font-body text-[14px] text-slate-warm font-light leading-[1.8] mb-8">
              <em className="italic">Find Your Light in the Age of AI</em> — six chapters covering readiness, use case selection, business case, pilot design, and scaling. Free download.
            </p>
            <Link
              href="/resources/ebook"
              className="font-body text-[12px] tracking-[0.1em] uppercase text-near-black border border-near-black px-8 py-3 hover:bg-near-black hover:text-warm-white transition-all duration-200 inline-block"
            >
              Download Free →
            </Link>
          </div>
          <div className="bg-warm-white border border-parchment p-10">
            <p className="font-body text-[10px] tracking-[0.25em] uppercase text-gold mb-4">
              Assess your readiness
            </p>
            <h2 className="font-display font-light text-[28px] text-near-black leading-[1.3] mb-4">
              Where does your business sit?
            </h2>
            <p className="font-body text-[14px] text-slate-warm font-light leading-[1.8] mb-8">
              Take our AI Readiness Checklist — 35 questions across 7 dimensions — and get a clear, scored picture of your organisation's AI maturity in 15 minutes.
            </p>
            <Link
              href="/resources/ai-readiness-checklist"
              className="font-body text-[12px] tracking-[0.1em] uppercase text-near-black border border-near-black px-8 py-3 hover:bg-near-black hover:text-warm-white transition-all duration-200 inline-block"
            >
              Start the Checklist →
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
