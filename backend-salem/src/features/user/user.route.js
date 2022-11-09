const express = require("express");

const User = require("./user.model");

const app = express.Router();

app.post("/signup", async (req, res) => {
  const { name, mobile_no, email, password } = req.body;
  try {
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).send(`cannot create a user with existing email id`);
    } else {
      let user = await User.create({
        name,
        mobile_no,
        email,
        password,
      });
      res.send({ token: `${user.email}_#_${user.password}` });
    }
  } catch (e) {
    res.status(404).send(e.message);
  }
});
app.post("/login", async(req, res)=>{
    const {email, password} = req.body;
    console.log(email, password)
   try{
    let user = await User.findOne({email});  // User is from model;
 //    console.log(user)
    if(user){
        if(password === user.password){
         res.send({
             token: `${email}_#_${password}`,
             user,
         })
        }else{
         res.status(401).send(`Authentication failed, incorrect password`)
        }
    }else{
     res.status(401).send(`User with email: ${email} not found`);
    }
 }catch(e){
     res.status(404).send(e.message);
 }
 })
module.exports = app;
