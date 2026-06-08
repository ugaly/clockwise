'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { SITE_NAV_HEIGHT } from '@/lib/site-contact'

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf = 0
    const start = performance.now()
    const dur = 1600
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.round(eased * to))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to])

  return (
    <span ref={ref} className="tabular-nums">
      {val}
      {suffix}
    </span>
  )
}

const stats = [
  { value: 250, suffix: '+', label: 'Projects Delivered' },
  { value: 120, suffix: '+', label: 'Happy Clients' },
  { value: 60, suffix: '+', label: 'Systems Built' },
  { value: 99, suffix: '%', label: 'Client Retention' },
]

const trustMarks = [
  'Fintech',
  'Healthcare',
  'Logistics',
  'Real Estate',
  'Education',
  'Retail',
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-background"
      style={{ paddingTop: SITE_NAV_HEIGHT }}
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />

      <div className="flex flex-col lg:grid lg:min-h-[calc(100vh-7rem)] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-52 sm:h-64 lg:h-auto lg:min-h-full"
        >
          <Image
            src="/about-team.png"
            alt="Clockwise Technologies software development team"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'var(--gradient-hero-overlay)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background lg:bg-gradient-to-r lg:from-transparent lg:via-primary/5 lg:to-background/50" />
        </motion.div>

        <div className="relative z-10 -mt-10 px-4 pb-8 sm:-mt-12 sm:px-6 sm:pb-10 lg:mt-0 lg:flex lg:items-center lg:px-8 lg:py-14 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="pro-card mx-auto w-full max-w-lg p-6 shadow-elevated sm:max-w-none sm:rounded-3xl sm:p-8 lg:-ml-16 lg:max-w-2xl lg:p-10 xl:-ml-20"
          >
            <Image
              src="/logo/logo.png"
              alt="Clockwise Technologies"
              width={220}
              height={64}
              priority
              className="h-12 w-auto object-contain sm:h-14 lg:h-16"
            />

            <span className="eyebrow-line mt-5">
              <Sparkles className="size-3.5 shrink-0" />
              Software Development Company
            </span>

            <h1 className="mt-5 text-balance font-heading text-2xl font-bold leading-[1.12] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
              Building reliable software that helps businesses{' '}
              <span className="text-gradient">grow</span>
            </h1>

            <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Clockwise Technologies designs and delivers custom applications,
              cloud platforms, and digital systems for organizations across
              Africa and beyond.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({
                    size: 'lg',
                    className:
                      'group h-11 w-full rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90 sm:w-auto',
                  }),
                )}
              >
                Start a Project
                <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className={cn(
                  buttonVariants({
                    size: 'lg',
                    variant: 'outline',
                    className: 'h-11 w-full rounded-full border-border px-6 sm:w-auto',
                  }),
                )}
              >
                View Our Services
              </Link>
            </div>

            <div className="mt-10 border-t border-border/80 pt-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Trusted across industries
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {trustMarks.map((name) => (
                  <span
                    key={name}
                    className="rounded-full border border-border/80 bg-secondary/50 px-3 py-1 text-xs font-medium text-foreground/60"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="section-band px-4 py-10 sm:px-6 sm:py-12">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="pro-card rounded-xl px-4 py-5 text-center sm:rounded-2xl sm:px-6 sm:py-7"
            >
              <p className="font-heading text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1.5 text-xs font-medium text-muted-foreground sm:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
