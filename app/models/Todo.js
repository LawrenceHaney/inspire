export default class Todo {
  constructor({ _id, description, compleated }) {
    this._id = _id;
    this.description = description
    this.completed = compleated || false
  }

  get Template(){
  return `<li>
  <input type="checkbox" ${this.completed} onclick="app.todoController.toggleTodoStatus('${this._id}')">
  ${this.description}
  <i class="fa fa-trash text-right" aria-hidden="true" onclick="app.todoController.removeTodo('${this._id}')"></i>
  </li>
  `
  }
}