const express=require("express")

const app=express.Router()

const Product=require("./prod.model")

app.get("/", async(req,res)=>{

    const prod=await Product.find()

    res.send(prod)

})


app.post("/", async (req,res)=>{
    console.log(req.body)
    const prod=await Product.create({...req.body})
    res.send(req.body)

})

module.exports=app