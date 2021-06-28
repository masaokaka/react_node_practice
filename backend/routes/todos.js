var express = require("express");
var router = express.Router();

const data = { todos: [] };

router.get("/", function (req, res, next) {
  res.json(data);
});

router.post("/add", function (req, res, next) {
  data.todos.push(req.body);
  res.json(data);
});

router.post("/update", function (req, res, next) {
  data.todos.forEach((todo) => {
    if (todo.id === req.body.id) {
      todo.done = !todo.done;
    }
  });
  console.log(data);
  res.json(data);
});

router.post("/delete", function (req, res, next) {
  let index = data.todos.findIndex((todo) => todo.id === req.body.id);
  data.todos.splice(index, 1);
  res.json(data);
});

module.exports = router;
