import React from 'react'
import CircularProgress from '../ui/CircularProgress'
import { Button } from '../ui/button'
import { ChevronDown } from 'lucide-react'

const CompleteProfile = () => {
  return (
    <>
      <div className='from-brand-purple/5 to-brand-blue/20 ring-brand-purple-light/30 flex items-center gap-4 rounded-lg bg-gradient-to-r p-3 ring-2'>
        <div className='flex items-center gap-4'>
          <CircularProgress percentage={40} />
          <div className='space-y-0.5'>
            <h2 className='text-secondary-hover text-base font-semibold'>Complete your profile</h2>
            <p className='text-secondary-hover'>
              Having a complete verified account will increase the chances of getting projects.
            </p>
          </div>
        </div>
        <Button variant={'icon'} size='icon'>
          <ChevronDown className='text-purple-500' />
        </Button>
      </div>
    </>
  )
}

export default CompleteProfile
