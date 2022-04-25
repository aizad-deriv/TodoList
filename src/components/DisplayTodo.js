import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { StoreContext } from '..';
const DisplayTodo = observer(() => {
  const store = useContext(StoreContext);

  return (
    <ul>
      {store.todos.map((todo) => (
        <li key={todo.id} onClick={() => (todo.complete = !todo.complete)}>
          <p>{todo.task}</p>
          {todo.complete && <span>&nbsp;&nbsp;&nbsp;&#10004;</span>}
          <small onClick={() => store.deleteTodo(todo.id)}>&#10005;</small>
        </li>
      ))}
    </ul>
  );
});

export default DisplayTodo;
