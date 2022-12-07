const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: {type: String, required:true, unique:true},
    mobile_no: {type: Number,  required:true,},
    email: {type: String, required:true, unique:true},
    password:{type: String, required: true}
},{
    versionKey: false,
    timestamps:true
});
// feedback: fp04_393 - Model names have first letter capital
const User = mongoose.model("user", userSchema);

module.exports = User;
