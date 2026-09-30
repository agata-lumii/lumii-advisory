// Netlify sets CONTEXT during builds. Only explicit preview contexts are
// non-indexable; a missing value is treated as production (see lib/indexing.ts).
const context = process.env.CONTEXT
const isPreview = context === 'deploy-preview' || context === 'branch-deploy'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    unoptimized: true,
  },

  /**
   * Permanent (301) redirects for any URL that is retired or renamed.
   * Every entry here must point at the closest equivalent live page — never at
   * the homepage — so link equity and AI-crawler context survive the move.
   *
   * This is the site's only redirect layer: netlify.toml has none, and there
   * is no _redirects file. Sources are exact paths, so /services/ai-visibility
   * and every other /services/* or /who-we-help/* route is untouched.
   *
   * `statusCode: 301` rather than `permanent: true`, which would send 308.
   * Retain these for at least a year, preferably indefinitely.
   */
  async redirects() {
    return [
      // Sept 2026 redesign: services consolidated into Work With Us.
      { source: '/services', destination: '/work-with-us', statusCode: 301 },
      // Sept 2026 redesign: the method now lives on the framework page.
      { source: '/how-we-work', destination: '/ai-operating-system', statusCode: 301 },
      // 30 Sept 2026: thin, near-duplicate industry pages retired in favour of
      // the Who I help overview. Keep in sync with RETIRED_VERTICAL_SLUGS in
      // lib/verticals.ts. Exact paths only; financial-services stays live.
      ...['estate-agents', 'hospitality', 'healthcare', 'startups', 'education'].map((slug) => ({
        source: `/who-we-help/${slug}`,
        destination: '/who-we-help',
        statusCode: 301,
      })),
    ]
  },

  // Deploy previews also send X-Robots-Tag, which covers non-HTML files too.
  // robots.txt stays open so crawlers can actually read the noindex.
  async headers() {
    if (!isPreview) return []
    return [
      {
        source: '/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
    ]
  },
}

export default nextConfig
