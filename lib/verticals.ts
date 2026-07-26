export interface UseCase {
  number: string
  title: string
  question: string
  body: string
  stat?: {
    value: string
    label: string
    source?: string
    sourceUrl?: string
  }
  examples: string[]
}

export interface VerticalFAQ {
  q: string
  a: string
}

export interface Vertical {
  number: string
  slug: string
  category: string
  heading: string
  subheading: string
  body: string
  challenge: string
  outcomes: string[]
  services: string[]
  metaTitle: string
  metaDescription: string
  // Optional rich content for AEO-priority verticals.
  // When present, the [slug] page renders the answer-first layout:
  // direct answer paragraph, deep use cases, FAQ block with FAQPage
  // schema, and an Article schema. Verticals without these fields
  // continue to render the existing summary layout.
  directAnswer?: string
  useCases?: UseCase[]
  faqs?: VerticalFAQ[]
  lastUpdated?: string
}

// Shared AI stats used across all vertical landing pages
// Sources: McKinsey State of AI 2025, Gartner 2024, PwC Global AI Jobs Barometer 2025
export const sharedAIStats = [
  {
    value: '78%',
    label: 'of organisations now use AI in at least one business function — up from 55% just one year prior',
    source: 'McKinsey State of AI',
    year: '2025',
    url: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai',
  },
  {
    value: '$3.70',
    label: 'returned for every $1 invested in AI — with top performers achieving $10.30 per dollar',
    source: 'Gartner',
    year: '2024',
    url: 'https://www.gartner.com/en/articles/take-this-view-to-assess-roi-for-generative-ai',
  },
  {
    value: '4×',
    label: 'productivity growth in industries with high AI exposure vs those without',
    source: 'PwC Global AI Jobs Barometer',
    year: '2025',
    url: 'https://www.pwc.com/gx/en/services/ai/ai-jobs-barometer.html',
  },
]

export const verticals: Vertical[] = [
  {
    number: '01',
    slug: 'marketers',
    category: 'Marketing Teams',
    heading: 'Marketers & Growth Leaders',
    subheading: 'Cut through the noise. Prove the value. Build the engine.',
    body: "You have ambitious targets, limited time, and a tech stack that's grown faster than your team's ability to use it. I help you cut through the noise, build clarity, and generate measurable results.",
    challenge: "Most marketing teams are drowning in data but starving for insight — running too many tools, chasing too many channels, and struggling to connect spend to outcomes. The AI era has made this harder, not easier, for teams without a clear strategy.",
    outcomes: [
      'Audit and rationalise your martech stack',
      'Build automated customer journeys that convert',
      'Deploy AI tools that genuinely save hours per week',
      'Create measurement frameworks that prove ROI',
    ],
    services: ['Digital Strategy', 'MarTech Advisory', 'AI Enablement', 'Customer Experience'],
    metaTitle: 'AI Consulting for Marketing Teams & CMOs Australia | Lumii',
    metaDescription:
      'Cut through the MarTech noise. AI tools, automation & measurement frameworks that genuinely save hours per week and prove ROI to your CFO.',
  },
  {
    number: '02',
    slug: 'estate-agents',
    category: 'Real Estate',
    heading: 'Estate Agents & Property Groups',
    subheading: 'Win more listings. Nurture every lead. Build a brand that outlasts the market.',
    body: 'The property sector is being disrupted by digital-first competitors. I help agencies, developers, and property platforms use technology to attract better leads, convert more listings, and retain clients longer.',
    challenge: "Property is a relationship business — but digital tools now determine who gets the relationship. Agencies that still rely on manual follow-up, generic EDMs, and disconnected CRMs are losing ground to leaner, smarter competitors.",
    outcomes: [
      'AI-powered lead qualification and nurture flows',
      'Digital-first listing and buyer experiences',
      'CRM implementation and automation strategy',
      'Personalised communication at scale',
    ],
    services: ['Digital Strategy', 'Customer Experience', 'MarTech Advisory', 'AI Enablement'],
    metaTitle: 'AI Consulting for Real Estate Agencies Australia | Lumii',
    metaDescription:
      'AI lead qualification, listing automation & CRM strategy for Australian estate agents and property groups. Convert more leads. Retain more clients.',
  },
  {
    number: '03',
    slug: 'sales-teams',
    category: 'Sales Organisations',
    heading: 'Sales Teams & Revenue Leaders',
    subheading: 'Shorter cycles. Sharper forecasting. More revenue with less friction.',
    body: 'Modern sales is digital-first. I help sales teams use AI, automation, and better data to shorten cycles, improve forecasting, and close more with less friction.',
    challenge: "Sales teams are generating more data than ever — but most of it goes unanalysed, unused, and unconnected to strategy. Meanwhile, buyers are more informed and more impatient. The teams winning today are the ones who've built digital intelligence into every stage of the funnel.",
    outcomes: [
      'Sales enablement technology and playbooks',
      'AI-assisted prospecting and outreach',
      'CRM optimisation and pipeline visibility',
      'Customer data strategy to improve conversions',
    ],
    services: ['Digital Strategy', 'AI Enablement', 'MarTech Advisory', 'Customer Experience'],
    metaTitle: 'AI for Sales Teams: Prospecting, CRM & Pipeline | Lumii',
    metaDescription:
      'AI-assisted prospecting, CRM optimisation & sales enablement for revenue leaders. Shorten cycles, improve forecasting, close more — with less friction.',
  },
  {
    number: '04',
    slug: 'retailers',
    category: 'Retail & Ecommerce',
    heading: 'Retailers & D2C Brands',
    subheading: 'Grow revenue. Reduce churn. Build a brand that compounds.',
    body: "Whether you're scaling an ecommerce operation or navigating omnichannel complexity, I bring the strategic and technical clarity to help you grow profitably and build a brand that lasts.",
    challenge: "Retail margins are tight, acquisition costs are rising, and customers expect personalised, seamless experiences across every touchpoint. The brands winning in this environment have built the right technology infrastructure — and know how to use it.",
    outcomes: [
      'Platform selection, migration, and optimisation',
      'Conversion rate optimisation and UX audit',
      'Personalisation and product recommendation strategy',
      'Loyalty and retention programme design',
    ],
    services: ['Ecommerce', 'Customer Experience', 'Digital Strategy', 'MarTech Advisory'],
    metaTitle: 'AI Consulting for Retail & D2C Brands Australia | Lumii',
    metaDescription:
      'Platform strategy, CRO, personalisation & loyalty for Australian retailers and D2C brands. Grow profitably across DTC, marketplace & omnichannel.',
  },
  {
    number: '05',
    slug: 'professional-services',
    category: 'Professional Services',
    heading: 'Consultancies & B2B Firms',
    subheading: 'Your expertise deserves a digital presence that matches it.',
    body: 'Expertise-driven businesses often underinvest in the digital infrastructure that would help them grow. I bring a fresh, strategic lens to business development, client experience, and operational efficiency.',
    challenge: "Professional services firms are often the last to invest in their own digital transformation — too focused on client delivery to build the infrastructure that would make them more scalable, more referable, and more efficient. That gap is now a competitive liability.",
    outcomes: [
      'Digital brand and thought leadership strategy',
      'Client portal and experience design',
      'Business development automation',
      'AI tools for research, reporting, and delivery',
    ],
    services: ['Digital Strategy', 'AI Enablement', 'Customer Experience', 'MarTech Advisory'],
    metaTitle: 'AI for Consultancies, Law & Accounting Firms | Lumii',
    metaDescription:
      'AI tools for research, reporting & delivery. Digital brand, BD automation & client experience for B2B professional services firms across Australia.',
  },
  {
    number: '06',
    slug: 'hospitality',
    category: 'Hospitality & Services',
    heading: 'Hospitality & Experience Brands',
    subheading: 'Your guest experience starts long before they walk through the door.',
    body: 'In a sector defined by experience, digital touchpoints either delight or disappoint. I help hotels, restaurants, and experience brands create the online presence and customer journey their offering deserves.',
    challenge: "Hospitality brands spend enormous effort perfecting the in-person experience — and then lose guests at the first digital touchpoint. Online booking friction, impersonal follow-up, and absent loyalty programmes are leaving revenue on the table every day.",
    outcomes: [
      'Digital booking and reservation optimisation',
      'Reputation and review management strategy',
      'Loyalty and CRM implementation',
      'Personalised guest communication programmes',
    ],
    services: ['Customer Experience', 'Digital Strategy', 'MarTech Advisory', 'AI Enablement'],
    metaTitle: 'AI Consulting for Hospitality & Hotels Australia | Lumii',
    metaDescription:
      'Booking optimisation, reputation management, loyalty & guest CRM for Australian hotels, restaurants and experience brands. Build the digital your offer deserves.',
  },
  {
    number: '07',
    slug: 'financial-services',
    category: 'Financial Services & FinTech',
    heading: 'Financial Services & FinTech',
    subheading: 'Navigate regulation, digitise the relationship, and lead in the AI era.',
    body: 'From established banks and wealth managers to challenger fintechs and super funds, financial services organisations are navigating the most complex digital transformation of any sector. I bring the strategic clarity to make smart decisions fast.',
    challenge: "Financial services firms face a uniquely complex digital environment: high regulatory scrutiny, legacy infrastructure, rising customer expectations, and a wave of nimble fintech competitors. The organisations that will lead the next decade are those making the right technology bets now — with strategy, not vendor pressure, driving the roadmap.",
    outcomes: [
      'AI strategy and responsible implementation roadmap',
      'Digital customer onboarding and CX design',
      'MarTech stack rationalisation and data strategy',
      'Compliance-aware automation and workflow design',
    ],
    services: ['Digital Strategy', 'AI Enablement', 'Customer Experience', 'MarTech Advisory'],
    metaTitle: 'AI for Financial Services Australia: Use Cases, ROI & Governance | Lumii',
    metaDescription:
      'How Australian banks, super funds, wealth managers and FinTechs are using AI in 2026 — five high-ROI use cases, APRA expectations, and where mid-market firms should start.',
    lastUpdated: '2026-06-05',
    directAnswer:
      'Financial services firms in Australia are using AI across five primary areas: customer onboarding and KYC automation, fraud detection and AML monitoring, credit and lending decisioning, customer service and advice augmentation, and compliance reporting. The highest-ROI use cases for mid-market financial services firms in 2026 are the ones that reduce manual review time on regulated processes while preserving full audit trails. The barrier to value is rarely the technology — it is the governance framework, the data quality, and the internal capability required to deploy AI inside a compliance-bound environment.',
    useCases: [
      {
        number: '01',
        title: 'Customer onboarding and KYC',
        question: 'How can financial services firms use AI to improve customer onboarding?',
        body: "AI is now the dominant tooling layer for KYC and customer onboarding in financial services. AI-assisted identity verification, document review, and risk scoring compress what used to be a multi-day manual process into hours — sometimes minutes. The technology pattern is well-established: an OCR and computer-vision layer for document capture, a structured AI review layer for inconsistency detection, a risk model layer for sanctions and PEP screening, and a human-in-the-loop sign-off for higher-risk profiles. For Australian institutions, the AUSTRAC AML/CTF obligations remain non-negotiable — but they are now substantially easier to discharge with the right AI layer in front of the human reviewer rather than behind them.",
        stat: {
          value: '60–80%',
          label: 'reduction in time-to-account for institutions using AI-assisted onboarding',
          source: 'McKinsey Financial Services AI Report, 2025',
        },
        examples: [
          'Automated document capture and OCR with AI-driven inconsistency detection',
          'Real-time sanctions, PEP and adverse media screening across third-party data',
          'AI-assisted risk scoring with explainable rationale for compliance review',
          'Human-in-the-loop sign-off retained for medium and high-risk customer profiles',
        ],
      },
      {
        number: '02',
        title: 'Fraud detection and AML monitoring',
        question: 'Where does AI deliver the highest return in fraud and AML?',
        body: "The strongest measurable return on AI investment in financial services consistently comes from fraud detection and AML transaction monitoring. Pattern-recognition models trained on transaction histories outperform rule-based systems on two dimensions that matter most: detection rate and false-positive rate. The financial impact is significant — false positives are expensive both directly (analyst review time) and indirectly (customer friction and abandonment). Institutions that have migrated their transaction monitoring to ML-augmented systems consistently report 40 to 60 percent reductions in false positives without a measurable reduction in genuine detection rates. For mid-market firms, the right entry point is not building a model — it is selecting and integrating a regulated regtech vendor with mature, audit-ready AI inside it.",
        stat: {
          value: '50%+',
          label: 'reduction in false positives at institutions using ML-augmented transaction monitoring',
          source: 'SAS Anti-Money Laundering Technology Report, 2024',
        },
        examples: [
          'Transaction monitoring augmented with anomaly-detection models',
          'Network-graph analysis for layering and structuring detection',
          'AI-prioritised analyst queue (highest-risk alerts surfaced first)',
          'Continuous model performance monitoring with audit-ready logs',
        ],
      },
      {
        number: '03',
        title: 'Credit and lending decisioning',
        question: 'Can AI improve credit decisioning without creating regulatory risk?',
        body: "AI in credit decisioning is genuinely transformative — and genuinely high-risk if deployed without the right governance. The risk vector is not technology failure; it is bias, explainability, and regulatory exposure. The good news is that the regulatory direction is now clear: APRA, ASIC, and the OAIC have all signalled that AI use in credit decisioning is acceptable provided it is explainable, auditable, and subject to human review for adverse outcomes. The high-value pattern for mid-market lenders is AI-augmented decisioning rather than fully autonomous decisioning — the model surfaces a recommendation with a clear rationale, and a human credit officer signs off. Decision time compresses from days to hours; explainability and audit trail remain intact.",
        stat: {
          value: '3–5×',
          label: 'faster time-to-decision at lenders using AI-augmented credit assessment',
          source: 'BCG Banking AI Adoption Survey, 2025',
        },
        examples: [
          'Augmented credit scoring with explainable rationale at the application level',
          'Alternative data signals (transaction history, business activity) for thin-file applicants',
          'Pre-approval and indicative offer generation in minutes rather than days',
          'Documented bias testing and adverse outcome review cadence',
        ],
      },
      {
        number: '04',
        title: 'Customer service and advice augmentation',
        question: 'How should financial services firms use AI in customer service?',
        body: "The pattern that consistently delivers commercial value in customer service is AI as agent augmentation — not AI as agent replacement. The augmentation layer summarises customer history before a call, drafts response options during the call, and produces the wrap-up notes after the call. The result is faster handle times, more consistent responses, and significantly lower agent training burden. Klarna's widely-reported deployment of AI in customer service produced approximately $40M USD in annualised savings while improving customer satisfaction scores — but the implementation that worked was the one that kept humans accountable for advice and judgement, with AI handling the cognitive overhead around them. For Australian financial services, the regulatory boundary is sharp: AI can summarise and draft, but advice and recommendation remain the regulated remit of a qualified human.",
        stat: {
          value: '$40M+',
          label: 'annualised savings from AI in customer service at Klarna with measured CSAT improvement',
          source: 'Klarna 2024 Annual Report',
        },
        examples: [
          'Pre-call AI-generated customer summary with relevant history and account state',
          'In-call response drafting and policy lookup with citation back to source documents',
          'Post-call wrap-up notes and CRM updates generated automatically',
          'Clear regulatory boundary: AI summarises, humans advise',
        ],
      },
      {
        number: '05',
        title: 'Compliance and regulatory reporting',
        question: 'Where does AI fit in compliance and regulatory reporting?',
        body: "Compliance is one of the most labour-intensive functions in any financial services firm — and one of the most amenable to AI augmentation. The high-value use cases are regulatory change monitoring (AI tracking and summarising regulatory updates from APRA, ASIC, AUSTRAC and offshore equivalents), automated report drafting (initial preparation of periodic returns with human sign-off), and audit-trail generation (AI-structured documentation of decisions, model performance, and exception handling). Done well, this can free 30 to 50 percent of compliance team time for higher-value work. The risk to manage is hallucination on regulatory interpretation — which is why the deployment pattern that holds up is AI as a first draft and a human as the regulated decision-maker.",
        stat: {
          value: '30–50%',
          label: 'reduction in routine compliance hours through AI-augmented reporting workflows',
          source: 'Thomson Reuters State of Corporate Compliance, 2025',
        },
        examples: [
          'Regulatory change monitoring with AI-generated impact assessments',
          'First-draft generation of periodic regulatory returns and disclosures',
          'AI-structured audit trail and model performance documentation',
          'Sanctions and watchlist monitoring with continuous coverage updates',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is AI safe to use in regulated Australian financial services?',
        a: "Yes, provided it is deployed within a governance framework. APRA, ASIC, AUSTRAC and the OAIC have each signalled that AI use is acceptable in financial services provided it is explainable, auditable, subject to human oversight for material decisions, and supported by appropriate model risk management. The Australian regulatory direction is consistent with EU and UK approaches — AI is permitted, AI without governance is not. The successful deployment pattern is AI inside a defined operating system: sanctioned tools, classified data, documented model performance, and a named accountable executive. Lumii's AI Operating System framework details the five components required.",
      },
      {
        q: 'What does APRA expect of financial institutions using AI?',
        a: "APRA's prudential expectations for AI use mirror its broader expectations for technology risk: clear governance, documented risk management, human accountability for material decisions, ongoing model performance monitoring, and operational resilience. CPS 230 (Operational Risk Management) and CPS 234 (Information Security) both apply to AI-supported processes. Institutions are expected to be able to demonstrate that the AI systems they use are appropriately designed, validated, monitored, and governed — and that the outcomes those systems produce are reviewable. The expectation is not that AI must be avoided; it is that AI must be managed with the same rigour as any other material risk function.",
      },
      {
        q: 'What is the ROI of AI in mid-market financial services?',
        a: "The return depends entirely on which use case is deployed and how rigorously it is implemented. The highest-ROI use cases for mid-market firms are typically fraud detection and AML monitoring (40 to 60 percent reduction in false positives), customer onboarding (60 to 80 percent reduction in time-to-account), and compliance reporting (30 to 50 percent reduction in routine hours). The ROI on AI in credit decisioning and customer service is real but takes longer to materialise — typically 12 to 18 months — because the implementation work is greater. Gartner's broader benchmark of $3.70 returned per $1 invested in AI holds in financial services, but the variance is wide and entirely a function of execution discipline.",
      },
      {
        q: 'Can AI replace human credit and risk decision-makers?',
        a: "Not under current Australian regulatory expectations, and the institutions getting AI right are not trying to. The pattern that holds up under both commercial and regulatory scrutiny is AI-augmented decisioning rather than fully autonomous decisioning: the model surfaces a recommendation with a clear rationale, and a qualified human signs off. This preserves explainability, auditability, and the regulatory accountability chain — while still delivering most of the speed and consistency benefits AI promises. The institutions trying to remove humans from material credit and risk decisions are typically the ones encountering both regulatory friction and unexpected model-failure exposure.",
      },
      {
        q: 'How do I deploy AI without breaching customer privacy obligations?',
        a: "Australian Privacy Principles (APPs) under the Privacy Act 1988 apply to all AI deployments handling personal information. The practical controls that matter are: a data classification policy that defines what data can be sent to which AI tools, sanctioned tool list with reviewed terms of service (notably around training data use), consent and disclosure language that reflects AI processing, retention and deletion controls that extend to AI-generated artifacts, and a breach response process that contemplates AI-related incidents. Most enterprise AI platforms now offer the contractual and technical controls required for APP-compliant deployment — but those controls only work inside an overall governance framework. This is the Guardrails layer of the AI Operating System.",
      },
      {
        q: 'Where should a mid-market financial services firm start with AI?',
        a: "The two best starting points are usually customer onboarding (fast measurable value, well-mapped technology, contained regulatory complexity) or compliance reporting (high cost out, contained customer exposure, fast pay-back). Both deliver visible commercial value within a quarter and build the internal capability — governance, model management, change leadership — that the harder use cases (credit decisioning, advice augmentation) will require. Before any tool selection, run a structured AI readiness assessment to establish where governance, data, capability, and use-case discipline currently sit. Premature tool deployment is the most common failure mode in mid-market financial services AI programmes.",
      },
    ],
  },
  {
    number: '08',
    slug: 'healthcare',
    category: 'Healthcare & Allied Health',
    heading: 'Healthcare & Allied Health',
    subheading: 'Better patient experiences. Smarter operations. More time for care.',
    body: 'Private clinics, specialist practices, and allied health providers are sitting on a decade of digital catch-up — and an enormous opportunity. I help healthcare businesses create the patient experiences, operational systems, and AI capabilities that modern practice demands.',
    challenge: "Healthcare providers are under growing pressure: rising patient expectations, workforce constraints, and an administrative burden that consumes time that should be spent on care. Digital tools — when chosen and implemented well — can address all three. Most practices don't know where to start.",
    outcomes: [
      'Patient journey mapping and digital experience design',
      'Online booking, intake, and recall system optimisation',
      'AI tools for admin, scheduling, and communications',
      'CRM and patient relationship management strategy',
    ],
    services: ['Customer Experience', 'Digital Strategy', 'AI Enablement', 'MarTech Advisory'],
    metaTitle: 'AI Consulting for Healthcare & Allied Health Australia | Lumii',
    metaDescription:
      'Patient journey design, online booking, AI admin tools & CRM for private clinics, specialist practices and allied health providers across Australia.',
  },
  {
    number: '09',
    slug: 'startups',
    category: 'Startups & Scale-ups',
    heading: 'Startups & Scale-ups',
    subheading: "Build the right infrastructure now. Don't pay to fix it later.",
    body: "Pre-Series B founders move fast — but the digital, data, and martech decisions you make in years one and two will either accelerate or constrain your growth for the next decade. I help ambitious founders build the right foundations from the start.",
    challenge: "Most startups build their digital infrastructure reactively — stitching together tools as problems arise, accumulating technical and strategic debt that becomes expensive to unwind at scale. The startups that scale efficiently are the ones that thought strategically about data, customer experience, and technology from the beginning.",
    outcomes: [
      'Digital and data infrastructure strategy for scale',
      'Customer acquisition and retention funnel design',
      'AI tools and automation built into operations early',
      'MarTech stack selection for your stage and category',
    ],
    services: ['Digital Strategy', 'AI Enablement', 'Customer Experience', 'Ecommerce'],
    metaTitle: 'AI Consulting for Startups & Scale-ups Australia | Lumii',
    metaDescription:
      'Pre-Series B founders: build the right digital, data & AI foundations from year one. MarTech, automation & growth strategy for ambitious teams.',
  },
  {
    number: '10',
    slug: 'education',
    category: 'Education & Training',
    heading: 'Education & Training Providers',
    subheading: 'Modern learners expect modern experiences. Deliver them.',
    body: 'RTOs, private colleges, corporate learning providers, and education platforms are navigating a profound shift in how learners discover, enrol, and engage with education. I help education businesses digitise the enrolment journey, personalise the learner experience, and use AI to operate more efficiently.',
    challenge: "Education providers face a paradox: they're in the business of preparing people for the future, yet many still rely on analogue processes for enrolment, communication, and learner engagement. Digital-native competitors are taking market share — and the gap is widening.",
    outcomes: [
      'Digital enrolment journey design and optimisation',
      'CRM and student lifecycle management strategy',
      'AI tools for learner support and administration',
      'Content and thought leadership strategy for lead generation',
    ],
    services: ['Customer Experience', 'Digital Strategy', 'AI Enablement', 'MarTech Advisory'],
    metaTitle: 'AI Consulting for RTOs & Education Providers Australia | Lumii',
    metaDescription:
      'AI for enrolment journeys, student lifecycle CRM, learner support & lead-gen content. For RTOs, private colleges and corporate learning providers.',
  },
]

export function getVerticalBySlug(slug: string): Vertical | undefined {
  return verticals.find((v) => v.slug === slug)
}
