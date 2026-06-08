'use client'

import { motion } from 'framer-motion'
import {
  Code2,
  Globe,
  Smartphone,
  Server,
  GitBranch,
  Megaphone,
  Cloud,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const services = [
  {
    icon: Code2,
    title: 'Software Development',
    desc: 'Custom enterprise software tailored to your operations.',
    items: ['ERP & CRM Systems', 'Custom Platforms', 'APIs & Integrations'],
  },
  {
    icon: Globe,
    title: 'Web Development',
    desc: 'High-performance corporate sites and web platforms.',
    items: ['Business Portals', 'E-commerce', 'SaaS Platforms'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'Native and cross-platform apps that scale.',
    items: ['Android & iOS', 'Flutter', 'React Native'],
  },
  {
    icon: Server,
    title: 'Hosting & Server Management',
    desc: 'Reliable infrastructure with proactive monitoring.',
    items: ['VPS & Dedicated', 'Docker Deployments', 'CI/CD Pipelines'],
  },
  {
    icon: GitBranch,
    title: 'Agile Consulting',
    desc: 'Scrum coaching and agile product delivery.',
    items: ['Agile Transformation', 'Team Scaling', 'Product Strategy'],
  },
  {
    icon: Megaphone,
    title: 'Marketing Services',
    desc: 'Data-driven digital growth strategies.',
    items: ['SEO', 'Social Media', 'Content Strategy'],
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    desc: 'Cloud migration and infrastructure automation.',
    items: ['AWS & Azure', 'DigitalOcean', 'Cloud Migration'],
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity',
    desc: 'Protect systems with audits and monitoring.',
    items: ['Security Audits', 'Vulnerability Tests', 'Best Practices'],
  },
]

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="What we do"
          title="End-to-end technology services"
          description="From idea to deployment and beyond, we deliver the full spectrum of digital capabilities your organization needs to compete and grow."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/15 text-primary ring-1 ring-inset ring-primary/10 transition-transform duration-300 group-hover:scale-110">
                <s.icon className="size-6" />
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
              <ul className="mt-4 space-y-1.5">
                {s.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-center gap-2 text-sm text-foreground/70"
                  >
                    <span className="size-1.5 rounded-full bg-accent" />
                    {it}
                  </li>
                ))}
              </ul>
              <ArrowUpRight className="absolute right-5 top-6 size-5 text-muted-foreground/40 transition-all duration-300 group-hover:text-primary" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
