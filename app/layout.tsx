import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import AppProvider from '@/provider'
import UserHeader from '@/components/header/UserHeader'

export const metadata: Metadata = {
  title: 'Scaledux',
  description: 'scaledux'
}

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased`}>
        <AppProvider>
          <UserHeader />
          {children}
        </AppProvider>
      </body>
    </html>
  )
}
