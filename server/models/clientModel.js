const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const clientSchema = mongoose.Schema({
  name: String,
  familyName:String,
  fullName:String,
  email:String,
  phoneNumber:Number,
  password:String,
  image:String,
  reference: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  resetLink: {
    data: String,
    default: "",
  },
});

module.exports = Client = mongoose.model("client", clientSchema);
