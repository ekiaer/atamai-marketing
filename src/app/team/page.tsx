import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'

const team = [
  {
    name: 'Erik Kiaer',
    image: '/ek.png',
    bio: [
      'Erik Kiaer has driven billion-dollar outcomes by launching new ventures and scaling existing businesses across healthcare, professional services, automotive, and agricultural industries.',
      'A sought-after innovation and growth strategist, he shares insights through keynote speeches and has been featured in the Wall Street Journal, Ad Age, Fast Company, and numerous books on design and innovation.',
      "Erik's mission for Atamai: Help farmers reap the rewards of their data crop.",
    ],
  },
  {
    name: 'Katie Gillingham',
    image: '/kg.png',
    bio: [
      'Katie Gillingham works at the intersection of agriculture and technology, with a passion for wool and a deep connection to farming communities. She began her career in agribusiness with New Zealand Merino, later moving into RMA and rural auditing with the Department of Conservation.',
      'Retraining in software development, she returned to the wool sector at WoolWorks, where she now contributes to the farmer-first Atamai project.',
      'Katie is driven by a mission to reduce on-farm admin burdens through practical, sustainable digital solutions. Her work reflects a belief that agriculture should align with nature—empowering farmers, not overwhelming them.',
    ],
  },
]

export const metadata = {
  title: 'Our Team | Atamai',
  description: 'Meet the team behind Atamai - making farm compliance simple for New Zealand farmers.',
}

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="container mx-auto px-6 pt-32 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Meet Our Team
        </h1>
        <p className="text-xl text-white/70 max-w-2xl mx-auto">
          We're passionate about empowering New Zealand farmers with technology that simplifies compliance and lets them focus on what they do best.
        </p>
      </section>

      {/* Team Members */}
      <section className="container mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="flex flex-col items-center text-center mb-6">
                <div className="relative w-40 h-40 mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover border-4 border-green-500/30"
                  />
                </div>
                <h2 className="text-2xl font-bold text-white">{member.name}</h2>
              </div>
              <div className="space-y-4">
                {member.bio.map((paragraph, index) => (
                  <p key={index} className="text-white/70 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 pb-24 text-center">
        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl p-12 border border-green-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Simplify Your Farm Compliance?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Join the waitlist and be among the first to experience Atamai.
          </p>
          <Link
            href="/#waitlist"
            className="btn-primary inline-block"
          >
            Join the Waitlist
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="container mx-auto px-6 text-center text-white/50">
          <p>&copy; {new Date().getFullYear()} Atamai. Built for New Zealand farmers.</p>
        </div>
      </footer>
    </main>
  )
}
