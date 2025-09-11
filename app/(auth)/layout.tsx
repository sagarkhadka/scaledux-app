'use client'

import React from 'react'
import Image from 'next/image'
import { ChevronLeft } from 'lucide-react'

import { useAuthStep } from '@/utils/store'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const { step, setStep } = useAuthStep()

  return (
    <div className='flex min-h-screen items-center justify-center bg-white sm:p-4 lg:p-6'>
      <div className='min-h-screen w-full grid-cols-2 overflow-hidden bg-white sm:min-h-[calc(100vh-3rem)] md:grid'>
        <div className='max-md:space-y-24 max-md:pt-24'>
          {step <= 1 ? (
            <Link href='/'>
              <div className='relative h-[24px] w-[142px] max-md:mx-auto'>
                <Image src='/primary-logo.svg' alt='Scaledux' fill className='object-contain' />
              </div>
            </Link>
          ) : (
            <Button variant={'ghost'} size={'free'} onClick={() => setStep(step - 1)}>
              <ChevronLeft /> Back
            </Button>
          )}
          <div className='flex h-full w-full items-center justify-center p-4 sm:p-8 lg:p-20'>
            {children}
          </div>
        </div>
        <div className='relative hidden overflow-hidden rounded-xl md:block'>
          <Image
            src={'/signup_bg.svg'}
            alt='Auth illustration'
            fill
            className='object-cover'
            priority
            style={{ borderRadius: '0.75rem' }}
          />
          <div className='absolute inset-0 z-0 rounded-xl' />
          <div className='absolute inset-0 z-10 flex items-center justify-center p-12'>
            <h2 className='display-md font-medium text-white lg:text-[40px]'>
              Your Entire Business <br className='hidden md:block' /> Journey, Simplified
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}
