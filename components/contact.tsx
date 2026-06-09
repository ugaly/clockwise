'use client'

import { useState, type FormEvent } from 'react'
import { Phone, Mail, MapPin, Clock, Check, Loader2 } from 'lucide-react'
import { socialIcons } from '@/components/social-icons'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/motion-primitives'
import { SITE_CONTACT } from '@/lib/site-contact'

const info = [
  { icon: Phone, label: 'Phone', value: SITE_CONTACT.phone, href: SITE_CONTACT.phoneHref },
  { icon: Mail, label: 'Email', value: SITE_CONTACT.email, href: SITE_CONTACT.emailHref },
  {
    icon: MapPin,
    label: 'Address',
    value: SITE_CONTACT.location,
    href: SITE_CONTACT.mapsUrl,
  },
  { icon: Clock, label: 'Hours', value: SITE_CONTACT.hours },
]

const socials = socialIcons

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 1200)
  }

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-secondary/30 py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Contact
          </span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Let&apos;s build something amazing together
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Tell us about your project and our team will get back to you within
            one business day.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* left: info */}
          <Reveal className="flex flex-col gap-5">
            <div className="grid gap-4 sm:grid-cols-2">
              {info.map((c) => (
                <div
                  key={c.label}
                  className="rounded-2xl border border-border bg-card p-5"
                >
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <c.icon className="size-5" />
                  </div>
                  <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">
                    {c.label}
                  </p>
                  {'href' in c && c.href ? (
                    <a
                      href={c.href}
                      target={c.icon === MapPin ? '_blank' : undefined}
                      rel={c.icon === MapPin ? 'noopener noreferrer' : undefined}
                      className="mt-0.5 block text-sm font-medium text-foreground transition-colors hover:text-primary"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className="mt-0.5 text-sm font-medium text-foreground">
                      {c.value}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="overflow-hidden rounded-2xl border border-primary/20 shadow-soft ring-1 ring-primary/10">
              <iframe
                title="Clockwise Technologies location in Dar es Salaam"
                src={SITE_CONTACT.mapEmbedUrl}
                className="h-72 w-full sm:h-80 lg:h-96"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">Follow us</span>
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </Reveal>

          {/* right: form */}
          <Reveal>
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-border bg-card p-6 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full Name" required>
                  <Input required placeholder="Jane Doe" className="h-11" />
                </Field>
                <Field label="Company Name">
                  <Input placeholder="Acme Inc." className="h-11" />
                </Field>
                <Field label="Email" required>
                  <Input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className="h-11"
                  />
                </Field>
                <Field label="Phone">
                  <Input
                    type="tel"
                    placeholder="+255 754 711 170"
                    className="h-11"
                  />
                </Field>
              </div>
              <div className="mt-4">
                <Field label="Message" required>
                  <Textarea
                    required
                    rows={8}
                    placeholder="Tell us about your project goals…"
                    className="min-h-[12rem] resize-y sm:min-h-[14rem]"
                  />
                </Field>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={status !== 'idle'}
                className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {status === 'idle' && 'Send Message'}
                {status === 'sending' && (
                  <>
                    <Loader2 className="mr-1 size-4 animate-spin" /> Sending…
                  </>
                )}
                {status === 'sent' && (
                  <>
                    <Check className="mr-1 size-4" /> Message Sent
                  </>
                )}
              </Button>
              {status === 'sent' && (
                <p className="mt-3 text-center text-sm text-muted-foreground">
                  Thanks for reaching out — we&apos;ll be in touch shortly.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-primary"> *</span>}
      </span>
      {children}
    </label>
  )
}
