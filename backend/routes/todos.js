var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
const { Schema } = mongoose;

//スキーマ
const TodoSchema = new Schema({
  id: String,
  name: String,
  done: Boolean,
});

//モデル
let TodoModel = mongoose.model("todo", TodoSchema);

router.get("/", function (req, res, next) {
  TodoModel.find({}, (err, docs) => {
    res.json(docs);
  });
});

router.post("/add", function (req, res, next) {
  let todo = new TodoModel(req.body);
  todo.save().then((todo) => {
    res.json(todo);
  });
});

router.post("/update", function (req, res, next) {
  data.todos.forEach((todo) => {
    if (todo.id === req.body.id) {
      todo.done = !todo.done;
    }
  });
  res.json(data);
});

router.post("/delete", function (req, res, next) {
  let index = data.todos.findIndex((todo) => todo.id === req.body.id);
  data.todos.splice(index, 1);
  res.json(data);
});

module.exports = router;
