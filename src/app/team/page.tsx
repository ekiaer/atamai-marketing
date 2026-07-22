import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import JsonLd from '@/components/JsonLd'
import Footer from '@/components/Footer'
import { personSchema } from '@/lib/schemas'

const team = [
  {
    name: 'Erik Kiaer',
    role: 'Co-founder',
    image: '/ek.png',
    bio: [
      'Erik Kiaer has driven billion-dollar outcomes by launching new ventures and scaling existing businesses across healthcare, professional services, automotive, and agricultural industries.',
      'A sought-after innovation and growth strategist, he shares insights through keynote speeches and has been featured in the Wall Street Journal, Ad Age, Fast Company, and numerous books on design and innovation.',
      "Erik's mission for Atamai: Help farmers reap the rewards of their data crop.",
    ],
  },
  {
    name: 'Katie Gillingham',
    role: 'Co-founder',
    image: '/kg.png',
    bio: [
      'Katie Gillingham works at the intersection of agriculture and technology, with a passion for wool and a deep connection to farming communities. She began her career in agribusiness with New Zealand Merino, later moving into RMA and rural auditing with the Department of Conservation.',
      'Retraining in software development, she returned to the wool sector at WoolWorks, where she now contributes to the farmer-first Atamai project.',
      'Katie is driven by a mission to reduce on-farm admin burdens through practical, sustainable digital solutions. Her work reflects a belief that agriculture should align with nature—empowering farmers, not overwhelming them.',
    ],
  },
  {
    name: 'Henry Ferrier',
    role: 'Co-founder',
    image: '/hf.jpg',
    bio: [
      'Henry Ferrier oversees the Ferrier family technology investments, including Atamai. With a background in finance and accounting, he adds investment acumen to the team and will support how current and future investments in Atamai can drive long-term success for all stakeholders.',
    ],
  },
]

const advisors = [
  {
    name: 'John Rodwell',
    image: '/jr.jpg',
    bio: 'John Rodwell possesses extensive experience in the primary sector, encompassing both corporate finance and governance, as well as national science work that supports the sector. With a background in international business development and a commitment to initiatives aimed at industry improvement, John serves as a Co-Chair of the Te Taiao Steering Group and previously contributed to the Minister of Agriculture\'s Primary Sector Council.',
  },
  {
    name: 'Rob Hewett',
    image: '/rh.jpg',
    bio: 'Rob Hewett is the Co-Chair of Silver Fern Farms Limited, Chair of Farmlands Co-operative Society Limited, New Zealand Woolscours Limited (Woolworks), Fern Energy Limited, Hilton Haulage Limited and Pioneer Energy Limited. Rob farms 10,000 sheep and beef stock units on a carbon positive breeding/finishing and forestry farm in South Otago. He won the Deloitte Top 200 Chair of the Year award in 2023.',
  },
]

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Team',
  description:
    'Meet the co-founders and advisors behind Atamai — the farmer-first compliance platform for New Zealand.',
  alternates: { canonical: '/team' },
  openGraph: {
    title: 'Our Team | Atamai',
    description:
      'Meet the co-founders and advisors behind Atamai — the farmer-first compliance platform for New Zealand.',
    url: '/team',
  },
}

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-tint-light">
      <Navigation />
      {team.map((member) => (
        <JsonLd
          key={member.name}
          data={personSchema({
            name: member.name,
            jobTitle: member.role,
            description: member.bio[0],
            image: member.image,
          })}
        />
      ))}

      {/* Hero */}
      <section className="container mx-auto px-6 pt-32 pb-16 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-forest-800 mb-6 tracking-tight">
          Meet Our Team
        </h1>
        <p className="text-xl text-neutral-700 max-w-2xl mx-auto">
          We're passionate about empowering New Zealand farmers with technology that simplifies compliance and lets them focus on what they do best.
        </p>
      </section>

      {/* Co-founders */}
      <section className="container mx-auto px-6 pb-16">
        <h2 className="font-heading text-2xl font-bold text-neutral-500 text-center mb-12">Co-founders</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-warm"
            >
              <div className="flex flex-col items-center text-center mb-6">
                <div className="relative w-32 h-32 mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover border-4 border-mint-500/30"
                  />
                </div>
                <h3 className="font-heading text-xl font-bold text-forest-800">{member.name}</h3>
              </div>
              <div className="space-y-4">
                {member.bio.map((paragraph, index) => (
                  <p key={index} className="text-neutral-700 leading-relaxed text-sm">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Advisors */}
      <section className="container mx-auto px-6 pb-24">
        <h2 className="font-heading text-2xl font-bold text-neutral-500 text-center mb-12">Advisors</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {advisors.map((advisor) => (
            <div
              key={advisor.name}
              className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-warm"
            >
              <div className="flex flex-col items-center text-center mb-6">
                <div className="relative w-28 h-28 mb-4">
                  <Image
                    src={advisor.image}
                    alt={advisor.name}
                    fill
                    className="rounded-full object-cover border-4 border-neutral-200"
                  />
                </div>
                <h3 className="font-heading text-xl font-bold text-forest-800">{advisor.name}</h3>
              </div>
              <p className="text-neutral-700 leading-relaxed text-sm">
                {advisor.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 pb-24 text-center">
        <div className="bg-forest-800 rounded-2xl p-12">
          <h2 className="font-heading text-3xl font-extrabold text-white mb-4 tracking-tight">
            Ready to Simplify Your Farm Compliance?
          </h2>
          <p className="text-cream-100/70 mb-8 max-w-xl mx-auto">
            Join the waitlist and be among the first to experience Atamai.
          </p>
          <Link
            href="/#waitlist"
            className="btn-accent inline-block"
          >
            Join the Waitlist
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
