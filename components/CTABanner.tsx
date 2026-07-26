'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTABanner() {
  return (
    <section className="bg-ivory border-t border-gold/40 py-[clamp(80px,10vw,130px)] px-8 lg:px-12">
      <div className="max-w-[1180px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-gold" />
              <span className="font-body text-[10px] tracking-[0.3em] uppercase text-ash">
                Ready to begin
              </span>
              <div className="w-8 h-px bg-gold" />
            </div>
          </div>
          <h2 className="font-display font-light text-[clamp(40px,5vw,72px)] leading-[1.1] text-near-black mb-7 tracking-[-0.01em]">
            Let&rsquo;s find your <em className="italic text-gold">light.</em>
          </h2>
          <p className="font-body text-[17px] leading-[1.8] text-slate-warm font-light max-w-[560px] mx-auto mb-12">
            Whether you are at the start of your AI programme or deep into it, a single
            conversation can change its trajectory.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="font-body text-[12px] tracking-[0.12em] uppercase text-warm-white bg-near-black px-10 py-4 hover:-translate-y-px transition-all duration-200 inline-block"
            >
              Book a discovery call
            </Link>
            <Link
              href="/resources/ebook"
              className="font-body text-[12px] tracking-[0.12em] uppercase text-near-black border border-near-black px-10 py-4 hover:bg-near-black hover:text-warm-white transition-all duration-200 inline-block"
            >
              Get the free ebook
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
