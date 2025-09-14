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

export const accountMenuList: {
  title: string
  href: LinkHref
}[] = [
  {
    title: 'Profile',
    href: '/my-profile'
  },
  {
    title: 'Portfolio',
    href: '/portfolio'
  },
  {
    title: 'Service package',
    href: '/service-package'
  },
  {
    title: 'Billing & payment',
    href: '/billing-payment'
  },
  {
    title: 'Account settings',
    href: '/account-settings'
  }
]

export const notificationData: {
  title: string
  description: string
  isRead: boolean
  createdAt: string
  isProposal?: boolean
  isMilestone?: boolean
}[] = [
  {
    title: 'Proposal Received',
    description: 'Alisa Hester submitted a proposal for your project Mobile App Redesign.',
    isProposal: true,
    isRead: false,
    createdAt: 'Now'
  },
  {
    title: 'File reveived',
    description: 'Candice Wu uploaded a new file for your project “Marketing Campaign”.',
    isProposal: false,
    isRead: false,
    createdAt: '2m ago'
  },
  {
    title: 'Milestone created',
    description: 'Alisa Hester Created a milestone in Marketing site redesign.',
    isProposal: false,
    isRead: false,
    isMilestone: true,
    createdAt: '5h ago'
  },
  {
    title: 'Message reveived',
    description: 'Alisa Hester sent you a message.',
    isProposal: false,
    isRead: true,
    isMilestone: false,
    createdAt: '20 Aug 2025'
  },
  {
    title: 'Payment reveived',
    description: 'You’ve received ₹20,000 from Alisa Hester for E-commerce Website Design.',
    isProposal: false,
    isRead: true,
    isMilestone: false,
    createdAt: '20 Aug 2025'
  }
]
