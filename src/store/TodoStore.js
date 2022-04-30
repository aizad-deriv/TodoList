import { decorate, observable, reaction, action } from 'mobx';

let initialTodos = [
  {
    id: Math.random(),
    task: 'Test 1',
    complete: false,
  },
  {
    id: Math.random(),
    task: 'Test 2',
    complete: false,
  },
];

class TodoStore {
  // observable
  constructor() {
    this.todos = initialTodos;
  }
  // action
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

decorate(TodoStore, {
  todos: observable,
  complete: observable,
  addTodos: action.bound,
  deleteTodo: action.bound,
});

// const storeInstance = new TodoStore();
// reaction(
//   () => JSON.stringify(storeInstance.todos),
//   (json) => localStorage.setItem('todo-store', json)
// );
// export default storeInstance;

const todoStore = new TodoStore();
export default todoStore;
