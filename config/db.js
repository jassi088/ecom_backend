const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const db = async () => {
  try {
    await mongoose.connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("DB connected");
  } catch (error) {
    console.log(error)
  }
}

module.exports = db;
