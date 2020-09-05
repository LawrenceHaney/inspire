export default class Todo {
  constructor({ _id, description, compleated }) {
    this._id = _id;
    this.description = description
    this.completed = compleated || false
  }

  get Template(){
    if(this.completed == false){

      return `<li>
      <input type="checkbox" onclick="app.todoController.toggleTodoStatus('${this._id}')">
      <p class="text-right">${this.description}<p/><span>
      <i class="fa fa-trash text-right" aria-hidden="true" onclick="app.todoController.removeTodo('${this._id}')"></i>
      </span>
      </li>
      `
    }
    return `<li>
      <input type="checkbox" onclick="app.todoController.toggleTodoStatus('${this._id}')" checked>
      <s class="text-right">${this.description}</s><span>
      <i class="fa fa-trash text-right" aria-hidden="true" onclick="app.todoController.removeTodo('${this._id}')"></i>
      </span>
      </li>
      ` 
  }
  
}