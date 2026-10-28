import type { Metadata } from 'next'
import Link from 'next/link'
import { PageTop } from '@/components/page-top'
import { StructuredData } from '@/components/structured-data'
import { SITE_CONTACT } from '@/lib/site-contact'
import { createPageMetadata } from '@/lib/site-seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Terms of Service',
  description:
    'Read the simple terms for using the Clockwise digital business card app, including account requests, custom branding, digital card sharing, and app store usage.',
  path: '/terms',
  keywords: [
    'digital business card terms',
    'mobile app terms',
    'business card app Tanzania',
    'Clockwise app terms',
  ],
})

export default function TermsPage() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Terms', path: '/terms' },
        ]}
      />

      <PageTop>
        <section className="mx-auto max-w-4xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8 lg:p-10">
            <p className="eyebrow-line">Terms of Service</p>

            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Terms for the Clockwise digital business card platform
            </h1>

            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              Last updated: October 28, 2026
            </p>

            <div className="mt-8 space-y-6 text-sm leading-7 text-foreground/85 sm:text-base">
              <p>
                By downloading, installing, creating an account, or using the Clockwise digital
                business card app and platform, you agree to these terms. These terms apply to
                account requests, custom branding, digital card sharing, and use of the services
                available through our mobile app and web platform.
              </p>

              <p>
                We provide a digital business card service that allows individuals, teams, and
                businesses to share contact details, brand information, and messaging with clients,
                partners, and prospects through mobile devices and web-based sharing tools.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-muted p-4">
                  <h2 className="text-base font-semibold text-foreground">1. Account access</h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Users may request an account, and access is granted after approval by Clockwise.
                    Account holders are responsible for keeping their login details secure and for
                    all activity carried out under their account.
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-muted p-4">
                  <h2 className="text-base font-semibold text-foreground">2. Digital card use</h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    The app enables users to share digital business cards, contact details, and
                    brand information. Users must only share accurate, lawful, and non-misleading
                    information.
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-muted p-4">
                  <h2 className="text-base font-semibold text-foreground">3. Brand identity</h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Customers may use custom layouts, colors, logos, and brand identity to align the
                    app experience with their business identity and marketing needs.
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-muted p-4">
                  <h2 className="text-base font-semibold text-foreground">4. Acceptable use</h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    You agree not to use the app for fraud, spam, abusive behavior, illegal content,
                    or anything that damages the platform, other users, or the rights of third parties.
                  </p>
                </div>
              </div>

              <p>
                We may create, customise, or update layouts and features for clients based on agreed
                requirements. Any branded content remains subject to the terms of the project, the
                applicable account settings, and the rights granted by the user or organisation.
              </p>

              <p>
                Your data is important to us. We use reasonable technical and organisational measures
                to protect account information and shared contact data, but no digital platform can
                guarantee absolute security. You are responsible for the accuracy of the information you
                publish and for confirming that your use is compliant with local laws and platform rules.
              </p>

              <p>
                Clockwise may update, improve, suspend, or discontinue features at any time when
                necessary for security, operations, compliance, or service quality. We may also suspend
                access where misuse, abuse, or non-payment is identified.
              </p>

              <p>
                These terms are intended to support a simple and lawful use of the app and platform for
                business networking and professional communication. By agreeing to use our service in the
                App Store or Google Play Store, you confirm that you understand and accept these
                conditions.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-border bg-primary/5 p-5">
              <h2 className="text-lg font-semibold text-foreground">Questions or support</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                If you need help, want to request an account, or have questions about these terms,
                please <Link href="/contact" className="font-medium text-primary underline-offset-4 hover:underline">contact us</Link>{' '}
                or email <a href={SITE_CONTACT.emailHref} className="font-medium text-primary underline-offset-4 hover:underline">{SITE_CONTACT.email}</a>.
              </p>
            </div>
          </div>
        </section>
      </PageTop>
    </>
  )
}
