import type { TrainingAudience } from '@/lib/training-audiences'
import { PageCta, PageIntro, TextLink } from './primitives'
import { FaqSection } from './seo'

/** Priority audience page from the Sept 2026 redesign (/who-we-help/[slug]). */
export default function TrainingAudiencePage({ audience }: { audience: TrainingAudience }) {
  return (
    <div className="lumii">
      <PageIntro
        label={`FIND YOUR LIGHT WITH AI · ${audience.name.toUpperCase()}`}
        title={
          <>
            {audience.title[0]}
            <br />
            {audience.title[1]}
          </>
        }
        lead={audience.description}
      />

      <section className="section learning-focus">
        <p className="eyebrow">WHAT WE CAN WORK THROUGH</p>
        <div className="card-grid three">
          {audience.focus.map((item, i) => (
            <article className="content-card" key={item.title}>
              <p className="eyebrow">{`0${i + 1}`}</p>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section rule-top" aria-labelledby="practice-title">
        <div className="section-top">
          <div>
            <p className="eyebrow">IN PRACTICE · {audience.name.toUpperCase()}</p>
            <h2 id="practice-title">What your team will practise.</h2>
          </div>
          <p className="topics-intro">
            Everyday tasks from your team’s own work, practised with AI and checked to your standard.
          </p>
        </div>
        <div className="detail-list">
          {audience.practice.map((task, i) => (
            <div key={task}>
              <p className="eyebrow">{String(i + 1).padStart(2, '0')}</p>
              <p className="detail-title">{task}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section secondary-offer">
        <div>
          <p className="eyebrow">BUILT AROUND YOUR TEAM</p>
          <h2>
            Bring a real task.
            <br />
            Leave with a next step.
          </h2>
        </div>
        <div>
          <p>
            We start with your team’s roles, current use of AI and the work you want to improve. The
            examples and exercises follow from that conversation.
          </p>
          <p>
            Clear briefs, careful review and responsible information handling run through the
            learning. The aim is to build ways of working your people can apply and keep improving.
          </p>
          <TextLink href="/ai-courses">Explore the course series</TextLink>
          <TextLink href="/ai-workshops">Make it part of your offsite</TextLink>
        </div>
      </section>

      <FaqSection
        faqs={audience.faqs}
        title={`Questions about AI training for ${audience.name.toLowerCase()}.`}
      />

      <PageCta
        description={`Tell me about your ${audience.name.toLowerCase()} and what you want the training to change.`}
      />
    </div>
  )
}
