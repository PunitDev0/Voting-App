import express from 'express';
const router = express.router();

router.post('/signup', (res, req)=>{

    try{

        

    }catch(error){
        console.error(error);
        res.status(500).json({error: 'Server Error'});
    }

})