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
const User = mongoose.model("user", userSchema);

module.exports = User;