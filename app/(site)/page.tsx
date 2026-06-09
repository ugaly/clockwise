import type { Metadata } from 'next'
import { Hero } from '@/components/hero'
import { TrustedBy } from '@/components/trusted-by'
import { Services } from '@/components/services'
import { WhyChooseUs } from '@/components/why-choose-us'
import { CtaBanner } from '@/components/cta-banner'
import { StructuredData } from '@/components/structured-data'
import { createPageMetadata } from '@/lib/site-seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Software Development & IT Consulting in Tanzania',
  description:
    'Clockwise Technologies builds custom software, mobile apps, cloud platforms, logistics systems, real estate software, and IT analytics solutions for businesses in Dar es Salaam and across Africa.',
  path: '/',
  keywords: [
    'software company Dar es Salaam',
    'hire software developers Tanzania',
    'digital agency Tanzania',
    'technology solutions Africa',
  ],
})

export default function HomePage() {
  return (
    <>
      <StructuredData breadcrumbs={[{ name: 'Home', path: '/' }]} />
      <Hero />
      <TrustedBy />
      <Services />
      <WhyChooseUs />
      <CtaBanner />
    </>
  )
}
