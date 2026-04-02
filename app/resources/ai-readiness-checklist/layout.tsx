import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free AI Readiness Assessment — 35 Questions, 7 Dimensions',
  description:
    'Is your business ready for AI? This free interactive assessment scores your organisation across 7 dimensions — strategy, data, technology, people, process, governance, and culture — and tells you exactly where to focus first.',
}

export default function ChecklistLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
