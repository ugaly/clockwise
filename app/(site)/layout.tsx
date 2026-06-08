import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { WelcomeDialogs } from '@/components/welcome-dialogs'

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <SiteNav />
      <main>{children}</main>
      <SiteFooter />
      <WelcomeDialogs />
    </div>
  )
}
