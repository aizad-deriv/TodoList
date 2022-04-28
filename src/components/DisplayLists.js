import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../store/RootStore';
import AddTodo from './AddTodo';
// import Todo from './Todo';
import DisplayTodo from './DisplayTodo';

const DisplayLists = () => {
  const { listStore } = useStores();
  return (
    <div>
      {listStore.lists.map((list) => (
        <div key={list.id}>
          <h2>{list.title}</h2>
          <small>{list.date_created}</small>
          <ul>
            {list.todos.map((todo) => (
              <DisplayTodo key={todo.id} todo={todo} />
            ))}
          </ul>
          <AddTodo />
        </div>
      ))}
    </div>
  );
};

export default observer(DisplayLists);
