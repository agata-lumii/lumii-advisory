import type { Metadata } from 'next'
import { PageIntro, TextLink } from '@/components/lumii/primitives'

export const metadata: Metadata = {
  title: 'Brand Guidelines — Lumii Advisory',
  description: 'Lumii Advisory design system: colour palette, typography, components, and usage guidelines.',
  // Intentional: an internal reference page, not a search landing page.
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://lumiiadvisory.com/brand' },
}

// The Find Your Light system (Sept 2026 redesign). Values match :root in app/lumii.css.
const colours = [
  { name: 'Ink', token: '--ink', hex: '#1E1C1A', use: 'Text, dark sections, primary buttons.' },
  { name: 'Yellow', token: '--yellow', hex: '#F5EE54', use: 'Signature accent: key buttons, highlights, the enquiry band.' },
  { name: 'Paper', token: '--paper', hex: '#F9F7F4', use: 'Page background.' },
  { name: 'Stone', token: 'tint', hex: '#EEEBE5', use: 'Alternate section background.' },
  { name: 'Muted', token: '--muted', hex: '#6B655F', use: 'Body copy and secondary text.' },
  { name: 'Line', token: '--line', hex: '#D9D4CC', use: 'Rules, borders and dividers.' },
  { name: 'Accent', token: '--accent', hex: '#80653B', use: 'Focus outlines and link hover only.' },
]

const type = [
  { role: 'Wordmark', face: 'Cormorant Garamond 300, tracked .25em', sample: 'LUMII', className: 'logo' },
  { role: 'Headings', face: 'Manrope 600, tight tracking (−.055em)', sample: 'Find your light.', className: 'type-heading' },
  { role: 'Accent words', face: 'Georgia italic, used inside headings', sample: 'move people forward.', className: 'type-accent' },
  { role: 'Body & UI', face: 'DM Sans 400, 1rem / 1.6', sample: 'Practical AI courses, inspiring talks and hands-on offsite training.', className: 'type-body' },
  { role: 'Eyebrows', face: 'DM Sans 650, 0.75rem, uppercase, .13em', sample: 'AI COURSES FOR BUSINESSES', className: 'eyebrow' },
]

export default function BrandPage() {
  return (
    <div className="lumii">
      <PageIntro
        label="BRAND GUIDELINES"
        title="The Find Your Light design system."
        lead="Bold yellow, ink and warm paper; Manrope headings with a serif italic accent; the original Lumii wordmark. Restraint makes the yellow count."
      />

      <section className="section" aria-labelledby="colour-title">
        <div className="section-top">
          <div>
            <p className="eyebrow">01 / COLOUR</p>
            <h2 id="colour-title">Palette.</h2>
          </div>
        </div>
        <div className="card-grid three">
          {colours.map((c) => (
            <article className="content-card" key={c.name}>
              <div className="swatch" style={{ background: c.hex }} />
              <p className="eyebrow">
                {c.name.toUpperCase()} · {c.hex}
              </p>
              <p>
                <code>{c.token}</code> — {c.use}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section tint" aria-labelledby="type-title">
        <div className="section-top">
          <div>
            <p className="eyebrow">02 / TYPOGRAPHY</p>
            <h2 id="type-title">Type.</h2>
          </div>
        </div>
        <div className="editorial-list">
          {type.map((t) => (
            <article key={t.role}>
              <p className="eyebrow">{t.role.toUpperCase()}</p>
              <p className={t.className}>{t.sample}</p>
              <p>{t.face}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="components-title">
        <div className="section-top">
          <div>
            <p className="eyebrow">03 / COMPONENTS</p>
            <h2 id="components-title">Buttons and links.</h2>
          </div>
        </div>
        <div className="hero-actions row">
          <TextLink href="/brand" className="button yellow" arrow="↗">
            Primary action
          </TextLink>
          <TextLink href="/brand" className="button" arrow="↗">
            Secondary action
          </TextLink>
          <TextLink href="/brand">Text link</TextLink>
        </div>
        <p className="form-note stack-top">
          One yellow button per view. Buttons use a 5px radius; arrows are ↗ for outbound or
          conversational actions and → for moving on through the site.
        </p>
      </section>
    </div>
  )
}
