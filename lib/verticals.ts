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
    body: "You have ambitious targets, limited time, and a tech stack that's grown faster than your team's ability to use it. We help you cut through the noise, build clarity, and generate measurable results.",
    challenge: "Most marketing teams are drowning in data but starving for insight — running too many tools, chasing too many channels, and struggling to connect spend to outcomes. The AI era has made this harder, not easier, for teams without a clear strategy.",
    outcomes: [
      'Audit and rationalise your martech stack',
      'Build automated customer journeys that convert',
      'Deploy AI tools that genuinely save hours per week',
      'Create measurement frameworks that prove ROI',
    ],
    services: ['Digital Strategy', 'MarTech Advisory', 'AI Enablement', 'Customer Experience'],
    metaTitle: 'AI Strategy for Marketers & Growth Teams',
    metaDescription: 'AI-powered martech strategy for marketing teams. Rationalise your tech stack, automate customer journeys, and build attribution that proves marketing ROI. Lumii Advisory, Sydney.',
  },
  {
    number: '02',
    slug: 'estate-agents',
    category: 'Real Estate',
    heading: 'Estate Agents & Property Groups',
    subheading: 'Win more listings. Nurture every lead. Build a brand that outlasts the market.',
    body: 'The property sector is being disrupted by digital-first competitors. We help agencies, developers, and property platforms use technology to attract better leads, convert more listings, and retain clients longer.',
    challenge: "Property is a relationship business — but digital tools now determine who gets the relationship. Agencies that still rely on manual follow-up, generic EDMs, and disconnected CRMs are losing ground to leaner, smarter competitors.",
    outcomes: [
      'AI-powered lead qualification and nurture flows',
      'Digital-first listing and buyer experiences',
      'CRM implementation and automation strategy',
      'Personalised communication at scale',
    ],
    services: ['Digital Strategy', 'Customer Experience', 'MarTech Advisory', 'AI Enablement'],
    metaTitle: 'AI for Real Estate Agents & Property Firms',
    metaDescription: 'AI-powered lead nurturing, CRM automation, and digital strategy for real estate agencies and property groups. Win more listings with Lumii Advisory, Sydney, Australia.',
  },
  {
    number: '03',
    slug: 'sales-teams',
    category: 'Sales Organisations',
    heading: 'Sales Teams & Revenue Leaders',
    subheading: 'Shorter cycles. Sharper forecasting. More revenue with less friction.',
    body: 'Modern sales is digital-first. We help sales teams leverage AI, automation, and better data to shorten cycles, improve forecasting, and close more with less friction.',
    challenge: "Sales teams are generating more data than ever — but most of it goes unanalysed, unleveraged, and unconnected to strategy. Meanwhile, buyers are more informed and more impatient. The teams winning today are the ones who've built digital intelligence into every stage of the funnel.",
    outcomes: [
      'Sales enablement technology and playbooks',
      'AI-assisted prospecting and outreach',
      'CRM optimisation and pipeline visibility',
      'Customer data strategy to improve conversions',
    ],
    services: ['Digital Strategy', 'AI Enablement', 'MarTech Advisory', 'Customer Experience'],
    metaTitle: 'AI Consulting for Sales & Revenue Teams',
    metaDescription: 'AI tools for sales teams. Shorten sales cycles, sharpen CRM forecasting, and automate outreach. Revenue enablement and AI strategy consulting from Lumii Advisory.',
  },
  {
    number: '04',
    slug: 'retailers',
    category: 'Retail & Ecommerce',
    heading: 'Retailers & D2C Brands',
    subheading: 'Grow revenue. Reduce churn. Build a brand that compounds.',
    body: "Whether you're scaling an ecommerce operation or navigating omnichannel complexity, we bring the strategic and technical clarity to help you grow profitably and build a brand that lasts.",
    challenge: "Retail margins are tight, acquisition costs are rising, and customers expect personalised, seamless experiences across every touchpoint. The brands winning in this environment have built the right technology infrastructure — and know how to use it.",
    outcomes: [
      'Platform selection, migration, and optimisation',
      'Conversion rate optimisation and UX audit',
      'Personalisation and product recommendation strategy',
      'Loyalty and retention programme design',
    ],
    services: ['Ecommerce', 'Customer Experience', 'Digital Strategy', 'MarTech Advisory'],
    metaTitle: 'AI for Retailers & D2C Ecommerce Brands',
    metaDescription: 'AI personalisation, conversion rate optimisation, and ecommerce platform strategy for retailers and D2C brands. Grow revenue and reduce churn with Lumii Advisory.',
  },
  {
    number: '05',
    slug: 'professional-services',
    category: 'Professional Services',
    heading: 'Consultancies & B2B Firms',
    subheading: 'Your expertise deserves a digital presence that matches it.',
    body: 'Expertise-driven businesses often underinvest in the digital infrastructure that would help them grow. We bring a fresh, strategic lens to business development, client experience, and operational efficiency.',
    challenge: "Professional services firms are often the last to invest in their own digital transformation — too focused on client delivery to build the infrastructure that would make them more scalable, more referable, and more efficient. That gap is now a competitive liability.",
    outcomes: [
      'Digital brand and thought leadership strategy',
      'Client portal and experience design',
      'Business development automation',
      'AI tools for research, reporting, and delivery',
    ],
    services: ['Digital Strategy', 'AI Enablement', 'Customer Experience', 'MarTech Advisory'],
    metaTitle: 'AI for B2B Professional Services Firms',
    metaDescription: 'AI strategy and automation for B2B consultancies, agencies, and professional services firms. Scale delivery, automate business development, and build AI capability.',
  },
  {
    number: '06',
    slug: 'hospitality',
    category: 'Hospitality & Services',
    heading: 'Hospitality & Experience Brands',
    subheading: 'Your guest experience starts long before they walk through the door.',
    body: 'In a sector defined by experience, digital touchpoints either delight or disappoint. We help hotels, restaurants, and experience brands create the online presence and customer journey their offering deserves.',
    challenge: "Hospitality brands spend enormous effort perfecting the in-person experience — and then lose guests at the first digital touchpoint. Online booking friction, impersonal follow-up, and absent loyalty programmes are leaving revenue on the table every day.",
    outcomes: [
      'Digital booking and reservation optimisation',
      'Reputation and review management strategy',
      'Loyalty and CRM implementation',
      'Personalised guest communication programmes',
    ],
    services: ['Customer Experience', 'Digital Strategy', 'MarTech Advisory', 'AI Enablement'],
    metaTitle: 'AI Strategy for Hospitality & Experience Brands',
    metaDescription: 'Digital booking optimisation, guest loyalty CRM, and AI-powered personalisation for hotels, restaurants, and hospitality brands. Lumii Advisory, Australia.',
  },
  {
    number: '07',
    slug: 'financial-services',
    category: 'Financial Services & FinTech',
    heading: 'Financial Services & FinTech',
    subheading: 'Navigate regulation, digitise the relationship, and lead in the AI era.',
    body: 'From established banks and wealth managers to challenger fintechs and super funds, financial services organisations are navigating the most complex digital transformation of any sector. We bring the strategic clarity to make smart decisions fast.',
    challenge: "Financial services firms face a uniquely complex digital environment: high regulatory scrutiny, legacy infrastructure, rising customer expectations, and a wave of nimble fintech competitors. The organisations that will lead the next decade are those making the right technology bets now — with strategy, not vendor pressure, driving the roadmap.",
    outcomes: [
      'AI strategy and responsible implementation roadmap',
      'Digital customer onboarding and CX design',
      'MarTech stack rationalisation and data strategy',
      'Compliance-aware automation and workflow design',
    ],
    services: ['Digital Strategy', 'AI Enablement', 'Customer Experience', 'MarTech Advisory'],
    metaTitle: 'AI Strategy for Financial Services & FinTech',
    metaDescription: 'Compliant AI strategy and digital transformation for banks, wealth managers, super funds, and fintech companies. Navigate regulation and lead in the AI era with Lumii Advisory.',
  },
  {
    number: '08',
    slug: 'healthcare',
    category: 'Healthcare & Allied Health',
    heading: 'Healthcare & Allied Health',
    subheading: 'Better patient experiences. Smarter operations. More time for care.',
    body: 'Private clinics, specialist practices, and allied health providers are sitting on a decade of digital catch-up — and an enormous opportunity. We help healthcare businesses create the patient experiences, operational systems, and AI capabilities that modern practice demands.',
    challenge: "Healthcare providers are under growing pressure: rising patient expectations, workforce constraints, and an administrative burden that consumes time that should be spent on care. Digital tools — when chosen and implemented well — can address all three. Most practices don't know where to start.",
    outcomes: [
      'Patient journey mapping and digital experience design',
      'Online booking, intake, and recall system optimisation',
      'AI tools for admin, scheduling, and communications',
      'CRM and patient relationship management strategy',
    ],
    services: ['Customer Experience', 'Digital Strategy', 'AI Enablement', 'MarTech Advisory'],
    metaTitle: 'AI for Healthcare & Allied Health Providers',
    metaDescription: 'AI-powered patient scheduling, clinical admin automation, and digital patient experience design for private clinics and allied health practices. Lumii Advisory, Australia.',
  },
  {
    number: '09',
    slug: 'startups',
    category: 'Startups & Scale-ups',
    heading: 'Startups & Scale-ups',
    subheading: "Build the right infrastructure now. Don't pay to fix it later.",
    body: "Pre-Series B founders move fast — but the digital, data, and martech decisions you make in years one and two will either accelerate or constrain your growth for the next decade. We help ambitious founders build the right foundations from the start.",
    challenge: "Most startups build their digital infrastructure reactively — stitching together tools as problems arise, accumulating technical and strategic debt that becomes expensive to unwind at scale. The startups that scale efficiently are the ones that thought strategically about data, customer experience, and technology from the beginning.",
    outcomes: [
      'Digital and data infrastructure strategy for scale',
      'Customer acquisition and retention funnel design',
      'AI tools and automation built into operations early',
      'MarTech stack selection for your stage and category',
    ],
    services: ['Digital Strategy', 'AI Enablement', 'Customer Experience', 'Ecommerce'],
    metaTitle: 'AI Strategy for Startups & Scale-ups',
    metaDescription: 'Build AI-ready data, martech, and digital infrastructure from day one. AI strategy and digital transformation consulting for pre-Series B founders and fast-growing scale-ups.',
  },
  {
    number: '10',
    slug: 'education',
    category: 'Education & Training',
    heading: 'Education & Training Providers',
    subheading: 'Modern learners expect modern experiences. Deliver them.',
    body: 'RTOs, private colleges, corporate learning providers, and education platforms are navigating a profound shift in how learners discover, enrol, and engage with education. We help education businesses digitise the enrolment journey, personalise the learner experience, and use AI to operate more efficiently.',
    challenge: "Education providers face a paradox: they're in the business of preparing people for the future, yet many still rely on analogue processes for enrolment, communication, and learner engagement. Digital-native competitors are taking market share — and the gap is widening.",
    outcomes: [
      'Digital enrolment journey design and optimisation',
      'CRM and student lifecycle management strategy',
      'AI tools for learner support and administration',
      'Content and thought leadership strategy for lead generation',
    ],
    services: ['Customer Experience', 'Digital Strategy', 'AI Enablement', 'MarTech Advisory'],
    metaTitle: 'AI for Education Providers, RTOs & Training Organisations',
    metaDescription: 'AI-powered enrolment journeys, student lifecycle CRM, and digital strategy for RTOs, private colleges, and corporate learning providers. Lumii Advisory, Australia.',
  },
]

export function getVerticalBySlug(slug: string): Vertical | undefined {
  return verticals.find((v) => v.slug === slug)
}
