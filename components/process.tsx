'use client'

import { motion } from 'framer-motion'
import { Search, PenTool, Code, TestTube2, Rocket, Headphones } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const steps = [
  { icon: Search, title: 'Discover', desc: 'We gather requirements and define clear goals.' },
  { icon: PenTool, title: 'Design', desc: 'We craft intuitive UI/UX and system architecture.' },
  { icon: Code, title: 'Develop', desc: 'Agile implementation with continuous feedback.' },
  { icon: TestTube2, title: 'Test', desc: 'Rigorous QA ensures reliability and security.' },
  { icon: Rocket, title: 'Deploy', desc: 'Smooth launch with monitoring in place.' },
  { icon: Headphones, title: 'Support', desc: 'Ongoing improvements and dedicated support.' },
]

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How we work"
          title="A proven development process"
          description="A transparent, repeatable methodology that turns ideas into reliable software — on time and on budget."
        />

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 flex size-14 items-center justify-center rounded-2xl border border-border bg-card text-primary shadow-sm">
                  <s.icon className="size-6" />
                  <span className="absolute -right-2 -top-2 flex size-6 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
