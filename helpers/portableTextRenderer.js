// Example renderer for @portabletext/react or custom renderers
// Use this in your frontend to apply alignment set in Sanity blocks.

import React from 'react'

export const PortableTextComponents = {
  block: {
    // fallback for normal/heading/quote; we check for textAlign first
    normal: ({children, value}) => {
      const align = value?.textAlign || (value?.style === 'center' ? 'center' : value?.style === 'right' ? 'right' : 'left')
      return <p style={{textAlign: align}}>{children}</p>
    },
    h1: ({children, value}) => {
      const align = value?.textAlign || 'left'
      return <h1 style={{textAlign: align}}>{children}</h1>
    },
    h2: ({children, value}) => {
      const align = value?.textAlign || 'left'
      return <h2 style={{textAlign: align}}>{children}</h2>
    },
    blockquote: ({children, value}) => {
      const align = value?.textAlign || 'left'
      return <blockquote style={{textAlign: align}}>{children}</blockquote>
    },
  },
}

// Usage with @portabletext/react
// <PortableText value={post.body} components={PortableTextComponents} />
