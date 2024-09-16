import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age:{
        type : Number,
        required : true
    },
    email:{
        type : String,
        required : true,
        unique : true
    },
    mobile:{
        type : String,  
    },
    address:{
        type : String,
        required : true
    },
    aadharCardNumber:{
        type : String,
        required : true,
        unique : true
    },
    role:{
        type : String,
        enum : ['admin', 'voter'],
        default : 'voter'
    },
    isVoted:{
        type : Boolean,
        default : false
    }

})

const User = mongoose.model('User',userSchema);

export default User;