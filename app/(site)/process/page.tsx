import type { Metadata } from 'next'
import { PageTop } from '@/components/page-top'
import { Process } from '@/components/process'
import { WhyChooseUs } from '@/components/why-choose-us'
import { CtaBanner } from '@/components/cta-banner'

export const metadata: Metadata = {
  title: 'Our Process | Clockwise Technologies',
  description:
    'Learn how Clockwise Technologies plans, builds, tests, and delivers software projects with a clear, collaborative process.',
}

export default function ProcessPage() {
  return (
    <>
      <PageTop>
        <Process />
      </PageTop>
      <WhyChooseUs />
      <CtaBanner />
    </>
  )
}
