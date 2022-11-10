const mongoose=require("mongoose")

const productSchema=new mongoose.Schema({
    name:String,
    experience:String,
    file: String,
    buy:String,
    plateform:String
},{versionKey:false})

const Product=mongoose.model("prod",productSchema)

module.exports=Product