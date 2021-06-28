const mongoose = require("mongoose");

//mongodbのポートの読み込みと、mongoDBのどこのコレクションにアクセスするかを書く
mongoose.connect("mongodb://127.0.0.1:27017/todos", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

module.exports = mongoose;
