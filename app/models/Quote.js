export default class Quote {
  constructor({data}){
    this.author = data.quote.author
    this.body= data.quote.body
    this.id= data.quote.id
    this.url= data.quote.url
  }

  get Template(){
return `<h1 class="text-center text-light text-shadow quote">${this.body}</h1>
        <h6 class="hide text-center text-light text-shadow">${this.author}</h6>`
  }

}