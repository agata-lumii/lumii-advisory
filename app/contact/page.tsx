import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Book an AI Strategy Discovery Call',
  description:
    'Book a free discovery call with Lumii Advisory. Talk to an AI strategy and digital transformation consultant about your business. Based in Sydney — working across Australia and APAC.',
}

export default function ContactPage() {
  return (
    <>
      {/* Dark hero banner */}
      <section className="bg-near-black pt-40 pb-24 px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-8">
            Get in Touch
          </p>
          <h1 className="font-display font-light text-[clamp(52px,5.5vw,82px)] leading-[1.08] text-warm-white mb-8 tracking-[-0.01em] max-w-[820px]">
            Let's find your <em className="italic text-gold">light.</em>
          </h1>
          <p className="font-body text-[17px] leading-[1.8] text-warm-white/60 max-w-[560px] font-light">
            Whether you're at the start of your digital journey or looking to accelerate what you've already built — a single conversation can change the direction.
          </p>
        </div>
      </section>

      {/* Two-column form section */}
      <section className="bg-warm-white py-[clamp(80px,10vw,140px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Left — info panel */}
            <div>
              <div className="w-8 h-px bg-gold mb-7" />
              <h2 className="font-display font-light text-[clamp(32px,3.5vw,48px)] leading-[1.15] text-near-black mb-6 tracking-[-0.01em]">
                Start the conversation.
              </h2>
              <p className="font-body text-[16px] leading-[1.8] text-slate-warm font-light mb-12">
                Fill in the form and we'll be in touch within one business day. Alternatively, connect directly via the details below.
              </p>

              {/* Contact details */}
              <div className="space-y-8">
                <div>
                  <p className="font-body text-[10px] tracking-[0.25em] uppercase text-ash mb-2">Email</p>
                  <a
                    href="mailto:hello@lumii.com.au"
                    className="font-display text-[20px] font-light text-near-black hover:text-gold transition-colors duration-200"
                  >
                    hello@lumii.com.au
                  </a>
                </div>
                <div>
                  <p className="font-body text-[10px] tracking-[0.25em] uppercase text-ash mb-2">Location</p>
                  <p className="font-display text-[20px] font-light text-near-black">
                    Sydney, Australia
                  </p>
                  <p className="font-body text-[13px] text-slate-warm font-light mt-1">
                    Working with clients across Australia and APAC
                  </p>
                </div>
                <div>
                  <p className="font-body text-[10px] tracking-[0.25em] uppercase text-ash mb-2">Availability</p>
                  <p className="font-display text-[20px] font-light text-near-black">
                    Currently accepting new clients
                  </p>
                  <p className="font-body text-[13px] text-slate-warm font-light mt-1">
                    Discovery calls available Monday to Friday, AEST
                  </p>
                </div>
                <div>
                  <p className="font-body text-[10px] tracking-[0.25em] uppercase text-ash mb-2">Connect</p>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-[20px] font-light text-near-black hover:text-gold transition-colors duration-200"
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </div>

              {/* Pull quote */}
              <div className="mt-14 pt-10 border-t border-parchment">
                <blockquote className="font-display text-[clamp(18px,2vw,24px)] italic font-light text-charcoal leading-[1.5]">
                  "The first conversation is always exploratory — no agenda, no pressure. Just a genuine discussion about your business and where you want to go."
                </blockquote>
                <p className="font-body text-[11px] tracking-[0.15em] uppercase text-ash mt-4">
                  Agata Adamczak, Founder
                </p>
              </div>
            </div>

            {/* Right — form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
