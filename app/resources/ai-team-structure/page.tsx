import type { Metadata } from 'next'
import CTABanner from '@/components/CTABanner'
import { TextLink } from '@/components/lumii/primitives'
import { Breadcrumbs, JsonLd, SITE_URL } from '@/components/lumii/seo'

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
  const url = `${SITE_URL}/resources/ai-team-structure`
  return (
    <div className="lumii">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'How to structure your AI team — from first hire to full function',
          description:
            'The 8 roles every AI-capable business needs, the 5 you hire first, and where they sit in the org.',
          author: { '@type': 'Person', '@id': `${SITE_URL}/#agata`, name: 'Agata Adamczak' },
          publisher: { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: 'Lumii Advisory' },
          url,
          mainEntityOfPage: url,
          inLanguage: 'en-AU',
        }}
      />

      <section className="page-intro section wide">
        <Breadcrumbs
          trail={[
            { name: 'Resources', href: '/resources' },
            { name: 'AI team structure', href: '/resources/ai-team-structure' },
          ]}
        />
        <p className="eyebrow">REFERENCE GUIDE · AI TEAM STRUCTURE</p>
        <h1>How to structure your AI team — from first hire to full function.</h1>
        <p className="page-lead">
          Every AI role explained — what it does, when to hire it, who it reports to, and what your
          team should look like in 2, 3, and 5 years.
        </p>
        <div className="tag-list">
          {['AI Team Structure', 'What AI Roles to Hire', 'Who Should Manage AI', 'CAIO', 'AI Architect', 'Future of Work'].map(
            (tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ),
          )}
        </div>
      </section>

      <section className="section split" aria-labelledby="why-title">
        <div>
          <p className="eyebrow">WHY THIS MATTERS</p>
          <h2 id="why-title">Most businesses don’t have an AI team. That’s about to change.</h2>
          <div className="prose stack-top">
            <p>
              In 2023, most organisations had no dedicated AI roles. AI was owned by the CTO,
              experimented with by enthusiasts, and governed by no one. That model is failing — and
              businesses are noticing.
            </p>
            <p>
              The companies seeing the strongest AI returns have one thing in common: a clearly defined
              AI function with real accountability. This guide covers every role, when to hire it, and
              how to structure it as your programme grows.
            </p>
          </div>
        </div>
        <div className="stat-row two">
          {[
            { stat: '73%', label: 'increase in CAIO and Head of AI roles on LinkedIn, 2022–2024' },
            { stat: '1 in 3', label: 'Fortune 500 companies now have a dedicated Chief AI Officer' },
            { stat: '4×', label: 'productivity growth in organisations with dedicated AI functions vs those without' },
            { stat: '2026', label: 'year by which most mid-market businesses will need a formal AI owner' },
          ].map((item) => (
            <div className="stat" key={item.stat}>
              <strong>{item.stat}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section tint" aria-labelledby="roles-title">
        <div className="section-top">
          <div>
            <p className="eyebrow">THE AI ORG CHART</p>
            <h2 id="roles-title">Every AI role — explained.</h2>
          </div>
        </div>
        {TIERS.map((tier) => (
          <div key={tier.level} className="stack-top">
            <h3 className="category-title">
              <span className="brand-dot" style={{ background: 'var(--ink)' }} aria-hidden="true" />
              {tier.level}
            </h3>
            <div className={`card-grid ${tier.roles.length >= 3 ? 'three' : 'two'} stack-top`}>
              {tier.roles.map((role) => (
                <article className="content-card" key={role.title}>
                  <p className="eyebrow">
                    {role.abbr} · REPORTS TO {role.reportsTo.toUpperCase()}
                  </p>
                  <h4 className="role-title">{role.title}</h4>
                  {role.emerging ? <span className="tag">Emerging role</span> : null}
                  <p>{role.description}</p>
                  <ul className="deliverables">
                    {role.responsibilities.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                  <p className="form-note stack-top">
                    <strong>When to hire:</strong> {role.when}
                  </p>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="section method" aria-labelledby="timeline-title">
        <p className="eyebrow">EVOLUTION TIMELINE</p>
        <h2 id="timeline-title">What your AI team looks like at every stage.</h2>
        <div className="card-grid four stack-top">
          {TIMELINE.map((stage, i) => (
            <article className="content-card" key={stage.year}>
              <p className="eyebrow">
                {String(i + 1).padStart(2, '0')} · {stage.label.toUpperCase()}
              </p>
              <h3>{stage.year}</h3>
              <ul className="deliverables on-dark">
                {stage.roles.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
              <p className="stack-top">{stage.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="own-title">
        <div className="section-top">
          <div>
            <p className="eyebrow">OWNERSHIP GUIDE</p>
            <h2 id="own-title">Who should manage AI in your business?</h2>
          </div>
        </div>
        <div className="editorial-list">
          {OWNERSHIP.map((item) => (
            <article key={item.size}>
              <p className="eyebrow">{item.size.toUpperCase()}</p>
              <h3>{item.owner}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section secondary-offer" aria-label="Related reading">
        <div>
          <p className="eyebrow">RELATED READING</p>
          <h2>The roles being created right now.</h2>
        </div>
        <div>
          <p>
            Chief AI Officers, AI Architects, Prompt Engineers — a deep dive into the new AI org, and the
            jobs coming in the next five years.
          </p>
          <TextLink href="/insights/emerging-ai-roles-future">Read the article</TextLink>
          <TextLink href="/ai-enablement">How AI enablement builds the team’s capability</TextLink>
        </div>
      </section>

      <CTABanner variant="reading" />
    </div>
  )
}
