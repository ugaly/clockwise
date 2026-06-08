import Image from 'next/image'
import { cn } from '@/lib/utils'

type DecoProps = {
  className?: string
}

export function DotGridDeco({ className }: DecoProps) {
  return (
    <Image
      src="/shapes/dot-grid.png"
      alt=""
      width={48}
      height={76}
      aria-hidden
      className={cn(
        'pointer-events-none h-auto w-10 select-none opacity-60 sm:w-12',
        className,
      )}
    />
  )
}

export function CircleRingDeco({ className }: DecoProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden
      className={cn('pointer-events-none size-14 text-primary/12 sm:size-16', className)}
    >
      <circle cx="60" cy="60" r="54" stroke="currentColor" strokeWidth="8" />
      <circle cx="60" cy="60" r="34" stroke="currentColor" strokeWidth="4" opacity="0.5" />
    </svg>
  )
}

export function FigureBlobDeco({ className }: DecoProps) {
  return (
    <Image
      src="/shapes/figure-shape-2.png"
      alt=""
      width={32}
      height={28}
      aria-hidden
      className={cn('pointer-events-none h-auto w-7 select-none opacity-70 sm:w-8', className)}
    />
  )
}

export function SectionDecorations({
  variant = 'services',
}: {
  variant?: 'services' | 'solutions' | 'why' | 'cta'
}) {
  if (variant === 'services') {
    return (
      <>
        <DotGridDeco className="absolute left-2 top-20 hidden sm:block" />
        <CircleRingDeco className="absolute -right-4 top-28 hidden md:block" />
        <div className="pointer-events-none absolute -left-24 top-1/2 size-48 rounded-full bg-primary/6 blur-3xl" />
      </>
    )
  }

  if (variant === 'solutions') {
    return (
      <>
        <CircleRingDeco className="absolute -left-6 top-24 text-accent/20" />
        <div className="pointer-events-none absolute left-1/2 top-0 size-64 -translate-x-1/2 rounded-full bg-primary/4 blur-3xl" />
      </>
    )
  }

  if (variant === 'why') {
    return <DotGridDeco className="absolute bottom-16 right-6 hidden opacity-50 md:block" />
  }

  return <CircleRingDeco className="absolute -left-4 top-10 text-white/15" />
}
