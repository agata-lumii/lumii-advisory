import Link from 'next/link'

export const SITE_URL = 'https://lumiiadvisory.com'

/** Renders one or more JSON-LD objects. */
export function JsonLd({ data }: { data: object | object[] }) {
  const items = Array.isArray(data) ? data : [data]
  return (
    <>
      {items.map((item, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }} />
      ))}
    </>
  )
}

export interface Crumb {
  name: string
  href: string
}

/**
 * Visible breadcrumb trail plus matching BreadcrumbList schema, generated
 * from the same list so the two can't drift apart. "Home" is implied.
 */
export function Breadcrumbs({
  trail,
  lastLabel,
}: {
  trail: Crumb[]
  /** Shorter visible label for the current page; the schema keeps its full name. */
  lastLabel?: string
}) {
  const all = [{ name: 'Home', href: '/' }, ...trail]
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: all.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.href === '/' ? '' : crumb.href}`,
    })),
  }
  return (
    <>
      <JsonLd data={schema} />
      <nav aria-label="Breadcrumb">
        <ol className="breadcrumbs">
          {all.map((crumb, i) =>
            i === all.length - 1 ? (
              <li key={crumb.href} aria-current="page">
                {(lastLabel ?? crumb.name).toUpperCase()}
              </li>
            ) : (
              <li key={crumb.href}>
                <Link href={crumb.href}>{crumb.name.toUpperCase()}</Link>
              </li>
            ),
          )}
        </ol>
      </nav>
    </>
  )
}

export interface Faq {
  q: string
  a: string
}

/**
 * Question-and-answer section with FAQPage schema. Questions are phrased the
 * way people ask search engines and AI assistants, and answered in the
 * first sentence, which is what answer engines extract.
 */
export function FaqSection({
  faqs,
  eyebrow = 'COMMON QUESTIONS',
  title,
  id = 'questions',
  schema = true,
}: {
  faqs: Faq[]
  eyebrow?: string
  title: string
  id?: string
  schema?: boolean
}) {
  return (
    <section className="section" id={id} aria-labelledby={`${id}-title`}>
      {schema ? (
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }}
        />
      ) : null}
      <div className="section-top">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={`${id}-title`}>{title}</h2>
        </div>
      </div>
      <div className="editorial-list">
        {faqs.map((faq, i) => (
          <article key={faq.q}>
            <p className="eyebrow">{String(i + 1).padStart(2, '0')}</p>
            <h3>{faq.q}</h3>
            <p>{faq.a}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export function StatRow({
  stats,
}: {
  stats: { value: string; label: string; source?: string; url?: string }[]
}) {
  return (
    <div className="stat-row">
      {stats.map((stat) => (
        <div className="stat" key={stat.value + stat.label}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
          {stat.source ? (
            stat.url ? (
              <a href={stat.url} target="_blank" rel="noopener noreferrer">
                {stat.source} ↗
              </a>
            ) : (
              <span>{stat.source}</span>
            )
          ) : null}
        </div>
      ))}
    </div>
  )
}
