'use client'

import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

import UserSelection from '@/components/onboarding/ServiceProviderOnboard'
import ProfileDetail from '@/components/onboarding/ProfileDetail'

function OnBoardingContent() {
  const router = useSearchParams()
  const role = router.get('role')

  return (
    <div className='min-h-[calc(100vh-73px)]'>{!role ? <UserSelection /> : <ProfileDetail />}</div>
  )
}

const OnBoardingPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OnBoardingContent />
    </Suspense>
  )
}

export default OnBoardingPage
