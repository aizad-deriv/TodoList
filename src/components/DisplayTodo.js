import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStores } from '../store/RootStore';

const DisplayTodo = ({ todo }) => {
  const { todoStore } = useStores();

  return (
    <li onClick={() => (todo.complete = !todo.complete)} className="todo-row">
      {todo.complete ? (
        <div className="todo">
          <p className="success">{todo?.task}</p>
          <span style={{ color: '#aad576' }}>&nbsp;&nbsp;&nbsp;&#10004;</span>
        </div>
      ) : (
        <div className="todo">
          <p>{todo.task}</p>
        </div>
      )}
      <small
        onClick={() => {
          todoStore.deleteTodo(todo.id);
        }}
      >
        &#10005;
      </small>
    </li>
  );
};

export default observer(DisplayTodo);
