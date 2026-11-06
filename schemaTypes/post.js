export default {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
        { name: 'author', title: 'Author', type: 'reference', to: { type: 'author' } },
        { name: 'mainImage', title: 'Main image', type: 'image', options: { hotspot: true } },
        { name: 'categories', title: 'Categories', type: 'array', of: [{ type: 'reference', to: { type: 'category' } }] },
        { name: 'publishedAt', title: 'Published at', type: 'datetime' },
        { name: 'excerpt', title: 'Excerpt', type: 'text', description: 'Short summary for the blog card' },
        { name: 'seo', title: 'SEO', type: 'seo' },
        { name: 'body', title: 'Body', type: 'blockContent' },
        {
            name: 'faqs',
            title: 'FAQs',
            type: 'array',
            description: 'Frequently asked questions shown below the article (also added as FAQ schema for Google)',
            of: [
                {
                    type: 'object',
                    name: 'faq',
                    title: 'FAQ',
                    fields: [
                        { name: 'question', title: 'Question', type: 'string', validation: (Rule) => Rule.required() },
                        { name: 'answer', title: 'Answer', type: 'text', rows: 4, validation: (Rule) => Rule.required() },
                    ],
                    preview: { select: { title: 'question', subtitle: 'answer' } },
                },
            ],
        },
    ],
}
