import type { Metadata } from 'next'
import { AboutHeading, AboutStory } from '@/components/lumii/AboutAgata'
import { PageCta, TextLink } from '@/components/lumii/primitives'

export const metadata: Metadata = {
  title: { absolute: 'About Agata Adamczak | Lumii Advisory' },
  description:
    'Meet Agata Adamczak, founder of Lumii Advisory, with nearly 20 years across data, digital strategy, search and AI visibility.',
  alternates: { canonical: 'https://lumiiadvisory.com/about' },
}

export default function AboutPage() {
  return (
    <div className="lumii">
      <section className="about section" id="about" aria-labelledby="about-title">
        <AboutHeading headingLevel="h1" showMoreLink={false} />
        <AboutStory />
      </section>

      <section className="section secondary-offer">
        <div>
          <p className="eyebrow">THE THINKING BEHIND LUMII</p>
          <h2>
            Clarity matters.
            <br />
            Execution makes it count.
          </h2>
        </div>
        <div>
          <p>
            AI adoption depends on more than access to tools. People need clear priorities, useful
            workflows and the confidence to question what comes back.
          </p>
          <p>
            The Lumii framework brings those pieces together, and the training makes them practical
            for the team doing the work.
          </p>
          <TextLink href="/ai-operating-system">Explore the framework &amp; approach</TextLink>
          <TextLink href="/work-with-us">Explore ways to work together</TextLink>
        </div>
      </section>

      <PageCta />
    </div>
  )
}
