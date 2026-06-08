import type { Metadata } from 'next'
import { PageTop } from '@/components/page-top'
import { About } from '@/components/about'
import { WhyChooseUs } from '@/components/why-choose-us'
import { Faq } from '@/components/faq'
import { CtaBanner } from '@/components/cta-banner'

export const metadata: Metadata = {
  title: 'About Us | Clockwise Technologies',
  description:
    'Meet Clockwise Technologies — a software development company helping businesses across Africa build modern digital products.',
}

export default function AboutPage() {
  return (
    <>
      <PageTop>
        <About />
      </PageTop>
      <WhyChooseUs />
      <Faq />
      <CtaBanner />
    </>
  )
}
