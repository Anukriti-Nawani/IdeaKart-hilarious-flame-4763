require("dotenv").config()
const express=require("express")
const cors=require("cors")

const connect=require("./config")
const app=express()
app.use(express.json())
const PORT=process.env.PORT
app.use(cors())
const ProdRoutes=require("./Product/prod.route")

app.use("/",ProdRoutes)

app.listen(PORT,async()=>{
    try{
        await connect()
    }
    catch(e){
        console.log(e)
    }


    console.log(`https://localhost:${PORT}...Listening`)
})