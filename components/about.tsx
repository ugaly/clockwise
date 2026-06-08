'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Lightbulb, Users, Layers, Rocket } from 'lucide-react'
import { Reveal } from '@/components/motion-primitives'

const pillars = [
  { icon: Lightbulb, title: 'Innovation Driven', desc: 'We adopt modern tools to solve real problems.' },
  { icon: Users, title: 'Client Focused', desc: 'Your goals shape every line of code we ship.' },
  { icon: Layers, title: 'Scalable Solutions', desc: 'Architecture that grows with your business.' },
  { icon: Rocket, title: 'Agile Development', desc: 'Fast, iterative delivery with full transparency.' },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative">
          <div className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-tr from-primary/20 to-accent/15 blur-2xl" />
          <div className="overflow-hidden rounded-3xl border border-border shadow-xl">
            <Image
              src="/about-team.png"
              alt="Clockwise Technologies development team collaborating"
              width={900}
              height={700}
              className="h-full w-full object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-6 -right-2 rounded-2xl border border-border bg-background/95 px-6 py-4 shadow-xl backdrop-blur sm:right-6"
          >
            <p className="font-heading text-2xl font-bold text-foreground">8+ yrs</p>
            <p className="text-xs text-muted-foreground">Engineering excellence</p>
          </motion.div>
        </Reveal>

        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            About Clockwise
          </span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Building the future through technology
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Clockwise Technologies is a software solutions company helping
            organizations digitize operations, improve efficiency, automate
            workflows, and accelerate growth. Our mission is to empower
            businesses through software innovation, automation, and cloud
            technologies that drive measurable results.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-xl border border-border bg-card p-4"
              >
                <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <p.icon className="size-5" />
                </div>
                <h3 className="mt-3 text-sm font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
