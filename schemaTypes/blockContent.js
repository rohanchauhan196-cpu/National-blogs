export default {
    title: 'Block Content',
    name: 'blockContent',
    type: 'array',
    of: [
        {
            title: 'Block',
            type: 'block',
            styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'H1', value: 'h1' },
                { title: 'H2', value: 'h2' },
                { title: 'H3', value: 'h3' },
                { title: 'H4', value: 'h4' },
                { title: 'Quote', value: 'blockquote' },
                { title: 'Center', value: 'center' },
                { title: 'Right', value: 'right' },
            ],
            lists: [
                { title: 'Bullet', value: 'bullet' },
                { title: 'Numbered', value: 'number' },
            ],
            marks: {
                decorators: [
                    { title: 'Strong', value: 'strong' },
                    { title: 'Emphasis', value: 'em' },
                    { title: 'Underline', value: 'underline' },
                    { title: 'Code', value: 'code' },
                    { title: 'Strike-through', value: 'strike-through' },
                ],
                annotations: [
                    {
                        title: 'URL',
                        name: 'link',
                        type: 'object',
                        fields: [
                            {
                                title: 'URL',
                                name: 'href',
                                type: 'url',
                            },
                            {
                                title: 'Open in new tab',
                                name: 'blank',
                                type: 'boolean',
                            },
                        ],
                    },
                    {
                        title: 'Internal link',
                        name: 'internalLink',
                        type: 'object',
                        fields: [
                            { name: 'reference', title: 'Reference', type: 'reference', to: [
                                { type: 'post' }, { type: 'page' }, { type: 'service' }, { type: 'package' }
                            ] },
                        ],
                    },
                ],
            },
        },
        {
            type: 'image',
            options: { hotspot: true },
            fields: [
                { name: 'alt', title: 'Alternative text', type: 'string', description: 'Important for accessibility' },
                { name: 'caption', title: 'Caption', type: 'string' },
            ],
        },
    ],
}
