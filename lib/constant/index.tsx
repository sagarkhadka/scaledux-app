import { LinkHref } from '../scaletype'

export const userHeaderItems: {
  title: string
  href: LinkHref
  children?: { title: string; href: LinkHref }[]
}[] = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'Quick Links',
    href: '/',
    children: [
      { title: 'Login', href: '/login' },
      { title: 'SIgnup', href: '/signup' },
      { title: 'Onboarding', href: '/onboarding' }
    ]
  }
]
