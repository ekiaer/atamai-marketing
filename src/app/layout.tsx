import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { organizationSchema, websiteSchema } from '@/lib/schemas'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.atamaiag.com'),
  title: {
    default: 'Atamai | Farm Compliance Made Simple',
    template: '%s | Atamai',
  },
  description:
    'Stop drowning in compliance paperwork. Atamai brings all your farm compliance into one place — NZFAP, freshwater plans, emissions reporting, and more.',
  keywords: [
    'farm compliance',
    'NZFAP',
    'NZFAP+',
    'NZFAP Plus',
    'New Zealand farming',
    'farm certification',
    'FEP',
    'Farm Environment Plan',
    'freshwater farm plan',
    'emissions reporting',
    'Atamai',
  ],
  authors: [{ name: 'Atamai', url: 'https://www.atamaiag.com' }],
  creator: 'Atamai',
  publisher: 'Atamai',
  openGraph: {
    title: 'Atamai | Farm Compliance Made Simple',
    description:
      'Stop drowning in compliance paperwork. Atamai brings all your farm compliance into one place for New Zealand farmers.',
    type: 'website',
    locale: 'en_NZ',
    siteName: 'Atamai',
    url: 'https://www.atamaiag.com',
    images: [
      {
        url: '/nz-farm-hero.jpg',
        width: 1200,
        height: 900,
        alt: 'New Zealand farmland — Atamai farm compliance platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atamai | Farm Compliance Made Simple',
    description:
      'Stop drowning in compliance paperwork. Atamai brings all your farm compliance into one place for New Zealand farmers.',
    images: ['/nz-farm-hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.atamaiag.com',
  },
  verification: {
    google: 'j8ULmIYNoSIf6tG_WB8bcc-2BPCmKrOzOMTfqApcffU',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        {children}
      </body>
    </html>
  )
}
