const mongoose = require('mongoose');

const connectDB = async () => {
  await mongoose.connect(process.env.DB)
  console.log("DB connected");
}

module.exports = { connectDB };
