import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Atamai | Farm Compliance Made Simple',
  description: 'Stop drowning in compliance paperwork. Atamai automates farm certification for New Zealand farmers - NZFAP, NZFAP+, and more.',
  keywords: 'farm compliance, NZFAP, NZFAP+, New Zealand farming, farm certification, FEP, Farm Environment Plan',
  openGraph: {
    title: 'Atamai | Farm Compliance Made Simple',
    description: 'Stop drowning in compliance paperwork. Atamai automates farm certification for New Zealand farmers.',
    type: 'website',
    locale: 'en_NZ',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
