'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

const FORMSPREE_ID = 'xqeweeaz'

type FormData = {
  name: string
  company: string
  country: string
  email: string
}

export default function EbookForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setSubmitting(true)
    setError(false)
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: 'Ebook Download — Find Your Light in the Age of AI',
          _source: 'ebook-download',
          name: data.name,
          email: data.email,
          company: data.company,
          country: data.country,
        }),
      })
      const result = await res.json()
      if (result.ok) {
        setSubmitted(true)
        // Trigger download automatically
        const link = document.createElement('a')
        link.href = '/downloads/lumii-advisory-ai-ebook.pdf'
        link.download = 'Find Your Light in the Age of AI — Lumii Advisory.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
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
        <h2>Your download is ready.</h2>
        <p className="form-note">
          The ebook should be downloading now. If it doesn’t start automatically, use the button
          below.
        </p>
        <p className="stack-top">
          <a
            className="button"
            href="/downloads/lumii-advisory-ai-ebook.pdf"
            download="Find Your Light in the Age of AI — Lumii Advisory.pdf"
          >
            Download again <span aria-hidden="true">↓</span>
          </a>
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form" noValidate>
      <div className="field">
        <label htmlFor="ebook-name">Full name</label>
        <input id="ebook-name" autoComplete="name" {...register('name', { required: true })} placeholder="Jane Smith" />
        {errors.name && <p className="field-error">Required</p>}
      </div>
      <div className="field">
        <label htmlFor="ebook-email">Email</label>
        <input
          id="ebook-email"
          type="email"
          autoComplete="email"
          {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })}
          placeholder="jane@company.com"
        />
        {errors.email && <p className="field-error">Valid email required</p>}
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="ebook-company">Company</label>
          <input id="ebook-company" autoComplete="organization" {...register('company', { required: true })} placeholder="Your company" />
          {errors.company && <p className="field-error">Required</p>}
        </div>
        <div className="field">
          <label htmlFor="ebook-country">Country</label>
          <input id="ebook-country" autoComplete="country-name" {...register('country', { required: true })} placeholder="Australia" />
          {errors.country && <p className="field-error">Required</p>}
        </div>
      </div>

      {error && (
        <p className="field-error" role="alert">
          Something went wrong — please try again or email me at hello@lumiiadvisory.com
        </p>
      )}

      <div>
        <button type="submit" className="button yellow" disabled={submitting}>
          {submitting ? 'Sending…' : 'Get the free ebook'} <span aria-hidden="true">↓</span>
        </button>
        <p className="form-note stack-top">No spam. Unsubscribe any time.</p>
      </div>
    </form>
  )
}
