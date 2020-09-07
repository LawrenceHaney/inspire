export default class Todo {
  constructor({ _id, description, completed }) {
    this._id = _id;
    this.description = description
    this.completed = completed
  }

  get Template(){
    if(this.completed == false){

      return `<li class="row text-light text-shadow">
      <input type="checkbox" onchange="app.todoController.toggleTodoStatus('${this._id}')" class="col-3">
      <p class="col-6">${this.description}</p>
      <i class="fa fa-trash col-3" aria-hidden="true" onclick="app.todoController.removeTodo('${this._id}')"></i>
      </li>
      `
    }
    return `<li class="row text-light text-shadow">
      <input type="checkbox" onchange="app.todoController.toggleTodoStatus('${this._id}')" checked class="col-3">
      <s class="col-6">${this.description}</s>
      <i class="fa fa-trash col-3" aria-hidden="true" onclick="app.todoController.removeTodo('${this._id}')"></i>
      </li>
      ` 
  }
  
}