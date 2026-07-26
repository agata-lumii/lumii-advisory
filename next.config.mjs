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
   * Currently empty: the rebuild has not retired any URL. /how-we-work,
   * /services, /who-we-help/* and /ai-operating-system are all still live at
   * their original paths.
   */
  async redirects() {
    return []
  },
}

export default nextConfig
