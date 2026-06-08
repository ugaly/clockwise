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
import { IconBg } from '@/components/icon-bg'
import { SectionHeading } from '@/components/section-heading'
import { SectionDecorations } from '@/components/section-decorations'
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
  icon,
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
        'group w-64 shrink-0 rounded-2xl border border-border/80 bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-elevated',
        className,
      )}
    >
      <IconBg icon={icon} />
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
    <section className="section-band relative overflow-hidden py-20 sm:py-28">
      <SectionDecorations variant="why" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          variant="line"
          eyebrow="Why Clockwise"
          title="Built on trust, delivered with excellence"
          description="Organizations choose us because we combine technical depth with a genuine commitment to their success."
        />

        <div className="marquee-pause relative -mx-4 mt-8 overflow-hidden mask-fade-x sm:hidden">
          <div className="animate-marquee flex w-max gap-3 py-1 pl-4 [animation-duration:42s]">
            {marqueeRow.map((r, i) => (
              <ReasonCard key={`${r.title}-${i}`} {...r} />
            ))}
          </div>
        </div>

        <div className="mt-14 hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4 }}
            >
              <ReasonCard {...r} className="w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
