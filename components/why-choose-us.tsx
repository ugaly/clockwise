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
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

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

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-secondary/30 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Why Clockwise"
          title="Built on trust, delivered with excellence"
          description="Organizations choose us because we combine technical depth with a genuine commitment to their success."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
              className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/15 text-primary ring-1 ring-inset ring-primary/10 transition-transform group-hover:scale-110">
                <r.icon className="size-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">{r.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {r.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
