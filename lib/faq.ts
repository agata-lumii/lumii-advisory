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
      'Start with your people and the work they already do. For many businesses that means a Find Your Light with AI course or an offsite session to build a shared, practical understanding, alongside the free AI Readiness Checklist to see where the business stands. Where the questions are bigger — data, governance, which use cases to prioritise — a structured AI readiness assessment gives you an honest baseline: what is already in place, what gaps need to be closed first, and which AI use cases will deliver the highest return for your specific business. I typically complete this in four weeks and it becomes the foundation for everything that follows.',
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
  // Courses, workshops and keynotes (Oct 2026): the offers people search for.
  {
    category: 'Courses, Workshops & Keynotes',
    question: 'Do you run AI workshops for teams in Sydney?',
    answer:
      'Yes. Lumii is based in Sydney and runs hands-on AI workshops for teams across Australia and the Asia-Pacific, including as part of team offsites and planning days. Each workshop is shaped around your people, their roles and what you want to change, so the team works through real briefs and leaves with next steps they can apply at work.',
  },
  {
    category: 'Courses, Workshops & Keynotes',
    question: 'What is the difference between an AI course and an AI workshop?',
    answer:
      'An AI workshop is a hands-on session within an event such as a team offsite: practical exploration and shared learning on work your team recognises. Find Your Light with AI is Lumii’s course series, built to take a team from seeing the opportunity, to applying AI to real work, to building confident habits for checking outputs and protecting information.',
  },
  {
    category: 'Courses, Workshops & Keynotes',
    question: 'Do you give AI keynotes for conferences and offsites?',
    answer:
      'Yes. Agata Adamczak gives AI keynotes and panel talks on four topics — Find Your Brand’s Light in the Age of AI; AI at Work: What Changes on Monday?; the signature keynote, Find Your Light: What AI Gives Back; and Stop Prompting. Start Briefing. — each shaped around your audience and your event.',
  },
  {
    category: 'Courses, Workshops & Keynotes',
    question: 'Can AI training be tailored to our team and industry?',
    answer:
      'Yes. Every course and workshop starts with your team’s roles, current use of AI and the work you want to improve, and the examples and exercises follow from that conversation — for marketing, sales, retail, professional services and other industries.',
  },
  {
    category: 'Working with Lumii',
    question: 'What types of businesses does Lumii Advisory work with?',
    answer:
      'I work with mid-market businesses and leadership teams across financial services, professional services, retail, healthcare, legal, marketing, education, technology, manufacturing, and HR. Support ranges from Find Your Light with AI courses, speaking and panels, and hands-on offsite training to AI advisory and AI visibility work. The businesses I work with are typically at an inflection point — recognising that AI and digital transformation are critical to their next phase of growth but unsure how to approach it in a way that is practical, risk-managed, and tied to real business outcomes.',
  },
  {
    category: 'Working with Lumii',
    question: 'How long does a typical engagement take?',
    answer:
      'It depends on what you need. Courses, talks and offsite sessions are shaped around your people and what you want to change, so the format and timing are agreed with you first. Advisory work is scoped to the problem: a focused project on a specific challenge or AI readiness assessment typically runs two to four weeks; a longer programme covering strategy, planning, and implementation oversight typically runs three to six months; and ongoing advisory is structured on a monthly basis. I will always be clear about scope and timeline before an engagement begins.',
  },
  {
    category: 'Working with Lumii',
    question: 'Do you implement the AI technology yourself, or just advise?',
    answer:
      'Both, depending on what is needed. For strategy, readiness, and programme design I work directly as an advisor. For implementation, I work alongside your internal teams and your technology partners — providing strategic oversight, technical direction, and quality assurance rather than doing the hands-on engineering. Where a business does not have implementation partners, I can introduce vetted specialists. The goal is always capability building within your team, not dependency on me.',
  },
  {
    category: 'Working with Lumii',
    question: 'Can you work with our existing technology vendors?',
    answer:
      'Yes. I am vendor-neutral and have no commercial relationships with technology providers. I will assess your current stack objectively and advise on whether your existing tools are the right foundation or whether changes are warranted. If new tools are needed, my recommendations are based solely on what fits your requirements, budget, and technical environment.',
  },
  {
    category: 'Measuring Success',
    question: 'How do you measure the success of an AI project?',
    answer:
      'I define success metrics at the start of every engagement, before any work begins. These are always tied to business outcomes rather than technology outputs — not "we deployed the tool" but "we reduced processing time by 40%" or "we increased conversion by 18%". Typical metrics include time saved (converted to FTE equivalents or cost), error rate reduction, revenue impact, customer satisfaction improvement, and adoption rates among the intended users.',
  },
  {
    category: 'Measuring Success',
    question: 'What is the difference between AI strategy and AI implementation?',
    answer:
      'AI strategy is the process of identifying where AI can create the most value for your business, prioritising those opportunities, building the business case, and designing the programme. AI implementation is the execution: selecting tools, integrating systems, training staff, and running the programme. Many organisations jump to implementation without adequate strategy and end up with the wrong tools solving the wrong problems. I make sure the strategy is right before significant implementation investment is made.',
  },
  {
    category: 'Measuring Success',
    question: 'How much does AI consulting typically cost?',
    answer:
      "It depends on what you need. Courses, talks and offsite training are scoped with you first, and I confirm a fixed price after an initial conversation. For advisory work, a focused project is typically a fixed-fee engagement in the range of $15,000–$35,000, and a longer programme ranges from $60,000–$200,000+ depending on duration and depth. Ongoing advisory is a monthly fee reflecting the level of access and support required. I always scope before pricing, and I am transparent about fees from the first conversation. What I can say is that the cost of a well-designed AI programme is typically a fraction of the cost of a poorly designed one.",
  },
  {
    category: 'Data & Risk',
    question: 'How do you handle data privacy and security concerns?',
    answer:
      'Data privacy and security are central to how I approach every engagement — not an afterthought. I assess your data governance posture as part of every readiness review, and all AI recommendations include guidance on data handling, consent, access controls, and regulatory compliance relevant to your jurisdiction (including GDPR, the Australian Privacy Act, and sector-specific regulations). I do not recommend AI tools or approaches that create unacceptable privacy or security risk.',
  },
  {
    category: 'Data & Risk',
    question: 'What industries do you specialise in?',
    answer:
      'I work across ten verticals: financial services, legal, healthcare, education, retail and e-commerce, professional services, marketing and media, manufacturing, technology, and HR and people management. While the AI tools and implementation approaches differ by industry, the strategic methodology is consistent — understanding your business model, your data environment, your people, and your risk appetite before making any recommendations.',
  },
]
