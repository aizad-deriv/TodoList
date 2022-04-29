import { decorate, observable, reaction, action, computed } from 'mobx';

let initialTodos = [
  {
    id: Math.random(),
    task: 'Open tabs to make yourself look busy',
    complete: false,
  },
  {
    id: Math.random(),
    task: 'Act like you know what youre doing',
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
    const newTodos = this.todos.filter((todo) => todo.id !== id);
    this.todos = newTodos;
  }

  get todoCount() {
    let count = this.todos.filter((todo) => todo.complete).length;
    let finalCount = count / this.todos.length;
    return finalCount;
  }
}

decorate(TodoStore, {
  todos: observable,
  complete: observable,
  addTodos: action.bound,
  deleteTodo: action.bound,
  todoCount: computed,
});

const storeInstance = new TodoStore();

reaction(
  () => JSON.stringify(storeInstance.todos),
  (json) => localStorage.setItem('todo-store', json)
);
export default storeInstance;
