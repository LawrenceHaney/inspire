import todoService from "../Services/TodoService.js";
import { ProxyState } from "../AppState.js";

//Done Create the draw function
function _drawTodos() { 
  let count = 0
  ProxyState.todos.forEach(t => {if(t.completed == false) count ++})
  let template = `<h4 class="m-2 text-light text-shadow"> Tasks remaining: ${count} <h4/>`
  ProxyState.todos.forEach(t => template += t.Template)
  document.getElementById("task").innerHTML= template
}

export default class TodoController {
  constructor() {
    //DONE Remember to register your subscribers
    this.getTodos();
    ProxyState.on("todos", _drawTodos)
  }

  getTodos() {
    try {
      todoService.getTodos()
    } catch (error) {
      console.error(error)
    }
  }
  addTodo(e) {
    e.preventDefault();
    var form = e.target;
    //DONE build the todo object from the data that comes into this method
    var todo = {description:form.description.value};
    try {
      todoService.addTodo(todo);
    } catch (error) {
      console.error(error)
    }
  }

  /**
 * This method takes in an id of the Todo that should be togggled as complete
 * @param {string} todoId 
 */
  toggleTodoStatus(todoId) {
    try {
      todoService.toggleTodoStatus(todoId);
    } catch (error) {
      console.error(error)
    }
    _drawTodos()
  }

  /**
   * This method takes in an id of the Todo that should be removed
   * @param {string} todoId 
   */
  removeTodo(todoId) {
    try {
      todoService.removeTodo(todoId);
    } catch (error) {
      console.error(error)
    }
  }
}