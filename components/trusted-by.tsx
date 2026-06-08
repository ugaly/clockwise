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
    <section className="border-y border-border bg-secondary/30 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Trusted across industries and organizations
        </p>
        <div className="marquee-pause relative mt-6 overflow-hidden mask-fade-x">
          <div className="animate-marquee flex w-max items-center gap-4">
            {row.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="whitespace-nowrap rounded-full border border-border bg-background px-5 py-2 text-sm font-medium text-foreground/70"
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
