'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const projects = [
  {
    image: '/project-logistics.png',
    category: 'Logistics',
    title: 'FleetFlow Logistics Platform',
    desc: 'Real-time fleet tracking and delivery management for a regional carrier.',
    stack: ['Next.js', 'Node.js', 'PostgreSQL'],
  },
  {
    image: '/project-healthcare.png',
    category: 'Healthcare',
    title: 'CareSync Hospital System',
    desc: 'Patient records, scheduling and billing for a multi-clinic group.',
    stack: ['React Native', 'Django', 'Redis'],
  },
  {
    image: '/project-mobile.png',
    category: 'Fintech',
    title: 'PayPoint Mobile Wallet',
    desc: 'A cross-platform mobile wallet with payments and analytics.',
    stack: ['Flutter', 'Spring Boot', 'MySQL'],
  },
  {
    image: '/project-cloud.png',
    category: 'Cloud',
    title: 'CloudScale Infrastructure',
    desc: 'Containerized cloud migration with automated CI/CD pipelines.',
    stack: ['Docker', 'Kubernetes', 'AWS'],
  },
  {
    image: '/project-realestate.png',
    category: 'Real Estate',
    title: 'PropertyHub Estate Platform',
    desc: 'Property listings, tenant management, and sales workflows for a real estate agency.',
    stack: ['Next.js', 'PostgreSQL', 'AWS'],
  },
]

export function Portfolio() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects that move businesses forward"
          description="A glimpse of the platforms we have designed, built, and scaled for clients across industries."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={p.image || '/placeholder.svg'}
                  alt={p.title}
                  width={800}
                  height={500}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
                  {p.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {p.title}
                  </h3>
                  <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-foreground/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
