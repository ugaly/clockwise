import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { socialIcons } from '@/components/social-icons'
import { SITE_CONTACT } from '@/lib/site-contact'

const columns = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Solutions', href: '/solutions' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Projects', href: '/projects' },
      { label: 'Our Process', href: '/process' },
      { label: 'Case Studies', href: '/projects' },
      { label: 'Support', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/contact' },
      { label: 'Terms of Service', href: '/contact' },
      { label: 'Cookie Policy', href: '/contact' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="w-full overflow-x-hidden border-t border-border bg-foreground text-background">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="col-span-2 min-w-0 lg:col-span-1">
            <Link href="/" aria-label="Clockwise Technologies home">
              <Image
                src="/logo/logo.png"
                alt="Clockwise Technologies"
                width={240}
                height={70}
                className="h-12 w-auto max-w-full object-contain object-left sm:h-14 lg:h-16"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-background/65">
              Empowering businesses through software innovation, automation,
              cloud technologies, and digital services.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {socialIcons.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex size-9 shrink-0 items-center justify-center rounded-full border border-background/15 text-background/70 transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="min-w-0">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-background/90">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-background/60 transition-colors hover:text-accent"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-background/10 pt-8 text-sm text-background/60 sm:grid sm:grid-cols-3 sm:gap-4">
          <a
            href={SITE_CONTACT.phoneHref}
            className="flex min-w-0 items-start gap-2 break-words transition-colors hover:text-accent"
          >
            <Phone className="mt-0.5 size-4 shrink-0 text-accent" />
            {SITE_CONTACT.phone}
          </a>
          <a
            href={SITE_CONTACT.emailHref}
            className="flex min-w-0 items-start gap-2 break-all transition-colors hover:text-accent sm:break-words"
          >
            <Mail className="mt-0.5 size-4 shrink-0 text-accent" />
            {SITE_CONTACT.email}
          </a>
          <a
            href={SITE_CONTACT.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-w-0 items-start gap-2 break-words transition-colors hover:text-accent"
          >
            <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
            {SITE_CONTACT.location}
          </a>
        </div>

        <p className="mt-8 text-center text-xs text-background/45">
          &copy; {new Date().getFullYear()} Clockwise Technologies. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}
