/*
  scripts/migrateJobDescriptions.js
  Converts plain-string `description` fields on `jobPosting` documents to Portable Text (`blockContent`) format.

  Usage:
    1) npm install @sanity/client
    2) node scripts/migrateJobDescriptions.js

  This script is safe: it only updates documents where `description` is a string.
*/

const clientConfig = require('../sanity.config.ts')
const {projectId, dataset} = clientConfig.default || clientConfig

let client
try {
  const sanityClient = require('@sanity/client')
  client = sanityClient({ projectId, dataset, useCdn: false })
} catch (err) {
  console.error('Please install @sanity/client before running this script: npm install @sanity/client')
  process.exit(1)
}

async function findStringDescriptions() {
  const query = '*[_type == "jobPosting" && defined(description) && (description isa "string")] {_id, description}'
  return client.fetch(query)
}

function toPortableTextBlock(str) {
  return [
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: String(str || ''),
          marks: [],
        },
      ],
    },
  ]
}

async function migrate() {
  const docs = await findStringDescriptions()
  if (!docs || docs.length === 0) {
    console.log('No jobPosting docs with string descriptions found.')
    return
  }

  console.log(`Found ${docs.length} documents. Migrating...`)
  for (const doc of docs) {
    const newValue = toPortableTextBlock(doc.description)
    try {
      await client.patch(doc._id).set({ description: newValue }).commit({returnDocuments: false})
      console.log(`Migrated ${doc._id}`)
    } catch (err) {
      console.error(`Failed to migrate ${doc._id}:`, err.message || err)
    }
  }
  console.log('Migration complete.')
}

migrate().catch(err => { console.error(err); process.exit(1) })
