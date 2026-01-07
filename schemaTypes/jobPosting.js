export default {
  name: 'jobPosting',
  title: 'Job Posting',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'The job title (e.g., "Medical Laboratory Technician")',
    },
    {
      name: 'department',
      title: 'Department',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'The department this role belongs to (e.g., "Pathology")',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Job location (e.g., "Dwarka, Delhi", "Remote")',
    },
    {
      name: 'type',
      title: 'Employment type',
      type: 'string',
      options: {
        list: [
          { title: 'Full-time', value: 'Full-time' },
          { title: 'Part-time', value: 'Part-time' },
          { title: 'Contract', value: 'Contract' },
        ],
      },
      validation: (Rule) => Rule.required(),
      description: 'Employment type',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
      description: 'Detailed job description — supports rich text, lists and formatting',
    },
    {
      name: 'requirements',
      title: 'Requirements',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of job requirements/qualifications (optional)',
    },
    {
      name: 'postedDate',
      title: 'Posted date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
      description: 'Date when the job was posted',
    },
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'department',
    },
  },
}
