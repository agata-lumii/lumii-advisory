import Image from 'next/image'
import { TextLink } from './primitives'

/**
 * Agata's biography, from the approved homepage. /about renders the same
 * content with an h1 and without the link back to itself.
 */

export function AboutHeading({ headingLevel = 'h2', showMoreLink = true }: { headingLevel?: 'h1' | 'h2'; showMoreLink?: boolean }) {
  const Heading = headingLevel
  return (
    <div className="about-heading">
      <p className="eyebrow">THE PERSON BEHIND LUMII</p>
      <Heading id="about-title">
        Meet Agata
        <br />
        Adamczak.
      </Heading>
      <p className="about-role">Founder, Lumii Advisory</p>
      <figure className="founder-portrait">
        <Image
          src="/images/agata-charcoal-editorial.webp"
          width={1122}
          height={1402}
          alt="Agata Adamczak, founder of Lumii Advisory, in an editorial portrait against a warm charcoal wall"
        />
      </figure>
      <p className="experience-note">Nearly 20 years across data, digital strategy, search and AI visibility.</p>
      {showMoreLink ? (
        <TextLink href="/about" arrow="↗">
          More about Agata
        </TextLink>
      ) : null}
    </div>
  )
}

export function AboutStory() {
  return (
    <div className="about-story">
      <p className="about-lead">
        I’ve spent my career helping businesses make sense of technology and put it to work.
      </p>
      <p>
        My background spans enterprise SaaS, solutions consulting and digital strategy, with
        experience across the UK, US and APAC. I’ve worked with teams navigating technology
        decisions, commercial priorities and the practical work of making change happen.
      </p>
      <p>
        As Botify’s first ANZ hire and Solutions Consulting Director for JAPAC, I helped establish
        the company’s regional presence and bring its emerging AI capabilities to market.
      </p>
      <p>
        Across those roles, I saw how much depends on clear priorities and people’s ability to
        execute. I founded Lumii to help businesses close that gap. It’s the perspective I bring to
        every course, talk and training session: explain the technology clearly, connect it to real
        work and help people use it with confidence.
      </p>
      <div className="career-context">
        <div>
          <h3>Previous senior roles</h3>
          <p>iCrossing · Performics · BrightEdge · Pattern · Botify · Dotdigital</p>
        </div>
        <div>
          <h3>Brands worked with in previous roles</h3>
          <p>Harvey Norman · Optus · Canva · Myer · Medibank · OFX</p>
        </div>
      </div>
      <TextLink href="/#enquire" arrow="↗" interest="event">
        Discuss training or speaking with Agata
      </TextLink>
    </div>
  )
}
