import SectionHeader from './SectionHeader'
import VerticalCard from './VerticalCard'
import { verticals } from '@/lib/verticals'

export default function VerticalsSection() {
  return (
    <section className="bg-stone py-[clamp(80px,10vw,140px)] px-8 lg:px-12">
      <div className="max-w-[1180px] mx-auto">
        <div className="mb-16">
          <SectionHeader
            tag="Who We Help"
            heading={
              <>
                Built for the <em className="italic text-gold">ambitious.</em>
              </>
            }
            lead="I work with growth-stage businesses and established teams across a range of sectors — wherever digital complexity is creating friction or opportunity."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {verticals.map((v, i) => (
            <VerticalCard key={v.number} {...v} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
