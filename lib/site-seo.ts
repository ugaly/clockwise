import type { Metadata } from 'next'
import { SITE_CONTACT } from '@/lib/site-contact'

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://clockwisetech.com'

export const SITE_NAME = 'Clockwise Technologies'
export const SITE_TAGLINE = 'Digital Transformation & Software Solutions'
export const SITE_LOCALE = 'en_TZ'

export const DEFAULT_DESCRIPTION =
  'Clockwise Technologies is a software development and IT consulting company in Dar es Salaam, Tanzania. We build custom web apps, mobile apps, cloud platforms, logistics systems, real estate software, healthcare solutions, and data analytics for businesses across Africa.'

/** Broad keyword set for discoverability across services, industries, and locations */
export const GLOBAL_KEYWORDS = [
  'Clockwise Technologies',
  'clockwisetech',
  'software development company Tanzania',
  'software development Dar es Salaam',
  'IT company Tanzania',
  'IT consulting Tanzania',
  'IT consulting Dar es Salaam',
  'web development Tanzania',
  'mobile app development Tanzania',
  'custom software development Africa',
  'digital transformation Tanzania',
  'cloud solutions Tanzania',
  'enterprise software development',
  'ERP development Tanzania',
  'CRM development Tanzania',
  'logistics management system',
  'fleet management software',
  'real estate software Tanzania',
  'property management system',
  'healthcare software development',
  'school management system',
  'business management software',
  'NFC digital business cards',
  'agile software consulting',
  'hosting and server management',
  'AWS Azure cloud migration',
  'IT virtualization',
  'data analytics consulting',
  'business intelligence Tanzania',
  'software outsourcing Africa',
  'technology partner Tanzania',
  'Morocco Square Dar es Salaam',
] as const

export const SITE_ROUTES = [
  { path: '/', changeFrequency: 'weekly' as const, priority: 1 },
  { path: '/services', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/solutions', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/projects', changeFrequency: 'weekly' as const, priority: 0.85 },
  { path: '/process', changeFrequency: 'monthly' as const, priority: 0.75 },
  { path: '/about', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.85 },
]

type PageSeoInput = {
  title: string
  description: string
  path: string
  keywords?: string[]
  noIndex?: boolean
  ogImage?: string
}

export function absoluteUrl(path = '') {
  if (!path || path === '/') return SITE_URL
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  noIndex = false,
  ogImage = '/logo/logo.png',
}: PageSeoInput): Metadata {
  const canonical = absoluteUrl(path)
  const brandedTitle =
    path === '/' ? `${SITE_NAME} | ${SITE_TAGLINE}` : `${title} | ${SITE_NAME}`
  const mergedKeywords = [...new Set([...keywords, ...GLOBAL_KEYWORDS])]

  return {
    title: path === '/' ? { absolute: brandedTitle } : title,
    description,
    keywords: mergedKeywords,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    category: 'technology',
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        },
    openGraph: {
      type: 'website',
      locale: SITE_LOCALE,
      url: canonical,
      siteName: SITE_NAME,
      title: brandedTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — ${SITE_TAGLINE}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: brandedTitle,
      description,
      images: [ogImage],
    },
    other: {
      'geo.region': 'TZ-02',
      'geo.placename': 'Dar es Salaam',
      'geo.position': '-6.777;39.263',
      ICBM: '-6.777, 39.263',
      contact: SITE_CONTACT.email,
    },
  }
}

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService'],
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: absoluteUrl('/logo/logo.png'),
  image: absoluteUrl('/logo/logo.png'),
  description: DEFAULT_DESCRIPTION,
  email: SITE_CONTACT.email,
  telephone: SITE_CONTACT.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Morocco Square NHC',
    addressLocality: 'Dar es Salaam',
    addressCountry: 'TZ',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -6.777,
    longitude: 39.263,
  },
  areaServed: ['Tanzania', 'East Africa', 'Africa'],
  sameAs: [],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: SITE_CONTACT.phone,
    email: SITE_CONTACT.email,
    contactType: 'customer service',
    areaServed: 'TZ',
    availableLanguage: ['English', 'Swahili'],
  },
  knowsAbout: [
    'Software Development',
    'Web Development',
    'Mobile App Development',
    'Cloud Computing',
    'IT Consulting',
    'Data Analytics',
    'Logistics Software',
    'Real Estate Technology',
    'Healthcare Information Systems',
    'Digital Transformation',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Software & IT Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Software Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cloud Solutions' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'IT Consulting & Analytics' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Logistics Management Systems' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Real Estate Sales Platforms' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Healthcare Systems' } },
    ],
  },
}

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en-TZ',
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/services?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}
