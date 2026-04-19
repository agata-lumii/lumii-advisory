'use client'

import { motion } from 'framer-motion'

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  'Digital Strategy': (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M4 20 L10 13 L15 17 L22 8" />
      <circle cx="22" cy="8" r="2" />
      <path d="M4 24h20" />
    </svg>
  ),
  'Customer Experience': (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M14 4C8.477 4 4 8.477 4 14s4.477 10 10 10 10-4.477 10-10S19.523 4 14 4z" />
      <path d="M9 14s1.5 3 5 3 5-3 5-3" />
      <circle cx="10" cy="11" r="1" fill="currentColor" stroke="none" />
      <circle cx="18" cy="11" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  'Ecommerce': (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M4 5h2.5l2 11h11l2-8H9" />
      <circle cx="11" cy="22" r="1.5" />
      <circle cx="19" cy="22" r="1.5" />
    </svg>
  ),
  'MarTech Advisory': (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="4" y="8" width="6" height="6" rx="1" />
      <rect x="18" y="8" width="6" height="6" rx="1" />
      <rect x="11" y="16" width="6" height="6" rx="1" />
      <path d="M7 14v3h7M21 14v3h-7" />
    </svg>
  ),
  'AI Enablement': (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="14" cy="14" r="3" />
      <path d="M14 4v4M14 20v4M4 14h4M20 14h4" />
      <path d="M7 7l2.8 2.8M18.2 18.2L21 21M7 21l2.8-2.8M18.2 9.8L21 7" />
    </svg>
  ),
}

interface Props {
  number: string
  name: string
  description: string
  tags: string[]
}

export default function ServiceCard({ number, name, description, tags }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-near-black p-10 lg:p-12 transition-colors duration-300 hover:bg-[#252320] cursor-pointer group"
    >
      <div className="flex items-start justify-between mb-7">
        <span className="font-display text-[13px] text-gold tracking-[0.1em]">{number}</span>
        <div className="w-8 h-8 text-gold/30 group-hover:text-gold/60 transition-colors duration-300 shrink-0">
          {SERVICE_ICONS[name]}
        </div>
      </div>
      <motion.div
        className="h-0.5 bg-gold mb-6"
        initial={{ width: 36 }}
        whileHover={{ width: 56 }}
        transition={{ duration: 0.3 }}
        style={{ width: 36 }}
      />
      <h3 className="font-display text-[26px] font-normal text-warm-white leading-[1.25] mb-4">{name}</h3>
      <p className="font-body text-[14px] text-warm-white/50 font-light leading-[1.75] mb-7">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="font-body text-[10px] tracking-[0.12em] uppercase text-ash border border-[rgba(180,175,168,0.2)] px-3 py-1.5"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
