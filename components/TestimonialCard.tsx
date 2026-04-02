'use client'

import { motion } from 'framer-motion'

interface Props {
  quote: string
  name: string
  role: string
  index: number
}

export default function TestimonialCard({ quote, name, role, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="bg-charcoal p-10 lg:p-12"
    >
      {/* Star rating */}
      <div className="flex gap-1 mb-7">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-gold fill-gold" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <blockquote className="font-display text-[20px] italic font-light text-warm-white leading-[1.55] mb-8">
        "{quote}"
      </blockquote>
      <div>
        <p className="font-body text-[13px] font-medium text-warm-white tracking-[0.05em]">{name}</p>
        <p className="font-body text-[12px] text-ash font-light mt-0.5">{role}</p>
      </div>
    </motion.div>
  )
}
