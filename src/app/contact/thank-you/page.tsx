import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Message Sent | Atamai',
  description: 'Thank you for contacting us.',
}

export default function ContactThankYouPage() {
  return (
    <main className="min-h-screen bg-atamai-darker">
      <Navigation />

      {/* Thank You Message */}
      <section className="container mx-auto px-6 pt-32 pb-24 text-center">
        <div className="max-w-xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 mb-8">
            <CheckCircle className="w-10 h-10 text-green-400" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Message Sent!
          </h1>

          <p className="text-xl text-white/70 mb-8">
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
              className="px-8 py-3 border border-white/20 rounded-lg text-white hover:bg-white/10 transition-colors"
            >
              Read Our Updates
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 mt-auto">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <Image
                src="/atamai-light.png"
                alt="Atamai"
                width={100}
                height={32}
                className="h-8 w-auto opacity-60"
              />
              <span className="text-white/40 text-sm">
                Farm compliance, simplified.
              </span>
            </div>
            <div className="text-white/40 text-sm">
              &copy; {new Date().getFullYear()} Atamai. Built for New Zealand farmers.
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
