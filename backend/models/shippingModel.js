const mongoose = require('mongoose')

const shippindSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        required:true,
    },
    zipCode:{
        type:String,
        required:true,
    }

},{
    timestamps:true
})

module.exports = mongoose.model('Shipping',shippindSchema)