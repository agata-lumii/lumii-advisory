'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import type { Interest } from '@/lib/navigation'
import { INTEREST_EVENT, contactInterestFor, isInterest, recallInterest } from '@/lib/interest'

const choices: { interest: Interest; id: string; kicker: string; label: string }[] = [
  { interest: 'courses', id: 'course-enquiry', kicker: 'BUILD CAPABILITY', label: 'Find Your Light with AI' },
  { interest: 'event', id: 'event-enquiry', kicker: 'BRING PEOPLE TOGETHER', label: 'Speaking & offsite training' },
]

export default function EnquiryChoices() {
  const [selected, setSelected] = useState<Interest | null>(null)

  useEffect(() => {
    setSelected(recallInterest())
    const onInterest = (event: Event) => {
      const detail = (event as CustomEvent<unknown>).detail
      if (isInterest(detail)) setSelected(detail)
    }
    window.addEventListener(INTEREST_EVENT, onInterest)
    return () => window.removeEventListener(INTEREST_EVENT, onInterest)
  }, [])

  return (
    <div className="enquiry-choices">
      <p className="choice-label">I’M INTERESTED IN…</p>
      {choices.map((choice) => (
        <Link
          key={choice.id}
          id={choice.id}
          className={`enquiry-link${selected === choice.interest ? ' selected' : ''}`}
          href={`/contact?interest=${contactInterestFor[choice.interest]}`}
        >
          <span>
            <small>{choice.kicker}</small>
            {choice.label}
          </span>
          <span aria-hidden="true">↗</span>
        </Link>
      ))}
      <p className="contact-note">Continue to Lumii’s enquiry page.</p>
    </div>
  )
}
