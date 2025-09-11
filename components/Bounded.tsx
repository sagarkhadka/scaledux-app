import { ElementType, ReactNode, forwardRef } from 'react'

import { cn } from '@/lib/utils'

type BoundedProps = {
  as?: ElementType
  className?: string
  children: ReactNode
}

export const Bounded = forwardRef<HTMLElement, BoundedProps>(
  ({ as: Comp = 'section', className, children, ...restProps }, ref) => {
    return (
      <Comp ref={ref} className={cn('pt-6 sm:pt-20 md:pt-[120px]', className)} {...restProps}>
        <div className='container'>{children}</div>
      </Comp>
    )
  }
)

Bounded.displayName = 'Bounded'
