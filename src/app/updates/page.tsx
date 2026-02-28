import Link from 'next/link'
import { Calendar } from 'lucide-react'
import { getAllUpdates } from '@/lib/updates'
import Navigation from '@/components/Navigation'

export default function UpdatesPage() {
  const updates = getAllUpdates()

  return (
    <main className="min-h-screen bg-tint-light">
      <Navigation />

      <div className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <h1 className="font-heading text-4xl font-extrabold text-forest-800 mb-4 tracking-tight">Updates</h1>
        <p className="text-xl text-neutral-700 mb-12">
          News and progress from the Atamai team.
        </p>

        {updates.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 border border-neutral-200 text-center">
            <p className="text-neutral-500">No updates yet. Check back soon!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {updates.map((update) => (
              <Link
                key={update.slug}
                href={`/updates/${update.slug}`}
                className="block bg-white rounded-2xl p-8 border border-neutral-200 hover:border-mint-500/50 hover:shadow-warm transition-all group"
              >
                <div className="flex items-center gap-2 text-neutral-500 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  {new Date(update.date).toLocaleDateString('en-NZ', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <h2 className="font-heading text-xl font-bold text-forest-800 mb-2 group-hover:text-mint-500 transition-colors">
                  {update.title}
                </h2>
                <p className="text-neutral-700">
                  {update.excerpt}
                </p>
                <span className="inline-block mt-4 text-mint-500 text-sm font-medium">
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-forest-800 border-t border-forest-700 py-8">
        <div className="container mx-auto px-6 text-center text-cream-100/50">
          <p>&copy; {new Date().getFullYear()} Atamai. Built for New Zealand farmers.</p>
        </div>
      </footer>
    </main>
  )
}
