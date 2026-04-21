import Link from 'next/link'

const steps = [
  {
    num: '01',
    title: 'Illuminate',
    body: 'A comprehensive audit of your digital landscape, AI readiness, and growth constraints — revealing where the real opportunities lie.',
  },
  {
    num: '02',
    title: 'Align',
    body: 'Translate insight into a shared AI roadmap your entire leadership team can execute against — with clarity and genuine buy-in.',
  },
  {
    num: '03',
    title: 'Activate',
    body: 'Implement and integrate AI alongside your team — building real capability that stays when the engagement ends.',
  },
  {
    num: '04',
    title: 'Accelerate',
    body: 'Measurement frameworks and review cadences that keep the value compounding long after the initial work is done.',
  },
]

export default function ProcessStrip() {
  return (
    <section className="bg-ivory px-8 lg:px-12 py-[clamp(64px,8vw,100px)]">
      <div className="max-w-[1180px] mx-auto">

        {/* Section label row */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <div className="flex items-center gap-5 mb-3">
              <span className="w-8 h-px bg-gold block" />
              <p className="font-body text-[11px] tracking-[0.3em] uppercase text-ash">
                How I Work
              </p>
            </div>
            <h2 className="font-display font-light text-[clamp(40px,4.5vw,64px)] leading-[1.08] text-near-black tracking-[-0.01em]">
              The Lumii <em className="italic text-gold">methodology.</em>
            </h2>
          </div>
          <Link
            href="/how-we-work"
            className="hidden sm:inline font-body text-[11px] tracking-[0.15em] uppercase text-gold hover:text-charcoal transition-colors duration-200"
          >
            Full methodology →
          </Link>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-parchment">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="bg-ivory px-8 py-10 lg:px-10 lg:py-12 flex flex-col"
            >
              {/* Number */}
              <span className="font-display text-[clamp(48px,5vw,72px)] font-light text-gold/60 leading-none mb-6 select-none">
                {step.num}
              </span>

              {/* Title */}
              <h3 className="font-display text-[clamp(22px,2vw,28px)] font-light text-near-black leading-[1.2] mb-5">
                {step.title}
              </h3>

              {/* Divider */}
              <div className="w-8 h-px bg-gold mb-5" />

              {/* Body */}
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
