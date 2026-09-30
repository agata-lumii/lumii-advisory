import { PageCta } from './lumii/primitives'

/** Approved CTA copy from the design handoff, by context. */
const variants = {
  default: undefined,
  // From the redesigned Insights page; suits articles and resource guides.
  reading: {
    title: 'Turn a useful idea into a working habit.',
    description: 'Bring practical AI learning to your team or your next offsite.',
  },
  // From the redesigned Who I help page; suits retained industry pages.
  industry: {
    title: 'A different team or industry?',
    description:
      'Tell me about the work your people do. We can shape training around the use cases that matter to you.',
  },
} as const

/**
 * Closing call to action for retained pages. Renders the redesign's yellow
 * course/event band, so every retained page points at the current offers.
 */
export default function CTABanner({ variant = 'default' }: { variant?: keyof typeof variants }) {
  return (
    <div className="lumii">
      <PageCta {...(variants[variant] ?? {})} />
    </div>
  )
}
