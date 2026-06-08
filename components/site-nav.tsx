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
            ? 'border-b border-border bg-background/95 py-2.5 shadow-[0_1px_0_0_var(--border)] backdrop-blur-xl'
            : 'border-b border-transparent bg-background/80 py-3.5 backdrop-blur-md',
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
            width={340}
            height={100}
            priority
            className={cn(
              'w-auto object-contain transition-all duration-300',
              scrolled ? 'h-9 sm:h-10' : 'h-10 sm:h-11 lg:h-12',
            )}
          />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {links.map((l) => {
            const active = isActivePath(pathname, l.href)
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  'rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-200',
                  active
                    ? 'bg-primary/8 text-foreground'
                    : 'text-foreground/65 hover:bg-secondary hover:text-foreground',
                )}
              >
                {l.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden lg:flex">
          <Link
            href="/contact"
            className={buttonVariants({
              className:
                'group h-10 rounded-full bg-primary px-5 text-primary-foreground shadow-soft hover:bg-primary/90',
            })}
          >
            Get Started
            <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-background text-foreground lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-border bg-background/98 backdrop-blur-xl lg:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'block rounded-xl px-4 py-3 text-sm font-medium transition-colors',
                    isActivePath(pathname, l.href)
                      ? 'bg-primary/8 text-foreground'
                      : 'text-foreground/80 hover:bg-secondary',
                  )}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className={buttonVariants({
                  className: 'mt-3 h-11 w-full rounded-full',
                })}
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
