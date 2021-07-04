import { useState } from "react";
export const AddTodo = ({ addNewTodo }) => {
  const [todo, setTodo] = useState("");
  const doAddTodo = () => {
    addNewTodo(todo);
    setTodo("");
  };
  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={() => doAddTodo()}>追加</button>
    </div>
  );
};
