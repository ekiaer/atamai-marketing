import Navigation from '@/components/Navigation'
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
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            action="/contact/thank-you/"
            className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-warm"
          >
            {/* Hidden field for Netlify */}
            <input type="hidden" name="form-name" value="contact" />

            {/* Honeypot field for spam protection */}
            <p className="hidden">
              <label>
                Don't fill this out: <input name="bot-field" />
              </label>
            </p>

            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-forest-800 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="input-field"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-forest-800 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="input-field"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-forest-800 font-medium mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="select-field"
                >
                  <option value="">Select a topic...</option>
                  <option value="general">General Inquiry</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="press">Press & Media</option>
                  <option value="support">Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-forest-800 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="input-field resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full"
              >
                Send Message
              </button>
            </div>
          </form>

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
