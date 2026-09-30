import Link from 'next/link'
import type { Interest } from '@/lib/navigation'

/**
 * Shared building blocks for the redesigned pages, ported from the helper
 * functions in lumii-design-handoff/build.py (link, intro, card, cta).
 */

export function TextLink({
  href,
  children,
  arrow = '→',
  className = 'text-link',
  interest,
}: {
  href: string
  children: React.ReactNode
  arrow?: '→' | '↗'
  className?: string
  interest?: Interest
}) {
  const data = interest ? { 'data-interest': interest } : {}
  return (
    <Link className={className} href={href} {...data}>
      {children} <span aria-hidden="true">{arrow}</span>
    </Link>
  )
}

export function PageIntro({
  label,
  title,
  lead,
}: {
  label: string
  title: React.ReactNode
  lead: string
}) {
  return (
    <section className="page-intro section">
      <p className="eyebrow">{label}</p>
      <h1>{title}</h1>
      <p className="page-lead">{lead}</p>
    </section>
  )
}

export function ContentCard({
  label,
  title,
  description,
  href,
  action,
  as: Heading = 'h2',
  id,
}: {
  id?: string
  label: string
  title: React.ReactNode
  description?: string
  href?: string
  action?: string
  as?: 'h2' | 'h3'
}) {
  return (
    <article className="content-card" id={id}>
      <p className="eyebrow">{label}</p>
      <Heading>{title}</Heading>
      {description ? <p>{description}</p> : null}
      {href && action ? <TextLink href={href}>{action}</TextLink> : null}
    </article>
  )
}

export const DEFAULT_CTA = {
  title: 'Ready to make AI part of the way you work?',
  description: 'Tell me about your people and what you want to change.',
}

/** The yellow closing band. Used by redesigned pages and, via CTABanner, retained ones. */
export function PageCta({
  title = DEFAULT_CTA.title,
  description = DEFAULT_CTA.description,
}: {
  title?: string
  description?: string
}) {
  return (
    <section className="page-cta section">
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <TextLink href="/#enquire" className="button">
        Let’s talk
      </TextLink>
    </section>
  )
}
