export const Todos = ({ todos, deleteTodo,changeTodoStatus }) => {
  return (
    <ul>
      {todos !== undefined && todos.length !== 0 ? (
        todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.done} onChange={()=>changeTodoStatus(todo.id) }/>
            <span>{todo.name}</span>
            <button onClick={() => deleteTodo(todo.id)}>削除</button>
          </li>
        ))
      ) : (
        <div>Todoがありません</div>
      )}
    </ul>
  );
};
