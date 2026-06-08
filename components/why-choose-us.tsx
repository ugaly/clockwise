'use client'

import { motion } from 'framer-motion'
import {
  Users2,
  Workflow,
  Cpu,
  Network,
  Lock,
  LifeBuoy,
  CloudCog,
  Timer,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const reasons = [
  { icon: Users2, title: 'Experienced Team', desc: 'Senior engineers across the full stack.' },
  { icon: Workflow, title: 'Agile Methodology', desc: 'Iterative delivery with full visibility.' },
  { icon: Cpu, title: 'Modern Technologies', desc: 'We use today\u2019s most reliable tools.' },
  { icon: Network, title: 'Scalable Architecture', desc: 'Built to handle growth from day one.' },
  { icon: Lock, title: 'Security Focused', desc: 'Best-practice security at every layer.' },
  { icon: LifeBuoy, title: 'Continuous Support', desc: 'We stay with you after launch.' },
  { icon: CloudCog, title: 'Cloud Expertise', desc: 'Deep AWS, Azure & DigitalOcean skills.' },
  { icon: Timer, title: 'Fast Delivery', desc: 'Speed without sacrificing quality.' },
]

function ReasonCard({
  icon: Icon,
  title,
  desc,
  className,
}: {
  icon: LucideIcon
  title: string
  desc: string
  className?: string
}) {
  return (
    <div
      className={cn(
        'group w-64 shrink-0 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/40 hover:shadow-md',
        className,
      )}
    >
      <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/15 text-primary ring-1 ring-inset ring-primary/10 transition-transform group-hover:scale-105">
        <Icon className="size-5" />
      </div>
      <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
    </div>
  )
}

export function WhyChooseUs() {
  const marqueeRow = [...reasons, ...reasons]

  return (
    <section className="relative overflow-hidden bg-secondary/30 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Why Clockwise"
          title="Built on trust, delivered with excellence"
          description="Organizations choose us because we combine technical depth with a genuine commitment to their success."
        />

        {/* Mobile: auto-sliding marquee */}
        <div className="marquee-pause relative -mx-4 mt-8 overflow-hidden mask-fade-x sm:hidden">
          <div className="animate-marquee flex w-max gap-3 py-1 pl-4 [animation-duration:42s]">
            {marqueeRow.map((r, i) => (
              <ReasonCard key={`${r.title}-${i}`} {...r} />
            ))}
          </div>
        </div>

        {/* Tablet & desktop: grid */}
        <div className="mt-14 hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
            >
              <ReasonCard {...r} className="w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
