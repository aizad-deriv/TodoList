import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { StoreContext } from '..';

const AddTodo = observer(() => {
  const store = useContext(StoreContext);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    if (input != '') {
      store.addTodos(input);
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
          maxLength="20"
        ></input>
        <button className="add-btn" type="submit">
          <small>&#xFF0B;</small>
        </button>
      </form>
    </>
  );
});

export default AddTodo;
