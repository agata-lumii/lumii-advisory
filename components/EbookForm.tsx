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

  const inputClass =
    'w-full font-body text-[15px] font-light text-near-black bg-transparent border-0 border-b border-parchment focus:border-charcoal focus:outline-none py-4 transition-colors duration-200 placeholder:text-ash'
  const labelClass = 'font-body text-[10px] tracking-[0.2em] uppercase text-ash mb-1 block'

  if (submitted) {
    return (
      <div className="py-8">
        <div className="w-8 h-px bg-gold mb-7" />
        <p className="font-display text-[28px] italic font-light text-near-black leading-[1.3] mb-4">
          Your download is ready.
        </p>
        <p className="font-body text-[15px] text-slate-warm font-light leading-[1.75] mb-8">
          The ebook should be downloading now. If it doesn't start automatically, use the button below.
        </p>
        <a
          href="/downloads/lumii-advisory-ai-ebook.pdf"
          download="Find Your Light in the Age of AI — Lumii Advisory.pdf"
          className="inline-block font-body text-[12px] tracking-[0.1em] uppercase text-warm-white bg-near-black px-8 py-4 hover:-translate-y-px transition-all duration-200"
        >
          Download Again →
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div>
        <label className={labelClass}>Full Name</label>
        <input
          {...register('name', { required: true })}
          placeholder="Jane Smith"
          className={inputClass}
        />
        {errors.name && (
          <p className="font-body text-[11px] text-red-500 mt-1">Required</p>
        )}
      </div>
      <div>
        <label className={labelClass}>Email</label>
        <input
          {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })}
          type="email"
          placeholder="jane@company.com"
          className={inputClass}
        />
        {errors.email && (
          <p className="font-body text-[11px] text-red-500 mt-1">Valid email required</p>
        )}
      </div>
      <div>
        <label className={labelClass}>Company</label>
        <input
          {...register('company', { required: true })}
          placeholder="Your Company"
          className={inputClass}
        />
        {errors.company && (
          <p className="font-body text-[11px] text-red-500 mt-1">Required</p>
        )}
      </div>
      <div>
        <label className={labelClass}>Country</label>
        <input
          {...register('country', { required: true })}
          placeholder="Australia"
          className={inputClass}
        />
        {errors.country && (
          <p className="font-body text-[11px] text-red-500 mt-1">Required</p>
        )}
      </div>

      {error && (
        <p className="font-body text-[13px] text-red-500 font-light">
          Something went wrong — please try again or email us at hello@lumiiadvisory.com
        </p>
      )}

      <div className="pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="w-full font-body text-[12px] tracking-[0.12em] uppercase text-warm-white bg-near-black px-10 py-4 hover:bg-charcoal hover:-translate-y-px transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        >
          {submitting ? 'Sending…' : 'Get Free Access →'}
        </button>
        <p className="font-body text-[11px] text-ash font-light mt-3 text-center">
          No spam. Unsubscribe any time.
        </p>
      </div>
    </form>
  )
}
