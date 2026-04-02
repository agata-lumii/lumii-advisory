'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionTag from './SectionTag'

export default function PhilosophySection() {
  return (
    <section className="bg-warm-white py-[clamp(80px,10vw,140px)] px-8 lg:px-12">
      <div className="max-w-[1180px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[480px] lg:h-[580px]"
          >
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="/images/agata-about-main.png"
                alt="Agata Adamczak"
                fill
                className="object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <SectionTag>The Philosophy</SectionTag>
            <h2 className="font-display font-light text-[clamp(36px,4vw,58px)] leading-[1.12] text-near-black tracking-[-0.01em]">
              Strategy with <em className="italic text-gold">substance.</em>
            </h2>
            <div className="mt-7 space-y-[18px] font-body text-[16px] leading-[1.85] text-slate-warm font-light">
              <p>
                We live in the most exciting — and most overwhelming — moment in the history of business technology. AI is reshaping every customer touchpoint, every marketing function, every sales conversation. The businesses that will lead the next decade aren't the ones with the biggest budgets; they're the ones with the clearest thinking.
              </p>
              <p>
                Lumii Advisory was born from a simple conviction: that every business deserves a trusted guide through the digital landscape — someone who can illuminate the path forward, separate the genuinely transformative from the merely trendy, and translate strategy into tangible results.
              </p>
              <p>That's the light behind the name.</p>
            </div>
            <div className="mt-10">
              <p className="font-display text-[28px] italic font-light text-charcoal">Agata Adamczak</p>
              <p className="font-body text-[11px] tracking-[0.15em] uppercase text-ash mt-1.5">
                Founder, Lumii Advisory · Sydney, Australia
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
