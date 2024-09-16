import mongoose from 'mongoose';

const candidateSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    party:{
        type : String,
        required : true
    },
    age:{
        type : Number,
        required : true
    },
    votes:[
        {
            user:{
                type : mongoose.Schema.Types.ObjectId,
                ref : 'User',
                require:true,
            },
            votes:{
                type : date,
                default: new Date
            }
        }
    ],
    voteCount:{
        typeof: 'number',
        default: 0
    }

})
const Candidate = mongoose.model('Candidate',candidateSchema);

export default Candidate;