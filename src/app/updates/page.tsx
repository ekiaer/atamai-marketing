import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar } from 'lucide-react'
import { getAllUpdates } from '@/lib/updates'

export default function UpdatesPage() {
  const updates = getAllUpdates()

  return (
    <main className="min-h-screen bg-atamai-darker">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-atamai-darker/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image 
                src="/atamai-light.png" 
                alt="Atamai" 
                width={120} 
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <Link 
              href="/#waitlist" 
              className="btn-primary text-sm"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        <h1 className="text-4xl font-bold text-white mb-4">Updates</h1>
        <p className="text-xl text-white/60 mb-12">
          News and progress from the Atamai team.
        </p>

        {updates.length === 0 ? (
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 text-center">
            <p className="text-white/60">No updates yet. Check back soon!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {updates.map((update) => (
              <Link
                key={update.slug}
                href={`/updates/${update.slug}`}
                className="block bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-green-500/50 hover:bg-white/10 transition-all group"
              >
                <div className="flex items-center gap-2 text-white/40 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  {new Date(update.date).toLocaleDateString('en-NZ', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {update.title}
                </h2>
                <p className="text-white/60">
                  {update.excerpt}
                </p>
                <span className="inline-block mt-4 text-green-400 text-sm font-medium">
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="py-12 bg-atamai-darker border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
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
              © {new Date().getFullYear()} Atamai. Built in New Zealand.
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
