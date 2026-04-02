import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/brand',
    },
    sitemap: 'https://lumii-advisory.com/sitemap.xml',
  }
}
