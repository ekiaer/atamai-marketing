import Image from 'next/image'
import { CheckCircle, ArrowLeft } from 'lucide-react'

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-tint-light flex items-center justify-center">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-forest-800 border-b border-forest-700">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Image
              src="/atamai-light.png"
              alt="Atamai"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>
        </div>
      </nav>

      <div className="max-w-xl mx-auto px-6 text-center">
        <div className="w-20 h-20 bg-mint-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="w-10 h-10 text-mint-500" />
        </div>

        <h1 className="font-heading text-3xl md:text-4xl font-extrabold text-forest-800 mb-4 tracking-tight">
          You're on the List!
        </h1>

        <p className="text-xl text-neutral-700 mb-8">
          Thanks for joining the Atamai waitlist. We'll be in touch soon with early access details.
        </p>

        <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-warm mb-8">
          <h2 className="font-heading text-lg font-bold text-forest-800 mb-3">What happens next?</h2>
          <ul className="text-left text-neutral-700 space-y-3">
            <li className="flex gap-3">
              <span className="text-mint-500 font-semibold">1.</span>
              <span>You'll receive a confirmation email shortly</span>
            </li>
            <li className="flex gap-3">
              <span className="text-mint-500 font-semibold">2.</span>
              <span>We'll reach out when early access opens</span>
            </li>
            <li className="flex gap-3">
              <span className="text-mint-500 font-semibold">3.</span>
              <span>Early members get priority onboarding and input on features</span>
            </li>
          </ul>
        </div>

        <a
          href="/"
          className="inline-flex items-center gap-2 text-mint-500 hover:text-mint-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </a>
      </div>
    </main>
  )
}
