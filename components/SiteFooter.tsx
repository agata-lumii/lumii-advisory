import Link from 'next/link'
import { footerColumns, type NavLink } from '@/lib/navigation'

function FooterLink({ link }: { link: NavLink }) {
  if (link.href.startsWith('mailto:')) return <a href={link.href}>{link.label}</a>
  return <Link href={link.href}>{link.label}</Link>
}

export default function SiteFooter() {
  return (
    <footer className="site-footer lumii">
      <div className="footer-brand">
        <Link className="logo" href="/" aria-label="Lumii Advisory home">
          LUMII<span>ADVISORY</span>
        </Link>
        <p>Find your light. Put AI to work.</p>
      </div>
      <nav aria-label="Explore Lumii">
        {footerColumns.map((column) => (
          <div key={column.eyebrow}>
            <p className="eyebrow">{column.eyebrow}</p>
            {column.links.map((link) => (
              <FooterLink key={link.href} link={link} />
            ))}
          </div>
        ))}
      </nav>
      <div className="footer-base">
        <span>© {new Date().getFullYear()} Lumii Advisory · Sydney, Australia</span>
        <Link href="/privacy-policy">Privacy policy</Link>
        <Link href="/terms-of-service">Terms of service</Link>
        {/* Not in the reference footer: keeps the retained HTML sitemap reachable. */}
        <Link href="/site-map">Site map</Link>
      </div>
    </footer>
  )
}
