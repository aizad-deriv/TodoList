import { observer } from 'mobx-react-lite';
import React from 'react';

const DisplayTodo = ({ list }) => {
  return (
    <ul className="todo-container">
      {list.todos.map((todo) => (
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
          <small onClick={() => list.deleteTodo(todo.id)}>&#10005;</small>
        </li>
      ))}
    </ul>
  );
};

export default observer(DisplayTodo);
