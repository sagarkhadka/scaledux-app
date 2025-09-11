'use client'

import React from 'react'
import Link from 'next/link'

import SignupForm from '@/components/forms/SignupForm'
import { useAuthStep } from '@/utils/store'
import ValidateOTP from '@/components/forms/ValidateOTP'
import NewPassword from '@/components/forms/NewPassword'
import ThirdPartyAuth from '@/components/auth/ThirdPartyAuth'

export default function Page() {
  const { step } = useAuthStep()

  return (
    <div className='w-full max-w-[360px] space-y-8 max-sm:flex-1'>
      {step === 1 && (
        <>
          <div className='flex flex-col gap-2'>
            <h3 className='display-sm text-primary text-center font-semibold'>
              Create your account
            </h3>
            <p className='text-tertiary text-center'>One free account, endless growth</p>
          </div>
          <div className='flex flex-col gap-8 md:gap-9'>
            <SignupForm />
            <div className='flex items-center gap-2'>
              <span className='bg-border-primary h-px flex-1' />
              <span className='text-tertiary'>
                <span className='md:hidden'>Or sign up with</span>
                <span className='max-md:hidden'>OR</span>
              </span>
              <span className='bg-border-primary h-px flex-1 rounded-lg' />
            </div>
            <ThirdPartyAuth />
            <span className='text-tertiary text-center'>
              Already have an account? <Link href='/login'>Login</Link>
            </span>
          </div>
        </>
      )}
      {step === 2 && (
        <>
          <div className='flex flex-col gap-2'>
            <h3 className='display-sm text-primary text-center font-semibold'>Verify your email</h3>
            <p className='text-tertiary text-center'>
              We have sent a 6-digit verification code to{' '}
              <span className='font-medium'>alex.carey@email.com</span>
            </p>
          </div>
          <div className='flex flex-col gap-8 md:gap-9'>
            <ValidateOTP />
          </div>
        </>
      )}
      {step === 3 && (
        <>
          <div className='flex flex-col gap-2'>
            <h3 className='display-sm text-primary text-center font-semibold'>Choose a password</h3>
            <p className='text-tertiary text-center'>alex.carey@email.com</p>
          </div>
          <div className='flex flex-col gap-8 md:gap-9'>
            <NewPassword />
          </div>
        </>
      )}
    </div>
  )
}
