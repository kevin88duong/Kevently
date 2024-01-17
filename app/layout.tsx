import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

const nunito_sans = Nunito_Sans({ 
  subsets: ['latin'],
  weight:["400", "500", "600", "700"],
  variable: "--font-nunito_sans",
 })

export const metadata: Metadata = {
  title: 'Kevently',
  description: 'Event management wbesite ',
  icons:{
    icon: "/assets/images/Logo_1.png"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={nunito_sans.variable}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
