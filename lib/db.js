// lib/db.js
import { MongoClient } from 'mongodb'

const DB_NAME = 'agency'

// Module-level cache — but NOT executed at import time
let cachedClient = null
let cachedDb = null

export async function getDb() {
  // Return cached connection if available
  if (cachedDb) return cachedDb

  // Only NOW do we read the env variable and connect
  const uri = process.env.MONGODB_URI
  if (!uri) {
    throw new Error('MONGODB_URI environment variable is not set')
  }

  if (!cachedClient) {
    cachedClient = new MongoClient(uri)
    await cachedClient.connect()
  }

  cachedDb = cachedClient.db(DB_NAME)
  return cachedDb
}