'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'

import { Bounded } from '../Bounded'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import { RolesTypes } from '@/lib/scaletype'

const onboardCards: {
  title: string
  description: string
  slug: RolesTypes
}[] = [
  {
    title: 'Looking for a service',
    description: 'Hire freelancers, agencies, find mentors, or connect with investors.',
    slug: 'freelancer'
  },
  {
    title: 'A service provider',
    description: 'Join as a freelancer or agency. Solo or team-we’ve got you covered',
    slug: 'service-provider'
  },
  {
    title: 'A Mentor',
    description: 'Looking to mentor a startup/business',
    slug: 'mentor'
  },
  {
    title: 'An Investor',
    description: 'Looking to fund a visionary startup/business',
    slug: 'investor'
  }
]

const UserSelection = () => {
  const router = useRouter()
  const search = useSearchParams()
  const [selectedRole, setSelectedRole] = React.useState<string | null>(null)

  useEffect(() => {
    if (!search.get('role')) {
      setSelectedRole(search.get('role') as RolesTypes)
    }
  }, [search])

  return (
    <Bounded className='pb-36'>
      <h1 className='display-sm text-center font-semibold'>
        What best describes you? {selectedRole}
      </h1>
      <div className='mt-6 grid grid-cols-1 gap-5 sm:mt-8 sm:grid-cols-2 md:mt-10 lg:mt-14 lg:grid-cols-4'>
        {onboardCards.map((item) => (
          <button key={item.slug} onClick={() => setSelectedRole(item.slug)}>
            <OnboardCard
              title={item.title}
              description={item.description}
              isSelected={selectedRole === item.slug}
            />
          </button>
        ))}
      </div>
      <div className='mt-10 flex justify-center'>
        <Button
          className='w-fit disabled:!bg-[#F2F4F7]'
          disabled={selectedRole === null}
          onClick={() => {
            // add query on url with selected role
            // /onboarding?role=${selectedRole}
            // window.location.href = `/onboarding?role=${selectedRole}`
            router.push(`/onboarding?role=${selectedRole}`)
          }}>
          Join as Service Provider
        </Button>
      </div>
    </Bounded>
  )
}

export default UserSelection

const OnboardCard: React.FC<{
  title: string
  description: string
  isSelected?: boolean
}> = ({ title, description, isSelected }) => {
  return (
    <>
      <div
        className={cn(
          'border-border-secondary flex h-full flex-col gap-7 rounded-lg border bg-white p-6 pt-[76px] shadow-xs duration-200 hover:-translate-y-[1px] hover:shadow-lg',
          isSelected &&
            'border-brand-purple from-brand-blue/[3%] to-brand-purple/[3%] bg-gradient-to-br'
        )}>
        <div className='relative size-12'>
          <Image src={'/icons/service.svg'} alt='icon' fill className='object-contain' />
        </div>
        <div className='space-y-2'>
          <h5 className='display-xs'>{title}</h5>
          <p>{description}</p>
        </div>
      </div>
    </>
  )
}
