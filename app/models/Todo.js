export default class Todo {
  constructor({ _id, description, completed }) {
    this._id = _id;
    this.description = description
    this.completed = completed
  }

  get Template(){
    if(this.completed == false){

      return `<li class="row text-light text-shadow ">
      <input type="checkbox" onchange="app.todoController.toggleTodoStatus('${this._id}')" class="col-3 align-middle">
      <p class="col-6 align-middle">${this.description}</p>
      <i class="fa fa-trash col-3 align-middle" aria-hidden="true" onclick="app.todoController.removeTodo('${this._id}')"></i>
      </li>
      `
    }
    return `<li class="row text-light text-shadow">
      <input type="checkbox" onchange="app.todoController.toggleTodoStatus('${this._id}')" checked class="col-3 align-middle">
      <s class="col-6 align-middle my-2">${this.description}</s>
      <i class="fa fa-trash col-3 align-middle" aria-hidden="true" onclick="app.todoController.removeTodo('${this._id}')"></i>
      </li>
      ` 
  }
  
}