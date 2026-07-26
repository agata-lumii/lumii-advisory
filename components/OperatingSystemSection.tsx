import Link from 'next/link'
import { osComponents } from '@/lib/operating-system'

export default function OperatingSystemSection() {
  return (
    <section className="bg-stone py-[clamp(80px,10vw,140px)] px-8 lg:px-12 border-y border-parchment">
      <div className="max-w-[1180px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-24 items-end mb-16">
          <div>
            <div className="flex items-center gap-5 mb-6">
              <span className="w-8 h-px bg-gold block" />
              <p className="font-body text-[11px] tracking-[0.3em] uppercase text-ash">
                What I build
              </p>
            </div>
            <h2 className="font-display font-light text-[clamp(36px,4.2vw,58px)] leading-[1.1] text-near-black tracking-[-0.01em]">
              The AI <em className="italic text-gold">Operating System.</em>
            </h2>
          </div>
          <p className="font-body text-[17px] leading-[1.8] text-slate-warm font-light">
            Five components that turn isolated AI tools into a coordinated business
            capability. All five have to be present and connected — four out of five
            does not deliver four-fifths of the value.
          </p>
        </div>

        {/* Five components — full-width numbered rows, deliberately not a card grid */}
        <div className="border-t border-parchment">
          {osComponents.map((c) => (
            <div
              key={c.number}
              className="grid grid-cols-[auto_1fr] md:grid-cols-[auto_minmax(0,220px)_1fr] gap-x-6 md:gap-x-12 gap-y-2 items-baseline py-7 border-b border-parchment"
            >
              <span className="font-display text-[clamp(26px,2.6vw,34px)] font-light text-gold/70 leading-none select-none">
                {c.number}
              </span>
              <h3 className="font-display text-[clamp(21px,2vw,26px)] font-light text-near-black leading-[1.25]">
                {c.name}
              </h3>
              <p className="col-start-2 md:col-start-3 font-body text-[15px] text-slate-warm font-light leading-[1.75]">
                {c.summary}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
          <Link
            href="/ai-operating-system"
            className="font-body text-[12px] tracking-[0.12em] uppercase text-warm-white bg-near-black px-9 py-4 hover:-translate-y-px transition-all duration-200 inline-block"
          >
            Read the framework →
          </Link>
          <Link
            href="/work-with-us"
            className="font-body text-[11px] tracking-[0.15em] uppercase text-gold hover:text-charcoal transition-colors duration-200"
          >
            Ways to work together →
          </Link>
        </div>
      </div>
    </section>
  )
}
