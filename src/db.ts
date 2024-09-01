import { MongoClient, Db, Collection, Document } from 'mongodb'

let db: Db

export const connectDB = async () => {
  try {
    const client = new MongoClient(process.env.MONGO_URI as string)
    await client.connect()
    console.log('ggg', process.env.DB_NAME);
    
    db = client.db(process.env.DB_NAME) 
    console.log('Connected to db')
  } catch (error) {
    console.error('Could not connect to MongoDB', error)
    process.exit(1)
  }
};

export const myDB = (): Db => {
  if(!db) {
    throw new Error('Db not connected')
  }
  return db
}

export const getCollection = <T extends Document>(name: string): Collection<T> => {
  return myDB().collection<T>(name)
}