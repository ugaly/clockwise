import type { Metadata } from 'next'
import { PageTop } from '@/components/page-top'
import { Services } from '@/components/services'
import { TechStack } from '@/components/tech-stack'
import { Process } from '@/components/process'
import { CtaBanner } from '@/components/cta-banner'
import { StructuredData } from '@/components/structured-data'
import { createPageMetadata } from '@/lib/site-seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Software Development Services',
  description:
    'End-to-end technology services: custom software, web and mobile apps, cloud hosting, agile consulting, marketing, IT consulting, virtualization, and data analytics in Tanzania.',
  path: '/services',
  keywords: [
    'web development services Tanzania',
    'mobile app development company',
    'cloud hosting Tanzania',
    'agile consulting',
    'software outsourcing',
    'VPS dedicated server management',
  ],
})

export default function ServicesPage() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
        ]}
      />
      <PageTop>
        <Services />
      </PageTop>
      <TechStack />
      <Process />
      <CtaBanner />
    </>
  )
}
