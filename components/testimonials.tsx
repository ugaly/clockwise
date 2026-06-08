'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const testimonials = [
  {
    quote:
      'Clockwise transformed our manual operations into a fully digital workflow. Delivery times dropped by 40% within the first quarter.',
    name: 'Amara Okafor',
    role: 'Operations Director',
    company: 'TransLink Logistics',
    initials: 'AO',
  },
  {
    quote:
      'Their team understood our compliance needs deeply. The platform they built saves our staff dozens of hours every week.',
    name: 'David Mensah',
    role: 'Managing Partner',
    company: 'Lex & Co. Advisory',
    initials: 'DM',
  },
  {
    quote:
      'From design to deployment, the process was transparent and fast. Our mobile app launched ahead of schedule and exceeded targets.',
    name: 'Fatima Bello',
    role: 'Product Lead',
    company: 'PayPoint Financial',
    initials: 'FB',
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const t = testimonials[index]
  const go = (dir: number) =>
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length)

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="What our clients say"
          description="We measure our success by the growth and satisfaction of the organizations we serve."
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <Quote className="mx-auto size-10 text-primary/30" />
          <div className="relative min-h-[14rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="mt-6 text-center"
              >
                <div className="mb-4 flex justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-balance font-heading text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-8 flex items-center justify-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent font-heading text-sm font-bold text-primary-foreground">
                    {t.initials}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="size-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? 'w-6 bg-primary' : 'w-2 bg-border'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="Next testimonial"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
