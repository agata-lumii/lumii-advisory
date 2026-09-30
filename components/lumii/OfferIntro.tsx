import { Breadcrumbs, type Crumb } from './seo'
import { TextLink } from './primitives'

/**
 * Opening section for offer landing pages: breadcrumbs, a heading phrased the
 * way people search, the approved lead copy, two actions and a visual.
 */
export default function OfferIntro({
  trail,
  eyebrow,
  title,
  lead,
  primary,
  secondary,
  media,
}: {
  trail: Crumb[]
  eyebrow: string
  title: React.ReactNode
  lead: string
  primary: { href: string; label: string }
  secondary?: { href: string; label: string }
  media: React.ReactNode
}) {
  return (
    <section className="page-intro section with-media">
      <div>
        <Breadcrumbs trail={trail} />
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-lead">{lead}</p>
        <div className="hero-actions">
          <TextLink href={primary.href} className="button yellow" arrow="↗">
            {primary.label}
          </TextLink>
          {secondary ? <TextLink href={secondary.href}>{secondary.label}</TextLink> : null}
        </div>
      </div>
      <div>{media}</div>
    </section>
  )
}

/**
 * Dark cover card in the style of the homepage course cover. Decorative, so
 * hidden from assistive tech; each page states the same content in text.
 */
export function CoverCard({
  label,
  lines,
  footer,
}: {
  label: string
  /** Title lines; wrap a word in <em> for the yellow serif accent. */
  lines: React.ReactNode[]
  footer: string[]
}) {
  return (
    <div className="course-cover" aria-hidden="true">
      <span className="course-label">{label}</span>
      <p className="course-cover-title">
        {lines.map((line, i) => (
          <span key={i}>
            {line}
            {i < lines.length - 1 ? <br /> : null}
          </span>
        ))}
        <span className="title-dot">.</span>
      </p>
      <div className="course-bottom">
        <span>
          {footer.map((line, i) => (
            <span key={line}>
              {line}
              {i < footer.length - 1 ? <br /> : null}
            </span>
          ))}
        </span>
        <span className="course-spark">✳</span>
      </div>
    </div>
  )
}

/** The "Find Your Light with AI" cover from the homepage courses section. */
export function CourseCover() {
  return (
    <CoverCard
      label="THE LUMII COURSE SERIES"
      lines={['Find Your', <em key="l">Light</em>, 'with AI']}
      footer={['FOR PEOPLE.', 'FOR WORK.', 'FOR WHAT’S NEXT.']}
    />
  )
}
