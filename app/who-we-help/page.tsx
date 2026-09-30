import type { Metadata } from 'next'
import { ContentCard, PageCta, PageIntro, TextLink } from '@/components/lumii/primitives'
import { otherIndustries, otherIndustryNames, trainingAudiences } from '@/lib/training-audiences'

const PAGE_URL = 'https://lumiiadvisory.com/who-we-help'

export const metadata: Metadata = {
  title: { absolute: 'Practical AI Training for Teams | Lumii Advisory' },
  description:
    'Explore Find Your Light with AI training for marketing, sales, retail and professional services teams.',
  alternates: { canonical: PAGE_URL },
}

export default function WhoWeHelpPage() {
  return (
    <div className="lumii">
      <PageIntro
        label="TRAINING FOR YOUR TEAM"
        title={
          <>
            Start with the work
            <br />
            your people actually do.
          </>
        }
        lead="Find Your Light with AI connects practical learning to the roles, questions and workflows in your business."
      />

      <section className="section card-grid two">
        {trainingAudiences.map((audience) => (
          <ContentCard
            key={audience.slug}
            label="FIND YOUR LIGHT WITH AI"
            title={audience.name}
            description={audience.description}
            href={`/who-we-help/${audience.slug}`}
            action="Explore training"
          />
        ))}
      </section>

      {/* Five thin industry pages were retired on 30 Sept 2026 and redirect here,
          so this section names those industries. */}
      <section className="section secondary-offer" id="other-industries">
        <div>
          <p className="eyebrow">OTHER INDUSTRIES</p>
          <h2>
            Different work.
            <br />
            The same practical approach.
          </h2>
        </div>
        <div>
          <p>
            The same practical approach works across industries. As well as the teams above, I work
            with businesses in {otherIndustryNames.slice(0, -1).join(', ')} and{' '}
            {otherIndustryNames[otherIndustryNames.length - 1]} — starting with the work your people
            actually do.
          </p>
          <p>Tell me about the training your team needs, or read a deeper industry perspective.</p>
          {otherIndustries.map((industry) => (
            <TextLink key={industry.slug} href={`/who-we-help/${industry.slug}`}>
              {industry.name}
            </TextLink>
          ))}
          <TextLink href="/contact?interest=courses">Tell me about your team</TextLink>
        </div>
      </section>

      <PageCta
        title="A different team or industry?"
        description="Tell me about the work your people do. We can shape training around the use cases that matter to you."
      />
    </div>
  )
}
