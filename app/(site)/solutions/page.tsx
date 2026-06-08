import type { Metadata } from 'next'
import { PageTop } from '@/components/page-top'
import { Solutions } from '@/components/solutions'
import { CtaBanner } from '@/components/cta-banner'

export const metadata: Metadata = {
  title: 'Solutions | Clockwise Technologies',
  description:
    'Industry-focused digital solutions for finance, healthcare, retail, logistics, and enterprise operations.',
}

export default function SolutionsPage() {
  return (
    <>
      <PageTop>
        <Solutions />
      </PageTop>
      <CtaBanner />
    </>
  )
}
