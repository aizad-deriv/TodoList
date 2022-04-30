import { action, decorate, observable } from 'mobx';
import { nanoid } from 'nanoid';

let initialLists = [
  {
    id: nanoid(),
    title: '⚙️ Testing',
    todos: [],
    date_created: new Date().toLocaleDateString(),
    close: false,
  },
];

class ListStore {
  //observable
  constructor() {
    this.lists = initialLists;
    this.todos = initialLists.todos;
  }

  addList(title) {
    this.lists.push({
      id: nanoid(),
      title: title,
      todos: this.todos,
      date_created: new Date().toLocaleDateString(),
      close: false,
    });
  }

  deleteList(id) {
    // eslint-disable-next-line no-undef
    const deleteList = this.lists.filter((list) => list.id !== id);
    this.lists = deleteList;
  }

  addTodos(task) {
    this.todos.push({
      id: Math.random(),
      task: task,
      complete: false,
    });
  }

  deleteTodo(id) {
    const deleteNote = this.todos.filter((todo) => todo.id !== id);
    this.todos = deleteNote;
    console.log(this.todos);
  }
}

decorate(ListStore, {
  lists: observable,
  close: observable,
  todos: observable,
  complete: observable,
  addList: action.bound,
  deleteList: action.bound,
  addTodos: action.bound,
  deleteTodo: action.bound,
});

const listStore = new ListStore();
export default listStore;
