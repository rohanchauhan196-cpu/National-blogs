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
          { title: 'All Services', value: 'all-services' },
          { title: 'All Packages', value: 'packages' },
          { title: 'Blog Listing', value: 'blog' },
          { title: 'Careers', value: 'careers' },
          { title: 'Privacy Policy', value: 'privacy-policy' },
          { title: 'Refund Policy', value: 'refund-policy' },

          // Service Categories
          { title: 'Pathology Services', value: 'services-pathology' },
          { title: 'Radiology Services', value: 'services-radiology' },
          { title: 'Cardiology Services', value: 'services-cardiology' },

          // Health Packages (individual)
          { title: 'Health Panel Whole Body', value: 'health-panel-whole-body' },
          { title: 'Preventive Comprehensive', value: 'preventive-comprehensive' },
          { title: 'Preventive Comprehensive+', value: 'preventive-comprehensive-plus' },
          { title: 'Routine Health Panel', value: 'routine-health' },
          { title: 'Fever Profile Basic', value: 'fever-basic' },
          { title: 'Fever Profile Advance', value: 'fever-advance' },
          { title: 'Fever Panel I', value: 'fever-panel-i' },
          { title: 'Extended Iron Profile', value: 'extended-iron-profile' },
          { title: 'Basic Iron Profile', value: 'basic-iron-profile' },
          { title: 'Diabetic Profile', value: 'diabetic-profile' },
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
