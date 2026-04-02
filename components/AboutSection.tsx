'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionHeader from './SectionHeader'

export default function AboutSection() {
  return (
    <section className="bg-ivory py-[clamp(80px,10vw,140px)] px-8 lg:px-12">
      <div className="max-w-[1180px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Photo with credential bar */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] w-full max-w-[500px]">
              <Image
                src="/images/agata-about-full.png"
                alt="Agata Adamczak, Founder of Lumii Advisory"
                fill
                className="object-cover object-top"
              />
              {/* Credential bar overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-near-black/90 px-7 py-5">
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-gold mb-2">Expertise</p>
                <p className="font-body text-[12px] text-warm-white/80 font-light leading-[1.7]">
                  Enterprise SaaS &amp; Pre-Sales Leadership · APAC · Digital Transformation · eCommerce · MarTech · AI Enablement · Generative AI Strategy · Based in Sydney, Australia
                </p>
              </div>
            </div>
          </motion.div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <SectionHeader
              tag="About Agata"
              heading={
                <>
                  The person behind <em className="italic text-gold">Lumii.</em>
                </>
              }
            />
            <div className="mt-8 space-y-5 font-body text-[15px] leading-[1.85] text-slate-warm font-light">
              <p>
                I've spent the last decade at the intersection of technology, strategy, and growth — leading pre-sales and solutions consulting teams across APAC, working with enterprise clients on their most complex digital challenges, and developing a deep instinct for what actually moves the needle.
              </p>
              <p>
                My career has taken me from scaling the ANZ operation of a global technology business, to leading strategic enterprise consultation across the region, to building high-performing solutions teams that doubled revenue and opened new markets. Along the way, I've worked with businesses of every size and stage — and the pattern I kept seeing was the same: the technology was rarely the problem. The strategy, the clarity, and the capability to execute — that's where the gap lived.
              </p>
              <p>Then came the AI era. And honestly? I've never been more excited about what technology can do for businesses.</p>
              <p>
                We are living through a genuinely transformative moment — one that will define which businesses lead the next decade and which get left behind. The opportunity is extraordinary. But so is the noise. Buzzwords, vendor promises, half-baked implementations, and paralysis in the face of too much choice. That's exactly why Lumii exists.
              </p>
              <p>
                Lumii is my way of bringing light to that noise. Of being the person who helps businesses cut through the confusion, find their strategy, and move forward with confidence. I created Lumii because I believe every ambitious business — not just the enterprise giants — deserves access to world-class thinking on digital, technology, and AI. This new chapter is the most energising of my career. And I can't wait to bring that energy to your business.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-10 border-t border-parchment">
              {[
                { stat: '10+', label: 'Years in Digital & Tech' },
                { stat: 'APAC', label: 'Regional Expertise' },
                { stat: '50+', label: 'Enterprise Projects' },
              ].map((s) => (
                <div key={s.stat}>
                  <p className="font-display text-[32px] font-light text-near-black">{s.stat}</p>
                  <p className="font-body text-[12px] text-slate-warm font-light mt-1 leading-[1.4]">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
