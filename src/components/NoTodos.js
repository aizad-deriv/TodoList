import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { StoreContext } from '..';

const NoTodos = () => {
  const store = useContext(StoreContext);
  if (store.todos.length === 0) {
    return (
      <div className="modal-container">
        <div className="modal">
          <img
            src="https://media.giphy.com/media/26ufnwz3wDUli7GU0/giphy.gif"
            width="200"
            height="112.4"
            alt="modal-img"
          />
          <div className="text-container">
            <h2>Nothing todo?</h2>
            <p>Create a new todo!</p>
          </div>
        </div>
      </div>
    );
  }
};

export default observer(NoTodos);
