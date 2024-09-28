import express from 'express';
import bodyParser from 'body-parser';
import db from './db.js';
import dotenv from 'dotenv';
import {jwtAuthMiddleware} from './Jwt.js';

const app = express();
dotenv.config();

// Middleware
app.use(bodyParser.json());

// Sample route
app.get('/', (req, res) => {
    console.log('Server is running! Request received at /');
    res.send('Welcome to our Voting App');
});

// Uncomment these routes if they exist in your project
import candidateRoute from './routes/candidateRoutes.js';
app.use('/candidate', jwtAuthMiddleware,candidateRoute);

import userRoute from './routes/userRoutes.js';
app.use('/user',userRoute);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
