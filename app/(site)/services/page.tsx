import type { Metadata } from 'next'
import { PageTop } from '@/components/page-top'
import { Services } from '@/components/services'
import { TechStack } from '@/components/tech-stack'
import { Process } from '@/components/process'
import { CtaBanner } from '@/components/cta-banner'

export const metadata: Metadata = {
  title: 'Services | Clockwise Technologies',
  description:
    'Custom software development, web and mobile apps, cloud solutions, and enterprise systems from Clockwise Technologies.',
}

export default function ServicesPage() {
  return (
    <>
      <PageTop>
        <Services />
      </PageTop>
      <TechStack />
      <Process />
      <CtaBanner />
    </>
  )
}
