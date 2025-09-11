'use client'

import React from 'react'
import Link from 'next/link'

import ThirdPartyAuth from '@/components/auth/ThirdPartyAuth'
import LoginForm, { LoginPassword } from '@/components/forms/LoginForm'
import { useAuthStep, useAuthStore } from '@/utils/store'

export default function LoginPage() {
  const { step } = useAuthStep()
  const { payload } = useAuthStore()

  return (
    <>
      <div className='w-full max-w-[360px] space-y-8 max-sm:flex-1'>
        {step === 1 && (
          <>
            <div className='flex flex-col gap-2'>
              <h3 className='display-sm text-primary text-center font-semibold'>Welcome back</h3>
              <p className='text-tertiary text-center'>Log in and turn plans into progress</p>
            </div>
            <div className='flex flex-col gap-9'>
              <LoginForm />
              <div className='flex items-center gap-2'>
                <span className='bg-border-primary h-px flex-1' />
                <span className='text-tertiary'>OR</span>
                <span className='bg-border-primary h-px flex-1' />
              </div>
              <ThirdPartyAuth />
              <span className='text-tertiary text-center'>
                New to ScaleDux? <Link href='/signup'>Create account</Link>
              </span>
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <div className='flex flex-col gap-2'>
              <h3 className='display-sm text-primary text-center font-semibold'>Enter password</h3>
              <p className='text-tertiary text-center'>{payload?.email}</p>
            </div>
            <div className='flex flex-col gap-9'>
              <LoginPassword />
            </div>
          </>
        )}
      </div>
    </>
  )
}
