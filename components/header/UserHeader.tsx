'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { userHeaderItems } from '@/lib/constant'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu'
import { Button } from '../ui/button'
import { MessageSquare } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import NotificationBell from '../notification/Bell'

const UserHeader = () => {
  const pathname = usePathname()
  const hideLayout = ['/login', '/signup'].includes(pathname)

  return (
    <>
      {!hideLayout ? (
        <div className='border-border-secondary header border-b py-4'>
          <div className='container'>
            <div className='flex items-center justify-between gap-4'>
              <div className='flex items-center gap-8'>
                <Link href='/'>
                  <div className='relative h-[24px] w-[142px] max-md:mx-auto'>
                    <Image src='/primary-logo.svg' alt='Scaledux' fill className='object-contain' />
                  </div>
                </Link>
                <NavigationMenu className='max-sm:hidden'>
                  <NavigationMenuList>
                    {userHeaderItems.map((item) => (
                      <NavigationMenuItem key={item.title}>
                        {item.children?.length ? (
                          <>
                            <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                            <NavigationMenuContent>
                              {item.children.map((child, index) => (
                                <NavigationMenuLink asChild key={`${child.title}-${index}`}>
                                  <Link href={child.href}>{child.title}</Link>
                                </NavigationMenuLink>
                              ))}
                            </NavigationMenuContent>
                          </>
                        ) : (
                          <NavigationMenuLink asChild>
                            <Link href='/'>{item.title}</Link>
                          </NavigationMenuLink>
                        )}
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>

              <div className='flex items-center gap-4'>
                <div className='flex items-center gap-1'>
                  <Button variant={'ghost'} className='size-10 rounded-sm hover:bg-neutral-100'>
                    <MessageSquare className='size-5' />
                  </Button>
                  <NotificationBell />
                </div>
                <Link href={'/my-profile'}>
                  <Avatar>
                    <AvatarImage src='https://github.com/shadcn.png' />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default UserHeader
