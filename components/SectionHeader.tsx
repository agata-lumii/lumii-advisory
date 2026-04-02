'use client'

import { motion } from 'framer-motion'
import SectionTag from './SectionTag'

interface Props {
  tag?: string
  heading: React.ReactNode
  lead?: string
  light?: boolean
  center?: boolean
}

export default function SectionHeader({ tag, heading, lead, light, center }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={center ? 'text-center' : ''}
    >
      {tag && <SectionTag>{tag}</SectionTag>}
      <h2
        className={`font-display font-light text-[clamp(36px,4vw,58px)] leading-[1.12] tracking-[-0.01em] ${
          light ? 'text-warm-white' : 'text-near-black'
        }`}
      >
        {heading}
      </h2>
      {lead && (
        <p
          className={`font-body text-[17px] leading-[1.8] font-light mt-5 max-w-[640px] ${
            light ? 'text-warm-white/55' : 'text-slate-warm'
          } ${center ? 'mx-auto' : ''}`}
        >
          {lead}
        </p>
      )}
    </motion.div>
  )
}
