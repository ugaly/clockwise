import type { Metadata } from 'next'
import { PageTop } from '@/components/page-top'
import { Process } from '@/components/process'
import { WhyChooseUs } from '@/components/why-choose-us'
import { CtaBanner } from '@/components/cta-banner'
import { StructuredData } from '@/components/structured-data'
import { createPageMetadata } from '@/lib/site-seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Our Software Development Process',
  description:
    'Discover how Clockwise Technologies plans, designs, develops, tests, and deploys software using agile methodology with full transparency and fast delivery.',
  path: '/process',
  keywords: [
    'agile software development process',
    'software project lifecycle',
    'discovery design develop deploy',
    'transparent software delivery',
  ],
})

export default function ProcessPage() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Process', path: '/process' },
        ]}
      />
      <PageTop>
        <Process />
      </PageTop>
      <WhyChooseUs />
      <CtaBanner />
    </>
  )
}
