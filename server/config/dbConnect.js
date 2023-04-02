const mongoose = require("mongoose");
const config = require("config");
mongoose.set("strictQuery", false);

const mongoUri = config.get("mongoUri");

const connectDB = async () => {
  try {
    await mongoose.connect(mongoUri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("is connected ....");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
