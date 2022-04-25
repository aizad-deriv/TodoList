import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { StoreContext } from '..';

const AddTodo = observer(() => {
  const store = useContext(StoreContext);
  console.log(store);

  const [input, setInput] = useState('');

  return (
    <form
      onSubmit={(e) => {
        store.addTodos(input);
        setInput('');
        e.preventDefault();
      }}
    >
      <input
        value={store.todos.task}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button type="submit">Add Task</button>
    </form>
  );
});

export default AddTodo;
