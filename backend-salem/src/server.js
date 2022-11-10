require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRoute = require("./features/user/user.route")

const connect = require("./config/db");

const PORT =  process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());

app.use("/users", userRoute);


app.listen(PORT, async()=>{
    await connect();
    console.log(`listening to port ${PORT}`);
})