import type { Metadata } from 'next'
import CTABanner from '@/components/CTABanner'
import { TextLink } from '@/components/lumii/primitives'
import { Breadcrumbs, StatRow } from '@/components/lumii/seo'
import CompanyLogo from '@/components/CompanyLogo'

export const metadata: Metadata = {
  title: {
    absolute: 'AI Case Studies: Klarna, Goldman Sachs, Microsoft & More',
  },
  description:
    'Real AI implementations from Klarna, Goldman Sachs, Microsoft and others — strategies, timelines, ROI. Curated for mid-market relevance.',
  alternates: {
    canonical: 'https://lumiiadvisory.com/ai-case-studies',
  },
}

const stats = [
  {
    value: '78%',
    label: 'of organisations now use AI in at least one business function',
    source: 'McKinsey State of AI, 2025',
    url: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai',
  },
  {
    value: '$3.70',
    label: 'returned for every $1 invested in AI',
    source: 'Gartner, 2024',
    url: 'https://www.gartner.com/en/articles/take-this-view-to-assess-roi-for-generative-ai',
  },
  {
    value: '$4.4T',
    label: 'annual value AI could add to the global economy',
    source: 'McKinsey Global Institute, 2023',
    url: 'https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier',
  },
]

const caseStudies = [
  {
    company: 'Klarna',
    category: 'FinTech / Customer Service',
    logoBg: '#FFB3C7',
    headline: 'AI assistant handles two-thirds of all customer service chats',
    result: 'In its first month, Klarna\'s AI assistant handled 2.3 million conversations — the equivalent work of 700 full-time agents. Customer satisfaction scores remained on par with human agents, while resolution time dropped from 11 minutes to under 2 minutes.',
    metrics: [
      { value: '2.3M', label: 'conversations handled by AI in month one' },
      { value: '700', label: 'full-time agent equivalents replaced' },
      { value: '<2 min', label: 'average resolution time, down from 11 minutes' },
    ],
    tags: ['AI Enablement', 'Customer Experience', 'Automation'],
    source: 'Klarna press release, 2024',
    url: 'https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/',
  },
  {
    company: 'Morgan Stanley',
    category: 'Financial Services',
    logoBg: '#ffffff',
    headline: 'AI-powered assistant gives 16,000 financial advisors instant access to 100,000+ research documents',
    result: 'Morgan Stanley deployed an OpenAI-powered internal assistant that allows advisors to instantly query the firm\'s entire intellectual capital — eliminating hours of manual research per week and significantly improving the speed and quality of client advice.',
    metrics: [
      { value: '16,000+', label: 'financial advisors using the AI assistant' },
      { value: '100,000+', label: 'research documents instantly searchable' },
      { value: 'Hours', label: 'saved per advisor per week on research' },
    ],
    tags: ['AI Enablement', 'Digital Strategy', 'Professional Services'],
    source: 'Morgan Stanley / OpenAI case study, 2023',
    url: 'https://openai.com/index/morgan-stanley/',
  },
  {
    company: 'Walmart',
    category: 'Retail & Ecommerce',
    logoBg: '#0071CE',
    headline: 'AI-driven supply chain and personalisation delivers billions in efficiency gains',
    result: 'Walmart uses AI across demand forecasting, inventory management, and personalised search — reducing out-of-stock rates by 16%, improving delivery efficiency, and serving personalised recommendations to 240 million weekly customers. The AI-powered supply chain has saved billions in operational costs.',
    metrics: [
      { value: '16%', label: 'reduction in out-of-stock rates' },
      { value: '240M', label: 'customers served personalised experiences weekly' },
      { value: '$B', label: 'in supply chain savings attributed to AI optimisation' },
    ],
    tags: ['Ecommerce', 'Digital Strategy', 'AI Enablement'],
    source: 'Walmart corporate reports & MIT Sloan Review, 2024',
    url: 'https://corporate.walmart.com/news/2024/01/30/walmart-ai',
  },
  {
    company: 'Duolingo',
    category: 'Education & Technology',
    logoBg: '#58CC02',
    headline: 'AI-powered features drive 40% increase in active learners',
    result: 'Duolingo Max — powered by GPT-4 — introduced role-play conversations and personalised explanations at scale, enabling learning experiences previously only possible with a human tutor. Monthly active users grew 47% year-over-year following the AI launch.',
    metrics: [
      { value: '47%', label: 'year-on-year growth in monthly active users post-AI launch' },
      { value: 'GPT-4', label: 'powering personalised role-play and explanation features' },
      { value: '500M+', label: 'learners served across 40 languages' },
    ],
    tags: ['AI Enablement', 'Customer Experience', 'Education'],
    source: 'Duolingo Investor Day & OpenAI case study, 2024',
    url: 'https://openai.com/index/duolingo/',
  },
  {
    company: 'Coca-Cola',
    category: 'FMCG / Marketing',
    logoBg: '#F40009',
    headline: 'Generative AI accelerates creative production and personalisation at global scale',
    result: 'Coca-Cola partnered with Bain and OpenAI to build AI-powered marketing tools that generate personalised creative assets, accelerate campaign production, and analyse consumer sentiment in real time. The platform reduced creative production timelines by over 50% and enabled hyper-personalised campaigns at a scale previously impossible.',
    metrics: [
      { value: '>50%', label: 'reduction in creative production timelines' },
      { value: 'Global', label: 'AI-personalised campaigns across 200+ markets' },
      { value: 'Real-time', label: 'consumer sentiment analysis at brand scale' },
    ],
    tags: ['Digital Strategy', 'AI Enablement', 'MarTech Advisory'],
    source: 'Bain & Company / OpenAI / Coca-Cola case study, 2023',
    url: 'https://www.bain.com/insights/coca-cola-leveraging-openai-technology/',
  },
  {
    company: 'Goldman Sachs',
    category: 'Financial Services',
    logoBg: '#7399C6',
    headline: 'AI coding assistant generates code equivalent to 1,000 developers annually',
    result: 'Goldman Sachs deployed an internal AI coding tool used by 10,000+ engineers. The tool generates code, writes tests, and assists with debugging — with an estimated productivity uplift equivalent to adding 1,000 developers to the firm each year, without increasing headcount.',
    metrics: [
      { value: '10,000+', label: 'engineers using the internal AI coding assistant' },
      { value: '1,000', label: 'developer-equivalent productivity gain per year' },
      { value: '40%', label: 'of new code at Goldman now AI-assisted' },
    ],
    tags: ['AI Enablement', 'Digital Strategy', 'Professional Services'],
    source: 'Goldman Sachs / Bloomberg reporting, 2024',
    url: 'https://www.bloomberg.com/news/articles/2024-03-22/goldman-sachs-ai-assistant',
  },
  {
    company: 'IBM',
    category: 'Enterprise Technology',
    logoBg: '#ffffff',
    headline: 'AI and automation saves 3.9 million workforce hours in a single year',
    result: 'IBM deployed AI across HR, finance, legal, and IT operations — automating repetitive tasks and augmenting knowledge workers. In 2024 alone, this saved 3.9 million workforce hours, contributing to a projected $4.5 billion in productivity savings by end of 2025.',
    metrics: [
      { value: '3.9M', label: 'workforce hours saved in 2024' },
      { value: '$4.5B', label: 'projected productivity savings by end of 2025' },
      { value: '50+', label: 'internal AI use cases deployed across business functions' },
    ],
    tags: ['AI Enablement', 'Digital Strategy', 'Automation'],
    source: 'IBM Think Blog, 2025',
    url: 'https://www.ibm.com/think/insights/enterprise-transformation-extreme-productivity-ai',
  },
  {
    company: 'Microsoft',
    category: 'Technology / Productivity',
    logoBg: '#ffffff',
    headline: 'Copilot users complete tasks 29% faster and save 9 hours per month',
    result: 'Microsoft\'s own internal and external research on Microsoft 365 Copilot found that 70% of users reported being more productive, with an average task completion speed increase of 29%. SMB customers deploying Copilot saw up to 353% ROI according to a Forrester Total Economic Impact study.',
    metrics: [
      { value: '70%', label: 'of Copilot users report being more productive' },
      { value: '29%', label: 'faster task completion on average' },
      { value: '353%', label: 'ROI for SMBs per Forrester Total Economic Impact study' },
    ],
    tags: ['AI Enablement', 'Digital Strategy', 'Productivity'],
    source: 'Microsoft Work Trend Index & Forrester TEI, 2024',
    url: 'https://www.microsoft.com/en-us/worklab/work-trend-index',
  },
]

const additionalStats = [
  { value: '92%', label: 'of companies plan to increase AI investment over the next three years', source: 'McKinsey, 2025' },
  { value: '15.8%', label: 'average revenue increase reported by businesses using AI', source: 'Gartner, 2024' },
  { value: '22.6%', label: 'average productivity improvement from AI adoption', source: 'Gartner, 2024' },
  { value: '83%', label: 'of sales teams using AI saw revenue growth last year', source: 'Salesforce State of Sales, 2024' },
  { value: '7%', label: 'projected increase in global GDP from widespread AI adoption', source: 'Goldman Sachs, 2023' },
  { value: '60–70%', label: 'of time-consuming employee tasks can be automated by current AI tools', source: 'McKinsey Global Institute, 2023' },
  { value: '56%', label: 'wage premium for workers with high AI exposure', source: 'PwC, 2025' },
  { value: '85%', label: 'of CEOs expect positive ROI from scaled AI investments by 2027', source: 'IBM CEO Study, 2025' },
]

export default function AICaseStudiesPage() {
  return (
    <div className="lumii">
      <section className="page-intro section">
        <Breadcrumbs
          trail={[
            { name: 'Resources', href: '/resources' },
            { name: 'AI adoption, analysed', href: '/ai-case-studies' },
          ]}
        />
        <p className="eyebrow">PUBLISHED PROGRAMMES, ANALYSED</p>
        <h1>
          AI in action.
          <br />
          Real results.
        </h1>
        <p className="page-lead">
          The AI transformation is already underway. These are real examples of how leading global
          businesses — across every sector — are using AI to cut costs, accelerate growth, and build
          lasting competitive advantage.
        </p>
        <p className="intro-meta">
          Every programme below is publicly reported and sourced. These are companies I analyse — not
          Lumii clients.
        </p>
        <StatRow stats={stats.map((s) => ({ value: s.value, label: s.label, source: s.source, url: s.url }))} />
      </section>

      <section className="section" aria-labelledby="cases-title">
        <div className="section-top">
          <div>
            <p className="eyebrow">CASE STUDIES</p>
            <h2 id="cases-title">Eight businesses. Transformative results.</h2>
          </div>
        </div>
        <div className="case-list">
          {caseStudies.map((cs) => (
            <article className="case" key={cs.company}>
              <div className="case-identity">
                <div className="case-logo" style={{ backgroundColor: cs.logoBg }}>
                  <CompanyLogo company={cs.company} className="w-full h-full" />
                </div>
                <h3>{cs.company}</h3>
                <p className="eyebrow">{cs.category.toUpperCase()}</p>
                <div className="tag-list">
                  {cs.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="case-headline">{cs.headline}</h4>
                <p className="form-note case-result">{cs.result}</p>
                <div className="stat-row">
                  {cs.metrics.map((m) => (
                    <div className="stat" key={m.label}>
                      <strong className="small">{m.value}</strong>
                      <span>{m.label}</span>
                    </div>
                  ))}
                </div>
                <a className="text-link stack-top" href={cs.url} target="_blank" rel="noopener noreferrer">
                  Source: {cs.source} <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section method" aria-labelledby="data-title">
        <p className="eyebrow">THE DATA</p>
        <h2 id="data-title">The numbers behind the transformation.</h2>
        <div className="card-grid four stack-top">
          {additionalStats.map((s) => (
            <article className="content-card" key={s.value}>
              <p className="eyebrow">{s.source.toUpperCase()}</p>
              <h3>{s.value}</h3>
              <p>{s.label}</p>
            </article>
          ))}
        </div>
        <p className="section-description stack-top">
          Sources: McKinsey Global Institute (2023, 2025) · Goldman Sachs Research (2023) · Gartner
          (2024) · PwC Global AI Jobs Barometer (2025) · Salesforce State of Sales (2024) · IBM CEO
          Study (2025) · Stanford HAI AI Index (2025) · World Economic Forum Future of Jobs (2025)
        </p>
      </section>

      <section className="section secondary-offer" aria-labelledby="gap-title">
        <div>
          <p className="eyebrow">WHAT THIS MEANS FOR YOU</p>
          <h2 id="gap-title">The gap between early movers and everyone else is widening.</h2>
        </div>
        <div>
          <p>
            Klarna, Goldman Sachs, Walmart, and Microsoft didn’t get these results by accident. They
            had a clear strategy, the right partners, and the organisational willingness to move. The
            technology itself was the easy part.
          </p>
          <p>
            That’s the work Lumii does — helping businesses cut through the noise, identify the right
            use cases, and build the capability to use AI with purpose.
          </p>
          <blockquote className="callout">
            <p>
              “AI is the greatest unlock of our era — but only when used with purpose. I help you
              identify where AI genuinely accelerates your business, and build the capability to use it
              well.”
            </p>
            <p className="eyebrow">AGATA ADAMCZAK, FOUNDER</p>
          </blockquote>
          <TextLink href="/ai-enablement">How AI enablement works</TextLink>
          <TextLink href="/ai-courses">AI courses for your team</TextLink>
        </div>
      </section>

      <CTABanner variant="reading" />
    </div>
  )
}
