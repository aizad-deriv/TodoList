import { decorate, observable, action } from 'mobx';

// class TodoList {
//   list = [{
//       id: Math.random(),
//     title: 'Test',
//     todos = TodoStore.todos,
//     date: new Date().toLocaleDateString(),
//     completeList: false
//   }]
// }

class TodoStore {
  // observable
  todos = [
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

  // action
  addTodos(task) {
    this.todos.push({
      id: Math.random(),
      task,
      complete: false,
    });
  }

  deleteTodo(id) {
    const newTodos = this.todos.filter((todo) => todo.id !== id);
    this.todos = newTodos;
    console.log(this.todos);
  }
}

decorate(TodoStore, {
  todos: observable,
  complete: observable,
  addTodos: action.bound,
  deleteTodo: action.bound,
});

const storeInstance = new TodoStore();
export default storeInstance;
