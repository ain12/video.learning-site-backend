import { MongoClient, Db, Collection, Document } from 'mongodb'

let db: Db

    
export const connectDB = async (): Promise<void> => {
  try {
    const uri = process.env.MONGO_URI as string
     const client = new MongoClient(uri)
    await client.connect()   
    db = client.db(process.env.DB_NAME)
  }catch(error) {
    console.log(error);
    
  }
}

export const myDB = (): Db => {
  if(!db) {
    console.log('Raro')
  }
  return db
}

export const getCollection = <T extends Document>(name: string): Collection<T> => {
  return myDB().collection<T>(name)
}