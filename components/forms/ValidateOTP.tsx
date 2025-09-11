import React from 'react'

import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import { Button } from '../ui/button'
import Countdown from '../Countdown'
import { useAuthStep } from '@/utils/store'

function ValidateOTP() {
  const { setStep } = useAuthStep()

  return (
    <div className='flex flex-col items-center gap-8'>
      <InputOTP placeholder='000000' maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <Button onClick={() => setStep(3)}>Verify</Button>
      <div className='flex'>
        <span>
          Didn’t receive OTP? <Countdown />{' '}
        </span>
      </div>
    </div>
  )
}

export default ValidateOTP
