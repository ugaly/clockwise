export type WelcomePopup = {
  id: string
  image: string
  imageAlt: string
  badge: string
  title: string
  description: string
  ctaLabel: string
  ctaHref: string
  /** Ms after page load (first popup) or after previous popup closes */
  delayMs: number
}

export const WELCOME_POPUPS: WelcomePopup[] = [
  {
    id: 'welcome',
    image: '/about-team.png',
    imageAlt: 'Welcome to Clockwise Technologies',
    badge: 'Welcome',
    title: 'Glad you are here',
    description:
      'Clockwise Technologies builds custom software, mobile apps, and cloud platforms that help businesses across Africa grow with confidence.',
    ctaLabel: 'Explore Our Work',
    ctaHref: '/projects',
    delayMs: 60_000,
  },
  {
    id: 'solutions',
    image: '/project-logistics.png',
    imageAlt: 'Clockwise Technologies solutions',
    badge: 'What we offer',
    title: 'Products built for real industries',
    description:
      'From logistics and healthcare to real estate and fintech — we deliver ready-made and custom systems including ERP, CRM, property sales platforms, and mobile apps.',
    ctaLabel: 'View Solutions',
    ctaHref: '/solutions',
    delayMs: 120_000,
  },
  {
    id: 'contact',
    image: '/logo/logo.png',
    imageAlt: 'Clockwise Technologies',
    badge: 'Let us talk',
    title: 'Ready to start your project?',
    description:
      'Tell us about your idea and our team in Dar es Salaam will respond within one business day with a clear plan and next steps.',
    ctaLabel: 'Contact Us',
    ctaHref: '/contact',
    delayMs: 300_000,
  },
]
