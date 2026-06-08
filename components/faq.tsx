'use client'

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/motion-primitives'

const faqs = [
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
    a: 'Timelines vary, but most platforms launch within 8 to 16 weeks. Ready-made solutions like our logistics or school management systems can be deployed and customized much faster.',
  },
]

export function Faq() {
  return (
    <section className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          align="left"
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know about working with Clockwise Technologies. Can't find an answer? Reach out and we'll help."
        />

        <Reveal>
          <Accordion className="rounded-2xl border border-border bg-card px-6">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger className="py-5 text-base font-semibold text-foreground hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
