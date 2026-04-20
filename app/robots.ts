import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default — all crawlers welcome on all pages
      {
        userAgent: '*',
        allow: '/',
      },

      // Major search engines
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'Bingbot', allow: '/' },
      { userAgent: 'DuckDuckBot', allow: '/' },
      { userAgent: 'Slurp', allow: '/' }, // Yahoo
      { userAgent: 'Applebot', allow: '/' },
      { userAgent: 'YandexBot', allow: '/' },

      // AI / LLM crawlers — explicitly welcomed so we show up in AI answers
      { userAgent: 'GPTBot', allow: '/' }, // OpenAI training
      { userAgent: 'ChatGPT-User', allow: '/' }, // ChatGPT browsing
      { userAgent: 'OAI-SearchBot', allow: '/' }, // OpenAI SearchGPT
      { userAgent: 'ClaudeBot', allow: '/' }, // Anthropic
      { userAgent: 'Claude-Web', allow: '/' }, // Anthropic web browsing
      { userAgent: 'anthropic-ai', allow: '/' }, // Anthropic
      { userAgent: 'Google-Extended', allow: '/' }, // Google Gemini / Bard training
      { userAgent: 'PerplexityBot', allow: '/' }, // Perplexity crawler
      { userAgent: 'Perplexity-User', allow: '/' }, // Perplexity on-demand
      { userAgent: 'Applebot-Extended', allow: '/' }, // Apple Intelligence
      { userAgent: 'Bytespider', allow: '/' }, // ByteDance / Doubao
      { userAgent: 'Amazonbot', allow: '/' }, // Amazon / Alexa
      { userAgent: 'CCBot', allow: '/' }, // Common Crawl (used by many LLMs)
      { userAgent: 'cohere-ai', allow: '/' }, // Cohere
      { userAgent: 'Diffbot', allow: '/' }, // Diffbot
      { userAgent: 'FacebookBot', allow: '/' }, // Meta AI training
      { userAgent: 'Meta-ExternalAgent', allow: '/' }, // Meta on-demand
      { userAgent: 'MistralAI-User', allow: '/' }, // Mistral AI
      { userAgent: 'YouBot', allow: '/' }, // You.com
    ],
    sitemap: 'https://lumiiadvisory.com/sitemap.xml',
    host: 'https://lumiiadvisory.com',
  }
}
