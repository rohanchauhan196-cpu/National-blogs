// helpers/seoMeta.js
// Utility to merge page-level SEO with site defaults and return meta tag values

function truncate(str, n) {
  if (typeof str !== 'string') return ''
  return str.length > n ? str.slice(0, n) : str
}

export function mergeSeo(pageSeo = {}, siteSeo = {}) {
  const merged = {
    title: pageSeo.title || siteSeo.title || '',
    description: pageSeo.description || siteSeo.description || '',
    keywords: (pageSeo.keywords && pageSeo.keywords.length) ? pageSeo.keywords : (siteSeo.keywords || []),
    image: (pageSeo.image && pageSeo.image.asset?.url) ? pageSeo.image.asset.url : (siteSeo.image && siteSeo.image.asset?.url) ? siteSeo.image.asset.url : null,
  }

  // enforce recommended lengths
  return {
    title: truncate(merged.title, 60),
    description: truncate(merged.description, 160),
    keywords: merged.keywords,
    image: merged.image,
  }
}

export function generateMetaTags(seo) {
  // Returns an object you can map into <meta> tags in your app
  return {
    title: seo.title,
    meta: [
      { name: 'description', content: seo.description },
      { name: 'keywords', content: seo.keywords.join(', ') },
      { property: 'og:title', content: seo.title },
      { property: 'og:description', content: seo.description },
      ...(seo.image ? [{ property: 'og:image', content: seo.image }, { name: 'twitter:image', content: seo.image }] : []),
    ],
  }
}

