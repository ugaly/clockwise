import {
  organizationJsonLd,
  websiteJsonLd,
  breadcrumbJsonLd,
} from '@/lib/site-seo'
import { faqPageJsonLd } from '@/lib/faq-content'

type StructuredDataProps = {
  breadcrumbs?: { name: string; path: string }[]
  includeFaq?: boolean
}

export function StructuredData({ breadcrumbs, includeFaq = false }: StructuredDataProps) {
  const schemas: Record<string, unknown>[] = [organizationJsonLd, websiteJsonLd]

  if (breadcrumbs?.length) {
    schemas.push(breadcrumbJsonLd(breadcrumbs))
  }

  if (includeFaq) {
    schemas.push(faqPageJsonLd)
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={`jsonld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
