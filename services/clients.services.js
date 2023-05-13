import { MongoClient, ObjectId } from 'mongodb';

const client = new MongoClient('mongodb://127.0.0.1:27017');
const db = client.db('AH20231CP1');

async function getClients() {

    await client.connect();
    return db.collection('Clients').find().toArray();
}

async function createClient(newClient) {
    await client.connect();
    await db.collection('Clients').insertOne(newClient);
    return newClient
}

export {
    getClients,
    createClient
}