export const FAQ_ITEMS = [
  {
    q: 'What does your development process look like?',
    a: 'We follow a six-stage agile process: Discover, Design, Develop, Test, Deploy, and Support. You get regular demos and full transparency at every stage, so there are never any surprises.',
  },
  {
    q: 'How is pricing structured?',
    a: 'Pricing depends on project scope and complexity. We offer fixed-price packages for defined deliverables and flexible retainers for ongoing work. After a free consultation we provide a detailed, transparent quote.',
  },
  {
    q: 'Do you provide hosting and infrastructure?',
    a: 'Yes. We manage VPS, dedicated servers, and cloud infrastructure on AWS, Azure, and DigitalOcean, including Docker deployments, CI/CD pipelines, and 24/7 monitoring.',
  },
  {
    q: 'What about maintenance after launch?',
    a: 'Every project includes a support window, and we offer ongoing maintenance plans covering updates, security patches, performance tuning, and feature enhancements.',
  },
  {
    q: 'Can you work with our existing systems?',
    a: 'Absolutely. We specialize in integrations and APIs, connecting new solutions with your current ERP, CRM, payment gateways, and third-party services.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Timelines vary, but most platforms launch within 8 to 16 weeks. Ready-made solutions like our logistics or real estate platforms can be deployed and customized much faster.',
  },
] as const

export const faqPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
}
