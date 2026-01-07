export default {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Page title for SEO / Open Graph title',
      validation: (Rule) => Rule.max(60).warning('Recommended max 60 characters for SEO titles'),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Meta description / Open Graph description',
      validation: (Rule) => Rule.max(160).warning('Recommended max 160 characters for meta descriptions'),
    },
    { name: 'keywords', title: 'Keywords', type: 'array', of: [{ type: 'string' }], description: 'Optional keywords for meta tags' },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true }, description: 'Image for social sharing (Open Graph / Twitter)' },
  ],
} 
