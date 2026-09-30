import { PageIntro, TextLink } from './primitives'

/** Shared layout for the privacy policy and terms of service. */
export default function LegalPage({
  title,
  lead,
  updated,
  sections,
}: {
  title: string
  lead: string
  updated: string
  sections: { heading: string; body: React.ReactNode }[]
}) {
  return (
    <div className="lumii">
      <PageIntro label="LEGAL" title={title} lead={lead} />
      <section className="section">
        <div className="prose legal">
          <p className="form-note">Last updated: {updated}</p>
          {sections.map((s) => (
            <div key={s.heading}>
              <h2>{s.heading}</h2>
              <div className="legal-body">{s.body}</div>
            </div>
          ))}
          <p className="stack-top">
            <TextLink href="/contact">Get in touch</TextLink>
          </p>
        </div>
      </section>
    </div>
  )
}
