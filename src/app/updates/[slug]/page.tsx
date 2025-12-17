import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar } from 'lucide-react'
import { marked } from 'marked'
import { getAllUpdateSlugs, getUpdateBySlug } from '@/lib/updates'
import { notFound } from 'next/navigation'

// Generate static paths for all updates
export async function generateStaticParams() {
  const slugs = getAllUpdateSlugs()
  return slugs.map((slug) => ({ slug }))
}

// Generate metadata for each update
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const update = getUpdateBySlug(params.slug)
  if (!update) {
    return { title: 'Update Not Found | Atamai' }
  }
  return {
    title: `${update.title} | Atamai Updates`,
    description: update.excerpt,
  }
}

export default function UpdatePage({ params }: { params: { slug: string } }) {
  const update = getUpdateBySlug(params.slug)

  if (!update) {
    notFound()
  }

  // Convert markdown to HTML
  const contentHtml = marked(update.content)

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

      <article className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <Link 
          href="/updates"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          All updates
        </Link>

        <div className="flex items-center gap-2 text-white/40 text-sm mb-4">
          <Calendar className="w-4 h-4" />
          {new Date(update.date).toLocaleDateString('en-NZ', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>

        <h1 className="text-4xl font-bold text-white mb-8">{update.title}</h1>

        {/* Article content */}
        <div 
          className="prose prose-invert prose-lg max-w-none
            prose-headings:text-white prose-headings:font-semibold
            prose-h1:text-3xl prose-h1:mb-6
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-white/70 prose-p:leading-relaxed prose-p:mb-4
            prose-a:text-green-400 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white prose-strong:font-semibold
            prose-ul:text-white/70 prose-ul:my-4
            prose-ol:text-white/70 prose-ol:my-4
            prose-li:my-1
            prose-blockquote:border-l-green-500 prose-blockquote:text-white/60 prose-blockquote:italic
            prose-code:text-green-400 prose-code:bg-white/10 prose-code:px-1 prose-code:rounded
            prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10
            prose-hr:border-white/10 prose-hr:my-8"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {/* CTA */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 text-center">
            <h3 className="text-xl font-semibold text-white mb-3">
              Interested in Atamai?
            </h3>
            <p className="text-white/60 mb-6">
              Join our waitlist to get early access when we launch.
            </p>
            <Link href="/#waitlist" className="btn-primary">
              Join the Waitlist
            </Link>
          </div>
        </div>
      </article>

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
