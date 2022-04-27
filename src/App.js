import React, { useContext, useEffect } from 'react';
import { StoreContext } from '.';
import AddTodo from './components/AddTodo';
import DisplayTodo from './components/DisplayTodo';
import './sass/main.scss';

const App = () => {
  const store = useContext(StoreContext);
  useEffect(() => {
    let json = localStorage.getItem('todo-store');
    if (json) {
      json = JSON.parse(json);
      store.todos.replace(json);
    }
    console.log(store.todos);
  }, []);

  return (
    <div className="main-container">
      <div className="header-container">
        <h1>Ezy Todo ✅</h1>
        <h2></h2>
      </div>
      <main className="content-container">
        <DisplayTodo />
      </main>
      <div className="footer-container">
        <AddTodo />
      </div>
    </div>
  );
};

export default App;
