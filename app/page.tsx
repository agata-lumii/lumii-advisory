import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { articles } from '@/lib/insights'
import { TextLink } from '@/components/lumii/primitives'
import EnquiryChoices from '@/components/lumii/EnquiryChoices'
import { AboutHeading, AboutStory } from '@/components/lumii/AboutAgata'
import { learningSteps, speakingTopics as topics } from '@/lib/offers'

// Visible headline is the approved "Find your light. Put AI to work." The
// title tag carries the searches the page should rank for.
const TITLE = 'AI Courses, Workshops & Keynotes in Sydney | Lumii Advisory'
const DESCRIPTION =
  'Find your light. Put AI to work. Practical AI courses, hands-on AI workshops for team offsites, and AI keynotes, led by Agata Adamczak in Sydney.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: 'https://lumiiadvisory.com' },
  openGraph: { title: TITLE, description: DESCRIPTION, url: 'https://lumiiadvisory.com' },
}

const FEATURED_ARTICLE_SLUG = 'what-is-ai-enablement'

export default function HomePage() {
  const featured = articles.find((a) => a.slug === FEATURED_ARTICLE_SLUG)

  return (
    <div className="lumii">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">AI ENABLEMENT. HUMAN POTENTIAL.</p>
          <h1 id="hero-title">
            <span className="hero-line">
              Find your <em>light.</em>
            </span>{' '}
            <span className="hero-line">Put AI to work.</span>
          </h1>
          <p className="hero-intro">
            Practical AI courses, inspiring talks and hands-on offsite training for businesses ready
            to change how they work.
          </p>
          <div className="hero-actions">
            <a className="button yellow" href="#courses">
              Find Your Light with AI <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#speaking">
              Bring AI to your next offsite <span aria-hidden="true">↗</span>
            </a>
          </div>
          <p className="founder-note">WITH AGATA ADAMCZAK · FOUNDER, LUMII ADVISORY</p>
        </div>
        <div className="hero-visual">
          <Image
            src="/images/agata-linen-editorial.webp"
            width={1122}
            height={1402}
            alt="Agata Adamczak, founder of Lumii Advisory"
            priority
          />
          <span className="image-note">A little clarity. A lot of possibility.</span>
        </div>
      </section>

      <div className="strip">
        <span>REAL WORK</span>
        <span className="asterisk" aria-hidden="true">✳</span>
        <span>FRESH THINKING</span>
        <span className="asterisk" aria-hidden="true">✳</span>
        <span>HUMAN CAPABILITY</span>
        <span className="asterisk" aria-hidden="true">✳</span>
        <span>AI IN ACTION</span>
      </div>

      <section className="intro section">
        <p className="eyebrow">THE OPPORTUNITY</p>
        <div>
          <h2>
            AI is moving fast.
            <br />
            Your people can <em>move with it.</em>
          </h2>
          <div className="intro-columns">
            <p>
              Buying the tools is the easy part. Building the confidence, judgement and everyday
              habits to use them well takes something more.
            </p>
            <p>
              Lumii brings AI into the work your people actually do. So learning has somewhere to go
              when everyone gets back to their desk.
            </p>
          </div>
        </div>
      </section>

      <section className="courses section" id="courses" aria-labelledby="courses-title">
        <div className="section-top">
          <p className="eyebrow">01 / COURSES FOR BUSINESSES</p>
          <span className="micro">FROM CURIOSITY TO CAPABILITY</span>
        </div>
        <div className="course-layout">
          <div className="course-cover">
            <span className="course-label">THE LUMII COURSE SERIES</span>
            <h2 id="courses-title">
              Find Your
              <br />
              <em>Light</em>
              <br />
              with AI<span className="title-dot">.</span>
            </h2>
            <div className="course-bottom">
              <span>
                FOR PEOPLE.
                <br />
                FOR WORK.
                <br />
                FOR WHAT’S NEXT.
              </span>
              <span className="course-spark" aria-hidden="true">✳</span>
            </div>
          </div>
          <div className="course-copy">
            <h3>
              Learning that shows up
              <br />
              in the work.
            </h3>
            <p>
              For businesses taking AI enablement seriously. Give your team a clearer understanding
              of AI, practical ways to apply it and the judgement to use it well.
            </p>
            <div className="learning-list">
              {learningSteps.map((step, i) => (
                <details key={step.number} open={i === 0}>
                  <summary>
                    <span className="number">{step.number}</span> {step.title}{' '}
                    <span className="plus" aria-hidden="true">+</span>
                  </summary>
                  <p>{step.body}</p>
                </details>
              ))}
            </div>
            <a className="button" href="#enquire" data-interest="courses">
              Talk about courses for your team <span aria-hidden="true">↗</span>
            </a>
            <p className="subtle">Start with your people, their roles and what you want to change.</p>
            <TextLink href="/who-we-help">Explore training for your team</TextLink>
          </div>
        </div>
      </section>

      <section className="speaking section" id="speaking" aria-labelledby="speaking-title">
        <div className="section-top">
          <p className="eyebrow">02 / SPEAKING &amp; OFFSITE TRAINING</p>
          <span className="micro">A SPARK IN THE ROOM. A SHIFT IN THE WORK.</span>
        </div>
        <div className="speaking-heading">
          <h2 id="speaking-title">
            Make your next offsite
            <br />
            the start of <em>something.</em>
          </h2>
          <p>
            Bring a fresh perspective on AI into the room. Give your people space to question,
            experiment and connect it to their own work.
          </p>
        </div>
        <div className="speaking-layout">
          <figure className="event-image">
            {/* Original supplied photo, unmodified. Lighting lift and 1170:784
                ratio are applied in CSS only (see .event-image img). */}
            <Image
              src="/images/agata-speaking-panel.jpg"
              width={1170}
              height={784}
              alt="Agata speaking on a Havas panel at Amazon’s office"
            />
            <figcaption>Agata on the panel · Havas event at Amazon</figcaption>
          </figure>
          <div className="event-options">
            <article>
              <span className="eyebrow">GET PEOPLE THINKING</span>
              <h3>Speaking &amp; panels</h3>
              <p>
                Clear perspectives on AI, the changing way we work and what it means for the people
                in your business.
              </p>
            </article>
            <article id="offsite-training">
              <span className="eyebrow">GET PEOPLE DOING</span>
              <h3>Hands-on team training</h3>
              <p>
                Give AI a place in your offsite agenda with practical exploration, shared learning
                and work your team recognises.
              </p>
            </article>
            <a className="button yellow" href="#enquire" data-interest="event">
              Let’s shape your event <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="topics section" aria-labelledby="topics-title">
        <div className="section-top">
          <div>
            <p className="eyebrow">SPEAKING TOPICS</p>
            <h2 id="topics-title">
              Conversations that
              <br />
              <em>move people forward.</em>
            </h2>
          </div>
          <p className="topics-intro">
            Start with the question your audience needs to answer. Shape the session around your
            people and your event.
          </p>
        </div>
        <div className="topics-grid">
          {topics.map((topic) => (
            <article className="topic" id={topic.id} key={topic.id}>
              <span className="eyebrow">{topic.label}</span>
              <h3>
                {topic.title[0]}
                <br />
                {topic.title[1]}
              </h3>
              <p>{topic.body}</p>
              <p className="topic-audience">
                <strong>For:</strong> {topic.audience}
              </p>
              <a className="text-link" href="#enquire" data-interest="event">
                Discuss this topic <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="about section" id="about" aria-labelledby="about-title">
        <AboutHeading />
        <AboutStory />
      </section>

      <section className="learn section" aria-labelledby="learn-title">
        <div className="section-top">
          <div>
            <p className="eyebrow">KEEP EXPLORING</p>
            <h2 id="learn-title">
              Clarity starts with
              <br />
              <em>a good question.</em>
            </h2>
          </div>
          <p className="learn-intro">
            Explore practical resources and fresh perspectives to help you think through what AI
            means for your business.
          </p>
        </div>
        <div className="learn-grid">
          <article className="learn-panel" id="resources">
            <div className="learn-panel-top">
              <span className="eyebrow">RESOURCES</span>
              <TextLink href="/resources" arrow="↗">
                View all resources
              </TextLink>
            </div>
            <h3>A useful place to start.</h3>
            <p>Guides, tools and checklists to help you take the next step.</p>
            <Link className="learn-item" href="/resources/ebook">
              <span>
                <small>FREE EBOOK</small>Find Your Light in the Age of AI
              </span>
              <span aria-hidden="true">↗</span>
            </Link>
            <Link className="learn-item" href="/resources/ai-readiness-checklist">
              <span>
                <small>SELF-ASSESSMENT</small>AI Readiness Checklist
              </span>
              <span aria-hidden="true">↗</span>
            </Link>
          </article>
          <article className="learn-panel insights-panel" id="insights">
            <div className="learn-panel-top">
              <span className="eyebrow">INSIGHTS</span>
              <TextLink href="/insights" arrow="↗">
                View all insights
              </TextLink>
            </div>
            <h3>Ideas worth acting on.</h3>
            <p>Perspectives on AI adoption, leadership and the work of making change happen.</p>
            {featured ? (
              <Link className="learn-item featured-insight" href={`/insights/${featured.slug}`}>
                <span>
                  <small>{featured.category.toUpperCase()} · FEATURED READING</small>
                  {featured.title}
                </span>
                <span aria-hidden="true">↗</span>
              </Link>
            ) : null}
          </article>
        </div>
      </section>

      <section className="enquire section" id="enquire" aria-labelledby="enquire-title">
        <p className="eyebrow">LET’S PUT POSSIBILITY TO WORK</p>
        <div className="enquire-layout">
          <div>
            <h2 id="enquire-title">Ready to make AI part of the way you work?</h2>
            <p>
              Tell me about your team or your next event.
              <br />
              We’ll work out where Lumii can help.
            </p>
          </div>
          <EnquiryChoices />
        </div>
      </section>
    </div>
  )
}
