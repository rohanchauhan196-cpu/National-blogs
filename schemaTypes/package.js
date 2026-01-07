export default {
  name: 'package',
  title: 'Package',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'seo', title: 'SEO', type: 'seo' },
  ],
  preview: {
    select: { title: 'title', subtitle: 'slug.current' },
  },
}
