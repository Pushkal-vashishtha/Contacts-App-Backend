const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please add name"],
    },
    email:{
        type:String,
        required:[true,"Please add email"],
    },
    phone:{
        type:String,
        required:[true,"Please add Phone Number"],
    },
    usr_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    }
},{
    timestamps:true,
})

module.exports  =mongoose.model("Contact",contactSchema)