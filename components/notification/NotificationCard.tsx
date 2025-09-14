import { FC } from 'react'
import { Bell } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '../ui/button'

const NotificationCard: FC<{
  title: string
  description: string
  isRead: boolean
  createdAt: string
  isProposal?: boolean
  isMilestone?: boolean
}> = ({ title, description, isRead, createdAt, isProposal, isMilestone }) => {
  return (
    <>
      <div
        className={cn(
          'border-border-secondary flex gap-3 border-b py-4 pr-[18px] pl-[22px]',
          !isRead && 'bg-purple-50'
        )}>
        <div
          className={cn(
            'relative h-fit shrink-0 rounded-full border border-black/10 p-2.5 shadow-sm',
            isRead ? 'bg-[#F2F4F7]' : 'bg-white'
          )}>
          <div
            className={`bg-brand-purple absolute top-1/2 -left-3.5 size-2 -translate-y-1/2 rounded-full ${isRead && 'hidden'}`}
          />
          <Bell size={28} />
        </div>
        <div className='flex-1 space-y-1'>
          <div className='flex justify-between'>
            <h6 className='text-secondary-hover text-sm font-medium'>{title}</h6>
            <span className='text-secondary text-xs'>{createdAt}</span>
          </div>
          <p className='text-secondary text-sm'>{description}</p>
          {isProposal && (
            <Button size={'sm'} variant={'outline'} className='w-fit'>
              View Proposal
            </Button>
          )}
          {isMilestone && (
            <div className='flex items-center gap-3'>
              <Button size={'sm'} variant={'outline'} className='w-fit'>
                Reject
              </Button>
              <Button size={'sm'} className='w-fit'>
                Accept
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default NotificationCard
