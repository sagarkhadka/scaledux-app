import Link from 'next/link'

export type LinkHref = React.ComponentProps<typeof Link>['href']

export type RolesTypes = 'service-provider' | 'mentor' | 'investor' | 'freelancer'
