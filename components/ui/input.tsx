'use client'

import { useState, ComponentProps } from 'react'

import { cn } from '@/lib/utils'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Eye, EyeOff, Info, SearchIcon } from 'lucide-react'
import { Label } from './label'
import { Button } from './button'

function Input({
  className,
  type,
  error,
  label,
  disabled,
  isSearch = false,
  ...props
}: ComponentProps<'input'> & {
  error?: string
  label?: string
  isSearch?: boolean
  disabled?: boolean
}) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
      <div className='flex flex-col gap-1.5'>
        {label && (
          <Label htmlFor={props.id} className='font-medium'>
            {label}
          </Label>
        )}
        <div className='relative'>
          {isSearch && (
            <div className='absolute top-1/2 left-3.5 flex -translate-y-1/2'>
              <SearchIcon size={18} color='#667085' />
            </div>
          )}
          <input
            type={showPassword ? 'text' : type}
            data-slot='input'
            className={cn(
              'placeholder:text-placeholder border-border-primary flex h-11 w-full min-w-0 rounded-md border bg-transparent px-3.5 py-2.5 text-base leading-6 shadow-xs transition-[color,box-shadow] outline-none',
              'focus-visible:border-purple-300 focus-visible:ring-[4px] focus-visible:ring-[#DFD7FD]',
              type === 'file' &&
                'file:text-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium',
              error && 'border-border-error',
              disabled &&
                'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
              isSearch && 'pl-10',
              className
            )}
            {...props}
          />
          {type === 'password' ? (
            <Button
              variant='ghost'
              size={'free'}
              type='button'
              className={cn(
                'absolute top-1/2 right-3.5 flex -translate-y-1/2',
                error && 'right-11'
              )}
              onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <EyeOff /> : <Eye />}
            </Button>
          ) : null}
          {error ? (
            <div className='absolute top-1/2 right-3.5 flex -translate-y-1/2'>
              <Popover>
                <PopoverTrigger>
                  <Info className='stroke-error' />
                </PopoverTrigger>
                <PopoverContent
                  side='top'
                  sideOffset={14}
                  className='bg-dark-solid before:bg-dark-solid relative text-center text-white before:absolute before:-bottom-2 before:left-1/2 before:!hidden before:size-4 before:-translate-x-1/2 before:rotate-45'>
                  {error}
                </PopoverContent>
              </Popover>
            </div>
          ) : null}
        </div>
      </div>
    </>
  )
}

export { Input }
