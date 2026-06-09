import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { WelcomeDialogs } from '@/components/welcome-dialogs'
import { StructuredData } from '@/components/structured-data'

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <StructuredData />
      <SiteNav />
      <main id="main-content">{children}</main>
      <SiteFooter />
      <WelcomeDialogs />
    </div>
  )
}
