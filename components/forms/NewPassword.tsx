import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CircleCheck } from 'lucide-react'
import { redirect, RedirectType } from 'next/navigation'

import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { SubmitHandler, useForm } from 'react-hook-form'
import { newPasswordValidation } from '@/utils/validations'
import { useAuthStep } from '@/utils/store'

type FormData = z.infer<typeof newPasswordValidation>

const NewPassword = () => {
  const { setStep } = useAuthStep()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(newPasswordValidation),
    defaultValues: {
      password: '',
      confirmPassword: ''
    }
  })
  const watchPass = watch('password')

  const hasMinLength = watchPass.length >= 8
  const hasNumber = /\d/.test(watchPass)
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(watchPass)
  const hasUpperCase = /[A-Z]/.test(watchPass)
  const hasLowerCase = /[a-z]/.test(watchPass)

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    console.log(data)
    setStep(1)
    redirect('/login', RedirectType.push)
  }

  return (
    <form className='flex flex-col gap-6' onSubmit={handleSubmit(onSubmit)}>
      <Input
        label='Password'
        type='password'
        placeholder='Choose a password'
        {...register('password')}
        error={errors.password?.message}
      />
      <Input
        label='Confirm Password'
        type='password'
        placeholder='Confirm password'
        {...register('confirmPassword')}
        error={errors.confirmPassword?.message}
      />
      <div className='rounded-lg bg-neutral-100 p-5'>
        <p className='text-secondary text-sm font-medium'>
          Create a password that contains at least -
        </p>
        <ul className='mt-4 space-y-3 [&_li]:flex [&_li]:items-center [&_li]:gap-2'>
          <li>
            <CircleCheck
              className={cn('size-5 stroke-[#c7d1db]', hasMinLength && 'stroke-green-500')}
            />
            8 characters
          </li>
          <li>
            <CircleCheck
              className={cn('size-5 stroke-[#c7d1db]', hasNumber && 'stroke-green-500')}
            />
            One number (0-9)
          </li>
          <li>
            <CircleCheck
              className={cn('size-5 stroke-[#c7d1db]', hasLowerCase && 'stroke-green-500')}
            />
            One lower case character (a-z)
          </li>
          <li>
            <CircleCheck
              className={cn('size-5 stroke-[#c7d1db]', hasUpperCase && 'stroke-green-500')}
            />
            One upper case character (A-Z)
          </li>
          <li>
            <CircleCheck
              className={cn('size-5 stroke-[#c7d1db]', hasSpecialChar && 'stroke-green-500')}
            />
            One special character (@$#^?[])
          </li>
        </ul>
      </div>
      <Button>Continue</Button>
    </form>
  )
}

export default NewPassword
