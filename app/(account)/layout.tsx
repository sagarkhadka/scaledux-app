import React from 'react'

import AccountMenu from './AccountMenu'
import { Bounded } from '@/components/Bounded'

const AccountLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <AccountMenu />
      <Bounded className='!py-0'>{children}</Bounded>
    </>
  )
}

export default AccountLayout
