'use client'

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/motion-primitives'
import { FAQ_ITEMS } from '@/lib/faq-content'

const faqs = FAQ_ITEMS

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
