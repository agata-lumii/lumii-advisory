/**
 * Site navigation, ported from lumii-design-handoff/src/header.html and
 * src/footer.html. Links to lumiiadvisory.com in the reference are internal
 * routes here so previews stay inside the application.
 */

/** Which enquiry a link pre-selects on the homepage and the contact form. */
export type Interest = 'courses' | 'event'

export interface NavLink {
  href: string
  label: string
  interest?: Interest
}

export interface NavGroup {
  label: string
  feature: {
    eyebrow: string
    title: string
    text: string
    link: NavLink
  }
  columns: { eyebrow: string; links: NavLink[] }[]
}

const courses: NavGroup = {
  label: 'Courses',
  feature: {
    eyebrow: 'FIND YOUR LIGHT WITH AI',
    title: 'Learning that shows up in the work.',
    text: 'Practical AI skills, useful workflows and the judgement to use them well.',
    link: { href: '/#courses', label: 'Explore the course series →' },
  },
  columns: [
    {
      eyebrow: 'FOR YOUR TEAM',
      links: [
        { href: '/who-we-help/marketers', label: 'Marketing & growth' },
        { href: '/who-we-help/sales-teams', label: 'Sales & commercial' },
        { href: '/who-we-help/retailers', label: 'Retail & ecommerce' },
        { href: '/who-we-help/professional-services', label: 'Professional services' },
      ],
    },
    {
      eyebrow: 'FIND YOUR STARTING POINT',
      links: [
        { href: '/who-we-help', label: 'Training for your team' },
        { href: '/resources/ai-readiness-checklist', label: 'AI readiness checklist' },
        { href: '/work-with-us', label: 'Ways to work together' },
        { href: '/#enquire', label: 'Discuss team training →', interest: 'courses' },
      ],
    },
  ],
}

const speaking: NavGroup = {
  label: 'Speaking & offsites',
  feature: {
    eyebrow: 'BRING AI INTO THE ROOM',
    title: 'A fresh perspective. A practical next step.',
    text: 'Talks, panels and hands-on training shaped around your people.',
    link: { href: '/#speaking', label: 'Speaking & offsite training →' },
  },
  columns: [
    {
      eyebrow: 'SPEAKING TOPICS',
      links: [
        { href: '/#topic-visibility', label: 'Find Your Brand’s Light in the Age of AI' },
        { href: '/#topic-work', label: 'AI at Work: What Changes on Monday?' },
        { href: '/#topic-leadership', label: 'The AI-Ready Organisation' },
        { href: '/#topic-briefing', label: 'Stop Prompting. Start Briefing.' },
      ],
    },
    {
      eyebrow: 'PLAN YOUR EVENT',
      links: [
        { href: '/#speaking', label: 'Speaking & panels' },
        { href: '/#offsite-training', label: 'Hands-on team training' },
        { href: '/about', label: 'Meet Agata' },
        { href: '/#enquire', label: 'Discuss your event →', interest: 'event' },
      ],
    },
  ],
}

const resources: NavGroup = {
  label: 'Resources',
  feature: {
    eyebrow: 'START WITH CLARITY',
    title: 'Find your next useful step.',
    text: 'Free resources to help you assess readiness, build understanding and plan what comes next.',
    link: { href: '/resources', label: 'Explore all resources →' },
  },
  columns: [
    {
      eyebrow: 'START HERE',
      links: [
        { href: '/resources/ai-readiness-checklist', label: 'AI readiness checklist' },
        { href: '/resources/ebook', label: 'Find Your Light: free ebook' },
        { href: '/learn', label: 'AI platform guides' },
        { href: '/ai-operating-system', label: 'The Lumii framework' },
      ],
    },
    {
      eyebrow: 'GO DEEPER',
      links: [
        { href: '/resources/ai-team-structure', label: 'AI team structure' },
        { href: '/resources/ai-tools', label: 'AI tools directory' },
        { href: '/ai-case-studies', label: 'AI adoption, analysed' },
        { href: '/faq', label: 'Common questions' },
      ],
    },
  ],
}

const about: NavGroup = {
  label: 'About',
  feature: {
    eyebrow: 'MEET AGATA ADAMCZAK',
    title: 'Experience behind the perspective.',
    text: 'Nearly 20 years across data, digital strategy, search and AI visibility.',
    link: { href: '/about', label: 'About Agata →' },
  },
  columns: [
    {
      eyebrow: 'LUMII ADVISORY',
      links: [
        { href: '/ai-operating-system', label: 'The framework & approach' },
        { href: '/work-with-us', label: 'Ways to work together' },
        { href: '/services/ai-visibility', label: 'AI visibility advisory' },
      ],
    },
    {
      eyebrow: 'LET’S TALK',
      links: [
        { href: '/#enquire', label: 'Courses & event enquiries' },
        { href: '/contact', label: 'Contact Lumii' },
      ],
    },
  ],
}

/** Header order: three menus, the Insights link, then About. */
export const navGroupsBeforeInsights: NavGroup[] = [courses, speaking, resources]
export const navGroupsAfterInsights: NavGroup[] = [about]

export const footerColumns: { eyebrow: string; links: NavLink[] }[] = [
  {
    eyebrow: 'WORK WITH LUMII',
    links: [
      { href: '/#courses', label: 'Find Your Light with AI' },
      { href: '/#speaking', label: 'Speaking & offsites' },
      { href: '/work-with-us', label: 'Ways to work together' },
      { href: '/services/ai-visibility', label: 'AI visibility advisory' },
    ],
  },
  {
    eyebrow: 'EXPLORE',
    links: [
      { href: '/resources', label: 'Resources' },
      { href: '/insights', label: 'Insights' },
      { href: '/ai-operating-system', label: 'Framework & approach' },
      { href: '/about', label: 'About Agata' },
    ],
  },
  {
    eyebrow: 'GET IN TOUCH',
    links: [
      { href: '/contact', label: 'Contact Lumii' },
      { href: 'mailto:hello@lumiiadvisory.com', label: 'hello@lumiiadvisory.com' },
      { href: '/faq', label: 'Common questions' },
    ],
  },
]
