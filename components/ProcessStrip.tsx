import Link from 'next/link'
import { methodSteps, frameworkHierarchyLine } from '@/lib/method'

export default function ProcessStrip() {
  return (
    <section className="bg-ivory px-8 lg:px-12 py-[clamp(64px,8vw,100px)]">
      <div className="max-w-[1180px] mx-auto">

        {/* Section label row */}
        <div className="flex items-end justify-between gap-10 mb-6">
          <div>
            <div className="flex items-center gap-5 mb-3">
              <span className="w-8 h-px bg-gold block" />
              <p className="font-body text-[11px] tracking-[0.3em] uppercase text-ash">
                How I work
              </p>
            </div>
            <h2 className="font-display font-light text-[clamp(40px,4.5vw,64px)] leading-[1.08] text-near-black tracking-[-0.01em]">
              How the system <em className="italic text-gold">gets built.</em>
            </h2>
          </div>
          <Link
            href="/how-we-work"
            className="hidden sm:inline whitespace-nowrap font-body text-[11px] tracking-[0.15em] uppercase text-gold hover:text-charcoal transition-colors duration-200 pb-2"
          >
            Full methodology →
          </Link>
        </div>

        {/* Framework hierarchy — resolves AI OS vs the method */}
        <p className="font-body text-[15px] text-slate-warm font-light leading-[1.8] max-w-[620px] mb-14 pl-6 border-l border-gold/40">
          {frameworkHierarchyLine}
        </p>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-parchment">
          {methodSteps.map((step) => (
            <div
              key={step.num}
              className="bg-ivory px-8 py-10 lg:px-10 lg:py-12 flex flex-col"
            >
              <span className="font-display text-[clamp(48px,5vw,72px)] font-light text-gold/60 leading-none mb-6 select-none">
                {step.num}
              </span>

              <h3 className="font-display text-[clamp(22px,2vw,28px)] font-light text-near-black leading-[1.2] mb-5">
                {step.title}
              </h3>

              <div className="w-8 h-px bg-gold mb-5" />

              <p className="font-body text-[14px] text-slate-warm font-light leading-[1.8]">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile link */}
        <div className="sm:hidden mt-8">
          <Link
            href="/how-we-work"
            className="font-body text-[11px] tracking-[0.15em] uppercase text-gold hover:text-charcoal transition-colors duration-200"
          >
            Full methodology →
          </Link>
        </div>

      </div>
    </section>
  )
}
