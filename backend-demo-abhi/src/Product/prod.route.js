const express=require("express")
const { model } = require("mongoose")

const app=express.Router()
const Product=require("./prod.model")


app.get("/",async(req,res)=>{

    let Prod= await Product.find()
    console.log(Prod)
    res.send("Prod")

})

app.post("/",async(req,res)=>{
    // console.log(req.body)
    // console.log(Product)
    const prod = await Product.create({...req.body});
    console.log(prod)
    res.send(prod)

})

module.exports=app