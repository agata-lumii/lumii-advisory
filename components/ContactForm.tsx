'use client'

import { useState, useEffect, Suspense } from 'react'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'next/navigation'

// ← Paste your Formspree form ID here after signing up at formspree.io
const FORMSPREE_ID = 'xqeweeaz'

type FormData = {
  firstName: string
  lastName: string
  email: string
  company: string
  interest: string
  message: string
}

// Valid interest values — keep in sync with the <select> options below.
// Sept 2026 redesign: courses, speaking and offsite training lead, with
// advisory and AI visibility as secondary offers.
const VALID_INTERESTS = ['courses', 'speaking', 'offsite', 'ai-visibility', 'advisory', 'not-sure']

// Pre-redesign values that may still arrive from bookmarks, emails or old
// links, mapped to the nearest current option.
const LEGACY_INTERESTS: Record<string, string> = {
  workshop: 'courses',
  ai: 'courses',
  project: 'advisory',
  retainer: 'advisory',
  'digital-strategy': 'advisory',
  cx: 'advisory',
  ecommerce: 'advisory',
  martech: 'advisory',
  multiple: 'not-sure',
}

function ContactFormInner() {
  const searchParams = useSearchParams()
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>()

  // Pre-fill interest from ?interest= URL param (e.g. /contact?interest=courses)
  useEffect(() => {
    const raw = searchParams?.get('interest')
    const value = raw ? (LEGACY_INTERESTS[raw] ?? raw) : null
    if (value && VALID_INTERESTS.includes(value)) {
      setValue('interest', value)
    }
  }, [searchParams, setValue])

  const onSubmit = async (data: FormData) => {
    setSubmitting(true)
    setError(false)
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          company: data.company,
          interest: data.interest,
          message: data.message,
        }),
      })
      const result = await res.json()
      if (result.ok) {
        setSubmitted(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="form-success" role="status">
        <h2>Thank you — I’ll be in touch soon.</h2>
        <p>I aim to respond within one business day. In the meantime, feel free to connect on LinkedIn.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form" noValidate>
      <div className="form-row">
        <div className="field">
          <label htmlFor="firstName">First name</label>
          <input id="firstName" autoComplete="given-name" {...register('firstName', { required: true })} placeholder="Jane" />
          {errors.firstName && <p className="field-error">Required</p>}
        </div>
        <div className="field">
          <label htmlFor="lastName">Last name</label>
          <input id="lastName" autoComplete="family-name" {...register('lastName', { required: true })} placeholder="Smith" />
          {errors.lastName && <p className="field-error">Required</p>}
        </div>
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })}
          placeholder="jane@company.com"
        />
        {errors.email && <p className="field-error">Valid email required</p>}
      </div>
      <div className="field">
        <label htmlFor="company">Company</label>
        <input id="company" autoComplete="organization" {...register('company')} placeholder="Your company" />
      </div>
      <div className="field">
        <label htmlFor="interest">I’m interested in</label>
        <select id="interest" {...register('interest', { required: true })}>
          <option value="">Select an area...</option>
          <optgroup label="Courses, speaking &amp; training">
            <option value="courses">Find Your Light with AI courses</option>
            <option value="speaking">Speaking &amp; panels</option>
            <option value="offsite">Offsite team training</option>
          </optgroup>
          <optgroup label="Advisory">
            <option value="ai-visibility">AI visibility advisory</option>
            <option value="advisory">AI advisory (readiness, workflows, adoption)</option>
          </optgroup>
          <option value="not-sure">Not sure yet</option>
        </select>
        {errors.interest && <p className="field-error">Please select an option</p>}
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          {...register('message', { required: true })}
          placeholder="Tell me about your team, your event, or what you want to change..."
          rows={5}
        />
        {errors.message && <p className="field-error">Required</p>}
      </div>
      {error && (
        <p className="field-error" role="alert">
          Something went wrong — please try again or email me directly at hello@lumiiadvisory.com
        </p>
      )}
      <div>
        <button type="submit" className="button" disabled={submitting}>
          {submitting ? 'Sending…' : 'Send message'} <span aria-hidden="true">↗</span>
        </button>
      </div>
    </form>
  )
}

// useSearchParams requires a Suspense boundary in Next.js App Router
export default function ContactForm() {
  return (
    <Suspense fallback={<p className="form-note">Loading form…</p>}>
      <ContactFormInner />
    </Suspense>
  )
}
