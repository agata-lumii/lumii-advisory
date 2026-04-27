export type Tier = 'free' | 'pro' | 'enterprise'

export interface PlatformTool {
  name: string
  tier: Tier
  bestFor: string
  description: string
}

export interface ToolCategory {
  category: string
  tools: PlatformTool[]
}

export interface UseCase {
  industry: string
  scenario: string
  toolsUsed: string[]
  outcome: string
}

export interface Platform {
  slug: string
  name: string
  brand: string
  tagline: string
  brandColor: string
  overview: string
  overviewPoints: string[]
  toolCategories: ToolCategory[]
  useCases: UseCase[]
  metaTitle: string
  metaDescription: string
}

export const platforms: Platform[] = [
  {
    slug: 'openai',
    name: 'ChatGPT & OpenAI',
    brand: 'OpenAI',
    tagline: 'The platform that started the modern AI era',
    brandColor: '#10A37F',
    overview:
      'OpenAI is the company behind ChatGPT and the GPT series of models — the most widely adopted AI platform in the world. With hundreds of millions of weekly users, it spans consumer chat, creative tools, developer APIs, and enterprise deployment. For businesses, the combination of GPT-5\'s broad capability, the o-series reasoning models, the Custom GPTs ecosystem, and Operator for agentic work makes it the most versatile starting point for AI adoption.',
    overviewPoints: [
      'Largest AI ecosystem with the widest third-party integrations and plugin library',
      'GPT-5 and the o-series reasoning models lead general-purpose reasoning benchmarks',
      'Custom GPTs let anyone build a tailored AI tool — no coding required',
      'Operator and ChatGPT Agents deliver autonomous task completion across the web',
    ],
    toolCategories: [
      {
        category: 'Reason & Chat',
        tools: [
          {
            name: 'GPT-5',
            tier: 'free',
            bestFor: 'Everyday text, vision, and voice tasks',
            description:
              'OpenAI\'s flagship multimodal model handles text, images, files, and real-time voice with strong all-round performance. It\'s the best default starting point for most business tasks — drafting, summarising, explaining, and analysing content across any format. Available on the free tier with limits and via Pro with higher usage.',
          },
          {
            name: 'o3',
            tier: 'pro',
            bestFor: 'Complex, multi-step reasoning and analysis',
            description:
              'o3 is OpenAI\'s most capable reasoning model — thinking step-by-step before responding to deliver significantly better results on tasks requiring careful logical deduction. Ideal for legal analysis, financial modelling logic, and research where accuracy matters more than response speed. The reasoning trace makes conclusions verifiable.',
          },
          {
            name: 'o4-mini',
            tier: 'pro',
            bestFor: 'Fast, accurate coding and technical tasks',
            description:
              'A smaller, faster reasoning model optimised for coding, mathematics, and structured technical tasks. Delivers near-frontier reasoning quality at a fraction of the cost and latency — ideal for development teams embedding reasoning capabilities into automated workflows and pipelines.',
          },
        ],
      },
      {
        category: 'Create',
        tools: [
          {
            name: 'DALL-E 3',
            tier: 'pro',
            bestFor: 'Business image and visual asset creation',
            description:
              'OpenAI\'s image generation model creates detailed, high-quality images from text prompts and integrates directly with ChatGPT for iterative creative work. Best for producing concept visuals, marketing images, presentation graphics, and branded content at scale — without needing a designer for every iteration.',
          },
          {
            name: 'Sora',
            tier: 'pro',
            bestFor: 'AI video generation from text descriptions',
            description:
              'Sora generates short, cinematic-quality video clips from text descriptions. Currently best suited for concept visualisation, brand storytelling, and early-stage content production. Quality and coherence limitations mean it supplements — rather than replaces — traditional video production.',
          },
          {
            name: 'Voice Mode',
            tier: 'pro',
            bestFor: 'Natural real-time spoken conversations',
            description:
              'Advanced Voice Mode enables low-latency, natural voice conversations with GPT-4o, including detection and response to emotional tone in speech. Useful for training simulations, accessibility-focused applications, and conversational interface prototyping.',
          },
        ],
      },
      {
        category: 'Build',
        tools: [
          {
            name: 'Custom GPTs',
            tier: 'free',
            bestFor: 'Tailored AI tools for specific tasks',
            description:
              'Custom GPTs allow anyone to build a specialised AI assistant using instructions, uploaded knowledge files, and tool integrations — no coding required. Businesses use them to create internal knowledge bases, brand voice assistants, client onboarding guides, and customer-facing support tools.',
          },
          {
            name: 'Assistants API',
            tier: 'enterprise',
            bestFor: 'Building AI-powered applications at scale',
            description:
              'The Assistants API provides infrastructure to embed GPT-based AI into products and workflows — with persistent thread management, file storage, and integrated tools including code execution and web search. Used by development teams building customer-facing AI features that need memory and tool use.',
          },
          {
            name: 'Operator',
            tier: 'pro',
            bestFor: 'Autonomous web task completion',
            description:
              'Operator is an AI agent that browses the web, interacts with websites, and completes multi-step tasks autonomously — from filling forms to placing orders. It represents the leading edge of agentic AI and is useful for repetitive web-based workflows requiring minimal supervision.',
          },
        ],
      },
      {
        category: 'Deploy',
        tools: [
          {
            name: 'ChatGPT Team',
            tier: 'pro',
            bestFor: 'Shared AI workspace for growing teams',
            description:
              'ChatGPT Team provides a collaborative workspace with shared Custom GPTs, higher usage limits, and data privacy guarantees — conversations are excluded from model training. Best suited for teams of 2–149 who want a simple, managed AI environment without the complexity of enterprise procurement.',
          },
          {
            name: 'ChatGPT Enterprise',
            tier: 'enterprise',
            bestFor: 'Enterprise-grade AI with security and control',
            description:
              'ChatGPT Enterprise adds SSO, admin controls, usage analytics, unlimited GPT-4o access, and a 128K context window. SOC 2 Type II compliant with data isolation and no training on company conversations. The appropriate tier for regulated industries and organisations with strict data governance requirements.',
          },
        ],
      },
    ],
    useCases: [
      {
        industry: 'Financial Services',
        scenario:
          'An asset management firm receives 50+ analyst reports weekly. Research associates spend 40% of their day reading and summarising before material reaches portfolio managers.',
        toolsUsed: ['GPT-5', 'Custom GPTs'],
        outcome:
          'A Custom GPT built on the firm\'s investment thesis and sector criteria reviews each incoming report, produces a structured one-page brief, and flags relevance to current positions. Research review time drops from two hours to 20 minutes per analyst per day.',
      },
      {
        industry: 'Marketing',
        scenario:
          'A brand needs to produce 200+ creative assets per quarter across social, digital, and print formats in multiple markets. The creative team is at capacity with no budget for additional headcount.',
        toolsUsed: ['GPT-5', 'DALL-E 3', 'Custom GPTs'],
        outcome:
          'A Custom GPT loaded with brand guidelines generates copy variations instantly. DALL-E 3 produces on-brand concept visuals for review. Campaign production time per brief reduces by 65%, enabling the team to run three times more campaigns without increasing headcount.',
      },
      {
        industry: 'Professional Services',
        scenario:
          'Associates at a commercial law firm spend six to eight hours reviewing commercial agreements for risk before escalating to senior review — a significant cost for routine, standard-form contracts.',
        toolsUsed: ['o3', 'GPT-5'],
        outcome:
          'o3\'s step-by-step reasoning flags unusual clauses, missing protections, and jurisdiction-specific risks across standard agreements. First-pass review time drops to under 90 minutes. Senior partner escalations for routine contracts reduce significantly, freeing capacity for complex matters.',
      },
      {
        industry: 'Retail',
        scenario:
          'A 200-person customer service team supports 8,000 SKUs across a complex product range. Agents frequently escalate queries due to gaps in product knowledge, driving high handling times and re-contact rates.',
        toolsUsed: ['Custom GPTs', 'Assistants API'],
        outcome:
          'A Custom GPT trained on product catalogues, returns policy, and FAQs resolves 60% of queries instantly. The Assistants API surfaces relevant information mid-conversation for remaining queries. Average handling time falls 40% and the escalation rate drops across all product categories.',
      },
    ],
    metaTitle: 'ChatGPT for Business: Use Cases, Pricing & Setup Guide',
    metaDescription:
      "A practical guide to ChatGPT and OpenAI's products for mid-market businesses — what to use, what to avoid, and how to deploy responsibly.",
  },

  {
    slug: 'claude',
    name: 'Claude & Anthropic',
    brand: 'Anthropic',
    tagline: 'The AI built for nuanced thinking, code, and design',
    brandColor: '#C07045',
    overview:
      'Anthropic is the AI safety company behind Claude — widely regarded as the best AI model for nuanced writing, careful reasoning, and long-document analysis. The current Claude 4 family (Opus, Sonnet, Haiku) leads independent benchmarks for reasoning, coding, and agentic task completion. Claude\'s ecosystem has grown well beyond the chat window: Claude Code turns the terminal into a full-stack engineering partner, Claude Design produces production-quality web prototypes from plain-English briefs, and the Agent SDK + MCP let teams build their own AI agents with access to internal systems.',
    overviewPoints: [
      'Claude Opus 4 leads industry benchmarks for coding, reasoning, and long-horizon agentic work',
      'Claude Code turns plain-English instructions into shipped software — used by engineering teams worldwide',
      'Claude Design generates fully styled, interactive web prototypes in minutes — not days',
      'Projects, MCP, and the Agent SDK let teams build custom AI tools grounded in their own data',
    ],
    toolCategories: [
      {
        category: 'Models',
        tools: [
          {
            name: 'Claude Sonnet 4.5',
            tier: 'free',
            bestFor: 'Writing, analysis, and everyday reasoning',
            description:
              'Anthropic\'s flagship general-purpose model and the best all-round performer in the Claude family. Consistently ranks at the top of independent benchmarks for writing quality, instruction-following, and nuanced reasoning. Available free with limits and via Pro for higher usage — the right default for most professional tasks.',
          },
          {
            name: 'Claude Opus 4.5',
            tier: 'pro',
            bestFor: 'Deepest reasoning, coding, and agentic work',
            description:
              'Claude Opus 4.5 is Anthropic\'s most capable model — purpose-built for complex, long-running tasks including multi-file coding, multi-step research, and agentic workflows that require sustained reasoning. The model behind Claude Code\'s most demanding workloads and the default choice for tasks where quality and depth outweigh cost.',
          },
          {
            name: 'Claude Haiku 4.5',
            tier: 'pro',
            bestFor: 'Fast, high-volume processing at scale',
            description:
              'The fastest and most cost-efficient Claude model, designed for tasks that need scale rather than depth — bulk document tagging, content classification, first-pass drafting, and API-integrated workflows requiring sub-second response times. Available via the Pro plan and the Anthropic API.',
          },
        ],
      },
      {
        category: 'Workspace',
        tools: [
          {
            name: 'Projects',
            tier: 'pro',
            bestFor: 'Persistent memory for ongoing work',
            description:
              'Projects give Claude persistent memory across conversations — upload documents, style guides, templates, and prior outputs that Claude retains throughout the project. Ideal for ongoing client engagements, content programmes, and any work that requires consistent context across multiple sessions.',
          },
          {
            name: 'Claude Design',
            tier: 'pro',
            bestFor: 'Rapid web prototyping and design mockups',
            description:
              'Claude Design turns plain-English descriptions into fully styled, interactive web prototypes — complete with typography, layout, imagery, and responsive behaviour. Designers, founders, and marketers use it to mock up landing pages, pitch decks, and full marketing sites in minutes. Outputs can be exported as HTML or handed to developers as a visual specification.',
          },
          {
            name: 'Artifacts',
            tier: 'free',
            bestFor: 'Shareable, interactive generated outputs',
            description:
              'Artifacts renders Claude\'s outputs — documents, code, charts, and structured data — as standalone, shareable interactive objects within the conversation. Useful for producing polished outputs that can be handed directly to clients or colleagues without reformatting.',
          },
          {
            name: 'Analysis Tool',
            tier: 'pro',
            bestFor: 'Interrogating uploaded data files',
            description:
              'The Analysis Tool allows Claude to run Python code against uploaded files — spreadsheets, CSVs, and structured data — to produce visualisations, statistical summaries, and data-driven insights directly within the conversation. Replaces basic analyst work for structured datasets.',
          },
        ],
      },
      {
        category: 'Developer',
        tools: [
          {
            name: 'Claude Code',
            tier: 'pro',
            bestFor: 'Agentic coding in the terminal and IDE',
            description:
              'Claude Code is Anthropic\'s flagship agentic coding tool — a command-line companion that understands entire codebases, edits multiple files simultaneously, runs tests, commits to Git, and ships real software. Engineering teams use it to accelerate delivery on bug fixes, feature builds, refactors, and migrations while keeping a human in the loop. Integrates directly with GitHub, VS Code, and most modern development environments.',
          },
          {
            name: 'Claude Agent SDK',
            tier: 'enterprise',
            bestFor: 'Building custom AI agents on Claude',
            description:
              'The Claude Agent SDK is the same framework that powers Claude Code — now available to developers and product teams building their own agents. It handles tool calls, memory, subagents, and long-running task loops out of the box. Used by organisations building internal AI assistants that can read from their systems, take actions, and deliver end-to-end workflows.',
          },
          {
            name: 'Claude API',
            tier: 'enterprise',
            bestFor: 'Integrating Claude into products and workflows',
            description:
              'The Claude API provides production-grade access to all Anthropic models with pay-per-token pricing, fine-grained model selection, and enterprise SLAs. Used by development teams embedding Claude into customer-facing applications, internal tools, and automated processing pipelines.',
          },
          {
            name: 'Claude MCP',
            tier: 'enterprise',
            bestFor: 'Connecting Claude to your data and tools',
            description:
              'Model Context Protocol (MCP) is Anthropic\'s open standard for connecting AI models to external data sources, tools, and APIs. MCP integrations allow Claude to read from databases, query internal systems, and take actions in connected tools — moving beyond conversation into genuine workflow automation. Rapidly becoming the industry default, with major vendors shipping native MCP support.',
          },
          {
            name: 'Workbench',
            tier: 'pro',
            bestFor: 'Prompt engineering and model testing',
            description:
              'Anthropic\'s Workbench is a visual environment for building, testing, and refining prompts before deploying them to production. Teams use it to systematically improve prompt quality, compare model outputs, and benchmark performance across different Claude versions.',
          },
        ],
      },
      {
        category: 'Plans',
        tools: [
          {
            name: 'Claude Team',
            tier: 'pro',
            bestFor: 'Shared workspace with centralised billing',
            description:
              'Claude Team provides higher usage limits, Projects access for all members, and centralised admin billing for teams of up to 50 users. A straightforward step up from individual Pro accounts when a team needs shared context and consistent tooling without enterprise procurement.',
          },
          {
            name: 'Claude Enterprise',
            tier: 'enterprise',
            bestFor: 'Secure enterprise deployment with full control',
            description:
              'Claude Enterprise adds SSO, advanced admin controls, usage analytics, expanded context windows, and a guaranteed zero data retention policy. Designed for regulated industries and large organisations requiring audit trails, role-based access, and contractual data protection.',
          },
        ],
      },
    ],
    useCases: [
      {
        industry: 'Financial Services',
        scenario:
          'A private equity firm needs board-level quarterly reports for 12 portfolio companies, each requiring consistent regulatory language and the firm\'s house formatting style. Writing each report takes a senior analyst four hours.',
        toolsUsed: ['Projects', 'Claude Sonnet 4.5'],
        outcome:
          'A Project configured with the firm\'s style guide, regulatory requirements, and prior report examples generates first drafts for each portfolio company in minutes. Each report requires 45 minutes of editing rather than four hours of writing. Consistency across reports improves significantly, reducing compliance review time.',
      },
      {
        industry: 'Marketing & Agency',
        scenario:
          'A boutique branding agency wins a pitch and needs to show a prospective client three distinct landing page concepts within 48 hours. Traditional mockup production would take their design team five days and push the pitch past the deadline.',
        toolsUsed: ['Claude Design', 'Projects'],
        outcome:
          'The strategist briefs Claude Design on the client\'s positioning and three creative directions. Within four hours, three fully styled, responsive landing pages are mocked up — typography, imagery placeholders, copy, and micro-interactions included. The client picks a direction on the call and signs the engagement on the same day. Pitch-to-concept time reduces by 80%.',
      },
      {
        industry: 'Technology & SaaS',
        scenario:
          'A mid-market SaaS company\'s 15-person engineering team has a backlog of 40+ small bugs, UI polish items, and dependency upgrades that never reach the top of sprint planning. The accumulated debt is slowing delivery on bigger features.',
        toolsUsed: ['Claude Code', 'Claude Opus 4.5'],
        outcome:
          'Engineers pair with Claude Code in the terminal — scoping each backlog ticket, letting Claude implement the change across affected files, running the test suite, and opening a PR for human review. The 40-item backlog is cleared in three sprints instead of three quarters. Senior engineering time is redirected from small fixes to architecture and hard technical problems.',
      },
      {
        industry: 'Professional Services',
        scenario:
          'Partners at a management consulting firm must review 600-page due diligence bundles before client meetings — a process that takes five hours and limits how many engagements can run simultaneously.',
        toolsUsed: ['Claude Sonnet 4.5', 'Analysis Tool'],
        outcome:
          'The entire document bundle is uploaded in a single conversation. Claude identifies key risk areas, cross-references inconsistencies across documents, and produces a structured executive summary with specific page references. Partner preparation time drops from five hours to under one hour.',
      },
      {
        industry: 'Creative Services',
        scenario:
          'A creative agency manages 12 brand accounts, each with a distinct tone of voice. Copywriters spend 30–45 minutes re-reading brand guidelines before starting each new brief.',
        toolsUsed: ['Projects', 'Artifacts'],
        outcome:
          'Each brand has its own Claude Project loaded with guidelines, sample copy, and tone rules. Writers begin any task with the brand\'s full context immediately active. Output quality improves measurably and client revision requests drop by 40% in the quarter following implementation.',
      },
      {
        industry: 'Real Estate',
        scenario:
          'A commercial property agency produces 30–40 property marketing reports monthly. Each takes three to four hours to write from scratch using raw sales data and location research.',
        toolsUsed: ['Claude Sonnet 4.5', 'Artifacts'],
        outcome:
          'Property data, comparables, and location notes are pasted into Claude. A first draft — including investment thesis, location analysis, and comparable sales narrative — is generated in minutes. Artifacts renders a structured, shareable version ready for client delivery. Production time drops to under 45 minutes per report.',
      },
    ],
    metaTitle: 'Claude AI for Business: Use Cases, Pricing & Setup Guide',
    metaDescription:
      'What Claude (by Anthropic) does best for businesses — long documents, careful reasoning, code & enterprise data. With pricing, setup and use cases.',
  },

  {
    slug: 'gemini',
    name: 'Gemini & Google AI',
    brand: 'Google',
    tagline: 'AI woven into the tools your organisation already uses',
    brandColor: '#4285F4',
    overview:
      'Google\'s Gemini platform is the most deeply integrated AI ecosystem for organisations already running Google Workspace. Gemini models power AI features across Gmail, Docs, Sheets, and Meet — as well as standalone research tools like NotebookLM and Deep Research. With a two-million-token context window in Gemini 2.5 Pro, it handles document volumes no other consumer platform can match.',
    overviewPoints: [
      'Native integration with Google Workspace — Gmail, Docs, Sheets, Meet, and Drive',
      '2M token context window in Gemini 2.5 Pro — process entire report libraries at once',
      'NotebookLM is the best AI research tool for document-heavy knowledge work',
      'Deep Research produces comprehensive, cited research reports autonomously',
    ],
    toolCategories: [
      {
        category: 'Models',
        tools: [
          {
            name: 'Gemini 2.5 Pro',
            tier: 'pro',
            bestFor: 'Massive document analysis and reasoning',
            description:
              'Gemini 2.5 Pro\'s two-million-token context window is its defining capability — it can process entire codebases, legal archives, or report libraries in a single conversation. Strong at reasoning, multimodal inputs, and tasks requiring sustained attention across very large documents. Available via Google One AI Premium.',
          },
          {
            name: 'Gemini 2.5 Flash',
            tier: 'free',
            bestFor: 'Fast, efficient everyday tasks',
            description:
              'A lighter, faster model optimised for speed and cost efficiency. Gemini Flash handles the majority of everyday tasks — summarising, drafting, translating, and classifying — at a fraction of the compute cost of Pro. Available free and embedded in most Workspace features.',
          },
          {
            name: 'Gemini 2.5 Ultra',
            tier: 'enterprise',
            bestFor: 'Google\'s most capable frontier model',
            description:
              'Gemini Ultra is Google\'s highest-capability model, available through Google Cloud and enterprise agreements. It leads Google\'s benchmark performance on complex reasoning, multimodal understanding, and scientific tasks. Deployed via Vertex AI for enterprise use cases requiring maximum capability.',
          },
        ],
      },
      {
        category: 'Workspace',
        tools: [
          {
            name: 'Gemini in Gmail',
            tier: 'pro',
            bestFor: 'Email drafting, summarising, and replies',
            description:
              'Gemini in Gmail drafts replies, summarises long threads, and helps compose messages from bullet points. Particularly useful for high-volume email communication — client follow-ups, agency briefs, and internal updates drafted in seconds rather than minutes.',
          },
          {
            name: 'Gemini in Docs',
            tier: 'pro',
            bestFor: 'Document writing and structured rewriting',
            description:
              'Gemini in Docs acts as a writing partner directly within Google Docs — generating first drafts from prompts, rewriting sections, summarising long documents, and maintaining consistency across a report. Particularly strong for teams producing regular structured reports and client deliverables.',
          },
          {
            name: 'Gemini in Sheets',
            tier: 'pro',
            bestFor: 'Data analysis and formula generation',
            description:
              'Gemini in Sheets analyses data, generates complex formulas from plain-English descriptions, creates data summaries, and spots trends across large spreadsheets. It eliminates the need for advanced Sheets knowledge for many common analytical tasks.',
          },
          {
            name: 'Gemini in Meet',
            tier: 'pro',
            bestFor: 'Meeting notes, summaries, and action items',
            description:
              'Gemini in Meet automatically generates real-time meeting notes, participant summaries, and structured action items during or after calls. Eliminates manual note-taking and ensures every decision and follow-up from a meeting is captured and attributed correctly.',
          },
        ],
      },
      {
        category: 'Research',
        tools: [
          {
            name: 'NotebookLM',
            tier: 'free',
            bestFor: 'AI research from your own documents',
            description:
              'NotebookLM is a unique AI research tool — you upload your own sources (PDFs, reports, slides, URLs) and it becomes an expert on exactly those documents. Ask questions, generate summaries, identify key themes, and get cited answers pulled directly from your uploaded material. No hallucination of external knowledge.',
          },
          {
            name: 'Deep Research',
            tier: 'pro',
            bestFor: 'Autonomous, comprehensive research reports',
            description:
              'Deep Research autonomously searches the web across dozens of sources, synthesises findings, and produces a comprehensive structured report with citations — in the time it would take a human researcher to open three browser tabs. Produces the equivalent of a full research brief in 3–5 minutes.',
          },
        ],
      },
      {
        category: 'Build',
        tools: [
          {
            name: 'Vertex AI',
            tier: 'enterprise',
            bestFor: 'Enterprise AI development and deployment',
            description:
              'Google\'s enterprise ML and AI platform for building, training, and deploying AI models at scale. Hosts Gemini models via API, supports fine-tuning, and integrates with the broader Google Cloud data infrastructure. Used by engineering teams building production AI systems rather than end-user tools.',
          },
          {
            name: 'Gemini API',
            tier: 'enterprise',
            bestFor: 'Developer access to Gemini models',
            description:
              'The Gemini API provides developer access to all Gemini model variants via Google AI Studio and Google Cloud. Enables integration into existing applications, automated pipelines, and custom tools — with pay-per-token pricing and enterprise SLAs for production workloads.',
          },
        ],
      },
    ],
    useCases: [
      {
        industry: 'Financial Services',
        scenario:
          'Equity analysts at a funds management firm need to cross-reference 10–15 company annual reports to build comparative investment analyses. Current process: 2–3 days of reading and tabulation per report set.',
        toolsUsed: ['NotebookLM', 'Gemini 2.5 Pro'],
        outcome:
          'All annual reports are uploaded to NotebookLM. The team queries the collection as a single interactive document — pulling revenue figures, management commentary, and risk disclosures instantly, with citations. Comparative analysis built in two hours versus two days. Analyst time redirected to investment conclusions rather than data extraction.',
      },
      {
        industry: 'Marketing',
        scenario:
          'An in-house marketing team of eight communicates with three agencies across 200+ email threads monthly. Brief writing and agency coordination alone consumes 30+ hours per month of senior marketing time.',
        toolsUsed: ['Gemini in Gmail', 'Gemini in Docs', 'Gemini in Meet'],
        outcome:
          'Brief templates structured in Docs, email responses drafted by Gemini in Gmail, meeting summaries auto-generated in Meet. The team reclaims 18 hours per month on administrative communications. Brief quality improves through structured AI-guided prompting, and agency revision rounds reduce.',
      },
      {
        industry: 'Retail',
        scenario:
          'Category managers maintain 15 spreadsheets tracking stock, promotional performance, and supplier pricing across four regions. Weekly report preparation takes each manager six hours every Friday.',
        toolsUsed: ['Gemini in Sheets'],
        outcome:
          'Gemini in Sheets generates weekly performance summaries from raw data, flags anomalies against targets, and explains the logic behind suggested formulas. Category managers spend time on decisions rather than data wrangling. Weekly reporting time drops from six hours to 90 minutes.',
      },
      {
        industry: 'Professional Services',
        scenario:
          'Management consultants need comprehensive market entry reports for clients entering new geographies — typically requiring three to four days of desktop research before primary research begins.',
        toolsUsed: ['Deep Research', 'Gemini 2.5 Pro'],
        outcome:
          'Deep Research autonomously synthesises 40–60 web sources into a structured market entry brief covering the competitive landscape, regulatory environment, and go-to-market landscape with full citations. First draft produced in under four hours. Consultants focus their time on interpretation, client context, and primary interviews.',
      },
    ],
    metaTitle: 'Google Gemini for Business: Use Cases, Pricing & Setup',
    metaDescription:
      'A practical guide to Google Gemini for businesses — Workspace integration, multimodal use cases, pricing tiers, and where it beats ChatGPT.',
  },

  {
    slug: 'microsoft-copilot',
    name: 'Microsoft Copilot',
    brand: 'Microsoft',
    tagline: 'AI built into the software your organisation already runs',
    brandColor: '#0078D4',
    overview:
      'Microsoft Copilot is the broadest enterprise AI deployment in the world — embedding AI directly into Word, Excel, Outlook, Teams, and PowerPoint for the 345 million people who use Microsoft 365. For development teams, GitHub Copilot is the market-leading AI coding assistant. Copilot Studio enables custom AI agent creation without code, and Azure OpenAI provides the enterprise infrastructure layer for organisations building proprietary AI systems.',
    overviewPoints: [
      'Deepest integration with Microsoft 365 — AI in every app your team already uses daily',
      'GitHub Copilot is the market leader in AI-assisted software development',
      'Copilot Studio builds custom AI agents across enterprise workflows without code',
      'Azure OpenAI provides compliant, private deployment of leading AI models at enterprise scale',
    ],
    toolCategories: [
      {
        category: 'Microsoft 365',
        tools: [
          {
            name: 'Copilot in Word',
            tier: 'pro',
            bestFor: 'Document drafting, rewriting, and summarising',
            description:
              'Copilot in Word drafts documents from prompts, rewrites sections for tone and clarity, summarises long documents, and generates structured reports from bullet points — all within the familiar Word interface. Eliminates blank-page paralysis and significantly reduces document production time for regular writers.',
          },
          {
            name: 'Copilot in Excel',
            tier: 'pro',
            bestFor: 'Data analysis, modelling, and formula generation',
            description:
              'Copilot in Excel analyses data in plain English, generates complex formulas from descriptions, builds charts, highlights trends, and runs scenario modelling without requiring advanced spreadsheet skills. Particularly powerful for finance and operations teams dealing with complex, multi-sheet models.',
          },
          {
            name: 'Copilot in Outlook',
            tier: 'pro',
            bestFor: 'Email drafting, summarisation, and scheduling',
            description:
              'Copilot in Outlook drafts email responses from bullet points, summarises long threads with action items highlighted, suggests meeting times, and helps manage inbox priorities. For executives and client-facing professionals dealing with high email volume, it reclaims significant daily time.',
          },
          {
            name: 'Copilot in Teams',
            tier: 'pro',
            bestFor: 'Meeting summaries, action items, follow-ups',
            description:
              'Copilot in Teams generates live and post-meeting summaries with decisions, action items, and owners automatically assigned. Eliminates manual minute-taking, ensures nothing falls through the gaps, and auto-drafts follow-up emails based on what was discussed.',
          },
        ],
      },
      {
        category: 'Developer Tools',
        tools: [
          {
            name: 'GitHub Copilot',
            tier: 'free',
            bestFor: 'AI code completion in your IDE',
            description:
              'GitHub Copilot provides real-time code suggestions, auto-completion, and inline explanations directly in VS Code, JetBrains, and other major IDEs. The free tier covers basic completions; the paid tier unlocks Copilot Chat, multi-file edits, and deeper contextual understanding.',
          },
          {
            name: 'Copilot Enterprise',
            tier: 'enterprise',
            bestFor: 'Codebase-aware AI for engineering teams',
            description:
              'GitHub Copilot Enterprise gives every developer AI that understands the entire organisation\'s codebase — answering questions about internal architecture, reviewing pull requests with business context, and generating code consistent with existing patterns. Significantly reduces onboarding time for new engineers.',
          },
        ],
      },
      {
        category: 'Build & Automate',
        tools: [
          {
            name: 'Copilot Studio',
            tier: 'enterprise',
            bestFor: 'Building custom AI agents without code',
            description:
              'Copilot Studio is Microsoft\'s no-code platform for building custom AI agents that connect to internal systems, SharePoint, and third-party tools. Non-technical teams can build sophisticated AI assistants — handling HR queries, IT support, sales qualification, and internal knowledge retrieval — without engineering involvement.',
          },
          {
            name: 'Azure OpenAI',
            tier: 'enterprise',
            bestFor: 'Private, compliant AI model deployment',
            description:
              'Azure OpenAI Service provides access to OpenAI\'s models (GPT-4o, o1, DALL-E) within Microsoft\'s enterprise cloud — with private networking, no data used for training, regional data residency, and SOC 2/ISO 27001 compliance. The infrastructure layer for organisations needing custom AI systems with strict data governance.',
          },
          {
            name: 'Power Automate AI',
            tier: 'enterprise',
            bestFor: 'AI-powered workflow automation',
            description:
              'Power Automate with AI Builder embeds AI into automated workflows — extracting data from documents, classifying emails, processing forms, and triggering downstream actions across Microsoft and third-party systems. Eliminates repetitive manual data entry and approval routing across departments.',
          },
        ],
      },
      {
        category: 'Search & Answers',
        tools: [
          {
            name: 'Copilot (Web)',
            tier: 'free',
            bestFor: 'AI-powered search and content generation',
            description:
              'The free, web-based Copilot provides AI-powered search, question answering, and content generation accessible at copilot.microsoft.com or within Windows. Powered by GPT-4 and Bing\'s real-time web access, it\'s a capable general-purpose AI assistant for anyone with a Microsoft account.',
          },
          {
            name: 'Copilot Pro',
            tier: 'pro',
            bestFor: 'Enhanced personal AI with 365 integration',
            description:
              'Copilot Pro provides priority access to the latest models, deeper Microsoft 365 Copilot features for personal accounts, and higher usage limits. The right step-up plan for individuals who want AI integrated into their personal Microsoft apps before their organisation adopts full enterprise Copilot.',
          },
        ],
      },
    ],
    useCases: [
      {
        industry: 'Financial Services',
        scenario:
          'A corporate banking finance team builds 12–15 financial models per month in Excel. Each model takes two to three analyst days to construct and stress-test before submission to the credit committee.',
        toolsUsed: ['Copilot in Excel', 'Azure OpenAI'],
        outcome:
          'Copilot generates base model structures from descriptive prompts, creates scenario analysis tabs, and flags formula errors with explanations. Model build time reduces by 50%. Error rates in credit committee submissions fall, and analysts redirect time from construction to interpretation and sensitivity analysis.',
      },
      {
        industry: 'Professional Services',
        scenario:
          'A Big 4 firm finds that 85% of client meetings produce inconsistently documented outcomes — decisions made verbally but not captured, action items assigned but not tracked, and follow-up emails sent days later from memory.',
        toolsUsed: ['Copilot in Teams', 'Copilot in Outlook'],
        outcome:
          'Every client meeting auto-generates a structured summary with decisions, action items, owners, and deadlines. Follow-up emails are auto-drafted within two minutes of the call ending based on the meeting content. Post-meeting administrative time is effectively eliminated for client-facing staff.',
      },
      {
        industry: 'Real Estate',
        scenario:
          'A commercial property developer produces 20+ information memoranda and investment proposals annually. Each document takes three to five days of writing, formatting, and financial summary work before it can go to market.',
        toolsUsed: ['Copilot in Word', 'Copilot in Excel'],
        outcome:
          'Copilot in Word generates first-draft IMs from structured property data and development narrative in under four hours. Financial summaries pull automatically from Copilot-assisted Excel models. Time-to-market on investment documents reduces by 70% and the quality and consistency of outputs improves markedly.',
      },
      {
        industry: 'Technology & Ecommerce',
        scenario:
          'An ecommerce retailer\'s engineering team of 12 spends 30% of every sprint on code review and onboarding new developers — with an average time-to-productivity of three weeks for new team members.',
        toolsUsed: ['Copilot Enterprise'],
        outcome:
          'GitHub Copilot Enterprise understands the full ecommerce codebase — answering architecture questions, reviewing PRs against existing patterns, and generating code consistent with internal conventions. Sprint velocity increases by 22% and new developer onboarding time halves from three weeks to ten days.',
      },
    ],
    metaTitle: 'Microsoft Copilot for Business: Pricing, Use Cases & ROI',
    metaDescription:
      'Honest analysis of Microsoft Copilot for mid-market businesses — what it costs, where it pays back, and which licence tier is actually worth it.',
  },

  {
    slug: 'perplexity',
    name: 'Perplexity AI',
    brand: 'Perplexity',
    tagline: 'Real-time research with sources you can verify',
    brandColor: '#0891B2',
    overview:
      'Perplexity AI is the fastest-growing AI research platform — a search engine rebuilt from the ground up around AI synthesis and real-time web access. Unlike other AI tools that rely on training data with a knowledge cutoff, Perplexity retrieves live information and presents it with clear citations for every claim. It is the best AI tool for competitive intelligence, regulatory monitoring, market research, and any task where accuracy and verifiability are non-negotiable.',
    overviewPoints: [
      'Real-time web access with cited sources — no knowledge cutoff, no unverifiable claims',
      'Deep Research produces comprehensive autonomous research reports in minutes',
      'Spaces enable shared research environments for entire teams',
      'Sonar API provides real-time search capabilities for developers integrating live web data',
    ],
    toolCategories: [
      {
        category: 'Search & Research',
        tools: [
          {
            name: 'Perplexity',
            tier: 'free',
            bestFor: 'Real-time questions with cited answers',
            description:
              'The core Perplexity experience: ask any question and receive a synthesised, cited answer drawn from real-time web search. Every claim links to its source, making it instantly verifiable — a significant advantage over AI tools that generate plausible-sounding but unverifiable responses. The free tier uses Perplexity\'s own Sonar model.',
          },
          {
            name: 'Perplexity Pro',
            tier: 'pro',
            bestFor: 'Advanced research with choice of AI model',
            description:
              'Pro unlocks access to GPT-4o, Claude, Gemini, and Sonar Huge as the reasoning engine — allowing users to choose the model best suited to each research task. Higher query limits, file upload support, and image generation are included. The right tier for professionals using Perplexity as a primary research tool.',
          },
          {
            name: 'Deep Research',
            tier: 'pro',
            bestFor: 'Comprehensive autonomous research reports',
            description:
              'Deep Research runs autonomously — searching, reading, and synthesising dozens of sources before producing a comprehensive, structured report with full citations. It performs the equivalent of several hours of human desk research in three to five minutes. Ideal for market analysis, competitor intelligence, and due diligence starting points.',
          },
        ],
      },
      {
        category: 'Models',
        tools: [
          {
            name: 'Sonar',
            tier: 'pro',
            bestFor: 'Search-optimised reasoning and retrieval',
            description:
              'Sonar is Perplexity\'s own large language model, specifically trained for web-grounded reasoning — combining search retrieval with language generation in a single optimised system. It is faster and more cost-efficient than using third-party models for search-heavy tasks, and powers the default Perplexity experience.',
          },
          {
            name: 'Sonar Huge',
            tier: 'enterprise',
            bestFor: 'Maximum capability for complex research tasks',
            description:
              'Sonar Huge is Perplexity\'s largest and most capable proprietary model — available via the API and Enterprise Pro plans. It delivers deeper reasoning and synthesis than standard Sonar, and is suited to complex multi-source research tasks that require sustained analytical depth alongside real-time retrieval.',
          },
        ],
      },
      {
        category: 'Collaborate',
        tools: [
          {
            name: 'Spaces',
            tier: 'pro',
            bestFor: 'Shared AI research environments for teams',
            description:
              'Spaces are collaborative research environments where teams work together within a shared AI context. Members can upload shared documents, set a shared system prompt, and build on each other\'s research threads — making it the closest Perplexity gets to a true team research platform. Ideal for ongoing market monitoring or client research programmes.',
          },
          {
            name: 'Collections',
            tier: 'pro',
            bestFor: 'Saving and organising research threads',
            description:
              'Collections allow users to save, organise, and revisit research conversations grouped by topic or project. Useful for maintaining a running research library across an ongoing project — preserving context and sources without needing to repeat searches.',
          },
          {
            name: 'Pages',
            tier: 'pro',
            bestFor: 'Turning research into shareable reports',
            description:
              'Pages converts Perplexity research into formatted, shareable web-based reports with a polished layout. Research compiled in Perplexity can be exported as a Pages document, making it suitable for client delivery, team briefing documents, or internal knowledge bases without additional formatting work.',
          },
        ],
      },
      {
        category: 'Enterprise',
        tools: [
          {
            name: 'Enterprise Pro',
            tier: 'enterprise',
            bestFor: 'Private, secure research for organisations',
            description:
              'Perplexity Enterprise Pro adds SSO, admin controls, private search (conversations not used for training), usage analytics, and unlimited queries for all team members. Designed for organisations where research involves sensitive or confidential information that cannot be shared with a general AI platform.',
          },
          {
            name: 'Sonar API',
            tier: 'enterprise',
            bestFor: 'Real-time web search in your applications',
            description:
              'The Sonar API provides developer access to Perplexity\'s real-time search and synthesis capabilities — enabling applications to query the live web through an AI layer. Used for building research tools, automated briefing systems, and products where up-to-date information is a core requirement.',
          },
        ],
      },
    ],
    useCases: [
      {
        industry: 'Financial Services',
        scenario:
          'A hedge fund research team manually scans 200+ sources weekly to track competitor activity, regulatory changes, and macro developments. The process is labour-intensive, inconsistent, and frequently misses relevant developments.',
        toolsUsed: ['Deep Research', 'Spaces', 'Perplexity Pro'],
        outcome:
          'A weekly intelligence brief produced by Deep Research covers 300+ sources in 45 minutes. The full research team contributes questions and builds on findings within a shared Space. Coverage triples with no additional headcount, and the team shifts from information gathering to analysis and decision-making.',
      },
      {
        industry: 'Marketing',
        scenario:
          'A digital marketing agency\'s strategists spend two to three days researching each new client category from scratch before strategy development begins — a significant cost on every new account.',
        toolsUsed: ['Spaces', 'Deep Research', 'Pages'],
        outcome:
          'Category research is assembled in a shared Space where all team members contribute and build on each other\'s queries. Deep Research produces a comprehensive competitive landscape and consumer trends brief. Pages exports a formatted report for client sign-off. The research phase compresses from three days to four hours without sacrificing depth.',
      },
      {
        industry: 'Professional Services',
        scenario:
          'A regulatory compliance consultancy tracks legislative and regulatory changes across eight jurisdictions for 15 client sectors. Missing a material change can result in client penalties and reputational damage.',
        toolsUsed: ['Perplexity Pro', 'Deep Research'],
        outcome:
          'Research routines built in Perplexity Pro monitor regulatory activity continuously. Deep Research produces monthly jurisdiction-by-sector summary reports with full source citations. No material regulatory change is missed across a six-month tracking period, and consultant monitoring time reduces by 60%.',
      },
      {
        industry: 'Real Estate',
        scenario:
          'A buyers\' agency produces suburb analysis reports for each buyer client. Each report draws on sales data, infrastructure developments, demographic trends, school rankings, and local news — typically five to six hours of research per report.',
        toolsUsed: ['Deep Research', 'Pages'],
        outcome:
          'Deep Research pulls suburb history, recent sales, infrastructure pipeline, demographic trends, and school data from multiple sources simultaneously. Pages formats the output into a client-ready report with citations throughout. Research time drops from five hours to 45 minutes, and agents can serve three times more clients with the same team.',
      },
    ],
    metaTitle: 'Perplexity AI for Business: Use Cases, Pricing & ROI',
    metaDescription:
      'Where Perplexity AI wins for business research and competitive intelligence — and where it falls short. With pricing and recommended use cases.',
  },
]

export function getPlatformBySlug(slug: string): Platform | undefined {
  return platforms.find((p) => p.slug === slug)
}
