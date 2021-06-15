const mongoose = require("mongoose");
const { Schema } = mongoose;

const danaSchema = new Schema({
  question1: String,
  question2: String,
  question3: String,
  question4: String,
  question5: String,
  question6: Number,
  question7: String,
  question8: String,
  question9: String,
  gambar: {
    data: Buffer,
    contentType: String,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  donasi: {
    type: Number,
    default: 0,
  },
  verified: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Dana", danaSchema);
