import fs from 'fs'
import path from 'path'

const SITE_URL = 'https://www.atamaiag.com'

const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about/', priority: '0.8', changefreq: 'monthly' },
  { path: '/team/', priority: '0.7', changefreq: 'monthly' },
  { path: '/updates/', priority: '0.8', changefreq: 'weekly' },
  { path: '/contact/', priority: '0.6', changefreq: 'monthly' },
]

// Discover update slugs from content/updates/
const updatesDir = path.join(process.cwd(), 'content/updates')
const updateSlugs = fs.existsSync(updatesDir)
  ? fs
      .readdirSync(updatesDir)
      .filter((f) => f.endsWith('.md'))
      .map((f) => f.replace(/\.md$/, ''))
  : []

const today = new Date().toISOString().split('T')[0]

const urls = [
  ...staticRoutes.map(
    (r) => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  ),
  ...updateSlugs.map(
    (slug) => `  <url>
    <loc>${SITE_URL}/updates/${slug}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
  ),
]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`

fs.writeFileSync(path.join(process.cwd(), 'public/sitemap.xml'), sitemap)
console.log(`Sitemap generated with ${urls.length} URLs`)
