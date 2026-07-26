export default function ThesisSection() {
  return (
    <section className="bg-warm-white py-[clamp(80px,10vw,140px)] px-8 lg:px-12">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-24 items-start">
        <div>
          <div className="flex items-center gap-5 mb-6">
            <span className="w-8 h-px bg-gold block" />
            <p className="font-body text-[11px] tracking-[0.3em] uppercase text-ash">
              The problem
            </p>
          </div>
          <h2 className="font-display font-light text-[clamp(34px,4.2vw,58px)] leading-[1.1] text-near-black tracking-[-0.01em]">
            Most businesses are not short of AI tools. They are short of an{' '}
            <em className="italic text-gold">operating system.</em>
          </h2>
        </div>

        <div className="space-y-6 font-body text-[16px] leading-[1.85] text-slate-warm font-light lg:pt-4">
          <p>
            The licences get bought. A few people experiment. Six months later there is
            no thesis about where AI should be applied, no guardrails around the data it
            sees, no workflow that actually changed, no one accountable, and nothing
            being measured.
          </p>
          <p>
            So the pilots stall, the enthusiasm fades, and none of it reaches the P&amp;L.
            That is not a technology failure — the technology worked. It is a structural
            one, and structure is fixable.
          </p>
        </div>
      </div>
    </section>
  )
}
