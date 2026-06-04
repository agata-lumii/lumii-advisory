'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
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
                  Enterprise SaaS &amp; Pre-Sales Leadership · UK · US · APAC · Digital Transformation · eCommerce · MarTech · AI Enablement · Generative AI Strategy
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
                Eighteen years at the intersection of technology, strategy, and growth — spanning search, performance media, MarTech, eCommerce, and AI. I've led sales and consulting teams across the UK, US, and APAC, partnering with enterprise clients on their most complex transformation challenges.
              </p>
              <p>
                As the <span className="text-near-black">first employee in ANZ for Botify</span>, I built and scaled the regional operation from zero. Before and alongside that, I led enterprise consultation and go-to-market at BrightEdge, Performics, iCrossing, OFX, Pattern, and most recently Dotdigital — a career spent inside boardrooms from Sydney to London to New York.
              </p>
              <p>
                Across every role, the pattern was the same: the technology was rarely the problem. The strategy, the clarity, and the capability to execute — that's where the real gap lived.
              </p>
              <p>
                Then came AI. A genuinely transformative moment — one that will define which businesses lead the next decade. The opportunity is extraordinary. But so is the noise.
              </p>
              <p>
                That's why Lumii exists. After eighteen years on the vendor side, I left to do this properly — giving ambitious mid-market businesses access to the calibre of strategic thinking usually reserved for enterprise giants. No vendor agenda. No generic playbooks. Every engagement led by me, personally.
              </p>
              <p>
                The result is a named, defensible framework: the{' '}
                <Link
                  href="/ai-operating-system"
                  className="text-near-black underline decoration-gold/40 underline-offset-[4px] hover:decoration-gold transition-colors"
                >
                  AI Operating System
                </Link>
                . Five components — Thesis, Guardrails, Workflows, People, Measurement — that turn isolated AI tools into a coordinated business capability. It is the model behind every Lumii engagement.
              </p>
            </div>

            {/* Brands advised strip */}
            <div className="mt-10 pt-10 border-t border-parchment">
              <p className="font-body text-[10px] tracking-[0.25em] uppercase text-ash mb-5 flex items-center gap-4">
                <span className="w-6 h-px bg-gold block" />
                Brands advised during tenure
              </p>
              <p className="font-display text-[15px] italic font-light text-charcoal leading-[2]">
                Canva · MYER · Optus · Harvey Norman · Medibank · Nike · Adidas · ASOS · Net-a-Porter · Australia Post · David Jones · Avis Budget Group · Reckitt
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-8 mt-10 pt-10 border-t border-parchment">
              {[
                { stat: '18+', label: 'Years in Digital & Tech' },
                { stat: 'Global', label: 'UK · US · APAC' },
                { stat: 'Enterprise', label: 'Scale & Ambition' },
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
