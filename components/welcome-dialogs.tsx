'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ArrowRight } from 'lucide-react'
import { hasSeenPopup, markPopupSeen } from '@/lib/cookies'
import { WELCOME_POPUPS, type WelcomePopup } from '@/lib/welcome-popups'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function WelcomeDialogs() {
  const [active, setActive] = useState<WelcomePopup | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const indexRef = useRef(0)

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }, [])

  const schedulePopup = useCallback(
    (startIndex: number, delay: number) => {
      clearTimer()

      let index = startIndex
      while (index < WELCOME_POPUPS.length && hasSeenPopup(WELCOME_POPUPS[index].id)) {
        index += 1
      }

      if (index >= WELCOME_POPUPS.length) return

      indexRef.current = index
      timerRef.current = setTimeout(() => {
        setActive(WELCOME_POPUPS[index])
      }, delay)
    },
    [clearTimer],
  )

  useEffect(() => {
    let index = 0
    while (index < WELCOME_POPUPS.length && hasSeenPopup(WELCOME_POPUPS[index].id)) {
      index += 1
    }
    if (index < WELCOME_POPUPS.length) {
      schedulePopup(index, WELCOME_POPUPS[index].delayMs)
    }
    return clearTimer
  }, [schedulePopup, clearTimer])

  const dismiss = useCallback(() => {
    if (!active) return

    markPopupSeen(active.id)
    setActive(null)

    const nextIndex = indexRef.current + 1
    if (nextIndex < WELCOME_POPUPS.length) {
      schedulePopup(nextIndex, WELCOME_POPUPS[nextIndex].delayMs)
    }
  }, [active, schedulePopup])

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          <button
            type="button"
            aria-label="Close dialog"
            className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
            onClick={dismiss}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={`popup-title-${active.id}`}
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-[101] max-h-[90vh] w-full max-w-md overflow-hidden overflow-y-auto rounded-3xl border border-border bg-card shadow-2xl"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={active.image}
                alt={active.imageAlt}
                fill
                className={cn(
                  'object-cover',
                  active.id === 'contact' && 'object-contain bg-secondary/40 p-6',
                )}
                sizes="(max-width: 448px) 100vw, 448px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/75 to-transparent" />
              <button
                type="button"
                onClick={dismiss}
                className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur transition-colors hover:bg-black/50"
                aria-label="Close"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="relative -mt-10 space-y-3 px-6 pb-6 pt-2">
              <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                {active.badge}
              </span>
              <h2
                id={`popup-title-${active.id}`}
                className="font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl"
              >
                {active.title}
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {active.description}
              </p>
              <div className="flex flex-col gap-2 pt-2 sm:flex-row">
                <Link
                  href={active.ctaHref}
                  onClick={dismiss}
                  className={buttonVariants({
                    className: 'group w-full sm:w-auto',
                  })}
                >
                  {active.ctaLabel}
                  <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <button
                  type="button"
                  onClick={dismiss}
                  className={buttonVariants({
                    variant: 'outline',
                    className: 'w-full sm:w-auto',
                  })}
                >
                  Maybe later
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
