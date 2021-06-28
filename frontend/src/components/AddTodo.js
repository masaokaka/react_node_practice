import { useState } from "react";
export const AddTodo = ({ addNewTodo }) => {
  const [todo, setTodo] = useState("");
  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={() => addNewTodo(todo)}>追加</button>
    </div>
  );
};
