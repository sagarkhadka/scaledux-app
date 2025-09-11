import { create } from 'zustand'

export const useAuthStep = create<{
  step: number
  setStep: (step: number) => void
}>((set) => ({
  step: 1,
  setStep: (step: number) => set({ step })
}))

export const useAuthStore = create<{
  payload: {
    email: string
    password: string
  }
  setpayload: (payload: { email: string; password: string }) => void
}>((set) => ({
  payload: { email: '', password: '' },
  setpayload: (payload) => set({ payload })
}))
