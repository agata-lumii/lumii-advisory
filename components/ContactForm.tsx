'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

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

export default function ContactForm() {
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
      <div className="py-12">
        <div className="w-12 h-px bg-gold mb-8" />
        <p className="font-display text-[32px] italic font-light text-near-black leading-[1.3] mb-4">
          Thank you — we'll be in touch soon.
        </p>
        <p className="font-body text-[15px] text-slate-warm font-light leading-[1.75]">
          We aim to respond within one business day. In the meantime, feel free to connect on LinkedIn.
        </p>
      </div>
    )
  }

  const inputClass =
    'w-full font-body text-[15px] font-light text-near-black bg-transparent border-0 border-b border-parchment focus:border-charcoal focus:outline-none py-4 transition-colors duration-200 placeholder:text-ash'
  const labelClass = 'font-body text-[10px] tracking-[0.2em] uppercase text-ash mb-1 block'

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label className={labelClass}>First Name</label>
          <input
            {...register('firstName', { required: true })}
            placeholder="Jane"
            className={inputClass}
          />
          {errors.firstName && (
            <p className="font-body text-[11px] text-red-500 mt-1">Required</p>
          )}
        </div>
        <div>
          <label className={labelClass}>Last Name</label>
          <input
            {...register('lastName', { required: true })}
            placeholder="Smith"
            className={inputClass}
          />
          {errors.lastName && (
            <p className="font-body text-[11px] text-red-500 mt-1">Required</p>
          )}
        </div>
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
          {...register('company')}
          placeholder="Your Company"
          className={inputClass}
        />
      </div>
      <div>
        <label className={labelClass}>Area of Interest</label>
        <select
          {...register('interest', { required: true })}
          className={`${inputClass} cursor-pointer`}
        >
          <option value="">Select an area...</option>
          <option value="digital-strategy">Digital Strategy</option>
          <option value="cx">Customer Experience</option>
          <option value="ecommerce">Ecommerce</option>
          <option value="martech">MarTech Advisory</option>
          <option value="ai">AI Enablement</option>
          <option value="multiple">Multiple Areas</option>
          <option value="not-sure">Not Sure Yet</option>
        </select>
        {errors.interest && (
          <p className="font-body text-[11px] text-red-500 mt-1">Please select an option</p>
        )}
      </div>
      <div>
        <label className={labelClass}>Message</label>
        <textarea
          {...register('message', { required: true })}
          placeholder="Tell us about your business and what you're looking to achieve..."
          rows={5}
          className={`${inputClass} resize-none`}
        />
        {errors.message && (
          <p className="font-body text-[11px] text-red-500 mt-1">Required</p>
        )}
      </div>
      {error && (
        <p className="font-body text-[13px] text-red-500 font-light">
          Something went wrong — please try again or email us directly at hello@lumii.com.au
        </p>
      )}
      <button
        type="submit"
        disabled={submitting}
        className="font-body text-[12px] tracking-[0.12em] uppercase text-near-black bg-gold px-10 py-4 hover:bg-[#d4b47a] hover:-translate-y-px transition-all duration-200 mt-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      >
        {submitting ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
