const mongoose = require("mongoose");

const connect = async () => {
  return mongoose.connect(process.env.DB_URL);
};
module.exports = connect;

// mongodb+srv://salemes:salemes@cluster0.8hhyd86.mongodb.net/?retryWrites=true&w=majority
