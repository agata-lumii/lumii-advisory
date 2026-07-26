import Link from 'next/link'
import SectionHeader from './SectionHeader'
import VerticalCard from './VerticalCard'
import { verticals } from '@/lib/verticals'

interface Props {
  /**
   * Restrict the grid to these slugs, in this order. Omit to show every sector.
   * The homepage shows four; /who-we-help shows all ten.
   */
  slugs?: string[]
}

export default function VerticalsSection({ slugs }: Props) {
  const shown = slugs
    ? slugs
        .map((slug) => verticals.find((v) => v.slug === slug))
        .filter((v): v is (typeof verticals)[number] => Boolean(v))
    : verticals

  const isSubset = Boolean(slugs)

  return (
    <section className="bg-stone py-[clamp(80px,10vw,140px)] px-8 lg:px-12">
      <div className="max-w-[1180px] mx-auto">
        <div className="mb-16">
          <SectionHeader
            tag="Who I Help"
            heading={
              <>
                Built for the <em className="italic text-gold">ambitious.</em>
              </>
            }
            lead="I work with mid-market businesses and established teams where AI has become a leadership question rather than a tooling one — most often in these four."
          />
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${isSubset ? '' : 'lg:grid-cols-3'}`}
        >
          {shown.map((v, i) => (
            <VerticalCard
              key={v.slug}
              {...v}
              number={isSubset ? String(i + 1).padStart(2, '0') : v.number}
              index={i}
              compact={isSubset}
            />
          ))}
        </div>
        {isSubset && (
          <div className="mt-12">
            <Link
              href="/who-we-help"
              className="font-body text-[11px] tracking-[0.15em] uppercase text-gold hover:text-charcoal transition-colors duration-200"
            >
              See all sectors I work with →
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
