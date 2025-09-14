import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { LoaderCircle } from 'lucide-react'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold cursor-pointer transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 sm:shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-border-primary/40 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive rounded-lg w-fit isolate relative",
  {
    variants: {
      variant: {
        default:
          'bg-gradient-to-l disabled:from-[#F2F4F7] disabled:to-[#F2F4F7] disabled:text-[#98A2B3] from-brand-purple to-brand-blue bg-[length:150%_100%] bg-right hover:bg-left text-white shadow-xs hover:bg-primary/90 ring-[2px] ring-border-primary active:ring-[4px]',
        destructive:
          'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20',
        outline:
          'border bg-white shadow-xs hover:bg-secondary/5 border-border-primary ring-0 text-secondary active:ring-[4px] ring-border-primary/40',
        secondary: 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
        ghost:
          'hover:bg-neutral-50 p-1 w-fit shadow-none ring-0 text-[#475467] text-sm rounded-xs hover:text-primary',
        link: 'text-primary underline-offset-4 hover:underline',
        icon: 'bg-white rounded-full size-6 shrink-0 [&_svg]:size-6 hover:bg-neutral-100'
      },
      size: {
        default: 'h-11 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-7 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        md: 'h-9 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-11 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
        free: 'h-auto w-auto'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  isLoading = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    isLoading?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}>
      <div className={`contents duration-200 ${isLoading ? 'opacity-10' : 'opacity-100'}`}>
        {props.children}
      </div>
      {isLoading && (
        <div className='absolute top-1/2 left-1/2 z-10 -translate-1/2'>
          <LoaderCircle className='animate-spin' />
        </div>
      )}
    </Comp>
  )
}

export { Button, buttonVariants }
