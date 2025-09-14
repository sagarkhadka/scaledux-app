'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Bounded } from '@/components/Bounded'
import { cn } from '@/lib/utils'
import { accountMenuList } from '@/lib/constant'
import { LinkHref } from '@/lib/scaletype'

const AccountMenu = () => {
  return (
    <>
      <Bounded className='!py-[22px]'>
        <div className='flex items-center gap-2'>
          {accountMenuList.map((item) => (
            <AccountMenuItem key={item.title} href={item.href} title={item.title} />
          ))}
        </div>
      </Bounded>
    </>
  )
}

function AccountMenuItem({ href, title }: { href: LinkHref; title: string }) {
  const pathname = usePathname()
  return (
    <>
      <Link
        href={href}
        className={cn(
          'text-secondary inline-flex items-center gap-1 rounded-sm bg-white px-3 py-2 text-sm leading-5 duration-200',
          pathname === href ? 'text-brand-purple bg-purple-50' : 'hover:bg-neutral-100'
        )}>
        {title}
      </Link>
    </>
  )
}

export default AccountMenu
