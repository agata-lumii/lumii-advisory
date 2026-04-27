import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: {
    absolute: 'AI Team Structure: Roles, Org Charts & Hiring Order (2026)',
  },
  description:
    'The 8 roles every AI-capable business needs, the 5 you hire first, and where they sit in the org. A practical guide for CEOs and HR leaders.',
  alternates: {
    canonical: 'https://lumiiadvisory.com/resources/ai-team-structure',
  },
}

// ── Role data ────────────────────────────────────────────────────────
const TIERS = [
  {
    level: 'C-Suite & Board',
    color: '#C9A96E',
    bg: '#FBF5EA',
    roles: [
      {
        title: 'Chief AI Officer',
        abbr: 'CAIO',
        when: '200+ staff · Series B+',
        reportsTo: 'CEO / Board',
        description:
          'Owns AI strategy enterprise-wide. Sets where the business places its AI bets, chairs the AI governance committee, and represents AI investment at board level.',
        responsibilities: [
          'Define and own the AI strategy roadmap',
          'Chair AI governance and ethics committee',
          'Secure board-level buy-in and budget',
          'Build AI capability across the organisation',
        ],
        emerging: false,
      },
    ],
  },
  {
    level: 'Director & VP',
    color: '#3A3834',
    bg: '#F2F1EF',
    roles: [
      {
        title: 'Head of AI / VP of AI',
        abbr: 'HoAI',
        when: '50–200 staff',
        reportsTo: 'CEO / CTO / COO',
        description:
          'The most common first dedicated AI hire. Leads the AI programme, prioritises use cases, manages vendors, and drives adoption across the business.',
        responsibilities: [
          'Lead day-to-day AI programme delivery',
          'Prioritise and own the AI use case roadmap',
          'Manage AI tools, vendors, and partnerships',
          'Champion AI adoption across departments',
        ],
        emerging: false,
      },
      {
        title: 'AI Program Director',
        abbr: 'APD',
        when: '100+ staff with active AI programme',
        reportsTo: 'CAIO / Head of AI',
        description:
          'Manages AI initiative delivery end-to-end. Coordinates cross-functional teams, tracks milestones, and ensures AI investments translate into business outcomes.',
        responsibilities: [
          'Manage AI programme delivery and milestones',
          'Coordinate across technical and business teams',
          'Track ROI and report to leadership',
          'Manage change and stakeholder communications',
        ],
        emerging: false,
      },
    ],
  },
  {
    level: 'Technical Specialists',
    color: '#2E6E50',
    bg: '#E9F3EE',
    roles: [
      {
        title: 'AI Architect',
        abbr: 'Arc',
        when: 'Scaling from pilot to production',
        reportsTo: 'Head of AI / CTO',
        description:
          'Designs the systems and infrastructure that make AI work at scale. Evaluates tooling, defines integration patterns, and ensures pilots can actually reach production.',
        responsibilities: [
          'Design AI infrastructure and integration architecture',
          'Set standards for model training, monitoring, and retirement',
          'Evaluate and select AI platforms and tools',
          'Bridge strategy and engineering execution',
        ],
        emerging: false,
      },
      {
        title: 'AI / ML Engineer',
        abbr: 'MLE',
        when: 'Building custom AI solutions',
        reportsTo: 'AI Architect / CTO',
        description:
          'Builds, deploys, and monitors AI models and pipelines. The hands-on technical role that turns AI strategy into working software.',
        responsibilities: [
          'Build and deploy machine learning models',
          'Maintain and monitor AI pipelines in production',
          'Improve model performance over time',
          'Collaborate with data engineers on data pipelines',
        ],
        emerging: false,
      },
      {
        title: 'Data Engineer',
        abbr: 'DE',
        when: 'Before serious AI investment',
        reportsTo: 'AI Architect / Head of Data',
        description:
          'Builds and maintains the data infrastructure that AI systems depend on. The single most important hire before scaling any AI programme.',
        responsibilities: [
          'Build and maintain data pipelines',
          'Ensure data quality, consistency, and accessibility',
          'Manage integrations across systems',
          'Support data governance frameworks',
        ],
        emerging: false,
      },
    ],
  },
  {
    level: 'Business & Product',
    color: '#3A508A',
    bg: '#ECEEF7',
    roles: [
      {
        title: 'AI Product Manager',
        abbr: 'APM',
        when: '50+ staff, deploying AI to end users',
        reportsTo: 'Head of AI / Head of Product',
        description:
          'Sits at the intersection of business and technology. Translates commercial problems into AI use cases, manages the roadmap, and ensures tools get adopted.',
        responsibilities: [
          'Define and prioritise AI use case roadmap',
          'Manage stakeholder expectations and change',
          'Drive end-user adoption of AI tools',
          'Measure and report on AI business impact',
        ],
        emerging: false,
      },
      {
        title: 'Prompt Engineer',
        abbr: 'PE',
        when: 'Deploying AI to non-technical staff',
        reportsTo: 'AI Product Manager / Head of AI',
        description:
          'Designs the prompts, templates, and AI workflows that enable non-technical staff to get consistent, high-quality outputs. Often evolves into an AI Interaction Designer.',
        responsibilities: [
          'Build and maintain enterprise prompt libraries',
          'Design AI workflows for business users',
          'Ensure output quality and consistency',
          'Train staff on effective AI use',
        ],
        emerging: false,
      },
    ],
  },
  {
    level: 'Governance & Emerging Roles',
    color: '#8A3050',
    bg: '#F6ECF0',
    roles: [
      {
        title: 'AI Ethics & Governance Officer',
        abbr: 'AEGO',
        when: 'Regulated industries · 200+ staff',
        reportsTo: 'General Counsel / CAIO',
        description:
          'Ensures AI is used responsibly and in compliance with regulation. Owns the governance framework, bias auditing, and incident management as AI regulation tightens globally.',
        responsibilities: [
          'Own the AI governance and ethics framework',
          'Audit AI models for bias and fairness',
          'Manage regulatory compliance (EU AI Act, AU framework)',
          'Document AI decisions for accountability',
        ],
        emerging: true,
      },
      {
        title: 'AI Operations Manager',
        abbr: 'AIOps',
        when: 'Multiple AI systems in production',
        reportsTo: 'Head of AI',
        description:
          'Oversees the day-to-day operation of AI systems in production. Monitors performance, manages the tooling stack, and handles vendor relationships.',
        responsibilities: [
          'Monitor AI system performance and uptime',
          'Manage AI tooling stack and vendor contracts',
          'Coordinate incident response for AI failures',
          'Optimise AI spend and resource allocation',
        ],
        emerging: true,
      },
      {
        title: 'AI Trainer / RLHF Specialist',
        abbr: 'AIT',
        when: 'Building or fine-tuning custom models',
        reportsTo: 'AI/ML Engineer',
        description:
          'Curates training data, oversees human feedback loops (RLHF), and evaluates model quality. Increasingly important as businesses move from off-the-shelf to customised AI.',
        responsibilities: [
          'Curate and quality-check AI training datasets',
          'Manage human-in-the-loop feedback processes',
          'Evaluate model outputs for accuracy and bias',
          'Support continuous model improvement',
        ],
        emerging: true,
      },
    ],
  },
]

const TIMELINE = [
  {
    year: '2025',
    label: 'Early Stage',
    color: '#B8B4AC',
    roles: ['CTO or CDO owns AI', 'External consultants', '1–2 internal AI champions', 'No dedicated budget'],
    note: 'Most mid-market businesses are here today.',
  },
  {
    year: '2026',
    label: 'First Dedicated Hire',
    color: '#C9A96E',
    roles: ['Head of AI appointed', 'Data Engineer hired', 'AI budget formalised', 'AI readiness assessed'],
    note: 'The businesses moving fastest are making this hire now.',
  },
  {
    year: '2027–28',
    label: 'The AI Function',
    color: '#3A3834',
    roles: ['AI team of 4–8 people', 'AI Architect in place', 'AI Product Manager on roadmap', 'Governance framework live'],
    note: 'AI embedded in 3+ departments with dedicated champions.',
  },
  {
    year: '2029–30',
    label: 'AI-Native Organisation',
    color: '#2E6E50',
    roles: ['CAIO at board level', 'Full AI function (10–25+)', 'AI in every department', 'Real-time governance & monitoring'],
    note: 'Competitive moat built through institutional AI capability.',
  },
]

const OWNERSHIP = [
  { size: 'Under 50 staff', owner: 'Existing CTO or COO', detail: 'Assign AI ownership as a formal part of a senior role. Bring in an external advisor for strategy.' },
  { size: '50–200 staff', owner: 'Head of AI (first dedicated hire)', detail: 'This is the inflection point. A dedicated Head of AI with clear mandate is the highest-ROI AI hire you can make.' },
  { size: '200–500 staff', owner: 'VP of AI + small team', detail: 'Add a Data Engineer and AI Product Manager. Begin formalising governance and use case prioritisation.' },
  { size: '500+ staff', owner: 'CAIO with full AI function', detail: 'AI deserves C-suite representation. A CAIO with cross-functional authority ensures AI strategy aligns with business strategy.' },
]

export default function AiTeamStructurePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-near-black pt-40 pb-24 px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-8">
            Resources · AI Team Structure
          </p>
          <h1 className="font-display font-light text-[clamp(44px,5vw,76px)] leading-[1.08] text-warm-white mb-6 tracking-[-0.01em] max-w-[820px]">
            How to structure your AI team —<br />
            <em className="italic text-gold">from first hire to full function.</em>
          </h1>
          <p className="font-body text-[17px] leading-[1.8] text-warm-white/60 max-w-[580px] font-light mb-10">
            Every AI role explained — what it does, when to hire it, who it reports to, and what your team should look like in 2, 3, and 5 years.
          </p>
          <div className="flex flex-wrap gap-3">
            {['AI Team Structure', 'What AI Roles to Hire', 'Who Should Manage AI', 'CAIO', 'AI Architect', 'Future of Work'].map(tag => (
              <span key={tag} className="font-body text-[10px] tracking-[0.12em] uppercase text-warm-white/30 border border-warm-white/10 px-3 py-1.5">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-warm-white py-[clamp(60px,7vw,90px)] px-8 lg:px-12 border-b border-parchment">
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 items-start">
          <div>
            <p className="font-body text-[10px] tracking-[0.25em] uppercase text-ash mb-6">Why This Matters</p>
            <h2 className="font-display font-light text-[clamp(28px,3vw,42px)] text-near-black leading-[1.2] mb-6">
              Most businesses don&apos;t have an AI team.<br />
              <em className="italic text-gold">That&apos;s about to change.</em>
            </h2>
            <p className="font-body text-[15px] leading-[1.85] text-slate-warm font-light mb-5">
              In 2023, most organisations had no dedicated AI roles. AI was owned by the CTO, experimented with by enthusiasts, and governed by no one. That model is failing — and businesses are noticing.
            </p>
            <p className="font-body text-[15px] leading-[1.85] text-slate-warm font-light">
              The companies seeing the strongest AI returns have one thing in common: a clearly defined AI function with real accountability. This guide covers every role, when to hire it, and how to structure it as your programme grows.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { stat: '73%', label: 'increase in CAIO and Head of AI roles on LinkedIn, 2022–2024' },
              { stat: '1 in 3', label: 'Fortune 500 companies now have a dedicated Chief AI Officer' },
              { stat: '4×', label: 'productivity growth in organisations with dedicated AI functions vs those without' },
              { stat: '2026', label: 'year by which most mid-market businesses will need a formal AI owner' },
            ].map(item => (
              <div key={item.stat} className="bg-ivory border border-parchment p-6">
                <p className="font-display font-light text-[clamp(32px,3vw,44px)] text-gold leading-none mb-2">
                  {item.stat}
                </p>
                <p className="font-body text-[12px] leading-[1.65] text-slate-warm font-light">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Org chart — tiered role cards */}
      <section className="bg-ivory py-[clamp(60px,8vw,100px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <div className="mb-14">
            <p className="font-body text-[10px] tracking-[0.25em] uppercase text-ash mb-4">The AI Org Chart</p>
            <h2 className="font-display font-light text-[clamp(28px,3vw,42px)] text-near-black leading-[1.2]">
              Every AI role — explained.
            </h2>
          </div>

          <div className="space-y-10">
            {TIERS.map(tier => (
              <div key={tier.level}>
                {/* Tier label */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: tier.color }} />
                  <p className="font-body text-[11px] tracking-[0.2em] uppercase" style={{ color: tier.color }}>
                    {tier.level}
                  </p>
                  <div className="flex-1 h-px bg-parchment" />
                </div>

                {/* Role cards */}
                <div className={`grid gap-4 ${tier.roles.length === 1 ? 'grid-cols-1 max-w-[560px]' : tier.roles.length === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
                  {tier.roles.map(role => (
                    <div
                      key={role.title}
                      className="bg-warm-white border border-parchment overflow-hidden hover:shadow-[0_4px_20px_rgba(30,28,26,0.07)] transition-shadow duration-200"
                    >
                      {/* Coloured top stripe */}
                      <div className="h-[3px]" style={{ backgroundColor: tier.color }} />

                      <div className="p-7">
                        {/* Header */}
                        <div className="flex items-start justify-between gap-3 mb-4">
                          <div>
                            <h3 className="font-display font-light text-[22px] text-near-black leading-[1.2]">
                              {role.title}
                            </h3>
                            <p className="font-body text-[10px] tracking-[0.15em] uppercase text-ash mt-1">
                              Reports to: {role.reportsTo}
                            </p>
                          </div>
                          <div className="flex flex-col items-end gap-1.5 shrink-0">
                            <span
                              className="font-body text-[9px] tracking-[0.12em] uppercase px-2 py-1 border font-medium"
                              style={{ color: tier.color, borderColor: tier.color, backgroundColor: tier.bg }}
                            >
                              {role.abbr}
                            </span>
                            {role.emerging && (
                              <span className="font-body text-[9px] tracking-[0.1em] uppercase px-2 py-1 bg-gold/10 text-gold border border-gold/20">
                                Emerging
                              </span>
                            )}
                          </div>
                        </div>

                        <p className="font-body text-[13px] leading-[1.75] text-slate-warm font-light mb-5">
                          {role.description}
                        </p>

                        {/* Responsibilities */}
                        <div className="space-y-2 mb-5">
                          {role.responsibilities.map((r, i) => (
                            <div key={i} className="flex items-start gap-2.5">
                              <span className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ backgroundColor: tier.color }} />
                              <p className="font-body text-[12px] leading-[1.65] text-charcoal font-light">{r}</p>
                            </div>
                          ))}
                        </div>

                        {/* When to hire */}
                        <div className="pt-4 border-t border-parchment" style={{ backgroundColor: 'transparent' }}>
                          <p className="font-body text-[9px] tracking-[0.18em] uppercase text-ash mb-1">When to hire</p>
                          <p className="font-body text-[12px] text-charcoal font-light">{role.when}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-near-black py-[clamp(60px,8vw,100px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <div className="mb-14">
            <p className="font-body text-[10px] tracking-[0.25em] uppercase text-gold mb-4">Evolution Timeline</p>
            <h2 className="font-display font-light text-[clamp(28px,3vw,42px)] text-warm-white leading-[1.2]">
              What your AI team looks like<br />
              <em className="italic text-gold">at every stage.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-warm-white/10">
            {TIMELINE.map((stage, i) => (
              <div key={stage.year} className="bg-near-black p-8 relative">
                {/* Stage number */}
                <p className="font-display text-[clamp(52px,5vw,72px)] font-light leading-none mb-1"
                  style={{ color: stage.color, opacity: 0.3 }}>
                  {String(i + 1).padStart(2, '0')}
                </p>
                <p className="font-display font-light text-[22px] text-warm-white leading-none mb-1">
                  {stage.year}
                </p>
                <p className="font-body text-[10px] tracking-[0.2em] uppercase mb-6" style={{ color: stage.color }}>
                  {stage.label}
                </p>
                <div className="space-y-2.5 mb-6">
                  {stage.roles.map(r => (
                    <div key={r} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: stage.color }} />
                      <p className="font-body text-[12px] leading-[1.65] text-warm-white/60 font-light">{r}</p>
                    </div>
                  ))}
                </div>
                <p className="font-body text-[11px] leading-[1.7] text-warm-white/35 font-light italic">
                  {stage.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who should own AI */}
      <section className="bg-warm-white py-[clamp(60px,8vw,100px)] px-8 lg:px-12">
        <div className="max-w-[1180px] mx-auto">
          <div className="mb-14">
            <p className="font-body text-[10px] tracking-[0.25em] uppercase text-ash mb-4">Ownership Guide</p>
            <h2 className="font-display font-light text-[clamp(28px,3vw,42px)] text-near-black leading-[1.2]">
              Who should manage AI<br />
              <em className="italic text-gold">in your business?</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {OWNERSHIP.map((item, i) => (
              <div key={item.size} className="bg-ivory border border-parchment p-8 flex gap-6 items-start">
                <div className="font-display text-[clamp(36px,3.5vw,52px)] font-light text-gold/30 leading-none shrink-0 w-14 text-right">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <p className="font-body text-[10px] tracking-[0.18em] uppercase text-ash mb-1.5">{item.size}</p>
                  <h3 className="font-display font-light text-[20px] text-near-black leading-[1.25] mb-3">
                    {item.owner}
                  </h3>
                  <p className="font-body text-[13px] leading-[1.75] text-slate-warm font-light">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related article + CTA row */}
      <section className="bg-ivory py-16 px-8 lg:px-12 border-t border-parchment">
        <div className="max-w-[1180px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-gold mb-2">Related Reading</p>
            <p className="font-display font-light text-[22px] text-near-black leading-snug mb-1">
              The roles being created right now — and the jobs of the future
            </p>
            <p className="font-body text-[13px] text-slate-warm font-light">
              Chief AI Officers, AI Architects, Prompt Engineers — a deep dive into the new AI org.
            </p>
          </div>
          <Link
            href="/insights/emerging-ai-roles-future"
            className="font-body text-[12px] tracking-[0.1em] uppercase text-near-black border border-near-black px-8 py-4 hover:bg-near-black hover:text-warm-white transition-all duration-200 whitespace-nowrap shrink-0"
          >
            Read the Article →
          </Link>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
