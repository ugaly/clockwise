import { cn } from '@/lib/utils'
import type { LucideIcon } from 'lucide-react'

type IconBgProps = {
  icon: LucideIcon
  className?: string
  /** Lighter box on gradient/dark cards */
  onDark?: boolean
  size?: 'md' | 'sm'
}

const sizes = {
  md: { box: 'size-14', icon: 'size-7' },
  sm: { box: 'size-12', icon: 'size-6' },
} as const

export function IconBg({
  icon: Icon,
  className,
  onDark = false,
  size = 'md',
}: IconBgProps) {
  const s = sizes[size]

  return (
    <div
      className={cn(
        'flex shrink-0 items-center justify-center rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110',
        s.box,
        onDark
          ? 'bg-white/15 text-white ring-1 ring-inset ring-white/20'
          : 'bg-primary text-primary-foreground',
        className,
      )}
    >
      <Icon className={s.icon} strokeWidth={1.75} />
    </div>
  )
}
