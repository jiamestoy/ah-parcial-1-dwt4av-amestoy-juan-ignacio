import { MongoClient } from 'mongodb';

const client = new MongoClient('mongodb://127.0.0.1:27017');
const db = client.db('AH20231CP1');

async function getProjects() {
    await client.connect();
    return db.collection('Projects').find({}).toArray();
}

async function createProject(project) {
    await client.connect();
    await db.collection('Projects').insertOne(project);
    return project

}

export {
    getProjects,
    createProject
}