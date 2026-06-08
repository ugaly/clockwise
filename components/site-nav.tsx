'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Projects', href: '/projects' },
  { label: 'Process', href: '/process' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

function isActivePath(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname === href
}

export function SiteNav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 w-full"
    >
      <div
        className={cn(
          'flex w-full items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-6 lg:px-10',
          scrolled
            ? 'border-b border-border/80 bg-background/90 py-3 shadow-sm backdrop-blur-xl'
            : 'border-b border-border/40 bg-background/70 py-4 backdrop-blur-md',
        )}
      >
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2"
          aria-label="Clockwise Technologies home"
        >
          <Image
            src="/logo/logo.png"
            alt="Clockwise Technologies"
            width={180}
            height={52}
            priority
            className="h-8 w-auto object-contain sm:h-9"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                'group relative rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                isActivePath(pathname, l.href)
                  ? 'text-foreground'
                  : 'text-foreground/70 hover:text-foreground',
              )}
            >
              {l.label}
              <span
                className={cn(
                  'absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-gradient-to-r from-primary to-accent transition-transform duration-300',
                  isActivePath(pathname, l.href)
                    ? 'scale-x-100'
                    : 'scale-x-0 group-hover:scale-x-100',
                )}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/contact"
            className={buttonVariants({
              variant: 'ghost',
              className: 'text-foreground/80 hover:text-foreground',
            })}
          >
            Request Consultation
          </Link>
          <Link
            href="/contact"
            className={buttonVariants({
              className:
                'group bg-primary text-primary-foreground hover:bg-primary/90',
            })}
          >
            Get Started
            <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-background/60 text-foreground lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="border-b border-border bg-background/95 px-4 py-2 shadow-lg backdrop-blur-xl lg:hidden"
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'block rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-secondary hover:text-foreground',
                  isActivePath(pathname, l.href)
                    ? 'text-foreground'
                    : 'text-foreground/80',
                )}
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 p-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className={buttonVariants({ className: 'w-full' })}
              >
                Get Started
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
