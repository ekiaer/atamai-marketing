import Link from 'next/link'
import { ArrowLeft, Calendar } from 'lucide-react'
import { marked } from 'marked'
import { getAllUpdateSlugs, getUpdateBySlug } from '@/lib/updates'
import { notFound } from 'next/navigation'
import Navigation from '@/components/Navigation'

// Generate static paths for all updates
export async function generateStaticParams() {
  const slugs = getAllUpdateSlugs()
  return slugs.map((slug) => ({ slug }))
}

// Generate metadata for each update
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const update = getUpdateBySlug(slug)
  if (!update) {
    return { title: 'Update Not Found | Atamai' }
  }
  return {
    title: `${update.title} | Atamai Updates`,
    description: update.excerpt,
  }
}

export default async function UpdatePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const update = getUpdateBySlug(slug)

  if (!update) {
    notFound()
  }

  // Convert markdown to HTML
  const contentHtml = marked(update.content)

  return (
    <main className="min-h-screen bg-cream-50">
      <Navigation />

      <article className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <Link
          href="/updates"
          className="inline-flex items-center gap-2 text-neutral-500 hover:text-forest-800 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          All updates
        </Link>

        <div className="flex items-center gap-2 text-neutral-500 text-sm mb-4">
          <Calendar className="w-4 h-4" />
          {new Date(update.date).toLocaleDateString('en-NZ', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>

        <h1 className="font-heading text-4xl font-extrabold text-forest-800 mb-8 tracking-tight">{update.title}</h1>

        {/* Article content */}
        <div
          className="prose prose-lg max-w-none
            prose-headings:text-forest-800 prose-headings:font-heading prose-headings:font-bold
            prose-h1:text-3xl prose-h1:mb-6
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-neutral-700 prose-p:leading-relaxed prose-p:mb-4
            prose-a:text-mint-500 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-forest-800 prose-strong:font-semibold
            prose-ul:text-neutral-700 prose-ul:my-4
            prose-ol:text-neutral-700 prose-ol:my-4
            prose-li:my-1
            prose-blockquote:border-l-mint-500 prose-blockquote:text-neutral-500 prose-blockquote:italic
            prose-code:text-mint-600 prose-code:bg-mint-500/10 prose-code:px-1 prose-code:rounded
            prose-pre:bg-white prose-pre:border prose-pre:border-neutral-200
            prose-hr:border-neutral-200 prose-hr:my-8"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {/* CTA */}
        <div className="mt-16 pt-8 border-t border-neutral-200">
          <div className="bg-white rounded-2xl p-8 border border-neutral-200 text-center shadow-warm">
            <h3 className="font-heading text-xl font-bold text-forest-800 mb-3">
              Interested in Atamai?
            </h3>
            <p className="text-neutral-700 mb-6">
              Join our waitlist to get early access when we launch.
            </p>
            <Link href="/#waitlist" className="btn-accent inline-block">
              Join the Waitlist
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-forest-800 border-t border-forest-700 py-8">
        <div className="container mx-auto px-6 text-center text-cream-100/50">
          <p>&copy; {new Date().getFullYear()} Atamai. Built for New Zealand farmers.</p>
        </div>
      </footer>
    </main>
  )
}
