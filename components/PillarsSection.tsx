'use client'

import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const pillars = [
  {
    num: '01',
    title: 'Clarity over complexity',
    body: "Technology should simplify decisions, not obscure them. We cut through the jargon to give you a clear view of what matters, what works, and what's worth investing in.",
  },
  {
    num: '02',
    title: 'Humanity at the centre',
    body: 'The best digital strategies start and end with the customer. We design experiences that feel effortless to use, and build the technology infrastructure that makes that possible.',
  },
  {
    num: '03',
    title: 'Intelligence, applied',
    body: 'AI is the greatest unlock of our era — but only when used with purpose. We help you identify where AI genuinely accelerates your business, and build the capability to use it well.',
  },
]

export default function PillarsSection() {
  return (
    <section className="bg-near-black py-[clamp(80px,10vw,140px)] px-8 lg:px-12">
      <div className="max-w-[1180px] mx-auto">
        <SectionHeader
          tag="What We Believe"
          heading={
            <>
              The Lumii <em className="italic text-gold">principles.</em>
            </>
          }
          light
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px mt-18 bg-[rgba(180,175,168,0.12)]">
          {pillars.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="bg-near-black p-12 border border-[rgba(180,175,168,0.12)]"
            >
              <span className="font-display text-[13px] text-gold tracking-[0.1em] mb-7 block">{p.num}</span>
              <div className="w-9 h-0.5 bg-gold mb-6" />
              <h3 className="font-display text-[24px] font-light text-warm-white leading-[1.25] mb-4">
                {p.title}
              </h3>
              <p className="font-body text-[14px] text-warm-white/50 font-light leading-[1.75]">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
