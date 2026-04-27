import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: {
    absolute: 'Terms of Service | Lumii Advisory',
  },
  description:
    'The terms governing your use of lumiiadvisory.com and any services provided by Lumii Advisory. Plain-English, no surprises.',
  alternates: {
    canonical: 'https://lumiiadvisory.com/terms-of-service',
  },
}

const sections = [
  {
    heading: '1. About these terms',
    body: 'These terms govern your use of lumiiadvisory.com and the materials, resources and content available on it. They sit alongside any separate engagement letter or statement of work signed for advisory services. If a signed engagement document conflicts with these terms, the signed document takes precedence for that engagement.',
  },
  {
    heading: '2. Who we are',
    body: 'Lumii Advisory is a sole-trader consulting business operated by Agata Adamczak, based in Sydney, NSW, Australia. References to "Lumii", "we", "our" and "us" mean Lumii Advisory.',
  },
  {
    heading: '3. Use of the website',
    body: 'You may use the site for lawful, personal and business research purposes. You agree not to interfere with the site, attempt to access non-public areas, scrape content for redistribution, or use it in any way that could damage Lumii or other users.',
  },
  {
    heading: '4. Content & intellectual property',
    body: 'All content on lumiiadvisory.com — including written articles, frameworks, checklists, guides, branding, design and code — is the intellectual property of Lumii Advisory unless otherwise indicated. You may quote short excerpts with attribution and a link back. You may not republish, resell, or use our content to train AI models without our written consent.',
  },
  {
    heading: '5. Resources and downloads',
    body: 'Resources made available on the site (such as the AI Readiness Checklist) are provided free for personal and internal business use within your own organisation. They are not licensed for redistribution, repackaging, or resale.',
  },
  {
    heading: '6. Advisory services',
    body: 'Any advisory engagement — workshops, project sprints or retainers — is governed by a separate engagement letter or statement of work. Nothing on this website constitutes a binding offer of services, formal advice, or a contractual commitment until both parties have signed an engagement document.',
  },
  {
    heading: '7. No warranty',
    body: 'The site and its content are provided "as is". We take care to ensure information is accurate at the time of publishing, but the AI and digital landscape changes rapidly and we make no warranty about ongoing accuracy, completeness, or fitness for any specific purpose. Use of the content is at your own discretion and risk.',
  },
  {
    heading: '8. Liability',
    body: 'To the maximum extent permitted by Australian law, Lumii Advisory is not liable for any loss or damage — direct, indirect, incidental or consequential — arising from your use of the website or reliance on its content. Nothing in these terms limits any rights you have under Australian Consumer Law that cannot be excluded.',
  },
  {
    heading: '9. Third-party links',
    body: "The site contains links to third-party tools, articles, and services. These are provided for convenience only. We don't control these third parties and are not responsible for their content, practices, or privacy policies.",
  },
  {
    heading: '10. Privacy',
    body: (
      <>
        Our handling of personal information is set out in our{' '}
        <Link href="/privacy-policy" className="text-gold hover:text-near-black underline">
          Privacy Policy
        </Link>
        .
      </>
    ),
  },
  {
    heading: '11. Governing law',
    body: 'These terms are governed by the laws of New South Wales, Australia. Any dispute arising under or in connection with these terms is subject to the exclusive jurisdiction of the courts of New South Wales.',
  },
  {
    heading: '12. Updates',
    body: 'We may update these terms from time to time. The current version is always available at this URL with a "last updated" date below. Continuing to use the site after a change means you accept the updated terms.',
  },
  {
    heading: '13. Contact',
    body: (
      <>
        Questions about these terms? Email{' '}
        <a href="mailto:hello@lumiiadvisory.com" className="text-gold hover:text-near-black underline">
          hello@lumiiadvisory.com
        </a>
        .
      </>
    ),
  },
]

export default function TermsOfServicePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-near-black pt-40 pb-20 px-8 lg:px-12">
        <div className="max-w-[860px] mx-auto">
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-6">Legal</p>
          <h1 className="font-display font-light text-[clamp(40px,5vw,68px)] leading-[1.08] text-warm-white mb-6 tracking-[-0.01em]">
            Terms of Service
          </h1>
          <p className="font-body text-[16px] leading-[1.8] text-warm-white/60 max-w-[640px] font-light">
            The terms governing your use of lumiiadvisory.com and any content or resources available on it. Plain
            English. No surprises.
          </p>
          <p className="font-body text-[12px] tracking-[0.15em] uppercase text-ash mt-8">Last updated: April 2026</p>
        </div>
      </section>

      {/* Body */}
      <section className="bg-warm-white py-[clamp(60px,8vw,100px)] px-8 lg:px-12">
        <div className="max-w-[760px] mx-auto space-y-12">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-display font-light text-[clamp(22px,2.4vw,28px)] text-near-black leading-[1.3] mb-4">
                {s.heading}
              </h2>
              <div className="font-body text-[15px] leading-[1.85] text-slate-warm font-light">{s.body}</div>
            </div>
          ))}
          <div className="pt-10 border-t border-parchment">
            <Link
              href="/contact"
              className="font-body text-[12px] tracking-[0.12em] uppercase text-near-black border border-near-black px-8 py-4 hover:bg-near-black hover:text-warm-white transition-all duration-200 inline-block"
            >
              Get in touch →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
