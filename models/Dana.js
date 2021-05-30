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
});

module.exports = mongoose.model("Dana", danaSchema);
