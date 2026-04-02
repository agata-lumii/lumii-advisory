import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Brand Guidelines — Lumii Advisory',
  description: 'Lumii Advisory design system: colour palette, typography, components, and usage guidelines.',
}

const colours = [
  { name: 'near-black', hex: '#1E1C1A', usage: 'Primary backgrounds, headings, CTA backgrounds', textClass: 'text-warm-white' },
  { name: 'charcoal', hex: '#3A3834', usage: 'Secondary text, dark cards', textClass: 'text-warm-white' },
  { name: 'gold', hex: '#C9A96E', usage: 'Accent, primary CTA, tags, dividers', textClass: 'text-near-black' },
  { name: 'gold-light', hex: '#E8D5B0', usage: 'Soft gold tints, backgrounds', textClass: 'text-near-black' },
  { name: 'slate-warm', hex: '#7A776F', usage: 'Body text on light backgrounds', textClass: 'text-warm-white' },
  { name: 'ash', hex: '#B8B4AC', usage: 'Labels, captions, secondary nav', textClass: 'text-near-black' },
  { name: 'parchment', hex: '#DDD9D2', usage: 'Borders, dividers, input underlines', textClass: 'text-near-black' },
  { name: 'stone', hex: '#EAE7E1', usage: 'Section backgrounds (medium)', textClass: 'text-near-black' },
  { name: 'ivory', hex: '#F9F7F4', usage: 'Card backgrounds, alternate sections', textClass: 'text-near-black' },
  { name: 'warm-white', hex: '#FDFCFA', usage: 'Primary page background', textClass: 'text-near-black' },
]

export default function BrandPage() {
  return (
    <div className="bg-ivory min-h-screen">
      {/* Header */}
      <div className="bg-near-black pt-40 pb-20 px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-8">
            Internal Reference
          </p>
          <h1 className="font-display font-light text-[clamp(48px,5vw,80px)] leading-[1.08] text-warm-white tracking-[-0.01em]">
            Brand Guidelines
          </h1>
          <p className="font-body text-[16px] leading-[1.75] text-warm-white/55 max-w-[500px] mt-6 font-light">
            The Lumii Advisory design system — colours, typography, components, and usage guidelines for consistent brand expression.
          </p>
        </div>
      </div>

      <div className="max-w-[1180px] mx-auto px-8 lg:px-12 py-20">

        {/* ── Colour Palette ─────────────────────────────── */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-8 h-px bg-gold" />
            <span className="font-body text-[10px] tracking-[0.3em] uppercase text-gold">01</span>
          </div>
          <h2 className="font-display text-[40px] font-light text-near-black mb-10">Colour Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {colours.map((c) => (
              <div key={c.name} className="overflow-hidden rounded-none border border-parchment">
                <div
                  className={`h-24 flex items-end p-4 ${c.textClass}`}
                  style={{ backgroundColor: c.hex }}
                >
                  <span className="font-body text-[11px] font-medium tracking-[0.05em]">{c.hex}</span>
                </div>
                <div className="bg-warm-white p-4">
                  <p className="font-body text-[12px] font-medium text-near-black">{c.name}</p>
                  <p className="font-body text-[11px] text-slate-warm font-light mt-1 leading-[1.5]">{c.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Typography ─────────────────────────────────── */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-8 h-px bg-gold" />
            <span className="font-body text-[10px] tracking-[0.3em] uppercase text-gold">02</span>
          </div>
          <h2 className="font-display text-[40px] font-light text-near-black mb-10">Typography</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Display font */}
            <div className="bg-warm-white border border-parchment p-10">
              <p className="font-body text-[10px] tracking-[0.25em] uppercase text-ash mb-6">Display — Cormorant Garamond</p>
              <p className="font-display text-[64px] font-light text-near-black leading-[1] mb-4">Aa</p>
              <p className="font-display text-[32px] font-light italic text-gold mb-6">Clarity in an age of noise.</p>
              <div className="space-y-3 font-display text-near-black">
                <p className="text-[48px] font-light leading-[1]">Display / 300</p>
                <p className="text-[36px] font-normal leading-[1.1]">Heading / 400</p>
                <p className="text-[28px] font-medium leading-[1.2]">Subheading / 500</p>
                <p className="text-[22px] italic font-light leading-[1.3] text-gold">Italic / 300</p>
              </div>
              <div className="mt-6 pt-6 border-t border-parchment">
                <p className="font-body text-[11px] text-ash">Weights: 300, 400, 500, 600 — Normal & Italic</p>
                <p className="font-body text-[11px] text-ash mt-1">Usage: All headings, display text, pull quotes, logo</p>
              </div>
            </div>

            {/* Body font */}
            <div className="bg-warm-white border border-parchment p-10">
              <p className="font-body text-[10px] tracking-[0.25em] uppercase text-ash mb-6">Body — DM Sans</p>
              <p className="font-body text-[64px] font-light text-near-black leading-[1] mb-4">Aa</p>
              <p className="font-body text-[17px] text-slate-warm font-light leading-[1.8] mb-6">
                We help ambitious businesses find the signal in the noise — turning digital complexity into strategy.
              </p>
              <div className="space-y-3 font-body text-near-black">
                <p className="text-[17px] font-light leading-[1.75]">Body / 300 — Lead paragraph text</p>
                <p className="text-[15px] font-normal leading-[1.7]">Body / 400 — Standard body copy</p>
                <p className="text-[13px] font-medium leading-[1.6]">Caption / 500 — Labels and metadata</p>
                <p className="text-[10px] tracking-[0.3em] uppercase text-gold">NAV / LABEL — 300 · TRACKING 0.3EM</p>
              </div>
              <div className="mt-6 pt-6 border-t border-parchment">
                <p className="font-body text-[11px] text-ash">Weights: 300, 400, 500</p>
                <p className="font-body text-[11px] text-ash mt-1">Usage: All body text, navigation, buttons, labels, captions</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Buttons ────────────────────────────────────── */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-8 h-px bg-gold" />
            <span className="font-body text-[10px] tracking-[0.3em] uppercase text-gold">03</span>
          </div>
          <h2 className="font-display text-[40px] font-light text-near-black mb-10">Buttons & CTAs</h2>

          <div className="bg-warm-white border border-parchment p-10">
            <div className="flex flex-wrap gap-6 items-start">
              {/* Primary */}
              <div>
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-ash mb-4">Primary CTA</p>
                <button className="font-body text-[12px] tracking-[0.12em] uppercase text-near-black bg-gold px-9 py-4 hover:bg-[#d4b47a] hover:-translate-y-px transition-all duration-200">
                  Book a Discovery Call
                </button>
                <p className="font-body text-[11px] text-ash mt-3">Gold bg · Near-black text · Uppercase · Letter-spacing 0.12em</p>
              </div>

              {/* Dark */}
              <div>
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-ash mb-4">Dark CTA</p>
                <button className="font-body text-[12px] tracking-[0.12em] uppercase text-warm-white bg-near-black px-9 py-4 hover:-translate-y-px transition-all duration-200">
                  Learn More
                </button>
                <p className="font-body text-[11px] text-ash mt-3">Near-black bg · Warm-white text</p>
              </div>

              {/* Outline */}
              <div>
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-ash mb-4">Outline</p>
                <button className="font-body text-[12px] tracking-[0.1em] uppercase text-near-black border border-near-black px-6 py-2.5 hover:bg-near-black hover:text-warm-white transition-all duration-200">
                  Book a Call
                </button>
                <p className="font-body text-[11px] text-ash mt-3">1px border · Near-black text · Hover fills</p>
              </div>

              {/* Text link */}
              <div>
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-ash mb-4">Text Link</p>
                <button className="font-body text-[12px] tracking-[0.12em] uppercase text-warm-white/60 py-4 border-b border-warm-white/20 bg-near-black px-4">
                  Meet Agata →
                </button>
                <p className="font-body text-[11px] text-ash mt-3">Underline border · On dark backgrounds</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Logo ───────────────────────────────────────── */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-8 h-px bg-gold" />
            <span className="font-body text-[10px] tracking-[0.3em] uppercase text-gold">04</span>
          </div>
          <h2 className="font-display text-[40px] font-light text-near-black mb-10">Logo & Wordmark</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-warm-white border border-parchment p-12 flex items-center justify-center">
              <div className="font-display font-light text-[32px] tracking-[0.25em] uppercase text-near-black leading-none">
                LUMII
                <span className="block font-body font-normal text-[9px] tracking-[0.35em] uppercase text-ash mt-1">
                  ADVISORY
                </span>
              </div>
            </div>
            <div className="bg-near-black border border-[rgba(180,175,168,0.12)] p-12 flex items-center justify-center">
              <div className="font-display font-light text-[32px] tracking-[0.25em] uppercase text-warm-white leading-none">
                LUMII
                <span className="block font-body font-normal text-[9px] tracking-[0.35em] uppercase text-ash mt-1">
                  ADVISORY
                </span>
              </div>
            </div>
          </div>
          <div className="mt-6 bg-warm-white border border-parchment p-8">
            <p className="font-body text-[12px] text-slate-warm font-light leading-[1.75]">
              <strong className="font-medium text-near-black">Wordmark construction:</strong> "LUMII" in Cormorant Garamond Light, 22–32px, tracking 0.25em, all uppercase. "ADVISORY" subscript in DM Sans Regular, 8–9px, tracking 0.35em, uppercase, ash colour (#B8B4AC). No icon or logomark — the wordmark stands alone.
            </p>
          </div>
        </section>

        {/* ── Spacing & Layout ───────────────────────────── */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-8 h-px bg-gold" />
            <span className="font-body text-[10px] tracking-[0.3em] uppercase text-gold">05</span>
          </div>
          <h2 className="font-display text-[40px] font-light text-near-black mb-10">Spacing & Layout</h2>

          <div className="bg-warm-white border border-parchment p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <p className="font-body text-[13px] font-medium text-near-black mb-4">Container & Grid</p>
                <ul className="space-y-2 font-body text-[13px] text-slate-warm font-light">
                  <li>Max site width: <strong className="text-near-black font-medium">1180px</strong></li>
                  <li>Horizontal padding: <strong className="text-near-black font-medium">px-8 lg:px-12</strong> (32px / 48px)</li>
                  <li>Section vertical padding: <strong className="text-near-black font-medium">clamp(80px, 10vw, 140px)</strong></li>
                  <li>Section gap (grid): <strong className="text-near-black font-medium">gap-16 lg:gap-24</strong></li>
                </ul>
              </div>
              <div>
                <p className="font-body text-[13px] font-medium text-near-black mb-4">Section Hierarchy</p>
                <ul className="space-y-2 font-body text-[13px] text-slate-warm font-light">
                  <li>Section tag: 10px · tracking 0.3em · uppercase · gold</li>
                  <li>Section heading: clamp(36px, 4vw, 58px) · light weight</li>
                  <li>Lead paragraph: 17px · line-height 1.8 · light weight</li>
                  <li>Body copy: 15–16px · line-height 1.75–1.85</li>
                  <li>Card body: 14px · line-height 1.75</li>
                  <li>Labels/captions: 10–12px · tracking 0.15–0.3em · uppercase</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Design Principles ──────────────────────────── */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-8 h-px bg-gold" />
            <span className="font-body text-[10px] tracking-[0.3em] uppercase text-gold">06</span>
          </div>
          <h2 className="font-display text-[40px] font-light text-near-black mb-10">Design Principles</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                principle: 'Restraint',
                detail: 'White space is not empty — it\'s intentional. Every element earns its place. Resist the urge to fill.',
              },
              {
                principle: 'Contrast',
                detail: 'The interplay between near-black sections and warm-white sections creates rhythm and visual interest without relying on decorative elements.',
              },
              {
                principle: 'Gold as signal',
                detail: 'Gold (#C9A96E) is used sparingly and intentionally — as accent, emphasis, and wayfinding. It should feel precious, not ubiquitous.',
              },
            ].map((p) => (
              <div key={p.principle} className="bg-warm-white border border-parchment p-8">
                <div className="w-6 h-0.5 bg-gold mb-5" />
                <h3 className="font-display text-[24px] font-light text-near-black mb-3">{p.principle}</h3>
                <p className="font-body text-[13px] text-slate-warm font-light leading-[1.75]">{p.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Back to home */}
        <div className="pt-10 border-t border-parchment">
          <Link
            href="/"
            className="font-body text-[12px] tracking-[0.12em] uppercase text-near-black border border-near-black px-8 py-3 hover:bg-near-black hover:text-warm-white transition-all duration-200 inline-block"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
