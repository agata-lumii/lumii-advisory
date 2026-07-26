'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-screen bg-near-black grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
      {/* Left panel */}
      <div className="flex flex-col justify-center px-8 lg:px-20 pt-40 pb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="font-body text-[12px] tracking-[0.25em] uppercase text-gold mb-8">
            AI Strategy · Digital Transformation
          </p>
          <h1 className="font-display font-light text-[clamp(40px,4.6vw,68px)] leading-[1.08] text-warm-white mb-8 tracking-[-0.01em]">
            Most businesses don't have an AI tool problem. They have an{' '}
            <Link
              href="/ai-operating-system"
              className="italic text-gold hover:text-[#d4b47a] underline decoration-gold/30 underline-offset-[6px] decoration-1 hover:decoration-gold/60 transition-colors"
            >
              AI operating system
            </Link>{' '}
            problem.
          </h1>
          <p className="font-body text-[17px] leading-[1.8] text-warm-white/80 max-w-[500px] mb-5 font-light">
            Lumii builds the structure, workflows, and internal capability that make AI adoption actually reach the P&L — not just the pilot deck.
          </p>
          <p className="font-body text-[15px] leading-[1.75] text-warm-white/55 max-w-[480px] mb-12 font-light">
            Eighteen years inside global technology businesses taught me how these decisions should be made. Lumii exists to do that properly — senior-led, vendor-neutral, and accountable to outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
            <Link
              href="/contact"
              className="font-body text-[12px] tracking-[0.12em] uppercase text-near-black bg-gold px-9 py-4 hover:bg-gold-light hover:-translate-y-px transition-all duration-200 inline-block"
            >
              Book a Discovery Call
            </Link>
            <Link
              href="/services"
              className="font-body text-[12px] tracking-[0.12em] uppercase text-warm-white/60 py-4 border-b border-warm-white/20 hover:text-warm-white hover:border-warm-white/60 transition-all duration-200"
            >
              See What I Do →
            </Link>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-8 lg:left-20 flex items-center gap-4">
          <div className="w-10 h-px bg-warm-white/20" />
          <span className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-white/35">Scroll</span>
        </div>
      </div>

      {/* Right panel — photo */}
      <div className="relative min-h-[50vh] lg:min-h-full order-first lg:order-last">
        <Image
          src="/images/agata-about-hero.png"
          alt="Agata Adamczak, founder of Lumii Advisory and AI strategy consultant based in Sydney, Australia"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: '50% 15%', filter: 'grayscale(20%) brightness(0.85)' }}
        />
        {/* Gradient bleed into left panel */}
        <div className="absolute inset-0 bg-gradient-to-r from-near-black via-near-black/30 to-transparent lg:from-near-black lg:via-near-black/20 lg:to-transparent pointer-events-none" />
      </div>
    </section>
  )
}
