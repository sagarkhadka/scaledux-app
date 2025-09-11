import React from 'react'
import Image from 'next/image'

import { Button } from '../ui/button'

const ThirdPartyAuth = () => {
  return (
    <div className='flex flex-col gap-8 md:gap-9'>
      <div className='flex gap-4 sm:flex-col sm:gap-6'>
        <Button variant={'outline'} className='gap-3'>
          <div className='relative size-6'>
            <Image src={'/google-icon.svg'} alt='Google' fill className='object-contain' />
          </div>
          <span>
            <span className='hidden md:inline'>Sign up with</span> Google
          </span>
        </Button>
        <Button variant={'outline'} className='gap-3'>
          <div className='relative size-6'>
            <Image src={'/linkedin-icon.svg'} alt='Apple' fill className='object-contain' />
          </div>
          <span>
            <span className='hidden md:inline'>Sign up with</span> Linkedin
          </span>
        </Button>
      </div>
    </div>
  )
}

export default ThirdPartyAuth
