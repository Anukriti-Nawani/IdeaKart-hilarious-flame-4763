
const mongoose=require("mongoose")

 const ProductSchema=new mongoose.Schema({
    name:String,
    experience:String,
    // Image: { data: Buffer, contentType: String },
    buy:String,
    Plateform:String
 })

 const Product=mongoose.model("prod",ProductSchema)

 module.exports=Product