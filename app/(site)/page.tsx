import { Hero } from '@/components/hero'
import { TrustedBy } from '@/components/trusted-by'
import { Services } from '@/components/services'
import { WhyChooseUs } from '@/components/why-choose-us'
import { Testimonials } from '@/components/testimonials'
import { CtaBanner } from '@/components/cta-banner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <CtaBanner />
    </>
  )
}
