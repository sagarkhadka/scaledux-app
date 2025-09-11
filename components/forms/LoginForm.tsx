'use client'

import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { loginValidation, passwordValidation } from '@/utils/validations'
import { useAuthStep, useAuthStore } from '@/utils/store'
import { redirect } from 'next/navigation'

type FormData = z.infer<typeof loginValidation>

export default function LoginForm() {
  const { setStep } = useAuthStep()
  const { payload, setpayload } = useAuthStore()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(loginValidation),
    defaultValues: {
      email: ''
    }
  })

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data)
    setpayload({ ...payload, email: data?.email })
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

        <Button type='submit' className='mt-8'>
          Login
        </Button>
      </form>
    </>
  )
}

export const LoginPassword = () => {
  const { setStep } = useAuthStep()
  const { payload, setpayload } = useAuthStore()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(z.object({ password: passwordValidation })),
    defaultValues: {
      password: ''
    }
  })

  const onSubmit: SubmitHandler<{ password: string }> = (data) => {
    console.log(data)
    setpayload({ ...payload, password: data?.password })
    setStep(1)
    redirect('/')
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label='Password'
          type='password'
          placeholder='Enter your password'
          {...register('password')}
          error={errors.password?.message}
        />

        <Button type='submit' className='mt-8'>
          Login
        </Button>
      </form>
    </>
  )
}
