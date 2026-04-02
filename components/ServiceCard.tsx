'use client'

import { motion } from 'framer-motion'

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
      <span className="font-display text-[13px] text-gold tracking-[0.1em] mb-7 block">{number}</span>
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
