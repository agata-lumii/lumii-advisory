'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { verticals } from '@/lib/verticals'

const resourceLinks = [
  {
    href: '/learn',
    label: 'AI Tools Guide',
    title: 'AI Platform Guides',
    description: 'ChatGPT, Claude, Gemini, Copilot & Perplexity — every tool explained with ecosystem maps and industry use cases.',
  },
  {
    href: '/resources/ai-readiness-checklist',
    label: 'Free Assessment',
    title: 'AI Readiness Checklist',
    description: '35 questions across 7 dimensions. Get a scored maturity result in 15 minutes.',
  },
  {
    href: '/ai-case-studies',
    label: 'Case Studies',
    title: 'AI in Action',
    description: 'How Klarna, Goldman Sachs, Microsoft and others achieved measurable AI results.',
  },
  {
    href: '/faq',
    label: 'FAQ',
    title: 'Common Questions',
    description: 'Costs, timelines, data readiness, ROI — the questions leaders ask most.',
  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [whoDropdownOpen, setWhoDropdownOpen] = useState(false)
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false)
  const [mobileWhoOpen, setMobileWhoOpen] = useState(false)
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false)

  const whoRef = useRef<HTMLLIElement>(null)
  const resourcesRef = useRef<HTMLLIElement>(null)
  const whoTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const resourcesTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

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
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const closeAll = () => {
    setMenuOpen(false)
    setWhoDropdownOpen(false)
    setResourcesDropdownOpen(false)
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

        {/* Services */}
        <li>
          <Link
            href="/services"
            className="font-body text-[12px] tracking-[0.12em] uppercase font-semibold text-charcoal hover:text-near-black transition-colors duration-200 leading-none"
          >
            Services
          </Link>
        </li>

        {/* Who We Help dropdown */}
        <li ref={whoRef} className="relative" onMouseLeave={closeWho}>
          <button
            onClick={() => setWhoDropdownOpen(!whoDropdownOpen)}
            onMouseEnter={openWho}
            className="inline-flex items-center gap-1.5 font-body text-[12px] tracking-[0.12em] uppercase font-semibold text-charcoal hover:text-near-black transition-colors duration-200 cursor-pointer bg-transparent border-0 p-0 leading-none"
          >
            Who We Help
            {chevron(whoDropdownOpen)}
          </button>

          {whoDropdownOpen && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[680px] pt-3 z-50" onMouseEnter={openWho} onMouseLeave={closeWho}>
            <div
              className="bg-warm-white border border-parchment shadow-[0_8px_40px_rgba(30,28,26,0.10)]"
            >
              <div className="flex items-center justify-between px-8 py-5 border-b border-parchment">
                <span className="font-body text-[10px] tracking-[0.25em] uppercase text-ash">Who We Help</span>
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
            <div className="absolute top-full right-0 w-[360px] pt-3 z-50" onMouseEnter={openResources} onMouseLeave={closeResources}>
            <div
              className="bg-warm-white border border-parchment shadow-[0_8px_40px_rgba(30,28,26,0.10)]"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-parchment">
                <span className="font-body text-[10px] tracking-[0.25em] uppercase text-ash">Resources</span>
                <Link
                  href="/resources"
                  onClick={() => setResourcesDropdownOpen(false)}
                  className="font-body text-[10px] tracking-[0.15em] uppercase text-gold hover:text-charcoal transition-colors duration-200"
                >
                  View all →
                </Link>
              </div>

              {/* Resource links */}
              <div className="divide-y divide-parchment">
                {resourceLinks.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    onClick={() => setResourcesDropdownOpen(false)}
                    className="group flex items-start gap-4 px-6 py-5 hover:bg-ivory transition-colors duration-150"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="font-body text-[10px] tracking-[0.2em] uppercase text-gold mb-1 group-hover:text-charcoal transition-colors duration-150">
                        {r.label}
                      </p>
                      <p className="font-display text-[16px] font-normal text-near-black leading-snug mb-1">
                        {r.title}
                      </p>
                      <p className="font-body text-[12px] text-charcoal/70 font-light leading-[1.6]">
                        {r.description}
                      </p>
                    </div>
                    <span className="font-body text-[12px] text-gold/50 group-hover:text-gold group-hover:translate-x-0.5 transition-all duration-150 mt-1 flex-shrink-0">
                      →
                    </span>
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
      <Link
        href="/contact"
        className="hidden md:inline-block font-body text-[12px] tracking-[0.1em] uppercase text-near-black border border-near-black px-6 py-2.5 hover:bg-near-black hover:text-warm-white transition-all duration-200"
      >
        Book a Call
      </Link>

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

          <Link href="/services" onClick={closeAll} className="font-body text-[12px] tracking-[0.12em] uppercase text-slate-warm hover:text-near-black transition-colors py-3">
            Services
          </Link>

          {/* Who We Help accordion */}
          <div>
            <button
              onClick={() => setMobileWhoOpen(!mobileWhoOpen)}
              className="w-full flex items-center justify-between font-body text-[12px] tracking-[0.12em] uppercase text-slate-warm hover:text-near-black transition-colors py-3 bg-transparent border-0 text-left cursor-pointer"
            >
              Who We Help
              {chevron(mobileWhoOpen)}
            </button>
            {mobileWhoOpen && (
              <div className="pl-4 mb-2 border-l border-parchment flex flex-col gap-1">
                <Link href="/who-we-help" onClick={closeAll} className="font-body text-[11px] tracking-[0.15em] uppercase text-gold py-2">
                  View all →
                </Link>
                {verticals.map((v) => (
                  <Link
                    key={v.slug}
                    href={`/who-we-help/${v.slug}`}
                    onClick={closeAll}
                    className="font-body text-[11px] tracking-[0.1em] uppercase text-slate-warm hover:text-near-black transition-colors py-2"
                  >
                    {v.heading}
                  </Link>
                ))}
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
                <Link href="/resources" onClick={closeAll} className="font-body text-[11px] tracking-[0.15em] uppercase text-gold py-2">
                  View all →
                </Link>
                {resourceLinks.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    onClick={closeAll}
                    className="font-body text-[11px] tracking-[0.1em] uppercase text-slate-warm hover:text-near-black transition-colors py-2"
                  >
                    {r.title}
                  </Link>
                ))}
                <Link href="/learn" onClick={closeAll} className="font-body text-[11px] tracking-[0.1em] uppercase text-slate-warm hover:text-near-black transition-colors py-2">
                  AI Tools Guide
                </Link>
                <Link href="/how-we-work" onClick={closeAll} className="font-body text-[11px] tracking-[0.1em] uppercase text-slate-warm hover:text-near-black transition-colors py-2">
                  How We Work
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
          <Link
            href="/contact"
            onClick={closeAll}
            className="font-body text-[12px] tracking-[0.1em] uppercase text-near-black border border-near-black px-6 py-3 text-center hover:bg-near-black hover:text-warm-white transition-all mt-4"
          >
            Book a Call
          </Link>
        </div>
      )}
    </nav>
  )
}
