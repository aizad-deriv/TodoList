import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { useStores } from '../store/RootStore';

const AddTodo = observer(() => {
  const { todoStore } = useStores();
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    if (input !== '') {
      todoStore.addTodos(input);
    }
    setInput('');
    e.preventDefault();
  };

  return (
    <>
      <form className="add-todo" onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add todo"
          maxLength="45"
        ></input>
        <button className="add-btn" type="submit">
          <small>&#xFF0B;</small>
        </button>
      </form>
      <div className="footer-text">
        <small>Max character input: 45</small>
      </div>
    </>
  );
});

export default AddTodo;
