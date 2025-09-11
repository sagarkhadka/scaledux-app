import React, { ReactNode } from 'react'
import CustomQueryClient from './CustomQueryClient'

export default function AppProvider({children}:{children:ReactNode}) {
  return (
    <CustomQueryClient>
        {children}
    </CustomQueryClient>
  )
}
