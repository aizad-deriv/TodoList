import { observer } from 'mobx-react';
import React from 'react';
import { useStores } from '../store/RootStore';

const Todo = ({ todo }) => {
  const { todoStore } = useStores();
  return (
    <li key={todo.id}>
      {todo?.complete ? (
        <div className="todo">
          <p className="success">{todo?.task}</p>
          <span style={{ color: '#aad576' }}>&nbsp;&nbsp;&nbsp;&#10004;</span>
        </div>
      ) : (
        <div className="todo">
          <p>{todo?.task}</p>
          <button onClick={() => todoStore.deleteTodo(todo?.id)}>
            &#10005;
          </button>
        </div>
      )}
    </li>
  );
};

export default observer(Todo);
