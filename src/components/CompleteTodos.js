import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import { StoreContext } from '..';

const CompleteTodos = () => {
  const store = useContext(StoreContext);
  if (store.todoCount === 1) {
    return (
      <div className="complete-todo">
        <h2>All done! 🎉</h2>
      </div>
    );
  }
};

export default observer(CompleteTodos);
