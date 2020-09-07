import { ProxyState } from "../AppState.js";
import { api } from "../Services/AxiosService.js";
import Todo from "../models/Todo.js";

// DONE you will need to change 'YOURNAME' to your actual name or all requests will be rejected
let url = 'lhaney/todos/'


class TodoService {
  async getTodos() {
    let res = await api.get(url);
    //DONE Handle this response from the server
    ProxyState.todos = res.data.data.map(t => new Todo(t))
  }

  async addTodo(todo) {
    let res = await api.post(url, todo);
    //DONE Handle this response from the server
    let task = new Todo(res.data.data)
    ProxyState.todos = [... ProxyState.todos, task]
  }

  async toggleTodoStatus(todoId) {
    let todo = ProxyState.todos.find(t => t._id == todoId);
    //DONE Make sure that you found a todo,
    if(!todo){
      console.error("I can't find that Dave")
    }
    console.log("this runs")
    todo.completed = !todo.completed

    let res = await api.put(`lhaney/todos/${todo._id}`, { completed: todo.completed });
    //DONe how do you trigger this change
    ProxyState.todos = ProxyState.todos
  }

  async removeTodo(todoId) {
    let com =`${url}${todoId}`
    await api.delete(com)
    ProxyState.todos = ProxyState.todos.filter(i => i._id != todoId)
  }
}

const todoService = new TodoService();
export default todoService;