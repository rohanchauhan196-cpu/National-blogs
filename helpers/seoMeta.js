// helpers/seoMeta.js
// Utility to merge page-level SEO with site defaults and return meta tag values

export function mergeSeo(pageSeo = {}, siteSeo = {}) {
  return {
    title: pageSeo.title || siteSeo.title || '',
    description: pageSeo.description || siteSeo.description || '',
    keywords: (pageSeo.keywords && pageSeo.keywords.length) ? pageSeo.keywords : (siteSeo.keywords || []),
    image: (pageSeo.image && pageSeo.image.asset?.url) ? pageSeo.image.asset.url : (siteSeo.image && siteSeo.image.asset?.url) ? siteSeo.image.asset.url : null,
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

// Usage example / GROQ hints:
// Query a page and site defaults together in one request:
// {
//  "page": *[_type == "page" && slug.current == $slug][0]{title, seo{title, description, keywords, image{asset->{_id, url}}}},
//  "site": *[_type == "siteSettings"][0]{seo{title, description, keywords, image{asset->{_id, url}}}}
// }
// Then: const merged = mergeSeo(page.seo, site.seo); const tags = generateMetaTags(merged)
