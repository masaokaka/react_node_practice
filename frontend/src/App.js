import "./App.css";
import { Todos } from "./components/Todos";
import { AddTodo } from "./components/AddTodo";
import { useEffect, useState } from "react";

const createRandomId = () => {
  return Math.random().toString(32).substring(2);
};

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);

  //todo追加
  const addNewTodo = (todo) => {
    let body = { id: createRandomId(), name: todo, done: false };
    fetch("/todos/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => console.log(res))
      .then((data) => {
        console.log(data);
        setTodos([...todos, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //todo削除
  const deleteTodo = (id) => {
    fetch("/todos/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTodos([...data.todos]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //todostatus変更
  const changeTodoStatus = (id) => {
    fetch("/todos/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTodos([...data.todos]);
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
        changeTodoStatus={changeTodoStatus}
      />
      <AddTodo addNewTodo={addNewTodo} />
    </div>
  );
}

export default App;
