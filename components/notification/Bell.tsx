import React from 'react'
import { Bell, ChevronRight, Settings } from 'lucide-react'

import { Button } from '../ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import EmptyNotification from './EmptyNotification'
import NotificationCard from './NotificationCard'
import { notificationData } from '@/lib/constant'
import { ScrollArea } from '../ui/scroll-area'
import Link from 'next/link'

const NotificationBell = () => {
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant={'ghost'} className='size-10 rounded-sm hover:bg-neutral-100'>
            <Bell className='size-5' />
            <div className='absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500' />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-[356px] rounded-xl p-0'>
          <div className='border-border-secondary flex items-center justify-between gap-3 border-b px-4 py-4'>
            <div className='flex items-center gap-2'>
              <Bell className='size-4' />
              <h6 className='text-sm leading-5 font-medium'>Notifications</h6>
            </div>
            <Button className='group size-9' variant={'ghost'}>
              <Settings className='size-5 duration-200 group-hover:rotate-90' />
            </Button>
          </div>
          <ScrollArea className='h-[555px] w-full'>
            {notificationData.length ? (
              notificationData.map((item) => (
                <NotificationCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  isRead={item.isRead}
                  createdAt={item.createdAt}
                  isProposal={item.isProposal}
                  isMilestone={item.isMilestone}
                />
              ))
            ) : (
              <EmptyNotification />
              // <div className='flex min-h-[569px] items-center justify-center p-4'>
              // </div>
            )}
          </ScrollArea>
          <div className='flex items-center justify-between p-5'>
            <Button variant={'ghost'} size='md'>
              Mark all as read
            </Button>
            <Link href={'/'}>
              <Button variant={'ghost'} size='md'>
                <span>View all</span>
                <ChevronRight />
              </Button>
            </Link>
          </div>
        </PopoverContent>
      </Popover>
    </>
  )
}

export default NotificationBell
