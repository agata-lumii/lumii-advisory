import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Consulting FAQ: Costs, Process & Getting Started',
  description:
    'Answers to the questions business leaders ask most about AI adoption: how much does it cost, where to start, how to measure ROI, data readiness, and what working with Lumii Advisory looks like.',
}

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
