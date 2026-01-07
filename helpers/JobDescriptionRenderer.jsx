import React from 'react'
import { PortableText } from '@portabletext/react'
import { PortableTextComponents } from './portableTextRenderer'

export default function JobDescriptionRenderer({ description }) {
  if (!description) return null
  // If backend is still returning a string (older docs), render it safely
  if (typeof description === 'string') {
    return <p>{description}</p>
  }
  // Otherwise assume Portable Text array
  return <PortableText value={description} components={PortableTextComponents} />
}
