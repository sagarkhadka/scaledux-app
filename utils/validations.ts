import { z } from 'zod'
import { RolesTypes } from '@/lib/scaletype'
import { userRoles } from '@/lib/constant/api'

const emailPhoneValidation = z.string().superRefine((val, ctx) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const phoneRegex = /^\d{10}$/

  if (!emailRegex.test(val) && !phoneRegex.test(val)) {
    ctx.addIssue({
      code: 'custom',
      message: 'Please enter a valid email or phone number'
    })
  }
})

export const passwordValidation = z
  .string({ message: 'Password is required' })
  .min(8, 'Password must be at least 8 characters')
  .regex(/[0-9]/, 'Password must contain at least one number (0-9)')
  .regex(/[a-z]/, 'Password must contain at least one lower case character (a-z)')
  .regex(/[A-Z]/, 'Password must contain at least one upper case character (A-Z)')
  .regex(/[^a-zA-Z0-9]/, 'Password must contain at least one special character (@$#^?[])')

export const signupValidation = z.object({
  email: emailPhoneValidation,
  terms: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms'
  }),
  notification: z.boolean().optional()
})

export const loginValidation = z.object({
  email: emailPhoneValidation
})

export const newPasswordValidation = z
  .object({
    password: passwordValidation,
    confirmPassword: z.string({ message: 'Confirm password is required' }).min(1, {
      message: 'Confirm password is required'
    })
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
  })

export const onboardingSchema = z.object({
  role: z.enum(userRoles),
  profileDetail: z.string().optional()
})
export type OnboardingSchema = z.infer<typeof onboardingSchema>
