import "./App.css";
import { Todos } from "./components/Todos";
import { AddTodo } from "./components/AddTodo";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/todos").then((res) => {
      setTodos(res.data.todos);
    });
  }, []);

  //todo追加
  const addNewTodo = (newTodo) => {
    let todo = { name: newTodo, done: false };
    axios
      .post("http://localhost:3001/todos/add", { todo })
      .then((res) => {
        setTodos([...todos, res.data.todo]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //todo削除
  const deleteTodo = (_id) => {
    axios
      .post("http://localhost:3001/todos/delete", { _id })
      .then((res) => {
        let newTodos = todos.filter((todo) => todo._id !== res.data._id);
        setTodos([...newTodos]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //todostatus変更
  const updateTodoStatus = (_id) => {
    let newTodo;
    todos.forEach((todo) => {
      if (todo._id === _id) {
        todo.done = !todo.done;
        newTodo = todo;
      }
    });
    axios
      .post("http://localhost:3001/todos/update", { newTodo })
      .then((res) => {
        let newTodos = todos.map((todo) => {
          if (res.data._id === todo._id) {
            return res.data;
          } else {
            return todo;
          }
        });
        setTodos([...newTodos]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <h1>todoList</h1>
      <Todos
        todos={todos}
        deleteTodo={deleteTodo}
        changeTodoStatus={updateTodoStatus}
      />
      <AddTodo addNewTodo={addNewTodo} />
    </div>
  );
}

export default App;
