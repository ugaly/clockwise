'use client'

const industries = [
  'Logistics',
  'Healthcare',
  'Education',
  'Fintech',
  'Government',
  'Retail & E-commerce',
  'NGOs',
  'Manufacturing',
  'Real Estate',
  'Agriculture',
]

export function TrustedBy() {
  const row = [...industries, ...industries]
  return (
    <section className="bg-background py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Trusted across industries
          </p>
          {/* <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">120+</span> organizations served
          </p> */}
        </div>
        <div className="marquee-pause relative mt-8 overflow-hidden mask-fade-x">
          <div className="animate-marquee flex w-max items-center gap-3 [animation-duration:48s]">
            {row.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="whitespace-nowrap rounded-full border border-border/80 bg-card px-5 py-2.5 text-sm font-medium text-foreground/55 shadow-soft transition-colors hover:border-primary/25 hover:text-foreground/80"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
