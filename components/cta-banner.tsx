'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CalendarClock } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function CtaBanner() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-[oklch(0.4_0.12_252)] to-[oklch(0.3_0.09_258)] px-6 py-16 text-center sm:px-12 sm:py-20">
          <div className="animate-float-slow pointer-events-none absolute -left-16 -top-16 size-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="animate-float-slow pointer-events-none absolute -bottom-20 -right-10 size-80 rounded-full bg-white/10 blur-3xl [animation-delay:2s]" />
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.07]" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto max-w-2xl"
          >
            <h2 className="text-balance font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to digitize your business?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-white/80">
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
                      'group w-full bg-white text-primary hover:bg-white/90 sm:w-auto',
                  }),
                )}
              >
                <CalendarClock className="mr-1 size-4" />
                Schedule Consultation
              </Link>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({
                    size: 'lg',
                    variant: 'outline',
                    className:
                      'group w-full border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white sm:w-auto',
                  }),
                )}
              >
                Contact Us
                <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
