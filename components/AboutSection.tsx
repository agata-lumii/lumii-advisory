'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import SectionHeader from './SectionHeader'

interface Props {
  /**
   * Homepage variant: the story in two paragraphs, with the brands strip and
   * the full career detail left to /about.
   */
  condensed?: boolean
}

export default function AboutSection({ condensed }: Props) {
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
                alt="Portrait of Agata Adamczak, founder of Lumii Advisory and author of the AI Operating System framework"
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
                Eighteen years at the intersection of technology, strategy, and growth. As the{' '}
                <span className="text-near-black">first employee in ANZ for Botify</span>, I built
                and scaled the regional operation from zero. Before and alongside that, I led
                enterprise consultation and go-to-market at BrightEdge, Performics, iCrossing, OFX,
                Pattern, and most recently Dotdigital — a career spent inside boardrooms from Sydney
                to London to New York.
              </p>
              <p>
                Across every one of those roles the pattern held: the technology was rarely the
                problem. The strategy, the clarity, and the capability to execute — that is where
                the gap always lived. Then came AI, and the gap got wider.
              </p>
              {!condensed && (
                <p>
                  That is why Lumii exists. I left the vendor side to do this properly, and the
                  result is a named, defensible framework: the{' '}
                  <Link
                    href="/ai-operating-system"
                    className="text-near-black underline decoration-gold/40 underline-offset-[4px] hover:decoration-gold transition-colors"
                  >
                    AI Operating System
                  </Link>
                  . No vendor agenda, no generic playbooks, and every engagement led by me
                  personally.
                </p>
              )}
            </div>

            {condensed && (
              <div className="mt-8">
                <Link
                  href="/about"
                  className="font-body text-[11px] tracking-[0.15em] uppercase text-gold hover:text-charcoal transition-colors duration-200"
                >
                  More about my background →
                </Link>
              </div>
            )}

            {/* Brands advised strip */}
            {!condensed && (
              <div className="mt-10 pt-10 border-t border-parchment">
                <p className="font-body text-[10px] tracking-[0.25em] uppercase text-ash mb-5 flex items-center gap-4">
                  <span className="w-6 h-px bg-gold block" />
                  Brands I advised while employed elsewhere
                </p>
                <p className="font-display text-[15px] italic font-light text-charcoal leading-[2]">
                  Canva · MYER · Optus · Harvey Norman · Medibank · Nike · Adidas · ASOS · Net-a-Porter · Australia Post · David Jones · Avis Budget Group · Reckitt
                </p>
                <p className="font-body text-[12px] text-ash font-light leading-[1.7] mt-4">
                  Advised in my roles at Botify, Dotdigital, BrightEdge and others — not Lumii clients.
                </p>
              </div>
            )}

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
