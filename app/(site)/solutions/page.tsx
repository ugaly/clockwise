import type { Metadata } from 'next'
import { PageTop } from '@/components/page-top'
import { Solutions } from '@/components/solutions'
import { CtaBanner } from '@/components/cta-banner'
import { StructuredData } from '@/components/structured-data'
import { createPageMetadata } from '@/lib/site-seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Industry Software Solutions',
  description:
    'Ready-made platforms for logistics, NFC business cards, ERP, tax compliance, real estate sales, and healthcare — customizable for businesses in Tanzania and Africa.',
  path: '/solutions',
  keywords: [
    'logistics software Tanzania',
    'fleet management system',
    'real estate platform Tanzania',
    'healthcare management software',
    'tax compliance software',
    'NFC business card',
    'ERP CRM Tanzania',
  ],
})

export default function SolutionsPage() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Solutions', path: '/solutions' },
        ]}
      />
      <PageTop>
        <Solutions />
      </PageTop>
      <CtaBanner />
    </>
  )
}
