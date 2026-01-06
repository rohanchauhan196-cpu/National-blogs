import AlignmentInput from '../components/AlignmentInput'

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
            lists: [{ title: 'Bullet', value: 'bullet' }],
            /* Add an inspector field so editors can pick alignment per block */
            fields: [
                {
                    name: 'textAlign',
                    title: 'Text alignment',
                    type: 'string',
                    components: { input: AlignmentInput },
                    options: {
                        list: [
                            { title: 'Left', value: 'left' },
                            { title: 'Center', value: 'center' },
                            { title: 'Right', value: 'right' },
                        ],
                    },
                },
            ],
            marks: {
                decorators: [
                    { title: 'Strong', value: 'strong' },
                    { title: 'Emphasis', value: 'em' },
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
                        ],
                    },
                ],
            },
        },
        {
            type: 'image',
            options: { hotspot: true },
        },
    ],
}
