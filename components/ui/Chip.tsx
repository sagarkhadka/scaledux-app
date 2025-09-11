import { cn } from '@/lib/utils'
import React, { FC } from 'react'

const Chip: FC<{ className?: string; label: string }> = ({ className, label }) => {
  return (
    <>
      <div
        className={cn(
          'rounded-full border border-neutral-300 px-2 py-0.5',
          'text-sm font-medium text-[#363F72]',
          className
        )}>
        {label}
      </div>
    </>
  )
}

export default Chip
