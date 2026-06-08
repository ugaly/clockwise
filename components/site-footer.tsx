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
    <footer className="w-full overflow-x-hidden border-t border-border bg-card">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="col-span-2 min-w-0 lg:col-span-1">
            <Link href="/" aria-label="Clockwise Technologies home">
              <Image
                src="/logo/logo.png"
                alt="Clockwise Technologies"
                width={200}
                height={58}
                className="h-9 w-auto max-w-full object-contain object-left sm:h-10"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Empowering businesses through software innovation, automation,
              cloud technologies, and digital services.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {socialIcons.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="min-w-0">
              <h3 className="text-sm font-semibold text-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-8 text-sm text-muted-foreground sm:grid sm:grid-cols-3 sm:gap-4">
          <a
            href={SITE_CONTACT.phoneHref}
            className="flex min-w-0 items-start gap-2 break-words transition-colors hover:text-primary"
          >
            <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
            {SITE_CONTACT.phone}
          </a>
          <a
            href={SITE_CONTACT.emailHref}
            className="flex min-w-0 items-start gap-2 break-all transition-colors hover:text-primary sm:break-words"
          >
            <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
            {SITE_CONTACT.email}
          </a>
          <a
            href={SITE_CONTACT.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-w-0 items-start gap-2 break-words transition-colors hover:text-primary"
          >
            <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
            {SITE_CONTACT.location}
          </a>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Clockwise Technologies. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}
