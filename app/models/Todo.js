export default class Todo {
  constructor({ id, description, compleated }) {
    this.id = id;
    this.description = description
    this.completed = compleated || false
  }

  get Template(){
  return `<li>${this.description}</li><i class="fa fa-trash text-right" aria-hidden="true" onclick="app.todosController.removeTodo('${this.id}')></i>`
  }
}