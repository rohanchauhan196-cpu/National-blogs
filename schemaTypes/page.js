export default {
  name: 'page',
  title: 'Static Pages (Home, About, etc.)',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    {
      name: 'slug',
      title: 'Page',
      type: 'string',
      description: 'Select which static page this document represents.',
      options: {
        list: [
          { title: 'Home Page', value: 'home' },
          { title: 'About Us', value: 'about' },
          { title: 'Contact Us', value: 'contact' },
          { title: 'All Services Page', value: 'services' },
          { title: 'All Packages Page', value: 'packages' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    { name: 'content', title: 'Content', type: 'blockContent' },
    { name: 'seo', title: 'SEO', type: 'seo' },
  ],
  preview: {
    select: { title: 'title', subtitle: 'slug' },
  },
}
