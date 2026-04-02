import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-near-black pt-20 pb-0">
      <div className="max-w-[1180px] mx-auto px-8 lg:px-12">
        {/* Four column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[rgba(180,175,168,0.12)]">
          {/* Brand */}
          <div>
            <div className="font-display font-light text-[32px] tracking-[0.2em] uppercase text-warm-white leading-none mb-0.5">
              Lumii
            </div>
            <div className="font-body text-[8px] tracking-[0.3em] uppercase text-ash mb-6">
              Advisory
            </div>
            <p className="font-body text-[13px] text-warm-white/45 font-light leading-[1.7] max-w-[220px]">
              Illuminating the path forward in an age of digital complexity.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="font-body text-[10px] tracking-[0.25em] uppercase text-ash mb-6">Services</p>
            <ul className="space-y-4 list-none p-0 m-0">
              {[
                'Digital Strategy',
                'Customer Experience',
                'Ecommerce',
                'MarTech Advisory',
                'AI Enablement',
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="font-body text-[13px] text-warm-white/55 font-light hover:text-warm-white transition-colors duration-200"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Who We Help */}
          <div>
            <p className="font-body text-[10px] tracking-[0.25em] uppercase text-ash mb-6">Who We Help</p>
            <ul className="space-y-4 list-none p-0 m-0">
              {[
                'Marketers',
                'Estate Agents',
                'Sales Teams',
                'Retailers',
                'Professional Services',
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/who-we-help"
                    className="font-body text-[13px] text-warm-white/55 font-light hover:text-warm-white transition-colors duration-200"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn */}
          <div>
            <p className="font-body text-[10px] tracking-[0.25em] uppercase text-ash mb-6">Learn</p>
            <ul className="space-y-4 list-none p-0 m-0">
              <li>
                <Link
                  href="/learn"
                  className="font-body text-[13px] text-warm-white/55 font-light hover:text-warm-white transition-colors duration-200"
                >
                  AI Tools Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="font-body text-[13px] text-warm-white/55 font-light hover:text-warm-white transition-colors duration-200"
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="font-body text-[13px] text-warm-white/55 font-light hover:text-warm-white transition-colors duration-200"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/ai-readiness-checklist"
                  className="font-body text-[13px] text-warm-white/55 font-light hover:text-warm-white transition-colors duration-200"
                >
                  AI Readiness Checklist
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-case-studies"
                  className="font-body text-[13px] text-warm-white/55 font-light hover:text-warm-white transition-colors duration-200"
                >
                  AI Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="font-body text-[13px] text-warm-white/55 font-light hover:text-warm-white transition-colors duration-200"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-body text-[10px] tracking-[0.25em] uppercase text-ash mb-6">Company</p>
            <ul className="space-y-4 list-none p-0 m-0">
              <li>
                <Link
                  href="/about"
                  className="font-body text-[13px] text-warm-white/55 font-light hover:text-warm-white transition-colors duration-200"
                >
                  About Agata
                </Link>
              </li>
              <li>
                <Link
                  href="/how-we-work"
                  className="font-body text-[13px] text-warm-white/55 font-light hover:text-warm-white transition-colors duration-200"
                >
                  How We Work
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-body text-[13px] text-warm-white/55 font-light hover:text-warm-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-6">
          <p className="font-body text-[12px] text-warm-white/30 font-light">
            © 2026 Lumii Advisory. All rights reserved. Sydney, Australia.
          </p>
          <div className="flex gap-8">
            <Link
              href="/brand"
              className="font-body text-[12px] text-warm-white/30 font-light hover:text-warm-white/60 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/brand"
              className="font-body text-[12px] text-warm-white/30 font-light hover:text-warm-white/60 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
