import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()
const mongoURL = "mongodb://127.0.0.1:27017/Voting";
// const mongoURL = process.env.mongoURL
mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on('error', () => {
    console.log('Error connecting to MongoDB');
});

db.on('connected', () => {
    console.log('Connected to MongoDB');
});

db.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
});

export default db;
