/*
  scripts/seedPages.js
  Safe seeding script to create starter Static Page documents and Package documents in Sanity.

  Usage:
    1) Install the Sanity client: npm install @sanity/client
    2) Run: node scripts/seedPages.js

  The script will:
    - create one `page` doc per slug option if it doesn't already exist
    - create package docs for the package slugs if they don't exist
*/

const clientConfig = require('../sanity.config.ts')
const {projectId, dataset} = clientConfig.default || clientConfig

// Lazy-import @sanity/client so the script doesn't break if not installed
let client
try {
  // eslint-disable-next-line import/no-extraneous-dependencies
  const sanityClient = require('@sanity/client')
  client = sanityClient({ projectId, dataset, useCdn: false })
} catch (err) {
  console.error('Please install @sanity/client before running this script: npm install @sanity/client')
  process.exit(1)
}

const staticPages = [
  { title: 'Home Page', slug: 'home' },
  { title: 'About Us', slug: 'about' },
  { title: 'Contact Us', slug: 'contact' },
  { title: 'All Services', slug: 'all-services' },
  { title: 'All Packages', slug: 'packages' },
  { title: 'Blog Listing', slug: 'blog' },
  { title: 'Careers', slug: 'careers' },
  { title: 'Privacy Policy', slug: 'privacy-policy' },
  { title: 'Refund Policy', slug: 'refund-policy' },

  // service categories
  { title: 'Pathology Services', slug: 'services-pathology' },
  { title: 'Radiology Services', slug: 'services-radiology' },
  { title: 'Cardiology Services', slug: 'services-cardiology' },
]

const packagePages = [
  { title: 'Health Panel Whole Body', slug: 'health-panel-whole-body' },
  { title: 'Preventive Comprehensive', slug: 'preventive-comprehensive' },
  { title: 'Preventive Comprehensive+', slug: 'preventive-comprehensive-plus' },
  { title: 'Routine Health Panel', slug: 'routine-health' },
  { title: 'Fever Profile Basic', slug: 'fever-basic' },
  { title: 'Fever Profile Advance', slug: 'fever-advance' },
  { title: 'Fever Panel I', slug: 'fever-panel-i' },
  { title: 'Extended Iron Profile', slug: 'extended-iron-profile' },
  { title: 'Basic Iron Profile', slug: 'basic-iron-profile' },
  { title: 'Diabetic Profile', slug: 'diabetic-profile' },
]

async function createIfMissing(docType, doc) {
  const query = `*[_type == $type && slug == $slug][0]._id`
  const params = { type: docType, slug: doc.slug }
  const existing = await client.fetch(query, params)
  if (existing) {
    console.log(`Skipping ${docType} / ${doc.slug} (already exists)`)
    return
  }

  const createDoc = {
    _type: docType,
    title: doc.title,
    slug: doc.slug,
    seo: { title: doc.title },
  }

  try {
    const created = await client.create(createDoc)
    console.log(`Created ${docType} ${created._id} (${doc.slug})`)
  } catch (err) {
    console.error('Error creating document', err.message || err)
  }
}

async function main() {
  console.log('Seeding static pages...')
  for (const p of staticPages) {
    await createIfMissing('page', p)
  }

  console.log('Seeding package pages...')
  for (const p of packagePages) {
    await createIfMissing('package', p)
  }

  console.log('Done.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
