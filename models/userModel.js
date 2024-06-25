const mongoose  = require('mongoose');

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:[true,"Plaese Add username"]
    },
    email:{
        type:String,
        required:[true,"Please add email"],
        unique:[true,"email already taken "]
    },
    password:{
        type:String,
        required:[true,"Please add password"]
    },
},{
    timestamps:true
})

module.exports = mongoose.model("User",userSchema)