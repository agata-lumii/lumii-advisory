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
  /** Short description, used on the homepage. */
  body: string
  audience: string
  /** The fuller version, used on /ai-keynote-speaker. */
  question: string
  takeaways: string[]
  bestAs: string
  next?: { href: string; label: string }
  /** Poster for /ai-keynote-speaker, 840×1050 in public/images/keynotes. */
  poster: { src: string; alt: string }
}

export const speakingTopics: SpeakingTopic[] = [
  {
    id: 'topic-visibility',
    label: '01 / BRANDS & AI VISIBILITY',
    title: ['Find Your Brand’s Light', 'in the Age of AI'],
    body: 'When people ask AI what to choose, how does your brand make the shortlist? Explore what helps brands get found, understood and recommended across AI discovery platforms.',
    audience: 'marketing, brand and commercial teams',
    question: 'When a buyer asks ChatGPT, Claude or Gemini who to shortlist, is your brand in the answer?',
    takeaways: [
      'How AI assistants now shape buyers’ shortlists — and why a brand can be missing from those answers without ever finding out.',
      'What helps a brand get found, understood and recommended: a clearly defined identity, consistent information and credible sources.',
      'How AI visibility differs from SEO, and a simple way to see how your own brand shows up today.',
    ],
    bestAs: 'A keynote or panel talk for marketing, brand and commercial audiences.',
    next: { href: '/services/ai-visibility', label: 'Explore AI visibility advisory' },
    poster: {
      src: '/images/keynotes/find-your-brands-light-keynote.jpg',
      alt: 'Keynote poster: Find Your Brand’s Light in the Age of AI, with Agata Adamczak standing by a window. When people ask AI what to choose, how does your brand make the shortlist?',
    },
  },
  {
    id: 'topic-work',
    label: '02 / EVERYDAY WORK',
    title: ['AI at Work:', 'What Changes on Monday?'],
    body: 'Move the conversation from impressive demos to everyday decisions. Explore how AI can support research, planning and communication, and where human judgement remains essential.',
    audience: 'company offsites and cross-functional teams',
    question: 'Beyond the impressive demos, what should actually change in how we work?',
    takeaways: [
      'Where AI genuinely helps with everyday research, planning and communication — and where it falls short.',
      'Where human judgement stays essential: checking outputs, protecting information and deciding what goes out.',
      'One or two specific tasks each person will approach differently when they’re back at their desk.',
    ],
    bestAs: 'An offsite opener, ideally followed by a hands-on workshop.',
    next: { href: '/ai-workshops', label: 'Add a hands-on workshop' },
    poster: {
      src: '/images/keynotes/ai-at-work-keynote.jpg',
      alt: 'Keynote poster for company offsites: The real test of your AI offsite happens on Monday. AI at Work: What Changes on Monday? With Agata Adamczak.',
    },
  },
  {
    // Signature keynote (Oct 2026), replacing "The AI-Ready Organisation".
    id: 'topic-light',
    label: '03 / SIGNATURE KEYNOTE',
    title: ['Find Your Light:', 'What AI Gives Back'],
    body: 'Most AI talks are about what AI takes over. This one is about what it gives back: time and attention for the judgement, relationships and creativity only people bring. Everyone leaves with a personal light list and one change for Monday.',
    audience: 'conferences, company offsites and leadership events',
    question: 'What does AI give back to your people — and which work is truly theirs?',
    takeaways: [
      'A clear, hopeful way to think about AI and their own role in the work.',
      'A personal light list, written during the session: three tasks to hand to AI, and the one piece of work only they can do.',
      'One concrete change to make next week.',
      'For leaders: the three things people need before they’ll adopt AI with confidence — permission to experiment, guardrails they can use, and time to practise.',
    ],
    bestAs: 'An opening keynote for a conference or offsite, ideally followed by the Stop Prompting. Start Briefing. workshop.',
    next: { href: '/ai-courses', label: 'Keep it going with the course series' },
    poster: {
      src: '/images/keynotes/find-your-light-signature-keynote.jpg',
      alt: 'Signature keynote poster: Find Your Light: What AI Gives Back, with Agata Adamczak on a yellow background. Leave with your own light list — and one change for Monday.',
    },
  },
  {
    id: 'topic-briefing',
    label: '04 / PRACTICAL TEAM TRAINING',
    title: ['Stop Prompting.', 'Start Briefing.'],
    body: 'Better work starts with a better brief. Learn how to give AI the context, direction and standards it needs, then challenge and refine what comes back. Built for participation and practice.',
    audience: 'teams ready to build practical AI skills',
    question: 'Why does AI give our team generic answers — and how do we get better ones?',
    takeaways: [
      'Why a brief beats a prompt: the context, audience, constraints and standards AI needs to do useful work.',
      'How to challenge and refine what comes back, rather than accepting the first draft.',
      'A reusable briefing approach they’ve already practised on their own work during the session.',
    ],
    bestAs: 'An interactive session or workshop rather than a stage talk — it’s built for participation and practice.',
    next: { href: '/ai-workshops', label: 'Run it as a team workshop' },
    poster: {
      src: '/images/keynotes/stop-prompting-start-briefing.jpg',
      alt: 'Interactive session poster: Stop Prompting. Start Briefing. With Agata Adamczak laughing by a window. Better work starts with a better brief.',
    },
  },
]

/** Keynote formats. Typical lengths as proposed in Oct 2026; every session is shaped to the event. */
export const speakingFormats = [
  { name: 'Keynote', length: 'Typically 30–45 minutes, plus Q&A' },
  { name: 'Panel or fireside chat', length: 'Shaped to the event’s format' },
  { name: 'Interactive session', length: 'Typically 60–90 minutes, with hands-on exercises' },
  { name: 'Keynote plus workshop', length: 'A talk for everyone, then a hands-on workshop for a team — for example, a half day' },
]

export const topicTitle = (topic: SpeakingTopic) => topic.title.join(' ')

/** Where Lumii works, as stated elsewhere on the site. */
export const SERVICE_AREA =
  'Lumii is based in Sydney and works with teams across Australia and the Asia-Pacific.'

/** Pricing position, from the existing FAQ: scoped first, fixed price after. */
export const PRICING_ANSWER =
  'Every course, workshop and talk is scoped with you first, around your people, your format and what you want to change. I confirm a fixed price after an initial conversation.'
