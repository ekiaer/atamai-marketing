import type { Update } from './updates'

const SITE_URL = 'https://www.atamaiag.com'

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Atamai',
    url: SITE_URL,
    logo: `${SITE_URL}/atamai-logo.svg`,
    description:
      'Atamai is a farmer-first platform that transforms compliance from a burden into a business asset for New Zealand farmers.',
    foundingDate: '2024',
    founders: [
      { '@type': 'Person', name: 'Erik Kiaer' },
      { '@type': 'Person', name: 'Katie Riches' },
      { '@type': 'Person', name: 'Henry Ferrier' },
    ],
    sameAs: [],
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Atamai',
    url: SITE_URL,
    description:
      'Farm compliance made simple. Atamai brings all your farm compliance into one place.',
    publisher: {
      '@type': 'Organization',
      name: 'Atamai',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/atamai-logo.svg` },
    },
  }
}

export function articleSchema(update: Update) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: update.title,
    description: update.excerpt,
    url: `${SITE_URL}/updates/${update.slug}/`,
    datePublished: update.date,
    ...(update.last_updated && { dateModified: update.last_updated }),
    publisher: {
      '@type': 'Organization',
      name: 'Atamai',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/atamai-logo.svg` },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/updates/${update.slug}/`,
    },
  }

  if (update.author) {
    schema.author = {
      '@type': 'Person',
      name: update.author,
      ...(update.author_title && { jobTitle: update.author_title }),
    }
  }

  if (update.image) {
    schema.image = update.image.startsWith('/')
      ? `${SITE_URL}${update.image}`
      : update.image
  }

  if (update.tags?.length) {
    schema.keywords = update.tags.join(', ')
  }

  return schema
}

export function faqPageSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function personSchema(person: {
  name: string
  jobTitle?: string
  description?: string
  image?: string
  url?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    ...(person.jobTitle && { jobTitle: person.jobTitle }),
    ...(person.description && { description: person.description }),
    ...(person.image && {
      image: person.image.startsWith('/')
        ? `${SITE_URL}${person.image}`
        : person.image,
    }),
    ...(person.url && { url: person.url }),
    worksFor: {
      '@type': 'Organization',
      name: 'Atamai',
      url: SITE_URL,
    },
  }
}
