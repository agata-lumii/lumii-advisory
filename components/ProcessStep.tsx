'use client'

import { motion } from 'framer-motion'

interface Props {
  num: string
  title: string
  body: string
  index: number
}

export default function ProcessStep({ num, title, body, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex gap-8"
    >
      <div className="flex-shrink-0">
        <span className="font-display text-[13px] text-gold tracking-[0.1em]">{num}</span>
        <div className="w-8 h-px bg-gold mt-3" />
      </div>
      <div>
        <h3 className="font-display text-[24px] font-light text-near-black mb-3">{title}</h3>
        <p className="font-body text-[15px] text-slate-warm font-light leading-[1.8]">{body}</p>
      </div>
    </motion.div>
  )
}
