import React from 'react';
import { useStores } from '../store/RootStore';
import AddTodo from './AddTodo';

const DisplayLists = () => {
  const { listStore } = useStores();
  return (
    <div>
      {listStore.lists.map((list) => (
        <div key={list.id}>
          <h2>{list.title}</h2>
          <DisplayLists list={list} />
          <AddTodo />
        </div>
      ))}
    </div>
  );
};

export default DisplayLists;
