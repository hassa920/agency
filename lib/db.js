// lib/db.js
// MongoDB connection for Next.js (local)
// Database: agency

import { MongoClient } from 'mongodb'

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017'
const DB_NAME = 'agency'

// Reuse connection across hot reloads in development
let client
let clientPromise

if (!global._mongoClientPromise) {
  client = new MongoClient(MONGODB_URI)
  global._mongoClientPromise = client.connect()
}
clientPromise = global._mongoClientPromise

/**
 * Returns the `agency` database instance.
 * Usage:
 *   const db = await getDb()
 *   const collection = db.collection('contacts')
 */
export async function getDb() {
  const client = await clientPromise
  return client.db(DB_NAME)
}

export default clientPromise