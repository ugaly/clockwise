import type { Metadata } from 'next'
import { PageTop } from '@/components/page-top'
import { Contact } from '@/components/contact'
import { Faq } from '@/components/faq'

export const metadata: Metadata = {
  title: 'Contact | Clockwise Technologies',
  description:
    'Get in touch with Clockwise Technologies to discuss your software project, consultation, or partnership.',
}

export default function ContactPage() {
  return (
    <>
      <PageTop>
        <Contact />
      </PageTop>
      <Faq />
    </>
  )
}
