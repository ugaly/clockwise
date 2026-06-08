import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Sora } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const sora = Sora({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Clockwise Technologies | Digital Transformation & Software Solutions',
  description:
    'Clockwise Technologies builds scalable software, cloud infrastructure, mobile apps, and digital business services that help organizations across Africa thrive in the digital age.',
  generator: 'v0.app',
  keywords: [
    'software development',
    'digital transformation',
    'cloud solutions',
    'mobile app development',
    'enterprise systems',
    'Clockwise Technologies',
  ],
  openGraph: {
    title: 'Clockwise Technologies | Digital Transformation Partner',
    description:
      'Scalable software, cloud, and digital business solutions for modern organizations.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0A56A5',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
