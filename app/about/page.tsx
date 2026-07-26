import type { Metadata } from 'next'
import Link from 'next/link'
import AboutSection from '@/components/AboutSection'
import CTABanner from '@/components/CTABanner'
import SectionHeader from '@/components/SectionHeader'

export const metadata: Metadata = {
  title: {
    absolute: 'Agata Adamczak — AI Strategy Consultant, Sydney | Lumii',
  },
  description:
    '18+ years in digital, MarTech & AI. Ex-Botify, BrightEdge, Dotdigital, Performics. Now leading AI advisory for mid-market businesses across APAC.',
  alternates: {
    canonical: 'https://lumiiadvisory.com/about',
  },
}

export default function AboutPage() {
  return (
    <>
      {/* Dark hero banner */}
      <section className="bg-near-black pt-40 pb-24 px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-8">
            About Agata
          </p>
          <h1 className="font-display font-light text-[clamp(52px,5.5vw,82px)] leading-[1.08] text-warm-white mb-8 tracking-[-0.01em] max-w-[820px]">
            The person behind<br />
            <em className="italic text-gold">Lumii.</em>
          </h1>
          <p className="font-body text-[17px] leading-[1.8] text-warm-white/60 max-w-[580px] font-light">
            A decade at the intersection of technology, strategy, and growth. Built for businesses that are serious about what comes next.
          </p>
        </div>
      </section>

      {/* Main about content */}
      <AboutSection />

      {/* Credentials & Expertise */}
      <section className="bg-near-black py-[clamp(80px,10vw,140px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <SectionHeader
            tag="Background & Expertise"
            heading={
              <>
                Experience that<br />
                <em className="italic text-gold">translates.</em>
              </>
            }
            light
            lead="A career built at the intersection of enterprise technology, digital strategy, and commercial outcomes — across some of the most demanding organisations in APAC."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px mt-16 bg-[rgba(180,175,168,0.12)]">
            {[
              {
                area: 'Enterprise SaaS & Pre-Sales',
                detail:
                  'Led solutions consulting and pre-sales strategy for a global technology business, building the ANZ operation from the ground up and driving significant revenue growth across the region.',
              },
              {
                area: 'Digital Transformation',
                detail:
                  'Advised enterprise clients across retail, financial services, and professional services on their most complex digital transformation programmes — from strategy through to execution.',
              },
              {
                area: 'AI & Generative AI Strategy',
                detail:
                  'Deep practitioner expertise in AI enablement — from identifying high-value use cases to implementing tools and building the organisational capability to use AI effectively and responsibly.',
              },
              {
                area: 'Ecommerce & MarTech',
                detail:
                  'Extensive experience across the full ecommerce and marketing technology landscape — platform strategy, stack architecture, CRO, and the measurement frameworks that connect activity to revenue.',
              },
              {
                area: 'Team Leadership & Capability Building',
                detail:
                  'Built and led high-performing solutions and strategy teams — with a track record of developing commercial capability, improving team performance, and building cultures of excellence.',
              },
              {
                area: 'Customer Experience & Research',
                detail:
                  'Passionate advocate for customer-centred design — combining qualitative research, behavioural data, and commercial rigour to build experiences that genuinely improve outcomes.',
              },
            ].map((item) => (
              <div
                key={item.area}
                className="bg-near-black border border-[rgba(180,175,168,0.12)] p-10"
              >
                <div className="w-8 h-px bg-gold mb-5" />
                <h3 className="font-display text-[22px] font-light text-warm-white mb-3">
                  {item.area}
                </h3>
                <p className="font-body text-[14px] text-warm-white/50 font-light leading-[1.75]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="bg-ivory py-[clamp(80px,10vw,140px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <SectionHeader
              tag="What Drives Me"
              heading={
                <>
                  Business with<br />
                  <em className="italic text-gold">purpose.</em>
                </>
              }
              lead="I started Lumii because I believed there was a better way to do advisory — more honest, more direct, more focused on real outcomes. These are the values that guide every engagement."
            />
            <div className="space-y-8">
              {[
                {
                  label: 'Radical honesty',
                  text: "I'll always tell you what you need to hear, not what you want to hear. If a tool isn't right for you, I'll say so. If a strategy isn't working, I'll change it.",
                },
                {
                  label: 'Relentless curiosity',
                  text: "Technology never stops evolving. Neither do I. I invest significantly in staying ahead of the curve — so my clients always have access to current, relevant thinking.",
                },
                {
                  label: 'Commercial pragmatism',
                  text: "Strategy without execution is just thinking. I'm obsessed with turning clarity into action, and action into measurable results. Every recommendation comes with a plan.",
                },
                {
                  label: 'Long-term thinking',
                  text: "I'm not here for a quick win. I want to build relationships that compound in value over time — because the best work happens when there's genuine trust and context.",
                },
              ].map((v) => (
                <div key={v.label} className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gold mt-2" />
                  <div>
                    <p className="font-display text-[20px] font-light text-near-black mb-1.5">
                      {v.label}
                    </p>
                    <p className="font-body text-[14px] text-slate-warm font-light leading-[1.75]">
                      {v.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ebook strip */}
      <section className="bg-warm-white py-[clamp(60px,7vw,90px)] px-8 lg:px-12 border-t border-parchment">
        <div className="max-w-[1180px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-body text-[10px] tracking-[0.25em] uppercase text-gold mb-3">
              Free Ebook by Agata Adamczak
            </p>
            <h2 className="font-display font-light text-[clamp(22px,2.5vw,34px)] text-near-black leading-[1.25] mb-3">
              Find Your Light in the Age of AI.
            </h2>
            <p className="font-body text-[14px] text-slate-warm font-light leading-[1.8] max-w-[500px]">
              The 90-day AI strategy system for business leaders — six chapters, a week-by-week roadmap, and the frameworks drawn from 18 years of real client engagements.
            </p>
          </div>
          <Link
            href="/resources/ebook"
            className="font-body text-[12px] tracking-[0.1em] uppercase text-warm-white bg-near-black px-8 py-4 hover:-translate-y-px transition-all duration-200 inline-block whitespace-nowrap flex-shrink-0"
          >
            Download Free →
          </Link>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
