import { ProxyState } from "../AppState.js";
import { api } from "../Services/AxiosService.js";
import Todo from "../Models/Todo.js";

// DONE you will need to change 'YOURNAME' to your actual name or all requests will be rejected
let url = 'lhaney/todos/'


class TodoService {
  async getTodos() {
    let res = await api.get(url);
    //TODO Handle this response from the server
    ProxyState.todos = res.data.data.map(t => new Todo(t))
  }

  async addTodo(todo) {
    let res = await api.post(url, todo);
    //TODO Handle this response from the server
    let task = new Todo(res.data.data)
    ProxyState.todos = [... ProxyState.todos, task]
  }

  async toggleTodoStatus(todoId) {
    let todo = await ProxyState.todos.find(todo => todo._id == todoId);
    //TODO Make sure that you found a todo,
    if(!todo){
      console.error("I can't find that Dave")
    }
    todo.completed = !todo.completed

    let res = await api.put(url + todoId, {compleated: todo.completed});
    console.log(ProxyState.todos);
    //TODO how do you trigger this change
  }

  async removeTodo(todoId) {
    let com =`${url}${todoId}`
    console.log(ProxyState.todos)
    await api.delete(com)
    ProxyState.todos = ProxyState.todos.filter(i => i._id != todoId)
  }
}

const todoService = new TodoService();
export default todoService;