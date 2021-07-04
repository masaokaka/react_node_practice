export const Todos = ({ todos, deleteTodo, changeTodoStatus }) => {
  return (
    <ul style={{ listStyle: "none" }}>
      {todos !== undefined && todos.length !== 0 ? (
        todos.map((todo) => (
          <li key={todo._id}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => changeTodoStatus(todo._id)}
            />
            <span>{todo.name}</span>
            <button onClick={() => deleteTodo(todo._id)}>削除</button>
          </li>
        ))
      ) : (
        <div>Todoがありません</div>
      )}
    </ul>
  );
};
