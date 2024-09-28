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
    res.send(`
        Welcome to our Voting App! <br>
        This application allows users to sign up, log in, and vote for their preferred candidates. <br><br>
        Here are some of the API endpoints you can explore: <br>
        <ul>
            <li><strong>/signup</strong> - Sign up for a new account using your Aadhar card.</li>
            <li><strong>/login</strong> - Log in to your account using your Aadhar card and password.</li>
            <li><strong>/profile</strong> - View your profile information after logging in.</li>
            <li><strong>/profile/password</strong> - Change your password.</li>
            <li><strong>/vote/:candidateID</strong> - Vote for your preferred candidate (one vote per user).</li>
            <li><strong>/vote/count</strong> - See the current vote count for each candidate.</li>
            <li><strong>/candidates</strong> - View a list of all candidates and their party affiliations.</li>
        </ul>
        Enjoy voting and help make a difference! <br><br>
        Note: Admins are restricted from voting, and users can only vote once.
    `);
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
