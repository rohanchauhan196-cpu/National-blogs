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
      description: 'Select which static page this document represents. Create one document per page; once saved the selection will be locked to avoid accidental overwrites.',
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
      validation: (Rule) =>
        Rule.required().custom(async (value, context) => {
          if (!value) return true
          const { document, getClient } = context || {}
          if (!getClient) return true // cannot validate in this environment
          const client = getClient({ apiVersion: '2023-05-10' })
          const id = document?._id
          const query = '*[_type == "page" && slug == $slug && _id != $id][0]._id'
          const exists = await client.fetch(query, { slug: value, id })
          return exists ? 'A page with this value already exists — edit that document instead.' : true
        }),
      // Lock selection after the document is created in the dataset (prevents accidental reassignments)
      readOnly: ({ document }) => Boolean(document?._createdAt),
    },
    { 
      name: 'content', 
      title: 'Content', 
      type: 'blockContent',
      description: 'Visible for pages that have editable content (home, about, contact, services, packages, blog, careers, policies, service categories, and individual packages).',
      hidden: ({document}) => {
        const page = document?.slug
        const pagesWithContent = [
          'home','about','contact','all-services','packages','blog','careers','privacy-policy','refund-policy',
          'services-pathology','services-radiology','services-cardiology',
          'health-panel-whole-body','preventive-comprehensive','preventive-comprehensive-plus','routine-health','fever-basic','fever-advance','fever-panel-i','extended-iron-profile','basic-iron-profile','diabetic-profile',
        ]
        return !pagesWithContent.includes(page)
      }
    },
    { name: 'seo', title: 'SEO', type: 'seo' },
  ],
  preview: {
    select: { title: 'title', subtitle: 'slug' },
  },
}
