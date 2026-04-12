import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const updatesDirectory = path.join(process.cwd(), 'content/updates')

export interface Update {
  // Required (always present)
  slug: string
  title: string
  date: string
  excerpt: string
  content: string

  // Extended (optional — for SEO/GEO, may be undefined on older posts)
  author?: string
  author_title?: string
  last_updated?: string
  canonical_url?: string
  tags?: string[]
  image?: string
  image_alt?: string
  faqs?: Array<{ question: string; answer: string }>
}

export function getAllUpdates(): Update[] {
  // Check if directory exists
  if (!fs.existsSync(updatesDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(updatesDirectory)
  const allUpdates = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(updatesDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || '',
        excerpt: data.excerpt || '',
        content,
        author: data.author,
        author_title: data.author_title,
        last_updated: data.last_updated,
        canonical_url: data.canonical_url,
        tags: data.tags,
        image: data.image,
        image_alt: data.image_alt,
        faqs: data.faqs,
      }
    })

  // Sort by date, newest first
  return allUpdates.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getUpdateBySlug(slug: string): Update | null {
  try {
    const fullPath = path.join(updatesDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || '',
      excerpt: data.excerpt || '',
      content,
      author: data.author,
      author_title: data.author_title,
      last_updated: data.last_updated,
      canonical_url: data.canonical_url,
      tags: data.tags,
      image: data.image,
      image_alt: data.image_alt,
      faqs: data.faqs,
    }
  } catch {
    return null
  }
}

export function getAllUpdateSlugs(): string[] {
  if (!fs.existsSync(updatesDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(updatesDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''))
}
