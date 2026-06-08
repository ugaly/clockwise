import { Reveal } from '@/components/motion-primitives'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
}: {
  eyebrow: string
  title: React.ReactNode
  description?: string
  align?: 'center' | 'left'
  light?: boolean
}) {
  const isCenter = align === 'center'
  return (
    <Reveal
      className={`max-w-2xl ${isCenter ? 'mx-auto text-center' : 'text-left'}`}
    >
      <span
        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
          light
            ? 'border-white/20 bg-white/10 text-white/90'
            : 'border-primary/20 bg-primary/5 text-primary'
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-4 text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] ${
          light ? 'text-white' : 'text-foreground'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-pretty text-base leading-relaxed ${
            light ? 'text-white/70' : 'text-muted-foreground'
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}
