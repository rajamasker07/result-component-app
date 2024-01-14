import type { Metadata } from 'next'
import './globals.css'
import { hanken } from './ui/fonts'

export const metadata: Metadata = {
  title: 'Result Component App',
  description: 'By Frontend Mentor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={hanken.className}>{children}</body>
    </html>
  )
}
