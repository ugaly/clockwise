'use client'

import { motion } from 'framer-motion'
import {
  Truck,
  Nfc,
  Building2,
  FileText,
  Home,
  HeartPulse,
  Check,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const solutions = [
  {
    icon: Truck,
    title: 'Logistics Management System',
    tag: 'Web · Android · iOS',
    desc: 'End-to-end fleet, delivery, and route operations in one platform.',
    features: ['Fleet Tracking', 'Delivery Management', 'Route Optimization', 'Driver Management'],
    featured: true,
  },
  {
    icon: Nfc,
    title: 'NFC Digital Business Cards',
    tag: 'Smart Networking',
    desc: 'Share your professional profile with a single tap.',
    features: ['One-Tap Sharing', 'QR Support', 'Lead Capture', 'Analytics'],
  },
  {
    icon: Building2,
    title: 'Business Management Systems',
    tag: 'CRM · ERP · HR',
    desc: 'Unify operations across departments and teams.',
    features: ['Inventory', 'Accounting', 'HR Systems', 'Reporting'],
  },
  {
    icon: FileText,
    title: 'Tax & Secretarial Platform',
    tag: 'Compliance',
    desc: 'Stay compliant and organized with automated workflows.',
    features: ['Tax Management', 'Compliance Tracking', 'Documents', 'Reporting'],
  },
  {
    icon: Home,
    title: 'Real Estate Sales Platform',
    tag: 'Houses · Plots · Land',
    desc: 'List, market, and sell houses, plots, and land with a modern property platform.',
    features: ['Property Listings', 'Plot Sales', 'Lead Management', 'Agent Dashboard'],
  },
  {
    icon: HeartPulse,
    title: 'Healthcare Systems',
    tag: 'Health',
    desc: 'Modernize patient care and clinic operations.',
    features: ['Patient Records', 'Appointments', 'Billing', 'Reporting'],
  },
]

export function Solutions() {
  return (
    <section
      id="solutions"
      className="relative scroll-mt-24 overflow-hidden bg-secondary/30 py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Ready-made solutions"
          title="Platforms built for real industries"
          description="Proven, customizable systems that get you to market faster — deployed across logistics, healthcare, real estate, education, finance and more."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className={`group relative flex flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                s.featured
                  ? 'border-primary/30 bg-gradient-to-br from-primary to-[oklch(0.36_0.11_255)] text-primary-foreground shadow-lg shadow-primary/20'
                  : 'border-border bg-card hover:border-primary/40 hover:shadow-primary/10'
              }`}
            >
              <div className="flex items-center justify-between">
                <div
                  className={`flex size-12 items-center justify-center rounded-xl ${
                    s.featured
                      ? 'bg-white/15 text-white'
                      : 'bg-gradient-to-br from-primary/10 to-accent/15 text-primary ring-1 ring-inset ring-primary/10'
                  }`}
                >
                  <s.icon className="size-6" />
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    s.featured
                      ? 'bg-white/15 text-white/90'
                      : 'bg-secondary text-foreground/70'
                  }`}
                >
                  {s.tag}
                </span>
              </div>
              <h3
                className={`mt-5 font-heading text-lg font-semibold ${
                  s.featured ? 'text-white' : 'text-foreground'
                }`}
              >
                {s.title}
              </h3>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  s.featured ? 'text-white/80' : 'text-muted-foreground'
                }`}
              >
                {s.desc}
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-2">
                {s.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-center gap-1.5 text-xs ${
                      s.featured ? 'text-white/90' : 'text-foreground/70'
                    }`}
                  >
                    <Check
                      className={`size-3.5 shrink-0 ${
                        s.featured ? 'text-accent' : 'text-primary'
                      }`}
                    />
                    {f}
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
