'use client'

import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import ProcessStep from './ProcessStep'

const steps = [
  {
    num: '01',
    title: 'Illuminate',
    body: 'We start by gaining deep clarity on where you are. A comprehensive audit of your digital landscape, customer experience, technology stack, and competitive position — revealing what\'s working, what isn\'t, and where the real opportunities lie.',
  },
  {
    num: '02',
    title: 'Align',
    body: 'Strategy only works when the whole organisation is pointing in the same direction. We facilitate alignment across leadership, marketing, sales, and technology — translating insight into a shared roadmap everyone can execute against.',
  },
  {
    num: '03',
    title: 'Activate',
    body: 'We move from strategy to action — implementing, integrating, testing, and iterating. We work alongside your team, not just above them, to ensure the plan gets built and the capability stays when we leave.',
  },
  {
    num: '04',
    title: 'Accelerate',
    body: 'Great strategy evolves. We establish the measurement frameworks, feedback loops, and review cadences that let you keep improving — so the value compounds long after the initial engagement ends.',
  },
]

export default function ProcessSection() {
  return (
    <section className="bg-warm-white py-[clamp(80px,10vw,140px)] px-8 lg:px-12">
      <div className="max-w-[1180px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Steps */}
          <div>
            <SectionHeader
              tag="How We Work"
              heading={
                <>
                  The Lumii <em className="italic text-gold">method.</em>
                </>
              }
            />
            <div className="mt-14 space-y-12">
              {steps.map((step, i) => (
                <ProcessStep key={step.num} {...step} index={i} />
              ))}
            </div>
          </div>

          {/* Sticky quote panel */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-near-black p-12 lg:p-16"
            >
              <div className="w-12 h-px bg-gold mb-8" />
              <blockquote className="font-display text-[clamp(22px,2.5vw,30px)] italic font-light text-warm-white leading-[1.45] mb-10">
                "The right technology, in the right hands, with the right strategy behind it — that's when businesses transform."
              </blockquote>
              <div>
                <p className="font-display text-[18px] italic font-light text-gold">Agata Adamczak</p>
                <p className="font-body text-[11px] tracking-[0.15em] uppercase text-ash mt-1">
                  Founder, Lumii Advisory
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
