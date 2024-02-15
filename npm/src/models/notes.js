const { connectToMongo, getDatabase } = require('E:/Android/Projects/notedly/src/db');

async function createTable(tablet, type){
    try {
        await connectToMongo();
        const database = await getDatabase();
        const collection = database.collection('notes');
        const note = {
            tablet,
            type,
        };
        await collection.insertOne(note);
        console.log('Note created:', note);
    } catch (error) {
        console.error('Error creating note:', error);
    }

}

async function findTablet(){
    await connectToMongo();
    const db =  await getDatabase();
    const collection = db.collection('notes');
    const notes = await collection.find({}).toArray();
    return notes;
}
module.exports = { createTable, findTablet };