'use client'

import React from 'react'
import Link from 'next/link'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Input } from '../ui/input'
import { Checkbox } from '../ui/checkbox'
import { Label } from '../ui/label'
import { Button } from '../ui/button'
import { signupValidation } from '@/utils/validations'
import { useAuthStep } from '@/utils/store'

type FormData = z.infer<typeof signupValidation>

export default function SignupForm() {
  const { setStep } = useAuthStep()

  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm<FormData>({
    resolver: zodResolver(signupValidation),
    defaultValues: {
      email: '',
      terms: false,
      notification: false
    }
  })

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data)
    setStep(2)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder='Enter your email or phone number'
          {...register('email')}
          error={errors.email?.message}
        />
        <div className='mt-8 mb-3 flex gap-2 sm:flex-col'>
          <Controller
            name='notification'
            control={control}
            render={({ field }) => (
              <div className='flex items-center gap-2'>
                <Checkbox id='terms' checked={field.value} onCheckedChange={field.onChange} />
                <Label htmlFor='terms'>I agree to the terms</Label>
              </div>
            )}
          />
          <Controller
            name='terms'
            control={control}
            render={({ field }) => (
              <div className='flex items-center gap-3'>
                <Checkbox
                  id='privacy'
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  error={errors.terms?.message}
                />
                <Label htmlFor='privacy'>
                  By joining, you agree to our{' '}
                  <Link href='/' className='text-brand-purple contents hover:underline'>
                    Terms
                  </Link>{' '}
                  &{' '}
                  <Link href='/' className='text-brand-purple contents hover:underline'>
                    Privacy policy
                  </Link>
                </Label>
              </div>
            )}
          />
        </div>

        <Button type='submit'>Create Account</Button>
      </form>
    </>
  )
}
