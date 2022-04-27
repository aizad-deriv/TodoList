import { decorate, observable, reaction, action } from 'mobx';

let initialTodos = [
  {
    id: Math.random(),
    task: 'Do Stuff',
    complete: false,
  },
  {
    id: Math.random(),
    task: 'Do other stuff',
    complete: false,
  },
];

class TodoStore {
  // observable
  constructor() {
    this.todos = initialTodos;
  }
  // action
  setTodo(id, task, complete) {
    this.todos.id = id;
    this.todos.task = task;
    this.todos.complete = complete;
  }

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
}

decorate(TodoStore, {
  todos: observable,
  complete: observable,
  setTodo: action.bound,
  addTodos: action.bound,
  deleteTodo: action.bound,
});

const storeInstance = new TodoStore();
reaction(
  () => JSON.stringify(storeInstance.todos),
  (json) => localStorage.setItem('todo-store', json)
);
export default storeInstance;
