export interface Article {
  slug: string
  title: string
  excerpt: string
  metaTitle: string
  metaDescription: string
  date: string
  readTime: string
  category: string
  content: { heading?: string; body: string }[]
  tags: string[]
  cta?: { label: string; title: string; description: string; href: string }
}

export const articles: Article[] = [
  {
    slug: 'emerging-ai-roles-future',
    title: 'The New AI Org: Roles Being Created Right Now — and the Jobs Coming in the Next Five Years',
    metaTitle: 'The New AI Org Chart: Roles Being Hired Right Now (2026)',
    metaDescription:
      'From CAIO to AI Architect: 8 new roles forward-thinking businesses are hiring for now — and the 5-year roadmap for what comes next. 8-min read.',
    excerpt:
      'The org chart is changing. Not in five years — right now. As AI moves from experiment to infrastructure, a new class of roles is emerging inside forward-thinking businesses. Some are entirely new. Some are reinventions of titles that existed decades ago. And a handful are appearing so quietly that most organisations will not notice they need them until the gap is already expensive.',
    date: '2026-04-15',
    readTime: '8 min read',
    category: 'Leadership',
    tags: ['AI Team', 'Future of Work', 'CAIO', 'AI Architect', 'Hiring'],
    cta: {
      label: 'Free Resource',
      title: 'AI Team Structure Guide',
      description: 'Every AI role mapped out — what it does, when to hire it, and how your team evolves over 5 years.',
      href: '/resources/ai-team-structure',
    },
    content: [
      {
        body: "The org chart is changing. Not in five years — right now. As AI moves from experiment to infrastructure, a new class of roles is emerging inside forward-thinking businesses. Some are entirely new. Some are reinventions of titles that existed in earlier technology cycles. And a handful are appearing so quietly that most organisations will not notice they need them until the gap is already expensive.",
      },
      {
        heading: 'The Role That Did Not Exist Three Years Ago: Chief AI Officer',
        body: "The Chief AI Officer — or CAIO — is becoming one of the fastest-growing C-suite titles globally. LinkedIn reported a 73% increase in CAIO and Head of AI postings between 2022 and 2024. Unlike the CTO, who owns technology infrastructure, the CAIO owns the AI strategy: where the organisation places its AI bets, how AI governance is structured, and how AI capability is built across the business. Companies including Walmart, Airbnb, and Johnson & Johnson have appointed CAIOs in the past 18 months. For mid-market businesses, the nearest equivalent is a Head of AI or AI Director — a dedicated leader with a mandate that spans technology, operations, and culture. The title matters less than the accountability. Someone needs to own this.",
      },
      {
        heading: 'The AI Architect: The Role That Makes AI Actually Scale',
        body: "If the CAIO decides what AI the business should build, the AI Architect decides how. This is a technical role — part solutions architect, part data engineer, part ML specialist — responsible for designing the systems and infrastructure that make AI work at scale. AI Architects evaluate tooling, define integration patterns, set standards for how AI models are trained, monitored, and retired, and ensure that what gets built in a pilot can actually reach production. Most businesses discover they need this role about six months into a scaling programme, when they realise that a dozen disconnected AI pilots do not add up to an AI capability. As AI systems become more complex and interconnected, the AI Architect becomes the connective tissue between strategy and execution.",
      },
      {
        heading: 'AI Product Manager: A New Kind of PM',
        body: "The AI Product Manager sits at the intersection of business and technology — translating commercial problems into AI use cases, prioritising the roadmap, and ensuring that AI tools actually get adopted by the people they are built for. This is a distinct role from a traditional product manager. AI PMs need to understand model capabilities and limitations, manage the expectation gap between what AI promises and what it delivers, and handle the unique challenge of products that can fail in ways traditional software cannot. The role is appearing first inside technology companies but is spreading rapidly into retail, financial services, and professional services as AI programmes mature.",
      },
      {
        heading: 'Prompt Engineer: The Most Misunderstood New Role',
        body: "The prompt engineer is perhaps the most misunderstood role in the emerging AI org — and the one most likely to evolve fastest. At its core, it is about getting the best possible outputs from AI systems by designing the inputs: the prompts, the context structures, the constraints, the guardrails. In enterprise settings, this means building prompt libraries, designing AI workflows, and ensuring AI tools produce consistent, high-quality outputs across the business. The title will likely shift — AI Interaction Designer and AI UX Specialist are emerging alternatives — but the function is here to stay. Every business that deploys AI at scale needs people who understand, systematically, how to direct it effectively.",
      },
      {
        heading: 'AI Ethics & Governance Officer: No Longer Optional',
        body: "Regulatory pressure is building globally. The EU AI Act came into effect in 2025. Australia is actively developing its AI governance framework. For businesses operating in regulated industries — finance, healthcare, legal, education — the AI Ethics and Governance Officer is no longer optional. This role oversees how AI is used responsibly: what data it is trained on, where bias could emerge, how decisions made by AI are documented and auditable, and what the incident response process looks like when things go wrong. In smaller organisations, this function often sits with the General Counsel or Chief Risk Officer. As AI use scales, it typically becomes a dedicated role. The businesses that wait for a regulatory incident to make this hire will find the lesson an expensive one.",
      },
      {
        heading: 'The Jobs Being Born Right Now',
        body: "Beyond the roles above, a second wave of AI-adjacent titles is beginning to appear in job boards and org charts. AI Operations Manager — responsible for the day-to-day running of AI systems in production, monitoring performance, managing the tooling stack, handling incidents. AI Trainer or RLHF Specialist — responsible for curating the training data and human feedback loops that determine how well a custom AI model performs. Human-AI Interaction Designer — designing the experience of working alongside AI, not just the prompts but the entire workflow, the handoffs, the trust signals. These roles do not yet have standard titles or descriptions. In three years, they will.",
      },
      {
        heading: 'What AI Teams Look Like in 2–5 Years',
        body: "The trajectory is becoming clear. In two to three years, most organisations above 200 people will have a dedicated AI function — typically a Head of AI with a team of four to eight, covering engineering, product, and governance. In five years, AI will be embedded across every department, with local AI champions in marketing, operations, finance, and customer service, all reporting up to a CAIO who sits at board level. The businesses building this capability now — even in a modest, pragmatic way — will have a significant structural advantage over those that wait for the function to become standard practice.",
      },
      {
        heading: 'The First Practical Step',
        body: "You do not need a full AI function to get started. Most businesses at the early stages of AI adoption need one thing above all else: an internal owner. A single person — whether that is an existing head of technology, a senior operations leader, or a newly hired Head of AI — who has the mandate, the time, and the accountability to drive the programme forward. From that foundation, the team grows as the programme grows. The mistake is not moving too slowly. The mistake is having no one responsible at all. See our full AI Team Structure guide for a role-by-role breakdown of every position, when to hire it, and what the AI org looks like at each stage of maturity.",
      },
    ],
  },
  {
    slug: 'ai-readiness-gap',
    title: 'The AI Readiness Gap: Why Most Businesses Get Stuck at Pilot Stage',
    metaTitle: 'The AI Readiness Gap: Why 78% of AI Pilots Stall',
    metaDescription:
      '78% of organisations now use AI — but few have moved past pilot. The 5 gaps that block scale, and how mid-market leaders close them. 7-min read.',
    excerpt:
      'Seventy-eight percent of organisations now use AI in at least one function. Yet only a fraction have moved beyond isolated pilots to enterprise-wide value. Why does the gap exist — and how do you close it?',
    date: '2026-03-12',
    readTime: '7 min read',
    category: 'AI Strategy',
    tags: ['AI Readiness', 'Pilot to Scale', 'Transformation'],
    content: [
      {
        body: 'Seventy-eight percent of organisations are now using AI in at least one business function. Yet only a fraction have moved beyond isolated pilots to enterprise-wide value. The gap between "we have an AI pilot running" and "AI is driving measurable business outcomes at scale" is where most transformation programmes quietly die.',
      },
      {
        heading: 'The Three Failure Modes',
        body: 'After working across dozens of organisations, we see the same failure modes repeating. The first is the technology-first trap: a business buys an AI tool because it won the analyst quadrant, deploys it in one team, and declares victory. Months later, usage has dropped and no one can articulate the business outcome it was supposed to drive.',
      },
      {
        body: "The second is the data debt problem. AI systems are only as good as the data that powers them. Businesses that haven't invested in data governance, quality, and accessibility find that their AI tools produce outputs no one trusts. The third — and most insidious — is the capability gap. Rolling out Microsoft Copilot to 400 staff without training or clear use cases results in 400 people using it to draft emails and nothing more.",
      },
      {
        heading: 'What Scaling Actually Requires',
        body: 'Scaling AI is not a technology problem. It is an organisational problem. The businesses that successfully move from pilot to enterprise-wide adoption share three characteristics: executive sponsorship that is active (not passive), a data foundation that is fit for purpose, and a capability-building programme that is ongoing — not a one-day training event.',
      },
      {
        body: 'The McKinsey Global Institute estimates that organisations using AI at scale are 1.5 times more likely to report revenue growth above their industry average. The compound effect of getting AI right across marketing, operations, customer service, and finance is significant. The compound effect of staying stuck at pilot is equally significant — just in the other direction.',
      },
      {
        heading: 'A Practical First Step',
        body: 'Before investing further in AI tooling, conduct an honest readiness assessment across six dimensions: strategy and leadership alignment, data infrastructure quality, technology integration capability, workforce skills and literacy, process suitability for AI, and governance frameworks. Knowing where you actually stand — not where you hope to stand — is the only way to build an AI programme that lasts.',
      },
      {
        body: "If you're not sure where your business sits on that spectrum, our AI Readiness Checklist is a useful starting point. It takes 15 minutes and gives you a clear, actionable picture of your current position and where to focus first.",
      },
    ],
  },
  {
    slug: 'ceo-questions-ai-investment',
    title: '5 Questions Every CEO Should Ask Before Investing in AI',
    metaTitle: '5 Questions Every CEO Should Ask Before Investing in AI',
    metaDescription:
      'The 5 questions that separate AI investments that compound from those that disappear. A framework for CEOs and boards before signing the budget. 5-min read.',
    excerpt:
      "AI investment is accelerating across every sector. But the businesses seeing the highest returns aren't the ones moving fastest — they're the ones moving with clarity. Before committing budget, ask these five questions.",
    date: '2026-03-24',
    readTime: '5 min read',
    category: 'Leadership',
    tags: ['AI Strategy', 'C-Suite', 'Investment'],
    content: [
      {
        body: "AI investment is accelerating across every sector. Gartner estimates that organisations now return an average of $3.70 for every $1 invested in AI — but that average conceals enormous variance. The businesses seeing the highest returns aren't the ones moving fastest. They're the ones moving with clarity. Before committing significant budget to AI, every CEO should be able to answer these five questions.",
      },
      {
        heading: '1. What specific business problem are we solving?',
        body: '"We need to adopt AI" is not a business problem. The most successful AI programmes begin with a clear, measurable challenge: reducing cost-to-serve by 30%, cutting quote turnaround from three days to three hours, or reducing customer churn by identifying at-risk accounts earlier. Vague objectives produce vague results and disengaged boards.',
      },
      {
        heading: '2. Is our data actually ready?',
        body: 'This is the question most teams skip. AI requires clean, accessible, well-governed data — and most mid-market businesses are operating on a patchwork of legacy systems, spreadsheets, and partially integrated platforms. Before spending on AI, understand the state of your data. A data audit is rarely glamorous, but it is almost always revelatory.',
      },
      {
        heading: '3. Who owns this inside the business?',
        body: "AI programmes without a clear internal owner fail. Not because the technology doesn't work, but because no one is accountable for adoption, iteration, and results. Whether that's a Chief Digital Officer, a dedicated AI lead, or a senior operations manager with the mandate — identify the owner before you start.",
      },
      {
        heading: '4. How will we measure success?',
        body: "Define your metrics before you begin, not six months in. What does good look like at 90 days? At 12 months? Revenue impact, time saved, error rate reduction, customer satisfaction improvement — pick the metrics that matter to your P&L and commit to tracking them from day one.",
      },
      {
        heading: '5. What happens to our people?',
        body: "AI will change how some roles function. In some cases, it will eliminate tasks entirely. Being transparent with your team about what is changing, why, and what it means for their roles is not just ethically right — it is strategically necessary. Organisations that involve their people in AI adoption see significantly higher uptake than those that impose it from above.",
      },
      {
        body: "These questions don't require a computer science degree. They require rigorous leadership. The businesses that get AI right are those where the CEO asks the hard questions upfront — rather than discovering the answers at a costly postmortem twelve months later.",
      },
    ],
  },
  {
    slug: 'ai-business-case-board',
    title: 'How to Build an AI Business Case Your Board Will Approve',
    metaTitle: 'How to Build an AI Business Case Your Board Will Approve',
    metaDescription:
      "Most AI business cases fail not because boards are sceptical — but because they don't speak the board's language. The 6-part template that does. 6-min read.",
    excerpt:
      "Board approval for AI investment is harder to secure than most expect. Not because boards are sceptical of AI — but because most business cases fail to speak the board's language. Here's how to change that.",
    date: '2026-02-18',
    readTime: '6 min read',
    category: 'AI Strategy',
    tags: ['Business Case', 'Board', 'ROI', 'AI Investment'],
    content: [
      {
        body: "Board approval for AI investment is harder to secure than most technology leaders expect. Not because boards are sceptical of AI — 91% of senior executives believe AI will be critical to business success within five years. It's because most business cases fail to speak the board's language: risk, return, and accountability.",
      },
      {
        heading: 'The Three Things Boards Actually Want to Know',
        body: "After helping numerous organisations present AI investment cases to their boards, we've found that the approval questions almost always boil down to three things: What is the financial return and how confident are we in those numbers? What could go wrong and how are we managing it? Who is accountable for delivery?",
      },
      {
        body: "A well-structured AI business case addresses all three directly. It does not lead with technology capabilities or competitor benchmarks — it leads with business outcomes, expressed in the language of your P&L.",
      },
      {
        heading: 'Building Your Financial Model',
        body: 'AI ROI calculations should include both direct savings and revenue uplift. Direct savings typically cover labour efficiency (time saved on manual tasks, converted to FTE equivalents), error reduction (cost of rework, compliance breaches, customer remediation), and infrastructure savings. Revenue uplift typically includes improved conversion, faster sales cycles, and reduced churn.',
      },
      {
        body: 'Be conservative in your base case. A board that approves a 40% efficiency gain and gets 25% is disappointed. A board that approves a 20% gain and gets 25% becomes an advocate. Conservative, credible numbers are more likely to get approved — and more likely to build trust when you return for the next phase of investment.',
      },
      {
        heading: 'Addressing Risk Head-On',
        body: "Don't wait for the board to raise risks — bring them. Data privacy and security, model accuracy and bias, vendor dependency, regulatory compliance, workforce impact. For each risk, present your mitigation: how you will manage it, who owns it, and what the fallback plan is. Boards that feel you have thought through the risks are far more likely to approve.",
      },
      {
        heading: 'Phasing Your Investment',
        body: 'Structure your investment ask in phases. Phase 1 is typically a focused pilot with a defined success metric and a modest budget. Phase 2 is scaled deployment contingent on Phase 1 results. Phase 3 is enterprise-wide with the full business case. This approach reduces the financial commitment at each decision gate and gives the board confidence that you are not betting the farm on a single implementation.',
      },
      {
        body: "The most successful AI business cases we've seen are not the most technically sophisticated. They are the most commercially rigorous — connecting AI investment directly to the strategic priorities the board already cares about, with clear accountability and credible numbers. That is a language every board speaks.",
      },
    ],
  },
  {
    slug: 'cost-of-delayed-ai-adoption',
    title: "The Hidden Cost of Waiting: What Delayed AI Adoption Is Costing Your Business",
    metaTitle: 'The Hidden Cost of Delayed AI Adoption (And How to Quantify It)',
    metaDescription:
      "'Wait and see' on AI feels prudent. For most mid-market businesses it's the most expensive decision of the decade. Here's how to size the cost. 5-min read.",
    excerpt:
      "Deciding to 'wait and see' on AI feels like prudence. But for many businesses, it is the most expensive strategic decision they will make this decade. The cost of delay is real, compounding, and largely invisible until it's too late.",
    date: '2026-02-05',
    readTime: '5 min read',
    category: 'AI Strategy',
    tags: ['AI Adoption', 'Competitive Advantage', 'Strategy'],
    content: [
      {
        body: 'Deciding to "wait and see" on AI feels like prudence. It looks responsible on a budget sheet. And in a world where the AI landscape changes every quarter, the logic of waiting for the technology to mature feels reasonable. But for many businesses, it is the most expensive strategic decision they will make this decade.',
      },
      {
        heading: 'The Compounding Capability Gap',
        body: 'The businesses investing in AI today are not just getting efficiency gains — they are building organisational capability. Data literacy, AI governance, change management muscle, vendor relationships, internal tooling. Each of these compounds. A company that starts building AI capability in 2025 will not just be one year ahead of a company that starts in 2026 — it will be significantly further ahead, because capability compounds.',
      },
      {
        body: 'PwC research shows that industries actively deploying AI are seeing 4× the productivity growth of those that are not. That gap is not closing — it is widening. The window for catching up exists, but it narrows every quarter.',
      },
      {
        heading: 'The Talent Problem',
        body: 'There is already a global shortage of AI and data science talent. The businesses that have been building AI capability are also building reputational advantage in the talent market — the people who want to work on interesting problems are drawn to organisations already doing interesting things with AI. A wait-and-see strategy today translates into a talent disadvantage tomorrow.',
      },
      {
        heading: 'The Customer Expectation Shift',
        body: 'Consumer and business expectations are being recalibrated by AI-native experiences. The speed of response, the personalisation, the accuracy — these are being set by companies like Klarna, Microsoft, and Amazon. Businesses not meeting those expectations are becoming incrementally less competitive in the eyes of their customers, often without knowing it.',
      },
      {
        heading: 'What "Waiting" Actually Costs',
        body: 'A mid-market professional services firm with 200 staff and average billing rates of $200/hour, where AI could realistically save each person three hours per week, is leaving approximately $6.2 million in annualised productivity value on the table for every year it waits. The number will vary by business — but the principle is consistent: there is a cost to inaction, and it is rarely zero.',
      },
      {
        body: 'The right answer is not to move recklessly. It is to move with intentionality. A focused four-week AI readiness assessment — understanding where you are, what is worth prioritising, and what a phased programme looks like — is a significantly lower-risk investment than either rushing in without a plan or waiting while competitors widen the gap.',
      },
    ],
  },
  {
    slug: 'ai-professional-services',
    title: 'AI in Professional Services: Beyond the Hype',
    metaTitle: 'AI in Professional Services: 6 High-Value Use Cases That Work',
    metaDescription:
      'Law firms, consultancies & accountancies have some of the highest-value AI use cases of any sector — without disrupting client trust. Where to start. 6-min read.',
    excerpt:
      "Law firms, consultancies, accountancies, and agencies are sitting on some of the highest-value AI use cases of any sector. The challenge isn't the technology — it's knowing where to start and how to implement without disrupting the trust that defines the business.",
    date: '2026-01-22',
    readTime: '6 min read',
    category: 'Industry',
    tags: ['Professional Services', 'Legal', 'Consulting', 'AI Implementation'],
    content: [
      {
        body: "Professional services firms — law, consulting, accounting, advisory, architecture, engineering — sit on some of the highest-value AI use cases of any sector. Knowledge-intensive, document-heavy, and billing by the hour, these businesses have enormous amounts to gain from AI. And enormous amounts to lose if they get it wrong. The challenge isn't the technology. It's knowing where to start and how to implement without disrupting the trust that defines the business.",
      },
      {
        heading: 'The Highest-Value Use Cases',
        body: 'Across professional services, we consistently see the strongest ROI in four areas. Document analysis and synthesis: AI can review, summarise, and extract key clauses from contracts, reports, and filings in minutes rather than hours. Research and precedent: AI search dramatically reduces the time junior staff spend on preliminary research, freeing them for higher-value analysis. Proposal and content generation: AI-assisted drafting accelerates proposal development, first-draft report writing, and client communications. Financial analysis: AI-powered analytics surfaces insights in large datasets that would previously require days of analyst time.',
      },
      {
        heading: 'The Trust Problem',
        body: 'Professional services is fundamentally a trust business. Clients are paying for expertise, judgement, and accountability — and they rightly want to know that AI is supporting those things, not replacing them. The firms successfully adopting AI are clear about this in their communications: AI handles the time-consuming, volume-intensive work; human expertise handles the analysis, the judgement, and the advice.',
      },
      {
        body: 'This is not just an ethical position — it is a commercial one. A law firm that can demonstrate faster, more thorough due diligence at the same rate is compelling. A firm that appears to have handed the work to an algorithm is not.',
      },
      {
        heading: 'Where to Start',
        body: 'The most successful professional services AI implementations begin with internal efficiency rather than client-facing applications. This allows firms to build confidence in the tools, develop governance protocols, and train staff without exposing clients to early-stage imperfections. Internal knowledge management, billing automation, and proposal generation are typically safe and high-value starting points.',
      },
      {
        body: 'The professional services sector is also one where talent is the primary asset and margin is constantly under pressure. The firms that use AI to elevate what their people can deliver — rather than simply to reduce headcount — tend to see the strongest long-term outcomes. AI as a force multiplier for expertise, not a replacement for it.',
      },
    ],
  },
  {
    slug: 'data-readiness-ai',
    title: 'From Data Chaos to AI-Ready: A Practical Guide for Mid-Market Businesses',
    metaTitle: 'Data Readiness for AI: A Practical Guide for Mid-Market',
    metaDescription:
      '9 in 10 mid-market businesses fail their first AI project because of data — not the model. The diagnostic, the fix, and the order of operations. 8-min read.',
    excerpt:
      "Ask most mid-market businesses if their data is AI-ready, and 9 in 10 will say no — or worse, say yes when it isn't. Poor data is the single most common reason AI programmes fail. Here's how to diagnose and fix it before you invest further.",
    date: '2026-01-08',
    readTime: '8 min read',
    category: 'Implementation',
    tags: ['Data Strategy', 'Data Governance', 'AI Readiness', 'Implementation'],
    content: [
      {
        body: "Ask most mid-market businesses if their data is AI-ready, and 9 in 10 will say no — or worse, say yes when it isn't. Poor data is the single most common reason AI programmes fail. Not the wrong AI tool, not insufficient budget, not lack of leadership support — poor data. The good news is that data readiness is not a binary state. It is a spectrum, and it is something you can actively improve.",
      },
      {
        heading: 'What "AI-Ready Data" Actually Means',
        body: 'AI-ready data has four characteristics: it is accessible (available to the systems that need it, not locked in siloed legacy platforms), it is consistent (standardised formats, naming conventions, and definitions across systems), it is accurate (quality-controlled, validated, and maintained), and it is sufficient in volume for the use case you are targeting. Most mid-market businesses are strong on one or two of these and weak on the rest.',
      },
      {
        heading: 'The Diagnostic: Where Are You Starting?',
        body: 'Before investing in AI tools, conduct a data audit across three layers. First, inventory: what data do you have, where does it live, and who owns it? Many organisations discover data they did not know they had — and data gaps they did not know existed. Second, quality: how accurate and complete is the data you do have? Run a sample-based quality check across your key datasets. Third, accessibility: can your data actually be connected to an AI system, or is it trapped in PDFs, spreadsheets, or legacy databases with no API?',
      },
      {
        body: 'This audit typically takes two to four weeks with the right support, and the output is a data readiness scorecard — a clear view of what you can build AI on now, what needs remediation, and what the remediation roadmap looks like.',
      },
      {
        heading: 'The Most Common Data Problems — and How to Fix Them',
        body: 'Data silos are the most common problem in mid-market businesses. Customer data in the CRM, financial data in the ERP, operational data in departmental spreadsheets — none of it talking to each other. The fix is integration, and it does not require a two-million-dollar data warehouse project. Modern integration platforms can solve most silo problems at a fraction of the traditional cost.',
      },
      {
        body: 'Inconsistent data definitions are the second most common issue — the same customer can have three different IDs across three different systems. Data deduplication and master data management tools address this. Inconsistent data quality is the third. Automated validation rules, regular quality audits, and clear data ownership policies are the standard remediation here.',
      },
      {
        heading: 'The 80/20 Rule for Data Readiness',
        body: 'You do not need perfect data to start with AI. You need data that is good enough for the specific use case you are targeting. A business that wants to use AI for customer churn prediction needs accurate CRM data and purchase history. It does not need to first solve its HR data quality issues. Scoping your first AI use cases to the data you already have in reasonable shape is the most practical path to early momentum.',
      },
      {
        body: 'Data readiness is not a prerequisite to starting — it is a parallel workstream. The businesses that make the most progress on AI are those that identify their first use case, start the work, and invest in data quality in the areas where it matters most, rather than trying to solve every data problem before taking a single step forward.',
      },
    ],
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

export function generateArticleStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}
