import express from 'express';
import bodyparser from 'body-parser'
import dontenv from 'dotenv';
const app = express();
app.use(bodyparser.json())
dontenv.config();

import userRoute from './routes/userRoutes.js'
app.use('/user', userRoute)


const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
