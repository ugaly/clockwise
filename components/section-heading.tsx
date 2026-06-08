import { Reveal } from '@/components/motion-primitives'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
  variant = 'pill',
}: {
  eyebrow: string
  title: React.ReactNode
  description?: string
  align?: 'center' | 'left'
  light?: boolean
  variant?: 'pill' | 'line'
}) {
  const isCenter = align === 'center'
  return (
    <Reveal
      className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : 'text-left'}`}
    >
      {variant === 'line' ? (
        <span
          className={`eyebrow-line ${isCenter ? 'justify-center' : ''} ${light ? 'text-white/90 before:bg-white/40' : ''}`}
        >
          {eyebrow}
        </span>
      ) : (
        <span
          className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${
            light
              ? 'border-white/20 bg-white/10 text-white/90'
              : 'border-primary/15 bg-primary/5 text-primary'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-5 text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.85rem] lg:leading-[1.08] ${
          light ? 'text-white' : 'text-foreground'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl text-pretty text-base leading-relaxed sm:text-lg ${
            isCenter ? 'mx-auto' : ''
          } ${light ? 'text-white/75' : 'text-muted-foreground'}`}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}
