const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
mongoose.set("strictQuery", false);

const projectSchema = mongoose.Schema({
  name: String,

  reference: String,

  description: String,
  image: {
    public_id: { type: String },
    url: { type: String },
  },
  bgColor: String,

  createdAt: {
    type: Date,
    default: new Date(),
  },
  clients:[
    {
      type: ObjectId,
      ref: "client",
    },

  ]
});

module.exports = Project = mongoose.model("project", projectSchema);
