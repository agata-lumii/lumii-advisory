import SectionHeader from './SectionHeader'
import ServiceCard from './ServiceCard'

const services = [
  {
    number: '01',
    name: 'Digital Strategy',
    description:
      'A clear, prioritised roadmap that aligns your digital investments to business outcomes. We audit, advise, and architect transformation plans that are ambitious but executable.',
    tags: ['Roadmapping', 'Audits', 'Transformation'],
  },
  {
    number: '02',
    name: 'Customer Experience',
    description:
      'Seamless, intentional journeys that convert browsers into buyers and buyers into advocates. We map, redesign, and optimise the moments that matter most.',
    tags: ['Journey Mapping', 'CX Design', 'NPS & VOC'],
  },
  {
    number: '03',
    name: 'Ecommerce',
    description:
      'From platform strategy to conversion optimisation, we help you build, scale, and refine ecommerce operations that consistently outperform benchmarks.',
    tags: ['Platform Strategy', 'CRO', 'D2C'],
  },
  {
    number: '04',
    name: 'MarTech Advisory',
    description:
      'The right stack, properly integrated. We help you evaluate, select, implement, and get genuine value from your marketing technology investments — no vendor agenda.',
    tags: ['Stack Audit', 'CDP / CRM', 'Automation'],
  },
  {
    number: '05',
    name: 'AI Enablement',
    description:
      'Practical, responsible AI integration that saves time, improves decisions, and creates competitive advantage. We identify the use cases, implement the tools, and build the capability.',
    tags: ['AI Readiness', 'Use Case Design', 'Training'],
  },
]

export default function ServicesSection() {
  return (
    <section className="bg-near-black py-[clamp(80px,10vw,140px)] px-8 lg:px-12">
      <div className="max-w-[1180px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-18">
          <SectionHeader
            tag="What We Do"
            heading={
              <>
                Five disciplines.<br />
                <em className="italic text-gold">One direction.</em>
              </>
            }
            light
          />
          <p className="font-body text-[17px] leading-[1.8] text-warm-white/55 font-light max-w-[500px]">
            We work across the full spectrum of digital transformation — from strategy to execution, technology to culture — always with one eye on your customer and one on your bottom line.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(180,175,168,0.12)] border border-[rgba(180,175,168,0.12)]">
          {services.map((s) => (
            <ServiceCard key={s.number} {...s} />
          ))}
          {/* Empty spacer for grid alignment */}
          <div className="bg-near-black hidden lg:block" />
        </div>
      </div>
    </section>
  )
}
