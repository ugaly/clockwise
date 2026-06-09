'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CalendarClock } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { SectionDecorations } from '@/components/section-decorations'
import { cn } from '@/lib/utils'

export function CtaBanner() {
  return (
    <section className="bg-surface-muted py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-brand px-6 py-16 text-center ring-1 ring-white/10 sm:px-12 sm:py-20">
          <SectionDecorations variant="cta" />
          <div className="animate-float-slow pointer-events-none absolute -left-16 -top-16 size-72 rounded-full bg-white/10 blur-3xl" />
          <div className="animate-float-slow pointer-events-none absolute -bottom-20 -right-10 size-80 rounded-full bg-accent/20 blur-3xl [animation-delay:2s]" />
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.08]" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto max-w-2xl"
          >
            <span className="eyebrow-line justify-center text-white before:bg-white/40">
              Let&apos;s build together
            </span>
            <h2 className="mt-5 text-balance font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to digitize your business?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
              Partner with Clockwise Technologies and turn your operations into
              a modern, efficient, digital-first organization.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({
                    size: 'lg',
                    className:
                      'group h-11 w-full rounded-full bg-white px-6 text-primary shadow-soft hover:bg-white/90 sm:w-auto',
                  }),
                )}
              >
                <CalendarClock className="mr-1 size-4" />
                Schedule Consultation
              </Link>
              <Link
                href="/projects"
                className={cn(
                  buttonVariants({
                    size: 'lg',
                    variant: 'outline',
                    className:
                      'group h-11 w-full rounded-full border-white/35 bg-white/5 px-6 text-white backdrop-blur hover:bg-white/15 hover:text-white sm:w-auto',
                  }),
                )}
              >
                View Our Work
                <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <p className="mt-6 text-sm text-white/60">
              Trusted by 120+ clients across Africa
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
