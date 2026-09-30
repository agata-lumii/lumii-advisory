import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { PageIntro } from '@/components/lumii/primitives'
import { JsonLd, SITE_URL } from '@/components/lumii/seo'

const PAGE_URL = `${SITE_URL}/contact`
const TITLE = 'Contact Lumii: AI Courses, Workshops & Keynotes | Sydney'
const DESCRIPTION =
  'Enquire about AI courses, team workshops, keynotes or AI advisory with Agata Adamczak. Sydney-based, working across Australia and APAC. Or book a free 30-minute call.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
}

const CALENDLY = 'https://calendly.com/agata-lumiiadvisory'

export default function ContactPage() {
  return (
    <div className="lumii">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          url: PAGE_URL,
          name: TITLE,
          about: { '@id': `${SITE_URL}/#organization` },
        }}
      />
      <PageIntro
        label="GET IN TOUCH"
        title={
          <>
            Let’s find your
            <br />
            light.
          </>
        }
        lead="Tell me about your team or your next event. We’ll work out where Lumii can help."
      />

      <section className="section split" aria-label="Contact details and enquiry form">
        <div>
          <p className="eyebrow">START THE CONVERSATION</p>
          <h2>I’ll reply within one business day.</h2>
          <div className="detail-list stack-top">
            <div>
              <p className="eyebrow">EMAIL</p>
              <p>
                <a className="text-link" href="mailto:hello@lumiiadvisory.com">
                  hello@lumiiadvisory.com
                </a>
              </p>
            </div>
            <div>
              <p className="eyebrow">BOOK DIRECTLY</p>
              <p>
                <a className="text-link" href={CALENDLY} target="_blank" rel="noopener noreferrer">
                  Schedule a 30-minute call <span aria-hidden="true">↗</span>
                </a>
                <br />
                Free, no obligation — pick a time that works for you.
              </p>
            </div>
            <div>
              <p className="eyebrow">LOCATION</p>
              <p>
                Sydney, Australia
                <br />
                Working with teams across Australia and APAC.
              </p>
            </div>
            <div>
              <p className="eyebrow">CONNECT</p>
              <p>
                <a
                  className="text-link"
                  href="https://www.linkedin.com/company/lumii-advisory"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lumii Advisory on LinkedIn <span aria-hidden="true">↗</span>
                </a>
                <br />
                <a
                  className="text-link"
                  href="https://www.linkedin.com/in/agata-a-47295a24/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agata Adamczak on LinkedIn <span aria-hidden="true">↗</span>
                </a>
              </p>
            </div>
          </div>
          <blockquote className="callout">
            <p>
              “The first conversation is always exploratory — no agenda, no pressure. Just a genuine
              discussion about your business and where you want to go.”
            </p>
            <p className="eyebrow">AGATA ADAMCZAK, FOUNDER</p>
          </blockquote>
        </div>
        <div className="panel">
          <ContactForm />
        </div>
      </section>
    </div>
  )
}
