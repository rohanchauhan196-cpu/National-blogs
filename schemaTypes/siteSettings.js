export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    { name: 'title', title: 'Site title', type: 'string' },
    { name: 'seo', title: 'Default SEO', type: 'seo' },
    { name: 'defaultSocialImage', title: 'Default social image', type: 'image', options: { hotspot: true } },
  ],
  preview: {
    select: { title: 'title' },
  },
}
