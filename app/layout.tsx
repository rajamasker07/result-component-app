import type { Metadata } from 'next'
import './globals.css'

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
      <body className="font-hanken">{children}</body>
    </html>
  )
}
