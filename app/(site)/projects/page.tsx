import type { Metadata } from 'next'
import { PageTop } from '@/components/page-top'
import { Portfolio } from '@/components/portfolio'
import { CtaBanner } from '@/components/cta-banner'
import { StructuredData } from '@/components/structured-data'
import { createPageMetadata } from '@/lib/site-seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Software Projects & Case Studies',
  description:
    'Explore fintech, logistics, real estate, healthcare, and enterprise software projects delivered by Clockwise Technologies for clients across Africa.',
  path: '/projects',
  keywords: [
    'software portfolio Tanzania',
    'case studies software development',
    'fintech projects Africa',
    'real estate software projects',
    'logistics platform case study',
  ],
})

export default function ProjectsPage() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Projects', path: '/projects' },
        ]}
      />
      <PageTop>
        <Portfolio />
      </PageTop>
      <CtaBanner />
    </>
  )
}
