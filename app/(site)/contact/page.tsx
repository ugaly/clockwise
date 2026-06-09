import type { Metadata } from 'next'
import { PageTop } from '@/components/page-top'
import { Contact } from '@/components/contact'
import { Faq } from '@/components/faq'
import { StructuredData } from '@/components/structured-data'
import { SITE_CONTACT } from '@/lib/site-contact'
import { createPageMetadata } from '@/lib/site-seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Contact Us — Get a Free Consultation',
  description:
    `Contact Clockwise Technologies in Dar es Salaam for software development quotes, IT consulting, project proposals, and partnerships. Call ${SITE_CONTACT.phone} or email ${SITE_CONTACT.email}.`,
  path: '/contact',
  keywords: [
    'contact software company Tanzania',
    'software development quote',
    'IT consulting contact Dar es Salaam',
    'hire developers Tanzania',
    'free software consultation',
  ],
})

export default function ContactPage() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ]}
        includeFaq
      />
      <PageTop>
        <Contact />
      </PageTop>
      <Faq />
    </>
  )
}
