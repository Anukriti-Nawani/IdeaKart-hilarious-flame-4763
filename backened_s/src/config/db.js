const mongoose = require("mongoose");

const connect = async () => {
  return mongoose.connect(process.env.DB_URL);
};
module.exports = connect;
// feedback: fp04_393 - remove such comment as it includes sensitive information
// mongodb+srv://salemes:salemes@cluster0.8hhyd86.mongodb.net/?retryWrites=true&w=majority
