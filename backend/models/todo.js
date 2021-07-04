//スキーマ
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  name: String,
  done: Boolean,
});

module.exports = mongoose.model("Todo", TodoSchema);
