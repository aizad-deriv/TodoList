import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { StoreContext } from '..';
const DisplayTodo = observer(() => {
  const store = useContext(StoreContext);

  return (
    <ul className="todo-container">
      {store.todos.map((todo) => (
        <li
          key={todo.id}
          onClick={() => (todo.complete = !todo.complete)}
          className="todo-row"
        >
          {todo.complete ? (
            <div className="todo">
              <p className="success">{todo.task}</p>
              <span style={{ color: '#aad576' }}>
                &nbsp;&nbsp;&nbsp;&#10004;
              </span>
            </div>
          ) : (
            <div className="todo">
              <p>{todo.task}</p>
            </div>
          )}
          <small onClick={() => store.deleteTodo(todo.id)}>&#10005;</small>
        </li>
      ))}
    </ul>
  );
});

export default DisplayTodo;
