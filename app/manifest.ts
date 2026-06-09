import type { MetadataRoute } from 'next'
import { SITE_NAME, SITE_TAGLINE } from '@/lib/site-seo'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — ${SITE_TAGLINE}`,
    short_name: SITE_NAME,
    description:
      'Software development, IT consulting, and digital solutions in Dar es Salaam, Tanzania.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0A56A5',
    icons: [
      { src: '/logo/logo.png', sizes: '192x192', type: 'image/png' },
      { src: '/logo/logo.png', sizes: '512x512', type: 'image/png' },
    ],
  }
}
