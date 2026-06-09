import type { Metadata } from 'next'
import { PageTop } from '@/components/page-top'
import { About } from '@/components/about'
import { WhyChooseUs } from '@/components/why-choose-us'
import { Faq } from '@/components/faq'
import { CtaBanner } from '@/components/cta-banner'
import { StructuredData } from '@/components/structured-data'
import { createPageMetadata } from '@/lib/site-seo'

export const metadata: Metadata = createPageMetadata({
  title: 'About Our Software Company',
  description:
    'Meet Clockwise Technologies — a Dar es Salaam-based software and IT consulting team helping organizations across Africa build modern digital products and platforms.',
  path: '/about',
  keywords: [
    'about Clockwise Technologies',
    'software team Tanzania',
    'technology company Dar es Salaam',
    'trusted IT partner Africa',
  ],
})

export default function AboutPage() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ]}
        includeFaq
      />
      <PageTop>
        <About />
      </PageTop>
      <WhyChooseUs />
      <Faq />
      <CtaBanner />
    </>
  )
}
