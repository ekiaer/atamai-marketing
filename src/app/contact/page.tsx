import Navigation from '@/components/Navigation'
import HubSpotForm from '@/components/HubSpotForm'
import { Mail } from 'lucide-react'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with the Atamai team — partnerships, press, or general inquiries about farm compliance technology.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Us | Atamai',
    description:
      'Get in touch with the Atamai team — partnerships, press, or general inquiries.',
    url: '/contact',
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-tint-light">
      <Navigation />

      {/* Hero */}
      <section className="container mx-auto px-6 pt-32 pb-16 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-mint-500/20 mb-6">
          <Mail className="w-8 h-8 text-mint-500" />
        </div>
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-forest-800 mb-6 tracking-tight">
          Get in Touch
        </h1>
        <p className="text-xl text-neutral-700 max-w-2xl mx-auto">
          Have a question about Atamai? Want to learn more about how we can help simplify your farm compliance? We'd love to hear from you.
        </p>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto px-6 pb-24">
        <div className="max-w-xl mx-auto">
          {/* HubSpot embedded form (Netlify form retired at Phase 2 go-live) */}
          <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-warm">
            <HubSpotForm formId="ad2a00fd-e6ae-4d63-8976-45d6b868de95" />
          </div>

          <p className="text-center text-neutral-500 text-sm mt-6">
            We typically respond within 1-2 business days.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest-800 border-t border-forest-700 py-8">
        <div className="container mx-auto px-6 text-center text-cream-100/50">
          <p>&copy; {new Date().getFullYear()} Atamai. Built for New Zealand farmers.</p>
        </div>
      </footer>
    </main>
  )
}
