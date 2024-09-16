import express from 'express';
import bodyparser from 'body-parser'
const app = express();
app.use(bodyparser.json())

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});