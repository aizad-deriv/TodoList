import { action, decorate, observable } from 'mobx';
import storeInstance from './TodoStore';

let initialLists = [
  {
    id: Math.random(),
    title: '⚙️ Testing',
    todos: [storeInstance.todos],
    date_created: new Date().toLocaleDateString(),
    close: false,
  },
];

class ListStore {
  //observable
  constructor() {
    this.lists = initialLists;
  }

  addList(title) {
    this.lists.push({
      id: Math.random(),
      title: title,
      todos: [storeInstance.addTodos()],
      date_created: new Date().toLocaleDateString(),
      close: false,
    });
  }

  deleteList() {
    // eslint-disable-next-line no-undef
    const deleteList = this.lists.filter((list) => list.id !== id);
    this.lists = deleteList;
  }
}

decorate(ListStore, {
  lists: observable,
  close: observable,
  addList: action.bound,
  deleteList: action.bound,
});

export default ListStore;
