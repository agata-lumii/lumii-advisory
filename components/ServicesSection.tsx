import Link from 'next/link'
import SectionHeader from './SectionHeader'
import ServiceCard from './ServiceCard'
import { disciplines, disciplinesConnectiveTissue } from '@/lib/disciplines'

export default function ServicesSection() {
  return (
    <section className="bg-near-black py-[clamp(80px,10vw,140px)] px-8 lg:px-12">
      <div className="max-w-[1180px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-14">
          <SectionHeader
            tag="What I Do"
            heading={
              <>
                Six disciplines.<br />
                <em className="italic text-gold">One direction.</em>
              </>
            }
            light
          />
          <p className="font-body text-[17px] leading-[1.8] text-warm-white/55 font-light max-w-[500px]">
            {disciplinesConnectiveTissue}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(180,175,168,0.12)] border border-[rgba(180,175,168,0.12)]">
          {disciplines.map((d) => (
            <ServiceCard
              key={d.number}
              number={d.number}
              name={d.name}
              description={d.description}
              tags={d.tags}
              href={d.href}
            />
          ))}
        </div>
        <div className="mt-12">
          <Link
            href="/services"
            className="font-body text-[11px] tracking-[0.15em] uppercase text-gold hover:text-warm-white transition-colors duration-200"
          >
            See all services in detail →
          </Link>
        </div>
      </div>
    </section>
  )
}
