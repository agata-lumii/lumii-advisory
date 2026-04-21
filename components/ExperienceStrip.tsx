const companies = [
  'Botify',
  'Dotdigital',
  'OFX',
  'Pattern',
  'BrightEdge',
  'Performics',
  'iCrossing',
]

export default function ExperienceStrip() {
  return (
    <section className="bg-gold py-8 px-8 lg:px-12 border-y border-near-black/10">
      <div className="max-w-[1180px] mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12">
        <p className="font-body text-[10px] tracking-[0.3em] uppercase text-near-black/70 flex items-center gap-4 flex-shrink-0">
          <span className="w-6 h-px bg-near-black/40 block" />
          Senior experience across
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 lg:gap-x-8">
          {companies.map((company, i) => (
            <span key={company} className="flex items-center gap-6 lg:gap-8">
              <span className="font-display text-[17px] lg:text-[19px] font-light italic text-near-black">
                {company}
              </span>
              {i < companies.length - 1 && (
                <span className="w-1 h-1 rounded-full bg-near-black/50 flex-shrink-0 hidden sm:block" />
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
