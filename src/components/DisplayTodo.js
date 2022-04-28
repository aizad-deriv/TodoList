import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { StoreContext } from '..';
const DisplayTodo = observer(() => {
  const store = useContext(StoreContext);
  if (store.todos.length === 0) {
    return (
      <div className="nothing-todo">
        <div className="nothing">
          <img
            src="https://media.giphy.com/media/26ufnwz3wDUli7GU0/giphy.gif"
            width="200"
            height="112.4"
            alt="nothing-gif"
          />
          <div>
            <h2>Nothing todo?</h2>
            <p>Create a new todo!</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <ul className="todo-container">
      {store.todos.map((todo) => (
        <li
          key={todo.id}
          onClick={() => {
            todo.complete = !todo.complete;
          }}
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
