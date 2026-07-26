'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { verticals } from '@/lib/verticals'
import { disciplines } from '@/lib/disciplines'

const resourceLinks = [
  {
    number: '01',
    href: '/resources/ai-team-structure',
    label: 'New',
    title: 'AI Team Structure',
  },
  {
    number: '02',
    href: '/resources/ai-tools',
    label: 'New',
    title: 'AI Tools Directory',
  },
  {
    number: '03',
    href: '/learn',
    label: 'AI Tools Guide',
    title: 'AI Platform Guides',
  },
  {
    number: '04',
    href: '/resources/ai-readiness-checklist',
    label: 'Free Assessment',
    title: 'AI Readiness Checklist',
  },
  {
    number: '05',
    href: '/resources/ebook',
    label: 'Free Ebook',
    title: 'Find Your Light in the Age of AI',
  },
  {
    number: '06',
    href: '/ai-case-studies',
    label: 'Case Studies',
    title: 'AI in Action',
  },
  {
    number: '07',
    href: '/faq',
    label: 'FAQ',
    title: 'Common Questions',
  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [whoDropdownOpen, setWhoDropdownOpen] = useState(false)
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [mobileWhoOpen, setMobileWhoOpen] = useState(false)
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  const whoRef = useRef<HTMLLIElement>(null)
  const resourcesRef = useRef<HTMLLIElement>(null)
  const servicesRef = useRef<HTMLLIElement>(null)
  const whoTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const resourcesTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const servicesTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openServices = () => {
    if (servicesTimer.current) clearTimeout(servicesTimer.current)
    setServicesDropdownOpen(true)
  }
  const closeServices = () => {
    servicesTimer.current = setTimeout(() => setServicesDropdownOpen(false), 120)
  }
  const openWho = () => {
    if (whoTimer.current) clearTimeout(whoTimer.current)
    setWhoDropdownOpen(true)
  }
  const closeWho = () => {
    whoTimer.current = setTimeout(() => setWhoDropdownOpen(false), 120)
  }
  const openResources = () => {
    if (resourcesTimer.current) clearTimeout(resourcesTimer.current)
    setResourcesDropdownOpen(true)
  }
  const closeResources = () => {
    resourcesTimer.current = setTimeout(() => setResourcesDropdownOpen(false), 120)
  }

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (whoRef.current && !whoRef.current.contains(e.target as Node)) {
        setWhoDropdownOpen(false)
      }
      if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) {
        setResourcesDropdownOpen(false)
      }
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const closeAll = () => {
    setMenuOpen(false)
    setWhoDropdownOpen(false)
    setResourcesDropdownOpen(false)
    setServicesDropdownOpen(false)
  }

  const chevron = (open: boolean) => (
    <svg
      className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      viewBox="0 0 12 12"
      fill="none"
    >
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-[rgba(180,175,168,0.18)] bg-[rgba(253,252,250,0.92)] backdrop-blur-[12px] transition-all duration-300 ${
        scrolled ? 'px-8 lg:px-12 py-4' : 'px-8 lg:px-12 py-6'
      }`}
    >
      {/* Logo */}
      <Link
        href="/"
        className="font-display font-light text-[44px] tracking-[0.25em] uppercase text-near-black no-underline leading-none"
      >
        LUMII
        <span className="block font-body font-normal text-[16px] tracking-[0.35em] uppercase text-ash mt-0.5">
          ADVISORY
        </span>
      </Link>

      {/* Desktop nav */}
      <ul className="hidden md:flex gap-7 list-none m-0 p-0 items-center">

        {/* Services dropdown */}
        <li ref={servicesRef} className="relative" onMouseLeave={closeServices}>
          <button
            onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
            onMouseEnter={openServices}
            className="inline-flex items-center gap-1.5 font-body text-[12px] tracking-[0.12em] uppercase font-semibold text-charcoal hover:text-near-black transition-colors duration-200 cursor-pointer bg-transparent border-0 p-0 leading-none"
          >
            Services
            {chevron(servicesDropdownOpen)}
          </button>

          {servicesDropdownOpen && (
            <div
              className="absolute top-full left-1/2 -translate-x-1/2 w-[420px] pt-3 z-50"
              onMouseEnter={openServices}
              onMouseLeave={closeServices}
            >
              <div className="bg-warm-white border border-parchment shadow-[0_8px_40px_rgba(30,28,26,0.10)]">
                <div className="flex items-center justify-between px-8 py-5 border-b border-parchment">
                  <span className="font-body text-[10px] tracking-[0.25em] uppercase text-ash">
                    Six disciplines
                  </span>
                  <Link
                    href="/services"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="font-body text-[10px] tracking-[0.15em] uppercase text-gold hover:text-charcoal transition-colors duration-200"
                  >
                    View all →
                  </Link>
                </div>
                <div className="p-px bg-parchment/40 grid gap-px">
                  {disciplines.map((d) => (
                    <Link
                      key={d.number}
                      href={d.href ?? '/services'}
                      onClick={() => setServicesDropdownOpen(false)}
                      className="group flex items-baseline gap-4 bg-warm-white px-6 py-3.5 hover:bg-ivory transition-colors duration-150"
                    >
                      <span className="font-display text-[13px] text-gold/70 tracking-[0.1em] shrink-0">
                        {d.number}
                      </span>
                      <span className="font-body text-[13px] text-charcoal group-hover:text-near-black transition-colors">
                        {d.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </li>

        {/* The Framework — flagship POV page */}
        <li>
          <Link
            href="/ai-operating-system"
            className="font-body text-[12px] tracking-[0.12em] uppercase font-semibold text-charcoal hover:text-near-black transition-colors duration-200 leading-none"
          >
            The Framework
          </Link>
        </li>

        {/* Work With Us */}
        <li>
          <Link
            href="/work-with-us"
            className="font-body text-[12px] tracking-[0.12em] uppercase font-semibold text-charcoal hover:text-near-black transition-colors duration-200 leading-none"
          >
            Work With Us
          </Link>
        </li>

        {/* How We Work */}
        <li>
          <Link
            href="/how-we-work"
            className="font-body text-[12px] tracking-[0.12em] uppercase font-semibold text-charcoal hover:text-near-black transition-colors duration-200 leading-none"
          >
            How I work
          </Link>
        </li>

        {/* Who We Help dropdown */}
        <li ref={whoRef} className="relative" onMouseLeave={closeWho}>
          <button
            onClick={() => setWhoDropdownOpen(!whoDropdownOpen)}
            onMouseEnter={openWho}
            className="inline-flex items-center gap-1.5 font-body text-[12px] tracking-[0.12em] uppercase font-semibold text-charcoal hover:text-near-black transition-colors duration-200 cursor-pointer bg-transparent border-0 p-0 leading-none"
          >
            Who I help
            {chevron(whoDropdownOpen)}
          </button>

          {whoDropdownOpen && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[680px] pt-3 z-50" onMouseEnter={openWho} onMouseLeave={closeWho}>
            <div
              className="bg-warm-white border border-parchment shadow-[0_8px_40px_rgba(30,28,26,0.10)]"
            >
              <div className="flex items-center justify-between px-8 py-5 border-b border-parchment">
                <span className="font-body text-[10px] tracking-[0.25em] uppercase text-ash">Who I help</span>
                <Link
                  href="/who-we-help"
                  onClick={() => setWhoDropdownOpen(false)}
                  className="font-body text-[10px] tracking-[0.15em] uppercase text-gold hover:text-charcoal transition-colors duration-200"
                >
                  View all →
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-px bg-parchment/40 p-px">
                {verticals.map((v) => (
                  <Link
                    key={v.slug}
                    href={`/who-we-help/${v.slug}`}
                    onClick={() => setWhoDropdownOpen(false)}
                    className="group flex items-start gap-4 bg-warm-white px-6 py-4 hover:bg-ivory transition-colors duration-150"
                  >
                    <span className="font-display text-[11px] text-gold/60 tracking-[0.08em] flex-shrink-0 mt-0.5 group-hover:text-gold transition-colors duration-150">
                      {v.number}
                    </span>
                    <div className="min-w-0">
                      <p className="font-body text-[11px] tracking-[0.2em] uppercase text-ash mb-0.5 group-hover:text-gold transition-colors duration-150">
                        {v.category}
                      </p>
                      <p className="font-display text-[15px] font-normal text-near-black group-hover:text-charcoal leading-snug truncate">
                        {v.heading}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            </div>
          )}
        </li>

        {/* Insights */}
        <li>
          <Link
            href="/insights"
            className="font-body text-[12px] tracking-[0.12em] uppercase font-semibold text-charcoal hover:text-near-black transition-colors duration-200 leading-none"
          >
            Insights
          </Link>
        </li>

        {/* Resources dropdown */}
        <li ref={resourcesRef} className="relative" onMouseLeave={closeResources}>
          <button
            onClick={() => setResourcesDropdownOpen(!resourcesDropdownOpen)}
            onMouseEnter={openResources}
            className="inline-flex items-center gap-1.5 font-body text-[12px] tracking-[0.12em] uppercase font-semibold text-charcoal hover:text-near-black transition-colors duration-200 cursor-pointer bg-transparent border-0 p-0 leading-none"
          >
            Resources
            {chevron(resourcesDropdownOpen)}
          </button>

          {resourcesDropdownOpen && (
            <div className="absolute top-full right-0 w-[680px] pt-3 z-50" onMouseEnter={openResources} onMouseLeave={closeResources}>
            <div
              className="bg-warm-white border border-parchment shadow-[0_8px_40px_rgba(30,28,26,0.10)]"
            >
              <div className="flex items-center justify-between px-8 py-5 border-b border-parchment">
                <span className="font-body text-[10px] tracking-[0.25em] uppercase text-ash">Resources</span>
                <Link
                  href="/resources"
                  onClick={() => setResourcesDropdownOpen(false)}
                  className="font-body text-[10px] tracking-[0.15em] uppercase text-gold hover:text-charcoal transition-colors duration-200"
                >
                  View all →
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-px bg-parchment/40 p-px">
                {resourceLinks.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    onClick={() => setResourcesDropdownOpen(false)}
                    className="group flex items-start gap-4 bg-warm-white px-6 py-4 hover:bg-ivory transition-colors duration-150"
                  >
                    <span className="font-display text-[11px] text-gold/60 tracking-[0.08em] flex-shrink-0 mt-0.5 group-hover:text-gold transition-colors duration-150">
                      {r.number}
                    </span>
                    <div className="min-w-0">
                      <p className="font-body text-[11px] tracking-[0.2em] uppercase text-ash mb-0.5 group-hover:text-gold transition-colors duration-150">
                        {r.label}
                      </p>
                      <p className="font-display text-[15px] font-normal text-near-black group-hover:text-charcoal leading-snug truncate">
                        {r.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            </div>
          )}
        </li>

        {/* About */}
        <li>
          <Link
            href="/about"
            className="font-body text-[12px] tracking-[0.12em] uppercase font-semibold text-charcoal hover:text-near-black transition-colors duration-200 leading-none"
          >
            About
          </Link>
        </li>

        {/* Contact */}
        <li>
          <Link
            href="/contact"
            className="font-body text-[12px] tracking-[0.12em] uppercase font-semibold text-charcoal hover:text-near-black transition-colors duration-200 leading-none"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* CTA */}
      <a
        href="https://calendly.com/agata-lumiiadvisory"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:inline-block font-body text-[12px] tracking-[0.1em] uppercase text-near-black border border-near-black px-6 py-2.5 hover:bg-near-black hover:text-warm-white transition-all duration-200"
      >
        Book a Call
      </a>

      {/* Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-px bg-near-black transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-[10px]' : ''}`} />
        <span className={`block w-6 h-px bg-near-black transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-px bg-near-black transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-warm-white border-t border-parchment py-6 px-8 md:hidden flex flex-col max-h-[80vh] overflow-y-auto">

          {/* Services accordion */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between font-body text-[12px] tracking-[0.12em] uppercase text-slate-warm hover:text-near-black transition-colors py-3 bg-transparent border-0 text-left cursor-pointer"
            >
              Services
              {chevron(mobileServicesOpen)}
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 mb-2 border-l border-parchment flex flex-col gap-1">
                {disciplines.map((d) => (
                  <Link
                    key={d.number}
                    href={d.href ?? '/services'}
                    onClick={closeAll}
                    className="font-body text-[13px] text-slate-warm hover:text-near-black transition-colors py-2"
                  >
                    {d.name}
                  </Link>
                ))}
                <Link
                  href="/services"
                  onClick={closeAll}
                  className="font-body text-[11px] tracking-[0.15em] uppercase text-gold py-2"
                >
                  View all services →
                </Link>
              </div>
            )}
          </div>

          <Link href="/ai-operating-system" onClick={closeAll} className="font-body text-[12px] tracking-[0.12em] uppercase text-slate-warm hover:text-near-black transition-colors py-3">
            The Framework
          </Link>

          <Link href="/work-with-us" onClick={closeAll} className="font-body text-[12px] tracking-[0.12em] uppercase text-slate-warm hover:text-near-black transition-colors py-3">
            Work With Us
          </Link>

          <Link href="/how-we-work" onClick={closeAll} className="font-body text-[12px] tracking-[0.12em] uppercase text-slate-warm hover:text-near-black transition-colors py-3">
            How I work
          </Link>

          {/* Who We Help accordion */}
          <div>
            <button
              onClick={() => setMobileWhoOpen(!mobileWhoOpen)}
              className="w-full flex items-center justify-between font-body text-[12px] tracking-[0.12em] uppercase text-slate-warm hover:text-near-black transition-colors py-3 bg-transparent border-0 text-left cursor-pointer"
            >
              Who I help
              {chevron(mobileWhoOpen)}
            </button>
            {mobileWhoOpen && (
              <div className="pl-4 mb-2 border-l border-parchment flex flex-col gap-1">
                {verticals.slice(0, 4).map((v) => (
                  <Link
                    key={v.slug}
                    href={`/who-we-help/${v.slug}`}
                    onClick={closeAll}
                    className="font-body text-[11px] tracking-[0.1em] uppercase text-slate-warm hover:text-near-black transition-colors py-2"
                  >
                    {v.heading}
                  </Link>
                ))}
                <Link href="/who-we-help" onClick={closeAll} className="font-body text-[11px] tracking-[0.15em] uppercase text-gold py-2">
                  See all →
                </Link>
              </div>
            )}
          </div>

          <Link href="/insights" onClick={closeAll} className="font-body text-[12px] tracking-[0.12em] uppercase text-slate-warm hover:text-near-black transition-colors py-3">
            Insights
          </Link>

          {/* Resources accordion */}
          <div>
            <button
              onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
              className="w-full flex items-center justify-between font-body text-[12px] tracking-[0.12em] uppercase text-slate-warm hover:text-near-black transition-colors py-3 bg-transparent border-0 text-left cursor-pointer"
            >
              Resources
              {chevron(mobileResourcesOpen)}
            </button>
            {mobileResourcesOpen && (
              <div className="pl-4 mb-2 border-l border-parchment flex flex-col gap-1">
                {resourceLinks.slice(0, 4).map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    onClick={closeAll}
                    className="font-body text-[11px] tracking-[0.1em] uppercase text-slate-warm hover:text-near-black transition-colors py-2"
                  >
                    {r.title}
                  </Link>
                ))}
                <Link href="/resources" onClick={closeAll} className="font-body text-[11px] tracking-[0.15em] uppercase text-gold py-2">
                  See all →
                </Link>
              </div>
            )}
          </div>

          <Link href="/about" onClick={closeAll} className="font-body text-[12px] tracking-[0.12em] uppercase text-slate-warm hover:text-near-black transition-colors py-3">
            About
          </Link>
          <Link href="/contact" onClick={closeAll} className="font-body text-[12px] tracking-[0.12em] uppercase text-slate-warm hover:text-near-black transition-colors py-3">
            Contact
          </Link>
          <a
            href="https://calendly.com/agata-lumiiadvisory"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeAll}
            className="font-body text-[12px] tracking-[0.1em] uppercase text-near-black border border-near-black px-6 py-3 text-center hover:bg-near-black hover:text-warm-white transition-all mt-4"
          >
            Book a Call
          </a>
        </div>
      )}
    </nav>
  )
}
