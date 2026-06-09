'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Code2,
  Globe,
  Smartphone,
  Server,
  GitBranch,
  Megaphone,
  Cloud,
  MonitorCog,
  ArrowUpRight,
  Check,
  type LucideIcon,
} from 'lucide-react'
import { IconBg } from '@/components/icon-bg'
import { SectionHeading } from '@/components/section-heading'
import { SectionDecorations } from '@/components/section-decorations'
import styles from './service-flip-card.module.css'
type Service = {
  icon: LucideIcon
  title: string
  desc: string
  items: string[]
}

const services: Service[] = [
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
    icon: MonitorCog,
    title: 'IT Consulting & Analytics',
    desc: 'IT consulting, virtualization, and data analysis for insights and decision-making.',
    items: [
      'IT Strategy & Consulting',
      'Virtualization & Infrastructure',
      'Data Analysis & Reporting',
      'Business Intelligence',
    ],
  },
]

function ServiceFlipCard({
  service,
  isFlipped,
  onToggle,
}: {
  service: Service
  isFlipped: boolean
  onToggle: () => void
}) {
  const Icon = service.icon

  return (
    <div
      className={`${styles.scene} ${isFlipped ? styles.sceneFocused : ''}`}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onToggle()
        }
      }}
      role="button"
      tabIndex={0}
      aria-pressed={isFlipped}
      aria-label={`${service.title}. ${isFlipped ? 'Showing details' : 'Tap to flip'}`}
    >
      <div className={`${styles.inner} ${isFlipped ? styles.innerFlipped : ''}`}>
        <div
          className={`${styles.face} pro-card group flex flex-col p-6`}
        >
          <IconBg icon={Icon} />
          <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
            {service.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
            {service.desc}
          </p>
          <p className="mt-4 text-xs font-medium uppercase tracking-wider text-primary/80">
            <span className="md:hidden">Tap to flip</span>
            <span className="hidden md:inline">Hover to flip</span>
          </p>
          <ArrowUpRight className="absolute right-5 top-6 size-5 text-muted-foreground/40" />
        </div>

        <div
          className={`${styles.face} ${styles.back} bg-gradient-brand flex flex-col rounded-2xl border border-primary/20 p-6 text-primary-foreground shadow-elevated`}
        >
          <div className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-white/10 blur-2xl" />
          <IconBg icon={Icon} size="sm" onDark />
          <h3 className="relative mt-5 font-heading text-lg font-semibold text-white">
            {service.title}
          </h3>
          <p className="relative mt-2 text-sm text-white/80">What we deliver</p>
          <ul className="relative mt-4 flex-1 space-y-2.5">
            {service.items.map((it) => (
              <li key={it} className="flex items-center gap-2.5 text-sm text-white/95">
                <Check className="size-4 shrink-0 text-accent" />
                {it}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export function Services() {
  const [activeFlip, setActiveFlip] = useState<string | null>(null)

  const toggleFlip = (title: string) => {
    setActiveFlip((current) => (current === title ? null : title))
  }

  return (
    <section
      id="services"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-background via-primary/[0.03] to-background py-20 sm:py-28"
    >
      <SectionDecorations variant="services" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          variant="line"
          eyebrow="What we do"
          title="End-to-end technology services"
          description="From idea to deployment and beyond, we deliver the full spectrum of digital capabilities your organization needs to compete and grow."
        />

        <p className="mt-6 text-center text-xs text-muted-foreground md:hidden">
          Tap a card to flip it
        </p>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:mt-14 lg:grid-cols-4 lg:gap-6 lg:py-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="relative"
              style={{ transform: 'none' }}
            >
              <ServiceFlipCard
                service={s}
                isFlipped={activeFlip === s.title}
                onToggle={() => toggleFlip(s.title)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
