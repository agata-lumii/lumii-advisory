import type { Metadata } from 'next'
import { ContentCard, PageIntro, TextLink } from '@/components/lumii/primitives'

const PAGE_URL = 'https://lumiiadvisory.com/resources'

export const metadata: Metadata = {
  title: { absolute: 'Free AI Resources & Guides | Lumii Advisory' },
  description:
    'Explore the AI readiness checklist, free ebook, AI platform guides and practical resources from Lumii.',
  alternates: { canonical: PAGE_URL },
}

const resources = [
  {
    label: 'SELF-ASSESSMENT',
    title: 'AI Readiness Checklist',
    description:
      'Assess your organisation across seven dimensions. Identify where your business is ready and where to focus first.',
    href: '/resources/ai-readiness-checklist',
    action: 'Start the checklist',
  },
  {
    label: 'FREE EBOOK',
    title: 'Find Your Light in the Age of AI',
    description:
      'A free guide to the decisions behind AI adoption, from readiness and use cases to a practical 90-day roadmap.',
    href: '/resources/ebook',
    action: 'Get the free ebook',
  },
  {
    label: 'LEARNING GUIDES',
    title: 'AI Platform Guides',
    description:
      'Explore ChatGPT, Claude, Gemini, Copilot and Perplexity, with explanations of how they fit into business use.',
    href: '/learn',
    action: 'Explore the guides',
  },
  {
    label: 'REFERENCE GUIDE',
    title: 'AI Team Structure',
    description: 'Explore roles, responsibilities and ownership as AI becomes part of the organisation.',
    href: '/resources/ai-team-structure',
    action: 'Read the guide',
  },
  {
    label: 'DIRECTORY',
    title: 'AI Tools Directory',
    description:
      'Browse tools by the kind of work they support. Use the directory as a starting point for evaluating fit.',
    href: '/resources/ai-tools',
    action: 'Browse the directory',
  },
  {
    label: 'PUBLISHED PROGRAMMES, ANALYSED',
    title: 'AI adoption in practice',
    description:
      'Agata’s analysis of publicly documented AI programmes. These are industry examples, not Lumii client case studies.',
    href: '/ai-case-studies',
    action: 'Explore the analysis',
  },
]

export default function ResourcesPage() {
  return (
    <div className="lumii">
      <PageIntro
        label="RESOURCES"
        title={
          <>
            A useful place
            <br />
            to start.
          </>
        }
        lead="Free guides, practical tools and clear explanations to help you decide what AI means for your business."
      />

      <section className="section card-grid two">
        {resources.map((resource) => (
          <ContentCard key={resource.href} {...resource} />
        ))}
      </section>

      <section className="section secondary-offer">
        <div>
          <p className="eyebrow">FROM READING TO DOING</p>
          <h2>
            Bring the learning
            <br />
            into your team.
          </h2>
        </div>
        <div>
          <p>
            The free ebook helps you think through AI adoption. Find Your Light with AI is Lumii’s
            course series for businesses ready to build practical skills together.
          </p>
          <TextLink href="/#courses">Explore Find Your Light with AI</TextLink>
          <TextLink href="/ai-operating-system">Read the framework</TextLink>
          <TextLink href="/faq">Read common questions</TextLink>
        </div>
      </section>
    </div>
  )
}
