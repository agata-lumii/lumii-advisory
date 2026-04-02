'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTABanner() {
  return (
    <section className="bg-gold py-[clamp(80px,10vw,120px)] px-8 lg:px-12">
      <div className="max-w-[1180px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-5">
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-near-black/40" />
              <span className="font-body text-[10px] tracking-[0.3em] uppercase text-near-black/70">
                Ready to begin
              </span>
              <div className="w-8 h-px bg-near-black/40" />
            </div>
          </div>
          <h2 className="font-display font-light text-[clamp(40px,5vw,72px)] leading-[1.1] text-near-black mb-6 tracking-[-0.01em]">
            Let's find your <em className="italic">light.</em>
          </h2>
          <p className="font-body text-[17px] leading-[1.75] text-near-black/70 font-light max-w-[560px] mx-auto mb-10">
            Whether you're at the start of your digital transformation or deep into it — a single conversation with Lumii can change the trajectory.
          </p>
          <Link
            href="/contact"
            className="font-body text-[12px] tracking-[0.12em] uppercase text-warm-white bg-near-black px-10 py-4 hover:-translate-y-px transition-all duration-200 inline-block"
          >
            Book a Discovery Call
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
