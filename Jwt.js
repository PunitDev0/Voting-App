import jwt from 'jsonwebtoken';

const jwtAuthMiddleware = (req,res,next)=>{
    const token = req.headers.authorization.spli(' ')[1]
    if(!token) return res.status(401).json({error : 'Invalid token'})
        try{

            const decoded = jwt.verify(token,process.env.JWT_SECRET);
            req.user = decoded
            next()


        }catch(error){
            console.error(error)
            return res.status(401).json({error : 'Token is not valid'})
        }

}

const generateToken = (userData) =>{
    return jwt.sign(userData,process.env.JWT_SECRET,{expiresIn : '1h'}) 
}

export  {jwtAuthMiddleware, generateToken}