/**
 * Lumii's offers, in the approved wording from the Sept 2026 redesign.
 * Shared by the landing pages, homepage, navigation and schema.
 *
 * Nothing here states a price, duration, date or group size: those are
 * agreed per engagement, and inventing them would put claims on the site
 * (and in structured data) that Lumii hasn't made.
 */

export const OFFER_URLS = {
  courses: '/ai-courses',
  workshops: '/ai-workshops',
  keynotes: '/ai-keynote-speaker',
  enablement: '/ai-enablement',
  visibility: '/services/ai-visibility',
} as const

export const COURSE_NAME = 'Find Your Light with AI'

export const learningSteps = [
  {
    number: '01',
    title: 'See the opportunity',
    body: 'Understand what AI can do, where it falls short and which tasks are worth approaching differently.',
  },
  {
    number: '02',
    title: 'Apply it to real work',
    body: 'Move from isolated prompts to useful briefs and repeatable workflows, grounded in the work your team already does.',
  },
  {
    number: '03',
    title: 'Build confident habits',
    body: 'Practise checking outputs, protecting information and deciding where human judgement matters.',
  },
]

export interface SpeakingTopic {
  id: string
  label: string
  title: [string, string]
  body: string
  audience: string
}

export const speakingTopics: SpeakingTopic[] = [
  {
    id: 'topic-visibility',
    label: '01 / BRANDS & AI VISIBILITY',
    title: ['Find Your Brand’s Light', 'in the Age of AI'],
    body: 'When people ask AI what to choose, how does your brand make the shortlist? Explore what helps brands get found, understood and recommended across AI discovery platforms.',
    audience: 'marketing, brand and commercial teams',
  },
  {
    id: 'topic-work',
    label: '02 / EVERYDAY WORK',
    title: ['AI at Work:', 'What Changes on Monday?'],
    body: 'Move the conversation from impressive demos to everyday decisions. Explore how AI can support research, planning and communication, and where human judgement remains essential.',
    audience: 'company offsites and cross-functional teams',
  },
  {
    id: 'topic-leadership',
    label: '03 / LEADERSHIP & ADOPTION',
    title: ['The AI-Ready', 'Organisation'],
    body: 'What needs to change after the licences are bought? A practical look at the priorities, ownership, guardrails and measures that help leaders turn scattered experiments into everyday capability.',
    audience: 'executives, people leaders and transformation teams',
  },
  {
    id: 'topic-briefing',
    label: '04 / PRACTICAL TEAM TRAINING',
    title: ['Stop Prompting.', 'Start Briefing.'],
    body: 'Better work starts with a better brief. Learn how to give AI the context, direction and standards it needs, then challenge and refine what comes back. Built for participation and practice.',
    audience: 'teams ready to build practical AI skills',
  },
]

export const topicTitle = (topic: SpeakingTopic) => topic.title.join(' ')

/** Where Lumii works, as stated elsewhere on the site. */
export const SERVICE_AREA =
  'Lumii is based in Sydney and works with teams across Australia and the Asia-Pacific.'

/** Pricing position, from the existing FAQ: scoped first, fixed price after. */
export const PRICING_ANSWER =
  'Every course, workshop and talk is scoped with you first, around your people, your format and what you want to change. I confirm a fixed price after an initial conversation.'
