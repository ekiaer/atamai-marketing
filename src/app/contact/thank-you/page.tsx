import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Message Sent | Atamai',
  description: 'Thank you for contacting us.',
}

export default function ContactThankYouPage() {
  return (
    <main className="min-h-screen bg-tint-light">
      <Navigation />

      {/* Thank You Message */}
      <section className="container mx-auto px-6 pt-32 pb-24 text-center">
        <div className="max-w-xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-mint-500/20 mb-8">
            <CheckCircle className="w-10 h-10 text-mint-500" />
          </div>

          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-forest-800 mb-6 tracking-tight">
            Message Sent!
          </h1>

          <p className="text-xl text-neutral-700 mb-8">
            Thank you for reaching out. We've received your message and will get back to you within 1-2 business days.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="btn-primary"
            >
              Back to Home
            </Link>
            <Link
              href="/updates"
              className="px-8 py-3 border border-neutral-200 rounded-lg text-forest-800 hover:bg-white transition-colors"
            >
              Read Our Updates
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
