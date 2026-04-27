import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    absolute: 'AI Consulting FAQ: Costs, Process & Getting Started | Lumii',
  },
  description:
    'Honest answers on AI consulting costs, timelines, data privacy & process. 12 questions mid-market leadership teams ask before engaging Lumii Advisory.',
  alternates: {
    canonical: 'https://lumiiadvisory.com/faq',
  },
}

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
