export default class Todo {
  constructor({ _id, description, compleated }) {
    this._id = _id;
    this.description = description
    this.completed = compleated || false
  }

  get Template(){
  return `<li>${this.description}</li><i class="fa fa-trash text-right" aria-hidden="true" onclick="app.todoController.removeTodo('${this._id}')"></i>`
  }
}