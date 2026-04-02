import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'
import SectionTag from '@/components/SectionTag'
import CompanyLogo from '@/components/CompanyLogo'

export const metadata: Metadata = {
  title: 'Real AI Case Studies: Klarna, Goldman Sachs, Microsoft & More',
  description:
    'Real-world AI case studies from Klarna, Morgan Stanley, Walmart, Duolingo, Goldman Sachs, IBM, Coca-Cola, and Microsoft. See how leading businesses are using AI to reduce costs, increase productivity, and grow revenue.',
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
    <>
      {/* ── HERO ── */}
      <section className="bg-near-black pt-40 pb-28 px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-8 flex items-center gap-4">
            <span className="w-8 h-px bg-gold block" />
            AI in Business
          </p>
          <h1 className="font-display font-light text-[clamp(48px,5vw,78px)] leading-[1.08] text-warm-white mb-8 tracking-[-0.01em] max-w-[820px]">
            AI in action. <em className="italic text-gold">Real results.</em>
          </h1>
          <p className="font-body text-[17px] leading-[1.8] text-warm-white/55 font-light max-w-[600px] mb-16">
            The AI transformation is already underway. These are real examples of how leading global businesses — across every sector — are using AI to cut costs, accelerate growth, and build lasting competitive advantage.
          </p>

          {/* Three headline stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[rgba(180,175,168,0.12)]">
            {stats.map((s) => (
              <div key={s.value} className="bg-near-black px-8 py-8 border border-[rgba(180,175,168,0.12)]">
                <p className="font-display text-[clamp(36px,4vw,56px)] font-light text-gold leading-none mb-3">{s.value}</p>
                <p className="font-body text-[13px] text-warm-white/60 font-light leading-[1.55] mb-3">{s.label}</p>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="font-body text-[10px] tracking-[0.15em] uppercase text-ash/50 hover:text-ash transition-colors duration-200">
                  {s.source} ↗
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section className="bg-warm-white py-[clamp(80px,10vw,140px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <div className="mb-16">
            <SectionTag>Case Studies</SectionTag>
            <h2 className="font-display font-light text-[clamp(36px,4vw,58px)] leading-[1.12] text-near-black tracking-[-0.01em]">
              Eight businesses. <em className="italic text-gold">Transformative results.</em>
            </h2>
          </div>

          <div className="space-y-8">
            {caseStudies.map((cs, i) => (
              <div key={cs.company} className="bg-ivory border border-parchment overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-0">
                  {/* Left: company identity */}
                  <div className="bg-near-black p-10 flex flex-col justify-between">
                    <div>
                      {/* Company logo */}
                      <div
                        className="w-16 h-16 flex items-center justify-center mb-6 p-3"
                        style={{ backgroundColor: cs.logoBg }}
                      >
                        <CompanyLogo company={cs.company} className="w-full h-full" />
                      </div>
                      <h3 className="font-display text-[28px] font-light text-warm-white leading-[1.2] mb-2">{cs.company}</h3>
                      <p className="font-body text-[11px] tracking-[0.2em] uppercase text-ash">{cs.category}</p>
                    </div>
                    <div className="mt-10 flex flex-wrap gap-2">
                      {cs.tags.map((tag) => (
                        <span key={tag} className="font-body text-[10px] tracking-[0.1em] uppercase text-ash/60 border border-[rgba(180,175,168,0.2)] px-3 py-1.5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: content */}
                  <div className="p-10 lg:p-12">
                    <div className="w-8 h-px bg-gold mb-6" />
                    <h4 className="font-display text-[clamp(20px,2vw,26px)] font-light text-near-black leading-[1.35] mb-6">
                      {cs.headline}
                    </h4>
                    <p className="font-body text-[15px] text-slate-warm font-light leading-[1.8] mb-8">
                      {cs.result}
                    </p>

                    {/* Metrics row */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-parchment mb-8">
                      {cs.metrics.map((m) => (
                        <div key={m.label}>
                          <p className="font-display text-[clamp(24px,2.5vw,32px)] font-light text-near-black leading-none mb-2">{m.value}</p>
                          <p className="font-body text-[12px] text-slate-warm font-light leading-[1.5]">{m.label}</p>
                        </div>
                      ))}
                    </div>

                    <a
                      href={cs.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-[10px] tracking-[0.2em] uppercase text-ash hover:text-charcoal transition-colors duration-200"
                    >
                      Source: {cs.source} ↗
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADDITIONAL STATS ── */}
      <section className="bg-near-black py-[clamp(80px,10vw,140px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <SectionTag>The Data</SectionTag>
          <h2 className="font-display font-light text-[clamp(36px,4vw,58px)] leading-[1.12] text-warm-white tracking-[-0.01em] mb-16">
            The numbers behind the <em className="italic text-gold">transformation.</em>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(180,175,168,0.1)]">
            {additionalStats.map((s) => (
              <div key={s.value} className="bg-near-black border border-[rgba(180,175,168,0.1)] px-8 py-10">
                <p className="font-display text-[clamp(32px,3vw,44px)] font-light text-gold leading-none mb-4">{s.value}</p>
                <p className="font-body text-[13px] text-warm-white/60 font-light leading-[1.6] mb-4">{s.label}</p>
                <p className="font-body text-[10px] tracking-[0.12em] uppercase text-ash/40">{s.source}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-[12px] text-warm-white/25 font-light mt-8 leading-[1.6]">
            Sources: McKinsey Global Institute (2023, 2025) · Goldman Sachs Research (2023) · Gartner (2024) · PwC Global AI Jobs Barometer (2025) · Salesforce State of Sales (2024) · IBM CEO Study (2025) · Stanford HAI AI Index (2025) · World Economic Forum Future of Jobs (2025)
          </p>
        </div>
      </section>

      {/* ── LUMII BRIDGE ── */}
      <section className="bg-ivory py-[clamp(80px,10vw,140px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <SectionTag>What This Means for You</SectionTag>
              <h2 className="font-display font-light text-[clamp(36px,4vw,54px)] leading-[1.12] text-near-black tracking-[-0.01em] mb-8">
                The gap between early movers and everyone else is <em className="italic text-gold">widening.</em>
              </h2>
              <p className="font-body text-[16px] leading-[1.85] text-slate-warm font-light mb-6">
                Klarna, Goldman Sachs, Walmart, and Microsoft didn&rsquo;t get these results by accident. They had a clear strategy, the right partners, and the organisational willingness to move. The technology itself was the easy part.
              </p>
              <p className="font-body text-[16px] leading-[1.85] text-slate-warm font-light mb-10">
                That&rsquo;s the work Lumii does — helping ambitious businesses cut through the noise, identify the right use cases, and implement AI with purpose. Not for the sake of it. For the results.
              </p>
              <Link
                href="/contact"
                className="font-body text-[12px] tracking-[0.12em] uppercase text-near-black bg-gold px-10 py-4 hover:bg-[#d4b47a] hover:-translate-y-px transition-all duration-200 inline-block"
              >
                Start the Conversation
              </Link>
            </div>
            <div className="bg-near-black p-12 lg:p-14">
              <div className="w-10 h-px bg-gold mb-8" />
              <blockquote className="font-display text-[clamp(22px,2.5vw,30px)] italic font-light text-warm-white leading-[1.45] mb-10">
                &ldquo;AI is the greatest unlock of our era — but only when used with purpose. We help you identify where AI genuinely accelerates your business, and build the capability to use it well.&rdquo;
              </blockquote>
              <p className="font-display text-[18px] italic font-light text-gold">Agata Adamczak</p>
              <p className="font-body text-[11px] tracking-[0.15em] uppercase text-ash mt-1">Founder, Lumii Advisory</p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
