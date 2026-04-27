import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    absolute: 'Free AI Readiness Checklist — 35 Questions in 15 Minutes',
  },
  description:
    'Score your business across 7 dimensions of AI readiness in 15 minutes. Get a benchmarked report and a prioritised next-step roadmap. Free.',
  alternates: {
    canonical: 'https://lumiiadvisory.com/resources/ai-readiness-checklist',
  },
}

export default function ChecklistLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
