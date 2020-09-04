export default class Quote {
  constructor({data}){
    this.author = data.quote.author
    this.body= data.quote.body
    this.id= data.quote.id
    this.url= data.quote.url
  }

  get Template(){
return `<h1 class="text-center text-light">${this.body}</h1>`
  }

}