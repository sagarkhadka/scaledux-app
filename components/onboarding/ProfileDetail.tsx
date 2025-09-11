'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { Bounded } from '../Bounded'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

const ProfileDetail = () => {
  const router = useRouter()
  const [selectedRole, setSelectedRole] = useState<string | null>(null)

  return (
    <>
      <Bounded className='pb-36'>
        <div className='space-y-3'>
          <h1 className='display-sm text-center font-semibold'>
            How would you like to fill your profile details?
          </h1>
          <p className='text-center'>Save time to fill your profile by linking below accounts</p>
        </div>
        <div className='mx-auto mt-16 grid max-w-[600px] gap-5 md:grid-cols-2 lg:max-w-[820px]'>
          {ProfileOptions.map((item) => (
            <button key={item.title} onClick={() => setSelectedRole(item.title)}>
              <SelectionCard
                key={item.title}
                title={item.title}
                description={item.description}
                isSelected={selectedRole === item.title}
                iconUrl={item.image}
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
              router.push(`/`)
            }}>
            Next
          </Button>
        </div>
      </Bounded>
    </>
  )
}

export default ProfileDetail

const SelectionCard: React.FC<{
  title: string
  description: string
  isSelected?: boolean
  iconUrl: string
}> = ({ title, description, isSelected, iconUrl }) => {
  return (
    <>
      <div
        className={cn(
          'border-border-secondary flex h-full flex-col gap-7 rounded-lg border bg-white p-6 shadow-xs duration-200 hover:-translate-y-[1px] hover:shadow-lg',
          isSelected &&
            'border-brand-purple from-brand-blue/[3%] to-brand-purple/[3%] bg-gradient-to-br'
        )}>
        <div className='flex items-center gap-3'>
          <div className='relative size-12'>
            <Image src={iconUrl} alt='icon' fill className='object-contain' />
          </div>
          <h6 className='text-primary text-base font-semibold'>{title}</h6>
        </div>
        <p className='text-left'>{description}</p>
      </div>
    </>
  )
}

const ProfileOptions: {
  title: string
  description: string
  image: string
}[] = [
  {
    title: 'Linkedin',
    description: 'Import your name, photo, email address, education, experience, skills',
    image: '/linkedin-icon.svg'
  },
  {
    title: 'Skip for now',
    description: 'Fill details manually later',
    image: '/icons/skip-for-now.svg'
  }
]
