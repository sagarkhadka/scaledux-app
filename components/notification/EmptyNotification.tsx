import React from 'react'
import { BellRing } from 'lucide-react'

const EmptyNotification = () => {
  return (
    <>
      <div className='flex h-full flex-col items-center justify-center gap-5'>
        <div className='radial-shine circular-line'>
          <BellRing className='size-10 text-[#344054]' strokeWidth={1.5} />
        </div>
        <span className='text-tertiary-600 text-center text-sm'>No notifications yet</span>
      </div>
    </>
  )
}

export default EmptyNotification
