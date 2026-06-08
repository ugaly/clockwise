import type { Metadata } from 'next'
import { PageTop } from '@/components/page-top'
import { Portfolio } from '@/components/portfolio'
import { Testimonials } from '@/components/testimonials'
import { CtaBanner } from '@/components/cta-banner'

export const metadata: Metadata = {
  title: 'Projects | Clockwise Technologies',
  description:
    'Explore software projects and digital products delivered by Clockwise Technologies for clients across Africa.',
}

export default function ProjectsPage() {
  return (
    <>
      <PageTop>
        <Portfolio />
      </PageTop>
      <Testimonials />
      <CtaBanner />
    </>
  )
}
