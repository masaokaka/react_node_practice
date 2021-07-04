var express = require("express");
var router = express.Router();
const Todo = require("../models/todo");
const mongoose = require("mongoose");

const cors = require("cors");

router.use(
  cors({
    origin: "http://localhost:3000", //アクセス許可するオリジン
    credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
    optionsSuccessStatus: 200, //レスポンスstatusを200に設定
  })
);

router.get("/", (req, res, next) => {
  Todo.find({}).then((todos) => {
    res.header("Content-Type", "application/json; charset=utf-8");
    res.send({ todos });
  });
});

router.post("/add", (req, res, next) => {
  let newTodo = {
    ...req.body.todo,
    _id: mongoose.Types.ObjectId(),
  };
  const todo = new Todo(newTodo);
  todo.save().then((todo) => {
    res.header("Content-Type", "application/json; charset=utf-8");
    res.send({ todo });
  });
});

router.post("/update", (req, res, next) => {
  const newTodo = req.body.newTodo;
  console.log(req.body)
  //new Trueを指定すると、thenのresで更新後の値を返してくれる
  Todo.findByIdAndUpdate(newTodo._id, newTodo, { new: true }).then(updatedTodo => {
    res.header("Content-Type", "application/json; charset=utf-8");
    console.log(updatedTodo)
    res.send(updatedTodo);
  })
});

router.post("/delete", (req, res, next) => {
  const id = req.body.id;
  Todo.findOneAndDelete({ id: id }).then((doc) => {
    console.log(doc);
    res.header("Content-Type", "application/json; charset=utf-8");
    res.send(doc);
  });
});

module.exports = router;
