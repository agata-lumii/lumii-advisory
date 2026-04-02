export interface FAQItem {
  question: string
  answer: string
  category: string
}

export const faqs: FAQItem[] = [
  {
    category: 'Getting Started',
    question: 'Where do we start if we have never used AI before?',
    answer:
      'The best starting point is an AI readiness assessment — a structured review of your strategy, data, technology, people, and processes. This gives you an honest baseline: what is already in place, what gaps need to be closed first, and which AI use cases will deliver the highest return for your specific business. We typically complete this in four weeks and it becomes the foundation for everything that follows.',
  },
  {
    category: 'Getting Started',
    question: 'What does AI readiness actually mean?',
    answer:
      'AI readiness refers to how well-positioned a business is to successfully adopt and benefit from AI — across six dimensions: leadership alignment and strategy, data infrastructure quality, technology integration capability, workforce skills and AI literacy, process suitability for automation, and governance and ethics frameworks. A business can be highly ready in some areas and significantly behind in others. Understanding where you stand across all six is the foundation of a successful AI programme.',
  },
  {
    category: 'Getting Started',
    question: 'We are a small team — is AI still relevant for us?',
    answer:
      "Yes — often more so. Smaller teams have the most to gain from AI in terms of leverage. A 10-person team where each person saves five hours per week with AI tools is effectively adding the capacity of more than one full-time employee. The key difference for smaller businesses is prioritisation: you don't need to do everything, you need to identify the two or three AI applications that will have an outsized impact on your specific constraints — whether that's time, cost, or scale.",
  },
  {
    category: 'Working with Lumii',
    question: 'What types of businesses does Lumii Advisory work with?',
    answer:
      'We work with ambitious mid-market businesses and leadership teams across financial services, professional services, retail, healthcare, legal, marketing, education, technology, manufacturing, and HR. Our clients are typically at an inflection point — recognising that AI and digital transformation are critical to their next phase of growth but unsure how to approach it in a way that is practical, risk-managed, and tied to real business outcomes.',
  },
  {
    category: 'Working with Lumii',
    question: 'How long does a typical engagement take?',
    answer:
      'It depends on the scope. A Strategy Sprint — focused on a specific strategic challenge or AI readiness assessment — typically runs two to four weeks. A Transformation Partnership, covering strategy, planning, and implementation oversight, typically runs three to six months. Advisory Retainers are ongoing and structured on a monthly basis. We will always be clear about scope and timeline before an engagement begins.',
  },
  {
    category: 'Working with Lumii',
    question: 'Do you implement the AI technology yourself, or just advise?',
    answer:
      'Both, depending on what is needed. For strategy, readiness, and programme design we work directly as advisors. For implementation, we work alongside your internal teams and your technology partners — providing strategic oversight, technical direction, and quality assurance rather than doing the hands-on engineering. Where a business does not have implementation partners, we can introduce vetted specialists. The goal is always capability building within your team, not dependency on us.',
  },
  {
    category: 'Working with Lumii',
    question: 'Can you work with our existing technology vendors?',
    answer:
      'Yes. We are vendor-neutral and have no commercial relationships with technology providers. We will assess your current stack objectively and advise on whether your existing tools are the right foundation or whether changes are warranted. If new tools are needed, our recommendations are based solely on what fits your requirements, budget, and technical environment.',
  },
  {
    category: 'Measuring Success',
    question: 'How do you measure the success of an AI project?',
    answer:
      'We define success metrics at the start of every engagement, before any work begins. These are always tied to business outcomes rather than technology outputs — not "we deployed the tool" but "we reduced processing time by 40%" or "we increased conversion by 18%". Typical metrics include time saved (converted to FTE equivalents or cost), error rate reduction, revenue impact, customer satisfaction improvement, and adoption rates among the intended users.',
  },
  {
    category: 'Measuring Success',
    question: 'What is the difference between AI strategy and AI implementation?',
    answer:
      'AI strategy is the process of identifying where AI can create the most value for your business, prioritising those opportunities, building the business case, and designing the programme. AI implementation is the execution: selecting tools, integrating systems, training staff, and running the programme. Many organisations jump to implementation without adequate strategy and end up with the wrong tools solving the wrong problems. We help ensure the strategy is right before significant implementation investment is made.',
  },
  {
    category: 'Measuring Success',
    question: 'How much does AI consulting typically cost?',
    answer:
      "AI consulting fees vary significantly based on scope and complexity. A focused Strategy Sprint is typically a fixed-fee engagement in the range of $15,000–$35,000. A Transformation Partnership ranges from $60,000–$200,000+ depending on duration and depth. Advisory Retainers are structured as a monthly fee reflecting the level of access and support required. We always scope before pricing — and we are transparent about our fees from the first conversation. What we can say is that the cost of a well-designed AI programme is typically a fraction of the cost of a poorly designed one.",
  },
  {
    category: 'Data & Risk',
    question: 'How do you handle data privacy and security concerns?',
    answer:
      'Data privacy and security are central to how we approach every engagement — not an afterthought. We assess your data governance posture as part of every readiness review, and all AI recommendations include guidance on data handling, consent, access controls, and regulatory compliance relevant to your jurisdiction (including GDPR, the Australian Privacy Act, and sector-specific regulations). We do not recommend AI tools or approaches that create unacceptable privacy or security risk.',
  },
  {
    category: 'Data & Risk',
    question: 'What industries do you specialise in?',
    answer:
      'We work across ten verticals: financial services, legal, healthcare, education, retail and e-commerce, professional services, marketing and media, manufacturing, technology, and HR and people management. While the AI tools and implementation approaches differ by industry, the strategic methodology is consistent — understanding your business model, your data environment, your people, and your risk appetite before making any recommendations.',
  },
]
