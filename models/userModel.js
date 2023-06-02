const mongoose =require('mongoose')

const userSchema =mongoose.Schema({
    userName :{
        type: 'String',
        required:[true,"please add username"]
    },
    email:{
        type: 'String',
        required:[true,"please add email"],
        unique:[true,"email address already taken"]
    },
    password:{
        type: 'String',
        required:[true,"please add password"]
    }
},{
    timeStamps:true
})
module.exports =mongoose.model("User",userSchema);