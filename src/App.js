import React, { useContext, useEffect } from 'react';
import { StoreContext } from '.';
import AddTodo from './components/AddTodo';
import DisplayTodo from './components/DisplayTodo';
import NoTodos from './components/NoTodos';
import './sass/main.scss';

const App = () => {
  const store = useContext(StoreContext);
  useEffect(() => {
    let json = localStorage.getItem('todo-store');
    if (json) {
      json = JSON.parse(json);
      store.todos.replace(json);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="main-container">
      <div className="header-container">
        <h1>Ezy Todo ✅</h1>
      </div>
      <main className="content-container">
        <DisplayTodo />
        <NoTodos />
      </main>
      <footer>
        <AddTodo />
      </footer>
    </div>
  );
};

export default App;
