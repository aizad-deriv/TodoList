import React from 'react';
import AddTodo from './components/AddTodo';
import DisplayLists from './components/DisplayLists';
import DisplayTodo from './components/DisplayTodo';
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
      <div className="header-container">
        <h1>Ezy Todo ✅</h1>
      </div>
      {/* <main className="content-container">
        <DisplayTodo />
      </main> */}
      {/* <div className="footer-container">
        <AddTodo />
      </div> */}
      <div>
        <DisplayLists />
      </div>
    </div>
  );
};

export default App;
