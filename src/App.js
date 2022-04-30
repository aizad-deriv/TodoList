import React from 'react';
import AddTodo from './components/AddTodo';
import DisplayLists from './components/DisplayLists';
// import './sass/main.scss';

const App = () => {
  // useEffect(() => {
  //   let json = localStorage.getItem('todo-store');
  //   if (json) {
  //     json = JSON.parse(json);
  //     store.todos.replace(json);
  //   }
  //   eslint-disable-next-line
  // }, []);

  return (
    <div className="main-container">
      <header className="header-container">
        <h1>Ezy Todo ✅</h1>
      </header>
      <main>
        <DisplayLists />
      </main>
      <footer>
        <AddTodo />
      </footer>
    </div>
  );
};

export default App;
