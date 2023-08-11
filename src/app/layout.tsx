import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Troop 55 Glen Ridge',
  description: 'Scout Troop 855 Glen Ridge, NJ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full bg-gray-100">
      <body className="h-full">{children}</body>
    </html>
  )
}
