import { Db, MongoClient } from "mongodb";

export default async function connectToDb() : Promise<Db> {
    
    const url = 'mongodb://localhost:27017';

    // Database Name
    const dbName = 'local';
    let client = new MongoClient(url);
    // Use connect method to connect to the server
    client = await client.connect();
    return client.db(dbName);
}