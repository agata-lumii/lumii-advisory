'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface Props {
  number: string
  slug: string
  category: string
  heading: string
  body: string
  outcomes: string[]
  index: number
}

export default function VerticalCard({ number, slug, category, heading, body, outcomes, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <Link href={`/who-we-help/${slug}`} className="block bg-ivory p-10 relative overflow-hidden group hover:shadow-md transition-shadow duration-300 h-full">
        {/* Ghost number watermark */}
        <span className="absolute top-4 right-6 font-display text-[72px] font-light text-stone/60 leading-none select-none pointer-events-none">
          {number}
        </span>
        <span className="font-body text-[10px] tracking-[0.25em] uppercase text-gold mb-4 block">{category}</span>
        <h3 className="font-display text-[26px] font-light text-near-black leading-[1.25] mb-4 relative z-10">{heading}</h3>
        <p className="font-body text-[14px] text-slate-warm font-light leading-[1.75] mb-8">{body}</p>
        <ul className="space-y-2.5 mb-8">
          {outcomes.map((o, i) => (
            <li key={i} className="font-body text-[13px] text-charcoal font-light leading-[1.6] flex items-start gap-3">
              <span className="text-gold flex-shrink-0 mt-0.5">—</span>
              {o}
            </li>
          ))}
        </ul>
        <span className="font-body text-[11px] tracking-[0.15em] uppercase text-gold group-hover:tracking-[0.22em] transition-all duration-300">
          Learn more →
        </span>
      </Link>
    </motion.div>
  )
}
