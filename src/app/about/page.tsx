import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'About Atamai | Farmer-First Compliance Platform',
  description: 'Learn how Atamai is transforming farm compliance from a burden into a business asset.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-tint-light">
      <Navigation />

      {/* Hero */}
      <section className="container mx-auto px-6 pt-32 pb-20 text-center">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-forest-800 mb-6 tracking-tight">
          Helping Farmers Get Back to Farming
        </h1>
        <p className="text-xl md:text-2xl text-neutral-700 max-w-3xl mx-auto">
          Atamai is a farmer-first platform that transforms compliance from a burden into a business asset.
        </p>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-tint-light">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-forest-800 mb-8 text-center tracking-tight">
            The Compliance Burden is Real
          </h2>
          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
            <p>
              New Zealand farmers are spending between{' '}
              <span className="text-mint-500 font-semibold">4-6% of their farm revenue</span>{' '}
              on compliance alone. That's money that could be reinvested in the farm, in staff, or in the farmer's own wellbeing. Beyond the financial cost, farmers are dedicating upwards of{' '}
              <span className="text-mint-500 font-semibold">200 hours per year</span>{' '}
              to managing audits, certifications, and paperwork—time that should be spent on the land.
            </p>
            <p>
              The same data gets entered three to five times across different standards and requirements. NZFAP audits, freshwater farm plans, emissions reporting, processor requirements—each demands information that often already exists somewhere else. Farm information is scattered across apps, spreadsheets, paper notebooks, and consultant reports, making it nearly impossible to get a clear picture without significant effort.
            </p>
            <p>
              Meanwhile, regulatory requirements continue to increase while the administrative support available to farmers decreases. Something has to change.
            </p>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20 bg-tint-light">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-forest-800 mb-8 text-center tracking-tight">
            One Entry. Many Uses.
          </h2>
          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
            <p>
              Atamai brings all farm data into one place—the Farm Profile. Information captured once flows seamlessly to multiple certifications, audits, and reports. No more entering the same details into different systems. No more hunting through files to find what an auditor needs.
            </p>
            <p>
              Rather than replacing the tools farmers already use, Atamai integrates with existing platforms like FarmIQ and Overseer. Forms are pre-populated where possible, and compliance status is tracked automatically, giving farmers visibility into where they stand without the manual overhead.
            </p>
            <div className="bg-tint-light border border-mint-500/30 rounded-lg p-6 my-8">
              <p className="text-forest-800 font-medium text-center">
                Farmer-controlled from the ground up. You own your data. You authorize every use.
              </p>
            </div>
            <p>
              Data ownership isn't a feature—it's the foundation. Farmers maintain explicit control over their information, with clear permissions required for every use. This isn't just about privacy; it's about ensuring farmers can benefit from the value their data creates.
            </p>
          </div>
        </div>
      </section>

      {/* Traction & Validation */}
      <section className="py-20 bg-tint-light">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-forest-800 mb-8 text-center tracking-tight">
            Grounded in Real Farm Needs
          </h2>
          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
            <p>
              Atamai isn't being built in a boardroom. The platform has been shaped by{' '}
              <span className="text-mint-500 font-semibold">75+ farmer interviews</span>{' '}
              and on-farm visits across New Zealand, from high country stations to dairy farms. Every feature reflects what farmers have told us they actually need, not what we assumed they might want.
            </p>
            <p>
              The concept has been validated through multiple iterations of research and ongoing conversations with processors, cooperatives, and rural lenders who share our vision for reducing farmer burden while improving data quality.
            </p>
            <p>
              Our governance framework is being developed in partnership with AGMARDT, ensuring the platform serves farmer interests first. Through our broader team, we're connected to the agricultural technology ecosystem and have relationships at both ministerial and civil service levels.
            </p>
          </div>
        </div>
      </section>

      {/* The Vision */}
      <section className="py-20 bg-tint-light">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-forest-800 mb-8 text-center tracking-tight">
            From Compliance to Competitive Advantage
          </h2>
          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
            <p>
              In the near term, Atamai's goal is straightforward: reduce the administrative burden and take pressure off farmers. Less time on paperwork means more time for the work that matters—and for life outside the farm gate.
            </p>
            <p>
              Looking further ahead, verified sustainability credentials become more than a cost of doing business. They become a pathway to premium market access. Consumers and supply chains increasingly want proof of sustainable practices, and farmers who can provide that proof efficiently will capture more value.
            </p>
            <p>
              In the long term, clean and well-structured farm data becomes a genuine business asset. The information farmers are already collecting—when properly organized and controlled—creates opportunities that are only beginning to emerge.
            </p>
            <p>
              New Zealand's complex regulatory environment makes it the ideal proving ground. If a platform can work here, with our layered requirements and high standards, it can work anywhere. What we build and prove in New Zealand is designed from day one to scale globally.
            </p>
            <div className="text-center mt-12">
              <p className="font-heading text-xl text-forest-800 font-bold">
                Ultimately, we want to help farmers get back to farming.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="py-20 bg-tint-light">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-forest-800 mb-8 tracking-tight">
            Built by People Who Know the Problem
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed max-w-3xl mx-auto mb-10">
            Atamai is led by Katie Gillingham and Erik Kiaer. Katie brings a decade of agribusiness and compliance experience from her South Island high country farming background. Erik brings deep expertise in building and scaling complex data platforms. Together, they combine agricultural authenticity with technical capability.
          </p>
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-mint-500 hover:text-mint-600 transition-colors duration-150 text-lg font-medium"
          >
            Meet the Team
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Learn More */}
      <section className="py-20 bg-tint-light">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-forest-800 mb-10 tracking-tight">
            Want to Learn More?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-8 border border-neutral-200 shadow-warm">
              <p className="text-neutral-700 mb-6">
                If you're a farmer interested in early access, join our waitlist.
              </p>
              <Link
                href="/#waitlist"
                className="btn-accent inline-block"
              >
                Join Waitlist
              </Link>
            </div>
            <div className="bg-white rounded-lg p-8 border border-neutral-200 shadow-warm">
              <p className="text-neutral-700 mb-6">
                For partnership inquiries or to learn more about Atamai, get in touch.
              </p>
              <Link
                href="/contact"
                className="btn-primary inline-block"
              >
                Contact Us
              </Link>
            </div>
          </div>
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
