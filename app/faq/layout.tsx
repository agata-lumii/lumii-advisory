import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    absolute: 'AI Courses, Workshops & Consulting FAQ | Lumii Advisory',
  },
  description:
    'Answers on AI courses, team workshops, keynotes, AI enablement consulting, costs, timelines and data privacy from Lumii Advisory in Sydney.',
  alternates: {
    canonical: 'https://lumiiadvisory.com/faq',
  },
}

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
