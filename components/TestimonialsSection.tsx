import SectionHeader from './SectionHeader'
import TestimonialCard from './TestimonialCard'

const testimonials = [
  {
    quote:
      "Agata brought a level of strategic clarity we hadn't experienced from an external partner before. She quickly understood our business, identified the real blockers, and built a roadmap we could actually execute. The AI enablement work alone has saved our team two days a week.",
    name: 'Sarah Mitchell',
    role: 'Head of Marketing, National Property Group',
  },
  {
    quote:
      "We came in with a messy stack and no clear digital strategy. Lumii gave us the audit, the roadmap, and — crucially — the confidence to make decisions we'd been avoiding for years. Our ecommerce conversion rate is up 34% since implementation.",
    name: "James O'Brien",
    role: 'CEO, DTC Retail Brand',
  },
  {
    quote:
      "What sets Lumii apart is the combination of deep technical knowledge and genuine commercial instinct. Agata speaks both languages — she can talk to our CTO and our CFO and make equal sense to both. That's rare.",
    name: 'Priya Sharma',
    role: 'Chief Customer Officer, B2B SaaS',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-near-black py-[clamp(80px,10vw,140px)] px-8 lg:px-12">
      <div className="max-w-[1180px] mx-auto">
        <div className="mb-16">
          <SectionHeader
            tag="From Clients"
            heading={
              <>
                Results that <em className="italic text-gold">resonate.</em>
              </>
            }
            light
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
