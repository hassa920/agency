import { MongoClient } from 'mongodb'

const DB_NAME = 'agency'

let cachedClient = null
let cachedDb = null

export async function getDb() {
  if (cachedDb) return cachedDb
  console.log("uri is",process.env.MONGODB_URI)
  const uri = process.env.MONGODB_URI
  if (!uri) {
    throw new Error('MONGODB_URI environment variable is not set')
  }

  try {
    if (!cachedClient) {
      cachedClient = new MongoClient(uri, {
        serverSelectionTimeoutMS: 5000, // fail fast
      })
      await cachedClient.connect()
      console.log("✅ MongoDB connected")
    }

    cachedDb = cachedClient.db(DB_NAME)
    return cachedDb
  } catch (error) {
    console.error("❌ DB connection failed:", error)
    throw error
  }
}