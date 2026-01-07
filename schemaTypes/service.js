export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'mainImage', title: 'Main image', type: 'image', options: { hotspot: true } },
    { name: 'shortDescription', title: 'Short description', type: 'text', description: 'Short summary (3-4 lines) for services listing' },
    { name: 'description', title: 'Description', type: 'text', description: 'Detailed description for the service page' },
    { name: 'seo', title: 'SEO', type: 'seo' },
    {
      name: 'tests',
      title: 'Tests',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'test',
          title: 'Test',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'price', title: 'Price', type: 'number', validation: Rule => Rule.min(0) },
            { name: 'description', title: 'Description', type: 'text', description: 'Optional additional details', options: { rows: 3 } },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'shortDescription',
      media: 'mainImage',
    },
  },
}
