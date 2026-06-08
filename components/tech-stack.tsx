'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/section-heading'

const groups = [
  { title: 'Frontend', items: ['React', 'Next.js', 'Flutter', 'React Native'] },
  { title: 'Backend', items: ['Laravel', 'Django', 'Spring Boot', 'Node.js'] },
  { title: 'Database', items: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB'] },
  { title: 'Infrastructure', items: ['Docker', 'Kubernetes', 'Nginx', 'Linux'] },
  { title: 'Cloud', items: ['AWS', 'Azure', 'DigitalOcean', 'Vercel'] },
]

export function TechStack() {
  return (
    <section className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our toolkit"
          title="Technologies we build with"
          description="We pick the right tool for the job from a battle-tested stack trusted by engineering teams worldwide."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                {g.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-center gap-2.5 text-sm font-medium text-foreground/80"
                  >
                    <span className="size-2 rounded-full bg-gradient-to-br from-primary to-accent" />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
