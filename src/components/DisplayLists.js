import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import AddTodo from './AddTodo';
// import Todo from './Todo';
import DisplayTodo from './DisplayTodo';
import { StoreContext } from '..';

const DisplayLists = () => {
  const store = useContext(StoreContext);
  return (
    <div>
      {store.lists.map((list) => (
        <div key={list.id}>
          <h2>{list.title}</h2>
          <small>{list.date_created}</small>
          <DisplayTodo list={list} />
        </div>
      ))}
    </div>
  );
};

export default observer(DisplayLists);
