'use client'
import React, { Children, ReactNode } from 'react'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

function CustomQueryClient({children}:{children:ReactNode}) {
  const queryClient=new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default CustomQueryClient