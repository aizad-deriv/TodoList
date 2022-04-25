import React from 'react';
import AddTodo from './components/AddTodo';
import DisplayTodo from './components/DisplayTodo';

const App = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <DisplayTodo />
      <AddTodo />
    </div>
  );
};

export default App;
