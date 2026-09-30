'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  navGroupsAfterInsights,
  navGroupsBeforeInsights,
  type NavGroup,
  type NavLink,
} from '@/lib/navigation'
import { isInterest, rememberInterest } from '@/lib/interest'

type LinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => void

export function NavAnchor({
  link,
  className,
  onClick,
}: {
  link: NavLink
  className?: string
  onClick?: LinkClick
}) {
  const interest = link.interest ? { 'data-interest': link.interest } : {}
  if (link.href.startsWith('mailto:') || link.href.startsWith('http')) {
    return (
      <a href={link.href} className={className} onClick={onClick} {...interest}>
        {link.label}
      </a>
    )
  }
  return (
    <Link href={link.href} className={className} onClick={onClick} {...interest}>
      {link.label}
    </Link>
  )
}

function MegaGroup({ group, onLinkClick }: { group: NavGroup; onLinkClick: LinkClick }) {
  return (
    <details className="nav-group">
      <summary>
        {group.label} <span aria-hidden="true">⌄</span>
      </summary>
      <div className="mega-panel">
        <div className="mega-feature">
          <p className="eyebrow">{group.feature.eyebrow}</p>
          {/* Styled as a heading but kept out of the document outline, so the
              navigation doesn't place headings ahead of each page's h1. */}
          <p className="mega-title">{group.feature.title}</p>
          <p>{group.feature.text}</p>
          <NavAnchor link={group.feature.link} className="text-link" onClick={onLinkClick} />
        </div>
        {group.columns.map((column) => (
          <div key={column.eyebrow}>
            <p className="eyebrow">{column.eyebrow}</p>
            {column.links.map((link) => (
              <NavAnchor key={link.href + link.label} link={link} onClick={onLinkClick} />
            ))}
          </div>
        ))}
      </div>
    </details>
  )
}

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const pathname = usePathname()

  const groups = useCallback(
    () =>
      Array.from(headerRef.current?.querySelectorAll<HTMLDetailsElement>('details.nav-group') ?? []),
    [],
  )

  const closeGroups = useCallback(
    (except?: HTMLDetailsElement) => {
      groups().forEach((group) => {
        if (group !== except) group.open = false
      })
    },
    [groups],
  )

  const closeNavigation = useCallback(() => {
    closeGroups()
    setMobileOpen(false)
  }, [closeGroups])

  // Close menus after any route change, including browser back/forward.
  useEffect(() => {
    closeNavigation()
  }, [pathname, closeNavigation])

  useEffect(() => {
    const header = headerRef.current
    if (!header) return
    const details = groups()

    // Opening one menu closes the others.
    const onToggle = (event: Event) => {
      const group = event.currentTarget as HTMLDetailsElement
      if (group.open) closeGroups(group)
    }
    details.forEach((group) => group.addEventListener('toggle', onToggle))

    const onDocumentClick = (event: MouseEvent) => {
      const target = event.target as Element | null
      const interestLink = target?.closest?.<HTMLElement>('[data-interest]')
      if (interestLink && isInterest(interestLink.dataset.interest)) {
        rememberInterest(interestLink.dataset.interest)
      }
      if (!header.contains(event.target as Node)) closeNavigation()
    }

    const onFocusOut = (event: FocusEvent) => {
      const next = event.relatedTarget as Node | null
      if (next && !header.contains(next)) closeNavigation()
    }

    // Escape closes the open menu (returning focus to its trigger), otherwise
    // the mobile menu (returning focus to the toggle).
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      const openGroup = groups().find((group) => group.open)
      if (openGroup) {
        openGroup.open = false
        openGroup.querySelector('summary')?.focus()
      } else if (toggleRef.current?.getAttribute('aria-expanded') === 'true') {
        closeNavigation()
        toggleRef.current.focus()
      }
    }

    const breakpoint = window.matchMedia('(max-width: 1000px)')
    const onBreakpoint = () => closeNavigation()

    document.addEventListener('click', onDocumentClick)
    header.addEventListener('focusout', onFocusOut)
    document.addEventListener('keydown', onKeyDown)
    breakpoint.addEventListener('change', onBreakpoint)
    return () => {
      details.forEach((group) => group.removeEventListener('toggle', onToggle))
      document.removeEventListener('click', onDocumentClick)
      header.removeEventListener('focusout', onFocusOut)
      document.removeEventListener('keydown', onKeyDown)
      breakpoint.removeEventListener('change', onBreakpoint)
    }
  }, [groups, closeGroups, closeNavigation])

  const onLinkClick: LinkClick = (event) => {
    const group = event.currentTarget.closest('details.nav-group')
    group?.querySelector('summary')?.focus()
    closeNavigation()
  }

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="header lumii" ref={headerRef}>
        <Link className="logo" href="/" aria-label="Lumii Advisory home">
          LUMII<span>ADVISORY</span>
        </Link>
        <button
          ref={toggleRef}
          type="button"
          className="mobile-toggle"
          aria-expanded={mobileOpen}
          aria-controls="main-nav"
          onClick={() => {
            closeGroups()
            setMobileOpen((open) => !open)
          }}
        >
          Menu <span aria-hidden="true">+</span>
        </button>
        <nav id="main-nav" aria-label="Main navigation" className={mobileOpen ? 'is-open' : undefined}>
          {navGroupsBeforeInsights.map((group) => (
            <MegaGroup key={group.label} group={group} onLinkClick={onLinkClick} />
          ))}
          <Link href="/insights" onClick={onLinkClick}>
            Insights
          </Link>
          {navGroupsAfterInsights.map((group) => (
            <MegaGroup key={group.label} group={group} onLinkClick={onLinkClick} />
          ))}
        </nav>
        <Link className="button small header-cta" href="/#enquire">
          Let’s talk <span aria-hidden="true">↗</span>
        </Link>
      </header>
    </>
  )
}
