import Image from 'next/image'

// Shared site footer — logo, tagline, Privacy Policy link, copyright.
// Extracted from the homepage footer so the Privacy Policy link appears on
// every page (ARIA-AMENDMENT-MKT-FORMS-STOP0-2026-07-22, Amendment A5).
export default function Footer() {
  return (
    <footer className="py-12 bg-forest-800 border-t border-forest-700">
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
            <span className="text-cream-100/50 text-sm">
              Farm compliance, simplified.
            </span>
          </div>
          <div className="flex items-center gap-4 text-cream-100/50 text-sm">
            <a href="/privacy" className="hover:text-cream-100/80 transition-colors">
              Privacy Policy
            </a>
            <span>
              © {new Date().getFullYear()} Atamai. Built for New Zealand farmers.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
